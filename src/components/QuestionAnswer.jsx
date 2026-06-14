import { useEffect, useState } from 'react';
import { evaluateAnswer } from '../lib/caseEvaluator.js';
import FeedbackPanel from './FeedbackPanel.jsx';

// Una pregunta abierta del caso: enunciado, respuesta editable, feedback
// automático (evaluador local) y opción de mejorar y re-evaluar.
// La respuesta se guarda en localStorage por caso + pregunta.

function storageKey(caseId, questionId) {
  return `calidad-os-case-${caseId}-answer-${questionId}`;
}

export default function QuestionAnswer({ caseId, question, index }) {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey(caseId, question.id));
      if (saved != null) setText(saved);
    } catch {
      // Ignorar.
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseId, question.id]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey(caseId, question.id), text);
    } catch {
      // Ignorar.
    }
  }, [text, loaded, caseId, question.id]);

  const evaluate = () => {
    setFeedback(evaluateAnswer(text, question));
  };

  const hasFeedback = feedback != null;

  return (
    <article className="qa-card">
      <header className="qa-head">
        <span className="qa-number">{String(index + 1).padStart(2, '0')}</span>
        <h3>{question.prompt}</h3>
      </header>

      {question.criteria?.length > 0 && (
        <details className="qa-criteria">
          <summary>Criterios mínimos esperados</summary>
          <ul>
            {question.criteria.map((criterion, i) => (
              <li key={i}>{criterion}</li>
            ))}
          </ul>
        </details>
      )}

      <textarea
        className="qa-textarea"
        rows={5}
        value={text}
        placeholder="Escribe aquí tu respuesta. Relaciónala con las tablas del caso y justifica como en examen."
        onChange={(event) => setText(event.target.value)}
      />

      <div className="qa-actions">
        <button type="button" className="doc-action" onClick={evaluate}>
          {hasFeedback ? 'Mejorar y volver a evaluar' : 'Evaluar respuesta'}
        </button>
        {hasFeedback && (
          <button type="button" className="doc-action" onClick={() => setShowGuide((value) => !value)}>
            {showGuide ? 'Ocultar respuesta guía' : 'Ver respuesta guía'}
          </button>
        )}
      </div>

      {hasFeedback && <FeedbackPanel feedback={feedback} />}

      {showGuide && (
        <div className="qa-guide">
          <h4>Respuesta guía</h4>
          <p>{question.guide}</p>
        </div>
      )}
    </article>
  );
}
