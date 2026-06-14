// Casos de estudio interactivos, organizados por módulo.
//
// Cada caso tiene:
//   - context / problem: lo que el estudiante lee.
//   - reference: material de apoyo.
//   - tables: tablas EDITABLES con datos ficticios y errores de diseño a propósito.
//   - questions: preguntas abiertas con guía, conceptos obligatorios, palabras
//     clave, criterios mínimos, contradicciones y recomendación. El evaluador
//     local (src/lib/caseEvaluator.js) usa estos campos para dar feedback.
//
// Para agregar otro caso, añade un objeto al arreglo `cases` del módulo
// correspondiente (o crea un módulo nuevo). No hace falta tocar componentes.

const databaseServerLechero = {
  id: 'db-server-lechero',
  title: 'Database Server del módulo lechero',
  badge: 'Caso de base de datos',
  context:
    'La cooperativa "El Potrero" automatizó el registro de producción lechera. ' +
    'Cada finca reporta la leche que da cada animal por día, y un módulo de software ' +
    'guarda todo en un servidor de base de datos central. Productores, técnicos y ' +
    'administradores consultan reportes para pagar la leche, vigilar la salud del hato ' +
    'y proyectar la producción.',
  problem:
    'Desde la última actualización del servidor, los reportes de producción no cuadran: ' +
    'un mismo animal aparece con nombres distintos, los litros a veces se guardan con coma ' +
    'y a veces con punto, y hay fincas asignadas a productores que ya no existen. El módulo ' +
    'sigue "funcionando", pero las decisiones de pago y de salud animal se toman con datos ' +
    'poco confiables. El diseño de las tablas es el sospechoso principal.',
  reference: [
    {
      title: 'Integridad y consistencia',
      detail:
        'Un dato debe existir una sola vez y como fuente de verdad. Repetir el nombre del ' +
        'productor en varias tablas abre la puerta a que una copia diga una cosa y otra diga otra.',
    },
    {
      title: 'Claves primarias y foráneas',
      detail:
        'La clave primaria identifica de forma única cada fila. La clave foránea enlaza una ' +
        'tabla con la clave primaria de otra, en vez de copiar nombres o textos repetidos.',
    },
    {
      title: 'Normalización (hasta 3FN)',
      detail:
        'Separar la información en tablas relacionadas reduce redundancia y evita anomalías de ' +
        'inserción, actualización y borrado.',
    },
    {
      title: 'Tipos de datos y validación',
      detail:
        'Los litros son numéricos (decimal), las fechas son tipo fecha y deben validarse con ' +
        'restricciones (NOT NULL, UNIQUE, rangos). Guardar números como texto rompe los cálculos.',
    },
    {
      title: 'Seguridad de credenciales',
      detail:
        'Las contraseñas nunca se guardan en texto plano: se almacena un hash. El rol debe venir ' +
        'de un catálogo controlado, no de texto libre.',
    },
  ],
  tablesIntro:
    'Estas tablas son las del módulo lechero. Edítalas, agrega o elimina filas y observa los ' +
    'problemas de diseño (nombres repetidos en vez de llaves, formatos mezclados, contraseñas a ' +
    'la vista). Lo que descubras aquí es la materia prima de las preguntas de abajo.',
  tables: [
    {
      id: 'productores',
      name: 'Productores',
      note: 'PK esperada: id_productor. Revisa unicidad y formato del teléfono.',
      allowAddRows: true,
      allowRemoveRows: true,
      columns: [
        { key: 'id_productor', label: 'id_productor', type: 'text' },
        { key: 'nombre', label: 'nombre', type: 'text' },
        { key: 'cedula', label: 'cédula', type: 'text' },
        { key: 'telefono', label: 'teléfono', type: 'text' },
      ],
      rows: [
        { id_productor: 'P01', nombre: 'María Jiménez', cedula: '1-1234-5678', telefono: '8888-1111' },
        { id_productor: 'P02', nombre: 'José Rodríguez', cedula: '2-3456-7890', telefono: '88882222' },
        { id_productor: 'P02', nombre: 'Jose Rodriguez', cedula: '2-3456-7890', telefono: '(506) 8888 2222' },
        { id_productor: 'P03', nombre: 'Ana Mora', cedula: '3-0987-6543', telefono: 'no tiene' },
      ],
    },
    {
      id: 'fincas',
      name: 'Fincas',
      note: 'Aquí se guarda el NOMBRE del productor en vez de una llave foránea a Productores.',
      allowAddRows: true,
      allowRemoveRows: true,
      columns: [
        { key: 'id_finca', label: 'id_finca', type: 'text' },
        { key: 'nombre_finca', label: 'nombre_finca', type: 'text' },
        { key: 'nombre_productor', label: 'nombre_productor', type: 'text' },
        { key: 'area', label: 'área', type: 'text' },
      ],
      rows: [
        { id_finca: 'F1', nombre_finca: 'La Esperanza', nombre_productor: 'María Jiménez', area: '5 hectáreas' },
        { id_finca: 'F2', nombre_finca: 'El Roble', nombre_productor: 'Jose Rodriguez', area: '12' },
        { id_finca: 'F3', nombre_finca: 'Vista Verde', nombre_productor: 'Pedro Soto', area: '8 ha' },
      ],
    },
    {
      id: 'animales',
      name: 'Animales',
      note: 'Repite el nombre de la finca; la fecha de nacimiento usa formatos distintos.',
      allowAddRows: true,
      allowRemoveRows: true,
      columns: [
        { key: 'id_animal', label: 'id_animal', type: 'text' },
        { key: 'nombre_animal', label: 'nombre_animal', type: 'text' },
        { key: 'nombre_finca', label: 'nombre_finca', type: 'text' },
        { key: 'fecha_nacimiento', label: 'fecha_nacimiento', type: 'date' },
      ],
      rows: [
        { id_animal: 'A001', nombre_animal: 'Lola', nombre_finca: 'La Esperanza', fecha_nacimiento: '2021-03-15' },
        { id_animal: 'A002', nombre_animal: 'Estrella', nombre_finca: 'El Roble', fecha_nacimiento: '15/06/2020' },
        { id_animal: 'A003', nombre_animal: 'Lola', nombre_finca: 'La Esperanza', fecha_nacimiento: 'marzo 2021' },
      ],
    },
    {
      id: 'produccion',
      name: 'Producción diaria',
      note: 'Litros guardados como texto (coma vs punto) y un valor negativo. Repite nombres en vez de llaves.',
      allowAddRows: true,
      allowRemoveRows: true,
      columns: [
        { key: 'id_registro', label: 'id_registro', type: 'text' },
        { key: 'nombre_animal', label: 'nombre_animal', type: 'text' },
        { key: 'nombre_productor', label: 'nombre_productor', type: 'text' },
        { key: 'fecha', label: 'fecha', type: 'date' },
        { key: 'litros', label: 'litros', type: 'number' },
      ],
      rows: [
        { id_registro: 'R1', nombre_animal: 'Lola', nombre_productor: 'María Jiménez', fecha: '2024-05-01', litros: '12,5' },
        { id_registro: 'R2', nombre_animal: 'Estrella', nombre_productor: 'Jose Rodriguez', fecha: '01/05/2024', litros: '10.2' },
        { id_registro: 'R3', nombre_animal: 'Lola', nombre_productor: 'Maria Jimenez', fecha: '2024-05-02', litros: '-3' },
      ],
    },
    {
      id: 'usuarios',
      name: 'Usuarios del sistema',
      note: 'Contraseñas en texto plano, rol como texto libre y un correo duplicado.',
      allowAddRows: true,
      allowRemoveRows: true,
      columns: [
        { key: 'id_usuario', label: 'id_usuario', type: 'text' },
        { key: 'correo', label: 'correo', type: 'email' },
        { key: 'rol', label: 'rol', type: 'text' },
        { key: 'contrasena', label: 'contraseña', type: 'text' },
      ],
      rows: [
        { id_usuario: 'U1', correo: 'maria@coop.cr', rol: 'admin', contrasena: '123456' },
        { id_usuario: 'U2', correo: 'jose@coop.cr', rol: 'administrador', contrasena: 'jose2024' },
        { id_usuario: 'U3', correo: 'maria@coop.cr', rol: 'tecnico', contrasena: 'qwerty' },
      ],
    },
  ],
  questions: [
    {
      id: 'q1-problema',
      prompt: '¿Cuál es el problema principal que presenta el caso?',
      criteria: [
        'Ubica el problema en el diseño de la base de datos del módulo lechero.',
        'Menciona consecuencias: redundancia, inconsistencia o pérdida de integridad.',
        'Relaciona el problema con el registro de producción y la confiabilidad de los datos.',
      ],
      keywords: ['redundancia', 'integridad', ['inconsistencia', 'inconsistente'], 'datos', ['base de datos', 'servidor']],
      concepts: [
        {
          id: 'origen-bd',
          label: 'el problema está en el diseño de la base de datos',
          terms: ['base de datos', 'servidor', 'diseño de las tablas', 'modelo de datos', 'esquema'],
          praise: 'Ubicas el problema en el diseño de la base de datos, no en algo superficial.',
          gap: 'Deja claro que la causa raíz está en el diseño de la base de datos del servidor, no en el uso.',
        },
        {
          id: 'redundancia',
          label: 'la redundancia de datos',
          terms: ['redundan', 'duplicad', 'repite', 'repetid', 'misma informacion'],
          praise: 'Reconoces la redundancia: la misma información copiada en varios lugares.',
          gap: 'Falta señalar la redundancia: nombres copiados en varias tablas que terminan contradiciéndose.',
        },
        {
          id: 'integridad',
          label: 'la pérdida de integridad o consistencia',
          terms: ['integridad', 'consisten', 'inconsisten', 'no cuadra', 'no coincide', 'contradic'],
          praise: 'Conectas las copias repetidas con la pérdida de integridad/consistencia.',
          gap: 'Explica el efecto: los datos pierden consistencia y los reportes dejan de cuadrar.',
        },
      ],
      contradictions: [
        {
          terms: ['no hay problema', 'todo esta bien', 'funciona correctamente', 'no hay errores'],
          message: 'Afirmas que no hay problema, pero el caso describe redundancia e inconsistencias reales en la base de datos.',
        },
      ],
      recommendation:
        'Resume el problema en una frase: el diseño de la base de datos genera redundancia e inconsistencias que vuelven poco confiable el registro de producción lechera.',
      guide:
        'El problema principal es el mal diseño de la base de datos del servidor del módulo lechero. ' +
        'Las tablas guardan información redundante (nombres de productor, animal y finca repetidos en ' +
        'varias tablas) en lugar de relacionarse con llaves. Eso provoca inconsistencias: el mismo ' +
        'productor aparece escrito de formas distintas y los litros se guardan con formatos diferentes. ' +
        'La consecuencia es la pérdida de integridad de los datos y reportes de producción que no son confiables.',
    },
    {
      id: 'q2-errores-tablas',
      prompt: '¿Qué errores pueden observarse en la estructura de las tablas?',
      criteria: [
        'Detecta el uso de nombres en lugar de llaves foráneas.',
        'Identifica tipos de datos/formatos inconsistentes (litros y fechas).',
        'Señala ausencia o debilidad de claves primarias y datos sensibles expuestos.',
      ],
      keywords: [['clave foránea', 'llave foranea'], ['clave primaria', 'llave primaria'], 'redundancia', ['tipo de dato', 'formato'], 'normalizacion'],
      concepts: [
        {
          id: 'falta-fk',
          label: 'el uso de nombres en vez de llaves foráneas',
          terms: ['clave foranea', 'llave foranea', 'foreign key', 'fk', 'relacionar las tablas', 'en vez de relacionar', 'nombre del productor'],
          praise: 'Detectas que las tablas copian nombres en lugar de usar llaves foráneas.',
          gap: 'Señala que se guardan nombres (productor, finca, animal) en vez de llaves foráneas a la tabla origen.',
        },
        {
          id: 'pk-debil',
          label: 'la falta de una clave primaria confiable',
          terms: ['clave primaria', 'llave primaria', 'primary key', 'pk', 'identificador unico', 'id repetido', 'id duplicado'],
          praise: 'Notas el problema de identidad: hay identificadores repetidos o sin unicidad garantizada.',
          gap: 'Menciona que falta una clave primaria confiable: por ejemplo id_productor P02 aparece duplicado.',
        },
        {
          id: 'tipos',
          label: 'los tipos de datos y formatos inconsistentes',
          terms: ['tipo de dato', 'formato', 'numerico', 'texto', 'fecha', 'coma', 'punto', 'litros como texto'],
          praise: 'Identificas formatos inconsistentes: litros como texto y fechas en formatos distintos.',
          gap: 'Indica los formatos mezclados: litros con coma/punto y fechas en varios formatos deberían ser tipos numéricos y de fecha.',
        },
        {
          id: 'seguridad-tabla',
          label: 'las contraseñas en texto plano',
          terms: ['texto plano', 'contrasena', 'password', 'hash', 'sin cifrar', 'sin encriptar'],
          praise: 'Observas que las contraseñas están en texto plano, un riesgo de seguridad.',
          gap: 'Agrega que las contraseñas se guardan en texto plano y el rol es texto libre, lo cual es inseguro.',
        },
      ],
      contradictions: [
        {
          terms: ['las tablas estan bien', 'no hay errores', 'estructura correcta'],
          message: 'Dices que la estructura está bien, pero las tablas repiten nombres en vez de usar llaves y mezclan formatos de datos.',
        },
      ],
      recommendation:
        'Enumera al menos tres errores concretos: nombres en lugar de llaves foráneas, formatos inconsistentes (litros/fechas) y contraseñas en texto plano.',
      guide:
        'Los errores son: se usan nombres (del productor, la finca, el animal) en vez de llaves foráneas, ' +
        'lo que genera redundancia; no hay claves primarias confiables (id_productor P02 aparece duplicado); ' +
        'los tipos de datos son inconsistentes (litros guardados como texto con coma o punto, e incluso un ' +
        'valor negativo; fechas en formatos distintos); y las contraseñas están en texto plano con el rol ' +
        'como texto libre. En conjunto, las tablas no están normalizadas.',
    },
    {
      id: 'q3-riesgos',
      prompt: '¿Qué riesgos existen si la información de producción lechera se almacena incorrectamente?',
      criteria: [
        'Conecta los datos incorrectos con decisiones equivocadas (pagos, salud animal).',
        'Menciona pérdida de trazabilidad o reportes erróneos.',
        'Reconoce el impacto sobre productores y usuarios del sistema.',
      ],
      keywords: [['pago', 'pagar'], 'reportes', 'trazabilidad', ['inconsistencia', 'datos erroneos'], 'decisiones'],
      concepts: [
        {
          id: 'decisiones',
          label: 'las decisiones erróneas (pagos y reportes)',
          terms: ['pago', 'pagar', 'cobro', 'reporte', 'decision', 'estadistic', 'proyecc'],
          praise: 'Conectas los datos incorrectos con pagos y reportes equivocados.',
          gap: 'Explica que litros mal guardados llevan a pagos y reportes de producción equivocados.',
        },
        {
          id: 'trazabilidad',
          label: 'la pérdida de trazabilidad',
          terms: ['trazabilidad', 'historial', 'seguimiento', 'auditoria', 'rastrear'],
          praise: 'Mencionas la pérdida de trazabilidad: ya no se puede seguir el origen del dato.',
          gap: 'Agrega el riesgo de perder trazabilidad: no poder saber qué animal o productor generó cada registro.',
        },
        {
          id: 'salud-impacto',
          label: 'el impacto en la salud del hato o en los usuarios',
          terms: ['salud', 'hato', 'animal', 'productor', 'usuario', 'afecta', 'confianza'],
          praise: 'Reconoces el impacto humano/animal: afecta a productores y a la vigilancia del hato.',
          gap: 'Indica el impacto real: decisiones de salud animal y de pago a productores basadas en datos falsos.',
        },
      ],
      contradictions: [
        {
          terms: ['no pasa nada', 'no afecta', 'es irrelevante'],
          message: 'Restas importancia al riesgo, pero almacenar mal la producción afecta pagos, reportes y la salud del hato.',
        },
      ],
      recommendation:
        'Conecta el almacenamiento incorrecto con consecuencias concretas: pagos mal calculados al productor, reportes erróneos y pérdida de trazabilidad de la producción.',
      guide:
        'Si la producción se almacena mal, los litros mal registrados llevan a pagos incorrectos a los ' +
        'productores y a reportes y estadísticas erróneas. Se pierde la trazabilidad: no se sabe con certeza ' +
        'qué animal o productor generó cada registro. Además, las decisiones de salud del hato se toman con ' +
        'datos poco confiables, lo que afecta directamente a los usuarios del sistema y a la cooperativa.',
    },
    {
      id: 'q4-mejoras',
      prompt: '¿Qué cambios harías para mejorar la base de datos?',
      criteria: [
        'Propone normalizar y usar llaves primarias/foráneas.',
        'Corrige tipos de datos y agrega validaciones/restricciones.',
        'Mejora la seguridad de las credenciales.',
      ],
      keywords: ['normalizar', ['llave foránea', 'clave foranea'], 'validar', 'hash', ['tipo de dato', 'numerico']],
      concepts: [
        {
          id: 'normalizar',
          label: 'normalizar usando llaves primarias y foráneas',
          terms: ['normaliz', 'tercera forma', '3fn', 'separar tablas', 'clave foranea', 'llave foranea', 'clave primaria', 'relacionar'],
          praise: 'Propones normalizar y relacionar las tablas con llaves primarias/foráneas.',
          gap: 'Propón normalizar: reemplazar los nombres repetidos por llaves foráneas a las tablas origen.',
        },
        {
          id: 'tipos-correctos',
          label: 'definir tipos de datos correctos',
          terms: ['tipo de dato', 'numerico', 'decimal', 'fecha', 'date', 'formato unico', 'estandarizar'],
          praise: 'Corriges los tipos: litros como decimal y fechas como tipo fecha.',
          gap: 'Indica que litros debe ser numérico/decimal y la fecha tipo fecha, con un formato único.',
        },
        {
          id: 'validacion',
          label: 'agregar validaciones y restricciones',
          terms: ['validar', 'restriccion', 'constraint', 'not null', 'unique', 'rango', 'no negativo'],
          praise: 'Agregas validaciones/restricciones (UNIQUE, NOT NULL, rangos) para evitar datos inválidos.',
          gap: 'Suma restricciones: UNIQUE en claves, NOT NULL y rangos (litros no negativos).',
        },
        {
          id: 'seguridad-mejora',
          label: 'asegurar las credenciales (hash de contraseñas)',
          terms: ['hash', 'cifrar', 'encriptar', 'no texto plano', 'catalogo de roles', 'seguridad'],
          praise: 'Mejoras la seguridad: hash de contraseñas y catálogo de roles.',
          gap: 'Incluye seguridad: guardar un hash de la contraseña y usar un catálogo de roles, no texto libre.',
        },
      ],
      contradictions: [
        {
          terms: ['comprar mas servidores', 'mas ram', 'mas hardware', 'aumentar el disco'],
          message: 'Proponer más hardware no resuelve el problema: la causa es el diseño de las tablas, no la capacidad del servidor.',
        },
      ],
      recommendation:
        'Propón cambios concretos: normalizar con llaves foráneas, definir tipos correctos (litros decimal, fecha tipo fecha), validar con restricciones y cifrar las contraseñas.',
      guide:
        'Los cambios clave son: normalizar la base de datos para eliminar la redundancia, reemplazando los ' +
        'nombres repetidos por llaves foráneas a Productores, Fincas y Animales; definir tipos de datos ' +
        'correctos (litros como decimal, fecha como tipo fecha) con un formato único; agregar restricciones ' +
        'de validación (UNIQUE en las claves, NOT NULL, rangos para no aceptar litros negativos); y mejorar la ' +
        'seguridad guardando un hash de las contraseñas y usando un catálogo controlado de roles.',
    },
    {
      id: 'q5-relacion-modulo',
      prompt: '¿Cómo se relaciona este problema con el funcionamiento general del módulo lechero?',
      criteria: [
        'Explica que el módulo depende de la base de datos para registrar/consultar/actualizar.',
        'Conecta la calidad de los datos con la confiabilidad del módulo.',
        'Reconoce que un mal diseño compromete todo el flujo del módulo.',
      ],
      keywords: ['flujo', ['registro', 'registrar'], ['consulta', 'consultar'], 'reportes', ['confiable', 'confiabilidad']],
      concepts: [
        {
          id: 'dependencia',
          label: 'la dependencia del módulo respecto a la base de datos',
          terms: ['depende', 'se basa', 'nucleo', 'central', 'fundamento', 'todo el modulo'],
          praise: 'Dejas claro que el módulo lechero depende por completo de esta base de datos.',
          gap: 'Explica que el módulo lechero se apoya en esta base de datos para todo su funcionamiento.',
        },
        {
          id: 'flujo',
          label: 'el flujo de registrar, consultar y actualizar',
          terms: ['registr', 'consult', 'actualiz', 'flujo', 'captura', 'reporte', 'operacion'],
          praise: 'Conectas el problema con el flujo de registrar, consultar y actualizar la producción.',
          gap: 'Relaciona el problema con las operaciones del módulo: registrar, consultar y actualizar producción.',
        },
        {
          id: 'calidad-datos',
          label: 'la confiabilidad de los datos del módulo',
          terms: ['confiable', 'confiabilidad', 'calidad de datos', 'exactitud', 'datos correctos', 'informacion confiable'],
          praise: 'Ligas la calidad de los datos con la confiabilidad del módulo completo.',
          gap: 'Cierra mostrando que si la estructura falla, todo el módulo entrega información poco confiable.',
        },
      ],
      contradictions: [
        {
          terms: ['no se relaciona', 'no tiene relacion', 'es independiente'],
          message: 'Dices que no se relaciona, pero el módulo lechero funciona precisamente leyendo y escribiendo en esta base de datos.',
        },
      ],
      recommendation:
        'Explica que el módulo lechero registra, consulta y actualiza la producción a través de esta base de datos: si su estructura falla, todo el flujo del módulo entrega información poco confiable.',
      guide:
        'El módulo lechero funciona registrando, consultando y actualizando la producción en esta base de ' +
        'datos; depende por completo de ella. Si la estructura de las tablas está mal diseñada, cada operación ' +
        'del módulo (capturar la producción diaria, generar reportes, calcular pagos) hereda la redundancia y ' +
        'las inconsistencias. Por eso un problema de diseño en la base de datos compromete la confiabilidad de ' +
        'todo el módulo lechero, no solo de una consulta aislada.',
    },
  ],
};

export const caseModules = [
  {
    id: 'lechero',
    name: 'Módulo lechero',
    description:
      'Casos prácticos del módulo lechero: registro de producción, base de datos y decisiones de la cooperativa.',
    cases: [databaseServerLechero],
  },
];

// Acceso plano a todos los casos por si se necesita en el futuro.
export const allCases = caseModules.flatMap((module) => module.cases);
