# Clase8 2

### Orador 2 · `2:04 - 2:05`

Bueno, buenos días.

### Orador 1 · `2:10 - 2:24`

Vamos a... necesitamos... para ver archivos.

Vamos a dar un espacio para una de las presentaciones que tenemos. Ya todos tienen presentaciones y nada, ¿verdad? Sí, no nos va a faltar nadie.

### Orador 3 · `2:24 - 2:24`

¿No?

### Orador 1 · `2:25 - 3:49`

Sí. Y después... Yo les traigo el proyecto.

Nos quedan nuestras cuatro elecciones. Es decir, en la cuarta presentamos el proyecto. Nos queda esta y dos más de clase.

Entonces ahí tenemos... Nos falta... Hoy será un archivo.

Nos falta entrada y salida. Bloqueos. List videos.

¿Verdad? El proyecto está para las nueve. Es cuando ya cerramos.

Y la siguiente semana es el examen. El examen. Todavía no lo tengo todo listo.

Tengo listo como el 60%. Este... El examen está cada día.

El examen está cada día. ¿Sí? ¿Normal?

¿Ah? No. No, está normal porque el examen...

Más bien estaba... Más bien estaba planeado para... Para...

Para que les fuera mejor. ¿Verdad? Las...

El caso estaba muy, muy... Muy, muy reducido. Otro proceso muy específico.

¿Verdad? Pero seguimos acompañando. Pero así carrapadamente la interpretación.

¿Verdad? El 60% de lo que he revisado...

### Orador 8 · `3:49 - 3:49`

¿Verdad?

### Orador 1 · `3:49 - 5:14`

El 60% de lo que he revisado. O sea, he revisado el 60%. Y el 60% estamos perovinos.

¿Verdad? Este... Hay como...

Interpretaciones américas, ¿verdad? Pero muy, muy difíciles. De por dónde iban las cosas.

Entonces... Pero eso la próxima... Pero vamos a concentrarnos entonces.

Y ahora vamos a hacer un ejercicio. Para... Para ver si vamos...

Encontrando el camino. ¿Verdad? Vamos a ver.

Bueno. Los archivos tienen 3 finalidades. Específicas.

Uno. Tiene que ser posible... No debe tener ninguna limitación.

En cuanto al volumen. ¿Sí? Es decir...

Estrategias de seguridad. Estrategias de seguridad. Tienden a...

Digamos, a rastrear. Y a definir lo que es... Un comportamiento aceptable del archivo.

Es decir, vamos a ver. Están haciendo algún... Están haciendo algún proyecto.

Talía, el proyecto que ustedes estaban haciendo. ¿De qué era? El proyecto de...

El proyecto de... Bueno, el que no han arrancado.

### Orador 2 · `5:16 - 5:18`

Es... Una copia de Amazon.

### Orador 1 · `5:19 - 5:29`

Ok, una copia de Amazon. Desde que el proyecto inicia, ¿verdad? Desde que el proyecto inicia, ya ustedes...

Más o menos, ¿cuántos archivos... De cuántos archivos consta ese proyecto?

### Orador 2 · `5:36 - 5:37`

Pueden ser unos 5.

### Orador 1 · `5:37 - 5:42`

Digamos que el proyecto completo... Bien sulterado debería estar como en unos 15 archivos.

### Orador 2 · `5:42 - 5:45`

Sí, sí. Es que, digamos, es como Amazon, pero...

### Orador 1 · `5:45 - 10:45`

Para tener una idea. Deberían estar en unos 15 archivos, ¿verdad? Pero, el hecho es que, digamos, Desde que ustedes inician el proyecto, Esos archivos ya deberían...

Digamos, deberían tener un comportamiento Creciente, ¿verdad? Deberían tener un comportamiento creciente, Pero con algún grado de... De proyección probabilística aceptable.

Es decir, si un archivo... Si un archivo de código, por ejemplo. Un archivo de código, En cada sesión de trabajo, Cada vez que ustedes se sienten, Y le metan un poquito, más o menos, ¿Cuántos K creen que puede aumentar el valor?

Un archivo, un archivo de código, Por ejemplo. Nos podríamos decir Que va a aumentar en megas, ¿verdad? Es decir, si yo cojo el archivo Y empiezo a trabajar en él, y ya lo guardo, No está, no está...

O sea, hay algo malo Si ese archivo apunta A que creció en megas, ¿verdad? Si es un archivo de código fuente, Va a crecer unos K bytes, ¿sí? Mucho menos, Va a crecer en gigas, ¿verdad?

Entonces, Cuando hablamos, ¿verdad? Cuando hablamos del principio De la capacidad de almacenar El gran volumen de almacenamiento, ¿verdad? De verdad estamos pensando en heurística, Desde el punto de vista de seguridad.

Es decir, Una forma, o sea, Si a ustedes les correspondiera Programar un antivirus, una estrategia muy sencilla De aplicar una heurística, es decir, Voy a medir crecimiento, ¿verdad? Y voy a hacer una proyección, es decir, Este archivo, cada vez que se abre, No debería crecer más de un tanto por ciento, Y ya eso es una heurística de seguridad, ¿verdad? El segundo criterio habla de La necesidad De perpetuar la información, ¿por qué?

Porque anteriormente, recuerden que No teníamos almacenamiento secundario, es decir, Todo se ejecutaba por el principal, Finalizaba el proceso, y la información Fue lo que se apuntó, Lo que se apuntó, lo que se imprimió, Y eso fue lo que quedó, nada más. Entonces, una tarea Fundamental que había, digamos, Un compromiso era poder perpetuar La información una vez que los procesos Finalizaran, ¿verdad? Y el tercer criterio tiene que ver Ahora sí, con lo que Posibilitan Los dispositivos de interconexión, Como las redes, es decir, Cuando pasamos de, digamos, De una aplicación en una Única estación, cuando Pasamos de ese modelo a tener Un dispositivo Server, ¿verdad?

Que almacena la aplicación Nada más, y tenemos una aplicación Cliente que se conecta para consumir datos, Ya tenemos que resolver aquí El tema del acceso concorrente, Pero el tema del acceso concorrente No es tanto problema si no tenemos que garantizar La integridad, ¿verdad? Es decir, bueno, Yo puedo tener Cinco Peticiones simultáneas A un mismo archivo, ¿verdad? No había ningún problema, pero ¿qué pasa si Las cinco peticiones Tienen el archivo abierto y están realizando operaciones De modificación de escritura sobre el archivo?

¿Cómo controlar, entonces, ahora sí, De manera integridad? ¿Verdad? Entonces, este realmente es uno de los De los grandes retos, ¿verdad?

Y todavía, actualmente, Digamos, ¿ven ustedes? Y es complejo, ¿qué fue lo que se hizo? Lo que se hizo fue un sistema Gestor Un sistema gestor de archivos, que nosotros le llamamos Un sistema gestor de bases de datos ¿Qué es un sistema gestor de bases de datos?

Es otra cosa más que una capa sobre La capa de los sistemas operativos Para controlar el tema de integridad de los datos ¿Sí? Si usted está cubriendo un sistema gestor De bases de datos en un ambiente De cualquier cliente Linux, eso no va a pasar En la capa En la capa del sistema operativo Se va a controlar la integridad Pero, otras versiones ¿Verdad? Tienen muchísimas limitaciones Entonces, ¿qué es lo que hacen?

Aparece otra capa Por eso es que, digamos Mike, SQL server Por ejemplo, es carísimo ¿Qué es lo que controla SQL server? Básicamente, integridad en los archivos Básicamente, integridad en los archivos ¿Verdad? Bueno, entonces, desde esta perspectiva Estas son las tres clases de funciones ¿Ok?

Y vamos a hacer el ejercicio Para el caso Para el caso del examen Para el caso del examen A ver si vamos a hacer el examen Para el caso del examen ¿Cuál de los tres criterios Es el más relevante? ¿Cuál de los tres criterios Es el que usted dice Este es el criterio clave Que debería aplicarse para el caso del examen A, un proceso que Medía dispositivos Y determinaba Una posible condición crítica Creo que el B Era uno que Creo que era el B

### Orador 9 · `10:45 - 10:50`

Guardado de registros Guardado de registros De los pacientes

### Orador 1 · `10:51 - 11:01`

Es que el primero Era el que hacía lectura Entre todos los sensores El C era el de El que analizaba las prácticas Biotécnicas para los cultivos

### Orador 6 · `11:01 - 11:03`

Y el 4, las fotos, los sonidos

### Orador 1 · `11:03 - 11:08`

El 4 era lo de La evaluación acústica ¿Y el B?

### Orador 8 · `11:10 - 11:19`

De que revisaba Si tenía condiciones críticas Y priorizaba La atención y todo lo demás ¿Verdad?

### Orador 1 · `11:20 - 11:53`

Ahora si, teniendo claro Que en la presencia de esos tres procesos De esos cuatro procesos ¿Cuál de esas Características en la que Debe prevalecer En ese modelo? El 3 La concurrencia ¿Qué es?

### Orador 2 · `11:56 - 12:19`

Puñal ¿Qué es el 3? No se pueden ser los 3, profe Es que digamos, tanto garantizar la integridad Pero también me importaría Perpetuar la información Al finalizar los procesos Carlos, ¿cuál es lo más importante Para usted?

### Orador 1 · `12:28 - 12:37`

La concurrencia ¿Concurrencia? ¿Concurrencia? ¿Sí?

### Orador 9 · `12:38 - 12:43`

Para mí, guardar la información Que tiene los cinco hospitales ¿Perdón?

### Orador 1 · `12:43 - 15:30`

Guardar la información que tiene los cinco hospitales, la 1 ¿Pero cuál de esos tres criterios Es el fundamental? Para mí, el 1 ¿Qué? ¿Cuál es el 3?

¿Cuál es el 3? ¿El 3? ¿Usted quería?

¿El 3? ¿Sí? ¿Usted quería?

¿El 3? Ok, y el asunto es el siguiente El asunto es el siguiente Ok Cuando hablamos de Al final, grandes volúmenes de información Pareciera ser que nos interesa, ¿verdad? Porque Los cultivos, las manes de los cultivos Eso genera una gran cantidad de información El tema de los De los De la análisis de audio Un audio pesa un montón ¿Verdad?

Un audio pesa un montón Sobre el acceso concurrente El acceso concurrente ¿Cuál es el acceso concurrente? Debe ser Pero fundamental Debe ser la primera Ya yo lo acabo de mencionar ¿Cuál es el próximo momento? Cuando varios procesos Están escribiendo Y entonces aquí es donde entra el análisis En ese contexto De los 4 procesos que mencionamos en el caso del examen ¿Sí?

¿Cuáles de ellos Realmente están escribiendo? ¿Cuáles de ellos están modificando? Prácticamente Solo hay uno que Que escribe, ¿verdad?

Y el resto consumen Consumen de él La información que generan No va a modificar el mismo O sea, crea otro, crea otro archivo ¿Sí? Entonces, vean que pareciera ser Ilusoriamente, ¿verdad? El principio de la concurrencia Era lo esencial aquí No es el principio de la concurrencia ¿Por qué?

Porque la concurrencia ¿Dónde priva? No debe privar la atención En archivos concurrentes Cuando hay más de un proceso Utilizando operaciones de escritura Sobre el mismo archivo Pero en el caso del examen, por ejemplo No pasa eso Ese es el cuidado que tenemos que tener siempre ¿Sí? Entonces evidentemente ¿Qué es lo que nos interesa?

Respecto a la información, es decir Que el producto de la lectura Que demuestra un comportamiento que he evidenciado Para poder generar, por ejemplo, una proyección probabilística ¿Verdad? ¿Sí? Bueno, esta persona, con este ritmo ¿Verdad?

Con este ritmo Con este ritmo de presión que presentó hoy ¿Verdad? Si no se controla, en media hora, va a llegar a un colapso ¿Sí? Eso es lo que queremos ¿Verdad?

Porque la información se fue Perpetuando, se procesó, se proyectó Y se perpetuó ¿Sí?

### Orador 4 · `15:33 - 16:12`

Bueno, entonces tenemos Que hay Tres formas de poder Clasificar Los archivos ¿Verdad?

### Orador 1 · `17:29 - 20:41`

Estructura típica Acceso Acceso Acceso Acceso Podríamos decir que Podríamos decir de una manera muy resumida ¿Verdad? Que esto es como podemos Clasificar Los archivos Entonces Por la estructura, o por el tipo, o por el acceso El de ahí los caracterizamos ¿Ok? Bueno, por la estructura Por la estructura lo que tenemos Es que Los archivos se pueden clasificar Por el tipo byte, o el tipo registro Los archivos del tipo byte Podríamos decir De una manera muy sencilla Buenos días Los archivos tipo byte Decimos que son archivos que no tienen estructura Y los archivos tipo registro Son archivos que tienen estructura ¿Ok?

Básicamente Básicamente podemos decir Por ejemplo, que Cuando hablamos de un archivo El archivo tiene una estructura En realidad Pues no es otra cosa más que Que corresponde a un módulo de datos ¿Ok? Entonces por ejemplo ¿Has hallado más datos? ¿Hallamos?

Ok, perfecto, genial ¿Primer punto o segundo?

### Orador 6 · `20:41 - 20:47`

Primero Primero Primero nosotros, él ya ¿Ok?

### Orador 1 · `20:47 - 21:02`

¿Ya estoy yo o Kalea? Vamos por Kalea Ok Vamos a colocarlo por aquí ¿Cómo le llamamos Kalea? ¿A un archivo estructurado de una base de datos?

### Orador 4 · `21:08 - 21:23`

2 de mayo en Italia ¿Cómo le llamamos a un archivo estructurado de base de datos? Kalea por la espalda ¿Entidad?

### Orador 1 · `21:24 - 21:49`

¿Una entidad? Ok ¿Por ejemplo? Persona Ok A veces esas expresiones nos Complejizan, ¿sabes?

Porque en realidad Es muy abstracto hablar de una entidad Pero yo si puedo hablar De una entidad estudiante ¿Cuáles son los adjetivos de ese estudiante?

### Orador 5 · `21:52 - 22:00`

¿Ah? Ok, yo diría Yo diría ¿Verdad?

### Orador 1 · `22:01 - 22:08`

¿Cómo es estudiante? ¿Qué es lo que le explica? ¿Ah?

¿Por dónde empiezo?

### Orador 7 · `22:20 - 22:21`

¿Ah? ¿Por dónde empiezo entonces?

### Orador 1 · `22:25 - 22:30`

¿Por dónde empiezo? ¿Kalea?

### Orador 6 · `22:30 - 22:31`

¿Ah?

### Orador 1 · `22:34 - 22:43`

Empiezo, ¿verdad? Por un atributo ¿Sí? Las entidades que tienen atributos Entonces empiezo por un atributo ¿Qué?

### Orador 6 · `22:43 - 22:51`

Que le identifique ¿A él? Que le identifique De manera única ¿Sí?

### Orador 1 · `22:52 - 23:47`

Un atributo que le identifique de manera única Entonces tenemos ¿Ok? Tenemos un atributo Ok, ahora sí ¿Cuáles son los demás atributos? Ya tenemos el atributo más importante El que le identifica de manera única ¿Cuáles son los otros atributos?

¿Perdón? ¿Nombre? ¿Ok?

¿Cuál es Kalea? ¿El otro atributo? ¿Ah?

¿Cuál era el otro atributo? ¿Cuál era ese nombre?

### Orador 5 · `23:48 - 23:48`

¿Ah?

### Orador 1 · `23:49 - 23:56`

Carrera, ok, entonces aquí Entonces hacemos una pregunta, ok ¿Eso es un atributo? ¿O es otra entidad?

### Orador 6 · `23:57 - 24:01`

¿Otra entidad? ¿Ah? ¿Otra entidad?

¿Otra entidad?

### Orador 1 · `24:02 - 24:08`

¿Sí? ¿Cómo diferencia un atributo de una entidad?

### Orador 6 · `24:10 - 24:19`

La entidad Variables Ok ¿Entonces cuál será ahora sí Un atributo de estudiante? ¿Nombre? ¿Nombre?

### Orador 1 · `24:20 - 24:21`

¿Apellido?

### Orador 6 · `24:25 - 24:25`

¿Otro apellido?

### Orador 1 · `24:26 - 24:57`

¿Otro apellido? ¿Ah? Ok, apellido Y aquí es donde entonces pienso en el criterio De la estructuración Del concepto del archivo, ok ¿Qué pasa si yo pongo apellido?

¿Qué pondría ahí? ¿En el caso de suyo Kalea? ¿Sí?

¿Ah? ¿Está correcto entonces que yo ponga Ese atributo, apellido Y que incluya lo que El valor que me está dando No ¿Ah?

### Orador 2 · `24:58 - 25:00`

Tengo entendido que se tiene que poner aparte ¿Y por qué Kalea?

### Orador 1 · `25:03 - 25:48`

Excelente pregunta Pero he visto Porque estructuralmente Siempre pienso en opciones De identificar ese registro Entonces no solamente Yo tengo un principio que es Hay que ser claramente Pero también podría Tener una operación de búsqueda por Apellido uno, apellido dos ¿Ok? ¿Otro criterio? ¿Otro atributo?

¿De esa entidad?

### Orador 2 · `25:52 - 25:55`

Año de ingreso ¿Ah? Año de ingreso ¿Año de ingreso?

### Orador 7 · `26:07 - 26:08`

¿Otro atributo?

### Orador 1 · `26:08 - 27:35`

Tal vez es de interés Saber si está activo Ok Decimos prácticamente que Que hay un registro, perdón Que hay un atributo Que va a ser De carácter obligatorio En casi, en casi todos Los archivos de estructura Registro, ok Que es la condición ¿Sí? Que es la condición Y en ese caso En ese caso no serviría Para determinar, ¿verdad? Si la persona está Activa o no, ¿verdad?

Y normalmente Es un archivo de ¿Es un atributo de qué tipo, Daniel? Booleano Sí Yo no, pero yo voy a Estar un día hablando, ¿ok? Podría ser para que sea Más pequeño todavía, tipo 20, ¿verdad?

1,0 solamente, ¿sí? Ok, no importa Ok, entonces ¿Qué es lo que tenemos acá? Lo que tenemos acá es Lo que tenemos es una estructura, ok Lo que tenemos es una estructura ¿Eso qué quiere decir?

Que un archivo va a contener Parea Lea el resultado, por favor 1 ¿Qué le diga?

### Orador 3 · `27:36 - 27:49`

Se habla, ¿eh? 1,19,57 ¿1? 1,19,57, 0,8 y 0,7 ¿57?

0,8 y 0,7 ¿Eso sucede?

### Orador 1 · `27:50 - 28:24`

¿Eso sucede? Sí ¿Es un canal? Ah, no sé Jajaja ¿Ya jugamos?

¿Jugamos? ¿De acuerdo? Vieras que el carnet Estudiantil no trae como Aquí casi no hace luz Pero sí tiene un número, el carnet Ah Ok Entonces ustedes, o sea, digamos La derecha y la izquierda no es el número, ¿verdad?

### Orador 7 · `28:24 - 28:38`

No Yo, yo lo A ver ¿A ver?

### Orador 4 · `28:39 - 29:00`

Un poquito ¿Cuál es el número máximo?

### Orador 1 · `29:00 - 29:19`

¿Cuál es el número máximo? Sería Eh... 999,999 999,999 Ok, bueno Vamos a ver qué es ese número, no importa Ok, ¿verdad?

### Orador 3 · `29:22 - 29:59`

Sigamos Lo voy a sacar Gómez Gómez Ok, ¿cómo se llama esto?

### Orador 1 · `30:00 - 30:11`

¿Cómo se llama esto? ¿En realidad cómo se llama esto? Un Un Un Un ¿Cómo se llama eso?

### Orador 2 · `30:17 - 30:23`

Un Un registro Un registro ¿Sí?

### Orador 1 · `30:23 - 31:52`

Es decir, en base de actos Eso es una tupla ¿Cierto? Así se llama una tupla El profesor nunca mencionó esa palabra Ok En base de actos se llama una tupla Y en sistemas locales se llama un registro Entonces, ¿qué puedo decir que es un registro? Un registro Un registro corresponde a La información asociada A un elemento De un archivo De estructura registro Entonces, ¿qué contiene?

¿Qué contiene un archivo De estructura registro? Una cantidad De registros Cada uno de ellos Identificable por un valor único ¿Ok? Pero en donde En el campo Hay en el regreso Todos los elementos de todos los registros Son exactamente del mismo tipo ¿Ok?

Por eso se llama una estructura Es decir, este modelo se repite Para todos Para todos los registros que hayan ahí ¿Ok? Por ejemplo Este Este atributo podría ser Normal Este atributo Podría ser normal ¿Sí o no? ¿Sí o no?

### Orador 2 · `31:52 - 31:57`

No, no, no, es que no puede ser normal No puede ser normal ¿Sí?

### Orador 1 · `31:58 - 33:30`

No puede ser normal No, porque no existe la posibilidad de que una ciudad de activos No tenga un año de ingreso ¿Verdad? Esa es la pregunta para saber si un registro puede ser así o no ¿Verdad? Es decir Si algún registro por alguna razón al momento De ingreso Pudo haber quedado en blanco ¿Ok?

Como por ejemplo Perfectamente, el apellido 2 puede ser un registro normal ¿Hay alguien aquí que tenga solo un apellido 2? ¿No? ¿Conocen alguien que tenga solo un apellido 2?

¿Sí? Entonces este registro puede ser normal Una regla de negocio ¿Sí? ¿Están?

Bueno, entonces Esto es un archivo De estructura de registro ¿Ok? ¿Pero entonces qué será un archivo de estructura byte? Si decimos que es un archivo No estructurado Es decir, si no es estructurado, ¿qué es?

Si no es estructurado, ¿qué es? Es una secuencia ¿Ok? Entonces ¿Alguien tiene en mente alguna idea De un archivo Tipo byte?

¿Un archivo tipo byte? ¿Qué archivo está manipulando usted? ¿Qué archivo está manipulando ahí?

### Orador 3 · `33:31 - 33:32`

¿El tipo byte?

### Orador 1 · `33:32 - 34:49`

No, el archivo que está manipulando en este momento ¿Qué tipo es? Ah, el de WhatsApp Es Específicamente ¿Qué es lo que está trabajando ahí? Mi WhatsApp Pero digamos, ahorita usted lo está usando ¿Qué es lo que se está trabajando ahí?

Información ¿En qué formato? En mensajes ¿Usted está enviando un mensaje? No, estoy estudiando Poder, poder ¿Usted estaría ¿Ese archivo Se está manipulando ahí?

¿Qué es? Bueno, un archivo de texto ¿Ese archivo de texto? Ahora sí tenemos dos formas Para detallarlo ¿O es de tipo byte o es de tipo registro?

¿Es de tipo registro la pregunta? ¿O es de tipo byte? Es de tipo byte ¿Por qué no tiene una estructura?

No Ok ¿Qué pasa si a ese archivo yo le pongo una estructura? Si le pongo el día El tema, el asunto La hora ¿Va a ser ahora un archivo Tipo byte o va a ser un archivo Tipo registro?

### Orador 9 · `34:49 - 34:52`

De tipo registro ¿Puedo repetir la pregunta?

### Orador 1 · `34:54 - 36:38`

Mejor dígame ¿Cuál era su pregunta? ¿Adentro del archivo? No Yo estoy diciendo adentro del archivo Es decir Lo que quiero decir es que todos tienen que ver Desde cómo concebamos El archivo La información La información que él tiene ahí Está utilizando Un editor de texto O cualquier archivo de la naturaleza Ese archivo que él está generando Ahí es de tipo byte Es una secuencia byte Porque por ejemplo ¿Cuánta línea yo dedicaría a usted en ese archivo?

23 Imagínese que tuviéramos 750 mil 23 ¿Cómo iríamos a una línea específica? Del archivo No me dejen con problemas Es decir, no tenemos forma de ir a una línea específica ¿Por qué? Porque no tenemos un Atributo identificado, no tenemos una estructura Del archivo Aunque yo le ponga El encabezado, ¿verdad?

Aunque yo coja una maizala Y le ponga el encabezado Carnes, nombres Apellidos, etc. Es decir, para poder realizar una búsqueda De los 70 mil 23 Líneas Se irá haciendo un archivo tipo byte Porque tengo que recorrer todo el scroll Para poder ir hasta ahí Entonces Entonces Los archivos de esa naturaleza ¿Qué normalmente Se trasmite por Whatsapp?

### Orador 4 · `36:41 - 36:41`

¿Ah?

### Orador 1 · `36:42 - 37:15`

¿Mensajes, ok? ¿Un mensaje es tipo byte, verdad? No tiene una estructura, ¿qué más?

Ok, ¿una imagen? ¿Una imagen es tipo La estructura es byte o registro? Probablemente sea registro Probablemente sea registro ¿La imagen?

Ok, pero yo puedo ir Yo puedo ir puntualmente Yo le puedo decir Tráiganme la sección ¿Cómo debería aparecer? Tráiganme la sección de la imagen ¿Sí?

### Orador 2 · `37:19 - 37:20`

Entonces, ¿verdad?

### Orador 1 · `37:20 - 37:45`

¿Una imagen es un archivo con Estructura byte? Yo no puedo Siempre la pregunta me dice Yo puedo ir a una A un apartado específico Del archivo Si es estructurado, sí Si es tipo byte, no, tengo que traerlo Todo, y ahora sí, recorrerlo Para poder ir a una sección específica ¿Un archivo JSON no es estructurado? ¿Un archivo JSON no es estructurado?

### Orador 3 · `37:45 - 38:05`

No Aunque lleven el calzado Un archivo XML, por ejemplo ¿Un archivo XML no es estructurado? ¿Verdad?

### Orador 1 · `38:05 - 38:49`

¿Sí? Digamos, ese archivo que usted hace ¿Mantiene una estructura en todos los archivos? Si, digamos Si se trabla De una base a un JSON Si debería tener la estructura Es como, por ejemplo, un script ¿Verdad?

Un script de un exportado En realidad es un archivo estructurado ¿Verdad? Yo sí puedo ir a una sección Es que JSON hay Desde un simple Código ¿Verdad? Listo, listo, está bien ¿Puedo cambiar de una pregunta ya primero?

¿Cuál es la pregunta?

### Orador 7 · `38:50 - 38:50`

¿Ya no?

### Orador 1 · `38:54 - 39:38`

¿Era que digamos Sí, por supuesto Siempre la pregunta es Yo puedo ir A un registro específico En el archivo ¿Verdad? Si está Populado la forma Y que sea consistente Entonces será el tipo registro Si no, tipo byte ¿Sí? La pregunta 4 del examen Era el análisis acústica ¿Ok?

¿Y esos archivos de qué tipo son? Bytes ¿Quiere decir que yo no puedo ir Al registro 5 de un audio?

### Orador 9 · `39:41 - 39:41`

¿Sí?

### Orador 1 · `39:44 - 41:39`

Pues estamos engañados Sigue siendo el tipo byte Es decir, hay una aplicación que me permite Hacer esa aplicación Pero no es que estructuralmente Yo puedo traer el mismo resultado ¿Verdad? Es decir, cuando usted Guarda un audio en una base de datos Se guarda como un todo No se guarda Por segundo Se guarda como un todo Igual una imagen, se guarda como un todo No se guarda por una sección de la imagen ¿Sí? Que haya una aplicación que me permita Realizar eso ¿Verdad?

Que usted pueda textualizar la imagen Y pueda hacer un análisis De una porción específica ¿Verdad? De un bloque, de una coordinada x, y, z ¿Está bien? ¿Entonces todo el archivo Que quiera traer Todo el dato en un momento La pregunta era ¿Puedo traer Una sección específica de él?

Si la respuesta es Sí, es estructural Si la respuesta no, es que no puedo ¿Verdad? Entonces, en resumen Si tengo que traerlo todo para poder realizar Alguna operación sobre él El equipo baila ¿Ok? Entonces ya estamos Ahora sí entendidos, ¿verdad?

Del examen que implicaba Traer un archivo De audio ¿Verdad? ¿Sí? Hola Hola Vamos a ver Depende, porque si usted tiene Por ejemplo, un índice Entonces usted puede ir A una sección específica, ¿cierto?

Sigue siendo El tipo baila Es la aplicación la que me permite ir A una sección ¿Sí?

### Orador 4 · `41:41 - 41:43`

Ajá ¿Sí?

### Orador 1 · `41:44 - 43:09`

Es la aplicación la que me permite Ir a una sección Igual, el tema de la pieza audio Yo puedo ir al minuto 5 ¿Pero por qué? Porque la aplicación me permite ¿Verdad? No porque Del archivo solo se entrajo El minuto 5 No fue así lo que pasó, ¿verdad?

Imagínese, o sea Eso sería tanto así como que usted diga Ok, de ese documento que yo tengo Seccionado Con un índice, ¿verdad? ¿Será posible que yo pueda traer solo el apartado De objetivos? No va a pasar O sea, traer Todo el archivo Y ahora sí, mediante la Aplicación me permite ir A una sección específica Pero estoy viendo todo el archivo Tengo todo el archivo cargado ahí Entonces ya, de una vez Podemos imaginar, ¿verdad?

Que los archivos De tipo registro Que los archivos de tipo registro son Una gran bendición en un contexto De discusión, ¿por qué? Porque yo puedo Traer solamente una porción De ese archivo, no tengo que traerlo todo ¿Sí? Es decir, el archivo se buscaría En abandonamiento secundario Se cargaría ¿Dónde se cargaría?

¿El archivo es? ¿Cómo se llama? ¿El archivo es el de Word que se está bailando?

### Orador 5 · `43:10 - 43:17`

Ah, no, pero mi nombre ¡Tarea de!

### Orador 1 · `43:18 - 43:22`

¡Tarea de! Vamos a ver, ¿qué cursos llevamos ustedes que no son de carrera?

### Orador 2 · `43:25 - 43:27`

Actualmente todos son de carrera ¿Sí?

### Orador 1 · `43:28 - 43:59`

Bueno, anteriormente, yo no quedaba más de carrera Agricultura y Ambiente Ah, Agricultura y Ambiente, ok Usted está haciendo un ensayo Entonces usted va a traer El archivo porque necesita modificar Se acordó de un aspecto Importante, unos apartados, entonces usted lo va a traer ¿Ok? Ese archivo, cuando se trae, ¿dónde se carga? El archivo está en abandonamiento secundario Y cuando se trae Para hacer la modificación, ¿dónde lo carga?

En Word ¿Ah?

### Orador 2 · `44:03 - 44:05`

¿Dónde? ¿Dónde?

### Orador 1 · `44:06 - 45:57`

Antes de tener la memoria principal, ¿dónde lo cargaría? ¿Ah? ¿En el buffer de quién?

¿En el buffer de la memoria o el buffer del disco? Del disco Del disco Ahora todos tienen una explicación ¿Quién dice que en el examen ¿Quién dice que en el examen En ningún momento En ningún momento había empezado el buffer ni cachito Ok, nos vamos a esto Entonces, el archivo está en abandonamiento secundario ¿Ok? Entonces usted lo carga en el buffer En el buffer del disco Todo lo que se ha solicitado al disco Para poder decirle A la petición Que ya está completado Tengo que tenerlo cargado en el buffer Armarlo Aquí empieza, aquí termina Dice que está en su tamaño, efectivamente coincido Ok, está listo, aquí está Y ahora sí, ¿para dónde va?

Para la aplicación Memoria principal Ok, ahora empieza el tránsito Recuerden, de llevar unas funciones Porque otras iban para intercambio, etc. O, si va a cargarse Toda la memoria principal, trasladarla Pero va todo el archivo Va todo el archivo ¿Qué pasa cuando lo que yo tengo Es una consulta A la tabla de estudiantes ¿Ok? Es decir, yo cargo en el buffer ¿De qué tamaño era la tabla de estudiantes De la Universidad Nacional?

### Orador 6 · `46:01 - 46:04`

¿De qué tamaño, Fernanda?

### Orador 1 · `46:05 - 47:50`

¿Dijimos? Son seis valores 999.999 Ok Digamos que tenemos esa cantidad de registros ¿Sí? Entonces Imaginen traer toda la tabla Traer todo el archivo ¿Sí?

Yo puedo traer Si son seis más o menos Ya estoy buscando Entonces yo cojo Probablemente ya voy a traer 500 Porque estamos indexados ¿Sí? ¿Está bien? Entonces, traigo el buffer de disco Si el archivo está estructurado, bingo ¿Por qué?

Porque lo que puedo tragar ahora, la memoria principal Solamente es una parte ¿Para qué me voy a llevar todo? ¿Sí? Esa es la magia De los archivos estructurados El proceso es independiente El proceso es actualizar El proceso es actualizar Vamos a actualizar El año de ingreso Ese es el proceso, actualizarlo La consulta es ir a traer El registro ID 11, 95, 70, 72 Ok ¿Sí?

El proceso es cambiar Un valor de un registro ¿Sí? ¿Estamos?

### Orador 2 · `47:55 - 48:04`

Ok ¿Tiene algo que ver? ¿No implica el proceso, el archivo que le entre? No, no importa

### Orador 1 · `48:04 - 48:14`

Qué es lo que vaya a hacer el proceso Con esa data Aquí lo que tenemos que ver es la data La data con la que estamos manipulando El proceso es la tarea que se va a ejecutar sobre esa data

### Orador 2 · `48:14 - 48:18`

No varía, ese tipo va a ir Del registro, él igual lo hace

### Orador 1 · `48:18 - 49:41`

Lo que estamos haciendo es precisamente Que si es importante Porque si la data es de tipo Registro, yo puedo ir al final Y ya traer del BOC Pero la memoria principal es una parte, no tengo que traer todo Mientras que Si lo que voy a analizar es Si lo que voy a analizar es Otra cosa Una variación De usuario Via huella y tal Que va a entrar todo Eso lo complejo A este momento A las 8 y 50 de la mañana De la clase número 8 De sistemas superactivos ¿Qué es para usted un archivo?

¿Cuál es la definición que usted Tiene en este momento de lo que es un archivo? ¿Cuál es la definición que tiene usted? ¿Ah?

¿Cuál es la definición que usted tiene De lo que es un archivo? ¿La definición? ¿Cuál es la definición que usted Tiene de lo que es un archivo?

### Orador 7 · `49:44 - 49:45`

¿Perdón?

### Orador 1 · `49:52 - 50:04`

Eso podría ser un MemoListic ¿Verdad? Con esa definición ¿Cuál es la definición de un archivo?

### Orador 2 · `50:11 - 50:32`

Yo diría que es Bueno, algo que nos permite almacenar Bueno, yo le diría como Por no decirlo en mi momento Archivo que nos permite almacenar Grandes cantidades de información Pero de un mismo tipo No diría yo que diferente El archivo txt usted no le puede meter audio ¿No le puede meter?

### Orador 1 · `50:32 - 50:44`

Audio Y porque yo Hago un archivo ¿La tarea de qué era? Agricultura y Ambiente Agricultura y Ambiente ¿Es un archivo txt y le puedo meter imágenes?

### Orador 9 · `50:52 - 50:53`

¿La definición?

### Orador 1 · `50:54 - 50:55`

¿La definición que nos interesa?

### Orador 9 · `50:56 - 50:56`

¿Cómo es?

### Orador 1 · `50:56 - 52:43`

Esto es informática ¿Verdad? Es que un archivo es La menor unidad de información Capaz de ser indexada La menor unidad de información Capaz de ser indexada El principio Más importante De un archivo no tiene que ver Ni con el tipo, ni con la estructura Ni con la secuencia Ni con el contenido Tiene que ver con la capacidad de indexación Eso es la característica Más importante La capacidad de indexación ¿Sí? La menor unidad de información Capaz de ser indexada ¿Cuándo hablo?

Cuando hablo de la menor unidad de información Entonces ya estoy ahora sí asociando Que no es un dato Hay diferencia entre un dato y un archivo Que esté indexada Que puede ser ubicada ¿Verdad? Que puede ser ubicada Y ahorita después vamos a ver un poquito El tema de ¿Cómo debería ser ubicado un archivo Verdaderamente en un sistema Eficaz Y en otro ¿Verdad? Que no lo es, ahorita vamos a ver Entonces ya tenemos claro la definición Que es un archivo La menor unidad de información Capaz de ser indexada Esa es la característica estrella Es decir, nosotros como informáticos No podemos perder ese principio ¿Sí?

Bueno, entonces estamos clarísimos Sobre la estructura del archivo Ahora vamos a hablar sobre el tipo Especiales de bloque Especiales de carácter Regulares y directores ¿A qué le suena un archivo especial De bloque o un archivo especial de carácter?

### Orador 2 · `52:44 - 53:24`

Especial de bloque me suena como En el especial de bloque No sé, ¿verdad? En el especial de bloque Creo que me recuerda a los archivos De jason que vienen mucho No sé si está bien o mal Me recuerda a eso Modelar dispositivos ¿Ok?

### Orador 1 · `53:24 - 58:06`

Es decir ¿Cómo veo yo A un discólogo? ¿Cómo veo a una impresora? ¿Cómo veo a un joystick?

¿Cómo veo a un teclado? ¿Cómo veo a un mouse? Los veo justamente como si fueran Archivos Para el sistema operativo, él es un archivo ¿Ok?

Hay una petición De ese archivo, hay una petición Escrita en ese archivo Entonces, por ejemplo Una impresora Una impresora Yo la hago como un archivo Escribo en ese archivo Escribo en ese archivo una petición Una petición con contenido Para que me imprima Y entonces aquí es donde tenemos Que hacer la diferenciación ¿Cuál es la diferencia entre dispositivos de bloque Y dispositivos de carácter? Los dispositivos De bloque podría decir Los especiales de bloque Son asincrónicos ¿Qué quiere decir que un dispositivo Sea asincrónico? Vamos a ver Si yo Si yo le doy a estoy Una suma de 2x2 2x2 Ese dispositivo ¿Cómo se comportó?

Ese dispositivo dejó de hacer lo que está haciendo Y ahora está atendiendo la nueva petición ¿Sí? ¿Se comporta de manera asincrónica o sincrónica? Asincrónica ¿Ah?

Asincrónica Si deja de hacer lo que está haciendo Para atender la nueva petición ¿Ah? Asincrónica Si deja de atender lo que está haciendo Para atender la nueva petición Quiere decir que él solamente O puede atender una cosa o puede atender otra No puede estar atendiendo Las dos cosas al mismo tiempo Es decir, él no siguió escribiendo mientras Hacía el cálculo Si hubiera seguido escribiendo Mientras trataba de hacer el cálculo Eso hubiera sido asincrónica Podría avanzar con dos tareas al mismo tiempo O con tres tareas Entonces Por ejemplo La impresora La impresora es un Es un dispositivo de naturaleza De cárcel ¿Por qué? Porque la impresora no se puede Interrumpir, ¿cierto? ¿Qué pasa si la impresora Recibe todas sus tres peticiones Al mismo tiempo?

Una línea de un proceso Otra línea de un proceso Otra línea de un proceso ¿Sí? Pero el disco El disco El disco El disco está Hace solicitudes, vamos a ver Un archivo, esto puede ser un archivo Y esto puede ser un archivo Cada uno de ustedes es un bloque Del archivo A y cada uno de ustedes Es un bloque del archivo B Entonces Imagínense que cada uno de ustedes Tiene un número, organizado por Fila y posición en la fila ¿Verdad? Lo más lógico sería Lo más lógico sería Que si yo estoy en este momento Trayendo los bloques de esta fila De una vez verifique ¿Cuáles son los bloques De la fila 3 que se requieren?

El 1 y el 3, de una vez los llevo No tiene sentido que yo Diga, bueno, primero voy a ir Al bloque 3 De la fila 2, después al bloque A la fila 4 El bloque 4 Después me devuelvo A la fila 2 El bloque 1 No tiene sentido Llevo a la fila, me llevo todos los bloques que son Los pongo. ¿Por qué puedo hacer eso? Porque es de carácter Asimclónico, porque es Un dispositivo especial Del bloque Entonces puedo atender mis agentes de petición De hecho, yo pasé por aquí Este bloque No corresponde al archivo que ando buscando Pero también está en una petición Me lo llevo una vez y lo coloco en el espacio En el buffer De ese proceso ¿Estamos?

Entonces Un teclado ¿De qué?

### Orador 2 · `58:10 - 58:10`

¿Teclado?

### Orador 1 · `58:10 - 58:15`

¿De bloque?

### Orador 5 · `58:18 - 58:37`

Solo es un flujo Es un Flujo Sí, pero no son independientes Es un flujo ¿Verdad?

### Orador 1 · `58:38 - 58:54`

Es un flujo Es un flujo A ver Eh Eh ¿Qué otro dispositivo? ¿Quieren analizarlo? Podemos analizarlo nosotros ¿Qué otros dispositivos?

### Orador 3 · `59:01 - 59:03`

Podemos analizarlo el resto ¿Sí?

### Orador 1 · `59:07 - 1:00:49`

No, no, ok, ok El asunto es que El asunto es que el sistema operativo No ve dispositivos O sea El driver sirve para Que ese dispositivo pueda ser Administrado por este sistema operativo ¿Sí? De hecho hay dos categorías Los drivers, los controladores y los manejadores Después lo vamos a ver ¿Por ahora qué nos interesa saber? Que el conjunto De servicios básicos Que componen el sistema operativo No distingue a un dispositivo Lo único que ve es un archivo Él solo ve archivos Y aquí hay dos categorías El archivo puede ser De bloque o puede ser de carácter ¿Sí?

El de bloque cuando él funciona de carácter asíncrono Es decir, él puede estar atendiendo una petición Pero también puede atender otra Pero hay dispositivos que son Síncronos Sincrónicos, como en el caso de la impresora Solo Sí Y nada más que sí atiende una petición Y hasta que no finalice atiende la siguiente petición ¿Sí? Entonces, la modalidad del trabajo Prácticamente es la que determina Que sea de bloque o que sea de carácter ¿Sí? ¿Sí?

¿El videoí? Sí El videoí lo podemos entender como si fuera un monitor Literalmente es un monitor ¿Sí?

### Orador 7 · `1:00:52 - 1:00:56`

Está bien Entonces es ¿Ah? ¿Asíncrónico?

### Orador 4 · `1:00:59 - 1:00:59`

¿Asíncrónico?

### Orador 3 · `1:01:00 - 1:01:30`

¿Ah? Asíncrónico es un tipo de una Y asíncrónico es un tipo de varias Yo tengo un sistema de información biológica local que modela el comportamiento de un hueracán.

### Orador 1 · `1:01:31 - 1:04:56`

Imaginen ustedes en una pantalla, lo que estamos viendo es el comportamiento que tendría un hueracán. En esa pantalla, del total de la pantalla, cuánta área real está cambiando y cuánta área real permanece estática. Es decir, cuánta área real permanece estática.

Vamos a ver. Imaginemos, aquí en esta pizarra, estamos viendo un cuadro de una película. Resulta que hay un gatillo que sale corriendo por el bosque, en un lado y se esconde en el otro.

De todo el frame, ¿cuánto realmente se modificó? Todo, el 100%. ¿Qué porcentaje?

Ya tenemos un valor. Entonces, para nosotros como informáticos, ¿valdría la pena que el guerrillero esté yendo a cambiar frame a frame todos? O solo cambie la opción que se modifica.

Entonces, ¿ahí se comporta como de tipo bloque o como de tipo carácter? Las otras dos categorías por tipo que tenemos para archivo son los regulares y los directorios. ¿Qué es un archivo regular?

Un archivo regular es cualquier archivo que contiene información visual. Cualquier archivo que tiene información visual. Entonces, ya sabemos, especial del bloque solo modela dispositivos que son asíncronos.

Especiales de carácter para modelar dispositivos que son sincrónicos. Los regulares, todos los que contienen información visual. Por ejemplo, un archivo JSON, ahora sí caridad, ¿por tipo qué sería?

Un archivo .lib, ¿qué será? Un archivo .c, todos esos archivos son archivos regulares, no modelados dispositivos. Entonces, solo nos queda la categoría que son los directorios.

¿Alguien le contó? ¿Alguien que oyó a usted ahora en la mañana en el baño diciendo que era un directorio?

### Orador 7 · `1:04:59 - 1:05:18`

No es exactamente correcto, pero yo lo he visto mucho en carpetas. A veces, cuando usted va a buscar un directorio, se refiere a la parte de arriba. Arriba lo que tenemos es una ruta.

Sí, pero no es un directorio. Pensé que lo escuchaba en carpetas.

### Orador 1 · `1:05:18 - 1:05:36`

Es de una carpeta que habían para usted. ¿Una carpeta? Sí.

¿Hay alguna descripción aquí, de este lado? ¿Sí? ¿Hay alguna descripción?

### Orador 3 · `1:05:37 - 1:05:37`

No.

### Orador 1 · `1:05:42 - 1:05:43`

¿Alguna descripción?

### Orador 4 · `1:05:43 - 1:05:44`

Un espacio.

### Orador 1 · `1:05:52 - 1:06:23`

Pero de todos los almacenamientos escolares, ¿verdad? Primero. Siempre que estoy hablando de archivos, estoy imaginando almacenamiento secundario, ¿verdad?

Que ya ahora sí, el profesor de la inclusión que hace uso del archivo, ya ahora lo vamos a ver segregado, o en buffer, o en el número principal, o en caché incluso. Entonces, un espacio. ¿Qué es una carpeta?

### Orador 9 · `1:06:24 - 1:06:27`

¿Qué es una carpeta? ¿Qué?

### Orador 1 · `1:06:36 - 1:06:38`

¿Qué es un archivo?

### Orador 2 · `1:06:41 - 1:06:50`

Es la unidad de información capaz de ser indexada. ¿La qué? Es la menor unidad de información capaz de ser indexada.

### Orador 1 · `1:06:50 - 1:06:54`

La menor unidad de información capaz de ser indexada. ¿Esto es un directorio?

### Orador 4 · `1:06:55 - 1:07:15`

Es la menor unidad de información capaz de ser indexada.

### Orador 1 · `1:07:15 - 1:10:35`

¿Un archivo? Un archivo que contiene índices. El archivo contiene índices.

Ahora, ¿por qué es que ustedes no pueden definir lo que es un directorio, estando en segundo año o tercer año de la carrera de informática? ¿Por qué realmente ustedes están atrofiados por lo que pasa con Windows? O sea, en su mundo, ¿qué significa copiar un archivo y pegarlo en otro lugar en este momento?

¿Qué significa? ¿Qué significa para ustedes en este momento copiar un archivo de una carpeta y llevarlo a otra carpeta? ¿Esto es lo que pasa actualmente en Windows?

¿Qué es lo que hacen? ¿Y qué es lo que hacen con eso? Vulgarmente, copia el archivo aquí, hace una imagen igual y esa imagen la pone aquí.

¿Sí? ¿Eso es correcto? Cuando en realidad si yo quiero hacer una copia de esto aquí, nada más aquí pongo una referencia de la edición de esa vez.

Si es lo mismo, es una copia. ¿Por qué tengo que definirlo dos veces? Yo creo que mueve el índice, está en memoria el archivo en algún momento, pero mueve el índice y recupera el archivo.

No, no mueve el índice. Genera aquí, genera una copia aquí del índice de ese archivo. No copia el archivo, no copia esto para acá, no hace una copia, no va y compra otra y la pone aquí.

¿No tiene sentido? Porque si usted hace una copia, lo más núcleo es nada más que en la dirección tal de donde está el archivo que requiere. En el momento en que se haga una...

Eso implica que ahora sí, en el momento en que yo venga y esta botella va a despedirme, ya no es una ruborazo, esto tiene que igual a esto. Ya no. Entonces ahora sí, yo tengo que venir aquí a escribir qué fue lo que se modificó del archivo original.

Solo eso, solo lo que se modificó, no tengo por qué hacer la copia. ¿Verdad? ¿Sí?

Ahora ya nos estamos entendiendo lo que eso significa. ¿Sí? Está bien.

Pero es que probablemente ustedes hasta el momento no puedan dimensionar que en realidad es una carpeta. Porque para ustedes efectivamente es un contenedor de archivos. No es un contenedor de archivos, ¿verdad?

Es un archivo que contiene índices. ¿Sí? ¿Está bien?

Ok. Y nada más nos queda, ahora sí. Entonces, para efecto nuestro, ¿verdad?

Prácticamente que el 99% de los archivos que están en su equipo en realidad son archivos regulares. ¿Ok? Unos muy pocos serán directorios.

¿Verdad? Y unos muy poquísimos serán o archivos especiales de bloque o archivos especiales de carpeta.

### Orador 2 · `1:10:35 - 1:10:43`

Una pregunta. Con eso del índice, que lo que hace es direccionar al otro en una copia, ¿qué pasa si uno borra el original?

### Orador 1 · `1:10:43 - 1:11:49`

Entonces ahora sí, ahora sí ya tiene que quedar aquí, constituido ese, aquí. ¿Verdad? Si yo me borro eso de aquí, ahora sí, porque es una copia, entonces ahora sí lo escribo aquí.

Es decir, lo que yo tengo que hacer es reservar un espacio. Cuando yo hago una copia de esto aquí en Linux, ¿verdad? Lo que hago es que mantengo una referencia en la indexación, pero reservo un espacio.

Pero no estoy generando la copia de él aquí. ¿Sí? Reservo un espacio.

¿Por qué? Porque si en algún momento esto se borra, tengo que poder localizar para acá y tengo que asegurarme que tengo el espacio suficiente para hacerlo. ¿Verdad?

¿Sí? ¿Sí? ¿Perdón?

¿Qué pasa si yo subo y le pongo un arugulo aquí para coger lo diferente? Le estoy agregando. Entonces, eso que agregué aquí, se lo hice al archivo original.

Como los que mantenemos la referencia.

### Orador 4 · `1:11:50 - 1:11:50`

¿Sí?

### Orador 1 · `1:11:51 - 1:13:42`

¿Sí? Ahora sí, en el momento en que yo lo borro, en el momento en que haga alguna modificación, corte la botella, ahora sí, ya voy a hacer la copia aquí. Ahí sí, porque mantengo el archivo original.

Bueno, entonces nuevamente nos falta definir los archivos por el acceso. Y por el acceso podemos entender que hay simplemente dos tipos de acceso. Secuencial y aleatorio.

¿OK? Esto va a depender mucho de la estructura del archivo, va a depender obvio, va a depender mucho, no va a depender completamente, va a depender mucho, no va a depender completamente, de que cosa ocurre, el acceso de la estructura del archivo, es decir, un archivo que tenga una estructura BY como OLEMIND, como un clip de audio, el acceso será el mismo secuencial. ¿Cómo voy al minuto 5?

Tengo que recorrerlo todo desde el 0 hasta llegar al minuto 5. Si la aplicación me permite hacer un adelantamiento, puedo hacerlo, pero no es que pueda ir específicamente al 0, tengo que hacerlo de carácter secuencial. ¿Cómo va usted a un frame específico de una película?

No puede, es de ritmo secuencial, eso quiere decir que si yo estoy manipulando video, por ejemplo, eso es carismasisimo, ¿verdad? ¿Cómo puedo llegar a un frame específico? Tengo que tener todo el archivo cargado para irlo procesando, sumamente caro.

### Orador 4 · `1:13:43 - 1:13:46`

¿De la estructura?

### Orador 1 · `1:13:48 - 1:15:16`

Mucho, no, no lo condiciona, así depende, pero no lo condiciona, no es específicamente en esas condiciones. Mientras que si tengo un archivo, como la base de datos de estudiantes, entonces el acceso va a ser aleatorio, ¿por qué? Entonces, dependiendo del sistema de estudios, ya sea si yo puedo ir específicamente incluso al registro que yo quiero, no voy a traer toda la tabla, ¿verdad?

Que, evidentemente, esta entidad, para nosotros esto es el equivalente a una tabla, equivalente a la tabla es un archivo. ¿Qué sistema de estudios tenemos nosotros en este momento? ¿SQL?

¿SQL? Cerve. Ah, MySQL, ok.

Ya, por pura curiosidad, han ubicado el archivo que se llama estudiante, punto, con la excepción que le pone SQL, ¿saben dónde está?

### Orador 7 · `1:15:18 - 1:15:19`

¿No?

### Orador 1 · `1:15:24 - 1:15:51`

En su estructura de archivos. No, no, no, no, no en el sistema de estudios de los datos, o sea, usted para gestionar los datos, usted utiliza Apache Map My ID, por ejemplo, o cualquier modo de laborcillo, pero no importa. Pero, ¿han ido ustedes a la estructura de archivos?

¿En algún lugar en la estructura de archivos tiene que existir un archivo que se llama estudiante, punto? ¿Sí?

### Orador 4 · `1:15:59 - 1:16:00`

¿Sí?

### Orador 5 · `1:16:00 - 1:16:15`

Esto es un riesgo, calídate más. ¿Sí?

### Orador 1 · `1:16:19 - 1:17:24`

Exactamente. Los archivos, ¿verdad? Lo que sale, la estructura de archivos, en donde cada archivo evidentemente corresponde a una tabla, ¿ok?

¿Sí? Entonces, no solamente, cuando uno respalda, no solamente debería respaldar un exportado de un script, ¿verdad? Porque eso no es de todo obviamente, sino que uno lo que debería respaldar es la estructura de datos de la base de datos.

La estructura de datos, ¿verdad? La estructura de archivos, la estructura de archivos de la base de datos, ¿ok? Más allá del script como tal.

¿Sí? Entonces, ¿estamos clarísimos con la estructura, tipo y acceso? ¿Sí?

Bueno, esperemos. Podemos regresar y cuando vengamos hacemos una plantilla y a ver si estamos...

### Orador 6 · `1:17:35 - 1:17:51`

No tengo archivos. Por eso no tengo... ¿Sabes qué dices?

¿Qué? ¿Qué? Ya, perdón.

### Orador 4 · `1:18:23 - 1:18:24`

Perdón, perdón.

### Orador 5 · `1:18:30 - 1:18:39`

Se cae cuando lo mueve. Dice también que tal vez uno dice que es la base de datos. Y ahí no sé cómo tienen ustedes la base de datos, yo la tengo así.

### Orador 1 · `1:18:54 - 1:18:56`

Mira, la estructura es...

### Orador 2 · `1:19:08 - 1:19:20`

Aquí el problema es que se está utilizando la base de datos de random. Entonces tiene que buscar... ¿Cuál de esas es la que se utilizó para JPA?

La práctica de JPA. ¿Ves el link?

### Orador 5 · `1:19:35 - 1:19:39`

En la anterior que yo estaba usando, yo no estaba cogiendo la base de datos.

### Orador 2 · `1:19:41 - 1:19:43`

Pero usted me está diciendo que lo cogió como uno propio.

### Orador 3 · `1:19:44 - 1:19:48`

Pero no, yo no le he cambiado nada. No, no, no.

### Orador 2 · `1:19:48 - 1:20:11`

Usted me está diciendo que se está utilizando esta. Esta me dice que utiliza... Ahí está.

Que utiliza la de random. Relate. Creo que es nada más con borrarle...

Esto es multi-part. Tampoco lo tiene. Vamos a ver.

¿Puedo regresar este?

### Orador 4 · `1:20:11 - 1:20:12`

Sí.

### Orador 2 · `1:20:21 - 1:20:23`

Catálogo favorito, laboratorio.

### Orador 3 · `1:20:25 - 1:20:31`

Yo creo que... Yo creo que si tuvimos esos datos sería lo que... Si Mario me hubiera pasado el código, yo creo que no lo agregaría dentro.

### Orador 2 · `1:20:32 - 1:20:56`

Por eso no sirve. Nada más que si... Sin el puerto.

Yo no le pongo el puerto porque yo utilizo el 8080. ¿Eso usted se lo agregó?

### Orador 3 · `1:20:57 - 1:20:59`

No. Yo no he tocado nada de eso.

### Orador 2 · `1:21:31 - 1:21:34`

De verdad. ¿Usted dice si lo tiene? Sí.

### Orador 3 · `1:22:28 - 1:22:33`

¿Por qué? Es el 7.

### Orador 2 · `1:22:39 - 1:22:55`

Por eso me gusta tocarle los puertos. Yo creo que al menos se lo asigna. Y ahí como sería...

### Orador 4 · `1:22:55 - 1:22:55`

¿Puede ingresar?

### Orador 2 · `1:22:57 - 1:23:02`

Yo diría que no va a ingresar porque la base de datos estaba vacía. Entonces no tiene algo que...

### Orador 5 · `1:23:02 - 1:23:06`

¿Cómo hago para cambiar el administrador para probarlo?

### Orador 2 · `1:23:13 - 1:23:13`

Perdón.

### Orador 3 · `1:23:15 - 1:23:17`

Entonces usted tiene que tener dos para probar.

### Orador 2 · `1:23:17 - 1:23:21`

Sí, sí, sí. Primero nada más tiene que cambiar una a la otra ya automáticamente.

### Orador 3 · `1:23:28 - 1:23:29`

Tiene la base de datos.

### Orador 7 · `1:23:56 - 1:23:57`

En este caso dos.

### Orador 3 · `1:24:02 - 1:24:02`

Gracias.

### Orador 2 · `1:24:21 - 1:24:22`

Gracias.

### Orador 8 · `1:24:23 - 1:24:31`

Yo juro que no entraba eso del puerto. Si entraba, si entraba. Y no lo explicaba, no.

No, no, digamos.

### Orador 2 · `1:24:31 - 1:24:37`

Entraba porque yo le preguntaba. El mayor dijo que no. Pero él dijo que no.

Entonces yo no sé, quería preguntarle eso.

### Orador 8 · `1:24:37 - 1:25:02`

¿Cómo fue el asunto? No me confundo. Ya no lo sé.

Digamos, no lo pude usar. Usted conocía el concepto. Pero él no lo preguntaba directamente en el experimento.

Ah, es. Yo quiero preguntar, porque yo le pregunté a la gente de atrás. Y dice que él acaba de decir que había que usarlo.

¿Qué se dice? Nada. Ah, calidad, qué patín.

### Orador 6 · `1:25:12 - 1:25:14`

¿Fue con la vez? ¿Eh? ¿Fue con la vez?
