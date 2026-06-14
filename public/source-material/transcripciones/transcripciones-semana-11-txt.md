# Semana 11

### Orador 2 · `0:02 - 0:48`

listo estamos grabando y vamos a ver cómo se ve me dicen cómo se ve ahí, hola hola me dicen cómo se ve, ¿se logra leer el texto?

### Orador 1 · `0:51 - 2:16`

no profe, no se logra leer legalmente ok ok, vamos a ver que, creo que es el marcador, vamos a trabajar con este otro y es que en esta pizarra la luz está demasiado cerca de la pizarra, me cambiaron de aula hoy la luz está muy cerca de la pizarra entonces refleja mucho vamos a ver cómo están estos marcadores negros este sí está, este sí está bien, ahora sí lo leemos ¿se lee o no? no, es que en realidad está muy largo, yo siento que está muy largo la cámara de la pizarra, no se ve qué cosa más extraña porque en realidad de la pizarra está digamos a la misma distancia que en el otro aula el problema es la luz, si trato de escribir más acá más al centro me dicen si se ve mejor, ¿aquí se ve mejor? ahí dice archivos sí, entonces se ven calaveras y casi no logran ver

### Orador 9 · `2:17 - 2:19`

sí profe, tal vez más grande

### Orador 1 · `2:21 - 3:09`

sí, no definitivamente el problema, es que miran que cerca está la luz de esta pizarra de hecho aquí de frente encandila un montón, o sea se ven como cuando uno inclina mucho el monitor que no logra leer, así se ve de esta pizarra vamos a ver si yo le pongo, voy a ver si pongo la compu en una silla para que quede más frontal tal vez esto va a ser un atentado porque la silla apenas apenas cabe en el sobre de la mesa cualquier movimiento se va a ir al sobre de la compu, pero vamos a ver cómo queda

### Orador 2 · `3:10 - 3:12`

profe dice ya a ver si lo puede aceptar

### Orador 1 · `3:12 - 3:38`

ok, ya vamos, vamos a ver si logramos matarle un toquecito el toque de la luz ahí ¿cómo se ve ahí?

### Orador 9 · `3:40 - 3:43`

ahí se la juega, ahí dice hola y no me equivoco

### Orador 1 · `3:43 - 3:46`

y hasta acá la va a ver a la vara entonces

### Orador 10 · `3:47 - 3:49`

hasta que le brille a la frente a usted

### Orador 1 · `3:49 - 4:00`

hijo de pucha, si es que esa es la desgracia que tiene, tiene un hay una luz aquí que está muy muy cerca de esta pizarra nada, no, no, no mejora

### Orador 9 · `4:01 - 4:02`

ahí se la juega yo creo

### Orador 2 · `4:02 - 4:12`

ok, todavía, ok entonces vamos a iniciar con el capítulo de archivos

### Orador 1 · `4:14 - 4:52`

y los archivos tienen tres funciones básicas la primera, la primera función importante es perpetuar la información ok, ¿qué significa que la información se perpetúe?

bueno, eso quiere decir que, recordemos que cuando teníamos, cuando teníamos monoprogramación

### Orador 2 · `4:56 - 4:58`

dice que Ander se lo puede aceptar también

### Orador 1 · `5:07 - 13:59`

cuando teníamos monoprogramación en realidad teníamos teníamos el BIOS, teníamos el sistema operativo y teníamos un programa de usuario ok la salida, la salida de la ejecución de esa monoprogramación normalmente tenía que ser atendida por el usuario es decir, dependiendo la frecuencia de encendido y apagado de los bombillos así se determinaba si era un bit 0 o era un 1 y entonces de acuerdo a esa codificación se lograba escribir un resultado pero si se necesitaba ejecutar de nuevo exactamente el mismo proceso pues eso implicaba que otra vez había que hacer la anotación es decir, no existía la posibilidad de poder escribir el resultado del procesamiento que se llevaba a cabo por eso la primera necesidad de establecer un sistema de archivos es perpetuar la información es decir, que al finalizar un proceso esa información puede estar concretada en algún lugar y que posteriormente pueda ser utilizada nuevamente ese es el concepto de perpetuación de la información el otro concepto que pretende resolver los sistemas de archivos es que nos permita almacenar un volumen considerable es decir, que ese repositorio realmente nos permita no solamente guardar la ejecución al finalizar un proceso sino que la ejecución al finalizar varios procesos y pues con el boom de las aplicaciones bancarias que fueron las primeras que a nivel comercial requirieron la demanda considerable del ordenador entonces esto hizo que cada vez íbamos a tener muchos archivos y que requeríamos un repositorio considerable y ese repositorio ya vimos que a nivel lógico generó las bases de datos y a nivel físico generó sobre todo el almacenamiento entonces a nivel lógico ese gran volumen de información que se generaba terminó en proveer una metodología de organización de la información que llamamos las bases de datos pero a nivel de hardware requerimos de un dispositivo a nivel de almacenamiento secundario que a todos los usos es el que llamamos el sistema SCSI es decir, no pensamos en almacenamiento secundario como un disquito duro sino más bien como un dispositivo con alto desempeño y altas capacidades de proveer redundancia y con una tasa de respuesta muy elevada entonces ese es el criterio asociado a la necesidad de que los archivos permitan un almacenamiento grande es decir, no solamente está a la capacidad estructural de él como archivo sino también está asociado a la posibilidad de un dispositivo que provea esas capacidades y el otro criterio, el tercero que ese vino a surgir como respuesta también a esas necesidades si ya estamos hablando ya no de un archivo sino que estamos hablando de una base de datos que en realidad no es otra cosa más que una colección de archivos pues entonces necesitamos otro modelo de administración y ese modelo de administración debería permitir la posibilidad de que ese acceso a ese archivo tenga una naturaleza compartida ¿Qué implica que un archivo tenga la naturaleza de que pueda ser compartido?

bueno, aquí implica dos cosas primero el perfil del usuario el perfil del usuario y por supuesto que las operaciones que ese usuario es capaz de llevar a cabo y aquí sabemos que tenemos lectura, escritura y ejecución y en cuanto a los perfiles de usuario pues normalmente tenemos ¿qué calidad? en orden ¿te prometieron que estaba ocupada esa ola? ¿que nos mandaron para esta?

era hacer pleito para acomodar para no que esta luz está demasiado cerca aquí entonces encandila todo y casi no se ve sí, por eso, pero ¿sí? sí, claro ok bueno, entonces cuando hablamos de los perfiles de usuario tenemos que tenemos los usuarios que se puedan definir lo que hay que tener claro es las opciones que ese usuario puede llevar a cabo sobre esos archivos es decir cuando hablamos de acceso compartido tenemos que establecer perfiles de usuario y tenemos que establecer ¿cuáles son las operaciones que cada uno de esos perfiles de usuario puede llevar a cabo sobre ellas? entendiendo que aquí tenemos pues simplemente la lectura o la lectura o consulta tenemos la escritura o actualización también, cualquiera de los dos ok, escritura, actualización creación ok y tenemos el otro perfil que lo que nos permite es poder ejecutar ok cuando hablamos esto no está directamente ligado con cada uno de ellos, ¿verdad? estamos diciendo que esos son los perfiles y que esas son las operaciones posibles de llevar a cabo por cada uno de esos de esos usuarios, ok hasta ahí estamos claros ¿hay alguna duda?

¿no?

### Orador 4 · `13:59 - 14:04`

¿por qué ese famoso no es el que le da privilegio a una computadora?

### Orador 1 · `14:05 - 15:04`

es que yo lo quise poner, o sea en realidad, estos perfiles es como usted le quiera poner, ¿verdad? normalmente la gente, digamos cuando usted crea una base de datos hay como 5 perfiles definidos si estamos hablando de del lado del backend, también hay varios perfiles de usuario si hablamos a nivel de un sistema distribuido, hay otros perfiles de usuario ¿verdad? yo simplemente lo que quise designar, bueno, es que hay como un usuario que es el encargado del sistema de información luego están los usuarios que crean las aplicaciones y que pueden bajar una base de datos, subir una base de datos, bajar una tabla hacer una modificación de una tabla, etc.

y luego tenemos los usuarios los perfiles que llamamos client que solamente son los que hacen consultas, ¿verdad? únicamente ¿ok? eso no tiene nada que ver con que esos sean exactamente los nombres de los usuarios, ¿verdad?

### Orador 4 · `15:05 - 15:16`

otra consulta, entonces si yo, como estudiante vengo y creo un programa y utilizo MySQL como base de datos, yo en este caso ¿qué tipo de usuario soy?

### Orador 1 · `15:21 - 15:23`

bueno, si usted crea la base de datos

### Orador 4 · `15:23 - 15:27`

si, yo creé la tabla y, pero estoy diciendo un programa

### Orador 1 · `15:27 - 17:25`

ok, más bien muchas gracias por la pregunta, porque aquí tenemos que aclarar dos cosas, uno es uno es, digamos, este modelo está en nomenclatura a nivel de una aplicación como un sistema gestor de bases de datos, MySQL Postgres, SQL Service, Oracle Informix, Cypress etcétera, es decir usted me está hablando ya de perfiles pero no de el sistema de administración de archivos, sino de perfiles de una aplicación particular, ¿ok? entonces ahí es donde tenemos que llevar a cabo esa separación digamos, no podemos mezclar y pensar que, por ejemplo que un usuario administrador en una base de datos tiene la posibilidad de acceder con esos privilegios al sistema de archivos, no, funciona completamente diferente, o sea, el sistema de archivos es una cosa muy independiente de las aplicaciones, ¿ok? un sistema gestor de bases de datos lo que posibilita es las operaciones que sobre esos archivos se lleven desde una aplicación, ¿ok?

mientras que a nivel de sistema de archivos la configuración, por ejemplo vamos a ver, hay un servicio de Linux que se llama Zamba, que es precisamente para compartir archivos, ¿verdad? ahí es donde digamos, donde se definen los perfiles los perfiles, no que desde la aplicación, sino los perfiles que desde el sistema de archivos pueden ser accesados, entonces por ejemplo, si usted tiene una intranet en una institución o en una empresa, entonces usted define a nivel del sistema de archivos, cuáles son las carpetas compartidas y cuáles son los accesos sobre la información es decir, sobre los archivos que están contenidos en esas carpetas, ¿ok? eso no tiene nada que ver con cuál es la aplicación que está accesando a esos archivos, no sé si les queda claro la diferencia

### Orador 4 · `17:27 - 17:32`

ok, perfecto entonces en este caso ahorita estamos hablando de que son varios los que acceden

### Orador 1 · `17:32 - 18:21`

sí, claro, y sobre todo, verdad, hacer la separación digamos que una cosa es crear perfiles a nivel de una aplicación como un sistema de base de datos y otra cosa es crear perfiles a nivel de del sistema de archivos ok vamos a ver les voy a explicar esto ya se me iluminó un ejemplo que les pueda aclarar digamos, en una empresa en una empresa hay digamos, hay una una tabla que utiliza vamos a ver es una tabla que se llama activos, ok esa tabla activos, está hecho fue creada en una aplicación

### Orador 2 · `18:23 - 18:31`

en una base de datos CIDES

### Orador 1 · `18:31 - 23:09`

ok esta es la aplicación para administrar archivos para administrar activos activos de la institución o de la empresa ok, pero tenemos que hay un Julano, hay un Julano que se encarga de vamos a ver, se encarga de la bodega una bodega de recuperación que es una bodega de recuperación en una institución es un lugar donde va a dar todo lo que estorba o que alguien cree que ya no funciona, entonces va a dar ahí ahí van a dar escritorios, computadoras este abanicos, de todo va a dar ahí y en esa bodega de recuperación se hace un procedimiento a través del cual se hace finalmente el descarte ¿Qué es el descarte? Bueno, cuando se determina técnicamente que ese equipo ya está para regalar, para donar o para votar ok, entonces este Julano que está allá en esa bodega de recuperación no tiene acceso a este sistema que es el que tiene el encargado de compras ¿Por qué? Porque el Julano que lleva a cabo las compras es quien mantiene este inventario activo ok, es decir, cuando se compra cuando se compra un vehículo entonces el encargado de inventario viene y actualiza y ese activo ya está registrado ok, cuando se lleva a cabo la operación de descarte de ese vehículo entonces pasa a esa bodega de recuperación se le aplica un procedimiento y técnicamente se determina que efectivamente el activo ya está o para donar o para regalar o hay que dotarlo porque ya no sirve o incluso en algunos casos para subastar ok, pero resulta que este Julano que está en la bodega de recuperación tiene un módulo que está creado en en Delphi ok, Delphi es un es un lenguaje de digamos, es un framework de desarrollo y utiliza un modelo de bases de datos propio que se llama Paradox ok, ese lenguaje ese lenguaje es un sistema store de bases de datos es propio y específico para Delphi ok, pero entonces ¿qué es lo que hacemos? ¿para qué vamos a tener? no le vamos no vamos a alimentar a Paradox con otra tabla que diga activos ¿no?

¿qué es lo que hacemos? que simplemente a nivel de sistema de archivos yo vengo y configuro para que se le permita el acceso a estos Julanos a esta tabla que es de otra aplicación diferente con ciertos privilegios de operaciones sobre ella, ok, es decir si es solamente lectura, cosa que no, porque en algún momento tiene que modificar un valor, una variable del campo activo que diga estado, si está si está activo si está en descarte si fue donado si fue dotado, si fue subastado si fue regalado, etc. entonces tenemos un archivo ¿por qué?

porque finalmente esto que aunque nosotros lo imaginemos ¿verdad? como una tabla y inmediatamente lo asociamos a un sistema store de bases de datos pues para efectos nuestros como recurso esto no es otra cosa más que un archivo ¿ok? que tiene diferentes perfiles de acceso ¿ok?

un perfil de acceso para un usuario, otro perfil de acceso para otro usuario que no tiene nada que ver con el sistema store de bases de datos que esté llevando a cabo operaciones sobre él ahora sí, ¿estamos claros? estamos claros ok, listo y no me sirven los marcadores corrientes entonces hay que coger estos marcadores negros y mancha un...

### Orador 4 · `23:09 - 23:13`

de hecho yo vi como que no le borra y digo yo tendrá que estudiar con un marcador permanente

### Orador 1 · `23:14 - 23:21`

no hombre es que los marcadores que uso corrientes los azules y los rojos no se ve absolutamente nada por esa luz aquí

### Orador 4 · `23:23 - 23:26`

de hecho yo creo que como que sea mejor no sé si fue que cambió la cámara

### Orador 1 · `23:27 - 23:41`

no, no, no, es que tú hay que encaramar la compu en una silla aquí todo para que le mate un poquito el brillo de de este de este fluorescente que está aquí ya me dan ganas de pegarle una pedrada más bien

### Orador 2 · `23:56 - 23:56`

bueno

### Orador 1 · `25:15 - 26:21`

ok, la primera categorización que tenemos que hacer sobre el sistema de archivos es por tipo, los podemos clasificar de tres maneras, por su tipo por su estructura o por su acceso la primera categorización es por el tipo y aquí tenemos básicamente dos tipos el tipo byte y el tipo registro ok vamos a ver si pensamos en un archivo ok vamos a ver, mencióneme el tipo de archivos con los que con los que frecuentemente trabajan, un archivo de calidad ¿cuál?

un .doc ok un documento ok usted diría un .odt ¿cierto? si profe gracias, pura vida un archivo ¿ah?

### Orador 2 · `26:22 - 26:24`

.txt ¿es lo mismo?

### Orador 1 · `26:27 - 26:29`

¿ah? ¿es lo mismo?

### Orador 2 · `26:29 - 26:49`

un archivo documento de texto .file un .g .c profe, tal vez un xml ¿no?

### Orador 1 · `26:51 - 26:59`

¿qué más?

### Orador 4 · `27:00 - 27:03`

un .bin ¿un .qué?

### Orador 1 · `27:03 - 27:24`

bin ok, compilado ¿qué más? un html ¿otros que sean diferentes?

### Orador 2 · `27:28 - 27:30`

un .mc ¿perdón?

### Orador 5 · `27:31 - 27:48`

un .ovj un .ovj mp4 ¿qué más?

### Orador 2 · `27:49 - 28:28`

png un .rar ¿un qué? un .rar un .rar ok un .pass, profe, también ¿un .qué?

### Orador 1 · `28:31 - 29:19`

un .pass un .pass ajá ¿qué es un archivo .pass? de pascal, creo, algo así ¿de pascal? que toque ¿este programa es de pascal, tal vez?

no, pero ahí lo vi en el libro cuando estaba leyendo en la lectura, sí eh un excelente lenguaje de programación es de pascal de hecho, Delphi viene digamos, es la la versión gráfica de pascal, pero es muy muy muy bueno, ¿verdad? digamos que pascal y c están muy muy parecidos, lo que pasa es que c se orientó más a la parte de administración de de dispositivos y por eso es que se hizo como más popular, ¿verdad?

### Orador 6 · `29:20 - 29:25`

ok, con eso está bueno una pregunta, a mp4 ¿por qué le puso audio?

### Orador 1 · `29:27 - 30:06`

bueno, es un es un formato ahí comprimido, ¿verdad? de audio y video sí sí, sí, no, pero es un comprimido ahí, ok bueno, si pensamos digamos, en estos tipos de de archivos vamos a irlos categorizando ok, por ejemplo, el odt ¿cómo creen ustedes que es? ¿es de tipo byte o es de tipo registro?

byte byte byte, ok ¿el código fuente? ¿de c?

### Orador 2 · `30:10 - 30:17`

registro ¿ah? registro ¿el xml?

### Orador 7 · `30:24 - 30:26`

aplicando la teorología, registro ¿perdón?

### Orador 1 · `30:27 - 31:06`

registro ¿un compilado? ¿.bin? no sé, yo maté a ver cada uno se mandó con esos archivos, a ver, cada uno el papá de cada chiquito de esos ¿quién dio un archivo .bin?

¿ah? ¿el byte? ¿el html?

¿el obj? ¿el mp4?

### Orador 2 · `31:09 - 31:21`

¿el png? ¿el rar? ¿el avi?

¿el pass?

### Orador 1 · `31:27 - 31:46`

¿cuál de esos archivos corresponde a una a una tabla de una base de datos? ¿qué extensión son las tablas de las bases de datos? ¿un dbx, por ejemplo, en podgres?

### Orador 4 · `31:57 - 32:00`

perdón, ¿cuál era la pregunta? ¿cuál de esos corresponde a base de datos?

### Orador 1 · `32:01 - 32:19`

no sí, sí, cuál de esos corresponde, por ejemplo, a un archivo para una base de datos, ¿verdad? en realidad los .dbx que son las estructuras del podgres ¿ok? podría ser un ejemplo ¿este tipo de archivo qué será?

¿esa tabla?

### Orador 4 · `32:27 - 32:32`

puede ser de registro ¿puede ser de registro?

### Orador 1 · `32:33 - 32:38`

¿puede ser? ok, vamos a ver ¿qué es lo que determina que un archivo sea tipo byte o tipo registro?

### Orador 4 · `32:40 - 33:09`

no sé, yo los asocio con que por lo menos yo los asocio así y de que los de registro son los que son como programación no sé que tienen que ver con cómo se encuentra organizada la información es decir ¿qué estructura creen ustedes que tenga un archivo, un código fuente de c?

### Orador 1 · `33:11 - 33:27`

¿qué estructura de archivo tiene? ¿qué estructura de archivo tendría? ¿cómo se estructura un código fuente ya ustedes los han hecho, ¿cómo está estructurado?

### Orador 4 · `33:29 - 33:36`

clases, métodos y atributos no es de secuencia ¿ah?

### Orador 1 · `33:37 - 34:44`

secuencia no es de secuencia, en realidad es lo que tenemos en cada uno de los archivos independientemente de la extensión que tengan si es una clase, si es un fuente, si es una librería en realidad lo que tenemos son una secuencia de instrucciones ¿verdad? pero esa secuencia de instrucciones en tiempo de ejecución no hay posibilidad de ir a una línea específica a excepción de que yo tenga por ejemplo procedimientos o funciones o cosas de ese tipo ¿verdad? pero en realidad cuando hablamos de la organización de la información es decir, ese archivo ¿cómo está organizado?

es lo que nos interesa por ejemplo ¿cómo se ordena un archivo? ¿cómo se imaginan ustedes que estaría ordenado, estructurado ese archivo? que se llama tvactivo.dbx ¿cómo estaría estructurado?

### Orador 4 · `34:48 - 34:50`

perdón, una pregunta, ¿qué tipos de estructuras hay?

### Orador 1 · `34:51 - 35:42`

además de secuencial no, no estamos hablando todavía de estructuras estamos hablando de tipo de archivo ¿ok? y lo que decimos es que determinamos el tipo del archivo por cómo se encuentra organizada la información entonces mi pregunta es ¿cómo está organizada la información de este archivo? que se llama tvactivo.dbx que corresponde a una tabla ¿cómo está organizada?

¿saben? ajá, y que determina cada fila y que determina cada columna que determina ¿qué determina cada fila o cada columna de ese archivo?

### Orador 8 · `35:44 - 35:45`

el tipo de datos, ¿no bro?

### Orador 1 · `35:46 - 36:12`

bueno ¿y cuál dato? primero tengo que definir el dato después del tipo ¿ese es el tipo de dato? lo primero es ¿cómo está estructurado?

está estructurado en un id activo ¿un nombre?

### Orador 7 · `36:16 - 36:20`

nombre activo ¿un activo para saber si es activo?

### Orador 2 · `36:21 - 36:46`

dijo Juliano una placa activo una descripción de activo y un estado de activo ¿ok?

### Orador 1 · `36:49 - 42:18`

y luego ¿qué tenemos? el activo 001 que se llama silla que tiene la placa 2222 que la descripción es silla para comedor y que está en un estado 1 ¿ok? y luego el siguiente registro, el siguiente, el siguiente, el siguiente, el siguiente ¿ok?

este archivo este archivo que corresponde a esta tabla es un archivo que se encuentra organizado en registros es decir, está organizado tiene una estructura el registro el registro el activo con id 1800 tiene exactamente los mismos campos que el activo con id número 1 ¿ok? es decir la estructura es consistente la estructura está completamente equiparada en cada uno de los registros que yo tengo entonces cuando la información se encuentra estructurada y esa estructura se repite de manera idéntica en todo el archivo entonces lo que decimos es que es un archivo que es de tipo registro ¿ok? entonces vamos a repasar un archivo de texto tiene esa estructura, se repite ¿no?

¿verdad? ¿no? es una secuencia es una secuencia ¿cómo hace usted para ir?

¿cómo hace usted para ubicar un párrafo? en un libro en un libro en formato digital bueno, tiene que tiene que ir exclusivamente a donde está ese párrafo ¿ok? es decir, no hay ningún ningún enlace directo que lo lleve usted a esa porción del código ¿ok?

vamos con un código fuente en C ¿cómo será? ¿será registro o será byte? pues definitivamente no es registro ¿verdad?

porque no está estructurado es de tipo byte todos los códigos fuentes serán de tipo byte un compilado pues con más razón, perdón con más razón será tipo byte un obj byte un mp3 bueno, un mp3 estamos de acuerdo que será de naturaleza byte y todo lo que tiene que ver con con representación de imagen tiene que ver precisamente con una estructura tipo byte los raros que sean contenedores que son tipo byte los clips de video tipo byte los .pass .byte perdón, son de tipo byte y por supuesto que las todo lo que tenga que ver con con archivos para administrar las bases de datos son de tipo registro ¿ok? ahora anteriormente no siempre todo estuvo estructurado de esta manera es decir, este mismo archivo yo puedo de igual manera administrarlo como si fuera una estructura tipo byte ¿y qué tendría que hacer? simplemente empezar a poner 001, silla, 222, silla comedor coma 1, coma y los siguientes registros todos pegados ahí, ¿ok?

en cuyo caso si yo ando buscando el activo el activo 224 ¿qué tendría que hacer? abrir el archivo y empezar a recorrerlo hasta ubicar el número 224 y cuando ubico el número 224 entonces cuento 1, 2, 3, 4 campos y son los que traigo, son los que recupero para una operación de lectura, ahora imagínense que si tengo que modificar otra vez de nuevo tendría que ir a recorrer el archivo y ubicar y escribir y decirle en el tercer campo después de la coma sustituya el texto que está por este otro, ¿ok? entonces en realidad eso es sumamente complejo por eso es que estos archivos al final fueron convertidos en archivos tipo registro, ¿por qué?

porque la forma en como yo voy al registro 224 en una estructura tipo registro pues implica únicamente buscar por la llave y ya tengo toda la tupla de ese registro que corresponde a una tabla en específico, ¿ok? ¿queda clara la diferencia entre una estructura tipo OVAI y una estructura tipo registro?

### Orador 2 · `42:19 - 42:20`

¿hay alguna duda?

### Orador 1 · `42:24 - 43:00`

¿hay alguna duda? bueno nada más hay una, me imagino que ahí también irían las tablas de manera bueno, o sea digamos las estructuras tipo registro son todas aquellas que contengan información que está digamos que tenga un encabezado y que ese encabezado sea consistente para todos los registros ¿ok? y pues que me permita poder acceder a un registro de toda la tabla de manera muy rápida y muy puntual ¿sí?

### Orador 4 · `43:02 - 43:13`

Existe otro tipo bueno no además de las tablas de bases de datos ¿otro ejemplo de registro?

### Orador 1 · `43:17 - 44:38`

¿un tipo de archivo que sea de tipo registro que no sea una tabla de bases de datos? no, en realidad no, en realidad no todos corresponden a archivos que tienen que ver con sistemas de bases de datos ¿ok? fuera de ahí no ¿verdad?

¿alguien? ¿un tipo listo podría decir? el libro de Harry Potter la última versión que salió yo puedo acceder al capítulo uno yendo al índice ¿verdad?

la verdad es que eso no tiene nada que ver con que el archivo esté estructurado de manera ¿verdad? digamos que mantenga esta estructura de registro, no tiene nada que ver ¿verdad? hasta ahora los únicos archivos como registros son todos aquellos que son creados a través de un sistema de bases de datos en donde usted crea, ¿qué es lo que usted hace cuando se crea una tabla?

pues lo primero que usted crea es la estructura y todos los registros que van ahí van en esa misma estructura ¿ok? que efectivamente alguno de ellos puede ser nul ¿ok? pero la estructura se mantiene y es idéntica para todos los registros que están en esa tabla ¿y archivos que son como para tablas?

### Orador 6 · `44:39 - 44:46`

¿cómo se llama eso? esa obra de office ¿cómo se llama el nombre a mí eso?

### Orador 1 · `44:47 - 45:22`

Excel ¿ok? que si un archivo de Excel por ejemplo es de tipo registro no, no, no para nada, no, digamos la forma de cómo se recorre el archivo aunque visualmente ¿verdad? aunque visualmente esté estructurado, lógicamente no está estructurado ¿verdad?

porque yo no hago una consulta específica, ahí lo que se hace es que la aplicación en la que se encarga de gestionar esa búsqueda ¿ok? pero en el fondo sigue siendo un archivo de ese tipo ¿si?

### Orador 3 · `45:26 - 48:06`

ok, entonces estamos listos con el tipo que a la vera es que se mancha todo el borrador y después si es cierto que ok, vamos con la estructura listo, ok, cuando hablamos de estructura tenemos cuatro categorías los archivos regulares, los directorios, los archivos de bloque y los archivos de carácter, aquí vamos a hacer una diferenciación importante ¿ok?

### Orador 2 · `48:07 - 48:38`

la parte que más nos interesa es .html .odt .avi .mp3 y cualquier versión ¿ok?

### Orador 1 · `48:38 - 49:43`

incluso los archivos que corresponden a tablas de bases de datos es por cierto algunos de ustedes han estado trabajando con aplicaciones para mobile, de pura casualidad ¿no han implementado todavía? ¿alguien ha estado trabajando con aplicaciones para mobile? no lo que necesito saber es ¿cuál es la ubicación física donde se escriben o donde se guardan los archivos que corresponden a la base de datos a las tablas en un dispositivo móvil, es decir si usted crea una aplicación móvil se crea la base de datos ¿verdad?

es decir lo que hay que hacer es ubicar físicamente esos archivos ¿dónde están ubicados? ¿en qué estructura del sistema de archivos del teléfono están ubicados, están alojados esos archivos?

### Orador 8 · `49:43 - 49:49`

es lo que necesito saber está ubicado creo que en la data, en la carpeta data ¿en la carpeta data?

### Orador 1 · `49:49 - 50:06`

¿está seguro? si hay como varias capas, hay varios diálogos yo siempre lo meto en la data ok, pegue una chequeadita después con tiempo le pegue una chequeadita y me manda un mensaje si está seguro que que se ubica ahí ¿está bien?

### Orador 7 · `50:06 - 50:10`

si exactamente

### Orador 1 · `50:10 - 55:59`

ok ok, ok, bueno entonces cuando hablamos de archivos regulares tenemos todo esto en realidad pues prácticamente que en su mayoría las cosas que nosotros vemos a pura vida calidad en su mayoría las cosas que nosotros manipulamos son archivos regulares ok los .c, los html, los los de texto, las presentaciones todo eso, los mp3 los dbx, todos los archivos imágenes y todas las posibles variantes que hayan ahí ok todo eso corresponde a archivos regulares ok tenemos la otra categoría tenemos la otra categoría que serían los directorios ¿verdad? que los directorios pues no es otra cosa más que un contenedor ¿verdad? es decir si yo creo una un contenedor que se llame ok, yo puedo crear puedo crear esa estructura de contenedores ¿verdad?

entonces la pregunta del millón de colones es ¿qué contiene este contenedor que se llama SO? ¿qué creen ustedes que contiene? físicamente como tal ¿qué es lo que contiene?

bueno en realidad, aunque nosotros le llamamos un contenedor, un directorio no es otra cosa más que un archivo ok, es un archivo que lo que hace es que contiene direcciones físicas de los archivos ok entonces ¿por qué diferenciamos un directorio de un archivo de un archivo regular? porque los archivos regulares lo que tienen digamos es información de usuario, mientras que los directorios no tienen información de usuario, lo que contienen son direcciones físicas de los archivos ¿ok? entonces si nosotros ya podemos hacer una dimensión de que un directorio lo que contiene son direcciones físicas, entonces nos es muy fácil entender que un sistema de archivos, de un sistema operativo que funciona como Dios manda no tiene que estar creando copias de un archivo, cada vez que usted copia un archivo y lo lleva a otra ubicación física sino que ¿qué es lo que hace?

pues simplemente actualiza el índice de referencia a la nueva posición, al actualizar el índice de referencia a la nueva posición, entonces el archivo no se escribe físicamente de nuevo, simplemente lo que hace es que se pone un índice a la referencia de la nueva carpeta donde usted lo copió, y eso sí reserva un espacio, ¿por qué reserva un espacio? ese espacio no lo está usando pero está reservado ¿por qué? porque ¿qué pasa si usted borra físicamente el archivo de la primera carpeta donde lo tenía?

entonces ahora sí, al llevarse a cabo esa operación de escritura, de borrado va a verificar que digamos que hay una liga a otra posición entonces va a ir y lo escribe en la nueva posición y lo borra físicamente de la primera y libera ese espacio ¿estamos claros? es decir digamos les estoy hablando de un sistema operativo que hace un uso eficiente de su sistema de archivos en otros contextos pues no, se copia y se pega a lo caballo entonces tenemos claros en lo que es un archivo regular y lo que es un directorio ¿por qué los directorios no son archivos regulares? ¿por qué?

porque no contiene información de usuario, esta es información administrativa a nivel del sistema de archivos, esta información no le compete al usuario ¿eso significa que el usuario nunca interactúa con ella? para nada, en lo absoluto el usuario en su mundo mágico cree que todo lo controla ¿verdad? pero no en realidad digamos, si usted crea un archivo en Linux y lo copia 50 veces usted va viendo como la capacidad de disco se va restando pero lo que está haciendo es que físicamente no copió 50 veces ese archivo en todas las localidades donde usted lo mandó a escribir, sino que lo que hace es que escribe una liga en esa estructura apuntando hacia la posición física del primer archivo entonces ese es el mecanismo a través del cual funciona, si usted borra el archivo origen él va a copiar ese archivo solamente en el primer índice de las 50 copias que usted hizo las restantes, 49, van a apuntar a esa primera liga ¿ok?

### Orador 4 · `56:01 - 56:06`

¿o sea es como un acceso directo de una aplicación con boot? ¿no con hack?

### Orador 1 · `56:07 - 58:20`

más o menos, lo que pasa es que su concepto de acceso directo es muy diferente del de un sistema operativo este, funcional de alto rendimiento ¿verdad? ¿sí? más o menos podríamos decir que la idea, el espíritu el espíritu de su idea es la misma vamos a ver si sirve este este material de apoyo que nos trajeron aquí ¿esto qué es caridad?

¿es fuerte? ¿de esta patuerca? ¿será esta?

ahora sí nos empayasamos ahorita ¿está aquí? no se atan no se atan eso no era barra pero si britea todavía vamos ahora entonces con la parte que más nos interesa ¿ok? ¿qué es?

¿qué es un archivo loci? ¿qué es un archivo de carácter? bueno en un contexto de ejecución en un contexto de ejecución todos los dispositivos de entrada y salida son modelados como si fueran archivos, es decir si yo tengo un disco

### Orador 2 · `58:23 - 58:39`

tengo una impresora tengo un monitor tengo un teclado

### Orador 3 · `58:39 - 58:59`

tengo un escáner óptico

### Orador 2 · `59:13 - 59:15`

tengo una tarjeta de red

### Orador 1 · `59:21 - 1:05:51`

tengo n cantidades de dispositivos de entrada y salida lo primero que tengo que entender es que la forma en como el conjunto de servicios del sistema operativo se comunica con cada uno de ellos es viéndolo justamente como si fuera un archivo, entonces en el caso del disco duro ¿ok?

en ese archivo se escriben las peticiones ¿ok? y en ese archivo en ese mismo archivo se el resultado de la petición ¿ok? es decir que si un proceso que si el proceso 130 lleva a cabo una operación de entrada y salida para la lectura de un archivo esa solicitud viene y se escribe en esa porción del del archivo y finalmente cuando físicamente el dispositivo de entrada y salida atiende esta solicitud hace la búsqueda desplaza el plato, desplaza la cabeza de lectura de la escritura, empieza a transferir empieza a transferir los sectores que completan ese archivo los pasa a su buffer lleva a cabo cualquier operación de redundancia cíclica, determina que el archivo está completo y el buffer, que es esta porción del disco de este buffer es escrito ahora sí en ese archivo y posteriormente ese contenido que está escrito en ese archivo es pasado al bloque de la memoria principal asociado al proceso 130 ese contenido viene para el bloque de la memoria principal asociada a ese archivo asociada a ese proceso posteriormente cuando el proceso entra en nueva ejecución ya la información que solicitaba ya está ahí probablemente una parte esté en el bloque de memoria principal, otra en el área de intercambio pero el hecho es que ya esa información fue traída de almacenamiento secundario para acá entonces de la misma manera como se lleva a cabo esta lógica así funcionan todos y cada uno de los diferentes dispositivos de entrada y salida es decir, si yo quiero mandar a imprimir un archivo, ¿qué es lo que hago?

lo que hago es que voy y lo escribo en la cola del archivo de ese dispositivo así funciona para el monitor cada vez que yo quiero refrescar, voy y lo escribo ahí así mismo funciona con el caso del teclado con el escáner óptico y con todos los demás dispositivos como una tarjeta de red por ejemplo ¿cómo diferenciar entonces ahora sí un dispositivo? bueno, queda claro primero que todos los dispositivos de entrada y salida yo los modelo justamente como si fueran archivos, ¿verdad? es decir, cuando yo hago referencia a un disco duro, en realidad ese disco duro no existe para mí como sistema operativo, ¿qué es lo que existe?

a un archivo a través del cual yo puedo escribir las peticiones y donde voy a leer posteriormente el resultado de las peticiones realizadas ¿ok? hasta aquí claro es con eso, no hay ninguna duda vamos ahora entonces con la pregunta de ¿qué es bloque? y ¿qué es carácter?

la naturaleza la naturaleza del dispositivo de entrada y salida la naturaleza la naturaleza del archivo tiene que ver con ¿cómo lo acceso? ¿qué quiere decir de cómo lo acceso? quiere decir de que yo puedo ir si yo puedo ir a una porción de la información de manera independiente si puedo ir a una sección o si tengo que recorrer todo el dispositivo ¿ok?

por ejemplo en una impresora yo tengo una cola, acá tengo el trabajo 1 el trabajo 2 y el trabajo 3 son 3 peticiones que hay en el archivo de la impresora entonces ¿cómo imprime la impresora? toma el trabajo 1 lo concluye, luego el trabajo 2 lo concluye, luego el trabajo 3 lo concluye o imprime 3 líneas del trabajo 1 5 líneas del trabajo 2 25 líneas del trabajo 3 ¿cómo funciona? imprime uno completo y sigue con el otro a ese modelo le llamamos de carácter ¿ok?

¿por qué? porque no hay forma de ir a una porción de manera independiente, es decir, hasta que no atienda una petición completa no puede atender la siguiente ¿ok? ¿cómo creen ustedes que funciona un monitor?

### Orador 2 · `1:05:56 - 1:05:58`

¿un monitor? ¿sí?

### Orador 4 · `1:06:04 - 1:06:30`

no sé profesor son millones de píxeles y cada uno tiene una posición dentro de la pantalla entonces digo que se les ordena que se enciendan en cierta posición ajá diferentes colores pero en términos de programación o cómo lo hacen, no sé ok batiendo ahí tal vez de las dos formas porque usted puede ¿combinado?

### Orador 1 · `1:06:31 - 1:06:31`

¿una combinación?

### Orador 11 · `1:06:33 - 1:06:34`

¿cómo pierde?

### Orador 1 · `1:06:35 - 1:09:04`

porque usted puede ir a la pantalla, por ejemplo no, digamos no sé o sea, si la pantalla se puede ir, entonces puede bretear de las dos maneras y si no se puede ir calavera vean, sobre el caso de los monitores aquí hay un asunto un tipo listo ¿verdad? podría pensar en que yo podría dividir el monitor ¿verdad? yo podría dividir el monitor, entonces actualizo solo una parte pero no la actualizo toda o todavía algo más inteligente podría decir que vamos a ver, este es el monitor ¿verdad?

entonces como dijo el compañero anteriormente, esto no es otra cosa más que que una serie de píxeles ¿verdad? entonces yo podría decir bueno, voy a pintar voy a pintar ¿sí? ahí no estamos viendo esa pena que tallazo mejor le aviso antes de que siga ok si este es el monitor, entonces yo vería lo que se muestra ahí es un conjunto de píxeles nada más ¿verdad?

dependiendo del grado de resolución, es la tasa de píxeles que hay por unidad de área, entonces yo podría decir, bueno, ¿qué pasa si yo cojo un píxel para no pintarlo todo uno por uno, entonces cojo un píxel y bueno, voy a pintar los 25 que están a su alrededor, los voy a pintar del mismo color entonces ahí la tasa de refrescamiento bajaría muchísimo, no es lo mismo pintar uno de 25 que pintarlos todos uno por uno ¿verdad?

sería demasiado caro, y entonces ahí yo estaría haciendo algún grado de segmentación ¿verdad? y yo diría, bueno, entonces ahí podría estar aplicando la estrategia de de bloque, no, en realidad no ¿verdad? o sea, todo esto todo esto es de puro carácter ¿ok?

vamos a ver ahora cómo funciona el disco duro ¿ok? en el caso del disco duro en el caso del disco duro usted tiene digamos, tenemos una estructura ¿verdad? tenemos una estructura tenemos varios platos cada plato tiene dos caras ¿verdad?

### Orador 2 · `1:09:06 - 1:09:32`

está debido entonces esos que tenemos acá

### Orador 1 · `1:09:34 - 1:14:29`

los puntos negros son los bloques que corresponden a un archivo que estaban en la solicitud, lo que hace es que se determina cuál es la dirección o la forma de llegar a esos bloques, pero yo puedo estar trayendo, yo traigo este traigo este otro, traigo este traigo este pero también, como si ya lo vemos, de manera individual el disco está estructurado de esta manera más o menos entonces, el disco está estructurado en pistas entonces, ¿qué es lo que pasa?

que este es el bloque que yo ando buscando, pero para eso se mueve la cabeza de lectura-escritura en esta posición, entonces una vez que la cabeza de lectura se ubicó en esta pista si sobre esta pista hay este bloque que es de otra solicitud y este otro que es de otra solicitud entonces los va a traer los tres este lo coloca en un bloque del proceso uno, este lo coloca en otro bloque del proceso dos y este lo coloca en otro bloque del proceso tres ¿esto dónde está?

¿dónde está esto? bueno, en el buffer del disco entonces lo que estamos diciendo es que este recurso este dispositivo en realidad tiene la posibilidad de poder atender varias peticiones de manera simultánea por eso es que al disco duro le llamamos un dispositivo de carácter ¿por qué? porque el dispositivo de carácter disco duro, él puede incluso detener todas las peticiones que está atendiendo en ese momento y decir ahora voy a atender sólo esta petición entonces la capacidad que tiene él de ser interrumpido para atender otra petición es lo que determina finalmente su naturaleza ¿una impresora puede detener lo que está haciendo para atender todo el proceso?

no, un escáner tampoco un monitor tampoco entonces hay pocos dispositivos de naturaleza bloque en realidad son pocos los dispositivos de naturaleza bloque son los más ¿verdad? esos sí son los que más problemas nos generan ¿verdad? porque él estar atendiendo varias solicitudes al mismo tiempo, el asunto es cómo le damos una un orden de atención no todos los procesos finalmente tienen las mismas condiciones entonces, sobre esos dispositivos aparte de que él puede atender a varios de manera simultánea, entonces él va a estar sometido a lo que el planificador de corto plazo y a lo que el planificador de mediano plazo le determinen que es prioridad para él ¿ok?

entonces si el planificador de mediano plazo determina que hay un proceso que consume gran volumen de memoria pero que está a punto de salir, es prioridad sacarlo entonces él le va a decir a ese dispositivo atiéndame ese gulano de primero a esa petición colóquenmela de primero, cosa que no sucede cuando llega una impresora, cuando llega un monitor, cuando llega un teclado ¿ok? ahora si devolvemos hacia atrás vamos a entender que por ejemplo ¿recuerdan lo que llamamos los sistemas de tiempo real? que era un proceso que era un único proceso que podía existir en el contexto de ejecución, que cuando él entraba en el ciclo entonces los dispositivos se iban a someter a él y iban a dar atención inmediata bueno ya con esto nos queda muy claro que los que son de carácter ni frío ni caliente lo más que pueden hacer es brincarse y ponerse adelante de los que están ya en la cola, pero nunca pueden interrumpir al gulano que está haciendo uso de ese recurso en ese momento ¿ok?

entonces aunque hablemos de un sistema o un proceso de tiempo real ¿verdad? en realidad esto no es tan sencillo de implementar, es el único dispositivo que tiene la capacidad de poder detener todo lo que está haciendo literalmente y atender solo esa petición, es el disco duro en ese caso ¿ok? o cualquier otro dispositivo que tenga ese comportamiento de naturaleza de bloque ¿estamos claros hasta ahí?

¿alguna duda?

### Orador 5 · `1:14:34 - 1:14:54`

yo tengo una duda de entendimiento es que en la lectura del libro digamos yo vi que por ejemplo los los tipos que usted colocó ahí yo los encontré en estructuras y lo que usted puso en estructuras yo lo encontré en tipos de archivos entonces no sé bueno

### Orador 1 · `1:14:54 - 1:15:24`

digamos digamos que cuando hablamos del tipo bueno, todavía no le voy a responder esa pregunta, déjeme terminar con el acceso para que usted entienda que en realidad este para poder amarrarlos ¿sí? déme un chancecito ok, ok déme un chancito, vamos a ir de una vez entonces al acceso, para que esa duda que usted tiene quede muy válida le va a quedar bien claro ¿está clara la servilleta?

### Orador 2 · `1:15:45 - 1:15:46`

lo que pasa es que queda duro, sale

### Orador 1 · `1:16:32 - 1:16:34`

sería más efectivo el Apache creo yo

### Orador 2 · `1:16:34 - 1:17:03`

si no fuera pecado ok

### Orador 1 · `1:17:07 - 1:17:45`

por el acceso tenemos tenemos acceso secuencial o acceso aleatorio a los archivos entonces creo que con esto nos queda bien clara la duda ahora sí si yo tengo archivos

### Orador 2 · `1:17:47 - 1:18:30`

byte de carácter pues lo más lógico es que el acceso sea secuencial pero si tengo archivos registro

### Orador 1 · `1:18:36 - 1:24:41`

normalmente se encuentran ubicados en dispositivos de tipo bloque y su acceso será aleatorio digamos que esa es la base la base funcional los archivos byte se encuentran ubicados en dispositivos de carácter y su acceso es secuencial eso es como la regla ¿de qué sirve tener un archivo tipo byte en un dispositivo de bloque?

de nada porque tenía que recorrerlo todo siempre ¿de qué sirve tener un archivo registro en un dispositivo carácter? nada porque no se puede interrumpir nada porque no puedo ir a una ubicación particular si el dispositivo no lo permite ok entonces digamos que esas son las líneas favoritas es decir en este contexto pues lo mejor que podemos encontrar es que pudiéramos administrar todo de esta naturaleza que los archivos sean registros que estén manipulados en dispositivos bloques para que su acceso sea de manera aleatoria es decir si yo tengo una tabla una tabla cliente ¿qué tiene? ¿cuántos estudiantes hay en la UNA? ¿cuántos creen que hayan?

digamos que unos 25.000 registros por ahí tiene que andar más o menos la matrícula de la UNA pero si yo quiero trabajar o hacer consultas solamente con los estudiantes del campus Arapiquí ¿qué pueden andar? como unos 800 tal vez por ahí ok entonces ¿por qué yo tengo que jugar con toda esta muestra? si esto está como registros entonces yo ya voy a ir a traer el bloque de registros del total de la tabla y solamente voy a jugar con esto no tengo que cargar toda la tabla no tiene ningún sentido ¿verdad?

pero para eso yo tuve que haber entendido que la información debiera estar registrada como registros que el dispositivo donde está esa información contenida sea de bloque para que pueda traer específicamente esos registros y que el acceso permitido hacia él sea de carácter aleatorio pero por el contrario si yo tengo yo quiero hacer esta misma consulta si quiero hacer esta misma consulta y lo que tengo es lo que tengo es un backup del del 2000 ¿cuándo empezó esto? como en el 2015 por ahí ese campus ok bueno imaginemos que yo quiero hacer la consulta para ubicar los registros del 2015 ok, ese backup normalmente está en un C drive, ¿qué es un C drive? un C drive es parecido a un CD solamente que es de alta densidad y permite almacenar mucho mayor cantidad de información ese C drive es una cinta en el fondo ok, es decir el método de acceso no es aleatorio no es un dispositivo de bloque, entonces aunque yo tenga la información almacenada en registros el método de acceso ni la naturaleza del dispositivo me permiten maximizar ese rendimiento por lo tanto yo no puedo hacer esto, no puedo traer específicamente tengo que hacer la lectura de todo ok, y cargarlo en memoria todo, entonces al final al final el tipo, la estructura y el acceso está estrictamente ligado es a este, digamos esto es a donde queremos llegar a hacer esta interpretación, ok es decir yo nada hago con tener un archivo de bytes ¿verdad?

en un dispositivo de bloque, ¿para qué? para nada porque yo no puedo traer una porción y yo no puedo tener un archivo de registro que esté bueno no es que no puedo, perdón, no es que no puedo es que el ideal es que yo tenga archivos de registros en un dispositivo de bloque que pueda ser accesado de manera aleatoria, yo nada hago con tener un archivo de registro como este guardado en un dispositivo de carácter cuyo acceso tiene que ser secuencial pierdo toda la magia, pero ¿qué es lo que estamos viendo? ya, no, es que esto es un backup ¿verdad? es un respaldo de seguridad, por eso está en un Steve Brine no está en un en una bodega de datos ok, entonces por eso es que en el fondo, digamos que la nomenclatura esta no nos interesa, ¿qué nos interesa?

entender que hay archivos byte y registro, que hay archivos que hay dispositivos que son modelados como bloque o como carácter ok, y que eso va a definir el acceso que se haga sobre esos archivos ¿estamos claros? ¿estamos claros? ¿hay alguna duda hasta ahí?

es una maravilla esto ok ok bueno, vamos a hacer una pausa para tomar un cafecito y regresamos ¿cuánto sería? como unos 20 minutos

### Orador 4 · `1:24:41 - 1:24:43`

ok, entonces

### Orador 1 · `1:47:13 - 1:47:47`

no, porque ya eso depende, digamos, de las características físicas del dispositivo o sea, el zip drive ya funciona exactamente igual como como si fuera un un cassette de de VH digamos, el funcionamiento es que hay que recorrer todo, todo, todo para poder llegar al dato que usted anda buscando o sea, si lo que usted anda buscando está al comienzo de la cinta bingo, ¿verdad? pero si está al final calavera

### Orador 2 · `1:48:29 - 1:48:34`

ok, vamos a continuar ahora con vamos a ver si aquí nos da

### Orador 3 · `1:48:34 - 1:49:14`

ok, el primer modelo de

### Orador 1 · `1:49:14 - 1:49:22`

implantación de archivos es asignación adyacente en asignación adyacente lo que tenemos es que

### Orador 2 · `1:50:06 - 1:50:10`

esto es mi dispositivo

### Orador 1 · `1:50:10 - 1:51:47`

de almacenamiento, sea cual sea no solamente disk o cualquier dispositivo de almacenamiento secundario, externo ok, y lo que tenemos es que un archivo que hace solicitud de un bloque se escribe otro archivo hace solicitud de bloque, se escribe y así voy asignando de manera de manera sucesiva, ¿verdad? la principal ventaja que tiene este modelo la principal ventaja que tiene es la rapidez en procesos de escritura y lectura ok ya que todo el contenido del archivo ya que todo el contenido del archivo se encuentra junto ¿verdad?

solo ocupamos

### Orador 2 · `1:51:54 - 1:51:55`

la dirección del primer bloque

### Orador 1 · `1:51:55 - 1:52:28`

y el resto es una es una lectura hasta encontrar un file ok entonces lo primero que tenemos que entender es que los discos digamos que bueno, todo el dispositivo de almacenamiento se encuentran divididos en unidades

### Orador 2 · `1:52:28 - 1:52:37`

que llamamos sectores

### Orador 1 · `1:52:37 - 1:54:12`

el tamaño del sector se determina cuando se hace el formateo del disco entonces es cuando se estima de que tamaño van a ser los sectores no todos los sectores de todos los discos son iguales no todos los sectores de los dispositivos de almacenamiento secundario externo son iguales hay de diferentes tamaños lo que si es cierto es que en una misma unidad, si todos los sectores son del mismo tamaño ok es decir, entre unidades diferentes el tamaño de los sectores puede variar pero en una misma unidad todos los sectores son de idéntico tamaño, ok es decir, si yo tengo un disco y ese disco tiene esta estructura y lo que tenemos son las pistas de este tamaño ok aunque el disco esté demasiado mal hecho este sector

### Orador 2 · `1:54:13 - 1:54:15`

y este sector de acá

### Orador 1 · `1:54:27 - 1:57:21`

tanto el sector 780 como el sector 42 tienen exactamente la misma cantidad de bits para almacenar ok, y lo que tenemos es que en la estructura de almacenamiento como asignación adyacente en el sistema de implementación de archivos como asignación adyacente lo que estamos diciendo es que físicamente eso implicaría que que todo esto corresponda a un mismo archivo ok, es decir van a estar todos los sectores juntos uno continuación de la anterior hasta encontrar un end of file para determinar que es el fin del archivo ok, esa es la metáfora entonces es muy rápido recuperar o escribir porque solo ocupo la dirección donde va a ir el primer bloque y después el resto o escribo o hago todas lecturas hasta encontrar esto ok queda muy diferente a que estos sectores estén distribuidos por diferentes partes del disco, verdad, la búsqueda podría ser un poco más lenta ok el asunto de que de que todos los sectores si están juntos, la lectura o la escritura es más rápida hasta las últimas versiones de discos o sea que no es tan cierto porque los discos tienen una los discos ahora digamos como son tan rápidos la el movimiento del desplazamiento de la cabeza de lectura a escritura es tan rápido entonces ahora existe una variable que se llama la distancia de salto que quiere decir la distancia de salto la distancia de salto dice que si esta es esta es la cabeza de lectura a escritura vamos a ponerla acá esa cabeza de lectura a escritura se mueve así entonces aquí está la cabecita y la cabecita la que se va moviendo para atrás, para adelante ahí se mueve diferentes posiciones entonces lo que rota es el disco y por supuesto que rota esta cabeza si hace para adelante o se hace para atrás lo cierto del caso es que anteriormente pareciera ser genial que si

### Orador 2 · `1:57:26 - 1:57:38`

vamos a ver esta es la pista donde se encuentran ubicados los sectores de un archivo, digamos que esta es la pista

### Orador 1 · `1:57:40 - 2:01:02`

entonces aquí está este sector aquí está este otro aquí está este otro antes si esto estaba todo junto era genial porque mientras que yo hacía la transferencia de la lectura de este sector a la cabeza de lectura a escritura de la cabeza de lectura a escritura al buffer del disco ya el siguiente bloque ya estaba ubicado debajo de la cabeza de lectura a escritura entonces era más fácil, que es lo que pasa ahora que con lo que llamamos distancia de salto pasa algo como esto tenemos que como el disco es tan rápido y la cabeza de lectura a escritura es tan rápida entonces pareciera ser que es más fácil o es más tiene mejor rendimiento si por ejemplo yo escribo en este sector y escribo en este y escribo en este, y escribo en este es decir si esta es la pista entonces yo escribiría en este sector de acá, este me lo brincaría escribiría en este, este me lo brinco escribo en este, este me lo brinco y escribo en este, ¿por qué?

porque mientras yo transfiero este, este sector de la cabeza de lectura a escritura al disco, el disco gira tan rápido que ya, ahora este es el que está debajo de la cabeza de lectura a escritura entonces no hay chance, no importa me brinco ese incluso esta distancia ha cambiado de tal manera que ahora hay cosas convenientes como por ejemplo incluso que yo escribo en este, me brinco dos sectores, escribo en el siguiente me brinco dos, escribo en este sector me brinco dos me brinco dos, etc. esto es una distancia me brinco un salto una distancia de dos saltos, hay de tres de cuatro, de cinco, de seis, dependiendo de la velocidad del disco pero el espíritu es que si todos los sectores están juntos de un mismo archivo es más rápida la lectura a la escritura no hay ninguna duda hasta ahí con la ventaja cuál será entonces la desventaja la desventaja evidente es que esto es excelente si el archivo es solo de lectura ok ¿por qué? ¿qué pasa si el archivo es de escritura? si el archivo es de escritura, ¿qué pasa si yo este archivo, el A lo traigo y lo modifico y le agrego más información bueno, ya no va a ser capaz de contener en el mismo bloque donde estaba, ¿y qué va a pasar ahora?

pues va a tener que emigrar completamente hasta otro bloque que sea capaz de contenerlo, ¿ok?

### Orador 4 · `2:01:23 - 2:01:31`

una pregunta ¿sí? bueno, usted dice que ese es el problema pero, ¿él sí, o sea, se puede reubicar?

### Orador 1 · `2:01:33 - 2:02:03`

por eso sí, o sea el asunto es que él tiene que dejar este bloque, es decir él no puede poner una un puntero acá y poner el resto en otro bloque, eso es lo que no puede hacer ¿ok? es decir, él tiene que irse todo el archivo como tal, moverse a otro espacio donde él pueda caber completamente ¿ok? ese es el problema que tenemos ¿estamos?

### Orador 4 · `2:02:04 - 2:02:07`

pero además de eso, ¿no pasa nada más?

### Orador 1 · `2:02:08 - 2:02:33`

no nada más que eso me sirve solo para archivos que son estrictamente de lectura, nada más ¿ok? si el archivo necesito modificarlo constantemente, estarlo escribiendo pues ese archivo va a crecer y ya no va a caber ahí entonces, asignación adyacente es ideal siempre y cuando los archivos que se estén utilizando sean solamente de lectura ¿ok?

### Orador 5 · `2:02:35 - 2:02:46`

Roger ¿sí? no sé, no le entendí bien logré agarrar el contexto podría como brevemente repasar ahí lo de asignación adyacente ¿ok?

### Orador 1 · `2:02:47 - 2:02:49`

¿dónde se perdió? cuénteme

### Orador 5 · `2:02:49 - 2:02:59`

digamos donde se empezó a mencionarlo usted ahí, tiene digamos cuatro ilustraciones de los saltos y eso entonces no le agarré el contexto

### Orador 1 · `2:02:59 - 2:04:32`

ok, ok, ok, el tema de los saltos primero lo vamos a apartar primero vamos a ir al espíritu de la política el espíritu de la política es decir, yo tengo algo por guardar y lo voy a ubicar en un bloque ese bloque es capaz de contenerlo pero cuando llegue otra solicitud la voy a poner justo después de él es decir, después de acá voy a empezar a escribir después de acá voy a empezar a escribir o aquí voy a meter otro archivo ¿ok? entonces aquí metí al archivo uno en azul el archivo dos cuando el archivo uno crezca, ya no puede caber aquí, ahora tiene que irse a ubicar, a reubicar a otro bloque donde estén todos los sectores juntos ¿ok?

el tema con lo que le mencionaba la distancia exacta es porque ahora tecnológicamente ya los discos son tan rápidos que no es tan efectivo que los sectores estén técnicamente uno inmediatamente al lado de otro sino que es bueno dar un salto o incluso dar dos saltos o dar tres cuatro, cinco, seis o siete saltos dependiendo de la velocidad del disco pero el espíritu del algoritmo es que los sectores del mismo archivo todos están juntos ¿ok? y que eso tiene el impedimento de que si el archivo es de escritura, constantemente el archivo va a estar brincando va a estar brincando por todo el disco a sectores donde sea capaz de contenerlo ¿ok?

### Orador 5 · `2:04:33 - 2:05:16`

ok, ahora si, si es que lo que me confundí un poco fue lo otro que usted explicó pero la esencia entonces está en la primera ilustración de que la esencia del término ok profe, dice Pedro que lo acepten pero una preguntita en esta parte de la ventaja donde dice si crece debe migrar a otro bloque, ¿qué dice eso?

### Orador 1 · `2:05:17 - 2:06:55`

¿dónde dice? aquí, si crece debe migrar a otro bloque suficientemente grande ok, gracias otra de las ventajas que tiene asignación adyacente es que no, digamos ya le voy a explicar ok, si imaginémonos que esta pizarra es mi dispositivo de almacenamiento si esta pizarra es el dispositivo de almacenamiento entonces ¿qué sería lo que yo tendría para administrar esa lista de asignaciones adyacente? yo tendría nada más el número de sector

### Orador 2 · `2:06:55 - 2:07:33`

más grande yo tendría aquí nombre del archivo y el número del sector no sería la dirección de inicio

### Orador 1 · `2:07:42 - 2:07:57`

ok yo tendría únicamente el nombre del archivo y la dirección de inicio entonces esto en realidad sería una tablita una tablita que yo tendría en donde tendría algo como esto

### Orador 2 · `2:08:06 - 2:08:08`

nombre del archivo

### Orador 1 · `2:08:09 - 2:08:16`

archivo 1 en la dirección plato

### Orador 2 · `2:08:18 - 2:08:37`

disco plato pista sector

### Orador 1 · `2:08:40 - 2:09:02`

recordemos que siempre estamos pensando en estructuras de arreglo de discos ok tenemos diferentes discos cada disco tiene dos platos cada plato tiene diferentes sectores perdón disco plato

### Orador 2 · `2:09:16 - 2:09:51`

disco plato cluster pista sector en donde yo tengo que un disco es algo como esto a todo este bloque

### Orador 1 · `2:09:51 - 2:10:42`

se llama un cluster ok todo esto es un plato todo esto es una cara por los dos lados es un disco completo y esto en particular es una pista ok entonces si estuviéramos utilizando asignación adyacente lo único que necesitaría es en una esquina de toda esta pizarra una tablita con esto para hacer referencia y para poder ubicar todos los archivos que están contenidos en este dispositivo ok, entonces la tablita es relativamente pequeña ocuparía un mínimo de información esa es otra de las ventajas que tiene asignación adyacente estamos hasta aquí

### Orador 4 · `2:10:47 - 2:11:22`

tengo una pregunta como se llamaba como se llamaba un temita que nosotros habíamos visto en clase bueno, usted nos había mandado a salas a investigar y nosotros habíamos expuesto a cada grupo le tocó a cada sala le tocó investigar algo pero había uno en específico que se parecía mucho ahorita a lo que usted dijo que cuando se le reescribía la información y era más grande que el campo donde estaba se iba y se buscaba un nuevo campo para asignarle un nuevo campo donde pudiera caber toda la información

### Orador 1 · `2:11:23 - 2:11:36`

ok lo que cada uno de ustedes investigó eran los modelos de implementación de administración de memoria comparticiones variables

### Orador 10 · `2:11:37 - 2:11:38`

y eran

### Orador 1 · `2:11:38 - 2:11:57`

mapas de bits listas ligadas y socios y en mapas de bits era donde sucedía algo parecido a esto donde el tamaño excedía lo que se le había asignado y después tenía que emigrar completamente a otro bloque

### Orador 4 · `2:12:00 - 2:12:03`

ok el otro

### Orador 1 · `2:12:12 - 2:16:15`

modelo de implementación se llama listas ligadas en listas ligadas ahora lo que tenemos es que tenemos el disco y la información está contenida una en este sector es decir la información se encuentra completamente dispersa lo único que hago es decir bueno, donde hay sectores libres y mando a escribir ¿cuántos sectores ocupa un archivo? 47 y empieza a escribir donde se vaya encontrando esos 47 sectores ok esta política tiene la ventaja de que la escritura y la lectura pues es más lenta ¿verdad? es más lenta ¿por qué?

porque tiene precisamente que probablemente lea esta pista pero el puntero de esta pista ¿a dónde apunta? el puntero de esta pista apunta a esta otra y el puntero de esta pista apunta a esta otra y el puntero de esta pista apunta a esta otra entonces, aunque en una misma pista habían dos sectores no los trae de manera inmediata ¿ok? ¿por qué?

porque lo que va haciendo es que va buscando el puntero al siguiente nodo de la lista ¿ok? entonces, el proceso de lectura y de escritura es un poco más lenta ¿ok? es una desventaja la otra desventaja que tiene es que si pierde una referencia el archivo no se puede recuperar ¿ok?

si pierde uno de esos sectores o sea, si uno de esos sectores está dañado pues no puede completar el total del archivo ¿ok? ¿cuál es la ventaja? ¿la ventaja que tiene?

bueno que la escritura no requiere un bloque total tan grande por lo tanto, dura menos en la búsqueda de bloques libres esa es la principal ventaja que tenemos ahí que el proceso de escritura es un poco más rápido porque la búsqueda de bloques libres no tiene que ir sumando para tener un dato de la cantidad total de la necesidad del archivo a escribir ¿ok? eso es muy muy muy importante estamos hasta ahí con la modalidad de listas ligadas espérame una pregunta ¿qué fue lo que escribí como ventaja?

### Orador 6 · `2:16:16 - 2:16:18`

es que lo estaba siguiendo la ventaja

### Orador 1 · `2:16:20 - 2:16:39`

la escritura no requiere un bloque total tan grande y dura mucho menos en la búsqueda de bloques libres porque ahora el simplemente va buscando los casillos libres y empieza a escribir los empieza a completar no le interesa cuantos hay libres simplemente empieza a escribir en los bloques en todos los que se encuentran libres va escribiendo

### Orador 6 · `2:16:42 - 2:16:44`

ok listo gracias

### Orador 1 · `2:16:44 - 2:20:39`

ok bueno igual igual que asignación adyacente que necesito a nivel administrativo para poder utilizar este sistema de archivos una lista exactamente igual a la asignación adyacente el nombre del archivo y la dirección del primer bloque únicamente y ya con eso nos vamos con un siguiente siguiente siguiente hasta que encontramos un endmode file ok es decir administrativamente los tamaños son exactamente idénticos ok pero tenemos un problema aquí grave ¿verdad?

que es que si se pierde una de las referencias entonces el archivo no se puede recuperar ok eso es muy complicado es decir cuando hablamos de referencias es que físicamente los sectores están bien están leibles pero ¿qué fue lo que perdí? perdí uno de los punteros ok entonces ese es el problema que tenemos para resolver ese detalle surge una variante ¿se lee o no se lee? no ok ok entonces le agregamos la coletilla y un índice esa es otra política ok listas ligadas y un índice ¿qué es lo que estamos haciendo?

bueno lo que estamos haciendo es que ahora administrativamente nuestra tabla va a ser ok tiene nombre del archivo y ahora si aquí empiezan todas las direcciones de todos los sectores entonces era disco plato clúster lista sector y si esto tiene 47 sectores va a tener esa cantidad de referencias entonces ¿cuál es la desventaja que tiene? listas ligadas y un índice que esta tabla administrativa ya creció es decir le estoy restando campo a mi área de almacenamiento para cuestiones administrativas ¿por qué? porque si antes tenía un único registro ahora ¿cuántos tengo?

tengo 47 ok ¿por qué? porque tengo la referencia de cada uno de los sectores de manera independiente ok y ¿cuál es la ventaja? que si pierdo que aquí no voy a perder no corro el riesgo de perder uno de los punteros al siguiente nodo como solamente en listas ligadas bueno ese es el modelo de implementación que utiliza windows listas ligadas y un índice preguntas hasta aquí ¿entienden claramente la diferencia entre listas ligadas y listas ligadas y un índice?

### Orador 4 · `2:20:48 - 2:21:14`

ok entonces no sé si podría volverlo a explicar un poquitito ¿qué es lo que quiere que vuelva a explicar? cuéntenme es que tengo un dolor de cabeza ¿perdón? tengo un dolor de cabeza entonces me voy a tomar unas pastillas ok ¿y a dónde se quedó?

me quedé cuando puso a explicar lo del índice ¿lo del qué?

### Orador 1 · `2:21:15 - 2:21:27`

lo del índice lo del índice ok ¿entiende correctamente el de listas ligadas? no, es nuevo ¿entiende el de asignación adyacente?

### Orador 4 · `2:21:28 - 2:21:29`

sí, ese sí

### Orador 1 · `2:21:29 - 2:24:51`

ese sí ok el de listas ligadas lo que hace es que si un archivo necesita 47 sectores si necesita 47 sectores lo que va a hacer es que él va a coger y va a ubicar en cualquier parte del disco en cualquiera de los platos en cualquiera de los discos 47 sectores libres y ahí va a mandar a guardar los bloques así funciona listas ligadas y en la tabla de administración lo que necesito es el nombre del archivo y la dirección donde se ubica el primer bloque ya con eso yo traigo el resto de bloques porque todos tienen un puntero a siguiente ¿estamos claros con listas ligadas? tiene el problema de que si pierdo una referencia, un puntero, entonces no puedo traer el archivo y eso precisamente es lo que trata de favorecer o de subsanar listas ligadas y un índice ¿por qué?

porque ahora tiene la dirección no solamente del primer bloque sino la dirección de los 47 bloques que conforman el disco eso implica que si un puntero se pierde no representa absolutamente nada ¿por qué? porque los bloques los tengo referenciados con direcciones independientes completamente diferentes ¿eso en qué me beneficia? me beneficia en que voy a tener la seguridad de que si pierdo uno de las ligas en esta estructura indexada lo voy a recuperar fácilmente ¿cuál es el problema?

el problema es ¿cuál es la ventaja que tengo? que siempre voy a poder recuperar y la desventaja que tengo es que esta tabla ahora va a crecer mucho uno de los problemas que tiene en este momento Windows es y que algunos de ustedes probablemente ya les ha pasado ¿qué pasa si se pierde o se daña esa tabla de archivos? ahí si estamos calavera si esa tabla se daña ¿por qué?

porque ahí si es cierto que no hay forma de recuperar nada de lo que hay, aunque físicamente los sectores contengan la información recuperar el archivo es imposible ¿por qué? porque si esta tabla está corrupta entonces no hay forma de poder establecer las indexaciones de los sectores que conforman el archivo eso es uno de los problemas más grandes que tiene y por eso en muchas ocasiones ustedes cuando arrancan se queda en un reboot ¿verdad? y simplemente no puede levantar esa tabla de archivos ¿estamos?

ya casi vamos ¿estamos claros hasta aquí? ¿la diferencia entre listas ligadas y listas ligadas sin índice?

### Orador 6 · `2:24:54 - 2:25:11`

capicho una pregunta con eso último que dije cuando un archivo se daña eso sería al inicio, cuando ya prende no va a ningún lado, solo se queda iniciando eso es cuando se daña la tabla de archivos ¿verdad?

### Orador 1 · `2:25:12 - 2:25:19`

¿por qué? porque no puede encontrar los archivos, ni siquiera los de inicio ¿se daña la tabla de archivos? no hay forma de recuperar absolutamente nada

### Orador 6 · `2:25:20 - 2:25:41`

si, es que hace poco pasó un problema ya similar con una computadora que no era mía que iniciaba, se prendía pero no arrancaba, se quedaba iniciando cuando la llevaron a un lugar para arreglar le dijeron que era el disco duro y se lo cambiaron a este, pero nunca le han dicho que era que el disco duro estaba malo, pero sin embargo le dieron el disco duro para que lo usaran ahí, pero el disco duro si estaba malo

### Orador 1 · `2:25:41 - 2:26:32`

o sea, vean la posibilidad de que un disco duro físicamente se dañe es mínima pero mínima, mínima, mínima ¿verdad? lo que sucede precisamente es que lo que se daña es la tabla de archivos ¿verdad? entonces al dañarse la tabla de archivos, aunque esté contenida es la información, pero no se puede recuperar entonces, ese disco lo más sencillo obviamente también hay que vender ¿verdad?

pero lo más sencillo es formatear el disco ¿verdad? instalarle una distribución de linux para que le haga una administración eficiente del sistema de archivos y continuar usando el equipo ¿verdad?

### Orador 4 · `2:26:37 - 2:26:42`

una pregunta ¿ni volviendo a instalar el sistema operativo?

### Orador 2 · `2:26:43 - 2:26:45`

¿ni volviendo a instalar el sistema operativo qué?

### Orador 1 · `2:26:45 - 2:35:34`

si, por ejemplo si usted botea una llave y vuelve a instalar windows desde el bios bueno, es que en realidad hay muchas probabilidades de resolver todo eso si usted instala un sistema operativo para empezar ¿verdad? y lo que sí es posible hacer es hay utilerías de linux que permiten reconstruir esa tabla de archivos ¿por qué? porque siempre se mantienen las referencias cuando se pasa de un modelo de listas ligadas a listas ligadas y un índice no es que los punteros se perdieron, no, los punteros se mantienen solamente que ahora creo una referencia directa pero al perder esas referencias es difícil recuperarla, pero si yo conecto ese disco a una utilería de linux reconstruye esa tabla ¿verdad?

ok el cuarto modelo de implementación se llama Innos y lo que tenemos es esto te doy una pregunta ¿verdad que al final eran sólo dos exámenes? o sea, el que hicimos y este que falta ahorita hablamos de eso ¿está bien? ok ok esta es la estructura de cómo organiza linux los archivos a esto le llamamos bloque simplemente indirecto a esto le llamamos bloque doblemente indirecto a esto le llamamos bloque triplemente indirecto cuatruplemente indirecto si se requiere, si el archivo es muy grande quintuplemente indirecto etc ¿qué es esto?

bueno esto en la estructura de archivos en el bloque simplemente indirecto lo que tengo es la primera referencia de un archivo ok vamos a ponerlo acá ¿qué es la primera referencia? aquí va a estar de ese archivo aquí va a estar de ese archivo probablemente probablemente eh unos cuatro o cinco sectores unos cuatro o cinco sectores de total del archivo de total del archivo ¿cuáles son esos sectores que van a estar acá? bueno aquí van a estar los cuatro o cinco sectores que más frecuentemente se utiliza pero ese archivo perfectamente puede hacer que tenga 47 sectores ok entonces en un bloque doblemente indirecto que tiene 1, 2, 3, 4, 5, 6 7, 8, 9, 10 ok, tiene 10 bloques aquí voy a mantener los siguientes los siguientes 10 sectores con la información que más frecuentemente se utiliza y cada uno de ellos puede apuntar a bloques diferentes ok entonces el fundamento es que la información que se trae o la información que se está procesando siempre voy a tener muy a la mano muy cerca la información con la que estoy trabajando ¿por qué?

porque se va haciendo este mecanismo descarte en el bloque más profundo ¿qué va a estar? la información del archivo que casi nunca se utiliza, que casi nunca se accesa, que casi nunca se modifica y en los bloques más cercanos al inicio simplemente indirecto van a estar la información que más frecuentemente se utiliza, entonces ¿qué es lo que estamos diciendo? bueno, que el mecanismo de direccionamiento a los diferentes sectores es dinámico, es decir esto no es estático ¿por qué?

porque en un momento un sector que está aquí en un momento un sector que está aquí de pronto se utilizó, entonces ya pasó para acá, ya se utilizó más y se pasó para acá y ya se utilizó más, de pronto está aquí ese sector ¿ok? entonces las operaciones de lectura y escritura son sumamente eficientes ¿por qué? porque los sectores que voy a escribir ¿dónde van a estar?

van a estar ubicados en estos bloques conforme pierda usabilidad la información de esos bloques, él empieza a trasladarse a bloques en niveles que están más relegados ¿ok? por eso es que en realidad digamos es una estrategia de implementación sumamente eficiente, es muy rápida, es muy consistente los bloques no están perpetuados en un sector, los bloques están cambiando de sectores ¿ok? y lo que mantengo es esta tabla actualizada, esas referencias ¿ok?

físicamente vamos a ver, físicamente físicamente la información no se mueve de sectores ¿qué es lo que se mueve? esta estructura lógica ¿ok? ¿por qué?

no es lo mismo ir a buscar cinco referencias en una tabla que tiene 47 registros que buscarla en una que tiene 10, es mucho más rápido buscar esa referencia entonces físicamente digamos los archivos, pero físicamente los sectores, lo que se escribe en un sector eso no se va a mover de ahí físicamente ¿qué es lo que se mueve? lo que se mueve es esa estructura lógica ¿ok? ¿de cuáles son las direcciones que pasaron al bloque doblemente?

¿cuáles son las direcciones que pasaron al bloque simplemente? ¿cuáles direcciones que estaban en el bloque simplemente ahora están siendo sacadas, van para el doble ahora están en el triple, probablemente van para el cuarto ¿ok? entonces esta es una estructura que es lógica que es la que se mantiene actualizada en tiempo de ejecución y que obedece para tratar de favorecer lo que más frecuentemente más frecuentemente se escribe se lee o se modifica ¿dudas?

### Orador 6 · `2:35:36 - 2:35:41`

eh, profe ¿eso haría que las búsquedas de los que ya no están frecuentes sean más lentos?

### Orador 1 · `2:35:42 - 2:36:36`

sí, por supuesto porque lo que va a privilegiar es lo que más frecuentemente se utiliza ¿verdad? es lo que nos interesa lo que prácticamente no se utiliza, pues en realidad yo por eso no me preocupo ¿verdad? si es que a partir de ese momento va a empezar a tener una tasa de usabilidad alta, esos sectores pues rápidamente van a empezar a ser indexados en los bloques más cercanos al simplemente indirecto y otra pregunta, usted en el bloque doblemente indirecto pues toma los siguientes 10 bloques ¿ese 10 es como ejemplo?

es un ejemplo, es un ejemplo es un ejemplo, o sea, esto, digamos el tamaño de esto no nos interesa lo que sabemos es que entre más cerca del bloque simplemente indirecto es porque ahí van a estar los sectores que más frecuentemente se utilizan y los que están en un grado de profundidad más lejos son los que menos frecuentemente se usan ¿verdad?

### Orador 4 · `2:36:39 - 2:36:52`

sí, listos tengo una pregunta profesor en este caso ¿este tiene desventajas? ¿o no las tiene?

### Orador 1 · `2:36:54 - 2:36:57`

yo no las he encontrado ¿verdad?

### Orador 4 · `2:36:57 - 2:37:00`

profesor, otra pregunta, entonces ¿por qué Windows no ha adoptado este paradigma?

### Orador 1 · `2:37:01 - 2:40:38`

diga, perdón porque en primer lugar ¿ese doctor? no tanto por eso sino porque digamos ahí vamos a ver tendrían que hacer todo de nuevo ¿por qué? si los carros de antes eran tan buenos ¿por qué los carros de ahora los hacen tan malos?

cuéntenme usted para que la gente compre más ¿para vender más? ¿verdad? ¿para vender más por qué?

porque los carros nuevos van a durar menos entonces van a estar vendiendo más más rápido precisamente ese es el negocio detrás de Windows ¿por qué no mejora muchas cosas? para empezar este es un sistema altamente seguro ¿por qué a Windows no le interesa que su sistema sea altamente seguro? porque necesitan vender antivirus ¿cuánto consume?

¿cuánto consume en recursos un antivirus de su equipo? ¿tiene ninguna idea? ¿tiene ninguna idea?

por lo menos yo solo tengo el que trae la compu no me gusta nada de ese advance que arrastra la memoria pero no solamente memoria un antivirus por más por más chancleta que sea consume cerca del 35% del total de los recursos por más malo que sea entonces es un negocio, es un negocio redondo ¿verdad? ¿por qué? porque eso va de la mano con que usted piense que tiene que tener un hardware con mejor desempeño entonces es un negocio redondo no invierto en seguridad ¿por qué?

porque me interesa también vender los parches ¿ok? ¿cuánto creen ustedes que se gana Windows cada vez que hay una nueva versión del sistema operativo y las implementaciones de ofimática o las actualizaciones de seguridad ya no dan soporte a esa versión ¿verdad? ese es el negocio oscuro bueno, estamos entonces con irnos ¿alguna duda hasta aquí?

todo bien ok bueno, si no hay más dudas entonces vamos a revisar lo de los sistemas de bases de datos que faltaban un momentito a ver si borramos esta no, si esta la que era más fuerte
