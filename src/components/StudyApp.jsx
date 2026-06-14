import { useEffect, useMemo, useState } from 'react';
import {
  examPhotoSets,
  fileTheory,
  methodRules,
  oralTemplate,
  questionBank,
  sourceNotes,
  theoryModules,
  uxPrinciples,
} from '../data/course-content';
import { sourceDocuments, sourceStats } from '../data/source-manifest';

const sections = [
  { id: 'inicio', label: 'Método', short: 'M' },
  { id: 'transcripciones', label: 'Transcripciones', short: 'T' },
  { id: 'obsidian', label: 'Obsidian MD', short: 'O' },
  { id: 'preguntas', label: 'Preguntas', short: 'P' },
  { id: 'examenes', label: 'Exámenes', short: 'E' },
  { id: 'teoria', label: 'Teoría guía', short: 'G' },
];

const transcriptionDocs = sourceDocuments.filter((doc) => doc.kind === 'Transcripciones');
const obsidianDocs = sourceDocuments.filter((doc) => doc.kind === 'Obsidian');

function formatNumber(value) {
  return new Intl.NumberFormat('es-CR').format(value);
}

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
          <span>{section === 'transcripciones' ? 'Transcripciones completas' : 'Notas Obsidian completas'}</span>
          <strong>{formatNumber(filteredDocs.length)} archivos</strong>
        </div>
        <div className="doc-buttons">
          {filteredDocs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              className={activeDoc?.id === doc.id ? 'active' : ''}
              onClick={() => setActiveDocId(doc.id)}
            >
              <span>{doc.kind}</span>
              <strong>{doc.title}</strong>
              <small>
                {formatNumber(doc.words)} palabras · {formatNumber(doc.lines)} líneas
              </small>
            </button>
          ))}
        </div>
      </aside>

      <article className="doc-viewer">
        {activeDoc && (
          <>
            <header className="doc-toolbar">
              <div>
                <p className="eyebrow">{activeDoc.kind} · {activeDoc.format}</p>
                <h2>{activeDoc.title}</h2>
                <p>{activeDoc.sourcePath}</p>
              </div>
              <a href={activeDoc.path} target="_blank" rel="noreferrer">
                Abrir fuente
              </a>
            </header>

            <div className="doc-meta-grid" aria-label="Metadatos del documento">
              <span>{formatNumber(activeDoc.words)} palabras</span>
              <span>{formatNumber(activeDoc.lines)} líneas</span>
              <span>{formatNumber(activeDoc.bytes)} bytes</span>
              <span>{status === 'ready' ? 'Texto completo cargado' : 'Cargando texto'}</span>
            </div>

            {outline.length > 0 && (
              <nav className="doc-outline" aria-label="Encabezados detectados">
                {outline.map((heading) => (
                  <span key={heading}>{heading}</span>
                ))}
              </nav>
            )}

            {status === 'loading' && <p className="loading-note">Cargando el archivo completo...</p>}
            {status === 'error' && (
              <p className="error-note">No se pudo cargar el texto. El archivo queda disponible desde el enlace de fuente.</p>
            )}
            {status === 'ready' && (
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

      <article className="wide-card full-span">
        <div className="section-heading">
          <p className="eyebrow">Diseño aplicado</p>
          <h2>UX para estudiar sin perderse.</h2>
        </div>
        <div className="ux-grid">
          {uxPrinciples.map((principle) => (
            <article key={principle.name}>
              <span>{principle.name}</span>
              <p>{principle.use}</p>
            </article>
          ))}
        </div>
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
            <p>Guía oscura para estudiar con transcripciones completas, Obsidian y exámenes reales.</p>
          </div>
        </div>

        <label className="search-box">
          <span>Buscar en navegación y fuentes</span>
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
            <h1>Todo el material en un sitio oscuro para estudiar como examen.</h1>
            <p className="hero-text">
              Las transcripciones y notas completas están servidas como archivos fuente dentro del
              sitio. La guía rápida orienta, pero el lector conserva cada documento completo para
              repasar palabra por palabra.
            </p>
          </div>
          <div className="source-panel">
            <span>Material cargado</span>
            <strong>{formatNumber(sourceStats.words)} palabras</strong>
            <p>{formatNumber(sourceStats.documents)} documentos · {formatNumber(sourceStats.lines)} líneas</p>
            {sourceNotes.map((source) => (
              <p key={source}>{source}</p>
            ))}
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
