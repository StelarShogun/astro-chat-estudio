import { icons } from '../lib/icons.js';

// Icono SVG en línea para componentes React. Decorativo (aria-hidden), pensado
// para acompañar texto corto en botones, encabezados y diagnósticos.
export default function Icon({ name, size = 18, className = '' }) {
  const body = icons[name] || '';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
