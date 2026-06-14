import { useEffect, useMemo, useState } from 'react';

// Tabla editable reutilizable para un caso.
//   - Edita celdas, agrega/elimina filas y restaura la tabla original.
//   - Valida datos básicos por tipo de columna (number, date, email).
//   - Guarda el estado en localStorage por caso + tabla.
// Una edición inválida se marca visualmente pero no rompe el caso.

function storageKey(caseId, tableId) {
  return `calidad-os-case-${caseId}-table-${tableId}`;
}

function cloneRows(rows) {
  return rows.map((row) => ({ ...row }));
}

// Devuelve { ok, msg } según el tipo de la columna. El vacío se permite
// (se considera "incompleto", no inválido) para no bloquear la edición.
function validateCell(value, type) {
  const raw = (value ?? '').toString().trim();
  if (raw === '') return { ok: true };
  switch (type) {
    case 'number':
      return {
        ok: /^-?\d+([.,]\d+)?$/.test(raw),
        msg: 'Debe ser un número (revisa coma/punto).',
      };
    case 'date':
      return {
        ok: /^\d{4}-\d{2}-\d{2}$/.test(raw),
        msg: 'Formato de fecha esperado: AAAA-MM-DD.',
      };
    case 'email':
      return { ok: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw), msg: 'Correo no válido.' };
    default:
      return { ok: true };
  }
}

export default function EditableTable({ caseId, table }) {
  const initialRows = useMemo(() => cloneRows(table.rows), [table]);
  const [rows, setRows] = useState(initialRows);
  const [loaded, setLoaded] = useState(false);

  // Cargar estado guardado (si existe) tras el montaje en cliente.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(caseId, table.id));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setRows(parsed);
      }
    } catch {
      // Ignorar almacenamiento no disponible.
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseId, table.id]);

  // Persistir cambios (solo después de la carga inicial).
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey(caseId, table.id), JSON.stringify(rows));
    } catch {
      // Ignorar cuota o modo privado.
    }
  }, [rows, loaded, caseId, table.id]);

  const updateCell = (rowIndex, key, value) => {
    setRows((prev) => prev.map((row, index) => (index === rowIndex ? { ...row, [key]: value } : row)));
  };

  const addRow = () => {
    const blank = Object.fromEntries(table.columns.map((column) => [column.key, '']));
    setRows((prev) => [...prev, blank]);
  };

  const removeRow = (rowIndex) => {
    setRows((prev) => prev.filter((_, index) => index !== rowIndex));
  };

  const restore = () => {
    if (!confirm(`¿Restaurar la tabla "${table.name}" a su estado original?`)) return;
    setRows(cloneRows(table.rows));
  };

  // Conteo de celdas inválidas para mostrar un aviso sin bloquear nada.
  const invalidCount = useMemo(() => {
    let count = 0;
    for (const row of rows) {
      for (const column of table.columns) {
        if (!validateCell(row[column.key], column.type).ok) count += 1;
      }
    }
    return count;
  }, [rows, table.columns]);

  return (
    <article className="editable-table">
      <header className="editable-table-head">
        <div>
          <h4>{table.name}</h4>
          {table.note && <p className="editable-table-note">{table.note}</p>}
        </div>
        <button type="button" className="doc-action" onClick={restore}>
          Restaurar original
        </button>
      </header>

      <div className="markdown-table-wrap">
        <table>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
              {table.allowRemoveRows && <th aria-label="Acciones" />}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {table.columns.map((column) => {
                  const result = validateCell(row[column.key], column.type);
                  return (
                    <td key={column.key} className={result.ok ? '' : 'cell-invalid'}>
                      <input
                        value={row[column.key] ?? ''}
                        onChange={(event) => updateCell(rowIndex, column.key, event.target.value)}
                        aria-label={`${column.label}, fila ${rowIndex + 1}`}
                        aria-invalid={!result.ok}
                        title={result.ok ? undefined : result.msg}
                      />
                    </td>
                  );
                })}
                {table.allowRemoveRows && (
                  <td className="cell-action">
                    <button
                      type="button"
                      className="row-remove"
                      onClick={() => removeRow(rowIndex)}
                      aria-label={`Eliminar fila ${rowIndex + 1}`}
                      disabled={rows.length <= 1}
                    >
                      ×
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="editable-table-foot">
        {table.allowAddRows && (
          <button type="button" className="solver-add" onClick={addRow}>
            + Agregar fila
          </button>
        )}
        {invalidCount > 0 && (
          <p className="editable-table-warn" role="status">
            {invalidCount} celda{invalidCount === 1 ? '' : 's'} con formato inválido (resaltada
            {invalidCount === 1 ? '' : 's'} en rojo). Puedes seguir editando.
          </p>
        )}
      </div>
    </article>
  );
}
