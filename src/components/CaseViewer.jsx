import { useState } from 'react';
import { caseModules } from '../data/cases.js';
import EditableTable from './EditableTable.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';

// Visor de casos por módulo. Compone contexto, problema, material de
// referencia, tablas editables y preguntas con evaluación automática.
// Es la única isla que se hidrata: el resto son componentes hijos.

function CaseContent({ activeCase }) {
  return (
    <div className="case-body">
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
        <span>Tablas del caso</span>
        <strong>Editables · se guardan solas</strong>
      </div>
      {activeCase.tablesIntro && <p className="case-tables-intro">{activeCase.tablesIntro}</p>}
      <div className="case-tables">
        {activeCase.tables.map((table) => (
          <EditableTable key={table.id} caseId={activeCase.id} table={table} />
        ))}
      </div>

      <div className="mini-heading">
        <span>Preguntas abiertas</span>
        <strong>{activeCase.questions.length} con feedback automático</strong>
      </div>
      <div className="case-questions">
        {activeCase.questions.map((question, index) => (
          <QuestionAnswer key={question.id} caseId={activeCase.id} question={question} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function CaseViewer() {
  // Lista plana de casos con su módulo, para el selector.
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
              {entry.caseItem.title}
            </button>
          ))}
        </nav>
      )}

      <CaseContent activeCase={active.caseItem} />
    </section>
  );
}
