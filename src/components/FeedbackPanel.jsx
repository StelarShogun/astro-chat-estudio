import Icon from './Icon.jsx';

// Panel de retroalimentación formativa. Nunca dice "correcto/incorrecto":
// siempre estructura el feedback en bloques. Recibe el objeto que produce
// evaluateAnswer() en src/lib/caseEvaluator.js.

const LEVEL_CLASS = {
  Excelente: 'level-excelente',
  Bueno: 'level-bueno',
  'Bueno pero incompleto': 'level-incompleto',
  Regular: 'level-regular',
  Insuficiente: 'level-insuficiente',
};

function Block({ title, items, tone, emptyText, icon }) {
  const hasItems = items && items.length > 0;
  return (
    <div className={`feedback-block ${tone}`}>
      <h4>
        <Icon name={icon} size={15} /> {title}
      </h4>
      {hasItems ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="feedback-empty">{emptyText}</p>
      )}
    </div>
  );
}

export default function FeedbackPanel({ feedback }) {
  if (!feedback) return null;
  const levelClass = LEVEL_CLASS[feedback.level] || 'level-regular';

  return (
    <div className="feedback-panel" role="status" aria-live="polite">
      <div className="feedback-head">
        <span className={`feedback-level ${levelClass}`}>
          <Icon name="nivel" size={15} /> {feedback.level}
        </span>
        <div className="feedback-score" aria-label={`Cobertura estimada ${feedback.score} por ciento`}>
          <div className="feedback-bar">
            <span style={{ width: `${feedback.score}%` }} />
          </div>
          <strong>{feedback.score}%</strong>
        </div>
      </div>

      <Block
        title="Aspectos correctos"
        icon="correcto"
        items={feedback.correct}
        tone="is-good"
        emptyText="Todavía no aparecen elementos clave del caso en tu respuesta."
      />
      <Block
        title="Aspectos por mejorar"
        icon="mejorar"
        items={feedback.improve}
        tone="is-improve"
        emptyText="Sin observaciones: tu respuesta cubre lo esperado."
      />
      <Block
        title="Conceptos ausentes"
        icon="ausente"
        items={feedback.missing}
        tone="is-missing"
        emptyText="No faltan conceptos obligatorios."
      />
      <Block
        title="Contradicciones detectadas"
        icon="contradiccion"
        items={feedback.contradictions}
        tone="is-contra"
        emptyText="No se detectaron contradicciones con el material."
      />

      <div className="feedback-block is-reco">
        <h4>
          <Icon name="recomendacion" size={15} /> Recomendación concreta
        </h4>
        <p>{feedback.recommendation}</p>
      </div>
    </div>
  );
}
