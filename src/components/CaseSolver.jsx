import { useEffect, useMemo, useRef, useState } from 'react';
import { caseProcessFields, caseDecisionFields, medicoreCase } from '../data/course-content';
import Icon from './Icon.jsx';

const STORAGE_KEY = 'calidad-os-case-solver-v1';

function emptyProcess(name) {
  const traits = Object.fromEntries(caseProcessFields.map((field) => [field.key, '']));
  return { id: crypto.randomUUID(), name, traits };
}

function emptyState() {
  return {
    caseTitle: '',
    processes: [emptyProcess('Proceso A'), emptyProcess('Proceso B')],
    decisions: Object.fromEntries(caseDecisionFields.map((field) => [field.key, ''])),
  };
}

function loadState() {
  if (typeof localStorage === 'undefined') return emptyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    if (!parsed?.processes?.length) return emptyState();
    return parsed;
  } catch {
    return emptyState();
  }
}

function buildExport(state) {
  const lines = [];
  lines.push(state.caseTitle ? `Caso: ${state.caseTitle}` : 'Caso sin título');
  lines.push('');
  lines.push('Primero caracterizo los procesos.');
  lines.push('');
  for (const process of state.processes) {
    lines.push(`${process.name}:`);
    for (const field of caseProcessFields) {
      lines.push(`- ${field.label}: ${process.traits[field.key] || '—'}`);
    }
    lines.push('');
  }
  lines.push('Ahora decido.');
  lines.push('');
  for (const field of caseDecisionFields) {
    lines.push(`${field.label}:`);
    lines.push(state.decisions[field.key] || '—');
    lines.push('');
  }
  return lines.join('\n').trim() + '\n';
}

export default function CaseSolver() {
  const [state, setState] = useState(emptyState);
  const [copied, setCopied] = useState(false);
  const nextLetter = useRef(0);

  useEffect(() => {
    const loaded = loadState();
    setState(loaded);
    nextLetter.current = loaded.processes.length;
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignorar cuotas o modos privados sin almacenamiento.
    }
  }, [state]);

  const exportText = useMemo(() => buildExport(state), [state]);

  const updateProcess = (id, key, value) => {
    setState((prev) => ({
      ...prev,
      processes: prev.processes.map((process) =>
        process.id === id ? { ...process, traits: { ...process.traits, [key]: value } } : process,
      ),
    }));
  };

  const renameProcess = (id, name) => {
    setState((prev) => ({
      ...prev,
      processes: prev.processes.map((process) => (process.id === id ? { ...process, name } : process)),
    }));
  };

  const addProcess = () => {
    const letter = String.fromCharCode(65 + (nextLetter.current % 26));
    nextLetter.current += 1;
    setState((prev) => ({ ...prev, processes: [...prev.processes, emptyProcess(`Proceso ${letter}`)] }));
  };

  const removeProcess = (id) => {
    setState((prev) => ({
      ...prev,
      processes: prev.processes.filter((process) => process.id !== id),
    }));
  };

  const updateDecision = (key, value) => {
    setState((prev) => ({ ...prev, decisions: { ...prev.decisions, [key]: value } }));
  };

  const reset = () => {
    if (!confirm('¿Borrar este caso y empezar de cero?')) return;
    const fresh = emptyState();
    nextLetter.current = fresh.processes.length;
    setState(fresh);
  };

  const loadMediCore = () => {
    const hasContent =
      state.caseTitle ||
      state.processes.some((process) => Object.values(process.traits).some(Boolean)) ||
      Object.values(state.decisions).some(Boolean);
    if (hasContent && !confirm('Esto reemplaza lo que tienes. ¿Cargar el caso MediCore en blanco?')) {
      return;
    }
    const processes = medicoreCase.processes.map((process) => {
      const fresh = emptyProcess(`${process.id} — ${process.name}`);
      return fresh;
    });
    nextLetter.current = processes.length;
    setState({
      caseTitle: 'Caso MediCore',
      processes,
      decisions: Object.fromEntries(caseDecisionFields.map((field) => [field.key, ''])),
    });
  };

  const copyExport = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="stack">
      <div className="section-heading">
        <p className="eyebrow"><Icon name="resolver" size={15} /> Resolver caso</p>
        <h2>Caracterizo, decido y defiendo. Se guarda solo.</h2>
      </div>

      <div className="solver-toolbar">
        <label className="solver-title">
          <span>Título del caso</span>
          <input
            value={state.caseTitle}
            onChange={(event) => setState((prev) => ({ ...prev, caseTitle: event.target.value }))}
            placeholder="Ej. Caso ordeño y potrero"
          />
        </label>
        <div className="solver-actions">
          <button type="button" className="doc-action" onClick={loadMediCore} title="Precargar el caso MediCore">
            <Icon name="medicore" /> Cargar MediCore
          </button>
          <button type="button" className="doc-action" onClick={copyExport} title="Copiar como respuesta de examen">
            <Icon name={copied ? 'correcto' : 'copiar'} /> {copied ? 'Copiado' : 'Copiar'}
          </button>
          <button type="button" className="doc-action solver-danger" onClick={reset} title="Borrar y empezar de cero">
            <Icon name="reiniciar" /> Reiniciar
          </button>
        </div>
      </div>

      <div className="mini-heading">
        <span><Icon name="notas" size={14} /> Caracterización</span>
        <strong>{state.processes.length} procesos</strong>
      </div>

      <div className="solver-grid">
        {state.processes.map((process) => (
          <article className="solver-card" key={process.id}>
            <header>
              <input
                className="solver-process-name"
                value={process.name}
                onChange={(event) => renameProcess(process.id, event.target.value)}
              />
              {state.processes.length > 1 && (
                <button
                  type="button"
                  className="solver-remove"
                  aria-label={`Eliminar ${process.name}`}
                  title="Eliminar proceso"
                  onClick={() => removeProcess(process.id)}
                >
                  <Icon name="quitar" size={16} />
                </button>
              )}
            </header>
            <dl>
              {caseProcessFields.map((field) => (
                <div key={field.key}>
                  <dt>{field.label}</dt>
                  <dd>
                    <textarea
                      rows={2}
                      value={process.traits[field.key]}
                      onChange={(event) => updateProcess(process.id, field.key, event.target.value)}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <button type="button" className="solver-add" onClick={addProcess} title="Agregar un proceso">
        <Icon name="agregar" size={16} /> Agregar proceso
      </button>

      <div className="mini-heading">
        <span><Icon name="recomendacion" size={14} /> Decisión</span>
        <strong>Defensa por bloque</strong>
      </div>

      <div className="solver-decisions">
        {caseDecisionFields.map((field) => (
          <article className="solver-decision" key={field.key}>
            <h3>{field.label}</h3>
            <p className="solver-hint">{field.hint}</p>
            <textarea
              rows={3}
              value={state.decisions[field.key]}
              onChange={(event) => updateDecision(field.key, event.target.value)}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
