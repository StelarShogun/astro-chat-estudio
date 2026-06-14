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
    subtitle: 'Caso MediCore y preguntas 2, 3 y 4',
    context:
      'Usar exactamente estas fotografías como enunciado. El caso inicia con Data Center Hospitalario, MediCore, sensores biomédicos, IA clínica, imágenes de muestras y audio de UCI.',
    images: [
      {
        src: '/exam-images/primer-examen-caso.png',
        label: 'Imagen #1: enunciado completo del caso MediCore',
      },
      {
        src: '/exam-images/primer-examen-preguntas.png',
        label: 'Imagen #2: preguntas sobre ciclo de ejecución, sección crítica y Round Robin',
      },
    ],
    prompts: [
      'Escoger un proceso y describir paso a paso el ciclo de ejecución con estados y variables del BCP.',
      'Explicar si puede existir sección crítica y por qué.',
      'Explicar cuándo Round Robin sería la peor elección para este contexto.',
    ],
    defense:
      'Primero caracterizo A, B, C y D. No digo que todo es tiempo real solo porque el enunciado lo dice. Miro ráfaga, E/S, escritura, importancia, recursos compartidos y efecto del quantum.',
  },
  {
    title: 'Segundo examen',
    subtitle: 'Mismo caso MediCore con CPU y memoria',
    context:
      'Usar exactamente estas fotografías como segundo bloque de examen. Incluye preguntas de planificación de CPU, administración de memoria, particiones fijas y reemplazo para el proceso D.',
    images: [
      {
        src: '/exam-images/segundo-examen-caso.png',
        label: 'Imagen #3: enunciado base del caso MediCore',
      },
      {
        src: '/exam-images/segundo-examen-preguntas.png',
        label: 'Imagen #4: preguntas de CPU, memoria y reemplazo',
      },
    ],
    prompts: [
      'Definir el algoritmo de planificación de CPU correcto usando variables del BCP y tabla de procesos.',
      'Recomendar una política de administración de memoria con al menos diez variables de peso.',
      'Determinar qué proceso se favorece con particiones fijas de varios tamaños.',
      'Analizar el proceso D si aplica intercambio y decidir política de reemplazo favorable y perjudicial.',
    ],
    defense:
      'La defensa debe mostrar criterios. Para CPU no basta nombrar un algoritmo; se justifica por ráfaga, pila de código, E/S, importancia y cambio de contexto. Para memoria se decide por tamaño, crecimiento, localidad, intercambio y política de reemplazo.',
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
  assets: ['/so-assets/nodo-i.png'],
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
    image: '/so-assets/tabla-procesos.jpg',
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
    image: '/so-assets/memoria-mapa-lista.png',
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
    image: '/so-assets/io-buffer-dma.png',
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
    asset: '/so-assets/tabla-procesos.jpg',
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
    asset: '/so-assets/memoria-mapa-lista.png',
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
    asset: '/so-assets/io-buffer-dma.png',
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
    asset: '/so-assets/bloqueos-vector.png',
    points: [
      'No todo bloqueo es malo; el problema fuerte es interbloqueo.',
      'Coffman: exclusión mutua, retención y espera, no apropiación y espera circular.',
      'En matrices, se mira solicitud contra disponible; si termina, libera recursos.',
      'Round Robin puede agravar si interrumpe procesos que retienen recursos no liberados.',
    ],
  },
  {
    title: 'Distribuidos',
    asset: '/so-assets/distribuidos-flynn.png',
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
