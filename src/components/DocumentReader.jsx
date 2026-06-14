import { useEffect, useMemo, useRef, useState } from 'react';
import { sourceDocuments } from '../data/source-manifest';

const transcriptionDocs = sourceDocuments.filter((doc) => doc.kind === 'Transcripciones');
const obsidianDocs = sourceDocuments.filter((doc) => doc.kind === 'Obsidian');

function getSourceDocs(section) {
  if (section === 'transcripciones') return transcriptionDocs;
  if (section === 'obsidian') return obsidianDocs;
  return sourceDocuments;
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
          loading="lazy"
        />,
      );
    } else if (match[3]) {
      nodes.push(
        <img
          key={`${keyPrefix}-${match.index}`}
          className="markdown-inline-image"
          src={resolveObsidianAsset(match[3].trim())}
          alt={match[2] || match[3]}
          loading="lazy"
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

export default function DocumentReader({ section }) {
  const docs = getSourceDocs(section);
  const [activeDocId, setActiveDocId] = useState(docs[0]?.id);
  const [documentText, setDocumentText] = useState('');
  const [status, setStatus] = useState('idle');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === viewerRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const toggleFullscreen = () => {
    const node = viewerRef.current;
    if (!node) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (node.requestFullscreen) {
      node.requestFullscreen();
    }
  };

  const activeDoc = docs.find((doc) => doc.id === activeDocId) ?? docs[0];

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

  const kindLabel = (doc) =>
    doc.format === 'excalidraw' ? 'Mapa' : doc.kind === 'Obsidian' ? 'Nota' : 'Transcripción';

  return (
    <section className="source-workbench">
      <aside className="doc-list" aria-label="Documentos fuente">
        <div className="mini-heading">
          <span>{section === 'transcripciones' ? 'Transcripciones' : 'Notas'}</span>
          <strong>{docs.length}</strong>
        </div>
        <div className="doc-buttons">
          {docs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              className={activeDoc?.id === doc.id ? 'active' : ''}
              onClick={() => setActiveDocId(doc.id)}
            >
              <span>{kindLabel(doc)}</span>
              <strong>{doc.title}</strong>
            </button>
          ))}
        </div>
      </aside>

      <article className={`doc-viewer${isFullscreen ? ' is-fullscreen' : ''}`} ref={viewerRef}>
        {activeDoc && (
          <>
            <header className="doc-toolbar">
              <div>
                <p className="eyebrow">{kindLabel(activeDoc)}</p>
                <h2>{activeDoc.title}</h2>
              </div>
              <div className="doc-actions">
                <button type="button" className="doc-action" onClick={toggleFullscreen}>
                  {isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
                </button>
                <a className="doc-action" href={activeDoc.path} target="_blank" rel="noreferrer">
                  Abrir original
                </a>
              </div>
            </header>

            {outline.length > 0 && (
              <nav className="doc-outline" aria-label="Encabezados detectados">
                {outline.map((heading, headingIndex) => (
                  <span key={`${heading}-${headingIndex}`}>{heading}</span>
                ))}
              </nav>
            )}

            {status === 'loading' && <p className="loading-note">Cargando...</p>}
            {status === 'error' && <p className="error-note">No se pudo cargar el contenido.</p>}
            {status === 'ready' &&
              (activeDoc.format === 'md' || activeDoc.format === 'excalidraw') && (
                <MarkdownContent text={documentText} />
              )}
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
