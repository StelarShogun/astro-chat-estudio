// Set de iconos SVG en línea (estilo trazo, 24x24), sin dependencias.
// Cada icono es el contenido interno de un <svg>; los componentes Icon.astro e
// Icon.jsx lo envuelven con los atributos comunes (stroke currentColor, etc.).
// Los iconos son decorativos: van acompañados de texto, así que se marcan
// aria-hidden en los componentes.

export const icons = {
  // --- Navegación de secciones ---
  metodo: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
  resolver: '<path d="M4 20h4L18 10l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  examen: '<path d="M9 3v6l-4.6 8.6A1.5 1.5 0 0 0 5.7 20h12.6a1.5 1.5 0 0 0 1.3-2.4L15 9V3"/><path d="M8 3h8"/><path d="M7.5 14h9"/>',
  transcripcion: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4"/><path d="M8.5 21h7"/>',
  notas: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18"/><path d="M12.5 8h3.5"/><path d="M12.5 12h3.5"/>',
  preguntas: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.4 2.4 0 1 1 3.3 2.2c-.8.4-1 .8-1 1.6"/><path d="M12 16.6h.01"/>',
  examenes: '<rect x="6" y="4" width="12" height="16" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8.5 12l2 2 4-4"/>',
  medicore: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  teoria: '<path d="M12 6c-1.6-1-4-1.5-7-1.5V18c3 0 5.4.5 7 1.5 1.6-1 4-1.5 7-1.5V4.5c-3 0-5.4.5-7 1.5z"/><path d="M12 6v13.5"/>',
  libro: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v17H6.5A1.5 1.5 0 0 0 5 21.5z"/><path d="M5 17.5A1.5 1.5 0 0 1 6.5 16H19"/>',

  // --- Acciones ---
  copiar: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
  descargar: '<path d="M12 4v11"/><path d="M8 11l4 4 4-4"/><path d="M5 19h14"/>',
  reiniciar: '<path d="M3 12a9 9 0 1 0 2.7-6.4L3 8"/><path d="M3 3v5h5"/>',
  restaurar: '<path d="M9 14l-4-4 4-4"/><path d="M5 10h8a6 6 0 0 1 0 12h-3"/>',
  abrir: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 13.5V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.5"/>',
  agregar: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  quitar: '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
  evaluar: '<path d="M12 3l1.6 4.9L18.5 9l-4.9 1.6L12 15l-1.6-4.4L5.5 9l4.9-1.1z"/><path d="M18 14v3"/><path d="M19.5 15.5h-3"/>',
  guia: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  ocultar: '<path d="M3 3l18 18"/><path d="M10.6 6.2A10.8 10.8 0 0 1 12 6c6.5 0 10 6 10 6a16 16 0 0 1-3.3 3.9"/><path d="M6.3 7.3A16 16 0 0 0 2 12s3.5 6 10 6a10.7 10.7 0 0 0 3.7-.6"/><path d="M9.9 10.1a3 3 0 0 0 4.2 4.2"/>',
  arriba: '<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/>',
  pantalla: '<path d="M4 9V5a1 1 0 0 1 1-1h4"/><path d="M20 9V5a1 1 0 0 0-1-1h-4"/><path d="M4 15v4a1 1 0 0 0 1 1h4"/><path d="M20 15v4a1 1 0 0 1-1 1h-4"/>',
  pantallaSalir: '<path d="M9 4H6a2 2 0 0 0-2 2v3"/><path d="M15 4h3a2 2 0 0 1 2 2v3"/><path d="M9 20H6a2 2 0 0 1-2-2v-3"/><path d="M15 20h3a2 2 0 0 0 2-2v-3"/>',
  contraer: '<path d="M15 6l-6 6 6 6"/>',
  expandir: '<path d="M9 6l6 6-6 6"/>',
  capitulo: '<path d="M4 5h12"/><path d="M4 10h12"/><path d="M4 15h8"/><path d="M16 13l4 4-4 4"/><path d="M20 17h-8"/>',

  // --- Feedback / diagnóstico ---
  correcto: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  mejorar: '<path d="M12 3l9 16H3z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',
  ausente: '<circle cx="12" cy="12" r="9" stroke-dasharray="4 3"/><path d="M9 12h6"/>',
  contradiccion: '<path d="M8.2 3h7.6L21 8.2v7.6L15.8 21H8.2L3 15.8V8.2z"/><path d="M9 9l6 6"/><path d="M15 9l-6 6"/>',
  recomendacion: '<path d="M9.5 18h5"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.7.6 1.1 1.2 1.2 2.4h5.2c.1-1.2.5-1.8 1.2-2.4A6 6 0 0 0 12 3z"/>',
  nivel: '<path d="M4 19a8 8 0 1 1 16 0"/><path d="M12 15l4-5"/>',
  alerta: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6"/><path d="M12 16h.01"/>',
  estrella: '<path d="M12 3.5l2.6 5.5 6 .7-4.4 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.4 9.7l6-.7z"/>',
  estrellaLlena: '<path fill="currentColor" stroke="currentColor" d="M12 3.5l2.6 5.5 6 .7-4.4 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.4 9.7l6-.7z"/>',
};
