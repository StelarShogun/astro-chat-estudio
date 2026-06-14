export const sourceNotes = [
  'TurboScribe Export 969385373: transcripciones de clase y exámenes resueltos.',
  'Repaso_Final_SO_Calidad_Obsidian: repaso final, materia Tanenbaum-Calidad y pizarras.',
  'Chat MediCore: preguntas tipo tercer examen y defensa oral del caso médico.',
];

export const uxPrinciples = [
  {
    name: 'Nielsen',
    use: 'Estado visible, navegación consistente, búsqueda en contexto, control para abrir/cerrar el dashboard y mensajes claros cuando un documento carga.',
  },
  {
    name: 'Gestalt',
    use: 'Proximidad para agrupar documentos, preguntas y exámenes; semejanza visual para que todos los botones de una misma acción se reconozcan igual.',
  },
  {
    name: 'Hick',
    use: 'Pocas secciones principales, filtros por fuente y documentos cargados bajo demanda para evitar una pantalla llena de decisiones al mismo tiempo.',
  },
  {
    name: 'Fitts',
    use: 'Botones grandes, alto táctil suficiente y controles importantes cerca del área de lectura para escritorio y móvil.',
  },
  {
    name: 'Shneiderman',
    use: 'Consistencia, feedback informativo, cierre visual de cada sección, reversibilidad con navegación clara y reducción de memoria de corto plazo.',
  },
];

export const examPhotoSets = [
  {
    title: 'Primer examen',
    subtitle: 'Caso ordeño y potrero — procesos A a H',
    context:
      'Fotografías oficiales del primer examen. El caso modela una finca lechera automatizada: peso de leche por pezón, siete dispositivos de análisis de leche, IA de tratamiento por anomalías, agujas de cepo, ubicación de pezoneras por infrarrojo, sensor de flujo, suministro de concentrado y control de acceso al potrero con sensores de humedad, temperatura y brillo solar.',
    images: [
      {
        src: '/exam-images/primer-examen-caso.webp',
        label: 'Enunciado completo del caso (procesos A a H)',
      },
      {
        src: '/exam-images/primer-examen-preguntas.webp',
        label: 'Preguntas: planificación de CPU, sección crítica y archivos por dispositivo',
      },
    ],
    prompts: [
      'Caracterizar cada proceso por ráfaga, E/S, importancia y tiempo real antes de elegir el algoritmo de CPU.',
      'Justificar el algoritmo de planificación con el BCP y la tabla de procesos.',
      'Identificar qué procesos tienen riesgo de sección crítica por escritura compartida.',
      'Caracterizar el archivo que construye cada dispositivo, no el proceso completo.',
    ],
    defense:
      'No digo que todo es tiempo real solo porque el caso suena automático. La lectura de sensores consume E/S, no CPU; la IA de tratamiento sí consume CPU y gana importancia por la alerta. Con cientos de vacas compitiendo, casi nada se defiende como tiempo real estricto.',
  },
  {
    title: 'Segundo examen',
    subtitle: 'Caso salud y datos masivos — ADN, bebés y perfiles',
    context:
      'Fotografías oficiales del segundo examen. El caso combina decodificación de ADN, monitoreo de signos vitales de bebés, perfiles de redes sociales, web services clínicos, integración con Hacienda y análisis de hábitos alimenticios. El foco está en planificación de CPU, administración de memoria y memoria virtual.',
    images: [
      {
        src: '/exam-images/segundo-examen-caso.webp',
        label: 'Enunciado base del caso de salud y datos masivos',
      },
      {
        src: '/exam-images/segundo-examen-preguntas.webp',
        label: 'Preguntas: CPU, administración de memoria y política de reemplazo',
      },
    ],
    prompts: [
      'Definir el algoritmo de planificación de CPU usando variables del BCP y la tabla de procesos.',
      'Decidir si aplica memoria virtual y por qué no bastan particiones fijas, mapa de bits, listas ligadas ni buddies.',
      'Recomendar una política de reemplazo defendible según si interesa mantener páginas frecuentes.',
      'Determinar qué procesos presionan más memoria por volumen y crecimiento.',
    ],
    defense:
      'La memoria virtual se defiende porque hay datos masivos y crecimiento alto (ADN, pandemias, hábitos). La política de reemplazo no se elige por nombre: si me interesa conservar páginas frecuentes, segunda oportunidad o reloj se defienden mejor que FIFO.',
  },
];

export const methodRules = [
  {
    title: 'Caracterizar antes de decidir',
    body: 'No se empieza diciendo el algoritmo. Primero se lee el caso, se separan procesos, dispositivos, archivos y recursos. Después se decide.',
  },
  {
    title: 'La palabra del enunciado no manda sola',
    body: 'Si el enunciado dice “tiempo real”, todavía hay que demostrar que el proceso puede defenderse como tiempo real. Si compite con muchos iguales, normalmente no se defiende como tiempo real estricto.',
  },
  {
    title: 'El comportamiento pesa más que el nombre',
    body: 'La variable que manda puede ser la ráfaga, la pila de código, la entrada/salida, la escritura compartida, el crecimiento de memoria o la criticidad.',
  },
  {
    title: 'Archivo por dato de origen',
    body: 'No se clasifica “el proceso completo” como un archivo. Se identifica qué entrega cada dispositivo y se caracteriza cada archivo por separado.',
  },
];

export const questionBank = [
  {
    area: 'CPU',
    prompt:
      'Un sistema médico recibe frecuencia cardíaca, oxígeno y presión cada 2 segundos. Además, una IA calcula riesgo cardiovascular y dispara alarma. ¿Qué política de CPU recomendaría?',
    answer:
      'Primero separo procesos. La lectura de sensores tiene ráfaga baja y mucha E/S; la IA consume más CPU porque calcula y compara. No usaría FCFS puro porque un proceso largo puede atrasar la alarma. Tampoco diría SJF sin más, porque si el proceso crítico es pesado podría quedar relegado. Defendería colas múltiples o prioridades: una cola para lecturas cortas y otra para IA/alarma con prioridad justificada por impacto clínico.',
    examLine:
      'La decisión no se justifica por el nombre “médico”, sino por ráfaga, E/S e importancia del resultado.',
  },
  {
    area: 'Memoria',
    prompt:
      'Un análisis de imágenes de cultivos necesita cargar imágenes grandes y comparar regiones. La memoria no alcanza para la imagen completa. ¿Qué estrategia explica mejor el caso?',
    answer:
      'Aquí no basta decir “más RAM”. Caracterizo: imagen grande, regiones activas, consumo alto y posible localidad. Defendería memoria virtual o procesamiento por bloques. En memoria principal mantengo la región que se ejecuta; lo demás queda fuera. Si hay fallo de página, traigo la región y saco una víctima. Si hay reutilización de regiones, LRU, reloj o conjunto de trabajo se defienden mejor que FIFO.',
    examLine:
      'La pregunta de memoria virtual es qué mantengo en memoria principal y qué mando al área de intercambio.',
  },
  {
    area: 'Archivos',
    prompt:
      'Un sensor de temperatura y uno de brillo solar alimentan un sistema de potrero. ¿Qué archivo construye cada uno?',
    answer:
      'No clasifico el proceso completo. El sensor de temperatura entrega valores numéricos periódicos; construye registros con timestamp y temperatura. El sensor de brillo entrega irradiancia o nivel de luminosidad; también construye registros periódicos. Si se consulta por rangos horarios, defiendo índice por tiempo. Si solo se guarda histórico, secuencial basta. Buffer sí si producen más rápido de lo que se escribe; caché solo si hay consultas repetidas.',
    examLine:
      'No puedo generalizar varios dispositivos como un solo archivo porque cada dispositivo genera su propia data.',
  },
  {
    area: 'Entrada/salida',
    prompt:
      'Un disco atiende solicitudes A, B y C. Cada archivo está repartido en sectores. ¿Por qué el dispositivo necesita buffer?',
    answer:
      'El disco no entrega “el archivo completo” como unidad mágica. Entrega sectores o bloques. El controlador y el manejador ubican partes, las colocan temporalmente, verifican integridad y luego entregan una unidad útil al proceso. Eso es buffer: coordinar transferencia, ritmos y fragmentos. No es caché automáticamente, porque no estoy diciendo que se reutilice; estoy diciendo que se está armando y estabilizando la entrega.',
    examLine:
      'Buffer responde a transferencia; caché responde a reutilización.',
  },
  {
    area: 'Bloqueos',
    prompt:
      'Con recursos existentes E, matriz de asignación C y matriz de solicitudes R, determine si hay interbloqueo.',
    answer:
      'No miro primero lo que el proceso ya tiene. Primero calculo disponibilidad. Luego reviso qué proceso puede finalizar con lo disponible. Si uno puede terminar, asumo que libera sus recursos y actualizo el vector. Repito el recorrido. Si todos terminan, no hay interbloqueo. Si queda un grupo que nunca puede satisfacer su solicitud, ese grupo está interbloqueado.',
    examLine:
      'La respuesta debe mostrar el recorrido, no solo decir “hay” o “no hay”.',
  },
  {
    area: 'Distribuidos',
    prompt:
      'Un sistema tiene datos clínicos enormes y consultas semánticas para predecir riesgo. ¿Distribuiría código, datos o ambos?',
    answer:
      'Primero caracterizo dónde está la presión. Si la data es enorme pero la operación es parecida sobre fragmentos, distribuyo datos. Si el algoritmo pesa mucho, distribuyo código. Si ambas cosas pesan, distribuyo código y datos. En consultas semánticas, normalmente hay volumen, patrones y cómputo; por eso puede defenderse una arquitectura MIMD o distribuida, cuidando latencia, coherencia y fallos.',
    examLine:
      'La pregunta Calidad no es “distribuyo sí/no”; es qué conviene distribuir y por qué.',
  },
];

export const fileTheory = {
  overview:
    'La teoría de archivos se estudia por finalidad, dato de origen, estructura, tipo, acceso, implementación y riesgo de escritura compartida. Para examen, el error grave es clasificar el proceso completo como si todos los dispositivos produjeran el mismo archivo.',
  assets: ['/so-assets/nodo-i.webp'],
  cards: [
    {
      title: 'Finalidades',
      points: [
        'Perpetuar información: el resultado sobrevive al proceso.',
        'Guardar grandes volúmenes: logs, imágenes, audio, reportes, bases de datos.',
        'Compartir información: exige permisos, lectura, escritura, bloqueo y consistencia.',
      ],
    },
    {
      title: 'Dato de origen',
      points: [
        'Antes de hablar del archivo procesado, se pregunta qué entrega el dispositivo.',
        'Sensor: valores numéricos o eventos; cámara: imagen/frame; micrófono: muestras de audio; disco: bloques o sectores.',
        'El procesamiento posterior no cambia la obligación de caracterizar la data cruda.',
      ],
    },
    {
      title: 'Estructura',
      points: [
        'Secuencia de bytes: texto, binario, log, CSV.',
        'Secuencia de registros: timestamp + valor, ID + fecha + dato.',
        'Árbol o índice: búsqueda por clave, rangos o atributos.',
        'Binario estructurado: imagen, audio, video, modelo serializado.',
      ],
    },
    {
      title: 'Tipo y acceso',
      points: [
        'Regular: datos del usuario o programa.',
        'Directorio: referencias a archivos.',
        'Especial de carácter: flujo de caracteres/bytes, sensores, terminal, micrófono.',
        'Especial de bloque: disco, SSD, USB de almacenamiento.',
        'Acceso secuencial para logs/audio; directo o indexado para bases, rangos y bloques específicos.',
      ],
    },
    {
      title: 'Implementación',
      points: [
        'Asignación contigua: rápida, pero sufre crecimiento y fragmentación externa.',
        'Lista ligada: crece mejor, pero el acceso aleatorio es más lento.',
        'FAT centraliza la cadena, pero la tabla puede ser grande.',
        'Nodo-i guarda metadatos y punteros directos/indirectos sin cargar una tabla global enorme.',
      ],
    },
    {
      title: 'Buffer y caché en archivos',
      points: [
        'Buffer: juntar partes, ordenar, verificar y entregar al proceso.',
        'Caché: mantener bloques consultados frecuentemente.',
        'No todo dispositivo requiere caché. Primero se pregunta si hay reutilización.',
      ],
    },
  ],
  deviceExamples: [
    {
      device: 'Sensor de temperatura',
      raw: 'Valores numéricos periódicos.',
      file: 'Archivo regular de registros con timestamp y valor.',
      access: 'Secuencial para escritura histórica; indexado por tiempo si se consultan rangos.',
      risk: 'Puede haber sección crítica si varios procesos escriben el mismo histórico.',
    },
    {
      device: 'Micrófono',
      raw: 'Stream de muestras de audio.',
      file: 'Archivo regular binario o stream de audio por segmentos.',
      access: 'Secuencial; directo por marcas de tiempo si se revisan fragmentos.',
      risk: 'Buffer fuerte por ritmo de llegada; caché solo para segmentos reutilizados.',
    },
    {
      device: 'Cámara o microscopio',
      raw: 'Imagen, frame o matriz de píxeles.',
      file: 'Archivo binario estructurado; puede tener metadatos.',
      access: 'Directo por regiones si se analizan zonas; secuencial si solo se guarda.',
      risk: 'Memoria alta y posible uso de mmap si conviene tratarlo como memoria.',
    },
    {
      device: 'Disco',
      raw: 'Bloques o sectores.',
      file: 'El SO reconstruye el archivo desde bloques y metadatos.',
      access: 'Directo por bloque; el usuario ve archivo, pero el dispositivo mueve bloques.',
      risk: 'Necesita buffer para reunir sectores; caché si se repiten bloques.',
    },
  ],
};

export const examCases = [
  {
    title: 'Primer examen resuelto: ordeño y potrero',
    source: 'Primer examen resuelto.txt',
    image: '/so-assets/tabla-procesos.webp',
    summary:
      'Caso con ocho procesos: peso de leche, análisis de leche, IA de tratamiento, agujas de cepo, rayos infrarrojos, flujo de leche, concentrado y acceso a potrero.',
    processes: [
      {
        name: 'A — Registro de leche por pezón/vaca',
        traits: ['Ráfaga baja en CPU', 'E/S exhaustiva por sensores', 'No tiempo real: muchas vacas compiten', 'Escritura de registros'],
      },
      {
        name: 'B — Siete dispositivos de análisis de leche',
        traits: ['Procesamiento considerable', 'Memoria alta por varios dispositivos', 'No tiempo real: muchas muestras', 'Escritura de resultados'],
      },
      {
        name: 'C — IA para anomalías y tratamiento',
        traits: ['CPU alto por algoritmo', 'Importancia mayor por alerta', 'El análisis ocurre en ejecución, pero no es tiempo real estricto', 'Lee resultados y decide'],
      },
      {
        name: 'H — Potrero con humedad, temperatura y brillo',
        traits: ['Tres dispositivos con data distinta', 'Lectura poco frecuente', 'Archivo por sensor más archivo de decisión', 'No tiempo real'],
      },
    ],
    questions: [
      'Explique el algoritmo de CPU y justifique con BCP y tabla de procesos.',
      'Identifique procesos con riesgo de sección crítica por escritura.',
      'Caracterice archivos por dispositivo, no por proceso completo.',
    ],
    defense:
      'Primero caracterizo cada proceso. La lectura de sensores no consume CPU, consume E/S. La IA sí consume CPU y tiene importancia por alerta. No digo tiempo real solo porque el caso suena automático; si hay muchas vacas o muestras, se quitan CPU entre sí.',
  },
  {
    title: 'Segundo examen resuelto: salud, perfiles y datos masivos',
    source: 'Segundo examen resuelto.txt',
    image: '/so-assets/memoria-mapa-lista.webp',
    summary:
      'Caso con ADN, monitoreo de bebés, perfiles de redes sociales, web services clínicos, Hacienda y hábitos alimenticios.',
    processes: [
      {
        name: 'A — Decodificación de ADN',
        traits: ['Ráfaga alta', 'No tiempo real', 'Entrada/salida alta por lectura', 'Archivo de caracteres/texto'],
      },
      {
        name: 'B — Monitorización de bebés',
        traits: ['E/S muy alta por latidos y respiración', 'Ráfaga baja', 'No tiempo real por múltiples centros/dispositivos', 'Lee y escribe reporte'],
      },
      {
        name: 'C — Predicción de pandemias',
        traits: ['CPU y memoria muy altos', 'Bodegas de datos', 'Crecimiento alto', 'Lee y escribe resultados'],
      },
      {
        name: 'F — Hábitos alimenticios',
        traits: ['Memoria y crecimiento altos', 'Procesa strings de compras', 'E/S alta', 'Lee compras y escribe perfil'],
      },
    ],
    questions: [
      '¿Aplicaría memoria virtual? ¿Qué política de reemplazo defendería?',
      '¿Por qué no sirven particiones fijas, mapa de bits, listas ligadas o buddies como solución principal?',
      '¿Qué páginas conviene mantener si hay consultas frecuentes?',
    ],
    defense:
      'La memoria virtual se defiende porque hay procesos de datos masivos y crecimiento alto. La política no se elige por nombre; se elige preguntando si me interesa mantener páginas frecuentemente usadas. Si sí, segunda oportunidad/reloj se defienden mejor que FIFO.',
  },
  {
    title: 'Caso MediCore: sensores, IA, imágenes y audio',
    source: 'Chat y Repaso Final',
    image: '/so-assets/io-buffer-dma.webp',
    summary:
      'Caso médico usado para practicar CPU, memoria, archivos, E/S, bloqueos y sistemas distribuidos con la lógica de Calidad.',
    processes: [
      {
        name: 'A — Sensores biomédicos',
        traits: ['Ráfaga mínima', 'E/S altísima', 'No tiempo real estricto por 450 pacientes', 'Registros numéricos con timestamp'],
      },
      {
        name: 'B — IA de riesgo cardiovascular',
        traits: ['CPU alto', 'Importancia alta por alarma', 'Memoria relevante', 'No basta Round Robin plano'],
      },
      {
        name: 'C — Imágenes de cultivos',
        traits: ['CPU y memoria altos', 'Archivos binarios grandes', 'Acceso por regiones', 'Puede usar memoria virtual'],
      },
      {
        name: 'D — Audio de dolor',
        traits: ['Stream secuencial', 'Buffer fuerte', 'Localidad por segmentos', 'FIFO puede defenderse para flujo secuencial'],
      },
    ],
    questions: [
      'Diseñe planificación CPU con dos colas.',
      'Explique archivos por cada dispositivo biomédico.',
      'Distinga buffer y caché en audio, imagen y sensores.',
      'Detecte posibles bloqueos por archivos, dispositivos o secciones críticas.',
      'Proponga distribución de código, datos o ambos.',
    ],
    defense:
      'La respuesta fuerte no es “todo es tiempo real”. Primero separo sensores, IA, imágenes y audio. Luego decido: colas múltiples para CPU, memoria virtual para imagen/IA, buffer para flujos, caché solo si hay reutilización y distribución según presión de código o data.',
  },
];

export const theoryModules = [
  {
    title: 'CPU y planificación',
    asset: '/so-assets/tabla-procesos.webp',
    points: [
      'Ráfaga: tramo donde el proceso usa CPU antes de bloquearse, terminar o ser desalojado.',
      'Round Robin: si se acaba el quantum y aún tiene instrucciones, vuelve a listo.',
      'SJF se valora por pila de código o cantidad de instrucciones, no por intuición.',
      'Prioridades se defienden por importancia, criticidad o impacto de no atender.',
      'Tiempo real solo si hay restricción inmediata defendible y no muchos iguales compitiendo.',
    ],
  },
  {
    title: 'Memoria',
    asset: '/so-assets/memoria-mapa-lista.webp',
    points: [
      'El proceso necesita en memoria lo necesario para ejecutar al menos la siguiente instrucción.',
      'Mapa de bits busca bloques contiguos, no bloques sueltos.',
      'Listas ligadas usan nodos con estado, dirección, tamaño y puntero.',
      'Peor ajuste se puede defender si se espera crecimiento, pero no como regla general.',
      'Con intercambio, el problema es qué queda en memoria principal y qué va al área de intercambio.',
    ],
  },
  {
    title: 'Entrada/salida',
    asset: '/so-assets/io-buffer-dma.webp',
    points: [
      'La E/S es el puente entre proceso y mundo externo.',
      'Controladora: parte cercana al hardware; manejador/driver: lógica del SO.',
      'Buffer reúne, ordena, verifica o desacopla ritmos.',
      'Caché requiere reutilización frecuente.',
      'DMA libera a CPU de copiar byte por byte; CPU configura y recibe interrupción final.',
    ],
  },
  {
    title: 'Bloqueos',
    asset: '/so-assets/bloqueos-vector.webp',
    points: [
      'No todo bloqueo es malo; el problema fuerte es interbloqueo.',
      'Coffman: exclusión mutua, retención y espera, no apropiación y espera circular.',
      'En matrices, se mira solicitud contra disponible; si termina, libera recursos.',
      'Round Robin puede agravar si interrumpe procesos que retienen recursos no liberados.',
    ],
  },
  {
    title: 'Distribuidos',
    asset: '/so-assets/distribuidos-flynn.webp',
    points: [
      'La pregunta no es si distribuir, sino qué distribuir: código, datos o ambos.',
      'Código: cuando pesa la ejecución. Datos: cuando pesa el volumen. Ambos: cuando pesan los dos.',
      'Fuertemente acoplado: cluster/integración alta. Débilmente acoplado: nodos por red.',
      'Flynn: SISD, SIMD, MISD y MIMD para clasificar instrucciones y datos.',
    ],
  },
];

export const oralTemplate = [
  'Primero caracterizo los procesos.',
  'El dato clave aquí es...',
  'Descarto esta política porque...',
  'Aplicaría esta opción porque...',
  'Lo defendería en examen así...',
];

// Mapa de los temas del curso a los capítulos de Tanenbaum (Sistemas Operativos Modernos),
// con la lectura desde la lógica de Calidad. Tanenbaum es apoyo técnico: la decisión se
// defiende por comportamiento, no por la definición del libro.
export const tanenbaumGuide = [
  {
    chapter: 'Cap. 2 — Procesos e hilos',
    page: 113,
    topic: 'CPU y planificación',
    pages: 'Planificación: 2.4',
    read: [
      'Estados del proceso y BCP: úsalos para describir el ciclo de ejecución paso a paso.',
      'FCFS, SJF, Round Robin y prioridades: en examen no basta el nombre, se justifica por ráfaga, pila de código e importancia.',
      'Quantum y cambio de contexto: un proceso vuelve a listo por Round Robin cuando se agota el quantum y aún tiene instrucciones.',
    ],
    calidad:
      'Caracterizo ráfaga, cantidad de instrucciones, E/S e importancia antes de nombrar el algoritmo. No clasifico tiempo real solo porque el enunciado lo diga.',
  },
  {
    chapter: 'Cap. 3 — Administración de memoria',
    page: 205,
    topic: 'Memoria',
    pages: 'Particiones, intercambio y memoria virtual: 3.1–3.3',
    read: [
      'Particiones fijas (mismo y varios tamaños), variables, mapa de bits y listas ligadas.',
      'Ajustes: primer, siguiente, mejor, peor y rápido — cada uno con su costo y desperdicio.',
      'Memoria virtual y reemplazo (FIFO, segunda oportunidad/reloj, LRU): el problema es qué queda en memoria principal y qué va al área de intercambio.',
    ],
    calidad:
      'El mapa de bits busca bloques contiguos, no sueltos; los huecos inútiles aparecen al inicio. La política de reemplazo se elige según si interesa conservar páginas frecuentes.',
  },
  {
    chapter: 'Cap. 4 — Sistemas de archivos',
    page: 285,
    topic: 'Archivos',
    pages: 'Archivos e implementación: 4.1–4.3',
    read: [
      'Estructura (bytes, registros, árbol/índice), tipos (regular, directorio, especial de carácter/bloque) y acceso.',
      'Implementación: contigua, lista ligada, FAT y nodo-i con punteros directos/indirectos.',
      'Cada dispositivo entrega su propia data de origen: se caracteriza cada archivo por separado.',
    ],
    calidad:
      'No clasifico el proceso completo como un archivo. Primero pregunto qué entrega el dispositivo en crudo y luego cómo lo procesa el sistema.',
  },
  {
    chapter: 'Cap. 5 — Entrada/salida',
    page: 359,
    topic: 'E/S, buffer y caché',
    pages: 'Principios de E/S y DMA: 5.1',
    read: [
      'Controladora (cerca del hardware) vs manejador/driver (lógica del SO).',
      'Buffer: reunir porciones, ordenar, verificar y entregar; el archivo no se trae completo de golpe.',
      'DMA libera a la CPU de copiar byte por byte; la CPU configura y recibe la interrupción final.',
    ],
    calidad:
      'Buffer responde a transferencia; caché responde a reutilización. No defiendo caché si el dato siempre es nuevo.',
  },
  {
    chapter: 'Cap. 6 — Interbloqueos',
    page: 463,
    topic: 'Bloqueos',
    pages: 'Detección y evitación: 6.1–6.4',
    read: [
      'Condiciones de Coffman: exclusión mutua, retención y espera, no apropiación y espera circular.',
      'Matrices E, asignación y solicitud; algoritmo del banquero.',
      'Recorrido de detección: disponibilidad → quién puede terminar → libera → repito.',
    ],
    calidad:
      'No miro primero lo que el proceso ya tiene. Comparo lo que solicita contra el vector disponible; si termina, libera y actualizo. La respuesta muestra el recorrido.',
  },
  {
    chapter: 'Cap. 8 — Sistemas con múltiples procesadores',
    page: 553,
    topic: 'Distribuidos',
    pages: 'Multiprocesadores y distribuidos: 8.1–8.2',
    read: [
      'Taxonomía de Flynn: SISD, SIMD, MISD, MIMD.',
      'Fuertemente acoplado (memoria compartida) vs débilmente acoplado (nodos por red).',
      'Distribuir código, datos o ambos según dónde está la presión.',
    ],
    calidad:
      'La pregunta no es si distribuir, sino qué: código cuando pesa la ejecución, datos cuando pesa el volumen, ambos cuando pesan los dos.',
  },
];

// Campos de la plantilla de resolución de casos (estructura de defensa de Calidad).
export const caseProcessFields = [
  { key: 'rafaga', label: 'Ráfaga' },
  { key: 'instrucciones', label: 'Cantidad de instrucciones / pila de código' },
  { key: 'es', label: 'Entrada/salida' },
  { key: 'tiempoReal', label: '¿Tiempo real?' },
  { key: 'lecturaEscritura', label: 'Lectura / escritura' },
  { key: 'memoria', label: 'Memoria' },
  { key: 'importancia', label: 'Importancia' },
  { key: 'seccionCritica', label: 'Riesgo de sección crítica' },
];

export const caseDecisionFields = [
  { key: 'cpu', label: 'Para CPU', hint: 'Algoritmo recomendado y por qué (ráfaga, instrucciones, importancia).' },
  { key: 'memoria', label: 'Para memoria', hint: 'Modelo, ajuste, intercambio o política de reemplazo.' },
  { key: 'archivos', label: 'Para archivos', hint: 'Estructura, tipo y acceso por cada dispositivo.' },
  { key: 'es', label: 'Para entrada/salida', hint: 'Buffer, caché y justificación.' },
  { key: 'conclusion', label: 'Conclusión como examen', hint: 'Respuesta breve defendible.' },
];

// Caso MediCore resuelto con la lógica de Calidad (de la sesión de repaso).
// Es material de práctica para el tercer examen: caracterización por columnas +
// preguntas trabajadas de CPU, memoria, archivos, E/S, bloqueos y distribuidos.
export const medicoreCase = {
  intro:
    'Data Center Hospitalario MediCore: sensores biomédicos en 450 pacientes, IA clínica de riesgo, análisis de imágenes de cultivos por microscopio y análisis de audio de dolor en UCI. Primero se caracteriza cada proceso columna por columna; recién después se decide CPU, memoria, archivos o E/S.',
  processes: [
    { id: 'A', name: 'Sensores biomédicos', detail: 'Frecuencia cardíaca, saturación O₂, presión y temperatura, cada 2 s en 450 pacientes.' },
    { id: 'B', name: 'IA de análisis clínico', detail: 'Riesgo cardiovascular y cerebrovascular; dispara alarmas en casi tiempo real.' },
    { id: 'C', name: 'Imágenes de cultivos', detail: 'Lotes de imágenes de microscopio para detectar virus, bacterias y hongos.' },
    { id: 'D', name: 'Audio de dolor', detail: 'Fragmentos de audio de UCI a espectrogramas y vectores para clasificar dolor.' },
  ],
  columns: [
    'Tiempo real',
    'Ráfaga',
    'E/S',
    'Cambio de contexto',
    'Desperdicio por cambio',
    'Nat. variables',
    'Nat. archivos',
    'Memoria solicitada',
    'Crecimiento',
    'Desperdicio memoria',
    'Buffer',
    'Caché',
  ],
  table: {
    A: ['No', 'Mínima', '+++', 'No conviene', 'Alto', 'Sí', 'Sí', 'Relevante', 'Estable', 'Moderado', 'Sí', 'No'],
    B: ['No', '+++', '+++', 'No conviene', 'Bajo', 'No', 'No', 'Creciente', 'Creciente', 'No', 'No', 'Sí'],
    C: ['No', 'Alta', '+++', 'No conviene', 'Bajo', 'No', 'No', 'Creciente', 'Creciente', 'No', 'Sí', 'No'],
    D: ['No', '+++', '+++', 'No conviene', 'Bajo', 'No', 'No', 'Muy alta', 'Creciente', 'No', 'Sí', 'No'],
  },
  tableNote:
    'Calidad descarta tiempo real en los cuatro: con cientos de instancias coexistiendo, ningún proceso tiene exclusividad de CPU. A es el único con buffer obligatorio (el sensor produce más rápido de lo que el proceso consume); B es el único con caché (el modelo de IA se reutiliza entre pacientes).',
  questions: [
    {
      area: 'CPU',
      title: 'Pregunta 1 — Algoritmo de planificación de CPU',
      ask: 'Justifique el algoritmo de planificación correcto con variables del BCP y de la tabla de procesos.',
      answer: [
        'Decir solo "Round Robin" mete a todos en la misma bolsa, y A es muy distinto a B, C y D. La respuesta completa es colas múltiples con dos colas, porque permite aplicar algoritmos distintos a comportamientos distintos.',
        'Cola 1 — Proceso A (ráfaga mínima, E/S altísima): RR con quantum bajo (cede el CPU rápido y se va a E/S) o SJF por pila de código (A tiene poquísimas instrucciones: leer el sensor y registrar). Cualquiera se defiende según el criterio que enfatices.',
        'Cola 2 — Procesos B, C y D (ráfaga +++ , CPU-bound): RR con quantum alto, para que avancen su análisis sin que el cambio de contexto se multiplique ni se les corte a la mitad.',
        'Se descarta apropiatividad porque ninguno es tiempo real estricto; se descarta FCFS porque dejaría que las ráfagas enormes de B, C y D monopolicen el CPU.',
      ],
      defense:
        'La variable que separa las dos colas no es el nombre ni la importancia: es la ráfaga. A tiene ráfaga mínima; B, C y D tienen ráfaga máxima. Eso justifica usar algoritmos distintos.',
    },
    {
      area: 'Memoria',
      title: 'Pregunta 2 — Política de administración de memoria',
      ask: 'Recomiende la política del planificador de mediano plazo con al menos diez variables de peso.',
      answer: [
        'Se descartan uno a uno los modelos sin intercambio: particiones fijas (mismo y varios tamaños) por crecimiento; mapa de bits por huecos inútiles al inicio y crecimiento desproporcionado; listas ligadas porque el crecimiento vuelve lentas las búsquedas; socios por desperdicio interno al redondear a potencias de 2.',
        'La única política viable es memoria virtual con intercambio: el problema no es el tamaño físico, sino que B, C y D crecen de forma que ningún bloque fijo los contiene.',
        'La política de reemplazo NO es única: la pregunta del millón es si las páginas se reutilizan entre iteraciones. Para B el modelo de IA se reutiliza → Segunda Oportunidad o Reloj. Para C y D cada lote/fragmento es nuevo → FIFO basta y es más barato.',
        'Variables de peso: crecimiento del proceso, tamaño de memoria solicitado, frecuencia de acceso a páginas, bit R, bit M, hora de carga de página, puntero a la última página reemplazada, frecuencia de fallos de página, tamaño del área de intercambio y frecuencia de reutilización de páginas entre iteraciones.',
      ],
      defense:
        'La variable que manda toda la decisión es la tasa de crecimiento y la frecuencia de reutilización de páginas. Sin esas dos no puedo decidir ni el intercambio ni el algoritmo de reemplazo.',
    },
    {
      area: 'Memoria',
      title: 'Pregunta 3 — ¿Quién se favorece con particiones fijas de varios tamaños?',
      ask: 'Determine qué proceso se favorece y por qué los demás quedan descartados.',
      answer: [
        'B, C y D quedan descartados por crecimiento: la reasignación y protección es una operación atómica cara y, si crecen demasiado, no pueden migrar a un bloque mayor.',
        'A parece el favorecido por consumo estable y bloque pequeño. Pero hay un giro: cuando B, C o D crecen y aplican reasignación, pellizcan espacio de otros bloques, y el bloque pequeño de A —que tiene un buffer activo de 450 sensores— es el candidato a perder espacio.',
        'Conclusión honesta: este modelo no favorece limpiamente a nadie. Si hay que elegir uno, es A, pero solo si se garantiza que su bloque no será objetivo de las reasignaciones de los otros tres.',
      ],
      defense:
        'A pasa de ser el más favorecido al más perjudicado en cuanto B, C o D crecen, porque su buffer no puede perder ni un bloque. La respuesta correcta es que el modelo no favorece limpiamente a nadie.',
    },
    {
      area: 'Memoria',
      title: 'Pregunta 4 — Proceso D con intercambio: reemplazo que favorece y que perjudica',
      ask: 'Indique la política de reemplazo que más favorece y la que más perjudica al proceso D.',
      answer: [
        'Cada vez que D entra a ejecución carga páginas completamente nuevas (nuevo fragmento de audio, nuevo espectrograma, nuevos vectores). No hay reutilización de páginas entre iteraciones.',
        'Favorece: FIFO. Es el algoritmo más barato; limpia todo rápido. No tiene sentido invertir en evaluar bits R y M si en la próxima iteración todo cambia igual.',
        'Perjudica: Reloj (y Segunda Oportunidad). Están diseñadas para proteger páginas frecuentes; para D ese análisis es trabajo costoso sin beneficio, porque las páginas "protegidas" salen igual. Reloj es el peor porque recorre circularmente todas las páginas.',
      ],
      defense:
        'La variable que manda no es el nombre del algoritmo: es si el proceso reutiliza páginas entre iteraciones. Para D la respuesta es claramente no, así que FIFO.',
    },
    {
      area: 'Archivos',
      title: 'Tercer examen — Archivos',
      ask: 'Caracterice los archivos del proceso A (sensores) y del proceso C (microscopios) de forma independiente.',
      answer: [
        'Primero el dispositivo, luego el dato en crudo, luego el archivo. No se generaliza el proceso completo como un solo archivo.',
        'Proceso A: cada sensor (FC, SatO₂, presión, temperatura) genera su propio archivo de registros (timestamp + ID paciente + valor). Tipo regular, acceso directo (al llegar una alarma voy directo al paciente, no recorro 449), implementación iNodo porque crece cada 2 s y necesito las porciones recientes. Asignación adyacente descartada por crecimiento.',
        'Proceso C: la imagen del microscopio es binario estructurado (matriz de píxeles). Tipo regular binario, acceso directo por regiones (el proceso analiza zonas, no lee la imagen entera), implementación iNodo porque las imágenes son grandes y se accede a regiones frecuentes.',
      ],
      defense:
        'No digo "el proceso A genera un archivo". A tiene cuatro dispositivos y cada uno construye su propio archivo; lo que cambia es el dato en crudo: bpm, porcentaje, mmHg, grados.',
    },
    {
      area: 'Entrada/salida',
      title: 'Tercer examen — Espera por entrada y salida',
      ask: 'Explique el recorrido del dato y justifique buffer/caché para los procesos A y C.',
      answer: [
        'Recorrido: la controladora (parte física) mide y digitaliza; el manejador (lógica del SO) ordena y valida las peticiones; el dato cae al buffer del dispositivo, que acumula mientras el proceso consume; al solicitarlo, se traslada al bloque de memoria del proceso verificando integridad (CRC). Recién ahí el proceso pasa de espera por E/S a listo.',
        'A: buffer sí (el sensor produce 450 lecturas cada 2 s y el proceso no las consume al instante); caché no (la saturación de hace 4 s no sirve para la actual: el dato siempre es nuevo).',
        'C: buffer sí (las imágenes llegan por lotes y se analizan una a una); caché no (cada imagen de cultivo es distinta, no se reutiliza).',
        'Sin buffer, A no tendría dónde depositar las lecturas mientras procesa: perdería datos. En un sistema crítico, perder una lectura puede ser no detectar una anomalía. El buffer es condición de integridad, no un lujo.',
      ],
      defense:
        'Buffer responde a transferencia y ritmos; caché responde a reutilización. No asigno caché por defecto: primero pregunto si el dato se repite.',
    },
    {
      area: 'Bloqueos',
      title: 'Tercer examen — Bloqueos',
      ask: 'B tiene R1 (signos del paciente #112) y pide R2 (modelo). D tiene R2 y pide R1. Ninguno libera. ¿Hay interbloqueo?',
      answer: [
        'Coffman una a una: exclusión mutua (R1 y R2 son de uso exclusivo, presente); posesión y espera (B tiene R1 y espera R2, D tiene R2 y espera R1, presente); no apropiación (no puedo quitar el recurso a mitad de análisis sin corromper, presente); espera circular (B → R2 → D → R1 → B, presente). Las cuatro se cumplen: hay interbloqueo.',
        'Estrategia: avestruz descartada (es un sistema hospitalario, un proceso detenido puede no disparar una alarma). Prevención difícil (rompería exclusión mutua o no apropiación). La opción defendible es detección y recuperación: detectar la espera circular, terminar el proceso con menor avance, liberar sus recursos y reiniciarlo.',
        'Round Robin agrava: al agotarse el quantum, B suelta el CPU pero NO suelta R1. El recurso queda retenido aunque el proceso esté en listos, y D que pide R1 se queda esperando. Con FCFS, B avanzaría hasta E/S y podría liberar R1 de forma natural.',
      ],
      defense:
        'No basta decir "hay" o "no hay": muestro el recorrido de las cuatro condiciones y explico por qué Round Robin hace el bloqueo más probable.',
    },
    {
      area: 'Distribuidos',
      title: 'Tercer examen — Sistemas distribuidos',
      ask: 'Expansión a 3 hospitales y 10 clínicas, y 50 000 imágenes diarias del proceso C. ¿Qué arquitectura y qué se distribuye?',
      answer: [
        'Cluster (fuertemente acoplado): rapidísimo por memoria compartida, pero exige hardware idéntico (inviable para tantos nodos), es caro y no tolera fallos (si cae un componente, cae todo). Defendible solo para el componente de alarmas de B, donde la velocidad es crítica.',
        'Débilmente acoplado (por red): permite hardware heterogéneo, solo necesita master (lanza rutinas) y slave (atiende peticiones), y es tolerante a fallos (si un nodo cae, su carga se reasigna). Mayor latencia, aceptable para casi todo el caso. Es la opción recomendada para la expansión.',
        'Para las 50 000 imágenes conviene distribuir la data, no el código: el análisis de cada imagen es independiente. El master reparte el lote, los slaves procesan su porción con la misma rutina y devuelven resultados; el master consolida.',
        'Taxonomía de Flynn: MIMD. Múltiples procesadores ejecutan instrucciones distintas sobre datos distintos (A lee sensores, C analiza imágenes, B infiere IA). No es SIMD (no todos ejecutan la misma instrucción) ni SISD (hay múltiples procesadores).',
      ],
      defense:
        'La pregunta no es si distribuir, sino qué: con 50 000 imágenes independientes, distribuyo la data. Si la rutina de IA fuera muy pesada por sí sola, podría además distribuir el código.',
    },
  ],
};
