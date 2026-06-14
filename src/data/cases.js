// Casos de examen interactivos, con la lógica de Calidad.
//
// Cada caso reproduce un examen real del curso (ordeño/potrero y salud/datos
// masivos) y permite practicarlo de forma activa:
//   - processes: tarjetas de referencia con cada proceso del enunciado.
//   - tables: la TABLA DE ANÁLISIS DE PROCESOS, editable (el estudiante
//     caracteriza ráfaga, E/S, tiempo real, importancia, escritura...).
//   - questions: las preguntas reales del examen, con respuesta guía,
//     conceptos obligatorios, palabras clave, criterios y contradicciones que
//     alimentan al evaluador local (src/lib/caseEvaluator.js).
//   - consistency(tables): diagnóstico en vivo que avisa los descuidos típicos
//     (marcar "tiempo real" a la ligera, dejar celdas sin caracterizar).
//
// Para agregar otro examen, añade un objeto al arreglo `cases` del módulo.
// No hace falta tocar componentes.

function trimv(value) {
  return (value ?? '').toString().trim();
}

function stripAccents(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Columnas de análisis compartidas por las tablas de caracterización.
// La primera (proceso) viene rellena; las demás las completa el estudiante.
function caracterizacionTable(columns, processes) {
  return {
    id: 'caracterizacion',
    name: 'Tabla de análisis de procesos',
    note: 'Caracteriza cada proceso antes de decidir el algoritmo. Puedes editar, agregar o quitar filas y restaurar el original.',
    allowAddRows: true,
    allowRemoveRows: true,
    columns: [{ key: 'proceso', label: 'Proceso', type: 'text' }, ...columns],
    rows: processes.map((process) => ({
      proceso: `${process.id} — ${process.name}`,
      ...Object.fromEntries(columns.map((column) => [column.key, ''])),
    })),
  };
}

// Diagnóstico en vivo de una tabla de caracterización (sirve para cualquier
// examen porque busca la columna `tiempoReal` y cuenta celdas vacías).
function caracterizacionDiagnostico(tables) {
  const issues = [];
  let empty = 0;
  let totalCells = 0;

  for (const rows of Object.values(tables)) {
    if (!Array.isArray(rows)) continue;
    for (const row of rows) {
      const proceso = trimv(row.proceso) || 'Un proceso';
      if ('tiempoReal' in row) {
        const value = stripAccents(trimv(row.tiempoReal).toLowerCase());
        if (/(^|\s)si(\s|,|\.|;|:|$)/.test(value) && !value.includes('no ')) {
          issues.push({
            level: 'warn',
            message: `${proceso}: lo marcas como tiempo real. Calidad casi nunca defiende tiempo real estricto cuando muchas instancias compiten; justifícalo muy bien o descártalo.`,
          });
        }
      }
      for (const [key, value] of Object.entries(row)) {
        if (key === 'proceso') continue;
        totalCells += 1;
        if (!trimv(value)) empty += 1;
      }
    }
  }

  if (empty > 0) {
    issues.push({
      level: 'warn',
      message: `Tienes ${empty} de ${totalCells} celdas de análisis sin completar. Caracterizar bien es el primer paso de Calidad: primero el comportamiento, después el algoritmo.`,
    });
  }

  return issues;
}

const COLS_EXAMEN1 = [
  { key: 'rafaga', label: 'Ráfaga (CPU)', type: 'text' },
  { key: 'es', label: 'E/S', type: 'text' },
  { key: 'tiempoReal', label: '¿Tiempo real?', type: 'text' },
  { key: 'importancia', label: 'Importancia', type: 'text' },
  { key: 'lecturaEscritura', label: 'Lectura / escritura', type: 'text' },
  { key: 'seccionCritica', label: 'Riesgo sección crítica', type: 'text' },
];

const examen1 = {
  id: 'examen1-ordeno-potrero',
  title: 'Primer examen: ordeño y potrero',
  badge: 'CPU · archivos · sección crítica',
  context:
    'Finca lechera automatizada. Se modela con ocho procesos (A a H): peso de leche por pezón, siete ' +
    'dispositivos de análisis de leche, una IA que detecta anomalías y dispara tratamiento, las agujas ' +
    'del cepo, la ubicación de pezoneras por infrarrojo, un sensor de flujo de leche, el suministro de ' +
    'concentrado y el control de acceso al potrero por humedad, temperatura y brillo solar.',
  problem:
    'Hay que diseñar la planificación de CPU justificada con el BCP y la tabla de procesos, identificar ' +
    'los procesos con riesgo de sección crítica por escritura compartida y caracterizar el archivo que ' +
    'construye cada dispositivo (no el proceso completo). El error clásico es decir que "todo es tiempo ' +
    'real" porque la finca suena automática.',
  processes: [
    { id: 'A', name: 'Peso de leche por pezón/vaca', detail: 'Sensores de peso registran cuánta leche da cada pezón de cada vaca durante el ordeño.' },
    { id: 'B', name: 'Siete dispositivos de análisis de leche', detail: 'Siete equipos analizan composición y calidad de la leche (grasa, proteína, anomalías).' },
    { id: 'C', name: 'IA de tratamiento por anomalías', detail: 'Una IA detecta anomalías y propone o dispara un tratamiento; gana importancia por la alerta.' },
    { id: 'D', name: 'Agujas de cepo', detail: 'Actuadores del cepo que inmovilizan o liberan a la vaca.' },
    { id: 'E', name: 'Ubicación de pezoneras por infrarrojo', detail: 'Sensores infrarrojos ubican los pezones para colocar las pezoneras automáticamente.' },
    { id: 'F', name: 'Sensor de flujo de leche', detail: 'Mide el flujo de leche durante el ordeño para saber cuándo termina.' },
    { id: 'G', name: 'Suministro de concentrado', detail: 'Dosifica alimento concentrado a cada vaca según su producción.' },
    { id: 'H', name: 'Acceso al potrero (humedad, temperatura, brillo)', detail: 'Controla el acceso al potrero leyendo tres variables: humedad, temperatura y brillo solar.' },
  ],
  reference: [
    {
      title: 'Caracterizar antes de decidir',
      detail: 'No se empieza nombrando el algoritmo. Primero se separan procesos por ráfaga, E/S, importancia y escritura; después se decide.',
    },
    {
      title: 'Tiempo real no es por el nombre',
      detail: 'Que la finca sea automática no hace que todo sea tiempo real. Si muchas vacas o dispositivos compiten, casi nada se defiende como tiempo real estricto.',
    },
    {
      title: 'Buffer vs caché',
      detail: 'Buffer responde a transferencia y ritmos (el dispositivo produce más rápido de lo que el proceso consume). Caché responde a reutilización del mismo dato.',
    },
    {
      title: 'Archivo por dato de origen',
      detail: 'Cada dispositivo entrega su propio dato crudo. No se clasifica el proceso completo como un solo archivo.',
    },
  ],
  tablesIntro:
    'Esta es la tabla de análisis de procesos del examen. Caracteriza cada proceso (ráfaga, E/S, tiempo ' +
    'real, importancia, escritura, sección crítica) y modifícala libremente; el diagnóstico de abajo te ' +
    'avisa los descuidos típicos de Calidad.',
  tables: [caracterizacionTable(COLS_EXAMEN1, [
    { id: 'A', name: 'Peso de leche por pezón/vaca' },
    { id: 'B', name: 'Siete dispositivos de análisis de leche' },
    { id: 'C', name: 'IA de tratamiento por anomalías' },
    { id: 'D', name: 'Agujas de cepo' },
    { id: 'E', name: 'Ubicación de pezoneras por infrarrojo' },
    { id: 'F', name: 'Sensor de flujo de leche' },
    { id: 'G', name: 'Suministro de concentrado' },
    { id: 'H', name: 'Acceso al potrero (humedad, temperatura, brillo)' },
  ])],
  consistencyTitle: 'Revisión de tu caracterización (en vivo)',
  consistency: caracterizacionDiagnostico,
  questions: [
    {
      id: 'e1-cpu',
      prompt: 'Diseñe y justifique el algoritmo de planificación de CPU usando el BCP y la tabla de procesos.',
      criteria: [
        'Caracteriza ráfaga, E/S e importancia antes de nombrar un algoritmo.',
        'Descarta FCFS puro y el "tiempo real" automático.',
        'Propone colas múltiples o prioridades justificadas por el comportamiento.',
      ],
      keywords: ['rafaga', ['colas multiples', 'colas', 'prioridad'], ['entrada y salida', 'e/s'], 'importancia'],
      concepts: [
        {
          id: 'caracterizar',
          label: 'caracterizar por ráfaga, E/S e importancia',
          terms: ['caracteriz', 'rafaga', 'entrada y salida', 'e/s', 'es alta', 'importancia', 'comportamiento'],
          praise: 'Caracterizas por comportamiento (ráfaga, E/S, importancia) antes de elegir el algoritmo.',
          gap: 'Empieza caracterizando: las lecturas de sensores son E/S con ráfaga baja; la IA consume CPU y gana importancia por la alerta.',
        },
        {
          id: 'colas',
          label: 'usar colas múltiples o prioridades justificadas',
          terms: ['colas multiples', 'multiples colas', 'dos colas', 'prioridad', 'prioridades', 'retroalimentacion'],
          praise: 'Propones colas múltiples / prioridades, separando las lecturas cortas de la IA.',
          gap: 'Propón colas múltiples o prioridades: una cola para lecturas cortas de E/S y otra para la IA por su impacto.',
        },
        {
          id: 'descarta-fcfs',
          label: 'descartar FCFS puro',
          terms: ['fcfs', 'primero en llegar', 'no fcfs', 'descarto fcfs', 'monopol'],
          praise: 'Descartas FCFS puro porque un proceso largo atrasaría a los demás.',
          gap: 'Descarta FCFS puro: un proceso largo (por ejemplo la IA) atrasaría las lecturas y la alerta.',
        },
        {
          id: 'tiempo-real',
          label: 'no clasificar todo como tiempo real',
          terms: ['no tiempo real', 'no es tiempo real', 'muchas vacas', 'compiten', 'tiempo real estricto'],
          praise: 'No caes en "todo es tiempo real": reconoces que muchas instancias compiten.',
          gap: 'Aclara que casi nada es tiempo real estricto: con cientos de vacas/dispositivos compitiendo, se quitan CPU entre sí.',
        },
      ],
      contradictions: [
        {
          terms: ['todo es tiempo real', 'todos son tiempo real', 'es tiempo real porque es automatico'],
          message: 'No todo es tiempo real por sonar automático: con cientos de vacas compitiendo, casi nada se defiende como tiempo real estricto.',
        },
      ],
      recommendation:
        'Caracteriza primero (ráfaga, E/S, importancia), descarta FCFS puro y el tiempo real automático, y defiende colas múltiples o prioridades justificadas por el BCP.',
      guide:
        'Primero caracterizo cada proceso. Las lecturas de sensores (peso, flujo, infrarrojo, potrero) tienen ' +
        'ráfaga baja y mucha E/S; la IA de tratamiento consume más CPU y gana importancia por la alerta. No uso ' +
        'FCFS puro porque un proceso largo atrasaría la alerta, y no digo que todo sea tiempo real solo porque la ' +
        'finca es automática: con cientos de vacas compitiendo casi nada se defiende como tiempo real estricto. ' +
        'Defiendo colas múltiples o prioridades: una cola para las lecturas cortas con mucha E/S y otra para la ' +
        'IA y la alerta, con prioridad justificada por su impacto, apoyándome en el BCP y la tabla de procesos.',
    },
    {
      id: 'e1-seccion-critica',
      prompt: 'Identifique qué procesos tienen riesgo de sección crítica y por qué.',
      criteria: [
        'Reconoce que el riesgo viene de escritura concurrente sobre un recurso/archivo compartido.',
        'Señala procesos concretos que escriben datos compartidos.',
        'Propone exclusión mutua o sincronización.',
      ],
      keywords: [['seccion critica', 'sección crítica'], 'escritura', ['exclusion mutua', 'exclusión mutua'], 'compartido'],
      concepts: [
        {
          id: 'escritura-compartida',
          label: 'la escritura concurrente sobre un recurso compartido',
          terms: ['escritura compartida', 'escriben el mismo', 'recurso compartido', 'mismo archivo', 'mismo registro', 'concurrente', 'simultane', 'a la vez'],
          praise: 'Ubicas el riesgo donde varios procesos escriben el mismo recurso a la vez.',
          gap: 'El riesgo aparece cuando dos o más procesos escriben el mismo archivo/registro a la vez (por ejemplo el histórico de leche por vaca).',
        },
        {
          id: 'identifica',
          label: 'identificar procesos concretos',
          terms: ['peso de leche', 'registro de leche', 'historico', 'analisis de leche', 'base de datos', 'concentrado'],
          praise: 'Identificas procesos concretos que comparten escritura (registro de leche, histórico).',
          gap: 'Nombra procesos concretos: el registro de leche por vaca o el histórico que varios escriben en paralelo.',
        },
        {
          id: 'exclusion',
          label: 'proponer exclusión mutua / sincronización',
          terms: ['exclusion mutua', 'sincroniz', 'semaforo', 'candado', 'mutex', 'bloqueo', 'region critica'],
          praise: 'Propones exclusión mutua o sincronización para proteger la sección crítica.',
          gap: 'Propón exclusión mutua o sincronización (semáforo/candado) para serializar la escritura compartida.',
        },
      ],
      contradictions: [
        {
          terms: ['no hay seccion critica', 'ningun proceso tiene riesgo', 'no existe seccion critica'],
          message: 'Si dos procesos escriben el mismo registro o archivo a la vez, sí hay riesgo de sección crítica: hay que justificarlo, no descartarlo de entrada.',
        },
      ],
      recommendation:
        'Localiza la escritura compartida (qué procesos escriben el mismo dato a la vez), nómbralos y propón exclusión mutua o sincronización.',
      guide:
        'El riesgo de sección crítica no está en leer, sino en escribir el mismo recurso al mismo tiempo. Los ' +
        'procesos que registran el peso/análisis de leche y actualizan un histórico compartido por vaca pueden ' +
        'chocar si escriben en paralelo; lo mismo el suministro de concentrado si actualiza un registro común. ' +
        'Para esos casos defiendo exclusión mutua (semáforo o candado) que serialice la escritura, dejando libre ' +
        'la lectura. Los sensores que solo leen y escriben su propio archivo no comparten sección crítica.',
    },
    {
      id: 'e1-archivos',
      prompt: 'Caracterice el archivo que construye cada dispositivo (no el proceso completo). ¿Qué estructura, acceso y buffer/caché justifica?',
      criteria: [
        'No generaliza el proceso completo como un solo archivo.',
        'Parte del dato de origen de cada dispositivo.',
        'Define estructura/acceso y justifica buffer o caché.',
      ],
      keywords: ['dispositivo', 'registros', 'secuencial', 'buffer'],
      concepts: [
        {
          id: 'por-dispositivo',
          label: 'caracterizar por dispositivo / dato de origen',
          terms: ['cada dispositivo', 'por dispositivo', 'dato de origen', 'dato crudo', 'no el proceso completo', 'cada sensor'],
          praise: 'Partes del dato de origen de cada dispositivo, no del proceso completo.',
          gap: 'Empieza por el dato de origen de cada dispositivo: qué entrega el sensor de flujo, el de temperatura, el infrarrojo, etc.',
        },
        {
          id: 'estructura-acceso',
          label: 'definir estructura y acceso',
          terms: ['registros', 'timestamp', 'secuencial', 'indexado', 'directo', 'estructura', 'binario'],
          praise: 'Defines estructura y acceso (registros con timestamp, secuencial o indexado).',
          gap: 'Define estructura y acceso: registros con timestamp+valor, secuencial para histórico o indexado si se consulta por rangos.',
        },
        {
          id: 'buffer-cache',
          label: 'justificar buffer o caché',
          terms: ['buffer', 'cache', 'reutiliz', 'transferencia', 'ritmo', 'mas rapido'],
          praise: 'Justificas buffer (transferencia/ritmo) y caché solo si hay reutilización.',
          gap: 'Justifica buffer cuando el dispositivo produce más rápido de lo que se consume, y caché solo si el dato se reutiliza.',
        },
      ],
      contradictions: [
        {
          terms: ['un solo archivo', 'el proceso completo es un archivo', 'todos los dispositivos generan el mismo archivo'],
          message: 'No se clasifica el proceso completo como un archivo: cada dispositivo entrega su propio dato de origen y construye su propio archivo.',
        },
      ],
      recommendation:
        'Caracteriza un archivo por dispositivo (dato de origen → estructura → acceso) y justifica buffer por transferencia, caché solo si hay reutilización.',
      guide:
        'No clasifico el proceso completo como un archivo: cada dispositivo entrega su propio dato de origen. El ' +
        'sensor de temperatura y el de brillo del potrero generan registros periódicos (timestamp + valor); el ' +
        'sensor de flujo entrega muestras durante el ordeño; el análisis de leche produce registros de resultados. ' +
        'La estructura suele ser de registros; el acceso, secuencial si solo se guarda el histórico o indexado por ' +
        'tiempo si se consultan rangos. Defiendo buffer cuando el dispositivo produce más rápido de lo que el ' +
        'proceso consume, y caché solo si esos datos se reutilizan; si el dato siempre es nuevo, no pongo caché.',
    },
  ],
};

const COLS_EXAMEN2 = [
  { key: 'rafaga', label: 'Ráfaga (CPU)', type: 'text' },
  { key: 'es', label: 'E/S', type: 'text' },
  { key: 'tiempoReal', label: '¿Tiempo real?', type: 'text' },
  { key: 'memoria', label: 'Memoria solicitada', type: 'text' },
  { key: 'crecimiento', label: 'Crecimiento', type: 'text' },
  { key: 'memoriaVirtual', label: '¿Memoria virtual?', type: 'text' },
];

const examen2 = {
  id: 'examen2-salud-datos',
  title: 'Segundo examen: salud y datos masivos',
  badge: 'Memoria · memoria virtual',
  context:
    'Sistema de salud y datos masivos. Se combinan la decodificación de ADN, el monitoreo de signos ' +
    'vitales de bebés, la predicción de pandemias, perfiles de redes sociales, web services clínicos con ' +
    'integración a Hacienda y el análisis de hábitos alimenticios. El foco está en administración de ' +
    'memoria y memoria virtual.',
  problem:
    'Hay que decidir si aplica memoria virtual y por qué, justificar por qué no bastan particiones fijas, ' +
    'mapa de bits, listas ligadas ni el sistema de socios, y recomendar una política de reemplazo según si ' +
    'interesa conservar páginas frecuentes. La política no se elige por su nombre.',
  processes: [
    { id: 'A', name: 'Decodificación de ADN', detail: 'Ráfaga alta y mucha E/S por lectura; construye archivos de texto/caracteres muy grandes.' },
    { id: 'B', name: 'Monitorización de bebés', detail: 'Signos vitales (latidos, respiración): E/S muy alta y ráfaga baja en múltiples centros.' },
    { id: 'C', name: 'Predicción de pandemias', detail: 'Bodegas de datos: CPU y memoria muy altos, con crecimiento fuerte.' },
    { id: 'D', name: 'Perfiles de redes sociales', detail: 'Gran volumen de datos de perfiles; lectura/escritura intensiva.' },
    { id: 'E', name: 'Web services clínicos / Hacienda', detail: 'Integración con servicios externos; E/S por red y validaciones.' },
    { id: 'F', name: 'Hábitos alimenticios', detail: 'Procesa strings de compras; memoria y crecimiento altos.' },
  ],
  reference: [
    {
      title: 'El problema de la memoria virtual',
      detail: 'Con intercambio, la pregunta es qué queda en memoria principal y qué va al área de intercambio, no cuánta RAM comprar.',
    },
    {
      title: 'La política no se elige por su nombre',
      detail: 'Si interesa conservar páginas frecuentes, segunda oportunidad o reloj se defienden mejor que FIFO. Si cada iteración trae datos nuevos, FIFO basta.',
    },
    {
      title: 'Por qué fallan los modelos sin intercambio',
      detail: 'Particiones fijas y socios desperdician/rompen por crecimiento; el mapa de bits busca bloques contiguos; las listas ligadas se vuelven lentas al crecer.',
    },
  ],
  tablesIntro:
    'Caracteriza cada proceso pensando en memoria: ráfaga, E/S, memoria solicitada, crecimiento y si ' +
    'defiendes memoria virtual. Modifica la tabla libremente; el diagnóstico te avisa los descuidos típicos.',
  tables: [caracterizacionTable(COLS_EXAMEN2, [
    { id: 'A', name: 'Decodificación de ADN' },
    { id: 'B', name: 'Monitorización de bebés' },
    { id: 'C', name: 'Predicción de pandemias' },
    { id: 'D', name: 'Perfiles de redes sociales' },
    { id: 'E', name: 'Web services clínicos / Hacienda' },
    { id: 'F', name: 'Hábitos alimenticios' },
  ])],
  consistencyTitle: 'Revisión de tu caracterización (en vivo)',
  consistency: caracterizacionDiagnostico,
  questions: [
    {
      id: 'e2-memoria-virtual',
      prompt: '¿Aplicaría memoria virtual? Justifíquelo y proponga una política de reemplazo.',
      criteria: [
        'Defiende memoria virtual por datos masivos y crecimiento alto.',
        'Elige la política según si interesa conservar páginas frecuentes.',
        'No elige la política por su nombre.',
      ],
      keywords: [['memoria virtual', 'intercambio'], 'reemplazo', ['segunda oportunidad', 'reloj'], 'paginas'],
      concepts: [
        {
          id: 'memoria-virtual',
          label: 'defender memoria virtual con intercambio',
          terms: ['memoria virtual', 'intercambio', 'swap', 'area de intercambio', 'paginacion', 'memoria principal'],
          praise: 'Defiendes memoria virtual: decides qué queda en memoria principal y qué va al intercambio.',
          gap: 'Defiende memoria virtual: el problema es qué queda en memoria principal y qué va al área de intercambio.',
        },
        {
          id: 'crecimiento',
          label: 'el porqué: datos masivos y crecimiento',
          terms: ['datos masivos', 'crecimiento', 'volumen', 'adn', 'pandemias', 'crecen', 'bodegas de datos'],
          praise: 'Justificas por datos masivos y crecimiento alto (ADN, pandemias, hábitos).',
          gap: 'Justifica el porqué: ADN, pandemias y hábitos son datos masivos con crecimiento alto que no caben en bloques fijos.',
        },
        {
          id: 'reemplazo',
          label: 'proponer una política de reemplazo',
          terms: ['reemplazo', 'fifo', 'segunda oportunidad', 'reloj', 'lru', 'politica'],
          praise: 'Propones una política de reemplazo concreta.',
          gap: 'Propón una política de reemplazo (FIFO, segunda oportunidad/reloj, LRU) y justifícala.',
        },
        {
          id: 'reutilizacion',
          label: 'elegir según la reutilización de páginas',
          terms: ['reutiliz', 'paginas frecuentes', 'frecuencia de acceso', 'localidad', 'se repiten'],
          praise: 'Eliges la política según si las páginas se reutilizan, no por su nombre.',
          gap: 'La clave es la reutilización: si interesa conservar páginas frecuentes, reloj/segunda oportunidad superan a FIFO.',
        },
      ],
      contradictions: [
        {
          terms: ['mas ram', 'comprar memoria', 'agregar ram', 'mas memoria fisica'],
          message: 'No basta "más RAM": con datos masivos y crecimiento alto, el problema es qué queda en memoria principal y qué va al área de intercambio.',
        },
      ],
      recommendation:
        'Defiende memoria virtual por datos masivos y crecimiento, y elige la política de reemplazo según si interesa conservar páginas frecuentes (no por su nombre).',
      guide:
        'Sí aplico memoria virtual, porque hay procesos de datos masivos con crecimiento alto (ADN, pandemias, ' +
        'hábitos) que no caben en bloques fijos: el problema no es cuánta RAM hay, sino qué queda en memoria ' +
        'principal y qué se manda al área de intercambio. La política de reemplazo no se elige por su nombre: ' +
        'pregunto si interesa conservar páginas usadas con frecuencia. Si sí, segunda oportunidad o reloj se ' +
        'defienden mejor que FIFO; si cada iteración trae datos nuevos, FIFO basta y es más barata.',
    },
    {
      id: 'e2-modelos',
      prompt: '¿Por qué no bastan particiones fijas, mapa de bits, listas ligadas ni el sistema de socios (buddies)?',
      criteria: [
        'Relaciona la insuficiencia con el crecimiento de los procesos.',
        'Explica al menos dos modelos con su limitación concreta.',
        'Concluye que la salida es el intercambio / memoria virtual.',
      ],
      keywords: [['particiones fijas', 'particiones'], 'mapa de bits', 'listas ligadas', ['socios', 'buddies'], 'crecimiento'],
      concepts: [
        {
          id: 'crecimiento-bloque',
          label: 'el crecimiento rompe los bloques fijos',
          terms: ['crecimiento', 'crecen', 'no caben', 'bloque fijo', 'reasign', 'particiones fijas'],
          praise: 'Conectas la insuficiencia con el crecimiento: los bloques fijos no contienen procesos que crecen.',
          gap: 'Explica que las particiones fijas fallan porque los procesos crecen y no caben en un bloque fijo.',
        },
        {
          id: 'mapa-bits',
          label: 'el mapa de bits busca bloques contiguos',
          terms: ['mapa de bits', 'bloques contiguos', 'huecos', 'contigua'],
          praise: 'Señalas que el mapa de bits exige bloques contiguos y deja huecos.',
          gap: 'Agrega que el mapa de bits busca bloques contiguos y deja huecos inútiles cuando hay crecimiento.',
        },
        {
          id: 'listas-buddies',
          label: 'listas ligadas y socios también fallan',
          terms: ['listas ligadas', 'busqueda lenta', 'recorrer', 'socios', 'buddies', 'potencias de 2', 'desperdicio interno'],
          praise: 'Explicas el costo de listas ligadas (búsqueda lenta) y de socios (desperdicio por potencias de 2).',
          gap: 'Menciona que las listas ligadas se vuelven lentas al crecer y los socios desperdician al redondear a potencias de 2.',
        },
        {
          id: 'salida',
          label: 'la salida es el intercambio / memoria virtual',
          terms: ['intercambio', 'memoria virtual', 'swap', 'paginacion'],
          praise: 'Concluyes que la salida es el intercambio / memoria virtual.',
          gap: 'Cierra concluyendo que la única salida viable es el intercambio con memoria virtual.',
        },
      ],
      contradictions: [
        {
          terms: ['particiones fijas funcionan', 'basta con particiones', 'el mapa de bits resuelve'],
          message: 'Esos modelos sin intercambio no resuelven el caso: el crecimiento de los procesos los rompe o los desperdicia.',
        },
      ],
      recommendation:
        'Explica cada modelo con su limitación concreta (crecimiento, contigüidad, búsqueda lenta, potencias de 2) y concluye que la salida es el intercambio / memoria virtual.',
      guide:
        'Ninguno de esos modelos resuelve el caso porque los procesos crecen. Las particiones fijas (de mismo o ' +
        'varios tamaños) no contienen un proceso que crece y obligan a reasignaciones caras. El mapa de bits busca ' +
        'bloques contiguos y deja huecos inútiles al inicio. Las listas ligadas crecen, pero la búsqueda se vuelve ' +
        'lenta al haber muchos nodos. El sistema de socios desperdicia memoria al redondear a potencias de 2. Por ' +
        'eso la única salida viable es el intercambio con memoria virtual.',
    },
    {
      id: 'e2-paginas',
      prompt: 'Si hay consultas frecuentes, ¿qué páginas conviene mantener y con qué política de reemplazo?',
      criteria: [
        'Reconoce que conviene mantener las páginas usadas con frecuencia.',
        'Propone una política acorde (segunda oportunidad/reloj/LRU).',
        'Descarta FIFO cuando hay reutilización.',
      ],
      keywords: [['paginas frecuentes', 'frecuentes'], ['segunda oportunidad', 'reloj'], 'reutilizacion', 'fifo'],
      concepts: [
        {
          id: 'mantener-frecuentes',
          label: 'mantener las páginas frecuentes',
          terms: ['paginas frecuentes', 'frecuentemente', 'reutiliz', 'conservar', 'se repiten', 'localidad'],
          praise: 'Reconoces que conviene mantener en memoria las páginas usadas con frecuencia.',
          gap: 'Lo central es mantener las páginas que se usan con frecuencia, porque hay reutilización.',
        },
        {
          id: 'politica',
          label: 'una política que proteja páginas frecuentes',
          terms: ['segunda oportunidad', 'reloj', 'lru', 'bit r', 'bit de referencia'],
          praise: 'Propones segunda oportunidad, reloj o LRU para proteger las páginas frecuentes.',
          gap: 'Propón segunda oportunidad, reloj o LRU: usan el bit de referencia para proteger lo que se reutiliza.',
        },
        {
          id: 'descarta-fifo',
          label: 'descartar FIFO cuando hay reutilización',
          terms: ['no fifo', 'descarto fifo', 'fifo no', 'fifo saca', 'fifo es peor'],
          praise: 'Descartas FIFO porque sacaría páginas frecuentes solo por su antigüedad.',
          gap: 'Descarta FIFO aquí: sacaría páginas frecuentes solo por antigüedad, sin mirar si se reutilizan.',
        },
      ],
      contradictions: [
        {
          terms: ['fifo es la mejor', 'siempre fifo', 'uso fifo porque es simple'],
          message: 'Con consultas frecuentes, FIFO es mala idea: saca páginas reutilizadas por antigüedad. Mejor segunda oportunidad o reloj.',
        },
      ],
      recommendation:
        'Mantén las páginas usadas con frecuencia y defiende segunda oportunidad, reloj o LRU; descarta FIFO porque ignora la reutilización.',
      guide:
        'Si hay consultas frecuentes, conviene mantener en memoria principal las páginas que se reutilizan con ' +
        'frecuencia. La política acorde es segunda oportunidad o reloj (o LRU): usan el bit de referencia para ' +
        'conservar lo que se vuelve a usar y reemplazar lo que no. Descarto FIFO en este caso, porque reemplaza ' +
        'por antigüedad y sacaría páginas frecuentes aunque se estén usando. La decisión se justifica por la ' +
        'reutilización, no por el nombre del algoritmo.',
    },
  ],
};

export const caseModules = [
  {
    id: 'examenes',
    name: 'Práctica de examen',
    description:
      'Exámenes reales del curso resueltos de forma interactiva: caracteriza la tabla de procesos y responde con la lógica de Calidad.',
    cases: [examen1, examen2],
  },
];

// Acceso plano a todos los casos por si se necesita en el futuro.
export const allCases = caseModules.flatMap((module) => module.cases);
