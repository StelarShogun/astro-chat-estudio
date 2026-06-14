import { useEffect, useMemo, useState } from 'react';
import {
  examPhotoSets,
  fileTheory,
  methodRules,
  oralTemplate,
  questionBank,
  theoryModules,
} from '../data/course-content';
import { sourceDocuments } from '../data/source-manifest';

const sections = [
  { id: 'inicio', label: 'Método', short: 'M' },
  { id: 'transcripciones', label: 'Transcripciones', short: 'T' },
  { id: 'obsidian', label: 'Notas', short: 'N' },
  { id: 'preguntas', label: 'Preguntas', short: 'P' },
  { id: 'examenes', label: 'Exámenes', short: 'E' },
  { id: 'teoria', label: 'Teoría guía', short: 'G' },
];

const transcriptionDocs = sourceDocuments.filter((doc) => doc.kind === 'Transcripciones');
const obsidianDocs = sourceDocuments.filter((doc) => doc.kind === 'Obsidian');

function matchesQuery(values, query) {
  if (!query) return true;
  return values.join(' ').toLowerCase().includes(query);
}

function getSourceDocs(section) {
  if (section === 'transcripciones') return transcriptionDocs;
  if (section === 'obsidian') return obsidianDocs;
  return sourceDocuments;
}

function getInitialDocId(section) {
  return getSourceDocs(section)[0]?.id ?? sourceDocuments[0]?.id;
}

function resolveObsidianAsset(src) {
  if (!src) return '';
  if (/^(https?:)?\/\//.test(src) || src.startsWith('/')) return src;
  return `/source-material/obsidian/${src.replace(/^\.?\//, '')}`;
}

function renderInline(text, keyPrefix = 'inline') {
  const pattern =
    /!\[\[([^\]]+)\]\]|!\[([^\]]*)\]\(([^)]+)\)|\[\[([^|\]#]+)(?:#[^|\]]+)?(?:\|([^\]]+))?\]\]|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;
  const nodes = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      const [asset, label] = match[1].split('|');
      nodes.push(
        <img
          key={`${keyPrefix}-${match.index}`}
          className="markdown-inline-image"
          src={resolveObsidianAsset(asset.trim())}
          alt={(label ?? asset).trim()}
        />,
      );
    } else if (match[3]) {
      nodes.push(
        <img
          key={`${keyPrefix}-${match.index}`}
          className="markdown-inline-image"
          src={resolveObsidianAsset(match[3].trim())}
          alt={match[2] || match[3]}
        />,
      );
    } else if (match[4]) {
      nodes.push(
        <span key={`${keyPrefix}-${match.index}`} className="wiki-link">
          {match[5] || match[4]}
        </span>,
      );
    } else if (match[7]) {
      nodes.push(
        <a key={`${keyPrefix}-${match.index}`} href={match[7]} target="_blank" rel="noreferrer">
          {match[6]}
        </a>,
      );
    } else if (match[8]) {
      nodes.push(<code key={`${keyPrefix}-${match.index}`}>{match[8]}</code>);
    } else if (match[9]) {
      nodes.push(<strong key={`${keyPrefix}-${match.index}`}>{match[9]}</strong>);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function extractExcalidrawData(text) {
  try {
    const parsed = JSON.parse(text);
    if (parsed?.type === 'excalidraw') return { data: parsed, markdown: '' };
  } catch {
    // The document can be regular Markdown with an embedded Excalidraw JSON block.
  }

  let data = null;
  const markdown = text.replace(/```json\s*([\s\S]*?)```/g, (fullMatch, jsonText) => {
    if (data) return fullMatch;
    try {
      const parsed = JSON.parse(jsonText);
      if (parsed?.type === 'excalidraw') {
        data = parsed;
        return '';
      }
    } catch {
      return fullMatch;
    }
    return fullMatch;
  });

  return { data, markdown };
}

function wrapSvgText(text, width, fontSize) {
  const maxChars = Math.max(10, Math.floor((width || 220) / Math.max(7, fontSize * 0.56)));
  const wrapped = [];
  for (const line of String(text || '').split('\n')) {
    const words = line.split(/\s+/);
    let current = '';
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (next.length > maxChars && current) {
        wrapped.push(current);
        current = word;
      } else {
        current = next;
      }
    }
    wrapped.push(current);
  }
  return wrapped;
}

function readableColor(color) {
  if (!color || color === 'transparent') return '#dbe7f3';
  return ['#000000', '#1e1e1e', '#2b2b2b'].includes(color.toLowerCase()) ? '#edf2f8' : color;
}

function ExcalidrawView({ data }) {
  const elements = (data?.elements ?? []).filter((element) => !element.isDeleted);
  const drawable = elements.filter((element) =>
    ['frame', 'rectangle', 'text', 'arrow', 'line'].includes(element.type),
  );

  if (drawable.length === 0) return null;

  const bounds = drawable.reduce(
    (box, element) => {
      const points = element.points ?? [[0, 0]];
      const pointXs = points.map((point) => element.x + point[0]);
      const pointYs = points.map((point) => element.y + point[1]);
      const xs = [element.x, element.x + (element.width || 0), ...pointXs];
      const ys = [element.y, element.y + (element.height || 0), ...pointYs];
      return {
        minX: Math.min(box.minX, ...xs),
        minY: Math.min(box.minY, ...ys),
        maxX: Math.max(box.maxX, ...xs),
        maxY: Math.max(box.maxY, ...ys),
      };
    },
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );
  const padding = 160;
  const viewBox = `${bounds.minX - padding} ${bounds.minY - padding} ${bounds.maxX - bounds.minX + padding * 2} ${
    bounds.maxY - bounds.minY + padding * 2
  }`;

  return (
    <div className="excalidraw-stage">
      <svg viewBox={viewBox} role="img" aria-label="Mapa de estudio">
        <defs>
          <marker id="arrow-head" markerWidth="18" markerHeight="18" refX="14" refY="6" orient="auto">
            <path d="M2,2 L14,6 L2,10 Z" fill="#dbe7f3" />
          </marker>
        </defs>
        {drawable.map((element) => {
          const stroke = readableColor(element.strokeColor);
          const fill =
            element.backgroundColor && element.backgroundColor !== 'transparent'
              ? element.backgroundColor
              : element.type === 'frame'
                ? 'rgba(255,255,255,0.02)'
                : 'transparent';

          if (element.type === 'text') {
            const fontSize = element.fontSize || 28;
            const lines = wrapSvgText(element.text, element.width, fontSize);
            return (
              <text
                key={element.id}
                x={element.x}
                y={element.y + fontSize}
                fill={stroke}
                fontSize={fontSize}
                fontFamily="Inter, sans-serif"
                fontWeight={element.fontWeight || 700}
              >
                {lines.map((line, index) => (
                  <tspan key={`${element.id}-${index}`} x={element.x} dy={index === 0 ? 0 : fontSize * 1.25}>
                    {line}
                  </tspan>
                ))}
              </text>
            );
          }

          if (element.type === 'arrow' || element.type === 'line') {
            const points = (element.points ?? []).map((point) => `${element.x + point[0]},${element.y + point[1]}`);
            return (
              <polyline
                key={element.id}
                points={points.join(' ')}
                fill="none"
                stroke={stroke}
                strokeWidth={Math.max(2, element.strokeWidth || 2)}
                markerEnd={element.type === 'arrow' ? 'url(#arrow-head)' : undefined}
              />
            );
          }

          return (
            <g key={element.id}>
              <rect
                x={element.x}
                y={element.y}
                width={Math.abs(element.width || 1)}
                height={Math.abs(element.height || 1)}
                rx={element.type === 'frame' ? 22 : 10}
                fill={fill}
                stroke={stroke}
                strokeWidth={Math.max(2, element.strokeWidth || 2)}
                opacity={(element.opacity ?? 100) / 100}
              />
              {element.type === 'frame' && element.name && (
                <text
                  x={element.x + 36}
                  y={element.y + 58}
                  fill="#f4f7fb"
                  fontSize="38"
                  fontFamily="Inter, sans-serif"
                  fontWeight="900"
                >
                  {element.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function isTableStart(lines, index) {
  return (
    lines[index]?.includes('|') &&
    /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[index + 1] ?? '')
  );
}

function MarkdownContent({ text }) {
  const { data, markdown } = useMemo(() => extractExcalidrawData(text), [text]);
  const cleanText = markdown.replace(/^---[\s\S]*?---\s*/, '');
  const lines = cleanText.split(/\r?\n/);
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const codeFence = line.match(/^```(\w+)?/);
    if (codeFence) {
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(
        <pre className="markdown-code" key={`code-${index}`}>
          <code>{code.join('\n')}</code>
        </pre>,
      );
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const HeadingTag = `h${heading[1].length}`;
      blocks.push(
        <HeadingTag key={`heading-${index}`}>{renderInline(heading[2], `heading-${index}`)}</HeadingTag>
      );
      index += 1;
      continue;
    }

    if (/^\s*---+\s*$/.test(line)) {
      blocks.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    if (isTableStart(lines, index)) {
      const tableLines = [];
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        tableLines.push(lines[index]);
        index += 1;
      }
      const [headerLine, , ...rowLines] = tableLines;
      const headers = headerLine.split('|').map((cell) => cell.trim()).filter(Boolean);
      const rows = rowLines.map((row) => row.split('|').map((cell) => cell.trim()).filter(Boolean));
      blocks.push(
        <div className="markdown-table-wrap" key={`table-${index}`}>
          <table>
            <thead>
              <tr>
                {headers.map((cell, cellIndex) => (
                  <th key={`th-${cellIndex}`}>{renderInline(cell, `th-${index}-${cellIndex}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`tr-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`td-${rowIndex}-${cellIndex}`}>
                      {renderInline(cell, `td-${index}-${rowIndex}-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^\s*>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^\s*>\s?/, ''));
        index += 1;
      }
      blocks.push(<blockquote key={`quote-${index}`}>{renderInline(quote.join(' '), `quote-${index}`)}</blockquote>);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items = [];
      const itemPattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      while (index < lines.length && itemPattern.test(lines[index])) {
        items.push(lines[index].replace(itemPattern, ''));
        index += 1;
      }
      const ListTag = ordered ? 'ol' : 'ul';
      blocks.push(
        <ListTag key={`list-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`li-${itemIndex}`}>{renderInline(item, `li-${index}-${itemIndex}`)}</li>
          ))}
        </ListTag>,
      );
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,6})\s+/.test(lines[index]) &&
      !/^```/.test(lines[index]) &&
      !/^\s*>\s?/.test(lines[index]) &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !isTableStart(lines, index)
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{renderInline(paragraph.join(' '), `p-${index}`)}</p>);
  }

  return (
    <div className="markdown-body">
      {data && <ExcalidrawView data={data} />}
      {blocks}
    </div>
  );
}

function DocumentReader({ section, query }) {
  const docs = getSourceDocs(section);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredDocs = useMemo(
    () =>
      docs.filter((doc) =>
        matchesQuery([doc.title, doc.kind, doc.format, doc.sourcePath], normalizedQuery),
      ),
    [docs, normalizedQuery],
  );
  const [activeDocId, setActiveDocId] = useState(getInitialDocId(section));
  const [documentText, setDocumentText] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const nextDoc = getSourceDocs(section)[0];
    setActiveDocId(nextDoc?.id ?? sourceDocuments[0]?.id);
  }, [section]);

  const activeDoc =
    filteredDocs.find((doc) => doc.id === activeDocId) ??
    docs.find((doc) => doc.id === activeDocId) ??
    filteredDocs[0] ??
    docs[0];

  useEffect(() => {
    if (!activeDoc) return;
    let cancelled = false;
    setStatus('loading');
    fetch(activeDoc.path)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No se pudo cargar ${activeDoc.path}`);
        }
        return response.text();
      })
      .then((text) => {
        if (!cancelled) {
          setDocumentText(text);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDocumentText('');
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeDoc]);

  const outline = useMemo(() => {
    if (!documentText) return [];
    return documentText
      .split(/\r?\n/)
      .filter((line) => /^#{1,4}\s+/.test(line))
      .slice(0, 18)
      .map((line) => line.replace(/^#{1,4}\s+/, '').trim());
  }, [documentText]);

  return (
    <section className="source-workbench">
      <aside className="doc-list" aria-label="Documentos fuente">
        <div className="mini-heading">
          <span>{section === 'transcripciones' ? 'Transcripciones' : 'Notas'}</span>
          <strong>{filteredDocs.length}</strong>
        </div>
        <div className="doc-buttons">
          {filteredDocs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              className={activeDoc?.id === doc.id ? 'active' : ''}
              onClick={() => setActiveDocId(doc.id)}
            >
              <span>{doc.format === 'excalidraw' ? 'Mapa' : doc.kind === 'Obsidian' ? 'Nota' : 'Transcripción'}</span>
              <strong>{doc.title}</strong>
            </button>
          ))}
        </div>
      </aside>

      <article className="doc-viewer">
        {activeDoc && (
          <>
            <header className="doc-toolbar">
              <div>
                <p className="eyebrow">{activeDoc.format === 'excalidraw' ? 'Mapa' : activeDoc.kind === 'Obsidian' ? 'Nota' : 'Transcripción'}</p>
                <h2>{activeDoc.title}</h2>
              </div>
              <a href={activeDoc.path} target="_blank" rel="noreferrer">
                Abrir original
              </a>
            </header>

            {outline.length > 0 && (
              <nav className="doc-outline" aria-label="Encabezados detectados">
                {outline.map((heading, headingIndex) => (
                  <span key={`${heading}-${headingIndex}`}>{heading}</span>
                ))}
              </nav>
            )}

            {status === 'loading' && <p className="loading-note">Cargando...</p>}
            {status === 'error' && (
              <p className="error-note">No se pudo cargar el contenido.</p>
            )}
            {status === 'ready' && activeDoc.format === 'excalidraw' && (
              <MarkdownContent text={documentText} />
            )}
            {status === 'ready' && activeDoc.format === 'md' && <MarkdownContent text={documentText} />}
            {status === 'ready' && activeDoc.format !== 'md' && activeDoc.format !== 'excalidraw' && (
              <pre className="document-text" aria-label={`Texto completo de ${activeDoc.title}`}>
                {documentText}
              </pre>
            )}
          </>
        )}
      </article>
    </section>
  );
}

function QuickGuide() {
  return (
    <section className="screen-grid">
      <article className="wide-card">
        <div className="section-heading">
          <p className="eyebrow">Regla principal</p>
          <h2>Primero caracterizo el caso.</h2>
        </div>
        <p className="lead">
          La guía rápida no reemplaza las transcripciones. Sirve para estudiar con dirección:
          se caracteriza el comportamiento, se descartan opciones y luego se defiende la decisión
          con lenguaje de examen.
        </p>
        <div className="rule-grid">
          {methodRules.map((rule) => (
            <article key={rule.title}>
              <h3>{rule.title}</h3>
              <p>{rule.body}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="template-card">
        <p className="eyebrow">Frases de defensa</p>
        <h2>Plantilla oral</h2>
        <ol>
          {oralTemplate.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>
    </section>
  );
}

function Questions({ query }) {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredQuestions = questionBank.filter((item) =>
    matchesQuery([item.area, item.prompt, item.answer, item.examLine], normalizedQuery),
  );

  return (
    <section className="stack">
      <div className="section-heading">
        <p className="eyebrow">Banco de preguntas</p>
        <h2>Preguntas tipo Calidad con respuesta defendible</h2>
      </div>
      <div className="question-grid">
        {filteredQuestions.map((question) => (
          <article className="question-card" key={question.prompt}>
            <span>{question.area}</span>
            <h3>{question.prompt}</h3>
            <p>{question.answer}</p>
            <blockquote>{question.examLine}</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}

function Exams() {
  const [selectedImage, setSelectedImage] = useState(examPhotoSets[0].images[0]);

  return (
    <section className="stack">
      <div className="section-heading">
        <p className="eyebrow">Exámenes fotografiados</p>
        <h2>Casos oficiales usados como fuente visual exacta.</h2>
      </div>

      <div className="exam-photo-grid">
        {examPhotoSets.map((exam) => (
          <article className="exam-photo-card" key={exam.title}>
            <div className="exam-card-head">
              <p className="eyebrow">{exam.subtitle}</p>
              <h3>{exam.title}</h3>
              <p>{exam.context}</p>
            </div>
            <div className="exam-image-row">
              {exam.images.map((image) => (
                <button key={image.src} type="button" onClick={() => setSelectedImage(image)}>
                  <img src={image.src} alt={image.label} />
                  <span>{image.label}</span>
                </button>
              ))}
            </div>
            <div className="exam-bottom">
              <div>
                <h4>Preguntas de ese bloque</h4>
                <ul>
                  {exam.prompts.map((prompt) => (
                    <li key={prompt}>{prompt}</li>
                  ))}
                </ul>
              </div>
              <blockquote>{exam.defense}</blockquote>
            </div>
          </article>
        ))}
      </div>

      <article className="image-preview">
        <header>
          <p className="eyebrow">Vista ampliada</p>
          <h3>{selectedImage.label}</h3>
        </header>
        <img src={selectedImage.src} alt={selectedImage.label} />
      </article>
    </section>
  );
}

function Theory({ query }) {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredFileCards = fileTheory.cards.filter((card) =>
    matchesQuery([card.title, ...card.points], normalizedQuery),
  );
  const filteredDeviceExamples = fileTheory.deviceExamples.filter((device) =>
    matchesQuery([device.device, device.raw, device.file, device.access, device.risk], normalizedQuery),
  );
  const filteredTheory = theoryModules.filter((module) =>
    matchesQuery([module.title, ...module.points], normalizedQuery),
  );

  return (
    <section className="stack">
      <div className="split-hero">
        <div>
          <p className="eyebrow">Guía rápida sobre la teoría completa</p>
          <h2>No se clasifica el proceso; se clasifica cada dato, archivo o recurso.</h2>
          <p>{fileTheory.overview}</p>
        </div>
        <img src={fileTheory.assets[0]} alt="Diagrama de nodo-i usado en la nota de archivos" />
      </div>

      <div className="theory-grid">
        {filteredFileCards.map((card) => (
          <article className="theory-card" key={card.title}>
            <h3>{card.title}</h3>
            <ul>
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="section-heading">
        <p className="eyebrow">Por dispositivo</p>
        <h2>Cómo defender archivos en examen</h2>
      </div>
      <div className="device-table" role="table" aria-label="Caracterización de archivos por dispositivo">
        {filteredDeviceExamples.map((device) => (
          <article key={device.device}>
            <h3>{device.device}</h3>
            <dl>
              <div>
                <dt>Dato de origen</dt>
                <dd>{device.raw}</dd>
              </div>
              <div>
                <dt>Archivo</dt>
                <dd>{device.file}</dd>
              </div>
              <div>
                <dt>Acceso</dt>
                <dd>{device.access}</dd>
              </div>
              <div>
                <dt>Riesgo</dt>
                <dd>{device.risk}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="module-grid">
        {filteredTheory.map((module) => (
          <article className="module-card" key={module.title}>
            <img src={module.asset} alt={`Apunte visual de ${module.title}`} />
            <div>
              <h3>{module.title}</h3>
              <ul>
                {module.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function StudyApp() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <main className={`app-shell ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <aside className="sidebar" aria-label="Dashboard de estudio">
        <div className="sidebar-top">
          <button
            className="collapse-button"
            type="button"
            aria-label={sidebarOpen ? 'Contraer dashboard' : 'Abrir dashboard'}
            onClick={() => setSidebarOpen((value) => !value)}
          >
            {sidebarOpen ? '‹' : '›'}
          </button>
          <div className="brand-block">
            <span>Sistemas Operativos</span>
            <strong>Calidad OS</strong>
            <p>Transcripciones, notas y exámenes para repasar con respuesta de examen.</p>
          </div>
        </div>

        <label className="search-box">
          <span>Buscar</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ráfaga, buffer, mapa de bits..."
          />
        </label>

        <nav className="section-nav" aria-label="Secciones principales">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => setActiveSection(section.id)}
            >
              <span>{sidebarOpen ? String(index + 1).padStart(2, '0') : section.short}</span>
              <strong>{section.label}</strong>
            </button>
          ))}
        </nav>
      </aside>

      <section className="content">
        <header className="hero-panel">
          <div>
            <p className="eyebrow">Curso de Sistemas Operativos</p>
            <h1>Todo el material para estudiar como examen.</h1>
            <p className="hero-text">
              Repasa con las transcripciones completas, las notas del curso, mapas visuales y
              exámenes reales organizados por secciones.
            </p>
          </div>
          <div className="source-panel">
            <span>Ruta de estudio</span>
            <strong>Caracterizar, decidir y defender</strong>
            <p>Primero se separan procesos, dispositivos, archivos y recursos.</p>
            <p>Después se elige la política y se justifica con lenguaje de examen.</p>
            <p>Al final se practica con casos completos y preguntas reales.</p>
          </div>
        </header>

        {activeSection === 'inicio' && <QuickGuide />}
        {activeSection === 'transcripciones' && <DocumentReader section="transcripciones" query={query} />}
        {activeSection === 'obsidian' && <DocumentReader section="obsidian" query={query} />}
        {activeSection === 'preguntas' && <Questions query={query} />}
        {activeSection === 'examenes' && <Exams />}
        {activeSection === 'teoria' && <Theory query={query} />}
      </section>
    </main>
  );
}
