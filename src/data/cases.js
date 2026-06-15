// Casos de examen interactivos, con la lógica de Calidad.
//
// IMPORTANTE: el enunciado y las preguntas son VERBATIM de los exámenes reales
// (fotos en public/exam-images/). No se parafrasean: una palabra de más o de
// menos cambia el examen. La respuesta guía y los conceptos sí son material de
// estudio elaborado con la lógica de Calidad para alimentar al evaluador local.
//
// Cada caso:
//   - processes: tarjetas con cada proceso del enunciado (texto exacto).
//   - tables: la TABLA DE ANÁLISIS DE PROCESOS, editable (filas y columnas).
//   - questions: las preguntas EXACTAS del examen + guía/conceptos/keywords/
//     criterios/contradicciones para el evaluador (src/lib/caseEvaluator.js).
//   - consistency(tables): diagnóstico en vivo de la caracterización.

function trimv(value) {
  return (value ?? '').toString().trim();
}

function stripAccents(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Construye la tabla de caracterización: primera columna (proceso) rellena,
// el resto vacío para que el estudiante la complete. Las columnas se pueden
// editar, agregar y quitar desde la interfaz.
function caracterizacionTable(columns, processes) {
  return {
    id: 'caracterizacion',
    name: 'Tabla de análisis de procesos',
    note: 'Caracteriza cada proceso antes de decidir. Puedes editar, agregar o quitar filas y columnas, y restaurar el original.',
    allowAddRows: true,
    allowRemoveRows: true,
    allowAddColumns: true,
    columns: [{ key: 'proceso', label: 'Proceso', type: 'text', locked: true }, ...columns],
    rows: processes.map((process) => ({
      proceso: `${process.id} — ${process.name}`,
      ...Object.fromEntries(columns.map((column) => [column.key, ''])),
    })),
  };
}

// Diagnóstico en vivo de una tabla de caracterización: avisa "tiempo real" a la
// ligera y cuenta celdas sin completar. Sirve para cualquier examen.
function caracterizacionDiagnostico(tables) {
  const issues = [];
  let empty = 0;
  let totalCells = 0;

  for (const value of Object.values(tables)) {
    const rows = Array.isArray(value) ? value : value?.rows;
    if (!Array.isArray(rows)) continue;
    for (const row of rows) {
      const proceso = trimv(row.proceso) || 'Un proceso';
      if ('tiempoReal' in row) {
        const cell = stripAccents(trimv(row.tiempoReal).toLowerCase());
        if (/(^|\s)si(\s|,|\.|;|:|$)/.test(cell) && !cell.includes('no ')) {
          issues.push({
            level: 'warn',
            message: `${proceso}: lo marcas como tiempo real. Calidad casi nunca defiende tiempo real estricto cuando muchas instancias compiten; justifícalo muy bien o descártalo.`,
          });
        }
      }
      for (const [key, cell] of Object.entries(row)) {
        if (key === 'proceso') continue;
        totalCells += 1;
        if (!trimv(cell)) empty += 1;
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
  id: 'examen1-modulo-lechero',
  title: 'Primer examen: Database Server — Módulo Lechero',
  badge: 'CPU · BCP · sección crítica',
  context:
    'Un Database Server alberga una aplicación Módulo Lechero para 5 fincas que tiene los siguientes procesos. ' +
    'Tomando en consideración el caso, se responden las preguntas exactas del examen.',
  problem:
    'El examen pide el algoritmo de planificación de CPU correcto (sustentado en variables del BCP y de la Tabla ' +
    'de Procesos), describir paso a paso el ciclo de ejecución de un proceso, analizar si cabe sección crítica y ' +
    'explicar cuándo Round Robin sería la peor elección. La trampa clásica: creer que todo es tiempo real porque ' +
    'el módulo es automático.',
  processes: [
    { id: 'A', name: 'Registro de leche por pezón', detail: 'Un proceso que se encarga del registro de leche producida por pezón por vaca utilizando un censor que cuantifica el peso. (Fincas de 300 vacas a dos ordeños diarios uno de 3 a 4 a.m. y otro de 4 a 5:00 p.m.)' },
    { id: 'B', name: '7 dispositivos de análisis de leche', detail: 'Un proceso que administra cada uno de los 7 dispositivos que analizan de una muestra de leche por vaca de: grasa emulsionada, cadenas de azucares, sales, proteinas, vitaminas, galactosa y PH.' },
    { id: 'C', name: 'IA de aptitud y tratamiento', detail: 'Un proceso que mediante un algoritmo de inteligencia artificial y basado en el análisis de muestras de cultivo de bacterias de la leche determina de manera inmediata si esa leche es apta y va al tanque general o si debe ser descartada y redirigida a otro tanque, al mismo tiempo que indica el tratamiento a aplicar a ese bovino.' },
    { id: 'D', name: 'Agujas de acceso a cepos', detail: 'Un proceso que controla un sistema de agujas de acceso para permitir o cerrar el acceso a los cepos de ordeño.' },
    { id: 'E', name: 'Ubicación de pezoneras por infrarrojo', detail: 'Un proceso que determina la ubicación precisa de manera automática mediante rayos infrarrojos las pezoneras de una ordeñadora en la ubre de la vaca.' },
    { id: 'F', name: 'Sensor de flujo y secado', detail: 'Un proceso que determina mediante un censor de flujo de leche, el secado de la ubre, cuando ya no fluye leche y el respectivo retiro de chuponeras.' },
    { id: 'G', name: 'Suministro de concentrado', detail: 'Un proceso que determina en el mismo instante del ordeño, la producción progresiva de leche para ir suministrando automáticamente el concentrado.' },
    { id: 'H', name: 'Acceso a potrero (humedad, temperatura, brillo)', detail: 'Un proceso que determina la cantidad de vacas que ingresa a un potrero; utilizando el análisis: un censor de humedad, un censor de temperatura y otro de brillo solar, una vez que van saliendo de la sala de ordeño.' },
  ],
  reference: [
    {
      title: 'Caracterizar antes de decidir',
      detail: 'No se empieza nombrando el algoritmo. Primero se separan procesos por ráfaga, E/S, importancia y escritura; después se decide.',
    },
    {
      title: 'BCP y Tabla de Procesos',
      detail: 'La respuesta de CPU se sustenta en variables del Bloque de Control de Proceso (estado, contador de programa, registros, prioridad, info de planificación, info de E/S, punteros de memoria, contabilidad) y de la Tabla de Procesos.',
    },
    {
      title: 'Tiempo real no es por el nombre',
      detail: 'Que el módulo sea automático no hace que todo sea tiempo real. Con 300 vacas por finca, dos ordeños y 5 fincas, casi nada se defiende como tiempo real estricto.',
    },
    {
      title: 'Round Robin no es gratis',
      detail: 'El quantum corta procesos y multiplica el cambio de contexto. Si las ráfagas son muy desiguales o la criticidad importa, RR puede ser la peor opción.',
    },
  ],
  tablesIntro:
    'Esta es la tabla de análisis de procesos del examen. Caracteriza cada proceso (ráfaga, E/S, tiempo real, ' +
    'importancia, escritura, sección crítica), agrega las columnas que necesites y modifícala libremente; el ' +
    'diagnóstico de abajo te avisa los descuidos típicos de Calidad.',
  tables: [caracterizacionTable(COLS_EXAMEN1, [
    { id: 'A', name: 'Registro de leche por pezón' },
    { id: 'B', name: '7 dispositivos de análisis de leche' },
    { id: 'C', name: 'IA de aptitud y tratamiento' },
    { id: 'D', name: 'Agujas de acceso a cepos' },
    { id: 'E', name: 'Ubicación de pezoneras por infrarrojo' },
    { id: 'F', name: 'Sensor de flujo y secado' },
    { id: 'G', name: 'Suministro de concentrado' },
    { id: 'H', name: 'Acceso a potrero (humedad, temperatura, brillo)' },
  ])],
  consistencyTitle: 'Revisión de tu caracterización (en vivo)',
  consistency: caracterizacionDiagnostico,
  // Modelo de Calidad para que la IA local analice la tabla de procesos.
  analysis: {
    gradeSpec: { rafaga: 'level', es: 'level', tiempoReal: 'bool' },
    expected: {
      A: { rafaga: 'baja', es: 'alta', tiempoReal: 'no' },
      B: { rafaga: 'media', es: 'alta', tiempoReal: 'no' },
      C: { rafaga: 'alta', es: 'media', tiempoReal: 'no' },
      D: { rafaga: 'baja', es: 'media', tiempoReal: 'no' },
      E: { rafaga: 'media', es: 'alta', tiempoReal: 'no' },
      F: { rafaga: 'baja', es: 'alta', tiempoReal: 'no' },
      G: { rafaga: 'baja', es: 'media', tiempoReal: 'no' },
      H: { rafaga: 'baja', es: 'alta', tiempoReal: 'no' },
    },
  },
  questions: [
    {
      id: 'e1-q1',
      prompt:
        '¿Explique cuál es el algoritmo de planificación de CPU correcto para administrar este Database Server? Sustente su respuesta en la definición y comportamiento de al menos 20 variables del Bloque de Control de Proceso y 10 de la Tabla de Procesos (35 Pts)',
      criteria: [
        'Caracteriza ráfaga, E/S e importancia antes de nombrar un algoritmo.',
        'Sustenta con variables del BCP y de la Tabla de Procesos.',
        'Descarta FCFS puro y el "tiempo real" automático; propone colas múltiples o prioridades.',
      ],
      keywords: ['rafaga', ['colas multiples', 'colas', 'prioridad'], ['bloque de control', 'bcp'], 'tabla de procesos'],
      concepts: [
        {
          id: 'caracterizar',
          label: 'caracterizar por ráfaga, E/S e importancia',
          terms: ['caracteriz', 'rafaga', 'entrada y salida', 'e/s', 'importancia', 'comportamiento'],
          praise: 'Caracterizas por comportamiento (ráfaga, E/S, importancia) antes de elegir el algoritmo.',
          gap: 'Empieza caracterizando: las lecturas de sensores son E/S con ráfaga baja; la IA (C) consume CPU y gana importancia.',
        },
        {
          id: 'bcp',
          label: 'sustentar con variables del BCP y la Tabla de Procesos',
          terms: ['bloque de control', 'bcp', 'estado', 'contador de programa', 'registros', 'prioridad', 'tabla de procesos', 'info de planificacion'],
          praise: 'Sustentas la decisión con variables del BCP y la Tabla de Procesos, como pide el examen.',
          gap: 'El examen exige sustentar con variables del BCP (estado, PC, registros, prioridad, info de E/S...) y de la Tabla de Procesos.',
        },
        {
          id: 'colas',
          label: 'proponer colas múltiples o prioridades',
          terms: ['colas multiples', 'multiples colas', 'dos colas', 'prioridad', 'prioridades', 'retroalimentacion'],
          praise: 'Propones colas múltiples / prioridades, separando lecturas cortas de la IA.',
          gap: 'Propón colas múltiples o prioridades: una cola para lecturas cortas de E/S y otra para la IA por su impacto.',
        },
        {
          id: 'tiempo-real',
          label: 'no clasificar todo como tiempo real',
          terms: ['no tiempo real', 'no es tiempo real', 'muchas vacas', 'compiten', 'tiempo real estricto', '300 vacas'],
          praise: 'No caes en "todo es tiempo real": reconoces que muchas instancias compiten.',
          gap: 'Aclara que casi nada es tiempo real estricto: con 300 vacas por finca y 5 fincas, los procesos se quitan CPU entre sí.',
        },
      ],
      contradictions: [
        {
          terms: ['todo es tiempo real', 'todos son tiempo real', 'es tiempo real porque es automatico'],
          message: 'No todo es tiempo real por sonar automático: con cientos de vacas compitiendo, casi nada se defiende como tiempo real estricto.',
        },
      ],
      recommendation:
        'Caracteriza (ráfaga, E/S, importancia), sustenta con variables del BCP y la Tabla de Procesos, descarta FCFS puro y el tiempo real automático, y defiende colas múltiples o prioridades.',
      guide:
        'Primero caracterizo cada proceso. Las lecturas de sensores (peso, flujo, infrarrojo, potrero) tienen ráfaga ' +
        'baja y mucha E/S; la IA de aptitud y tratamiento (C) consume más CPU y gana importancia. La decisión se ' +
        'sustenta en variables del BCP —estado, contador de programa, registros, prioridad, información de ' +
        'planificación, información de E/S, punteros de memoria y contabilidad— y de la Tabla de Procesos. No uso ' +
        'FCFS puro porque un proceso largo atrasaría a los demás, y no digo que todo sea tiempo real solo porque el ' +
        'módulo es automático: con 300 vacas por finca, dos ordeños y 5 fincas, casi nada se defiende como tiempo ' +
        'real estricto. Defiendo colas múltiples o prioridades: una cola para lecturas cortas con mucha E/S y otra ' +
        'para la IA con prioridad justificada por su impacto.',
    },
    {
      id: 'e1-q2',
      prompt:
        'Escoja un proceso y describa paso a paso, un recorrido completo por el ciclo de ejecución, indicando que hace en cada estado y las variables de Bloque de Control de Proceso que escribe. (25 Pts)',
      criteria: [
        'Elige un proceso concreto y recorre los estados del ciclo de ejecución.',
        'Indica qué ocurre en cada estado (nuevo, listo, ejecución, bloqueado, terminado).',
        'Señala las variables del BCP que se escriben en cada transición.',
      ],
      keywords: [['listo', 'preparado'], ['ejecucion', 'ejecución'], ['bloqueado', 'en espera'], ['bloque de control', 'bcp']],
      concepts: [
        {
          id: 'elige',
          label: 'escoger un proceso concreto',
          terms: ['proceso a', 'proceso c', 'escojo', 'elijo el proceso', 'tomo el proceso', 'el proceso de'],
          praise: 'Escoges un proceso concreto para el recorrido, como pide la pregunta.',
          gap: 'Escoge un proceso concreto (por ejemplo A, el registro de leche) y haz el recorrido sobre él.',
        },
        {
          id: 'estados',
          label: 'recorrer los estados del ciclo de ejecución',
          terms: ['nuevo', 'listo', 'preparado', 'ejecucion', 'bloqueado', 'en espera', 'terminado', 'transicion'],
          praise: 'Recorres los estados (nuevo, listo, ejecución, bloqueado, terminado) paso a paso.',
          gap: 'Recorre los estados: nuevo → listo → ejecución → bloqueado por E/S → listo → ... → terminado, diciendo qué pasa en cada uno.',
        },
        {
          id: 'bcp-escribe',
          label: 'variables del BCP que se escriben',
          terms: ['bloque de control', 'bcp', 'contador de programa', 'registros', 'estado del proceso', 'info de planificacion', 'puntero', 'contabilidad'],
          praise: 'Indicas las variables del BCP que se escriben en cada transición.',
          gap: 'Di qué variables del BCP se escriben: estado, contador de programa, registros, info de planificación/E/S, punteros y contabilidad.',
        },
      ],
      contradictions: [
        {
          terms: ['todos los procesos a la vez', 'no escojo ninguno'],
          message: 'La pregunta pide escoger UN proceso y recorrer su ciclo; no describas todos a la vez.',
        },
      ],
      recommendation:
        'Escoge un proceso, recorre nuevo → listo → ejecución → bloqueado → listo → terminado, y en cada transición nombra las variables del BCP que se escriben.',
      guide:
        'Escojo el proceso A (registro de leche por pezón). Nuevo: el SO lo admite y crea su BCP (asigna PID, estado ' +
        '= nuevo, punteros de memoria). Listo: pasa a la cola de listos (estado = listo, info de planificación y ' +
        'prioridad). Ejecución: el planificador lo despacha (estado = ejecución; se cargan contador de programa y ' +
        'registros; al desalojarlo se guardan PC y registros en el BCP). Bloqueado: cuando pide la lectura del ' +
        'censor de peso queda en espera de E/S (estado = bloqueado, info de E/S). Listo otra vez: terminada la E/S ' +
        'vuelve a la cola (se actualiza estado e info de planificación). Terminado: al cerrar el registro libera ' +
        'recursos (estado = terminado, contabilidad de uso de CPU). En cada transición se escriben en el BCP el ' +
        'estado, el contador de programa, los registros, la información de planificación y de E/S y la contabilidad.',
    },
    {
      id: 'e1-q3',
      prompt:
        '¿Cabría la posibilidad de incurrir en alguna sección crítica? Explique las razones del porque se daría o del porque no se daría. (20 pts)',
      criteria: [
        'Responde si cabe o no, con razones (no solo sí/no).',
        'Ubica el riesgo en la escritura concurrente sobre un recurso compartido.',
        'Menciona exclusión mutua o sincronización donde aplica.',
      ],
      keywords: [['seccion critica', 'sección crítica'], 'escritura', ['exclusion mutua', 'exclusión mutua'], 'compartido'],
      concepts: [
        {
          id: 'escritura-compartida',
          label: 'la escritura concurrente sobre un recurso compartido',
          terms: ['escritura compartida', 'escriben el mismo', 'recurso compartido', 'tanque general', 'base de datos', 'mismo registro', 'concurrente', 'a la vez', 'database server'],
          praise: 'Ubicas el riesgo donde varios procesos escriben el mismo recurso a la vez (tanque general, base de datos).',
          gap: 'El riesgo aparece cuando varios procesos escriben el mismo recurso a la vez: el tanque general, el registro de leche o la base de datos del Database Server.',
        },
        {
          id: 'razones',
          label: 'explicar las razones (no solo sí/no)',
          terms: ['porque', 'razon', 'se daria', 'no se daria', 'depende', 'cuando'],
          praise: 'Explicas las razones del sí/no, como pide la pregunta.',
          gap: 'No basta decir sí o no: explica las razones (cuándo se daría y cuándo no).',
        },
        {
          id: 'exclusion',
          label: 'exclusión mutua / sincronización',
          terms: ['exclusion mutua', 'sincroniz', 'semaforo', 'candado', 'mutex', 'bloqueo', 'region critica'],
          praise: 'Propones exclusión mutua o sincronización para proteger la sección crítica.',
          gap: 'Donde haya escritura compartida, propón exclusión mutua o sincronización (semáforo/candado).',
        },
      ],
      contradictions: [
        {
          terms: ['no hay seccion critica en ningun', 'ningun proceso tiene riesgo', 'no existe seccion critica'],
          message: 'Sí cabe en los puntos de escritura compartida (tanque general, base de datos): hay que justificarlo, no descartarlo de entrada.',
        },
      ],
      recommendation:
        'Responde con razones: sí cabe donde varios procesos escriben el mismo recurso (tanque general, base de datos), y ahí se necesita exclusión mutua; donde cada proceso escribe lo suyo, no.',
      guide:
        'Sí cabe la posibilidad, pero no en todos lados. Se daría sección crítica donde varios procesos escriben un ' +
        'recurso compartido a la vez: la IA (C) que decide a qué tanque va la leche y el registro que actualiza el ' +
        'tanque general o la base de datos del Database Server pueden chocar si escriben en paralelo; lo mismo el ' +
        'suministro de concentrado (G) si actualiza un registro común. En esos puntos se necesita exclusión mutua ' +
        '(un semáforo o candado) que serialice la escritura. No se daría en los procesos que solo leen su propio ' +
        'censor y escriben su propio archivo, porque no comparten el recurso.',
    },
    {
      id: 'e1-q4',
      prompt:
        'Explique en que condiciones la aplicación del algoritmo Round Robbin sería la peor elección para este contexto de ejecución. (20 Pts)',
      criteria: [
        'Explica el costo del quantum / cambio de contexto.',
        'Relaciona la mala elección con ráfagas desiguales o E/S intensiva.',
        'Menciona que RR ignora prioridad/criticidad.',
      ],
      keywords: [['round robin', 'round robbin'], 'quantum', ['cambio de contexto', 'contexto'], 'prioridad'],
      concepts: [
        {
          id: 'cambio-contexto',
          label: 'el costo del quantum y el cambio de contexto',
          terms: ['cambio de contexto', 'overhead', 'sobrecarga', 'quantum', 'se multiplica', 'cambios constantes'],
          praise: 'Explicas que el quantum multiplica el cambio de contexto y su sobrecarga.',
          gap: 'Explica el costo: el quantum corta los procesos y multiplica el cambio de contexto sin avanzar trabajo útil.',
        },
        {
          id: 'desigualdad',
          label: 'ráfagas desiguales / E/S intensiva',
          terms: ['rafagas desiguales', 'procesos largos', 'corta el proceso', 'fragmenta', 'e/s', 'entrada y salida', 'procesos cortos'],
          praise: 'Relacionas la mala elección con ráfagas muy desiguales y procesos de E/S.',
          gap: 'Relaciónalo con el contexto: ráfagas muy desiguales (IA larga vs lecturas cortas) hacen a RR ineficiente.',
        },
        {
          id: 'prioridad-ignorada',
          label: 'RR ignora prioridad / criticidad',
          terms: ['no respeta prioridad', 'criticidad', 'la alerta espera', 'equitativo', 'mismo trato', 'importancia'],
          praise: 'Señalas que RR trata a todos por igual e ignora la criticidad (la alerta de la IA esperaría su turno).',
          gap: 'Agrega que RR reparte por igual e ignora prioridad: un proceso crítico (la IA) tendría que esperar su turno.',
        },
      ],
      contradictions: [
        {
          terms: ['round robin es la mejor', 'round robin siempre', 'round robbin es la mejor'],
          message: 'La pregunta pide cuándo RR es la PEOR elección: justifica el costo del quantum, las ráfagas desiguales y que ignora la criticidad.',
        },
      ],
      recommendation:
        'Explica que RR es la peor opción cuando las ráfagas son muy desiguales y hay E/S: el quantum multiplica el cambio de contexto y, al repartir por igual, ignora la criticidad de la IA.',
      guide:
        'Round Robin sería la peor elección cuando las ráfagas son muy desiguales y hay mucha E/S, como aquí. El ' +
        'quantum corta los procesos largos (la IA) en muchos trozos y multiplica el cambio de contexto, gastando ' +
        'CPU en sobrecarga en vez de trabajo útil; los procesos de lectura corta ceden el CPU enseguida por E/S y ' +
        'no necesitan turnos forzados. Además RR reparte el CPU por igual e ignora la prioridad: un proceso ' +
        'crítico como la alerta de la IA tendría que esperar su turno detrás de procesos sin importancia. Y si un ' +
        'proceso retiene un recurso y se le acaba el quantum, lo conserva mientras espera, agravando posibles ' +
        'bloqueos.',
    },
  ],
};

const COLS_EXAMEN2 = [
  { key: 'rafaga', label: 'Ráfaga (CPU)', type: 'text' },
  { key: 'es', label: 'E/S', type: 'text' },
  { key: 'tiempoReal', label: '¿Tiempo real?', type: 'text' },
  { key: 'memoria', label: 'Memoria solicitada', type: 'text' },
  { key: 'crecimiento', label: 'Crecimiento', type: 'text' },
  { key: 'reutilizacion', label: '¿Reutiliza páginas?', type: 'text' },
];

const examen2 = {
  id: 'examen2-medicore',
  title: 'Segundo examen: Data Center — MediCore',
  badge: 'CPU · memoria · reemplazo',
  context:
    'Un Data Center Hospitalario alberga una aplicación denominada MediCore, utilizada simultáneamente por tres ' +
    'hospitales regionales y cinco clínicas periféricas. El sistema administra procesos críticos en tiempo real ' +
    'relacionados con atención médica, monitoreo de pacientes y gestión hospitalaria. Tomando en consideración el ' +
    'caso, se responden las preguntas exactas del examen.',
  problem:
    'El examen pide el algoritmo de planificación de CPU (sustentado en variables del BCP y de la Tabla de ' +
    'Procesos), la política de Administración de Memoria del Planificador de Mediano Plazo con sus variables de ' +
    'peso, qué proceso se favorece con Particiones Fijas de varios tamaños, y para el proceso D con Intercambio, ' +
    'qué política de reemplazo lo favorece y cuál lo perjudica.',
  processes: [
    { id: 'A', name: 'Sensores biomédicos (450 pacientes)', detail: 'Un proceso que registra continuamente los signos vitales de pacientes internados mediante sensores biomédicos conectados a monitores inteligentes, capturando: frecuencia cardíaca, saturación de oxígeno, presión arterial y temperatura corporal. La información es almacenada y actualizada cada 2 segundos para aproximadamente 450 pacientes simultáneamente.' },
    { id: 'B', name: 'IA de riesgo clínico', detail: 'Un proceso basado en inteligencia artificial que analiza en tiempo real los signos vitales y resultados clínicos de pacientes críticos para determinar: riesgo de paro cardiorrespiratorio y eventos cerebrovasculares. Cuando detecta anomalías, activa alarmas, notifica al personal médico y prioriza pacientes.' },
    { id: 'C', name: 'Análisis de imágenes de cultivos', detail: 'Un proceso que analiza imágenes de alta resolución obtenidas de cultivos de sangre, piel u otras muestras clínicas sembradas en placas de Petri o medios especializados, con el fin de identificar posibles patrones compatibles con crecimiento bacteriano, fúngico o viral indirecto. El sistema carga lotes de imágenes de microscopios digitales y compara con modelos entrenados para estimar la probabilidad de presencia de microorganismos patógenos.' },
    { id: 'D', name: 'Audio de dolor (UCI)', detail: 'Un proceso que analiza señales de audio capturadas por un dispositivo instalado en una unidad de cuidados intensivos, cercano a la camilla de cada persona internada, con el fin de estimar posibles niveles de dolor o malestar a partir de patrones acústicos. Procesa intensidad, frecuencia, tono, duración de quejidos, respiración irregular, pausas y vocalización; transforma el audio en espectrogramas o vectores y los compara con modelos de IA para clasificar dolor leve, moderado o severo.' },
  ],
  reference: [
    {
      title: 'Caracterizar antes de decidir',
      detail: 'A tiene ráfaga mínima y E/S altísima; B, C y D son CPU-bound con ráfaga alta. Esa diferencia (la ráfaga) es la que justifica separar colas.',
    },
    {
      title: 'El problema de la memoria virtual',
      detail: 'Con intercambio, la pregunta es qué queda en memoria principal y qué va al área de intercambio, no cuánta RAM comprar.',
    },
    {
      title: 'La política de reemplazo depende de la reutilización',
      detail: 'Si las páginas se reutilizan entre iteraciones, segunda oportunidad/reloj se defienden; si cada iteración trae datos nuevos, FIFO basta y es más barato.',
    },
    {
      title: 'Particiones fijas y crecimiento',
      detail: 'Los procesos que crecen no caben en un bloque fijo; la reasignación es cara. Hay que ver quién se favorece y por qué los demás no.',
    },
  ],
  tablesIntro:
    'Caracteriza cada proceso pensando en CPU y memoria: ráfaga, E/S, memoria solicitada, crecimiento y si ' +
    'reutiliza páginas. Agrega las columnas que necesites; el diagnóstico te avisa los descuidos típicos.',
  tables: [caracterizacionTable(COLS_EXAMEN2, [
    { id: 'A', name: 'Sensores biomédicos (450 pacientes)' },
    { id: 'B', name: 'IA de riesgo clínico' },
    { id: 'C', name: 'Análisis de imágenes de cultivos' },
    { id: 'D', name: 'Audio de dolor (UCI)' },
  ])],
  consistencyTitle: 'Revisión de tu caracterización (en vivo)',
  consistency: caracterizacionDiagnostico,
  // Modelo de Calidad para que la IA local analice la tabla de procesos.
  analysis: {
    gradeSpec: { rafaga: 'level', es: 'level', tiempoReal: 'bool', crecimiento: 'growth', reutilizacion: 'bool' },
    expected: {
      A: { rafaga: 'minima', es: 'alta', tiempoReal: 'no', crecimiento: 'estable', reutilizacion: 'no' },
      B: { rafaga: 'alta', es: 'alta', tiempoReal: 'no', crecimiento: 'creciente', reutilizacion: 'si' },
      C: { rafaga: 'alta', es: 'alta', tiempoReal: 'no', crecimiento: 'creciente', reutilizacion: 'no' },
      D: { rafaga: 'alta', es: 'alta', tiempoReal: 'no', crecimiento: 'creciente', reutilizacion: 'no' },
    },
  },
  questions: [
    {
      id: 'e2-q1',
      prompt:
        '¿Explique cuál es el algoritmo de planificación de CPU correcto para administrar este Data Center? Sustente su respuesta en la definición y comportamiento de al menos 5 variables prioritarias del Bloque de Control de Proceso y 5 de la Tabla de Procesos (20 Pts)',
      criteria: [
        'Caracteriza ráfaga y E/S antes de nombrar el algoritmo.',
        'Sustenta con variables del BCP y de la Tabla de Procesos.',
        'Propone colas múltiples (A en una cola, B/C/D en otra) y descarta FCFS/apropiatividad.',
      ],
      keywords: ['rafaga', ['colas multiples', 'colas', 'dos colas'], ['bloque de control', 'bcp'], 'tabla de procesos'],
      concepts: [
        {
          id: 'caracterizar',
          label: 'caracterizar por ráfaga y E/S',
          terms: ['caracteriz', 'rafaga', 'entrada y salida', 'e/s', 'cpu-bound', 'comportamiento'],
          praise: 'Caracterizas por ráfaga y E/S: A es E/S intensiva de ráfaga mínima; B, C y D son CPU-bound.',
          gap: 'Caracteriza primero: A tiene ráfaga mínima y E/S altísima; B, C y D tienen ráfaga alta (CPU-bound).',
        },
        {
          id: 'colas',
          label: 'colas múltiples (dos colas)',
          terms: ['colas multiples', 'dos colas', 'multiples colas', 'una cola para a', 'separar colas', 'prioridad'],
          praise: 'Propones colas múltiples: una cola para A y otra para B, C y D.',
          gap: 'Propón colas múltiples: cola 1 para A (RR con quantum bajo o SJF) y cola 2 para B/C/D (RR con quantum alto).',
        },
        {
          id: 'bcp',
          label: 'sustentar con variables del BCP y la Tabla',
          terms: ['bloque de control', 'bcp', 'estado', 'prioridad', 'tabla de procesos', 'rafaga estimada', 'registros'],
          praise: 'Sustentas con variables del BCP y de la Tabla de Procesos, como pide el examen.',
          gap: 'Sustenta con al menos 5 variables del BCP y 5 de la Tabla de Procesos (estado, prioridad, ráfaga estimada...).',
        },
        {
          id: 'descarta',
          label: 'descartar FCFS y apropiatividad',
          terms: ['fcfs', 'primero en llegar', 'descarto fcfs', 'apropiativ', 'no tiempo real estricto', 'monopol'],
          praise: 'Descartas FCFS (ráfagas grandes monopolizan) y la apropiatividad (no hay tiempo real estricto).',
          gap: 'Descarta FCFS (B/C/D monopolizarían el CPU) y la apropiatividad, porque ninguno es tiempo real estricto.',
        },
      ],
      contradictions: [
        {
          terms: ['round robin para todos', 'una sola cola', 'todo en round robin'],
          message: 'Una sola cola de Round Robin mete a A (ráfaga mínima) en la misma bolsa que B/C/D (ráfaga alta). La clave es separar colas por ráfaga.',
        },
      ],
      recommendation:
        'Caracteriza por ráfaga, propón colas múltiples (A aparte de B/C/D), sustenta con variables del BCP y la Tabla, y descarta FCFS y la apropiatividad.',
      guide:
        'La respuesta correcta es colas múltiples con dos colas, porque permite aplicar algoritmos distintos a ' +
        'comportamientos distintos. La variable que separa las colas es la ráfaga: A tiene ráfaga mínima y E/S ' +
        'altísima, mientras B, C y D tienen ráfaga alta. Cola 1 (A): RR con quantum bajo —cede el CPU rápido y se ' +
        'va a E/S— o SJF por su poca pila de código. Cola 2 (B, C, D): RR con quantum alto, para que avancen su ' +
        'análisis sin multiplicar el cambio de contexto. Se descarta la apropiatividad porque ninguno es tiempo ' +
        'real estricto, y FCFS porque las ráfagas enormes de B, C y D monopolizarían el CPU. Todo se sustenta en ' +
        'variables del BCP (estado, prioridad, ráfaga estimada, registros, info de E/S) y de la Tabla de Procesos.',
    },
    {
      id: 'e2-q2',
      prompt:
        'Cual es la política de Administración de Memoria que recomienda debería implementar el Planificador de Mediano Plazo. Determine para ello al menos 10 variables de peso que le permiten concluir su decisión. (30 pts)',
      criteria: [
        'Recomienda memoria virtual con intercambio y descarta los modelos sin intercambio.',
        'Lista al menos 10 variables de peso.',
        'Liga la política de reemplazo a la reutilización de páginas.',
      ],
      keywords: [['memoria virtual', 'intercambio'], 'reemplazo', 'variables', 'crecimiento'],
      concepts: [
        {
          id: 'memoria-virtual',
          label: 'memoria virtual con intercambio',
          terms: ['memoria virtual', 'intercambio', 'swap', 'area de intercambio', 'paginacion', 'mediano plazo'],
          praise: 'Recomiendas memoria virtual con intercambio para el planificador de mediano plazo.',
          gap: 'Recomienda memoria virtual con intercambio: el problema es qué queda en memoria principal y qué va al área de intercambio.',
        },
        {
          id: 'descarta-modelos',
          label: 'descartar los modelos sin intercambio',
          terms: ['particiones fijas', 'mapa de bits', 'listas ligadas', 'socios', 'buddies', 'sin intercambio'],
          praise: 'Descartas particiones fijas, mapa de bits, listas ligadas y socios por crecimiento/desperdicio.',
          gap: 'Descarta los modelos sin intercambio (particiones fijas, mapa de bits, listas ligadas, socios) porque los procesos crecen.',
        },
        {
          id: 'variables',
          label: 'al menos 10 variables de peso',
          terms: ['crecimiento', 'tamano de memoria', 'frecuencia de acceso', 'bit r', 'bit m', 'hora de carga', 'fallos de pagina', 'puntero', 'reutilizacion', 'area de intercambio'],
          praise: 'Aportas varias variables de peso (crecimiento, frecuencia de acceso, bit R, bit M, fallos de página...).',
          gap: 'Lista al menos 10 variables de peso: crecimiento, tamaño solicitado, frecuencia de acceso, bit R, bit M, hora de carga, puntero a la última reemplazada, fallos de página, tamaño del área de intercambio y reutilización.',
        },
        {
          id: 'reutilizacion',
          label: 'reemplazo según la reutilización',
          terms: ['reutiliz', 'paginas frecuentes', 'segunda oportunidad', 'reloj', 'fifo', 'localidad'],
          praise: 'Ligas el reemplazo a la reutilización (segunda oportunidad/reloj vs FIFO).',
          gap: 'La política de reemplazo depende de la reutilización: si B reutiliza su modelo, segunda oportunidad/reloj; si C/D traen datos nuevos, FIFO.',
        },
      ],
      contradictions: [
        {
          terms: ['mas ram', 'comprar memoria', 'agregar ram', 'particiones fijas funcionan'],
          message: 'No basta "más RAM" ni las particiones fijas: con procesos que crecen, la salida es memoria virtual con intercambio.',
        },
      ],
      recommendation:
        'Recomienda memoria virtual con intercambio, descarta los modelos sin intercambio y respalda con ≥10 variables de peso; cierra ligando el reemplazo a la reutilización de páginas.',
      guide:
        'Recomiendo memoria virtual con intercambio. Se descartan uno a uno los modelos sin intercambio: ' +
        'particiones fijas (mismo y varios tamaños) por crecimiento; mapa de bits por huecos inútiles y búsqueda ' +
        'de bloques contiguos; listas ligadas porque el crecimiento vuelve lentas las búsquedas; socios por ' +
        'desperdicio interno al redondear a potencias de 2. El problema no es el tamaño físico, sino que B, C y D ' +
        'crecen de forma que ningún bloque fijo los contiene. Variables de peso: crecimiento del proceso, tamaño ' +
        'de memoria solicitado, frecuencia de acceso a páginas, bit R, bit M, hora de carga de página, puntero a ' +
        'la última página reemplazada, frecuencia de fallos de página, tamaño del área de intercambio y frecuencia ' +
        'de reutilización de páginas entre iteraciones. Con esas dos últimas decido también el algoritmo de ' +
        'reemplazo: si hay reutilización (B), segunda oportunidad o reloj; si no (C, D), FIFO.',
    },
    {
      id: 'e2-q3',
      prompt:
        'Cual proceso cree que podría salir favorecido si decidiéramos aplicar Administración de Memoria con Particiones Fijas, de varios tamaños (20 pts)',
      criteria: [
        'Descarta B, C y D por crecimiento.',
        'Señala A como el candidato (consumo estable, bloque pequeño).',
        'Matiza que el modelo no favorece limpiamente a nadie por el buffer de A.',
      ],
      keywords: ['particiones fijas', 'crecimiento', ['proceso a', 'sensores'], 'estable'],
      concepts: [
        {
          id: 'descarta',
          label: 'descartar B, C y D por crecimiento',
          terms: ['crecimiento', 'crecen', 'no caben', 'reasign', 'b c y d', 'descarto b'],
          praise: 'Descartas B, C y D porque crecen y no caben en un bloque fijo.',
          gap: 'Descarta B, C y D: crecen y la reasignación a un bloque mayor es cara o imposible.',
        },
        {
          id: 'proceso-a',
          label: 'A como candidato (estable, bloque pequeño)',
          terms: ['proceso a', 'sensores', 'estable', 'bloque pequeno', 'consumo estable', 'favorecido'],
          praise: 'Señalas A como el favorecido por su consumo estable y bloque pequeño.',
          gap: 'A parece el favorecido: consumo estable y bloque pequeño que sí cabe en una partición fija.',
        },
        {
          id: 'matiz',
          label: 'el modelo no favorece limpiamente a nadie',
          terms: ['no favorece a nadie', 'buffer', 'pellizc', 'pierde espacio', 'giro', 'no limpiamente'],
          praise: 'Matizas: cuando B/C/D crecen pueden pellizcar el bloque de A (su buffer), así que no favorece limpio a nadie.',
          gap: 'Matiza el giro: cuando B/C/D crecen y reasignan, pueden quitar espacio al bloque de A (que tiene un buffer activo de 450 sensores).',
        },
      ],
      contradictions: [
        {
          terms: ['favorece a todos por igual', 'favorece a b', 'favorece a c', 'favorece a d'],
          message: 'B, C y D quedan descartados por crecimiento; el candidato es A, aunque el modelo no favorezca limpiamente a nadie.',
        },
      ],
      recommendation:
        'Descarta B, C y D por crecimiento, señala A como candidato por su consumo estable, y matiza que su buffer de 450 sensores puede perder espacio cuando los otros crecen.',
      guide:
        'B, C y D quedan descartados por crecimiento: la reasignación y protección es una operación cara y, si ' +
        'crecen demasiado, no pueden migrar a un bloque mayor. A parece el favorecido por consumo estable y bloque ' +
        'pequeño. Pero hay un giro: cuando B, C o D crecen y aplican reasignación, pellizcan espacio de otros ' +
        'bloques, y el bloque pequeño de A —que tiene un buffer activo de 450 sensores— es el candidato a perder ' +
        'espacio. Conclusión honesta: este modelo no favorece limpiamente a nadie. Si hay que elegir uno, es A, ' +
        'pero solo si se garantiza que su bloque no será objetivo de las reasignaciones de los otros tres.',
    },
    {
      id: 'e2-q4',
      prompt:
        'Analice el proceso D). En caso de que le corresponda aplicar Intercambio. Cuál es la política de reemplazo que más le favorecería, y cual es la política de reemplazo que más lo perjudicaría, Justifique su respuesta. (30 Pts)',
      criteria: [
        'Reconoce que D no reutiliza páginas entre iteraciones.',
        'Favorece FIFO (barato) y justifica.',
        'Perjudica Reloj / Segunda Oportunidad (costo sin beneficio).',
      ],
      keywords: ['fifo', ['reloj', 'segunda oportunidad'], 'reutiliz', 'reemplazo'],
      concepts: [
        {
          id: 'sin-reutilizacion',
          label: 'D no reutiliza páginas',
          terms: ['no reutiliz', 'paginas nuevas', 'cada iteracion', 'nuevo fragmento', 'datos nuevos', 'no se repiten'],
          praise: 'Reconoces que D carga páginas nuevas cada iteración: no hay reutilización.',
          gap: 'Parte de que D carga páginas nuevas cada vez (nuevo audio/espectrograma): no reutiliza páginas entre iteraciones.',
        },
        {
          id: 'favorece-fifo',
          label: 'FIFO lo favorece',
          terms: ['fifo', 'mas barato', 'limpia rapido', 'favorece fifo'],
          praise: 'Favorece FIFO: es el algoritmo más barato y aquí no hay nada que proteger.',
          gap: 'La política que más favorece a D es FIFO: la más barata, porque no tiene sentido evaluar bits si todo cambia.',
        },
        {
          id: 'perjudica-reloj',
          label: 'Reloj / Segunda Oportunidad lo perjudican',
          terms: ['reloj', 'segunda oportunidad', 'perjudica', 'costoso', 'bit r', 'sin beneficio'],
          praise: 'Perjudica Reloj/Segunda Oportunidad: trabajo costoso de proteger páginas que salen igual.',
          gap: 'La que más perjudica es Reloj (y segunda oportunidad): protege páginas frecuentes, pero en D no hay frecuentes, así que es costo sin beneficio.',
        },
      ],
      contradictions: [
        {
          terms: ['lru lo favorece', 'reloj lo favorece', 'segunda oportunidad lo favorece'],
          message: 'Para D, que no reutiliza páginas, los algoritmos que protegen páginas frecuentes (reloj, segunda oportunidad, LRU) son los que perjudican; el que favorece es FIFO.',
        },
      ],
      recommendation:
        'Parte de que D no reutiliza páginas: lo favorece FIFO (barato) y lo perjudica Reloj/Segunda Oportunidad (costo de proteger páginas que igual salen).',
      guide:
        'Cada vez que D entra a ejecución carga páginas completamente nuevas (nuevo fragmento de audio, nuevo ' +
        'espectrograma, nuevos vectores): no hay reutilización de páginas entre iteraciones. La política que más ' +
        'lo favorece es FIFO, el algoritmo más barato, que limpia todo rápido; no tiene sentido invertir en ' +
        'evaluar bits R y M si en la próxima iteración todo cambia igual. La que más lo perjudica es Reloj (y ' +
        'segunda oportunidad): están diseñadas para proteger páginas frecuentes, y en D ese análisis es trabajo ' +
        'costoso sin beneficio, porque las páginas "protegidas" salen igual; Reloj es el peor porque recorre ' +
        'circularmente todas las páginas. La variable que manda no es el nombre del algoritmo, sino si el proceso ' +
        'reutiliza páginas: para D, no.',
    },
  ],
};

export const caseModules = [
  {
    id: 'examenes',
    name: 'Práctica de examen',
    description:
      'Los dos exámenes reales del curso, resueltos de forma interactiva: caracteriza la tabla de procesos y responde con las preguntas exactas y la lógica de Calidad.',
    cases: [examen1, examen2],
  },
];

// Acceso plano a todos los casos por si se necesita en el futuro.
export const allCases = caseModules.flatMap((module) => module.cases);
