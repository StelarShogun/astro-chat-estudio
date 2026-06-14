import { useState } from 'react';
import FeedbackPanel from './FeedbackPanel.jsx';
import Icon from './Icon.jsx';

// Una pregunta abierta del caso (controlada por CaseViewer): enunciado,
// respuesta editable, feedback automático y opción de ver la respuesta guía.
// Atajo: Ctrl/Cmd + Enter evalúa sin soltar el teclado.

export default function QuestionAnswer({ question, index, text, feedback, onTextChange, onEvaluate }) {
  const [showGuide, setShowGuide] = useState(false);
  const hasFeedback = feedback != null;

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      onEvaluate();
    }
  };

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
        placeholder="Escribe aquí tu respuesta. Relaciónala con las tablas del caso y justifica como en examen. (Ctrl + Enter para evaluar)"
        onChange={(event) => onTextChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="qa-actions">
        <button type="button" className="doc-action" onClick={onEvaluate} title="Evaluar tu respuesta">
          <Icon name="evaluar" /> {hasFeedback ? 'Reevaluar' : 'Evaluar'}
        </button>
        {hasFeedback && (
          <button
            type="button"
            className="doc-action"
            onClick={() => setShowGuide((value) => !value)}
            title={showGuide ? 'Ocultar la respuesta guía' : 'Ver la respuesta guía'}
          >
            <Icon name={showGuide ? 'ocultar' : 'guia'} /> {showGuide ? 'Ocultar guía' : 'Ver guía'}
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
