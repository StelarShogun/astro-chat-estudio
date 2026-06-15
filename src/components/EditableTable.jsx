import { useMemo } from 'react';
import Icon from './Icon.jsx';

// Tabla editable reutilizable (controlada por el padre).
//   - Edita celdas; agrega/elimina/restaura filas.
//   - Agrega, renombra y elimina columnas (la primera, "Proceso", queda fija).
//   - Valida datos básicos por tipo de columna (number, date, email).
// CaseViewer maneja el estado (columnas + filas) y su persistencia, para poder
// cruzar varias tablas en el diagnóstico de consistencia.

// Devuelve { ok, msg } según el tipo de la columna. El vacío se permite
// (se considera "incompleto", no inválido) para no bloquear la edición.
export function validateCell(value, type) {
  const raw = (value ?? '').toString().trim();
  if (raw === '') return { ok: true };
  switch (type) {
    case 'number':
      return { ok: /^-?\d+([.,]\d+)?$/.test(raw), msg: 'Debe ser un número (revisa coma/punto).' };
    case 'date':
      return { ok: /^\d{4}-\d{2}-\d{2}$/.test(raw), msg: 'Formato de fecha esperado: AAAA-MM-DD.' };
    case 'email':
      return { ok: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw), msg: 'Correo no válido.' };
    default:
      return { ok: true };
  }
}

export default function EditableTable({ table, columns, rows, onColumnsChange, onRowsChange }) {
  const updateCell = (rowIndex, key, value) => {
    onRowsChange(rows.map((row, index) => (index === rowIndex ? { ...row, [key]: value } : row)));
  };

  const addRow = () => {
    const blank = Object.fromEntries(columns.map((column) => [column.key, '']));
    onRowsChange([...rows, blank]);
  };

  const removeRow = (rowIndex) => {
    onRowsChange(rows.filter((_, index) => index !== rowIndex));
  };

  const renameColumn = (key, label) => {
    onColumnsChange(columns.map((column) => (column.key === key ? { ...column, label } : column)));
  };

  const addColumn = () => {
    const key = `extra_${Date.now()}`;
    onColumnsChange([...columns, { key, label: 'Nueva columna', type: 'text' }]);
    onRowsChange(rows.map((row) => ({ ...row, [key]: '' })));
  };

  const removeColumn = (key) => {
    if (!confirm('¿Eliminar esta columna y sus datos?')) return;
    onColumnsChange(columns.filter((column) => column.key !== key));
    onRowsChange(
      rows.map((row) => {
        const next = { ...row };
        delete next[key];
        return next;
      }),
    );
  };

  const restore = () => {
    if (!confirm(`¿Restaurar la tabla "${table.name}" a su estado original?`)) return;
    onColumnsChange(table.columns.map((column) => ({ ...column })));
    onRowsChange(table.rows.map((row) => ({ ...row })));
  };

  // Conteo de celdas inválidas para avisar sin bloquear nada.
  const invalidCount = useMemo(() => {
    let count = 0;
    for (const row of rows) {
      for (const column of columns) {
        if (!validateCell(row[column.key], column.type).ok) count += 1;
      }
    }
    return count;
  }, [rows, columns]);

  return (
    <article className="editable-table">
      <header className="editable-table-head">
        <div>
          <h4>{table.name}</h4>
          {table.note && <p className="editable-table-note">{table.note}</p>}
        </div>
        <button type="button" className="doc-action" onClick={restore} title="Restaurar la tabla original">
          <Icon name="restaurar" /> Restaurar
        </button>
      </header>

      <div className="markdown-table-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((column) =>
                column.locked ? (
                  <th key={column.key}>{column.label}</th>
                ) : (
                  <th key={column.key} className="col-head">
                    <div className="col-head-inner">
                      <input
                        className="col-head-input"
                        value={column.label}
                        onChange={(event) => renameColumn(column.key, event.target.value)}
                        aria-label={`Nombre de la columna ${column.label}`}
                        title="Editar el nombre de la columna"
                      />
                      {table.allowAddColumns && (
                        <button
                          type="button"
                          className="col-remove"
                          onClick={() => removeColumn(column.key)}
                          aria-label={`Eliminar columna ${column.label}`}
                          title="Eliminar columna"
                        >
                          <Icon name="quitar" size={13} />
                        </button>
                      )}
                    </div>
                  </th>
                ),
              )}
              {table.allowRemoveRows && <th aria-label="Acciones" />}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => {
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
                      title="Eliminar fila"
                      disabled={rows.length <= 1}
                    >
                      <Icon name="quitar" size={16} />
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
          <button type="button" className="solver-add" onClick={addRow} title="Agregar una fila">
            <Icon name="agregar" size={16} /> Agregar fila
          </button>
        )}
        {table.allowAddColumns && (
          <button type="button" className="solver-add" onClick={addColumn} title="Agregar una columna">
            <Icon name="agregar" size={16} /> Agregar columna
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
