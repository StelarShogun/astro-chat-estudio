# 02 06 2026 10 35

### Orador 6 · `0:00 - 0:04`

¿Qué cosa? ¿Para allá? ¿Qué cosa?

¿Para allá?

### Orador 5 · `0:04 - 0:09`

Sí, vamos a pegar. Es este, ¿verdad?

### Orador 1 · `0:31 - 11:05`

Estamos dentro de lo que tenemos a dos clientes. ¿Verdad? Tenemos un contexto de elección, ¿sí?

Esto es como un único CPU, como un único bloque de memoria, con dispositivos de transferencia locales, es decir, locales porque son para atender solo los dispositivos. Pero ahora lo que tenemos que pensar es que tenemos una rutina, un código, un proceso que puede ser que se esté ejecutando. Este es un código, puedo verlo de manera independiente, cada uno de estos representa un ciclo, entonces puede ser que haya una fila de código, una parte se ejecute en este contexto, otra parte se ejecute en este contexto, otra parte se ejecute en este contexto, otra parte se ejecute en este contexto.

Es decir, el proceso lo estoy desmantelando, lo estoy dividiendo, como me quieran llamar, y entonces yo puedo mandar a diferentes contextos de ejecución. Entonces, todo lo que nosotros vemos como aplicaciones de guía inevitablemente sigue en este modelo de procesamiento distribuido. Entonces, lo que tenemos que tener claro es que, digamos, hay dos escenarios, ¿verdad?

Hay dos cosas que son las que me interesan a mí distribuir. Una es decir, cinco CPU, es decir, ejecución, porque ya sabemos que hay rutinas que prácticamente no hacen CPU, pero que hacen mucha. Hay filas de código que no son muy extensas, pero que realmente hacen un conjunto muy excesivo.

Entonces, en esos casos es donde me interesa a mí distribuir la carga de esa fila de código. Pero yo creo que por el contrario, la fila de código no tiene nada que ver con respecto a la dimensión de la data. Es decir, la consulta se lleva a cabo sobre una data extremadamente grande.

Entonces, ahí es donde yo pensaría que ya no me interesa distribuir la fila de código, sino que lo que voy a distribuir es la data. Es decir, tengo una tabla de 50.000 registros, entonces a cada uno de ustedes, los colaboradores, a ustedes les asigno la misma fila de código. Es decir, prácticamente, o literalmente se puede decir, la misma consulta.

La voy a distribuir, pero a cada uno de ustedes les voy a dar una muestra diferente de registros, una cantidad de registros. Entonces, yo llevo 50.000, entre 40 colaboradores host, lo que llamamos un host. Tenemos dos categorías, los masters y los hosts, los colaboradores, los legs, como lo quieran llamar.

Entonces, lo que haría es que yo puedo dividir, o la data, y a cada uno de los colaboradores le diría, ok, comenza su muestra. Esta es la cantidad de registros sobre la cual usted va a realizar esta consulta. Esta es la consulta la que es más barata, porque esto simplemente le dice, ok, aquí hay dos registros que coincidimos, criterio 11.

Ahora, evidentemente, cuando aplicamos criterios, o cuando aplicamos, por ejemplo, el algoritmo de IA. Entonces, en realidad, a lo que estamos apostando es a un modelo de post, que tiene más una línea de... ¿Qué es una consulta semántica?

Hasta el momento nosotros, digamos, lo que se ha manejado son consultas estáticas. Select from where. Es decir, de una muestra, tráiganme algo que ando buscando puntualmente con un criterio completamente estructurado.

Entonces, quiero seleccionar los estudiantes de este curso que llevan... ¿Qué curso están llevando vos? Ok, entonces ya me va a volver, pero la consulta es completamente estática, escrita, ok.

Pero, ¿qué pasaría si yo hago la consulta para esta tabla de estudiantes? ¿Quiénes posiblemente finalizarían su carrera en el 2028? Ya esa no es una consulta, es una probabilidad, un análisis probabilístico, ok.

Y entonces yo voy a tomar una serie de consideraciones, pero entonces ya no es una consulta cuadrada, ok. Entonces, eso no es una consulta semántica. O por ejemplo, si, digamos, queremos hacer una sala de juegos de ping-pong, ok.

Vamos a hacer una sala de juegos de ping-pong en la habitación del mío y queremos saber cuál es el lugar preciso, ok. Tal vez el criterio de expresión no pueda ser determinado por métodos, sino que bueno, utilizaríamos una muestra para ver preferencias. O les compraríamos el repositorio a Facebook, a Whatsapp, a Instagram, a toda la red para ver cuántos de ustedes conversan sobre esa temática.

Y ahora si tengo la muestra, cómo establecer un criterio de cercanía para determinar dónde está la mayor cantidad de gente posible que puede acceder a un punto céntrico para practicar ese deporte. Entonces, son consultas semánticas, es decir, no hay criterio true-false, ¿verdad? No hay un criterio entre un rango y otro rango, o no hay un criterio superior a rango, inferior a rango, ok.

Eso no existe, sino que la realidad es establecer rangos probabilísticos y entonces en función de eso vamos a ir mirando cuáles criterios están dentro del rango y cuáles criterios están fuera del rango, ok. Además, el concepto de las demás historias de bases de datos sistemáticos definitivamente tiene que ver con las bases de datos multidimensionales. Hasta el momento nosotros solamente realizamos consultas en un plano XY, no utilizamos consultas en un plano tridimensional.

Es decir, nosotros no falsificamos o no modelamos un escenario probabilístico tridimensional, sino que solamente en dos dimensiones. Entonces, la mezcla de los sistemas problemas semánticos con las bases de datos multidimensionales es lo que permite entender por qué es que necesitamos un procesamiento que sea colaborativo y que pueda permitir no solamente repartir instrucciones, sino también repartir una muestra de datos, ok. Bueno, veremos de una manera muy general dos modelos de distribución.

Uno, lo que corresponde a los sistemas fuertemente acoplados y otro lo que corresponde a los sistemas débilmente acoplados, ok. Los sistemas fuertemente acoplados en realidad los que nosotros conocemos como clusters. ¿Qué entiendes por un cluster?

¿Qué entiendes por un cluster? ¿Qué entiendes? Ya te quedaste muerto, ¿qué es un cluster?

¿Qué entiendes por un cluster? Un cluster es un computador que te colabora en una tarea. ¿Alguien más tiene una idea de un cluster?

¿Alguna idea de un cluster? ¿Tienes una idea? ¿Tienes una idea?

¿No? Ok. Un cluster es un megacomputador, la suma de dos, digamos un megacomputador.

La particularidad que tiene es que es una arquitectura idéntica. Es decir, si nosotros quisiéramos hacer un cluster aquí, la pregunta es, ¿quiénes tienen exactamente el mismo hardware? ¿Alguien habrá conocido a alguien que tenga aquí el mismo hardware?

¿Nadie tiene un hardware repetido aquí?

### Orador 5 · `11:06 - 11:12`

¿Usted con quién? ¿Quién es?

### Orador 1 · `11:16 - 12:50`

¿Qué equipo usted tiene? ¿Usted y quién? ¿Ustedes tienen el mismo hardware?

¿Usted también tiene el mismo hardware? ¿Usted también tiene el mismo hardware? Entonces, en realidad, lo que estamos viendo es que aquí podríamos hacer, que para poder hacer un cluster usted tiene que tener un hardware exactamente idéntico a otro.

Y entonces, lo que hacemos es que a través de, digamos, abrimos eso y los makers los conectamos con buses de datos, nada más. Siempre y cuando el hardware sea exactamente idéntico, entonces yo puedo hacer un cluster y puedo ir sumando. ¿Cuál es la ventaja de eso?

La ventaja de eso es que eso es súper rápido. Rápido. Es súper, súper rápido.

Es súper, súper rápido. No es tan barato porque ¿cuántos compus del modelo que ustedes tienen? ¿Hay alguien más que tenga una otra variante de los tres compus ahí?

Cuatro. ¿Ustedes dos me dijeron que eran? ¿Verdad?

Ok, cuatro. ¿Hay otro modelo que tenga varios? ¿No?

Exclusivos que son ustedes. Gente más típica.

### Orador 2 · `12:51 - 12:54`

Tal vez sí, pero como no todos la traen, no la sabemos.

### Orador 1 · `12:56 - 13:17`

Pero no han visto, no han identificado, ¿quiénes tienen esta compu? Parecía. Bueno, es idéntica, es idéntica.

Es idéntica, es idéntica. Es idéntica, ¿no? ¿Por qué?

Uy, que está gente ahí. Saben que si esto va a comprar compu, a pesar de todo tengo la lista F65.

### Orador 2 · `13:18 - 13:22`

También hemos tenido verdad. No, no, pero hay algún tiempo.

### Orador 5 · `13:24 - 13:25`

Depende de él.

### Orador 1 · `13:28 - 26:42`

No, no, no, idéntico. Ah, idéntico. Ya empezamos por ahí, entonces.

Una de las dudas que tiene es que bueno, que esto es exclusivo, que hay escalos. Conseguir hardware idéntico es caro. Lo otro es que se requiere conocimientos electrónicos para poder juntar todo con buses de datos.

Pero la capacidad de procesamiento es increíblemente suave. Entonces, los sistemas distribuidos son fuertemente acoplados. Es decir, estamos conjuntando un megacomputador, pero el hardware tiene que ser idéntico.

¿Cuál es la ventaja? Aquí, el CPU se ve como un único CPU. La memoria se ve como una única memoria.

Eso es una maravilla. Es una maravilla y eso nos ahorra una bronca del carajo. Porque en realidad, solo tengo un único lugar donde tengo localizadas las variables.

Entonces, me ahorra un mundo de problemas. Entonces, la memoria se ve como una única memoria. Y el CPU, ahora sí, lo que hace es que los CPU hacen todo el lado de la tarea.

Y aquí es donde vamos a ver una diferenciación. Algunos de ustedes creen, ¿verdad? O les han mentido, o les juran la idea de que tiene una computadora como tienen procesadores.

Y que eso hace, que eso hace, que eso hace multiprocesamiento. En realidad, lo que están haciendo es que le están poniendo otro CPU para cobrarle más. ¿Pero cuál es el problema?

Que hasta el momento, que hasta el momento, esos dos CPU no se hablan. Esos dos CPU no se hablan. Entonces, en realidad, casi tienen un CPU que hace lo mismo que hacía antes.

Pero si llegan a tarea, si llegan a tarea exclusivamente adicional. Ahí la verdad que no tenga nada que ver con nadie más. Es a la mando a ese otro CPU.

Es decir, no es ni el 0.5% de las máquinas que se usan las que pueden ir a ese CPU independiente. Entonces, no tenemos multiprocesamiento. Aquí lo que tenemos, cuando yo tengo una única memoria, cuando le apunto toda la software, tengo una única memoria.

Tengo un único repositorio. Pero, la dinámica del cluster es para que el CPU como tal, yo puedo asignarle, ¿verdad? Pero todos están viendo el mismo espacio de dirección de memoria de los otros CPUs.

Entonces, en realidad, lo que veo es como si fuera un único CPU funcionando. Pero, en los de los CPUs sí, comparten cifras. Entonces, en realidad, por eso es que es sumamente confiable, sumamente robusto.

¿Cuál es el problema que tienen? El problema es que es demasiado caro, es demasiado exclusivo, lograr puntas de hardware idénticamente igual es muy caro. ¿Y los otros que requieren de la precisión de la electrónica para poder instalar y que todo eso sea con un único procesador?

¿Cuál es la otra ventaja que tienen? Si falla un CPU, si falla una memoria, se cayó el invento. Es decir, no es tolerante a fallos.

Es lo que nosotros llamamos la tolerancia falsa. Si físicamente un CPU se daña, si físicamente una memoria se daña, si físicamente un disco se daña. ¿Por qué sabemos que el invento se fue mal?

Si eso pasa, entonces todo el invento se muere. Y hay que físicamente eliminar el invento. ¿Alguna duda con respecto a sistemas fuertemente focados?

Si yo necesito ejecutar, por ejemplo, una rutina como una controladora de tráfico, una terminal aérea, entonces diría algo muy seguro. Yo apostaría directamente a un cluster. Primero es sumamente rápido, puedo hacer pre-ejecutados, puedo ejecutar rutinas previas que me determinen la posible posición de un bloqueo y prevenirla.

¿Verdad? Por ejemplo. Entonces, son sistemas sumamente seguros.

Vamos ahora a la otra categoría. Los sistemas aéreos fuertemente focados. Digamos que esto está reservado.

Es decir, la posibilidad de que nosotros desarrollemos algo para un cluster es muy poco probable. Primero vamos a tener acceso a no sé cuántos de ustedes están dispuestos a desarmar sus mainboards y a soldar buses de datos. ¿Para qué hay que hacer eso?

Si ese hubiera sido el proyecto, no creo que ustedes hubieran estado con la disposición de hacer eso. Pero tenemos la otra posibilidad, que son los sistemas de elementos acoplados. En los sistemas de elementos acoplados tenemos.

Aquí lo que estamos diciendo es que el medio de comunicación entre cada uno de los dos va a ser a través de una conexión de redes. Y entonces esto es una maravilla. Porque aquí esto me permite a mí.

Heterogeneidad de hardware. Heterogeneidad de hardware. Entonces aquí ya no me interesa si tienen allí un sistema operativo.

No es tan importante eso. Lo único que necesito es tener dos tipos de servicios. Un servicio master y un servicio slave.

El doble es lo que necesito. Un servicio master que haga un spawn, que dispare. Una rutina.

Y un servicio slave que yo quiero esa petición. Que me deje esa tarjeta. Que le guste y que después pueda trasladar información.

Con ese modelo de implementación podemos desarrollar una lógica sumamente dinámica. Si ese host se desconectó. Inmediatamente el slave se da cuenta que el tiempo de vida en el cual le va a dar a ese host para que responda no respondió.

Y me preocupo, simplemente lo que le voy a asignar a ese slave se lo asigno a otro colaborador. A otro que posiblemente ya respondió. Se lo asigno y listo.

Entonces es muy dinámico. No es rápido. Definitivamente no es rápido.

Pero por lo menos me crea mucha independencia. En este caso, del lado del cluster. Lo que estamos viendo es que el sistema ha decidido que es una implementación de hardware.

Mientras que en el sistema anteriormente acoplado. Lo que tenemos es una implementación de software. Es decir, un proceso que pone a correr dentro de su ciclo.

Dentro de su ciclo. Inserta una rutina. Inserta una rutina.

Que se puede estar ejecutando aquí. Que no apunte a este espacio de memoria. Este colaborador sólo me va a aportar CPU.

¿Por qué? Porque las tareas que está desarrollando tienen comprometida la memoria. Aquí sólo voy a apuntar CPU.

¿A dónde va a estar el espacio de variables? Va a estar en este otro host. Este otro host casi no tiene CPU.

Pero está vaciado de memoria. Tengo un host que aporta CPU. Y otro que aporta memoria.

Las locaciones físicas no me interesan. Entonces. Pareciera ser que es muy funcional.

Pero no me interesa. Ahora, tiene sus limitaciones. ¿Verdad?

Porque lo que nosotros originalmente pensaríamos. Yo le digo a usted, como host. Aquí está la fila de código que quiero que ejecute.

Y aquí está el origen de datos. Entonces usted va a colocar el origen de datos en su bloque de memoria. Y la petición en su cola de ejecución.

¿Verdad? Es decir, usted como host va a apuntar esa rutina. Con los datos que están ubicados en su memoria.

Ahora imaginen el otro escenario. Yo decía, no. Usted sólo va a apuntar CPU.

Y la memoria usted va a utilizar de otro bloque. ¿Qué pasa ahora sí cuando esa memoria es compartida? Con otros procesos.

¿Verdad? Es decir, usted está ejecutando, solamente está haciendo CPU. Pero usted cuando apunta el bloque de ejecución de memoria.

No está localmente en su espacio, sino que está en otro poste. Pero el bloque ese de memoria, corresponde a una memoria que es compartida. Y entonces ahora sí empiezan todos los problemas.

Con respecto a cómo garantizar la integridad del valor de esa variable. En función de que, como estamos en un segmento de variables diferentes. Hay una lógica funcional que tiene que ver con los relojes.

Vamos a ver. Si nosotros en este momento. Si todos tuviéramos un reloj.

No, no de eso. Si tuviéramos un reloj. El reloj de manecilla.

¿Verdad? Y dijéramos, bueno. ¿Qué hora es en este momento?

Bueno, pongamos todos en este momento. A la hora. A las 11.

¿Qué va a pasar? ¿Qué va a pasar mañana a esta misma hora? Pues probablemente.

Va a llegar el mismo reloj. Con un minuto atrás, con unos segundos atrás. Todos con un minuto adelante, con unos segundos adelante.

¿Sí? Es decir, ya sabemos que los relojes todos son completamente diferentes. Ya sabemos que todos los relojes de los CPU son completamente diferentes.

Y sumemosle a eso. El agramante de que. Este reloj está en un bloque.

Bueno, en un. En una sección. De.

De red. A la cual llego por fibra. Pero resulta que este reloj.

Para llegar necesito pasar por tres troncales. Y hay dos que son analógicas. Y ahí perdí un montón de tiempo.

Entonces. ¿Cuál es el valor? ¿El equivalente de la variable que era compartida?

¿El de la última actualización? ¿El del último que llegó a escribir la actualización? O tengo que llevar un orden.

Un orden conforme fui asignando las tareas. Para permitir que vayan escribiendo. Los resultados en las variables.

Entonces. La lógica. La lógica para poder analizar el sistema de herramientas complejas.

Cuando se utilizan variables compartidas. Es sumamente compleja. Hay varias estrategias.

Una es implementar relojes físicos. Es decir. Es utilizando un DESPAS.

Es utilizando una ecuación que. Cada vez que recibo una tarea. Porque yo le mando una tarea a un colaborador.

Yo tengo estimado cuál es el tiempo de retardo. Y entonces. En la escritura de las variables.

Ese valor se ha que define. Quién lo escribió de último. Vamos a ver.

Sería algo como esto.

### Orador 2 · `26:47 - 26:50`

Y. En la. Región.

### Orador 3 · `27:00 - 27:11`

Verdad. Sí. ¿Por qué.

Sí.

### Orador 1 · `27:20 - 29:28`

Es. Bueno. Sí.

No. Sí. Bueno.

Muy bien. Entonces sería algo como esto, estamos con varios procesos que están accediendo a variedades que son partidas, este volano la escribía a las 11 en un espacio en el cual dejó una etiqueta a tiempo anterior al tiempo del CPU que la escribió, otro proceso la recibe con una etiqueta a tiempo anterior al CPU del cual fue escrito, entonces cuando dejamos variar, cuando decimos que era correcta, es decir, si tengo 70 colaboradores que escriben la misma variable, cuando alguien me pide una lectura de esa variable, el valor de cual es de los 70 que le voy a dar, eso es lo complicado, Entonces, digamos que el tema del control del tiempo, esto es lo que nosotros llamaríamos un tiempo global, cual es el tiempo global por el que nosotros vamos a administrar este sistema distribuido, Entonces, eso es lo que hay que tener el cuidado de como se coordina, hay implementaciones que utilizan una variable que se llama tiempo atómico universal, por ejemplo, hay un protocolo, bueno, hay un protocolo real, ustedes no lo saben, Hay un protocolo real que sincroniza la hora, exactamente, ustedes logran tener acceso a internet, el hace la actualización del reloj de su compu, por ejemplo, pero que pasa con el tema donde la latencia del tránsito entre un host y otro es sumamente lenta, producto de los datos que dan, Y el medio, el medio que está, no debemos tener un TFL, no debemos tener fibra óptica, por ejemplo, no debemos tener lances de fibra óptica con servos estructurales analógicas, por ejemplo, etc.

### Orador 2 · `29:30 - 29:42`

Profesor, usted menciona que la memoria, tal vez un slave pueda tener la sensación de ser el que tiene la memoria, que pasa si ese slave se desconecta, lo veríamos como un problema también.

### Orador 1 · `29:46 - 30:03`

En realidad, en ese caso, digamos, el sistema de circuitos que siempre mantenemos son espejos, entonces, digamos, ese bloque de memoria, tengo 3 o 4 imágenes, en el momento en que una falla, o si está muy cargado, a veces ella nace, entonces puede irse a los otros, y genera un mecanismo para que sea el policía.

### Orador 2 · `30:04 - 30:05`

Siempre con un respaldo.

### Orador 1 · `30:06 - 34:57`

Es que vamos a ver, miren, aquí tienen una noción de lo que acaba de plantear Arturo, vamos a ver, como esto es, como esto es, digamos, tan débil, perfectamente puede pasar, no solamente que un host que solamente aporta memoria se caiga, ¿verdad?, sino que lo que puede pasar es que un 6-Band se caiga perfectamente, ¿verdad?, un 6-Band se cae, pero entonces, bueno, lo que se implementa es los espejos de memoria, a este bloque de memoria que estamos viendo, que es este host, esto lo espejemos en 3 o 4 hosts más, entonces, vamos a ver, que si este enlace está muy lento, entonces yo empiezo a redireccionar a estos otros, a cualquiera de los otros 3, pero inmediatamente, ¿qué haga eso?, ¿qué tengo que garantizar?, la integridad, ¿qué pasa con el que está escribiendo aquí?, ¿cuál valor? Cuando tenga la siguiente petición, de esa variable voy a dar, el de este host o el del otro host que atendió la última petición, entonces, no es nada más de espejar, sino, ¿cómo?, ¿qué mecánico de verificación mantengo para garantizar la integridad del estado de las variables?, que el valor de la variable del bloque de control de procesos que dice, tiempo espera de la última instancia en la cola de listos, sea el mismo en los 3 espejos, por ejemplo.

Esto es lo que es complejo. Ok. Hay algo muy importante que tenemos que manejar y es la Personomía Free, es la, digamos, es el autor que ha escrito la práctica geológica de los sistemas distribuidos y hace 4 categorizaciones, ok.

Tenemos dos cosas para poder describir acá, ok, o instrucciones o datos, ok, ya lo vimos, y entonces hace 4 categorías, ok, dice, simple instrucción, simple data, es decir, esto es un procesamiento convencional, ok. Lo que hacemos nosotros cotidianamente es un procesamiento convencional, no distribuimos instrucciones, no distribuimos datos. En el primer modelo, dice que mantenemos la misma pila de código, ¿verdad?, la misma pila de código, pero lo que estamos repartiendo es la muestra de datos, ok.

Entonces, tiene que hacer una consulta para determinar cuántos de las tablas estudiantes llevan el curso en la universidad nacional de sistemas operativos y el micrófono en el sistema, ok. Entonces lo que diría es que los caneles chinos funcionan por un móvil celular, ¿verdad? ¿Sí?

Sí. ¿Sí? ¿Sí?

### Orador 5 · `35:03 - 35:06`

¿Sí? ¿Sí?

### Orador 2 · `35:08 - 35:10`

¿Sí? ¿Sí?

### Orador 1 · `35:14 - 35:17`

¿Sí? ¿Sí? ¿Sí?

### Orador 5 · `35:18 - 35:19`

¿Sí? ¿Sí?

### Orador 1 · `35:19 - 40:34`

¿Sí? Entonces lo que están pidiendo es el coger, yo diría, las células 0, las asigno a 5 ojos, las células 1 a otros 5 ojos, las células 2 a otros 3 ojos, las 4 a otros 5 ojos. ¿Listos?

Entonces, ahí lo que estoy diciendo es que estoy diciendo, en la misma consulta, las mismas sentencias ya se juegan, pero lo que estoy repartiendo es la muestra de datos, ok. Entonces a vos me va a devolver a mi solamente quien es positivo de esos criterios. Después de todo lo que le vamos a enseñar.

Entonces, 5 instrucciones, 5 datos. El tercer criterio es multiple instructions. Es decir, estoy cogiendo la consulta y la estoy segregando.

Normalmente las consultas tienen... ¿Ya están llevando ese dato? ¿Ya están haciendo inner joins?

Las consultas son estructuradas. Tienen una serie de funcionalidades. Un order by, un distinct, etc.

Tienen un montón de criterios. Entonces lo que yo hago es que empiezo a segmentar esa consulta. Cada uno de sus criterios.

Y entonces lo que estoy distribuyendo son instrucciones. A todos los que estoy distribuyendo instrucciones y a todos les estoy dando el mismo. También vamos a echar datos.

Entonces ahí lo que vamos es cargas y preguntas. Y finalmente tenemos el que más nos interesa. Que es donde repartimos instrucciones.

Pero también repartimos el origen de datos. Entonces, eso me permitiría reducir notablemente la carga CPU. Pero también el tiempo de espera por entrada y salida.

Productivo de traer todos los registros de una tabla. Si no quiero ir explicando, a cada uno de los colaboradores una mocha específica. De registros sobre los cuales llevar a cabo la consulta.

Pero esto implica el requisito de que yo tengo que gestionar muchos de esos bloques con memoria compartida. Inevitablemente. ¿Por qué?

Porque resulta que lo que usted está escribiendo como resultado, otra pieza de código, otro host, lo va a tomar para continuar con un análisis. En el caso de las consultas anidadas. Entonces, requerimos que lo que usted está escribiendo sean variables compartidas.

Entonces hay que negociar el tema de cómo nos ponemos de acuerdo. El hecho es muy práctico. Estos son los hosts a los que se van a colaborar con CPU.

Como instrucción es de SQL. ¿Quién dice? Distribuir la muestra de origen de datos y le di a cada uno la cantidad de registros.

Distribuir los 50.000 registros. ¿Pero quién dice que todos van a responder en tiempo y forma? Probablemente tenga una respuesta del 70% y el 30% no va a responder.

¿Y qué hago? ¿Lanzo la siguiente línea del script de la consulta? ¿O espero?

¿Reasigno? ¿Tengo que reasignar y volver a esperar para entrar? O sea, que tengo el chance de que todos los registros están analizados.

Entonces implica una gran realidad. Entonces, en resumen. Tenemos clarísimo que tenemos sistemas fuertemente bien recopilados.

Tenemos en consideración los beneficios de uno, los problemas que tiene cada uno de ellos. Tenemos claridad, entonces, de la noventasura de la taxonomía free. ¿Cómo es que caracterizamos los sistemas distribuidos?

Recuerden, solo tenemos dos grandes intereses en distribuir. Uno, repartir el consumo CPU. Y entonces, distribuyendo pila de código.

Y dos, repartiendo la carga de los bienes de datos. Distribuyendo datos. Con solamente esos dos intereses.

Y a partir de ahí, todas las posibles variantes. ¿Qué es lo que interesa? ¿Sí?

¿Hay alguna pregunta? ¿No? ¿Ya tenemos que hacer el examen con esa?

¿Ya tenemos que hacer el examen primero de terminar? ¿Primero de terminar? ¿Cuál es su propuesta?

¿Si eso corresponde a un sistema fuertemente adjudicado o fuertemente adjudicado? Y en segundo lugar, ¿cuál es su categorización de acuerdo a la taxonomía free? ¿Sí?

### Orador 3 · `40:37 - 40:48`

¿Cuáles eran las primeras y las segundas variables? Digamos, la diferencia entre ambos. La primera que era mucho alta.

Es caro el incremental.

### Orador 1 · `40:49 - 41:46`

Primero económicamente, ¿verdad? Porque cuando hablamos de caro, pues es caro el consumo de CPU, caro el consumo de CPU, ¿verdad? Ese es caro económicamente.

Económicamente caro. Y este otro, económicamente barato. Primero y tercero.

Dos, escalabilidad. Hablamos de escalabilidad. ¿Altamente escalable?

Mentira. ¿Débilmente escalable? Altamente escalable.

¿Integridad? Integridad. ¿Altamente físico?

Relativamente físico. ¿Seguridad? Relativamente seguro.

Relativamente seguro. Altamente seguro. ¿Qué más quieren evaluar?

¿Carga CPU? Altísima receptividad para cargar CPU. Altísima receptividad para cargar CPU.

### Orador 3 · `41:47 - 41:50`

La arriba es caro el CPU y el incremental.

### Orador 1 · `42:00 - 42:07`

¿Caleán, vas a usar el examen? Ahí el examen, ahí no. ¿Cuál es la pregunta?

### Orador 4 · `42:10 - 42:12`

¿Cuál es la pregunta, Caleán?

### Orador 1 · `42:15 - 42:20`

El término del examen. ¿Pero por qué se pregunta tanto por el examen, Caleán?

### Orador 3 · `42:20 - 42:23`

Porque era...

### Orador 1 · `42:23 - 42:52`

El término del examen, ok. Yo les propongo un escenario de un sistema, ¿verdad? Puede ser, puede ser que ya el sistema está indicado que es un sistema de estudio.

Puede ser que la propuesta sea cómo distribuiría ese sistema. Y entonces ahí le preguntaría, ahora sí. ¿En qué categoría se clasificaría?

Y ¿cuál es la condición según la tecnología que viene?

### Orador 4 · `42:52 - 42:58`

Y eso tiene toda esa parte de respeto. Bajo el criterio de todos los anteriores. Correcto.

### Orador 1 · `43:00 - 43:30`

Ya llegamos con la valoración de esos cinco criterios que determinamos. Ya venimos si es para arriba o para abajo. ¿Entendido?

Y después, ¿qué nivel de categorización le da? Ya eso va a depender de lo que usted esté proponiendo. ¿Es decir, esa tablita o el...? La taxonomía a mí, la categorización. ¿Eso va a variar dependiendo de...? Sí, claro que va a variar. Eso depende, por supuesto, del caso.

### Orador 4 · `43:31 - 43:32`

Entonces eso no se va a mostrar.

### Orador 1 · `43:33 - 43:59`

Sí, vamos a ver. Eso va a depender de su planteamiento. ¿Qué es lo que usted perciba que va a destruir?

¿Si va a destruir sólo datos y no va a destruir fila de código? ¿O si va a destruir sólo fila de código y no va a destruir datos? ¿O si va a destruir fila de código y va a destruir datos?

¿O si no va a destruir mi chama aniguana? ¿O en términos de la música?

### Orador 3 · `44:00 - 44:22`

¿Tendría sentido decir que la... o si realmente es un sistema distribuido? ¿Tendría sentido que sea SISD?

Para explicarlo, digamos. Es que no sé cómo explicarlo. Es que siento que ahí no está distribuyendo nada.

¿En cuál? En el SISD, el primero.

### Orador 1 · `44:23 - 44:53`

Ah, en el SISD. Sí, efectivamente no estamos distribuyendo nada. Esto es como un punto de partida, ¿verdad?

Para decir, ok, esto es programamiento convencional. Como si estuvieramos un único servidor. Los que hemos visto hasta el momento hacen eso.

Los cargos que hemos visto hasta el momento han sido esos. Ahora lo vamos a devolver al SISD el primero. ¿Ese lo podríamos distribuir?

¿Cuál de los dos no va a ser un SISD? Y en segundo lugar, ¿cuál categorización de FLIP me interesaría?

### Orador 3 · `44:55 - 45:02`

Entonces sería como, en realidad, esas categorizaciones. Pero hay que hacer todas, porque a veces juegan una en específica.

### Orador 1 · `45:03 - 45:53`

No, calidad, no. Es algo del sistema médico, ok. Primero usted va a determinar, ok.

¿Valdrá la pena implementarlo como sistema distribuido? Digamos que sí. Digamos que lo coloque así, ok, sí, sí.

Entonces vamos a categorizarlo, ok. ¿Cómo lo categorizaría? ¿Con modelos metacuplados o fuertemente acuplados?

Lo primero, ok. Ya he tomado una decisión. Ahora, según FLIP, ¿qué es lo que vamos a distribuir?

¿Instrucciones? ¿Datos? ¿No instrucciones?

¿Instrucciones? ¿No datos? ¿O los dos?

¿Sí? O sea, ¿no podemos implementar las tres cosas? ¿Sí?

O sea, mi modelo o distribuye todo, o distribuye sólo datos o sólo instrucciones. Tengo tres posibilidades.

### Orador 4 · `45:54 - 46:02`

¿Cuál es mi propuesta? Entonces, ¿sí sería como seleccionado? Ahí, enfocarse.

### Orador 1 · `46:02 - 47:09`

No, usted va a recomendar. Usted va a recomendar ¿cuál es su modelo? ¿Cuál es su modelo de distribución?

¿Sí? ¿Para la ejecución de la selección es lo mejor? No es lo mejor, de lo que al contexto le convenga.

De lo que sirva en ese momento. Ajá, de lo que al contexto le convenga. De los de arriba, ¿cuál es el modelo?

¿Esa pregunta yo la valoraría, verdad? ¿Por qué? Porque imagínese que yo tengo un clóset, y en ese clóset tengo 100 Hardwares integrados.

Análisis de escenario. Tengo 100 Hardwares integrados en ese clóset. ¿Qué es?

Pero, tengo la posibilidad de ese mismo sistema, con las características que tiene, de implementarlo con modelos ya acoplados. Pudiendo distribuirlo en 5 millones de hosts. ¿Cuál era su pregunta?

¿Cuál es mi modelo? Ok.

### Orador 4 · `47:39 - 47:56`

En términos de la primera actividad. ¿Cómo identifico en los clósetes? No lo de la pregunta es tanta, pero que tengan arquitectura idéntica.

¿Cómo detecto eso en términos de un caso?

### Orador 5 · `47:57 - 47:58`

¿Detecto en realidad?

### Orador 1 · `47:58 - 48:02`

Lo que hay es que la arquitectura es idéntica. Ajá, lo que estamos hablando es el Hardware.

### Orador 5 · `48:04 - 48:06`

¿El Hardware qué es idéntico? El Hardware.

### Orador 1 · `48:08 - 48:14`

Los profesores pueden hacer ABCDE. Sí, pero en términos de evidenciado usted lo mencionaría.

### Orador 2 · `48:14 - 48:22`

O sea, que yo diga que esto es fuertemente acoplado o debidamente acoplado. No, no, el Hardware usted mencionaría o comentaría que hay otros que lo han mencionado.

### Orador 1 · `48:23 - 48:41`

Y aquí ya está claro que es fuertemente acoplado y que es debidamente acoplado. Se va a determinar cuál es su recomendación. Si que sea algo fuertemente acoplado con todas las problemáticas que decimos que ya tiene y con todas las modales.

O, sino a mí, que sea debidamente acoplado.

### Orador 3 · `48:54 - 48:58`

O sea, que sea contraindicado. Que no sea posible.

### Orador 1 · `49:01 - 49:28`

O sea, FLIP aplica tanto para fuertemente acoplado como debidamente acoplado. Es que aquí lo que estamos diciendo es que aquí los dos están diseñados. O sea, están físicamente en diferentes lugares.

Aquí los tres de dos están. Están logicamente todos juntos, pero igual. O sea, es que aquí los tres están.

### Orador 4 · `49:42 - 49:48`

¿Cómo puede saber cuál es la mejor opción? Para buscar.

### Orador 1 · `49:50 - 49:52`

O sea, tenemos que esperar a la surgida del examen.

### Orador 3 · `49:57 - 49:58`

Bueno.

### Orador 1 · `49:59 - 52:27`

Me gustaría y recibiría con lo mejor de la voluntad del mundo. Que ustedes hagan análisis de los casos que hemos visto. Y que ustedes lleguen a una conclusión.

Y ahí yo perfectamente voy a valorar. Eso puedo hacerlo perfectamente. Ok.

Buenas tardes. Marcelo tiene una pregunta... ¿Cómo hago yo para partear eso como sistema insiguroso?

Parte de... Parte de la respuesta sobre la naturaleza y sobre la categorización va a depender de cómo usted esté planteando el modelo distribuido. Tiene que partir de ahí, inevitablemente, ¿ok?

Y eso usted simplemente va a ir sesgando qué naturaleza es y quién y qué categorización tiene. ¿Por qué? Porque los sistemas no están propuestos como modelos distribuidos.

Usted es el que tiene que plantearlos y en su planteamiento prácticamente usted va definiendo. Vean, necesitamos resolver algo. Necesitamos resolver algo.

Tenemos las presentaciones, ¿verdad? ¿Quiénes deben las presentaciones? Las hombres.

¿Qué les parece si en vez de la presentación hacemos un video de 5 minutos? Donde presentan el ejercicio esteudico y presentan la herramienta corriendo y el resultado. ¿Quién más?

¿Hay alguien que no esté de acuerdo?

### Orador 5 · `52:27 - 52:29`

¿Hay alguien que no esté de acuerdo?

### Orador 2 · `52:31 - 52:35`

Yo no estoy de acuerdo. Yo no estoy de acuerdo.

### Orador 1 · `52:39 - 52:40`

¿Me va a llegar la bombita?

### Orador 2 · `52:44 - 52:51`

¿Me va a quedar? ¿Me ha quedado? No, ¿me va a quedar?

A mí no me parece.

### Orador 1 · `52:53 - 53:39`

¿Me va a quedar? ¿Me va a quedar? Vean, les puse una imagen.

Ahí en el grupo. Es de un crossover. Yo les recomendaría.

Les recomendaría, ¿verdad? Que vayan a la ferretería. Se compren.

Se compren 2 nuestros de cable. 1G. Categoría 5.

Cualquier versión. Hay un problema. Y...

Se compren los... 45. Cuando los tengan.

Pueden ir al kiosk de Oscar. El 3 de la noche a la hora. Ahí, esa imagen que les mandé.

Es la conversión de los hilos. Para que usted pueda conectar dos compus. Punto a punto.

### Orador 2 · `53:43 - 53:48`

¿Será que ustedes hablen de veredas? ¿Será que ustedes hablen de veredas? No, como Oscar.

### Orador 1 · `53:48 - 53:49`

Yo le estoy dando a usted, pero poncha.

### Orador 2 · `53:51 - 53:52`

Como Oscar.

### Orador 1 · `53:52 - 54:08`

Pero hace. Nada más le va a decir. Aquí está la poncha ahora.

¿Por qué Oscar? Ahí está la imagen, nada más. No, pues es una toca estrecha.

Ya me voy a decir. No sirvió para correr con Oscar, no. ¿Cómo?

### Orador 2 · `54:10 - 54:16`

Deja, no más, no más. Hagan usted todo lo que quieran. Lo quiero ver haciendo.

### Orador 1 · `54:19 - 54:27`

Y... Eh... Dos colitores en la parte 45.

Dos. A usted le voy a decir.

### Orador 5 · `54:29 - 54:40`

Lo voy a decir como lo veo. Yo le estoy dando a Oscar. A usted le voy a decir.

¿Qué es eso? Dos colitores en la parte 45.

### Orador 1 · `54:40 - 55:02`

Y yo le voy a decir. Me gustaría que coge uno más por aquello que se eche. Yo te puedo dar.

Si lo ponche, y no quedó retratado, tiene que cortar. Yo te lo digo. Dos metros de cada unitépe en la categoría 5.

Dos metros de cada unitépe en la categoría 5. Dos colitores en la parte 45.

### Orador 5 · `55:05 - 55:06`

Voy a probar.

### Orador 2 · `55:14 - 55:20`

Profe, los conectores son RJ45. Sí, porque es red interna.

### Orador 1 · `55:34 - 57:21`

Ahora, vean. Los conectores son RJ45. Correcto.

Un poco adicional por si la aplican. Vean. Para efectos de transmisión de fluyeo.

Mínimo. Lo mínimo, lo mínimo. Aunque no logren pegar las tres corpus.

Lo mínimo es las dos corpus corriendo con ese corredor. Lo mínimo son las dos corpus corriendo con el corredor. ¿Sí?

Ya lo tienen. Una vez que resuelven eso. Una vez que resuelven eso.

Se graban los pedidos y todo lo demás. Nada más porque después ya cuando logren pegar la tercera corpus a través de un router. Que haga nada más DHCP.

Entonces ya pueden probar con las tres corpus. ¿Verdad? Yo les recomendaría que lo hagan.

Primero con el crossover. Porque el problema es que si usted lo hace aquí. Pasando a través de la red.

Un firewall les puede joder eso. ¿Verdad? Segundo.

Que se consiga un router. Un router sencillo ahí. Nada más que haga hook.

No que se switche. Nada más. Y lo hacen con DHCP.

Y luego ya hacen ahí el spawn y todo lo demás. ¿Verdad? ¿Sí?

Primero. Que esto no funcione para dos corpus. Primero que no funcione para dos corpus.

Un master y un delay por lo menos. Si estamos bien ahí. Ya tenemos el 50% al pie.

Y ahora vamos a pegar la tercera corpus a través de un router. ¿Sí? Sigan ya.

### Orador 3 · `57:23 - 57:24`

Vean.

### Orador 1 · `57:24 - 58:04`

Esto. Lo de bloqueos. Lo de bloqueos.

¿De cuándo lo van a probar? La pregunta. ¿Sí?

Lo de bloqueos se va a crear con ampliación. Eso es lo que le vamos a pegar ahí al proyecto. Si alguien cree que está ahí al fin y se la va a jugar con ampliación.

Dirá si puede ir programando bloqueos. Dirá así. ¿Ampliación va a ser un proyecto entonces?

Ah. Es posible.

### Orador 4 · `58:15 - 58:19`

Ah, lo de proyecto. Bien.

### Orador 1 · `58:20 - 58:29`

Digamos. La idea sería. Que una vez que este grupo ha entrado a dos corpus.

Pon por favor. Levanta el master. Levanta el delay.

### Orador 5 · `58:29 - 58:31`

Hace el pause. Recibe.

### Orador 1 · `58:31 - 58:52`

Quiere la confirmación. Todo lo demás. Le mando la tarea.

Me responde. Le hago un videito de eso. Y una vez para.

Porque. Tengo que modificar variables de entorno. Para poder poder entrar a los tres corpus.

Y puede ser. Que haya fallas. Que algo salga mal.

Usted no va a por lo menos tener el respaldo. De esa parte funcionar. Si es eso.

### Orador 5 · `58:52 - 58:53`

¿Está bien? ¿Está bien?

### Orador 1 · `58:54 - 59:11`

Si es eso. Usted tiene el respaldo. De que por lo menos esta parte.

Si me funciona. ¿Sí? Incluso cuando lo tenga listo.

Cuando lo tenga corriendo. Pueden hacer una. Una.

Una llamadita. Verificamos esa parte. Para que con toda confianza.

Ahora si empiecen a trabajar en la otra parte. ¿Sí?

### Orador 5 · `59:14 - 59:15`

¿Han visto bien?

### Orador 1 · `59:19 - 59:20`

Esa es la idea.

### Orador 5 · `59:20 - 59:22`

Y es nada más. ¿Verdad? Para que ya usted.

### Orador 1 · `59:22 - 59:46`

Porque hay que modificar otras cosas. Variables de entorno. Y eso a veces no sale bien.

Entonces. Por aquello de que algo. Después previamente.

O explote. Por lo menos ya tenemos la garantía. La verdad es que.

Esa parte ya está. ¿Sí? Para la otra semana.

Proyecto. La que siga el examen. ¿Sí?

Y la que siga el examen.

### Orador 4 · `59:49 - 1:00:03`

Ok. Ok. ¿Verdad?

Orale. Amplia toda esa.
