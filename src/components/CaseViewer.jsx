import { useEffect, useMemo, useState } from 'react';
import { caseModules } from '../data/cases.js';
import { evaluateAnswer } from '../lib/caseEvaluator.js';
import EditableTable from './EditableTable.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import Icon from './Icon.jsx';

// Visor de casos por módulo. Compone contexto, problema, material de
// referencia, tablas editables, diagnóstico de consistencia en vivo y
// preguntas con evaluación automática. Toda la lógica interactiva de un caso
// vive en CaseContent, que se remonta al cambiar de caso (key = case.id).

const tablesKey = (id) => `calidad-os-case-${id}-tables-v2`;
const answersKey = (id) => `calidad-os-case-${id}-answers-v2`;

function initTables(activeCase) {
  return Object.fromEntries(
    activeCase.tables.map((table) => [
      table.id,
      { columns: table.columns.map((column) => ({ ...column })), rows: table.rows.map((row) => ({ ...row })) },
    ]),
  );
}

function loadTables(activeCase) {
  const base = initTables(activeCase);
  try {
    const raw = localStorage.getItem(tablesKey(activeCase.id));
    if (raw) {
      const parsed = JSON.parse(raw);
      for (const table of activeCase.tables) {
        const saved = parsed[table.id];
        if (saved && Array.isArray(saved.columns) && Array.isArray(saved.rows)) {
          base[table.id] = { columns: saved.columns, rows: saved.rows };
        }
      }
    }
  } catch {
    // Ignorar almacenamiento no disponible.
  }
  return base;
}

function loadAnswers(activeCase) {
  try {
    const raw = localStorage.getItem(answersKey(activeCase.id));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch {
    // Ignorar.
  }
  return {};
}

// Texto exportable con tablas, respuestas y feedback.
function buildExport(activeCase, tables, answers, feedbacks) {
  const lines = [];
  lines.push(`# ${activeCase.title}`);
  lines.push('');
  lines.push('## Tablas');
  for (const table of activeCase.tables) {
    const state = tables[table.id] || { columns: table.columns, rows: [] };
    lines.push(`### ${table.name}`);
    lines.push(state.columns.map((column) => column.label).join(' | '));
    for (const row of state.rows) {
      lines.push(state.columns.map((column) => row[column.key] ?? '').join(' | '));
    }
    lines.push('');
  }
  lines.push('## Preguntas y respuestas');
  activeCase.questions.forEach((question, index) => {
    lines.push(`### ${index + 1}. ${question.prompt}`);
    lines.push('Respuesta:');
    lines.push((answers[question.id] || '').trim() || '(sin responder)');
    const feedback = feedbacks[question.id];
    if (feedback) {
      lines.push('');
      lines.push(`Nivel estimado: ${feedback.level} (${feedback.score}%)`);
      if (feedback.missing.length) lines.push(`Conceptos ausentes: ${feedback.missing.join('; ')}`);
      if (feedback.contradictions.length) lines.push(`Contradicciones: ${feedback.contradictions.join('; ')}`);
      lines.push(`Recomendación: ${feedback.recommendation}`);
    }
    lines.push('');
  });
  return `${lines.join('\n').trim()}\n`;
}

function ConsistencyPanel({ issues, title }) {
  const errors = issues.filter((issue) => issue.level === 'error');
  const warns = issues.filter((issue) => issue.level === 'warn');

  return (
    <details className="consistency-panel" open={issues.length > 0}>
      <summary>
        <span>{title || 'Diagnóstico de consistencia (en vivo)'}</span>
        <span className="consistency-badges">
          {errors.length > 0 && (
            <span className="consistency-badge is-error">
              <Icon name="alerta" size={14} /> {errors.length} errores
            </span>
          )}
          <span className="consistency-badge is-warn">
            <Icon name="mejorar" size={14} /> {warns.length} avisos
          </span>
        </span>
      </summary>
      {issues.length === 0 ? (
        <p className="consistency-clean">
          Sin inconsistencias detectadas. Las tablas están alineadas: identificadores únicos,
          referencias que calzan y datos con formato válido.
        </p>
      ) : (
        <ul className="consistency-list">
          {issues.map((issue, index) => (
            <li key={index} className={issue.level === 'error' ? 'is-error' : 'is-warn'}>
              <span className="consistency-dot" aria-hidden="true" />
              {issue.message}
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}

function CaseContent({ activeCase }) {
  const [tables, setTables] = useState(() => initTables(activeCase));
  const [answers, setAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Cargar estado guardado tras el montaje (evita desajustes de hidratación).
  useEffect(() => {
    setTables(loadTables(activeCase));
    setAnswers(loadAnswers(activeCase));
    setFeedbacks({});
    setLoaded(true);
  }, [activeCase]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(tablesKey(activeCase.id), JSON.stringify(tables));
    } catch {
      // Ignorar.
    }
  }, [tables, loaded, activeCase.id]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(answersKey(activeCase.id), JSON.stringify(answers));
    } catch {
      // Ignorar.
    }
  }, [answers, loaded, activeCase.id]);

  const setTableRows = (tableId, rows) => {
    setTables((prev) => ({ ...prev, [tableId]: { ...prev[tableId], rows } }));
  };

  const setTableColumns = (tableId, columns) => {
    setTables((prev) => ({ ...prev, [tableId]: { ...prev[tableId], columns } }));
  };

  const setAnswer = (questionId, text) => {
    setAnswers((prev) => ({ ...prev, [questionId]: text }));
  };

  const evaluate = (question) => {
    const feedback = evaluateAnswer(answers[question.id] || '', question);
    setFeedbacks((prev) => ({ ...prev, [question.id]: feedback }));
  };

  const resetCase = () => {
    if (!confirm('¿Reiniciar este caso? Se borran tus respuestas y las ediciones de las tablas.')) return;
    try {
      localStorage.removeItem(tablesKey(activeCase.id));
      localStorage.removeItem(answersKey(activeCase.id));
    } catch {
      // Ignorar.
    }
    setTables(initTables(activeCase));
    setAnswers({});
    setFeedbacks({});
  };

  const copyExport = async () => {
    try {
      await navigator.clipboard.writeText(buildExport(activeCase, tables, answers, feedbacks));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const downloadExport = () => {
    const text = buildExport(activeCase, tables, answers, feedbacks);
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeCase.id}-respuestas.md`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const issues = useMemo(
    () => (typeof activeCase.consistency === 'function' ? activeCase.consistency(tables) : []),
    [activeCase, tables],
  );

  const evaluatedCount = Object.keys(feedbacks).length;
  const total = activeCase.questions.length;
  const progress = total ? Math.round((evaluatedCount / total) * 100) : 0;

  return (
    <div className="case-body">
      <div className="case-toolbar">
        <div className="case-progress">
          <div className="case-progress-top">
            <span>Progreso</span>
            <strong>
              {evaluatedCount} / {total} preguntas evaluadas
            </strong>
          </div>
          <div className="case-progress-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="case-actions">
          <button type="button" className="doc-action" onClick={copyExport} title="Copiar tablas y respuestas">
            <Icon name={copied ? 'correcto' : 'copiar'} /> {copied ? 'Copiado' : 'Copiar'}
          </button>
          <button type="button" className="doc-action" onClick={downloadExport} title="Descargar todo en .md">
            <Icon name="descargar" /> Descargar
          </button>
          <button type="button" className="doc-action solver-danger" onClick={resetCase} title="Borrar respuestas y ediciones">
            <Icon name="reiniciar" /> Reiniciar
          </button>
        </div>
      </div>

      <div className="case-text-grid">
        <article className="wide-card">
          <p className="eyebrow">Contexto</p>
          <p className="lead">{activeCase.context}</p>
        </article>
        <article className="wide-card case-problem">
          <p className="eyebrow">Problema</p>
          <p>{activeCase.problem}</p>
        </article>
      </div>

      {activeCase.processes?.length > 0 && (
        <>
          <div className="mini-heading">
            <span>Procesos del caso</span>
            <strong>{activeCase.processes.length} procesos (A–{String.fromCharCode(64 + activeCase.processes.length)})</strong>
          </div>
          <div className="rule-grid">
            {activeCase.processes.map((process) => (
              <article key={process.id}>
                <h3>{process.id} — {process.name}</h3>
                <p>{process.detail}</p>
              </article>
            ))}
          </div>
        </>
      )}

      {activeCase.reference?.length > 0 && (
        <details className="case-reference">
          <summary>Material de referencia ({activeCase.reference.length})</summary>
          <div className="rule-grid">
            {activeCase.reference.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </details>
      )}

      <div className="mini-heading">
        <span>Tabla de análisis de procesos</span>
        <strong>Editable · se guarda sola</strong>
      </div>
      {activeCase.tablesIntro && <p className="case-tables-intro">{activeCase.tablesIntro}</p>}
      <div className="case-tables">
        {activeCase.tables.map((table) => (
          <EditableTable
            key={table.id}
            table={table}
            columns={tables[table.id]?.columns || table.columns}
            rows={tables[table.id]?.rows || []}
            onColumnsChange={(columns) => setTableColumns(table.id, columns)}
            onRowsChange={(rows) => setTableRows(table.id, rows)}
          />
        ))}
      </div>

      {typeof activeCase.consistency === 'function' && (
        <ConsistencyPanel issues={issues} title={activeCase.consistencyTitle} />
      )}

      <div className="mini-heading">
        <span>Preguntas abiertas</span>
        <strong>{total} con feedback automático</strong>
      </div>
      <div className="case-questions">
        {activeCase.questions.map((question, index) => (
          <QuestionAnswer
            key={question.id}
            question={question}
            index={index}
            text={answers[question.id] || ''}
            feedback={feedbacks[question.id] || null}
            onTextChange={(text) => setAnswer(question.id, text)}
            onEvaluate={() => evaluate(question)}
          />
        ))}
      </div>
    </div>
  );
}

export default function CaseViewer() {
  const entries = caseModules.flatMap((module) =>
    module.cases.map((caseItem) => ({ module, caseItem })),
  );
  const [activeId, setActiveId] = useState(entries[0]?.caseItem.id);
  const active = entries.find((entry) => entry.caseItem.id === activeId) || entries[0];

  if (!active) {
    return <p>No hay casos disponibles.</p>;
  }

  return (
    <section className="stack">
      <div className="section-heading">
        <p className="eyebrow">{active.module.name}</p>
        <h2>{active.caseItem.title}</h2>
      </div>

      {entries.length > 1 && (
        <nav className="case-switch" aria-label="Casos disponibles">
          {entries.map((entry) => (
            <button
              type="button"
              key={entry.caseItem.id}
              className={entry.caseItem.id === active.caseItem.id ? 'case-tab is-active' : 'case-tab'}
              onClick={() => setActiveId(entry.caseItem.id)}
            >
              {entry.caseItem.badge && <span className="case-tab-badge">{entry.caseItem.badge}</span>}
              {entry.caseItem.title}
            </button>
          ))}
        </nav>
      )}

      <CaseContent key={active.caseItem.id} activeCase={active.caseItem} />
    </section>
  );
}
