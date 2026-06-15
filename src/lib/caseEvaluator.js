// Evaluador local mínimo, formativo y ampliable.
// No depende de ninguna API externa: todo el análisis ocurre en el navegador.
//
// Estrategia:
//   1. Normaliza el texto (minúsculas, sin tildes, sin puntuación).
//   2. Tokeniza quitando palabras vacías.
//   3. Detecta conceptos obligatorios y palabras clave esperadas.
//   4. Calcula similitud básica (Jaccard) contra la respuesta guía.
//   5. Estima una cobertura ponderada y un nivel.
//   6. Genera retroalimentación estructurada (nunca "correcto/incorrecto").
//
// La forma de cada pregunta se documenta en src/data/cases.js.

const STOPWORDS = new Set([
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'de', 'del', 'al', 'a',
  'y', 'o', 'u', 'que', 'qué', 'se', 'su', 'sus', 'lo', 'le', 'les', 'en', 'con',
  'por', 'para', 'es', 'son', 'ser', 'esta', 'este', 'esto', 'estos', 'estas',
  'como', 'mas', 'pero', 'si', 'no', 'ya', 'me', 'mi', 'tu', 'te', 'nos', 'hay',
  'muy', 'cuando', 'donde', 'porque', 'cual', 'cuales', 'desde', 'hasta', 'entre',
  'sobre', 'tambien', 'asi', 'cada', 'sin', 'ni', 'fue', 'han', 'he', 'ha',
]);

// Minúsculas + elimina tildes/diacríticos + deja solo alfanumérico y espacios.
export function normalize(text) {
  return (text || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenize(text) {
  const norm = normalize(text);
  if (!norm) return [];
  return norm.split(' ').filter((token) => token.length > 2 && !STOPWORDS.has(token));
}

// Stemmer ligero para español: recorta sufijos frecuentes para emparejar
// variantes morfológicas (normalizar / normalización / normalizada → "normaliz").
// No pretende ser perfecto; busca mejorar la cobertura sin dependencias externas.
const STEM_SUFFIXES = [
  'aciones', 'amientos', 'imientos', 'amiento', 'imiento', 'aciones', 'adoras',
  'adores', 'ancias', 'encias', 'acion', 'ación', 'adora', 'antes', 'ables',
  'ibles', 'mente', 'idades', 'idad', 'ador', 'ante', 'able', 'ible', 'ancia',
  'encia', 'ivos', 'ivas', 'osos', 'osas', 'ando', 'iendo', 'adas', 'idas',
  'ados', 'idos', 'amos', 'emos', 'imos', 'aron', 'ieron', 'aba', 'abas',
  'ado', 'ido', 'ada', 'ida', 'ar', 'er', 'ir', 'as', 'os', 'es', 'an',
  'en', 'a', 'o', 'e', 's',
];

export function stem(word) {
  let w = word;
  for (const suffix of STEM_SUFFIXES) {
    if (w.length - suffix.length >= 4 && w.endsWith(suffix)) {
      w = w.slice(0, -suffix.length);
      break;
    }
  }
  return w;
}

// ¿Coincide un término con el texto del usuario?
//   - Frases o stems explícitos: coincidencia por substring del texto normalizado.
//   - Palabras sueltas: además se compara por raíz (stem) con los tokens del usuario.
function termMatches(normText, userStems, term) {
  const normTerm = normalize(term);
  if (!normTerm) return false;
  if (normText.includes(normTerm)) return true;
  if (!normTerm.includes(' ')) return userStems.has(stem(normTerm));
  return false;
}

function matchesAny(normText, userStems, terms = []) {
  return terms.some((term) => termMatches(normText, userStems, term));
}

function detectConcepts(normText, userStems, concepts = []) {
  return concepts.map((concept) => ({
    ...concept,
    found: matchesAny(normText, userStems, concept.terms),
  }));
}

function keywordCoverage(normText, userStems, keywords = []) {
  if (!keywords.length) return { hit: [], miss: [], ratio: 1 };
  const hit = [];
  const miss = [];
  for (const keyword of keywords) {
    const variants = Array.isArray(keyword) ? keyword : [keyword];
    if (matchesAny(normText, userStems, variants)) hit.push(variants[0]);
    else miss.push(variants[0]);
  }
  return { hit, miss, ratio: hit.length / keywords.length };
}

// Similitud léxica simple entre dos conjuntos de tokens.
function jaccard(aTokens, bTokens) {
  const a = new Set(aTokens);
  const b = new Set(bTokens);
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  const union = a.size + b.size - intersection;
  return union ? intersection / union : 0;
}

function levelFromScore(score) {
  if (score >= 85) return 'Excelente';
  if (score >= 70) return 'Bueno';
  if (score >= 50) return 'Bueno pero incompleto';
  if (score >= 30) return 'Regular';
  return 'Insuficiente';
}

// Evalúa la respuesta del usuario contra la definición de la pregunta.
// Devuelve un objeto de feedback formativo y estructurado.
export function evaluateAnswer(answer, question) {
  const userNorm = normalize(answer);
  const userTokens = tokenize(answer);
  const userStems = new Set(userTokens.map(stem));
  const wordCount = userTokens.length;

  const concepts = detectConcepts(userNorm, userStems, question.concepts || []);
  const foundConcepts = concepts.filter((concept) => concept.found);
  const missingConcepts = concepts.filter((concept) => !concept.found);

  const keywords = keywordCoverage(userNorm, userStems, question.keywords || []);

  const guideTokens = tokenize(question.guide || '');
  const similarity = jaccard(userTokens, guideTokens);

  const contradictions = (question.contradictions || [])
    .filter((rule) => matchesAny(userNorm, userStems, rule.terms))
    .map((rule) => rule.message);

  const conceptRatio = concepts.length
    ? foundConcepts.length / concepts.length
    : keywords.ratio;

  let score = Math.round(
    100 * (0.6 * conceptRatio + 0.25 * keywords.ratio + 0.15 * Math.min(1, similarity * 2.5)),
  );

  // Penaliza respuestas demasiado cortas: no alcanzan a desarrollar el argumento.
  if (wordCount < 8) score = Math.min(score, 25);
  else if (wordCount < 18) score = Math.min(score, 62);
  if (contradictions.length) score = Math.max(0, score - 12 * contradictions.length);
  score = Math.max(0, Math.min(100, score));

  const level = wordCount === 0 ? 'Insuficiente' : levelFromScore(score);

  // --- Construcción del feedback ---
  const correct = [];
  if (wordCount >= 12) {
    correct.push('Desarrollas una respuesta argumentada, no solo una etiqueta.');
  }
  for (const concept of foundConcepts) {
    correct.push(concept.praise || `Abordas correctamente ${concept.label.toLowerCase()}.`);
  }
  if (keywords.hit.length) {
    correct.push(`Usas vocabulario técnico esperado: ${keywords.hit.slice(0, 6).join(', ')}.`);
  }

  const improve = [];
  if (wordCount === 0) {
    improve.push('Aún no escribes una respuesta. Empieza por identificar el problema central del caso.');
  } else if (wordCount < 18) {
    improve.push('La respuesta es breve: amplía la explicación y conéctala con las tablas y el flujo del caso.');
  }
  for (const concept of missingConcepts) {
    improve.push(concept.gap || `Profundiza en ${concept.label.toLowerCase()}.`);
  }
  if (wordCount > 0 && similarity < 0.1 && guideTokens.length) {
    improve.push('Tu respuesta se aleja del enfoque esperado; revisa el material de referencia del caso.');
  }

  const missing = missingConcepts.map((concept) => concept.label);

  let recommendation;
  if (missingConcepts.length) {
    const target = missingConcepts[0];
    recommendation =
      target.recommendation ||
      `Agrega una explicación sobre ${target.label.toLowerCase()} y relaciónala con el módulo lechero.`;
  } else if (keywords.miss.length) {
    recommendation = `Refuerza la respuesta usando términos como: ${keywords.miss.slice(0, 4).join(', ')}.`;
  } else {
    recommendation =
      question.recommendation ||
      'Pule la redacción y cierra con una conclusión defendible, como en un examen.';
  }

  return {
    score,
    level,
    wordCount,
    coverage: Math.round(conceptRatio * 100),
    correct,
    improve,
    missing,
    contradictions,
    recommendation,
  };
}

// ---------------------------------------------------------------------------
// Análisis de la TABLA DE PROCESOS (la IA local revisa la caracterización).
//
// Cada celda se reduce a una categoría canónica y se compara con el modelo de
// Calidad (case.analysis.expected). Reconoce varios símbolos equivalentes:
//   - Ráfaga / E/S:  +, ++, +++   o   Baja/Media/Alta (mínima, moderada, máxima…)
//   - Tiempo real / Reutiliza / Sección crítica:  Sí / No  (también "no estricto")
//   - Crecimiento:  Estable / Creciente  (fijo, constante / crece, muy alta…)
// ---------------------------------------------------------------------------

// Texto legible de los símbolos aceptados (se muestra junto a la tabla).
export const acceptedSymbols = [
  { label: 'Ráfaga y E/S', value: '+, ++, +++ o Baja / Media / Alta (también mínima, moderada, máxima).' },
  { label: 'Tiempo real, sección crítica y reutilización', value: 'Sí / No (vale «No estricto»).' },
  { label: 'Crecimiento', value: 'Estable / Creciente (fijo, constante / crece, muy alta).' },
];

function canonLevel(v) {
  const plus = (v.match(/\+/g) || []).length;
  if (plus >= 3) return 'high';
  if (plus === 2) return 'med';
  if (plus === 1) return 'low';
  if (/(muy alta|alt|max|grand|elevad)/.test(v)) return 'high';
  if (/(med|moder|interm)/.test(v)) return 'med';
  if (/(baj|min|poc|pequen|escas)/.test(v)) return 'low';
  return 'other';
}

function canonBool(v) {
  // "no estricto" cuenta como NO; revisa el "no" antes que el "si".
  if (/\bno\b|ningun|nunca|fals/.test(v)) return 'no';
  if (/\bsi\b|^s$|verdad|true|posible|x/.test(v)) return 'yes';
  return 'other';
}

function canonGrowth(v) {
  if (/(crec|aument|muy alta|dinam|sube|escal)/.test(v)) return 'creciente';
  if (/(estable|fij|constant|no crec|igual|plan)/.test(v)) return 'estable';
  return 'other';
}

function canonicalize(value, type) {
  const v = normalize(value);
  if (!v) return null;
  if (type === 'bool') return canonBool(v);
  if (type === 'growth') return canonGrowth(v);
  return canonLevel(v);
}

const READABLE = {
  level: { low: 'baja', med: 'media', high: 'alta' },
  bool: { no: 'No', yes: 'Sí' },
  growth: { estable: 'estable', creciente: 'creciente' },
};

function processLetter(row) {
  const raw = (row?.proceso ?? '').toString().trim();
  const match = raw.match(/^([A-Za-z])\b/);
  return match ? match[1].toUpperCase() : raw.slice(0, 1).toUpperCase();
}

// Analiza la tabla del estudiante contra el modelo del caso.
// `table` = { columns:[{key,label}], rows:[{proceso, ...}] }
// `analysis` = case.analysis = { gradeSpec:{key:type}, expected:{ A:{key:valor} } }
export function analyzeProcessTable(table, analysis) {
  const columns = table?.columns || [];
  const rows = table?.rows || [];
  const gradeSpec = analysis?.gradeSpec || {};
  const expected = analysis?.expected || {};
  const labelOf = (key) => columns.find((column) => column.key === key)?.label || key;

  let filled = 0;
  let totalCells = 0;
  let graded = 0;
  let correctCount = 0;
  const mismatches = [];
  const realtimeFlags = [];

  for (const row of rows) {
    const letter = processLetter(row);
    const name = (row.proceso || letter).toString().trim();

    for (const column of columns) {
      if (column.key === 'proceso') continue;
      totalCells += 1;
      if (normalize(row[column.key])) filled += 1;
    }

    // Trampa clásica de Calidad: marcar tiempo real estricto.
    if ('tiempoReal' in row && canonicalize(row.tiempoReal, 'bool') === 'yes') {
      realtimeFlags.push(name);
    }

    const model = expected[letter];
    if (!model) continue;
    for (const [key, type] of Object.entries(gradeSpec)) {
      if (!(key in model)) continue;
      graded += 1;
      const want = canonicalize(model[key], type);
      const got = canonicalize(row[key], type);
      if (got && got !== 'other' && got === want) {
        correctCount += 1;
      } else if (got && got !== 'other') {
        mismatches.push({
          proceso: name,
          column: labelOf(key),
          your: row[key],
          expected: READABLE[type]?.[want] || model[key],
        });
      }
    }
  }

  const completion = totalCells ? Math.round((filled / totalCells) * 100) : 0;
  const score = graded ? Math.round((correctCount / graded) * 100) : completion;
  const level = filled === 0 ? 'Sin empezar' : levelFromScore(score);

  const strengths = [];
  if (completion === 100) strengths.push('Completaste todas las celdas de la tabla.');
  else if (completion >= 60) strengths.push(`Avanzaste buena parte de la tabla (${completion}% completa).`);
  if (correctCount > 0) strengths.push(`${correctCount} de ${graded} caracterizaciones clave coinciden con el modelo de Calidad.`);
  if (graded > 0 && realtimeFlags.length === 0 && 'tiempoReal' in (rows[0] || {})) {
    strengths.push('Bien: no marcaste tiempo real estricto donde no corresponde.');
  }

  const issues = [];
  if (realtimeFlags.length) {
    issues.push(
      `Marcaste tiempo real en ${realtimeFlags.join(', ')}. Calidad casi nunca defiende tiempo real estricto cuando muchas instancias compiten por el CPU; justifícalo muy bien o descártalo.`,
    );
  }
  for (const m of mismatches.slice(0, 8)) {
    issues.push(`${m.proceso} · ${m.column}: pusiste «${m.your}», pero por comportamiento se defiende mejor «${m.expected}».`);
  }
  const emptyCells = totalCells - filled;
  if (emptyCells > 0) {
    issues.push(`Quedan ${emptyCells} de ${totalCells} celdas sin completar. Caracterizar es el primer paso: primero el comportamiento, después el algoritmo.`);
  }

  let recommendation;
  if (filled === 0) {
    recommendation = 'Empieza por separar cada proceso por ráfaga, E/S y si es o no tiempo real; el resto sale de ahí.';
  } else if (mismatches.length) {
    recommendation = 'Revisa las celdas señaladas: la categoría se decide por el comportamiento del proceso, no por su nombre.';
  } else if (emptyCells > 0) {
    recommendation = 'Completa las celdas que faltan para poder defender el algoritmo con toda la tabla.';
  } else {
    recommendation = 'Tu caracterización está alineada con el modelo. Úsala para sustentar las respuestas abiertas.';
  }

  return {
    score,
    level,
    completion,
    graded,
    correctCount,
    emptyCells,
    totalCells,
    strengths,
    issues,
    recommendation,
  };
}
