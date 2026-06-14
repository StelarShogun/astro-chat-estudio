# Semana 3

### Orador 1 · `0:01 - 3:04`

listo, calidad ya está grabando, han logrado acceder a los vídeos, no han tenido problemas, bueno, qué entendemos como un proceso, podríamos decir que un proceso no es otra cosa más que una pila de código, una pila de código pero en ejecución, ok, qué quiere decir que es una pila de código en ejecución, bueno, que tenemos varios formalismos de un contexto de ejecución, verdad, y pues evidentemente van a haber solicitudes, solicitudes de cosas que se tienen que llevar a cabo, pero hasta que esa tarea que se solicita no esté como parte del ciclo, entonces eso en realidad no se considera un proceso, ok, recuerden que con la implementación de la partición de la memoria podemos tener lo que llamamos multiprogramación, entonces si antes sólo teníamos un único programa y hasta que no terminara, no se podía continuar con el siguiente, ahora al partir la memoria podemos decir, bueno, yo puedo tener ahora en uno el conjunto básico de servicios que me permiten el funcionamiento de todo ese hardware, ok, que es lo que llamamos sistema operativo, es decir, toda la parte de la administración de esos recursos es lo que va a estar acá, entonces no nos imaginamos esto como un proceso sino como una cantidad de procesos, ok, ¿cuántos? dependiendo la versión del sistema operativo, pero pueden ser muchos, verdad, en las versiones de los kernels de Linux son más o menos 100 y resto, ok, y de ahí para arriba entonces, dependiendo la capacidad de la memoria, ahí vamos a tener un proceso 1, un proceso 2, un proceso 3, un proceso 4, y dependiendo la extensión de la memoria, así vamos a tener la posibilidad de meter varios procesos, ok, ahora, si nos apagamos al concepto de que un proceso es una pila de código en ejecución, tenemos que entender que nuestros programas, los programas que ustedes normalmente realizan, que el otro día consultamos más o menos de cuánto era el tamaño de esa pila de código, ¿recuerdan ustedes más o menos, ahora si ya tienen un dato más fresco de cuántas líneas de código eran los proyectos que desarrollaron?

### Orador 3 · `3:10 - 3:23`

En cursos anteriores, no sé, hubo proyectos hasta de 2000 líneas de código, ok,

### Orador 1 · `3:30 - 5:55`

tenemos claro que cuando hablamos de un proyecto de mil líneas de código, en realidad eso es el lenguaje de programación que genera esas mil líneas de código, pero que a nivel de instrucciones, que el CPU puede reconocer esas mil líneas de código en cuanto creen ustedes que se conviertan, recuerden que lo primero que se hace es que el código, el lenguaje de programación, tiene un árbol de léxico que traduce toda instrucción a un lenguaje de especificación formal, es decir, si usted incluyó un if, un for, un while, por ejemplo, que son las instrucciones básicas, esas instrucciones tienen que convertirse en formalismos matemáticos, ok, entonces sería para todo conjunto que está excepto, entonces se aplican las condiciones de los for, de los if, etcétera, ok, entonces primero todo se pasa a ese formalismo matemático, bueno, primero se hace la revisión de sintaxis del lenguaje para asegurar que todo esté bien, luego se hace la traducción a ese árbol de léxico, a la especificación formal y después entra en una etapa donde, por ejemplo, si usted utilizó un import o un include, pues entonces todas esas librerías van a venir y se van a incrustar en esa pila de código, porque cuando yo me presento con eso, ante el CPU ya todo tiene que ir listo, yo no puedo estar diciendo, hay que ir a traer una librería que está ubicada en tal dirección, no, eso no funciona así, todo, todo, todo se empieza a meter en esa pila de código, ok, de tal manera que cuando yo presento ese paquete ante el CPU, ahí ahora sí están las instrucciones a nivel de registros, que es lo que nosotros conocemos como lenguaje máquina, entonces una pila de código de lenguaje programado de mil líneas se puede convertir facilito, facilito, dependiendo los imports que se hagan, se pueden convertir en unas 35.000 líneas de código, ok, entonces este, ya esto nos da una idea, ya esto nos da una clarísima idea, verdad, de que el proceso uno, verdad, el proceso uno puede tener una pila de

### Orador 5 · `5:55 - 6:05`

código, ok, profe, si, o sea, el código que uno escribe es como más compacto que el que al final

### Orador 1 · `6:05 - 6:25`

traduce la máquina, claro, por supuesto, claro que si, imagínese, para que usted lo entienda muy sencillo, el lenguaje ensamblador, verdad, no intérpretes, el lenguaje ensamblador, una asignación, verdad,

### Orador 10 · `6:47 - 6:55`

profe, dice el compañero Kendall que si lo puede aceptar, claro, listo, ok,

### Orador 1 · `6:58 - 7:06`

una simple asignación de un valor a una variable, voy a encender la luz a ver si tal vez se ve un toquecito mejor, o ustedes me dicen cómo se ve,

### Orador 2 · `7:17 - 7:18`

se ve mejor,

### Orador 1 · `7:32 - 11:50`

se ve mejor antes entonces, ok, es que está como oscuro, aquí es tabla entonces, por eso es que me preocupa que, digamos, que después vayan a tener problemas y tengan que estar consultando porque no ven bien qué fue lo que quedó grabado, verdad, bueno, entonces les decía que una asignación sencilla como esta, verdad, donde yo a una variable ficha negra 7 le voy a asignar un valor, ok, si estamos en Python, si estamos en otros lenguajes, sobre todo orientados a objetos multicomas, sino con eso no sé suficiente, ok, esa es la asignación de un valor a una variable, un detalle tan sencillo como esto, el lenguaje ensamblador puede tomar más o menos como unas 25 líneas de código, ok, entonces para que ustedes tengan una idea, verdad, esto es solamente una asignación de una variable, ahora, digamos, convertir un ciclo de un for, un while o una condición de un if implican muchas líneas de código, ok, entonces, este, toda la traducción que se tiene que hacer, pues en realidad, este, obedece a una interpretación que pueda llegar a un nivel de formalismo en el cual el CPU si puede entender qué es lo que se está haciendo y recuerden que en el fondo el lenguaje ensamblador era puro direccionamiento de registros, verdad, ok, bueno, entonces, teniendo claro, verdad, eso es fundamental, que ustedes dimensionen la cantidad de líneas de código que hay en un programa, verdad, en un programa que hace cositas muy sencillas, ok, entonces, ya teniendo esa claridad, verdad, podríamos decir, bueno, que el proceso 1 va como a un cuarto de su pila de código, el proceso 2 va como a tres cuartos, que el proceso 3 apenas está iniciando, que el proceso 4 va más o menos como por la mitad de su pila de código, ok, y que si lo viésemos en una línea de tiempo, ok, entonces, que sería lo que tengo acá, acá tengo al proceso 1, ok, luego se detiene el proceso 1, entra el proceso 4, se detiene el proceso 4, entra el proceso 2, entra nuevamente el proceso 1, se detiene, entra el proceso 3, se detiene, entra el proceso 1 nuevamente, ok, entonces, esto es lo que vamos viendo, que es lo que estamos viendo, que en una línea de tiempo, el proceso 1 va intercambiando, va intercambiando con otros procesos, entonces, él ejecuta una porción, se detiene, entra otro proceso, ejecuta otra porción, entra otro proceso, ejecuta otra porción, y así es como finalmente logra ir avanzando, si le sacamos una foto en este momento a la línea del código que se va ejecutando, tendríamos cosas como esas, ok, y en la línea, esa sería la línea del CPU, en donde, que es lo que estamos pensando, bueno, que el CPU esté siempre ocupado, esa es la magia, ok, en garantizar que este CPU trate siempre de estar ocupado, ok, estamos claros con este dibujo, con esta premisa, que es lo que nos permite poder hacer que el proceso 1 se detenga, es decir, que el proceso 1 haga 20 instrucciones y se detenga, luego, llamamos a otro proceso, entró el proceso 4, hace un par de instrucciones, hace 10 instrucciones, o hace 20, o hace 40 instrucciones, o hace 200 instrucciones, ok, se detiene, entra otro proceso, ok, utiliza un rato

### Orador 5 · `11:50 - 12:13`

el CPU, pero digamos, ahí no hay nada como que determine cuántas procesos hace cada, como en cada escaloncito de esos, por ejemplo, ¿cuántos? porque usted dice, hace 40, o hace 50, o hace 200, cuando usted va diciendo, el proceso 1 hace 20, 20 que?

### Orador 1 · `12:15 - 12:16`

20 que?

### Orador 5 · `12:17 - 12:21`

ya me enredo, ya me enredo, usted me entiende, el proceso 1 hace 20 que?

### Orador 1 · `12:24 - 13:46`

instrucciones, instrucciones, instrucciones, instrucciones, vean, por eso es importante este ejemplo, y ojalá que cada uno lo repase ahí, ok, cuando el proceso 1 entra acá, ese proceso probablemente hizo 40 instrucciones, es decir, avanzó una porción de su código, ok, perfectamente, ¿qué es lo que está pasando? que aquí tenemos el proceso 2, probablemente, en esta instancia de ejecución, este proceso hizo este rango, ok, hizo ese rango de instrucciones, únicamente, después, en otro turno que va a ejecutar 5 instrucciones, perfectamente, puede pasar que aquí hizo 40, pero la siguiente vez, que el vuelva a entrar donde se presenta el proceso 2, aquí está, digamos que aquí se volvió a presentar, perfectamente, puede ser que aquí el proceso 2 ejecutó 5 instrucciones, nada más, perfectamente, ok, entonces, por ahora, yo quiero que tengan muy claro esto, ok, porque era necesario, porque era necesario pensar en multiprogramación, porque requerimos que los procesos estén intercambiando, se estén alternando, ok, una consulta, sí, igual no entiendo, él no

### Orador 3 · `13:46 - 14:09`

termina, él no termina el proceso 1, sino que va alternándose entre los procesos, porque el proceso 1 va por aquí, pero el proceso 2 va por menos que el primero, y el proceso 3 va por menos que el segundo, y el proceso 4 va como por la mitad, ok, esas son las preguntas que ocupamos aquí,

### Orador 1 · `14:10 - 14:39`

el proceso 1 entra, verdad, el proceso 1 hace una parte, ok, pero él tiene que ceder el CPU, por qué, qué pasa si ese proceso 1 monopoliza el CPU, es un término que vamos a utilizar acá, ok, procesos que monopolizan CPU, qué es, qué estamos hablando, de procesos que se dejan la CPU y no la quieren soltar, ok, entonces, el proceso 1, qué pasaría si el proceso 1 entra y se ejecuta

### Orador 3 · `14:39 - 15:00`

todo, qué creen que pasaría, sé que la respuesta es incorrecta, pero me imagino que termina el proceso y libera la CPU, ok, vean, aquí todas las preguntas, aquí

### Orador 1 · `15:00 - 17:36`

todas las respuestas y todas las preguntas están sujetas a valoración, ok, así es que lo peor que podemos pensar es que mi idea está correcta o incorrecta, no, no, no, no, ese no es el principio en este curso, ok, el principio en este curso es, lo que a mí se me ocurre en ese momento es, bueno, que eso es lo que pasaría, y aquí vamos a decir si está bien y si no está bien, por qué no está bien, verdad, eso es pero fundamental en este curso, porque si no, entonces lo que pasa es que esas premisas se quedan para el examen, y para el examen, si no hay chance de decirle, no, no era así, más que poniendo una X bien grande y poniéndole un cero redondote, verdad, entonces por eso es importante aclarar esto en la clase siempre, ok, bueno, si yo ejecuto el proceso 1 únicamente desde que entra hasta que finaliza probablemente vaya a pasar algo como esto, ok, ok, esa es la línea de tiempo, vamos a ver para no confundir, verdad, ok, esa es la línea de tiempo, entonces qué pasaría, yo tengo acá, entró el proceso 1, pum, pum, pum, pum, pum, finalizó el proceso 1, ok, después qué pasaría, entra el proceso 2, entra el proceso 2, pum, pum, pum, una pila de código más larga, finalizó, después entra el proceso 3, una pila de código muy corta, finaliza, luego sigue el 4, el 5 y todos los demás, ok, qué tenemos en este escenario y qué tenemos en este escenario, en este escenario que está acá, lo que tenemos es monoprogramación, es decir, un programa entra y monopoliza el CPU, entra y hasta que no finalice no cede la CPU, ok, esto es precisamente lo que estamos tratando de evadir, ok, que es lo que queremos, que la CPU sea muy dinámica, es decir, que la CPU haga un poquito de uno, otro poquito de otro, otro poquito de otro, otro poquito de otro, ok, la pregunta del millón de colones es, ¿por qué me interesa que esa CPU haga la mayor cantidad de iteraciones?, ¿cuál creen ustedes que sea el fondo?, ¿para qué queremos que esa CPU itere muchas veces?, ¿y por qué mejor no nos quedamos con algo como esto?, ¿verdad?, cuéntenme.

### Orador 5 · `17:37 - 17:45`

Para darle efectividad, digamos, si él lleva más procesos a la misma vez, como que se compacta más y va como más veloz en el todo, ¿no?

### Orador 1 · `17:46 - 23:24`

Ok, ok, eso que usted está imaginando lo vamos a resolver con esta famosa regla, ok, y aquí lo explica todo, ok, de ahora en adelante vamos a entender este principio fundamental, la regla 80-20, ok, ¿qué nos dice la regla 80-20?, la regla 80-20 lo que nos dice es que, en promedio, ¿verdad?, en promedio, los procesos en un ciclo de ejecución hacen un 80% de desperdicio de CPU, ok, si hacen desperdicio CPU, entonces, ¿qué quiere decir que están haciendo este 80%?, bueno, este 80% lo están dedicando a hacer entrada y salida, ok, y este 20% es aprovechamiento CPU, ok, entonces, ya con esto podemos entender claramente por qué es tan importante que nosotros dediquemos mucho tiempo o mucha lógica a tratar de que los procesos estén intercambiándose el CPU, ¿por qué?, porque lo que va a pasar es lo siguiente, si yo tengo en el proceso 1, ok, tengo en el proceso 1, digamos que esta es la pila de código, ¿verdad?, ok, esta es la pila de código del proceso en esta instrucción, ok, es decir, en esta instancia que el proceso 1 entró a ejecución, ejecutó este conjunto de instrucciones, ok, si ejecuta este conjunto de instrucciones en esta, en esta, en esta sección, ¿verdad?, entonces lo que decimos es lo siguiente, ojo, ejecutó 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 instrucciones, 16 instrucciones, ok, si ejecuta 16 instrucciones, entonces lo que tenemos que tener claro es que en esta iteración, ¿qué pasa?, ¿qué pasa?, si una de estas corresponde a entrada y salida, ok, peor aún, ¿qué pasa?, si esta, esta y esta corresponden a instrucciones de entrada y salida, ok, ¿qué es una instrucción de entrada y salida?, pregunta, en una pila de código, ok, en una pila de código, vamos a ver, usted tiene, usted tiene una, una, usted tiene un programita similar al hola mundo, que ese programita lo que hace es una suma de dos números, ok, esa suma de dos números, esa suma de dos números, hace una lectura de los valores, es decir, él manda a imprimir un mensaje y le dice al usuario, es que ingrese el valor A, el número 1, luego ingresa el número 2, luego manda a imprimir el resultado y le dice el resultado es tal y le manda a decir finalmente desea continuar, sí o no, aquí están las cuatro operaciones de entrada y salida, ok, en una pila de código, ejemplo clarísimo, entonces, ¿dónde lleva a cabo operaciones?, bueno, aquí, un poco de configuración, aquí validó el número 1, si era un valor, este, permitido en el rango, si había alguna condición ahí para que fuera entero, para que fuera un punto flotante, etcétera, hace lo mismo con el valor 2, después que recibe los dos valores, después de que recibe los dos valores, ahora sí lleva a cabo la suma, entonces es el procedimiento para hacer el cálculo de la suma, ok, y hacer la verificación y finalmente hacer la impresión de la salida, ok, entonces, este es un ejemplo sencillísimo, muy claro para entender que en una instancia de ejecución, en un segmento de código, nada más, en un segmento de código, yo voy a encontrar siempre incrustado operaciones de entrada y salida en medio de lo que podríamos ver que es propiamente lo que es aprovechamiento, o propiamente cálculo, o propiamente trabajo CPU, ok, claros con el ejemplo, por favor, a ver, sí, ok, ok, a eso venimos, a eso venimos, ok, primero concentrémonos en este ejemplo, y ya casi lo ligamos, entiende claramente el ejemplo?

### Orador 3 · `23:28 - 23:38`

Lo que yo entendí es que el CPU siempre va a interactuar con ese tipo de código, donde hay entradas y salidas, ok, lo que nos interesa

### Orador 1 · `23:38 - 24:06`

entender aquí es que el CPU, verdad, que el CPU una vez que empieza a ejecutar instrucciones, él no puede decir voy a ejecutar de esta hasta esta, porque puede ser que en el camino me encuentre muchas operaciones de espera por entrada y salida, verdad, bueno, en realidad son operaciones de entrada y salida, pero nosotros podríamos decir, bueno, aquí hay un tiempo considerable, vamos a ver, don Jafet, cuéntenme, le queda claro el ejemplo este?

### Orador 9 · `24:09 - 24:20`

Estoy como intentando entender con lo que van diciendo ahí, con los consultos, porque sí sirve un toquecito enredado, pero estoy intentando entenderlo.

### Orador 1 · `24:20 - 24:24`

Hasta ese momento, qué significa este simbolismo para usted?

### Orador 9 · `24:25 - 24:49`

Una pila de código, como ya veníamos a mencionar, sí, y qué ve usted en esa pila de código? Bueno, como usted venía diciendo también, tenemos 16 instrucciones, donde pues van a haber en medio de ellas distintas funcionalidades de entrada y salida, que es donde el CPU tiene que también tomarlas en cuenta, verdad.

### Orador 1 · `24:50 - 24:54`

Ok, y qué hacen esas, para qué son esas operaciones de entrada y salida, qué es lo que puede suceder ahí?

### Orador 21 · `24:55 - 24:58`

Ahí es donde me quedé como intentando comprenderlo.

### Orador 1 · `24:58 - 25:49`

Ok, en esas operaciones de entrada y salida, lo que sucede son, hago una lectura de un teclado, por ejemplo, mando imprimir un resultado, por ejemplo, hago una confirmación de un mensaje, por ejemplo, ok, esas son operaciones de entrada y salida, es decir, son valores externos que necesitan mi pila de código para poder llevar a cabo la operación que requiere. Esta pila de código, recuerden, era una suma, leía dos valores y mandaba a imprimir el resultado, ok, entonces aquí leemos el valor 1, leemos el valor 2, imprimimos el valor y preguntamos si quiere realizar otra suma, por ejemplo, es decir, tres entradas de datos y una salida. Sí, dígame, a ver, alguien estaba por ahí, una consulta.

### Orador 3 · `25:51 - 26:01`

Usted dijo que eso, digamos que en esta parte de código, lo que era la entrada y salida, había una cantidad considerable de tiempo.

### Orador 1 · `26:01 - 26:22`

Ok, ok, ya casi vamos a resolver eso, ya casi vamos a resolver eso, a ver, por ahora, por ahora, hasta aquí, por ahora hasta aquí estamos claros lo que hay implícito en una pila de código, es la parte fundamental acá para poder avanzar, ok. Don Edison, ¿le queda bien claro ese concepto?

### Orador 14 · `26:24 - 26:28`

Pero la pila creo que sí lo entendí, es lo que estaba contando ahorita.

### Orador 1 · `26:29 - 26:33`

Ok, ¿qué es lo que hay en medio de las instrucciones de entrada y salida?

### Orador 14 · `26:34 - 26:37`

Son como procesos los que ejecuta la CPU.

### Orador 1 · `26:37 - 26:45`

Ojo, ojo, procesos son estos, esto es las instrucciones de un proceso, entonces, ¿qué es lo que hay en medio de dos operaciones de entrada y salida?

### Orador 14 · `26:46 - 26:48`

Las instrucciones que ejecuta la CPU.

### Orador 1 · `26:49 - 27:19`

Ok, ahí, ok, lo que vamos a entender es que ahí lo que hay en medio es trabajo que hace el CPU, ok, exactamente así, aquí hay trabajo que hace el CPU y aquí ¿qué hay? Aquí lo que hay es un tiempo muerto, ¿por qué? Porque tengo que esperar a traer algo o porque tengo que mandar a hacer algo, ok, pero esto ya no es CPU, ok, listísimo ahí.

Ahora sí, vamos con la regla 80-20, ok, ¿qué es lo que entendemos realmente?

### Orador 5 · `27:20 - 27:38`

Jorge, por ejemplo, disculpe, por eso es que en esa regla es 80-20, digamos, ese 80 es como lo que no se aprovecha en el tiempo que se gastan las instrucciones de entrada y salida, es así, digamos, o estoy mal.

### Orador 6 · `27:38 - 27:49`

Le va a quedar bien claro. Jorge, entonces quiere decir que en el tiempo que hay entrada y salida, ese tiempo muerto pasa a otro proceso, para mientras, ¿no?

### Orador 1 · `27:50 - 28:52`

Ya casi vamos ahí, ok, ahora sí les va a quedar bien claro. Esto que sucede, que son operaciones de entrada y salida, en realidad es lo que llamamos un desperdicio, ¿por qué es un desperdicio? Porque es un tiempo que el CPU está así, ¿verdad?

Está esperando a que le traigan lo que él solicitó o que le confirmen si lo que él mandó a imprimir salió, ok. Pero la pregunta es, ¿por qué si tengo de 16 instrucciones, sólo 4, sólo 4 corresponden a desperdicio y entonces 12 corresponderían a aprovechamiento de CPU? Entonces, la pregunta del millón de colones es, ¿cómo es posible que si tengo sólo 4 operaciones de entrada y salida, eso me represente?

Me dicen si se sale o si todavía se logra ver.

### Orador 3 · `28:54 - 28:56`

Jorge, ¿podría volver a repetir esa pregunta?

### Orador 1 · `28:57 - 28:59`

Ok, ¿logran ver esto?

### Orador 3 · `29:00 - 29:00`

Sí.

### Orador 1 · `29:00 - 30:10`

Ok, ok. La pregunta del millón es, si yo tengo un segmento, ¿verdad? Un segmento, no una pila de código.

Esto es un segmento, ¿cuál es el segmento este apenas que se acaba de ejecutar aquí? Este segmento tenía ¿cuántas instrucciones? 16.

En esos 16 había 4 operaciones de espera por entrada y salida, ok. Tengo 4 operaciones de espera por entrada y salida. ¿Cómo explicamos, cómo explicamos que en esas 4 operaciones de espera por entrada y salida, eso me acumule del 100% de aprovechamiento, un 80% de desperdicio?

Y resulta que las restantes 12 operaciones de trabajo CPU, sólo me rinden un 20%. ¿Cómo explicar eso? ¿Cómo podemos explicar ese detalle?

Cuénteme. Don Jordan, ¿qué idea tiene usted?

### Orador 4 · `30:12 - 30:20`

No sé, profe. Tal vez porque el sistema está en espera y provoca un 80%.

### Orador 1 · `30:23 - 30:27`

Don Jair, ¿qué explicación encuentra usted?

### Orador 3 · `30:32 - 31:11`

Profe, yo la verdad no sé, no sabría. Lo que usted me dijo, lo que usted mencionó ahí, es que él va ejecutando las instrucciones, pero cuando se topa con las instrucciones de entrada y salida, él se topa como con un ladrillo, porque tiene que esperar a que el usuario oye y venga lo que él pidió. Pero yo me imagino que en ese periodo de tiempo, no creo yo que él se vaya a quedar ahí.

Entonces, me imagino que se va a otro proceso a ejecutarlo y no creo que eso… Entonces, entre ese intercambio, el proceso es el que se pierde.

### Orador 8 · `31:15 - 31:19`

Maycet, ¿qué explicación tendría usted?

### Orador 1 · `31:31 - 31:33`

Karina, ¿cómo explicaríamos ese detalle?

### Orador 10 · `31:36 - 31:48`

Se va a ir como añado, Jair, porque es que no sé, porque es como que se va perdiendo o se va ganando, por decirlo así. Digamos, de tener las instrucciones.

### Orador 1 · `31:48 - 32:13`

Lo que estoy preguntando es, ¿cómo explicamos que solamente haciendo cuatro instrucciones, yo estoy perdiendo el 80% del tiempo? Y con las demás dos instrucciones que ha llevado a cabo, solo estoy ganando un 20%. Esa es la gran pregunta, ¿cuál es la explicación para eso?

Edison.

### Orador 14 · `32:21 - 32:36`

Creo que es eso, como él necesita ir al traero o necesita de otra parte los datos o así, entonces de ahí le están esperando, por eso es que dura tanto tiempo. Y el 20, como ya tiene todos los ocultos ahí una vez, entonces por eso es que aprovecha el 20.

### Orador 2 · `32:38 - 32:39`

Kenny, ¿a qué piensa usted?

### Orador 12 · `32:46 - 32:49`

Pues no sé, pero apenas se me ocurre nada para explicar eso.

### Orador 1 · `32:54 - 34:03`

El asunto es muy sencillo. Tenemos algo que llamamos CPU, que lo vamos a ilustrar de esa manera. Que es donde se lleva a cabo todo el cálculo.

Esta es nuestra área de trabajo, esta es nuestra mesa de trabajo. Y tenemos la memoria, que es donde están consignados todos los recursos que se requieren para la tarea que se está llevando a cabo. Pero tenemos, en el otro lado del mundo, tenemos un teclado, tenemos un disco duro, tenemos un monitor.

¿Me logran ver ahí abajo? ¿Se ven?

### Orador 2 · `34:06 - 34:06`

Sí, sí, profesor.

### Orador 1 · `34:09 - 37:37`

¿Dónde están esos dispositivos? ¿Por qué decimos que están en el otro lado del mundo? Porque estos dispositivos a la memoria yo acceso a través de un bus de datos.

Es decir, eso es a un instante. Es decir, eso está prácticamente en mi mano. Eso es como esto que tengo acá.

Pero si, por ejemplo, si yo tengo que traer el alcohol en gel, entonces yo tengo que desplazarme a donde está y tengo que traerlo. Si voy a utilizar el borrador, no lo tengo aquí a mano. Tengo que desplazarme a donde está y traerlo.

Es decir, ya estoy agregando tiempo adicional. ¿Pero qué pasa si de pronto a mí se me ocurre que yo quiero limpiar esta pizarra con un trapo y con algún líquido especial? ¿Dónde tengo que ir?

Tengo que ir a buscarlo en una bodega. Ya tengo que salir de aquí y ir hasta esa bodega. Eso es precisamente lo que pasa con el tiempo que suma ese grueso valor del 80%.

Es decir, cuando yo tengo que trasladarme hasta otro lugar a traer lo que necesito para continuar ejecutando. ¿Ok? Por eso es que a pesar de ser pocas las instrucciones que encontramos de espera por entrar y salir, yo pierdo demasiado tiempo.

Cada vez de que una de ellas me aparece. Tengo que detener la ejecución. Ojo, aquí vean, esto se les tiene que quedar muy claro.

En este proceso 1, vean que aquí no hubo 3 o 4 interrupciones. ¿Qué pasó? Desde que el CPU le dijo, empiece a ejecutarse, va a ejecutar esas 16 instrucciones.

Hasta que de aquí a aquí, él solamente hizo un 80% de desperdicio y un 20% de aprovechamiento. Había muchas operaciones de espera por entrar y salir. Entonces, ¿cuál sería una estrategia bien inteligente?

Una estrategia bien inteligente sería decir, partamos esa pila de código en 4. Partamos ese segmento, ese segmento de la pila de código, ¿verdad? Porque eso es solo una porción.

Vean que ya por aquí habíamos ejecutado una parte, por aquí otra, por aquí otra. La que está en cuestión es solamente este segmento. ¿Ok?

Entonces, pareciera ser que una decisión inteligente sería hacer algo como esto, ¿verdad? Aquí, proceso 1, una porción, intercambio con otro proceso. Nuevamente, vuelvo a llamar AP1, ejecuto otra porción de otro proceso.

¿Ok? Entonces, vean que pareciera ser que la estrategia es que cada vez que me encuentro una operación de espera por entrar y salir, yo debería decirle al CPU, ya no la voy a usar, ya no la voy a usar, asignésela a otro, désela a otro. ¿Para qué?

Para que ese sí la aproveche. ¿Por qué? Porque yo me voy a dedicar a esperar datos que necesito para avanzar ejecutando.

¿Ok? ¿Alguna duda hasta aquí?

### Orador 6 · `37:47 - 38:06`

Profe, esa espera de entrada y salida, por ejemplo, cuando ya el código está debido, como usted dijo, cuando se produce, ese proceso que se va a ejecutar a continuación sería P2 o serían los hilos que están dentro del proceso, ¿cómo sería?

### Orador 1 · `38:06 - 41:15`

No hablemos de hilos, no hablemos de hilos todavía. Hablemos de instrucciones de un proceso. Hablemos de instrucciones de un proceso.

Entonces, lo que estamos diciendo es que se ejecuta una parte del proceso 1, este bloquecito de estas instrucciones, pero cuando llegamos acá, le decimos al CPU, ahí se lo dejo, utilícelo, asígnelo. Entonces el CPU es asignado a otro proceso, ¿ok? Aquí entró el proceso 6, por ejemplo, ¿ok?

Y después vuelvo nuevamente a ejecutar el proceso 1, y ahora sí, ya ejecuto el otro bloque de instrucciones. Me encuentro otra operación de entrada y salida. Voy a atender, voy a ceder el CPU, ¿ok?

Entonces, por ahora, lo que nos tiene que quedar claro ahora es que un proceso, un proceso, es ¿qué cosa? Una pila de código en ejecución. ¿Qué es esto?

Un conjunto de instrucciones, ¿ok? Y que ese conjunto de instrucciones es muy grande y que por lo tanto se va ejecutando por porciones. Primero 15, luego 5, luego 45, luego 3, luego 104, etc.

Pero que así a poquitos va avanzando, ¿ok? ¿Y qué es lo que determina cuánto se le asigna? Bueno, es parte de lo que vamos a ver más adelante con las políticas de asignación.

Pero por ahora lo que tenemos que tener claro es que así es, así es. Un proceso, es decir, una pila de código, un conjunto de instrucciones y que una instancia de ejecución corresponde a un segmento de esas instrucciones, ¿ok? Dentro de las cuales podría eventualmente haber operaciones de espera por entrada y salida, ¿ok?

Entonces, ¿estamos claros? ¿Qué es lo que estamos tratando de explicar? ¿Por qué necesitamos, por qué necesitamos alternar?

¿Por qué necesitamos parar y meter a otro? Y parar y meter a otro, y parar y meter a otro, y parar y meter a otro, ¿ok? Esto es lo que estamos explicando hasta este momento.

¿Por qué fue necesario pasar de la monoprogramación a la multiprogramación, ok? ¿Cómo creen ustedes que era aquí la tasa, la tasa de espera por entrada y salida, ok? Es decir, los procesos esperan, vean, para nuestro botón ellos tenían que esperar a que el proceso finalizara completamente.

Eso quiere decir que, mientras el proceso 1 esté haciendo CPU, los dispositivos de entrada y salida no se están usando. Y mientras los dispositivos de entrada y salida se están usando, no se está usando el CPU. Entonces, hay un desperdicio evidente por todo lado, ¿ok?

¿Cómo estamos hasta aquí? Cuéntenme. Es muy importante tener ese escenario bien claro.

Don Kendall, cuéntenme. ¿Cómo vamos hasta ahí?

### Orador 5 · `41:16 - 41:26`

Pero ven. Sí, dígame. Ah, bueno, es que ahorita lo interrumpí un toque, pero no me escuchó.

Hay un compañero que se está intentando entrar desde hace rato.

### Orador 1 · `41:26 - 41:38`

¿Se ve? Ajá, ahí está Ever. Ok.

A ver, Don Kendall, cuéntenme.

### Orador 3 · `41:38 - 41:42`

No, no, me acuerdo. Yo creo que hay una figura en el libro que explica justo antes.

### Orador 1 · `41:44 - 41:46`

Ojalá la figura fuera tan ilustrativa.

### Orador 3 · `41:48 - 41:49`

Y no tanta, digamos.

### Orador 1 · `41:53 - 41:54`

Vamos a ver, Gamaliel, cuéntenme.

### Orador 20 · `41:54 - 41:58`

Bueno, yo voy a responder, pero sí, la verdad, he tratado de verlo entendiendo.

### Orador 1 · `41:59 - 41:59`

Ok.

### Orador 20 · `42:00 - 42:03`

Estaba así un día.

### Orador 1 · `42:04 - 42:14`

Ok, ok. Empecemos a explicar eso, a ver. ¿No, Gamaliel?

¿Cómo explicaría usted eso?

### Orador 11 · `42:16 - 42:17`

¿Qué parte exactamente, profe?

### Orador 1 · `42:19 - 42:20`

La regla 80-20.

### Orador 11 · `42:24 - 42:29`

Bueno, es que no estoy muy seguro de lo que voy a decir.

### Orador 1 · `42:29 - 42:33`

No se preocupe. Esa es la intención, que usted lo pueda aclarar.

### Orador 11 · `42:36 - 42:59`

Bueno, lo que entiendo yo es que a la computadora le trata de seguir el orden que mayor le sirve, digamos. No se brinca pasos que no debería. Entonces, por eso es que hay un poco de desperdicio.

### Orador 1 · `43:00 - 43:57`

Vamos a ver. En algún momento hemos mencionado que se brinca pasos que no debería. No, no.

Hay una pila de código. Un proceso tiene una pila de código, ¿verdad? Es decir, si usted hoy va para el banco a hacer un trámite, usted ya tiene claro cuáles son los pasos que tiene que hacer, ¿verdad?

Es decir, usted sabe exactamente, desde que cruza la puerta de su casa, cuál es la rutina que debe seguir. Es decir, cuál es esa pila de código. Entonces, un proceso se ascribe precisamente a esa pila de código, a ese conjunto de instrucciones.

Es decir, no hay nada que pueda decir qué hace y qué no hace, ¿verdad? Lo que determina es, lo que puede determinarse es el momento en que algo se lleva a cabo o se posterga, ¿verdad? Vamos a ver.

Don Luis Castro. ¿Cómo me explicaría usted la regla 8020?

### Orador 2 · `44:15 - 44:17`

Hola, hola Luis. Probemos el audio. A ver, primero.

### Orador 1 · `44:24 - 44:32`

¿Qué pasaría con Luis? Don Anthony, ¿cómo me explicaría usted la regla 8020?

### Orador 2 · `44:35 - 44:36`

¿Cómo se escucha, profe?

### Orador 13 · `44:36 - 44:51`

Fuerte y claro. Bueno, que la 80 requiere más tiempo, dura más o no se aprovecha. Es porque no están esas instrucciones, entonces él tiene que ir a solicitarlas.

### Orador 1 · `44:51 - 45:57`

Ojo, ojo, ojo con esto, ojo con esto. Importantísimo. Lo que queremos es que usted trate de explicar por qué.

Porque vea que estamos diciendo que las instrucciones no están. No, no, no, no, no, no. Las instrucciones aquí están, ¿verdad?

Las instrucciones están en la pila de código. ¿Qué es lo que pasa? Que esa instrucción lo que me refiere es a algo que es externo.

Entonces tengo que detener lo que estoy haciendo para poder ir a buscar. A solicitar. Ok, sigamos.

Sí, sí, me equivoqué con la palabra. Eso es lo que nos interesa aclarar. Por eso es que hacemos el ejercicio.

A mí no me interesa que usted diga lo correcto. Lo que me interesa es, precisamente, ir aclarando esas condiciones, ¿verdad? Entonces, por ahora, tenemos claro que la instrucción no es que no está.

No, la instrucción sí está. ¿Qué es lo que pasa? Que esa instrucción me dice, vaya a la pulpería a traer una caja de fósforos que no tiene.

Ah, bueno. Ya tengo que parar lo que estoy haciendo y dirigirme hasta ese lugar. Eso es lo que pasa ahí.

Sigamos.

### Orador 13 · `45:57 - 46:04`

Y en el 20 es que ya están. Ya sabemos qué tiene que hacer la máquina. O la máquina ya sabe qué tiene que hacer.

Por eso es que requiere menos.

### Orador 1 · `46:04 - 46:34`

Lo que diríamos en ese caso es que ese 20% que corresponde al aprovechamiento, es decir, tiempo efectivo de uso, CPU, es porque lo que yo necesito hacer, todo lo tengo a la mano. Entonces, el CPU sí puede realizar las cosas. Imagínese que usted está haciendo una tarea.

Vamos a ver. ¿A alguien le gusta hacer arte? ¿A alguien le gusta pintar?

### Orador 3 · `46:37 - 46:43`

Es una consulta. ¿Sí? Pero este error de 80-20...

### Orador 7 · `46:43 - 46:44`

¿Ese qué, perdón?

### Orador 3 · `46:45 - 46:51`

El error de 80-20... ¿Cuál error? El error de 80-20, o sea...

No es un error.

### Orador 1 · `46:51 - 47:26`

No, no, no, no. No, no es un error. O sea, lo que estamos diciendo es que hay una regla que dice que en promedio, en un contexto de ejecución donde hay muchos procesos llevándose a cabo, normalmente pasa que los procesos solo aprovechan un 20%.

¿Por qué? Porque el otro restante, el 80%, lo pierden en operaciones de espera por entrada y salida. Es decir, tienen que detener lo que están haciendo para poder remitirse a otro lugar a traer cosas que necesitan.

Entonces, no es un error, ¿verdad? Ok.

### Orador 3 · `47:27 - 47:46`

Pero eso solo sucede en la monoprogramación o en la multiprogramación también sucede. Es que, por ejemplo, en la multiprogramación, como usted dice, él, cuando se topa con eso que sucede en la monoprogramación, él intercambia otro proceso. Entonces, no desaprovecha ese tiempo.

### Orador 1 · `47:47 - 47:49`

Perdón, repítame esto último.

### Orador 3 · `47:50 - 48:04`

Que lo del 80-20 no sucede en la multiprogramación porque él, cuando se topa con lo de entrada y salida, él sí intercambia otro proceso mientras esperan los datos del otro. Entonces, no se desaprovecha el tiempo.

### Orador 1 · `48:05 - 48:59`

Ok, ok, ok. Lo que tratamos es más bien de mantener el CPU siempre ocupado. Pensando en que si usted, en este momento, está haciendo una compra en la pulpería, que entonces el CPU pueda estar atendiendo a otro proceso, ¿verdad?

Entonces, pero eso no le quita a que usted, desde su ciclo de vida, para llevar a cabo su tarea, usted, ese 80%, usted no se lo va a quitar. ¿Ok? ¿Qué es lo que estamos tratando?

De quitárselo al CPU y de que el CPU realmente pueda ser aprovechado por otro proceso. ¿Ok? Pero usted, como proceso, como tarea que usted está llevando a cabo, esa carga del 80% de desperdicio, usted no se la quitó.

¿Verdad? No se la quitó. Lo que estamos tratando es de prever un escenario en el cual el CPU sí aproveche ese tiempo mientras usted está haciendo esa diligencia.

¿Verdad?

### Orador 3 · `49:00 - 49:05`

O sea, todos los procesos tienen eso del 80-20, pero el CPU...

### Orador 1 · `49:05 - 49:44`

No todos, ¿verdad? No todos porque, o sea, lo que estamos diciendo es que es una regla, una regla. En promedio, ¿verdad?

En promedio, casi todos los procesos pierden el 80% del tiempo de, digamos, del que están en ese ciclo de ejecución porque están haciendo, porque están yendo a traer o guardar, o guardando cosas. ¿Ok? En promedio, en promedio, ¿verdad?

Por eso decimos, digamos, que es una regla. ¿Ok? Vamos a ver.

Don Robin. Robin, cuénteme. ¿Cómo explicaría usted esa regla del 80-20?

### Orador 2 · `49:51 - 49:51`

¿Me escuchan?

### Orador 1 · `49:52 - 49:52`

Fuerte y claro.

### Orador 16 · `49:53 - 50:07`

En esa regla yo opino algo así, digamos, 20% en productividad y 80% en desperdicio. Pero esos 80% en desperdicio también se hace en otros procesos que va enlazado al principal, diría.

### Orador 1 · `50:08 - 50:41`

Ok, ojo ahí con eso, ojo ahí con eso. Al principal no, ¿verdad? O sea, los procesos son procesos independientes.

¿Ok? Probablemente algunos de ellos intercambien información, otros no, ¿verdad? Otros probablemente el proceso no tenga nada que ver con el proceso 2, pero el 4 y el 3 y el 6, sí.

¿Ok? Entonces no hay un proceso principal, ¿verdad? No, no, no.

O sea, aquí el CPU solo ve como si yo hubiera esa pantalla. Veo personas individuales y veo procesos individuales. ¿Ok?

¿Estamos?

### Orador 2 · `50:42 - 50:43`

Sí, sí.

### Orador 1 · `50:43 - 51:42`

Ok, ok, listo. Ahora, lo que usted dice, hay que tener, hay que tener mucho cuidado, ¿verdad? Cuando usted se refiere a que el proceso llama a otro para poder aprovechar, esto es, esto es, si lo estamos viendo desde el punto de vista del CPU, es decir, aquí hay que apartar los dos escenarios.

Desde el punto de vista del proceso, como tal, diríamos que está mortalmente condenado a perder siempre, en promedio, un 80% del tiempo. ¿Ok? Es decir, eso no se lo va a quitar el proceso.

Entonces, ¿a dónde nos vamos a abocar? A la otra parte, ¿que tiene que ver con qué? Con el CPU.

¿Por qué? Porque es un recurso, es el recurso por el que más se compite. Entonces, si me interesa administrarlo eficientemente, entonces, ¿cuál es una forma de administrarlo eficientemente?

Diciéndole, deténgase y atienda a otro, deténgase y atienda a otro, deténgase y atienda a otro. ¿Para qué? Para que regrese la pulpería con el insumo que requería.

¿Ok?

### Orador 16 · `51:42 - 51:44`

Es por eso, para optimizar las tareas.

### Orador 1 · `51:45 - 52:20`

No para optimizar las tareas, no porque la tarea, o sea, la tarea, vamos de nuevo, la tarea está condenada a ese destino. La tarea está condenada a ese destino. ¿Qué es lo que estoy diciendo?

Aprovechando mejor el recurso CPU. Diciendo, mientras ese gulano va hasta la pulpería, mejor yo voy a atender otro proceso. ¿Ok?

Entonces, los procesos, o sea, los procesos inevitablemente están condenados a esa, ¿verdad? A esa condición. ¿Ok?

¿Estamos?

### Orador 16 · `52:21 - 52:23`

Perfecto, profe.

### Orador 1 · `52:23 - 52:26`

Ok. ¿Sí?

### Orador 3 · `52:27 - 52:30`

Entonces, profe, ¿entonces qué se gana ahí?

### Orador 1 · `52:32 - 52:33`

Con multiprogramación.

### Orador 3 · `52:34 - 52:37`

Con multiprogramación, ¿qué se gana?

### Orador 1 · `52:39 - 53:49`

Lo que se gana acá es, ok, probablemente, tal vez usted no lo vea muy claro acá, porque aquí solamente tenemos cuatro procesos en ejecución, ¿verdad? Más los servicios del sistema operativo. Pero normalmente, en un contexto de ejecución, normalmente, en un contexto de ejecución, hay aproximadamente como unos, como unos 180 procesos.

¿Ok? Entonces, si usted tiene 180, entonces, si es importante, de esos 180, en el otro lado del mundo, probablemente, en el otro lado del mundo, hayan unos 60, unos 80, unos 100 incluso en algún momento. Entonces, con los que no están en el otro lado del mundo, yo sí puedo aprovechar y puedo, y puedo ir avanzando con ellos.

¿Por qué? Porque tienen los insumos que requieren aquí a la mano. Los tienen en la mano.

Entonces, con esos procesos sí puedo ir avanzando. ¿Ok? Eso es lo que estoy ganando con la multiprogramación.

¿Ok? Entonces, con los que tienen los insumos en la mano, de una vez, resolvámosle, hagámosle a esos procesos. ¿Ok?

Eso es lo que ganamos con la multiprogramación.

### Orador 10 · `53:52 - 53:53`

¿Profesor?

### Orador 1 · `53:53 - 53:54`

Sí.

### Orador 10 · `53:55 - 54:04`

Es decir, que en cada bloque o pila de instrucciones, siempre van a haber unas de entrada y salida para que siga ese mismo, bueno, proceso, como dice usted.

### Orador 1 · `54:04 - 55:09`

Ok, ok. Perfectamente, perfectamente puede pasar que esa es la historia, de ese proceso, en este, vamos a ver, quería el marcador. Juro que lo tenía en la mano.

Aquí está. Ok. Esta es la historia, esta es la historia de este proceso en esa instancia de ejecución.

¿Ok? Vamos a ver esa misma historia de este proceso en otra instancia. ¿Ok?

Perfectamente, en este momento que se ejecutó acá, ¿Ok? Él hizo solamente cuatro operaciones. ¿Ok?

En la instancia de ejecución que ese proceso llevó a cabo en ese turno que le tocó al CPU. Como vemos, son cuatro instrucciones.

### Orador 8 · `55:13 - 55:25`

¿Ok? Hizo cuatro instrucciones y resulta que tenemos cero desperdicio.

### Orador 1 · `55:26 - 59:35`

¿Ok? ¿Qué es lo que pasa ahí? Bueno, lo que pasa ahí es que muy probablemente en operaciones anteriores, en instrucciones anteriores, él tenía una operación fuerte de espera por entra y salida.

Y ahora, ya en este turno se va a dedicar solamente a hacer con lo que tiene. Por eso, en realidad, esto es un escenario ideal. ¿Por qué?

Porque aquí la tendencia no sería ir a un 20% de aprovechamiento, sino que aquí esto aclara luces. Tenemos una ejecución con 100% de aprovechamiento. ¿Ok?

Entonces, vean qué interesante. Realmente, no está condenado el proceso a que siempre se comporte de esta manera. Perfectamente podemos encontrar bloques como esos.

¿Ok? Entonces, por eso es que realmente es muy útil entender para nosotros que la pina de código se puede comportar de una manera muy diversa. ¿Ok?

Pero que también las pilas de código de los proyectos se pueden comportar de manera muy, muy diversa. ¿Ok? Perfectamente puede pasar que en un segmento de código la regla se rompa y la regla se rompa.

Pero al final se conjuntaron todas las operaciones de entrada y salida. ¿Ok? Y entonces deja caer el rendimiento.

Deja caer la tasa de aprovechamiento, por así decirlo, de ese CPU. ¿Ok? Entonces, no siempre es una regla.

En una ocasión pueden pasar cosas como estas. ¿Ok? Y en otra ocasión puede ser que empecemos más bien con muchas operaciones de entrada y salida y entonces eso nos hace que la regla empiece a cambiar quizás a un 5% de aprovechamiento y 95% de desperdicio.

¿Dónde, por ejemplo, vemos aplicaciones como esas? Como ese ejemplo que les estoy mencionando. Bueno, cuando usted, por ejemplo, hace un filtrado, vamos a ver, digamos que hacemos una consulta, vamos a seleccionar los estudiantes de la una del campus Arapaquí que estudian informática.

¿Ok? Entonces, ¿qué es lo que hacemos? Primero, accedemos a la tabla de estudiantes.

¿Cuánto cree que pesa la tabla de estudiantes? ¿Cuántos registros cree que tiene la tabla de estudiantes de la Universidad Nacional? Échale un cálculo, a ver.

Bueno, tiene como unos 40 mil, más o menos. ¿Ok? Podría tener, no, como unos, yo creo que la UCR anda como en 40 mil, la una puede andar como unos 40 mil, más o menos.

Entonces, imagínense que tiene unos 28 mil. ¿Ok? Es decir, eso no lo puede cargar todo, no lo puede cargar todo, la tabla no lo puede cargar toda, va cargando por cantidad de registros.

Entonces, carga los registros de apellidos con A, luego carga los registros de apellidos con B, etc. Cuando cargó los registros de apellidos con A, entonces va a empezar a revisar donde diga campus igual a Salapiquí. ¿Ok?

Entonces, no puede hacer toda la consulta, él no puede traer toda la tabla, el bloque de registros. ¿Ok? Entonces, es la misma instrucción que se ejecuta reiteradas veces en un ciclo por una lectura porque necesito ir a traer otros registros más, colocarlos en memoria para poder hacer la valoración.

Entonces, este tipo de operaciones, en ese momento, en ese momento específico de esa tarea, la tasa de desperdicio va a sobrepasar el 95%, tenganlo por seguro. ¿Ok?

### Orador 2 · `59:42 - 59:43`

¿Claro? Claro, sí, clarísimo, hasta aquí.

### Orador 3 · `59:54 - 59:54`

Una pregunta.

### Orador 1 · `59:56 - 59:56`

Ajá.

### Orador 3 · `59:57 - 1:00:00`

Lo que sería la monoprogramación ya no se utiliza hoy en día.

### Orador 1 · `1:00:02 - 1:01:17`

La monoprogramación ya no se utiliza hoy en día absolutamente para nada. Ni siquiera en software empotrado, hace un tiempo había algunas aplicaciones de software empotrado, pero ya no se usan, ¿verdad? ¿Por qué?

Porque las aplicaciones, si van a interactuar, van a estar recibiendo y enviando, comunicando y recibiendo información. ¿Verdad? Entonces, inevitablemente, tiene que ser de carácter multiprogramado.

¿Ok? Bueno, vamos a hablar de un concepto importante acá de una vez ya que tenemos este escenario, ¿Ok? Que es la ráfaga.

¿Ok? La ráfaga es una representación gráfica de aprovechamiento del CPU.

### Orador 2 · `1:01:25 - 1:01:25`

¿Me dices si se lee?

### Orador 17 · `1:01:34 - 1:01:36`

¿Será que puedes escribirlo más grande? Es que no se lee.

### Orador 1 · `1:01:38 - 1:02:33`

Ok, muy importante, pero no me digan hasta que termino porque si no, una representación gráfica de aprovechamiento del CPU. ¿Ok? ¿En qué consiste una ráfaga?

Consiste en algo como esto. Vamos a hacerla acá. Una ráfaga puede tener tres formas.

### Orador 8 · `1:02:51 - 1:02:52`

Esta.

### Orador 14 · `1:03:11 - 1:03:13`

O esta otra.

### Orador 1 · `1:03:14 - 1:08:13`

¿Ok? En el caso uno, diríamos que es, bueno, ¿Qué es lo que esta línea de tiempo expresa? Esta línea de tiempo lo que refleja es esto de acá.

¿Ok? Eso es lo que refleja la ráfaga. Una línea de tiempo.

El momento, el momento que ese, el momento que ese proceso tuvo la CPU. ¿Ok? ¿Y qué es lo que vamos a decir sobre el tiempo que ese proceso tuvo la CPU?

Que si se comporta como esto, esto es, para agarrarlo a besos, es decir, esto es el escenario ideal. ¿Por qué? Porque quiere decir que el proceso realmente hizo una, una gran utilización de el CPU.

Del tiempo que se lo asignaron, él prácticamente lo aprovechó al máximo. ¿Dónde hay un ejemplo de eso? Aquí.

¿Lo ven? ¿Qué pasó? Vean.

Él realmente no tuvo ninguna operación de entrada y salida. Entonces, ¿Qué fue lo que hizo en ese periodo que le correspondió? Pues realmente lo que le correspondió fue hacer puras tareas CPU.

¿Ok? ¿Dónde pasaría algo como esto? ¿Dónde pasaría algo como esto?

Bueno, imaginémonos que nosotros ejecutamos este segmento. ¿Ok? Imaginémonos que nosotros decidimos, decidimos ejecutar este segmento.

Ok, esto lo vamos a traer para acá. Este ejemplo va a ser este de acá, en el cual decidimos ejecutar este segmento. ¿Qué pasó?

Él entró al CPU, pero estas instrucciones que tenía aquí, estas tres, las hizo, pero así, voladas. ¿Y después qué pasó? Que se murió, se durmió con esa operación de espera por entrada y salida.

¿Ok? Entonces, ese es un ejemplo de esa instancia de ejecución. ¿Ok?

Imagínense que en esa iteración, que si este proceso hubiese sido esta selección de pila de código, entonces esas tres instrucciones las hace rapidísimos y esta, que es de entrada y salida, ahí se durmió. Tardó demasiado. ¿Ok?

Y la tercera, la tercera que tenemos acá es una en donde probablemente hubiésemos escogido hacer esto. ¿Ok? ¿Qué nos muestra?

¿Qué nos muestra esta ráfaga? Nos muestra que se empezó a ejecutar y que estaba en un tope de hacer cosas y las CPU se las quitaron. ¿Pero qué?

Pero él todavía tenía, él todavía tenía para, todavía tenía contenido para seguir avanzando en ejecución sin necesidad de encontrarse una operación de espera por entrada y salida. ¿Ok? ¿Les quedan claras las tres, los tres modelos de ráfaga que tenemos?

Una, en donde decimos que todo eso se ejecute, entonces hay un aprovechamiento máximo. Probablemente aquí anteriormente hubo una operación de entrada y salida y posterior a él una operación de entrada y salida. Un caso dos, en donde la ráfaga del tiempo que se le hacía a la CPU solo aprovecha en el arranque después lo desperdicia.

¿Qué pasó? Tenía tareas por hacer pero se encontró al final una operación de espera por entrada y salida. ¿Ok?

Y se durmió ahí esperando. ¿Ok? Otra, un escenario en el cual tengo mucho por hacer sin necesidad de ir externamente a recoger cosas pero me detienen, me truncan y entonces la siguiente vez voy a arrancar probablemente la continuación la continuación de esta de esta ráfaga será algo como esto, así.

Esa sería la segunda iteración que le den al CPU probablemente será algo como eso. ¿Ok? Entonces esos son tres escenarios posibles de ráfaga que ocupamos manejar para poder entender cómo hacer una asignación correcta.

### Orador 13 · `1:08:13 - 1:08:19`

Profe, disculpe, ¿me puede decir otra vez el concepto del caso 2 y el caso 3, por favor? El caso 2. Y el 3, por favor.

### Orador 1 · `1:08:19 - 1:09:48`

Ok, el caso 2 lo primero que nos dice esta lectura de ráfaga que sí se utiliza pero solo en el inicio y muy poco y después hay un desperdicio. ¿Qué pasó ahí? Probablemente es este caso acá.

Vamos a numerarlo para que les quede claro. ¿Ok? ¿Cuál es el caso 2?

Ejecuta tres instrucciones pero lo hace muy muy rápido y después se encuentra una de entrada y salida que lo induce a una a un adormecimiento ahí en el cual no está aprovechando el CPU. ¿Por qué? Porque está yendo a traer cosas.

¿Ok? Y el caso 3. ¿Ok?

El caso 3 es este. Se escogió para esta instancia de ejecución para este bloque se escogió que se ejecutaran solamente esas tres instrucciones pero esas tres instrucciones obedecen a hacer cosas con datos que ya tienen. Entonces no tiene que ir a traer nada nunca.

Entonces ¿Pero qué es lo que pasa? Que son operaciones muy o sea que consumen mucho hacer. ¿Ok?

Es decir son operaciones muy lerdas y entonces por lo tanto consumen mucho CPU lo consumen todo y todavía queda para la siguiente corrida otra vez sin necesidad de hacer una operación de espera por entrada y salida. ¿Ok? ¿Se queda claro?

### Orador 13 · `1:09:50 - 1:09:51`

Sí, profe. Muchas gracias.

### Orador 1 · `1:09:52 - 1:09:52`

Listo.

### Orador 2 · `1:09:53 - 1:09:54`

Ok. ¿Alguna otra duda?

### Orador 1 · `1:10:03 - 1:10:22`

Ok. Vamos a hacer una pausa para ir a buscar algo de comer y regresamos como entre unos 20 minutos ¿Les parece? Voy a detener la grabación para que no quede ese huecarón.

### Orador 3 · `1:10:24 - 1:10:24`

¿Estamos?

### Orador 8 · `1:11:04 - 1:11:05`

¿Me escuchan?

### Orador 2 · `1:11:10 - 1:11:10`

Ok.

### Orador 7 · `1:11:55 - 1:11:56`

Ok.

### Orador 1 · `1:12:35 - 1:17:37`

Bueno. Normalmente normalmente se consigna en alguna bibliografía que este estado que tenemos acá que este estado que tenemos acá Eh, profe creo que hay un compañero que que ocupa entrar a la reunión me parece. Vamos a ver.

No. Ya todos están admitidos. Ok.

En alguna bibliografía se consigna este estado como bloqueado. En realidad el estado bloqueado es una condición muy particular en la cual un proceso eh incurre pero después de que hemos hecho un análisis muy exhaustivo para determinar que efectivamente está en esa condición. Ok.

Entonces, por ejemplo les voy a decir bueno eh imaginémonos que aquí está Junit entonces que le decimos eh eh ¿Junit cómo está? Le hacemos tres llamadas a Junit no contesta. Le enviamos un un eh un mensaje de texto no contesta.

Le mandamos un mensaje este eh le ponemos la ponemos en una sala privada a ver si reacciona y nada. Entonces hicimos tres aplicamos tres estrategias y por ninguna de las tres fue posible este que ella reaccionara. Entonces ahí sí podemos decir que ese proceso está en un estado bloqueado.

Ok. Pero en condiciones normales este no es el nombre con el cual nos referimos a ese estado. Ok.

En realidad el el nombre correcto es espera por entrada y salida. Ok. Es decir, lo que decimos es que el proceso va a ir a esa a ese estado porque está esperando eh la respuesta o la o la o ser atendido por algún dispositivo.

Ok. Bueno. En condiciones normales en condiciones normales tenemos eh dos planificadores que son importantes.

Ok. Diríamos que aquí el planificador de corto plazo. Ok.

¿Qué se encarga? Se encarga básicamente de de este contexto que está acá. Ok.

De eso se encarga el planificador de corto plazo. Es decir, esta es aquí es donde se llevan a cabo los algoritmos de asignación principalmente para elegir cuál de todos los procesos que está dentro del ciclo entra a ejecución. A esto ¿verdad?

A esto le podemos denominar el ciclo de ejecución. Ok. Es decir, cualquier proceso que esté aquí decimos que está en el ciclo de ejecución.

Ok. Si no está aquí ¿dónde está? Si no está aquí o ya salió o ok o está en la cola de solicitudes.

Por lo tanto decimos que quien se encarga de esta sesión es el planificador de largo plazo. Es decir, ¿qué regula? El planificador de largo plazo regula la cola de solicitudes.

Ok. Y el planificador de corto plazo es el que decide quién entra a ejecución. Entonces entendiendo esto de esta manera vamos a tener muy claro que esta cola de listos perdón este estado de listos ¿qué es lo que vamos a tener acá?

Lo que vamos a tener acá es una lista de procesos esperando a ser ejecutados. Ok. Y entonces ¿por qué en algún momento hablamos de ciento y resto de procesos en el ciclo?

unos van a estar acá y otros evidentemente van a estar acá.

### Orador 2 · `1:18:05 - 1:18:05`

¿Se lee bien?

### Orador 1 · `1:18:11 - 1:18:46`

¿Se logra leer? ¿Se logra leer o no? Ok.

¿Está bien? Tienen que decir porque si no mejor.

### Orador 2 · `1:18:49 - 1:18:54`

¿O no se ve? Ahí sí se ve profe.

### Orador 1 · `1:18:55 - 1:21:06`

Ok. Gracias. Ok.

Ahí tenemos algunos ejemplos de dispositivos de entrada y salida. Disco duro, teclado, mouse, impresora, monitor, lectores ópticos, zip drives, etc. Ok.

Vamos a agregar un escáner ahí. Ok. Entonces lo que diríamos es que yo tengo una lista de peticiones de cada uno de esos recursos entendiendo por supuesto que el que más se va a saturar siempre es el disco duro.

Ok. Entonces ya ahora nuestro contexto de ejecución ya nuestro contexto de ejecución ya se amplía. Ok.

Ahora todo esto que está aquí es nuestro contexto de ejecución. Ok. Entendiendo por supuesto que esta lista es bien extensa.

Ok. Ahí ahora sí podemos ya tener una dimensión, una imagen de los más menos ciento y resto de procesos que están siempre en el ciclo de ejecución. Ok.

Hasta ahí estamos claros y claras.

### Orador 3 · `1:21:14 - 1:21:18`

Profesora, ¿qué puede explicar lo que era el planificador de largo plazo?

### Orador 1 · `1:21:18 - 1:21:19`

¿Lo que era?

### Orador 3 · `1:21:21 - 1:21:23`

El planificador de largo plazo.

### Orador 1 · `1:21:23 - 1:22:31`

Ah, ok. Es que usted se está adelantando ahí hasta este momento. En realidad por ahora lo que nos interesa conocer es este ¿qué es nuestro a qué es lo que llamamos nuestro contexto de ejecución?

Ok. Es decir los procesos que están en listos más los procesos que están en espera entrada y salida que en espera entrada y salida aquí no va a haber nada. Es decir todo va a estar asignado de una vez a cada dispositivo.

Ok. Por lo tanto esto lo vemos de esta manera. Ok.

Cualquier proceso que esté esperando por algún dato de esos recursos va a estar en espera por entrada y salida. Ok. Entonces aquí vamos a tener muchos procesos y en ejecución ¿cuántos tendríamos?

Un único proceso. Ok. Solamente vamos a tener un proceso.

Ok. Entonces por ahora eso es lo que nos tiene que quedar claro. ¿Tenemos alguna duda hasta ahí?

### Orador 8 · `1:22:38 - 1:22:39`

¿Hay alguna duda hasta aquí?

### Orador 1 · `1:22:40 - 1:23:17`

Ok. El planificador de corto plazo pues prácticamente su función prioritaria está en decidir de esta lista que está aquí quién es el siguiente en ese turno para entrar aquí a ejecutarse. Entonces empezamos.

Ok. Cuando el planificador de corto plazo selecciona un proceso ese proceso entra a ejecución.

### Orador 2 · `1:23:23 - 1:23:24`

Ok.

### Orador 1 · `1:23:24 - 1:25:55`

Entonces el paso uno el planificador de corto plazo selecciona al proceso. Ok. Eso es lo que pasa en este caso.

El planificador le dijo al proceso A ingrese a ejecución. Ok. En un momento aquí hay dos posibilidades.

Paso dos o el paso tres. Una vez que estoy en ejecución tengo dos posibilidades. Una es una es ir a espera por entrada y salida o devolverme de nuevo a la cola de listos en cuyo caso si me devuelvo a la cola de listos otra vez lo que el planificador va a hacer me va a decir bueno usted se va a acomodar de acuerdo a la política que estemos utilizando en ese momento.

Ok. Primero vamos a resolver el tema del paso dos. Ok.

Recuerden en la pila de código en la pila de código hay instrucciones en las cuales nos encontramos que pero me puedo encontrar una instrucción de que me obligue a ir a un dispositivo de entrada y salida. Ok. Si estoy obligado a ir a un dispositivo de entrada y salida pues entonces en ese momento inevitablemente yo voy a recurrir a esto.

Ok. Entonces depende de la política de planificación puede ser de que yo venga acá como parte del tiempo de mi ráfaga. Ok.

En cuyo caso pasa algo como esto podría pasar algo como esto. Ok. Puede ser que yo venga ahí en el tiempo de mi ráfaga.

### Orador 2 · `1:25:55 - 1:28:05`

Deme un momentito por favor, perdón. Ok. Entonces acá la verás esta tal vez sí.

### Orador 1 · `1:28:08 - 1:28:55`

Ok. Entonces les decía la verdad que dentro de aquel bloque dentro de aquella pila de código me encontraba que esto era una operación de entrada y salida. Ok.

Entonces esto iba a tener este comportamiento. Entonces si dentro del tiempo si dentro del tiempo de el CPU yo me dice no vaya vaya a traer lo que necesita entonces va a pasar algo como esto. Ok.

En cuyo caso estamos haciendo definitivamente un desaprovechamiento del CPU. ¿Por qué? Porque aquí el CPU está inactivo.

Ok. Entonces ese es el escenario 2. Ok.

### Orador 2 · `1:29:03 - 1:29:03`

Ok.

### Orador 7 · `1:29:04 - 1:29:49`

El Ok.

### Orador 1 · `1:29:50 - 1:31:59`

Entonces lo que pasa es que el proceso encuentra en su pila de código de ejecución una operación de espera para entrar y salir. Ok. Y entonces ese proceso se fue y se durmió.

Ok. Eso va a ser el paso 2. Y el paso 3 que también puede pasar que un proceso que está en ejecución se ha enviado de nuevo listo.

¿Por qué? Porque ahora el escenario es que está en mi pila de código. Ok.

Entonces lo que está pasando con este proceso es esto. Él viene y en ese bloque va a ejecutar esto. Ok.

En ese bloque va a ejecutar eso. Entonces no hay ninguna operación de entrada y salida. Entonces él es devuelto a la cola de listo.

¿Por qué? Porque él todavía tiene los insumos para poder continuar ejecutando. Entonces ya con esto podemos entender que quienes se encuentran en la cola de listos procesos usted lee.

Ok. Quienes se encuentren en la cola de listos van a ser aquellos procesos que tienen datos para procesar. Ok.

¿Estamos claros hasta aquí?

### Orador 3 · `1:32:03 - 1:32:05`

¿Qué pasa con los que finalizan?

### Orador 1 · `1:32:05 - 1:32:06`

No lo escucho.

### Orador 3 · `1:32:07 - 1:32:09`

¿Qué pasa con los que finalizan?

### Orador 1 · `1:32:10 - 1:32:48`

Todavía no. Miren. Bueno.

Esa es una muy buena pregunta. ¿Cuántas veces creen ustedes que pasa un proceso por todo este ciclo? Un proceso puede pasar por este ciclo 700 o 800 veces.

Ok. Es decir finalizar es una excepción. Ok.

Es decir eso ni siquiera nos interesa. ¿Qué nos interesa? La lógica de todo lo que va a pasar con ese proceso siendo parte de toda esa interacción.

Ok. ¿Estamos hasta ahí?

### Orador 2 · `1:32:50 - 1:32:51`

¿Alguna duda?

### Orador 17 · `1:32:57 - 1:33:10`

Profe y cuando un proceso digamos tenga una entrada un dato digamos que que ocupa eso pasaría a la a la cola de listos.

### Orador 1 · `1:33:10 - 1:34:08`

Ok. Voy voy voy voy. Primero primero primero estamos entendiendo estos dos escenarios por ahora.

Por ahora estos dos escenarios. El proceso fue aquí porque en su pila de códigos se encontró en de acuerdo las instrucciones que él iba a ejecutar se encontró una operación de espera por entrada y salida. Ok.

Pero si no se encuentra en ninguna operación de entrada y salida y le dicen bueno usted va a ocupar estas cinco instrucciones y en ninguna de ellas hay una operación de entrada y salida ¿a dónde va a ser devuelto? Va a ser devuelto al estado de listos. Ok.

Porque todavía tiene los datos para seguir avanzando. Ok. Eso es por ahora lo que nos tiene que tener lo que nos tiene que quedar claro.

Las dos las dos instancias en el caso de que el proceso sale de ejecución es decir cuando sale de ejecución tiene dos caminos. Ok. Uno ir a espera por entrada y salida y la tercera venir a listos.

Ok. Estamos hasta ahí. Dame un momentito.

### Orador 2 · `1:34:08 - 1:41:10`

Perdón es que alguien me está tratando de llamar hace rato. Ok. Seguimos.

Entonces.

### Orador 1 · `1:41:11 - 1:45:53`

Bueno. Disculpen es que era una llamada de la U. Ok.

Entonces ya tenemos claro con el caso uno por ahora no hay mayor magia ¿verdad? Porque todavía no estamos no hemos entrado en el mundo del planificador. Ok.

Por ahora nada más lo que sabemos es que el Juliano dijo este o este o aquel cualquiera pero él simplemente apuntó a uno y ese entra a ejecución. Ok. Caso dos dentro de su pila de código nos encontramos una excepción entrada y salida por lo tanto sucede que va a cualquiera de los dispositivos.

Y caso tres el proceso dentro de la pila de código el conjunto de instrucciones que se va a ejecutar para esa instancia resulta que no encuentra ninguna instrucción de entrada y salida por lo tanto él tiene los datos para continuar avanzando en ejecución por lo tanto es devuelto a la cola de listos. Hasta ahí estamos clarísimos. Ahora vamos con el caso tres.

Ok. Lo primero que tenemos que entender es que eh yo no puedo decir ¿verdad? Yo no puedo decir mágicamente que este proceso pasa a la cola de listos.

Ok. Porque esto no funciona así. Ok.

Quiere decir no es por obra y magia del Espíritu Santo. No. Ok.

Cuando un proceso cuando un proceso llega a la cola de espera por entra y salida inmediatamente es colocado inmediatamente él es colocado en vamos a ver el caso más frecuente. Ok. El caso más frecuente es que él es colocado en la lista de espera por entra y salida de ese recurso.

Para ser más precisos él es enviado a la cola de él es enviado a la cola de atenciones de ese de ese recurso. Ok. Y ahí se va a quedar y el CPU ya está atendiendo otro porque el planificador ya le dijo ok como ya lo sacó atiéndame a este otro.

Ok. Y es lo que va a hacer el planificador. Aquel vulano que está ya haciendo fila va a empezar a adelantar este y en algún momento finalmente va a ser atendido.

Ok. ¿Cuántos han pasado por aquí por ejecución? Muchos.

Muchos. Muchísimos de esos ya han pasado por ahí por ejecución. Ok.

Cuando este cuando este dispositivo atendió la petición cuando atendió la petición le notifica le notifica al planificador de corto plazo que la petición ya está atendida y en ese momento es cuando el planificador dice este proceso va a pasar a esa ola de listos. Ok. Y esto lo vamos a dejar esto lo vamos a lo vamos a dejar así.

Esto va a venir aquí pero probablemente esto va a tener ¿Eso qué quiere decir? Que él va a tomar la posición dependiendo de lo que el planificador le diga. Dependiendo de lo que el planificador le diga.

Es decir, el planificador le va a decir ¡Ah! ¿Usted Julano y tal? ¡Ah!

¿Usted se llama Luis? ¡Luis! Usted váyase a la posición 7.

Ok. Pero después vino después vino Yancarlo. Yancarlo Usted váyase a la posición 14.

Ok. Después vino Rolving. Rolving Usted váyase a la posición 2.

Ok. Por ahora ¿Qué nos interesa? Que este Julano decide de esta lista que está aquí ¿Dónde va a ir ubicado ese proceso?

Ok. Perfectamente puede pasar que va a ir al final de la ola. Pero la decisión es del planificador el planificador es quien decide.

Y pues prácticamente la decisión donde lo colocó es obedeciendo a cómo él está jugando para decidir quién es el próximo que entra a ese ciclo. Ok. Entonces Don Jordan ¿Cuándo es que un proceso pasa de espera a listo?

### Orador 4 · `1:45:56 - 1:45:58`

Cuando el planificador le indica ¿no?

### Orador 1 · `1:45:59 - 1:45:59`

No señor.

### Orador 4 · `1:46:01 - 1:46:08`

O cuando termina de conocer su tarea que tiene que hacer el señor.

### Orador 1 · `1:46:09 - 1:46:48`

Don Pedro ¿Cuándo es que un proceso va de espera a listo? Perdimos a Pedro. Randy ¿Cuándo un proceso va de espera a listo?

Don Arturo ¿Cuándo un proceso va de espera a listo?

### Orador 6 · `1:46:55 - 1:47:02`

Lo que entendí es que cuando el planificador de corto plazo soluciona el proceso digamos lo gestiona.

### Orador 1 · `1:47:02 - 1:47:05`

No señor. Axel ¿Cuándo va de espera a listo?

### Orador 6 · `1:47:06 - 1:47:17`

Profe cuando se ha terminado la solicitud de entrada y salida pasa directamente a a la cola de listo bueno a echarlo o colocar dependiendo Ok.

### Orador 1 · `1:47:17 - 1:47:18`

¿Vuelvo a repetir eso por favor?

### Orador 6 · `1:47:21 - 1:47:36`

Vamos el proceso pasa a la cola de listos cuando ha efectuado ya la solicitud de entrada y salida cuando se ha completado tibio tibio Don Kevin ¿Cuándo pasa de espera a listo?

### Orador 1 · `1:47:48 - 1:47:51`

Jeylan ¿Cuándo pasa de espera a listo?

### Orador 5 · `1:47:52 - 1:47:58`

Profe tenía más o menos la noción de lo que acaba de decir Axel pero ahí sigo tibio entonces no tengo la respuesta en concreto.

### Orador 1 · `1:47:59 - 1:48:00`

¿Cuál es la respuesta que usted tiene?

### Orador 5 · `1:48:01 - 1:48:23`

Sí profe igual que digamos cuando cuando ya se se ejecutaban las instrucciones de digamos de entrada y salida Ojo Jeylan en entrada y salida en entrada y salida no ejecutamos absolutamente nada ¿Ok? Ok ¿Le quedó claro?

### Orador 1 · `1:48:24 - 1:51:49`

Sí sí profe Clarísimo clarísimo en espera por entrada y salida jamás se ejecuta nada nunca vamos a ejecutar nada ahí ¿Ok? Entonces ¿Por qué tibio? Porque estamos diciendo que él va a salir de espera por entrada y salida para ir a listo cuando el dispositivo que atendió la petición ha indicado que ha finalizado y por lo tanto le comunica al planificador para que el planificador entonces lo cambie a una posición en la cola de listos ¿Ok?

Entonces ¿Cómo es que un proceso sale de espera por entrada y salida a listo? ¿Quién es quien es el que inicia eso? Pues el dispositivo que atendió la petición él es el único que lo puede sacar de esa condición entonces ¿Dónde va a empezar?

El dispositivo de espera por entrada y salida que atendió la solicitud le indica al planificador de corto plazo que ya está resuelto para que sea colocado en la cola de listos ¿Ok? Entonces ¿Quién lo saca él de esa condición? El dispositivo de entrada y salida ¿Jaylan?

¿Clarísimo? Sí, pero ahora sí no han dado pero ni cerca Ok, ok Entonces ¿Verdad? O sea lo que tienen que entender es que vamos a ver imagínense que yo le asigno una tarea a Jaylan ¿Verdad?

Y yo le digo a Jaylan Jaylan Cuando termina cuando termina se la da a Luis Yo me desentiendo ¿Quién es el encargado de trasladarle ahora el asunto a Luis? Jaylan ¿Ok? Por lo tanto el único encargado el único que puede sacar a un proceso de la condición de espera por entrada y salida es el dispositivo que atendió la solicitud y que ha confirmado que la solicitud fue atendida ¿Ok?

¿Y a quién le notifica eso? Al planificador de corto plazo Claro, o sea hasta ahí Vean es importante que hagan ese ejercicio es importante que hagan ese ejercicio porque si no se pierden si no se pierden entonces al examen ¿Verdad? Ya en el examen va empiezan a decir cosas ¿Verdad?

Como que el dispositivo de entrada y salida procesa cosas No El dispositivo de entrada y salida no procesa absolutamente nada Simplemente atiende una petición ¿Ok? Y cuando concreta la petición le comunica al planificador de corto plazo para que lo ubique en el lugar que le corresponde en la cola de listos ¿Ok? Entonces pareciera ser que nuestro ciclo ya está resuelto ¿Verdad?

El proceso llega listo de listos escogido el planificador dice Ok Pase usted a ejecutarse ¡Pum! Se fue a ejecución En ejecución tengo dos posibilidades Cuando me encuentro una operación de entrada y salida en la pila de código que estoy ejecutando y por lo tanto es asignado a un dispositivo o no tengo no me encuentro ninguna operación de entrada y salida continúo puedo continuar ejecutándose pero me dicen ¡Pare! ¡Ya detenga!

¡Váyase! ¡Salga! Entonces en ese caso voy a listo hago caso voy a listo ¿Por qué listo?

Porque todavía tengo para avanzar en ejecución ¿Ok? Ese es el escenario normal Si todo sale bien si todo sale bien eso se va a cumplir ¿Alguna duda?

### Orador 3 · `1:51:50 - 1:52:00`

del ciclo de ejecución Si yo tengo una propia ¿Puedes hacer un toquituito? Listo

### Orador 1 · `1:52:00 - 1:52:02`

Perdón hay alguien que casi no escucho

### Orador 3 · `1:52:03 - 1:52:13`

No sé si me escucha ahí Sí, ahora sí Bueno en el proceso de ejecución cuando él se va Perdón, perdón

### Orador 1 · `1:52:13 - 1:52:18`

es que no puedo hablar un poquito más duro voy a decir eso del volumen Dígame

### Orador 3 · `1:52:19 - 1:52:27`

Voy a poner voy a poner la boca en el micrófono Bueno, de listo como si fuera una birra

### Orador 1 · `1:52:27 - 1:52:30`

agarra ese micrófono como si fuera una birra Dale

### Orador 3 · `1:52:30 - 1:53:03`

De listo pasa a ejecución pero en ejecución tiene dos caminos que es en espera y listo pero, por ejemplo cuando en espera termina lo bueno, termina la parte de ahí que ya después sería que se va al planificador de corto plazo pero el planificador de corto plazo decide en qué parte de listo lo pone bueno, en qué posición de espera de listo lo pone en el caso de ejecución cuando él de una vez decide que que está listo ok, lo detiene pero todavía le falta entonces quién quién decide la posición

### Orador 1 · `1:53:04 - 1:54:50`

Buenísimo, buenísimo buenísimo ok excelente pregunta ok esto sucede exactamente igual ok si le corresponde al 3 va a ser exactamente esto mismo ok siempre siempre que que que un proceso va a la cola de listos el planificador le dice ok, un momentito espérese ahí que yo soy el que lo acomoda yo soy el que le digo a usted dónde va a ir ok ahora ese ese dónde va a ir usted perfectamente puede pasar que bueno que usted en este momento está lo mandaron a esta posición ok pero de un pronto a otro puede ser que el planificador diga bueno vamos a parar un momento vamos a parar todo un momento para para todo el mundo para todo lo que está haciendo ya no vamos a jugar por el de tal manera que aquí va el primero el más el más pequeñito y aquí el más grande no, ahora vamos a cambiar ahora vamos a jugar por edad a ver cada uno qué edad tiene y empiezo a organizarlos ¿cómo?

¿de mayor a menor o de menor a mayor? ok escoge una solución y ordena lo que quiero decir es que el planificador está este modelo de ordenamiento no está escrito en piedra ok está completamente sujeto a modificaciones él en un momento juega con una política y de un pronto a otro dice paremos todo ahora vamos a cambiar y ahora vamos a utilizar esta otra estrategia ok la pregunta del millón de colones es ¿por qué creen ustedes que el planificador estaría jugando con ese cambio de políticas? ¿cuál es la intención?

### Orador 3 · `1:54:55 - 1:55:08`

yo digo que si solo se queda en un en un método de ordenamiento después genera patrones y habría procesos que se quedarían al final de la colación ok entonces ¿qué es un patrón para usted?

### Orador 1 · `1:55:08 - 1:55:09`

cuénteme

### Orador 3 · `1:55:10 - 1:55:46`

por ejemplo digamos que yo lo es que no sé voy a hacerme un patrón así muy sencillo por ejemplo de dos en dos de dos en dos si yo intento ordenar algo por por números por números divisibles divisibles entre dos al final del cabo va a llegar a un punto en que tal vez los números más bajos me van a quedar de primero y ya los números más más altos tal vez cien, doscientos dos mil van a quedar al final siempre y esos procesos van a terminar durando más

### Orador 1 · `1:55:46 - 1:56:57`

le voy a poner un ejemplo más sencillo le voy a poner un ejemplo más sencillito que ese patrón tan tan helado que usted menciona vean imaginémonos que estamos organizándonos que estamos organizándonos por por tamaño ok y aquí tendríamos mayor ok y aquí tendríamos el menor ok resulta que este es el proceso ciento veinte este que está aquí es el proceso ciento veinte ok desgraciadamente parece que es uno de los más chiquitillos ok porque está al puro final casi ok que creen ustedes que va a pasar la siguiente vez que ese proceso ciento veinte ok en alguna hora ese proceso pum cayó a ejecución ok y si cayó a ejecución muy probablemente en algún momento va a llegar de nuevo al planificador y que creen ustedes que va a pasar con ese proceso donde lo van a colocar

### Orador 8 · `1:57:07 - 1:57:09`

don Luis donde lo colocaría usted

### Orador 2 · `1:57:17 - 1:57:18`

como fue la pregunta profe

### Orador 1 · `1:57:22 - 1:57:45`

vamos a ver doña Carlo donde lo colocaría usted don Jordan donde lo colocaría usted

### Orador 4 · `1:57:49 - 1:57:50`

ok

### Orador 1 · `1:57:51 - 1:58:13`

caería en los últimos probablemente no de último pero probablemente es entre los últimos ¿verdad? pero el proceso nuevamente en algún momento otra vez llegó aquí fue a ejecución sale de espera por entrar y salir el planificador ya lo atendió llegó de nuevo listo ahora ¿dónde va Melanie?

### Orador 8 · `1:58:23 - 1:58:25`

Karina ¿dónde lo pondría usted?

### Orador 18 · `1:58:29 - 1:58:47`

después de listo profe ¿perdón? después de listo dijo usted que ya llegó a listo y ¿dónde lo pondría? ajá es que no sé si tiene que repetir el ciclo por esa ejecución por eso pero ¿dónde lo pondría?

### Orador 1 · `1:58:50 - 1:58:51`

don Axel ¿dónde lo pondría usted?

### Orador 6 · `1:58:56 - 1:59:02`

dirigiéndome por la condición diría que vuelva a caer de último ok ok entonces ¿qué pasó?

### Orador 1 · `1:59:02 - 2:02:55`

¿qué pasó? tres veces tres veces que ese proceso llegó aquí y le costó un mundo llegar aquí salió fue y cuando llegó otra vez se repite la historia para él y pasa por lo mismo en algún momento llega finalmente a listo llega finalmente a ser el primero entra a ejecución va del ciclo y llega y otra vez le toca entonces ¿qué está pasando? que los planificadores si se perpetúan entonces pueden generar una condición desfavorable para algunos procesos por eso es que los planificadores constantemente se están cambiando ¿para qué?

para evitar que este proceso 120 que le ha ido tan mal en la vida en algún momento ese proceso sea favorecido ok ahora si estamos claros ¿por qué es importante? porque es importante que este planificador tenga varias estrategias y no solamente que tenga varias sino que las alterne ok y que pueda y sepa realmente como poder combinarlas ok esto es importantísimo ok ¿estamos claros y claras? bueno vamos a hacer un ejercicio como ya tenemos muy muy claro el contexto de ejecución como ya tenemos muy claro el contexto de ejecución vamos a hablar de un principio fundamental ok ok vamos a hablar de estos dos principios la tabla de procesos y el bloque de control de proceso ok como pueden ver aquí hay una sutil diferencia esa está en plural y esa está en singular ok ¿por qué?

porque la tabla de procesos es información general de todo el contexto mientras que el bloque de control de proceso es información específica es decir es información personal de ese proceso ok por ejemplo yo le diría ¿podrías explicar la tabla? es que se me quedó pegado un toque listo ajá ok ok ok la tabla de procesos por eso está en plural porque habla de un de un estado de la situación de todos los procesos que están en ese ciclo ok mientras que el bloque de control de proceso ese bloque lo que me va a dar información a mí es del proceso 120 ok entonces les voy a dar un ejemplo ok Don Brian Don Brian ¿cuál es su número de cédula? Don Edwin ¿cuál es su número de cédula?

### Orador 19 · `2:02:55 - 2:03:08`

Don Edwin 7272161 ¿cuál es su número de teléfono? Edwin 6281 2262 ¿cuál es su dirección?

### Orador 1 · `2:03:10 - 2:04:46`

Riofrío Finca 11 ok bueno vean que me acaba de dar tres indicadores tres variables que esas variables no son generales esas variables son de el proceso que se llama Edwin ok pero por ejemplo ¿qué variables pueden ser de carácter general? yo podría decir ¿cuál es el promedio de edad de esta clase? ok entonces cada uno de ustedes indica la edad y obtenemos una variable que es general que se llama promedio de edad ok igual lo podría hacer yo con estatura vamos a hacer un promedio de estatura cada uno pone su eh medición y con eso sacamos un promedio son variables del contexto son variables que nos atañen a todos ok pero si yo le pregunto don Edwin ¿a qué hora se ingresó usted?

a las 8 ok eso es una variable particular ¿por qué? porque hubo alguien que entró a las 7.45 hubo alguien que entró a las 8.10 ok entonces lo que nos interesa aquí es diferenciar ¿qué es? ¿qué información es de la tabla de procesos y qué información es del bloque del control de proceso?

ok ¿lo tenemos bien claro hasta el momento? ¿no hay ninguna duda?

### Orador 12 · `2:04:47 - 2:04:52`

pero a mí no me quedó claro lo de la tabla de procesos eh ¿por qué?

### Orador 1 · `2:04:52 - 2:04:54`

¿cuál es la duda suya con la tabla de procesos?

### Orador 12 · `2:04:55 - 2:05:01`

el concepto en sí eh ¿entiende el del bloque de control?

### Orador 1 · `2:05:03 - 2:05:06`

sí ok ¿qué tiene por bloque de control de proceso?

### Orador 12 · `2:05:06 - 2:05:20`

es la información de un proceso en específico ok ¿y entonces la tabla de procesos qué sería? entonces eso sería la información de los procesos en sí de los procesos que están en el ciclo en ese instante ¿verdad?

### Orador 1 · `2:05:20 - 2:10:22`

de ejecución ¿ok? ¿por qué? porque yo no puedo decir el promedio de edad eh y estoy considerando estudiantes que estudiaron hace 3 años en este curso no no tiene sentido ¿verdad?

entonces siempre hay que escribirlo a un instante ¿verdad? es es la foto la foto de los Julianos a este momento promedio de edad promedio de estatura eh eh la comida favorita este el tiempo eh el tiempo promedio que que llevan de estar aquí en el ciclo y cosas de ese tipo ¿ok? ¿ahora sí más claro?

sí, muchas gracias ok entonces vamos a hacer un ejercicio voy a hacer 6 alas ¿ok? las alas 1 3 y 5 y las alas 3 2 4 y 6 ¿qué es lo que van a hacer? se van a hacer una tabla una tabla con las variables que podrían ir en la tabla de procesos y estos Julianos una tabla con las variables que podrían ir en el bloque de control de procesos todo lo que ustedes crean que se pueda rastrear de un proceso o rastrear de como como datos generales de todos los procesos que me den alguna información efectiva ¿ok?

entonces voy a hacer las alas y lo que hacen es una tablita nada más con la lista de las variables ¿cómo va todo hermano?

### Orador 2 · `2:10:23 - 2:10:25`

¿pura vida, pura vida? dígame, dígame ¿cálida?

### Orador 1 · `2:10:31 - 2:11:54`

si, wey puta más tonto madre ¿cómo no sea wey ay que torta se jaló wey sea tonto wey hay habría que ver la fecha ¿cálida? si, si, si sea tonto calavera, calavera wey si, si está duro wey, claro si, si bueno, dígame hermano ajá si ajá, ajá ajá no tiene cursos no tiene clases si lo que puede hacer es pedir un permiso sin goce de salario ¿verdad?

### Orador 4 · `2:11:55 - 2:14:05`

si, si es correcto si, si ajá si no, no, no sí, sí, sí ajá bueno, calidad pura vida pura vida ok dígame está muteado pero es que vieras que nos perdimos un poquito pero teníamos que hacer el final y no no hizo la prueba no hizo la prueba y ya descendíamos ajá a ver si lo podía decir bien que era ese problema está muteado perdón, perdón, perdón calidad, ¿en cuál hora estaba?

### Orador 2 · `2:14:05 - 2:26:58`

en las seis a ver si lo puede explicar bien perdón hola, hola, hola Jordan hola, Jordan Jordan, escucha hola, hola ¿cómo le fue?

### Orador 1 · `2:27:03 - 2:27:37`

bien, bien todo bien, profe todo bien ok, ok vamos a ver ¿tienen a vista esta lista? ¿la logran ver? sí, profe ok, listo recuerden que en la evaluación hay un rubro asociado a tareas entonces probablemente nosotros hagamos solamente dos tareas esta va a ser la tarea uno ok ¿en qué consiste esa tarea uno?

### Orador 8 · `2:27:38 - 2:28:17`

ok ¿en qué va a consistir? vamos a instalar ok los dos sistemas gestores de bases de datos, sí y vamos a crear un CRUD

### Orador 2 · `2:28:20 - 2:28:22`

con un ejemplo ok

### Orador 1 · `2:28:31 - 2:28:33`

de campo texto

### Orador 3 · `2:28:33 - 2:28:43`

profe de casualidad de casualidad podría ahorita leer eso es el que ahorita escribía lo de tarea uno para ver si yo lo estoy leyendo ahí claro, claro

### Orador 1 · `2:28:43 - 2:30:10`

ok vamos a instalar los dos sistemas gestores de bases de datos y vamos a crear un CRUD con un ejemplo de texto ok es decir lo que vamos a hacer es que vamos a mandar vamos a hacer bueno, el create ¿verdad? vamos a a mandar a guardar un campo de texto luego vamos a a leerlo de la base de datos luego vamos a eh a actualizarlo y finalmente vamos a borrarlo ok es decir tenemos que posibilitar las cuatro operaciones y nos vamos a organizar de la siguiente manera esto va a ser el grupo uno el grupo dos el grupo tres el grupo cuatro el grupo cinco y el grupo seis ok entonces para la siguiente semana cada grupo se va a encargar de instalar bueno instalar y configurar eh los dos sistemas gestores de bases de datos y hacer un CRUD ok con las con las operaciones este eh básicas ok que sería el insert el insertar un registro de texto el leerlo de la base de datos el modificarlo y

### Orador 8 · `2:30:14 - 2:30:15`

finalmente borrarlo

### Orador 15 · `2:30:24 - 2:30:29`

profe eso con con los grupos creo en la sala anterior correcto

### Orador 1 · `2:30:29 - 2:30:35`

no con los grupos de trabajo que ya tenemos ok cual grupo es usted

### Orador 15 · `2:30:35 - 2:30:36`

el proyecto

### Orador 1 · `2:30:36 - 2:30:38`

cual grupo es usted de proyecto

### Orador 15 · `2:30:38 - 2:30:40`

si no me equivoco el cinco ok

### Orador 1 · `2:30:40 - 2:31:35`

entonces les tocará instalar y configurar el timescale y el MariaDB el grupo dos eh eh eh digamos no estructuradas entonces este eh para que tengan eso en consideración también verdad no todo va a ser sale from work verdad probablemente la consulta vaya a ser una consulta este diferente para ese modelo de bases de datos dígame

### Orador 5 · `2:31:37 - 2:31:44`

este digamos eh por ejemplo con los que le tocaron a uno creo que nosotros somos como el grupo uno si mal no estoy el grupo uno

### Orador 1 · `2:31:44 - 2:31:47`

ok este SQLite y CleanHouse ajá

### Orador 5 · `2:31:47 - 2:31:50`

eh digamos entonces

### Orador 1 · `2:31:50 - 2:31:58`

eh lo instalan lo configuran y hacen un CRUD para conectarse a esa base de datos verdad

### Orador 5 · `2:31:58 - 2:32:04`

pero digamos desde desde así como como sea nativo como una aplicación

### Orador 1 · `2:32:04 - 2:32:16`

no eh vamos a ver si a usted le toca no todo verdad pero por ejemplo Postgres usted se hace una una hay una una una vista en PHP y ahí hace la consulta verdad

### Orador 17 · `2:32:18 - 2:32:20`

ok ok

### Orador 5 · `2:32:20 - 2:32:26`

pero es que me gusta esa esa esa tranquilidad así como le dices es un modelo tan

### Orador 17 · `2:32:26 - 2:32:27`

tan natural

### Orador 1 · `2:32:28 - 2:32:33`

si es que yo le iba a decir que lo hiciera en Python pero probablemente en las sesiones de conexión sean más

### Orador 5 · `2:32:36 - 2:32:43`

no nos trató con la vista en PHP listo buenísimo ay que madre ok

### Orador 1 · `2:32:43 - 2:32:44`

alguna otra duda

### Orador 5 · `2:32:44 - 2:32:45`

no todos

### Orador 1 · `2:32:46 - 2:33:24`

verdad no todos es decir este algunos requieren una interfaz muy elaborada entonces este eh caerán a consola verdad definitivamente pero por ejemplo digamos eh la mayoría de ellos están para para modelos relacionales y entonces le vamos a hacer la vista este la vista eh en en en en aplicación como quieran si quieren hacerlo en JSP en ASP este en ya ya ya ya si quieren trabajarlo un poquito y montarlo en en en en un en en capas o quieren aplicar JSON o AJAX pero verdad como quieran no hay ningún problema

### Orador 3 · `2:33:24 - 2:33:31`

si una consulta no sé si ya lo mencioné porque por ahí escuché PHP eh en qué lenguaje vamos a programarlo

### Orador 1 · `2:33:33 - 2:33:57`

en el que ustedes quieran no hay ningún problema ok si incluso este algunos bueno los pueden conectar hasta con Java verdad yo preferiría que no verdad para que para que también aprovechen y y tengan la posibilidad de de de utilizar otros strings de conexión sea mucho más más más más provechoso verdad listo

### Orador 3 · `2:33:57 - 2:34:01`

yo tengo una pregunta con eso de campo tipo texto que se refieren

### Orador 1 · `2:34:02 - 2:42:05`

eh o sea que lo que lo que usted va a mandar a guardar y lo que va a recuperar y que lo va lo que va a actualizar es un campo tipo texto es decir eh vamos a ver en un en una base de datos hay campos de diferentes tipos verdad eh enteros flotantes dates este long int short int small int eh etcétera verdad eh hay hasta campos tipo memo por ejemplo eh que son para para textos muy grandes entonces la consulta que vamos a hacer no vamos a hacer una consulta digamos eh Ok, ok. No, no, Calías, que no le escuché la pregunta, porque estaba vacilando, dígame.

### Orador 5 · `2:42:06 - 2:42:13`

No, no, digamos que creí que era solo para escoger entre las dos, se escogía una, entonces dijo, no, hay que hacer el CRUD con las dos.

### Orador 1 · `2:42:14 - 2:42:19`

Vamos a ver, no es hacer el CRUD con las dos, porque, o sea, son dos CRUD diferentes, ¿verdad?

### Orador 2 · `2:42:20 - 2:42:20`

Sí, sí.

### Orador 1 · `2:42:20 - 2:42:32`

Definitivamente son dos CRUD diferentes, sí, sí. O sea, son dos bases de datos, cada una con su respectivo CRUD, ¿verdad? O sea, yo querría todo corazón, ¿verdad?, que sea el mismo CRUD para las dos bases de datos, pero eso no funciona así.

### Orador 7 · `2:42:33 - 2:42:34`

Sí, sí, bro.

### Orador 1 · `2:42:35 - 2:42:45`

Ok. No, no, esa era la duda. Ok, ok, listo.

Ok. ¿Alguna otra duda? Este, bueno.

Entonces, por favor.

### Orador 3 · `2:42:45 - 2:42:48`

Yo tengo una duda sobre el proyecto, pero sería hasta el final ahora.

### Orador 1 · `2:42:49 - 2:42:50`

Perdón, perdón.

### Orador 3 · `2:42:50 - 2:42:52`

Yo tengo una duda ahí con el proyecto.

### Orador 1 · `2:42:53 - 2:42:55`

Dale, dale, dale, dale, a lo mejor no sirve a todos, si quieren.

### Orador 3 · `2:42:56 - 2:43:09`

Ok, este, profesor, era consultar sobre, bueno, el Linux uno puede utilizar, bueno, yo estaba viendo ahí unos videos de programación en C, sobre utilizar Notepad para, sería lo que, poner el código, no sé.

### Orador 1 · `2:43:10 - 2:44:21`

Es, es, digamos, este, los, los, los, usted al final va, va, va a terminar entendiendo, ¿verdad?, que, que el, el, el, el editor es completamente irrelevante. Es decir, o sea, la, la, el definidor no está en las codijas, ¿verdad? La programación no está en el, en el, en el software de desarrollo que se utilice para nada, ¿verdad?

Tranquilo. O sea, no hay ningún problema. De hecho, yo, este, creo que hay otro, hay uno más, más, más, más, más bonito que me gusta usarlo.

Bueno, no, sí, sí, sí, es el Sublime, ¿verdad? El Sublime es un editorcillo bastante, bastante, bastante bonitillo, ¿verdad? Es muy, muy lidiano, muy práctico, ¿verdad?

Sí. Y por favor, cuando usted, espero que estén utilizando, para las compilaciones, ¿verdad? El, el, el, Genome, C Compiler, Mi Proyecto, punto C y con la, y con la librería, ¿verdad?

Si están utilizando librerías, ¿ok? Pero que todo lo hagan desde consola, ¿verdad? Eso sí, las compilaciones que les hagan de consola para, para que, para que agarre, ¿perdón?

### Orador 3 · `2:44:21 - 2:44:23`

Desde el, del, del.

### Orador 1 · `2:44:24 - 2:44:28`

Sí, desde, desde la consola, ¿sí? Desde la consola de comandos, ¿sí? Ajá.

### Orador 15 · `2:44:29 - 2:44:35`

Profe, ¿podría mandar lo mismo que mandó con lo de la tarea, pero toda la, toda la pieza de report, ¿no?

### Orador 1 · `2:44:36 - 2:44:38`

Eh, sí, claro, claro. A ver, a ver cómo queda.

### Orador 15 · `2:44:38 - 2:44:43`

Sí, sí, es que, Jay, realmente la foto queda súper mejor ya como se ve aquí.

### Orador 1 · `2:44:43 - 2:46:32`

Vamos a ver. Sí, sí, vean, esas cosas, si ustedes creen que es importante, cuando están estudiando y todo, usted me dice, profe, saque una foto tal vana, ¿verdad? Todo lo que, lo, lo que a uno, digamos, que a uno le pueda servir de apoyo, mucho mejor.

No, no, sí, sí, tiene razón, se ve bastante mejor, claro. Sí. Bueno, entonces, nos vemos el próximo martes.

Dios primero. No, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no Vosotros, si que no mete ahí código, código basura, ¿verdad?

Uno siempre tiene que evitar que cuando usted va al código que, que no vaya a encontrar cosas, si se diga esto de qué era ¿verdad? Y no sólo el problema de qué es o de qué era. Después si cambia la versión, este entonces actualizar eso es un problema ¿verdad?

Entonces mejor, mejor este siempre utilicen cosas muy prácticas. Ya muy estables, muy, muy conocidas. Bueno, nos vemos entonces.

Que estén muy bien. Voy a tener grabación.

### Orador 2 · `2:46:32 - 2:46:33`

Sí, lo veo. Bueno.

### Orador 1 · `2:46:33 - 2:46:33`

Gracias.
