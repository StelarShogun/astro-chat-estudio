import { useMemo, useState } from 'react';
import chat from '../data/claude-share.json';

export default function StudyApp() {
  const [query, setQuery] = useState('');
  const [activeTitle, setActiveTitle] = useState(chat.studySections[0]?.title ?? '');
  const [showAnswers, setShowAnswers] = useState(false);
  const [view, setView] = useState('study');

  const flashcards = useMemo(
    () =>
      chat.studySections.flatMap((section) =>
        section.points.map((point) => ({
          question: section.title,
          answer: point,
        })),
      ),
    [],
  );

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return chat.studySections;

    return chat.studySections.filter((section) => {
      const content = [section.title, section.summary, ...section.points].join(' ').toLowerCase();
      return content.includes(normalizedQuery);
    });
  }, [query]);

  const filteredMessages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return chat.messages;

    return chat.messages.filter((message) => {
      const content = [message.sender, message.text, ...message.toolNotes].join(' ').toLowerCase();
      return content.includes(normalizedQuery);
    });
  }, [query]);

  const activeSection =
    filteredSections.find((section) => section.title === activeTitle) ??
    filteredSections[0] ??
    chat.studySections[0];
  const activeIndex = chat.studySections.findIndex((section) => section.title === activeSection?.title);
  const visibleFlashcards = activeSection
    ? flashcards.filter((card) => card.question === activeSection.title)
    : flashcards.slice(0, 8);

  return (
    <main className="study-shell">
      <aside className="study-sidebar" aria-label="Indice de temas">
        <div className="brand">
          <div>
            <small>MediCore</small>
            <span>{chat.title}</span>
          </div>
          <a href={chat.sourceUrl} target="_blank" rel="noreferrer">
            Fuente
          </a>
        </div>

        <div className="tabs" role="tablist" aria-label="Vistas">
          <button type="button" className={view === 'study' ? 'active' : ''} onClick={() => setView('study')}>
            Estudio
          </button>
          <button type="button" className={view === 'chat' ? 'active' : ''} onClick={() => setView('chat')}>
            Chat
          </button>
        </div>

        <label className="search">
          <span>Buscar</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Concepto, tema o palabra"
          />
        </label>

        {view === 'study' && (
          <nav className="topic-list">
            {filteredSections.map((section) => (
              <button
                key={section.title}
                type="button"
                className={section.title === activeSection?.title ? 'active' : ''}
                onClick={() => setActiveTitle(section.title)}
              >
                <span>{String(chat.studySections.indexOf(section) + 1).padStart(2, '0')}</span>
                {section.title}
              </button>
            ))}
          </nav>
        )}
      </aside>

      <section className="study-content">
        <div className="hero">
          <div className="hero-copy">
            <p>Guia de estudio extraida del chat de {chat.creator}</p>
            <h1>{view === 'study' ? activeSection?.title ?? 'Sin resultados' : 'Conversacion completa'}</h1>
            <span>
              {view === 'study'
                ? `${filteredSections.length} temas disponibles`
                : `${filteredMessages.length} mensajes visibles`}
            </span>
          </div>
          <div className="progress-card">
            <span>Tema actual</span>
            <strong>{activeIndex >= 0 ? `${activeIndex + 1}/${chat.studySections.length}` : '0/0'}</strong>
            <div className="progress-track">
              <i style={{ width: `${activeIndex >= 0 ? ((activeIndex + 1) / chat.studySections.length) * 100 : 0}%` }} />
            </div>
          </div>
        </div>

        <section className="stats" aria-label="Resumen de estudio">
          <article>
            <span>{chat.studySections.length}</span>
            <p>temas</p>
          </article>
          <article>
            <span>{flashcards.length}</span>
            <p>tarjetas</p>
          </article>
          <article>
            <span>{chat.messages.length}</span>
            <p>mensajes</p>
          </article>
        </section>

        {view === 'study' ? (
          <>
            {activeSection ? (
              <article className="lesson">
                <p className="summary">{activeSection.summary}</p>
                <ul className="point-list">
                  {activeSection.points.map((point, index) => (
                    <li key={point}>
                      <span>{index + 1}</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ) : (
              <article className="lesson">
                <p className="summary">No hay coincidencias para la busqueda actual.</p>
              </article>
            )}

            <section className="flashcards" aria-label="Tarjetas de repaso">
              <div className="section-heading">
                <h2>Tarjetas</h2>
                <button type="button" onClick={() => setShowAnswers((value) => !value)}>
                  {showAnswers ? 'Ocultar respuestas' : 'Mostrar respuestas'}
                </button>
              </div>

              <div className="card-grid">
                {visibleFlashcards.map((card) => (
                  <article className="study-card" key={`${card.question}-${card.answer}`}>
                    <span>{card.question}</span>
                    <p>{showAnswers ? card.answer : 'Activa las respuestas para repasar.'}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="conversation" aria-label="Contenido completo del chat">
            {filteredMessages.map((message) => (
              <article className={`message ${message.sender}`} key={message.id}>
                <div className="message-meta">
                  <span>{message.sender === 'human' ? 'Dilan' : 'Claude'}</span>
                  <time>{new Date(message.createdAt).toLocaleString()}</time>
                </div>
                {message.toolNotes.length > 0 && (
                  <ul className="tool-notes">
                    {message.toolNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                )}
                {message.text && <pre>{message.text}</pre>}
              </article>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
