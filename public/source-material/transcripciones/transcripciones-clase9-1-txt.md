# Clase9 1

### Orador 17 · `0:00 - 0:00`

¿Morimos?

### Orador 14 · `0:01 - 0:03`

Ahora se puede decir morimos.

### Orador 1 · `1:59 - 2:54`

la esencia de los beneficios de los productos adquisitivos como tanto y segundo criterio que es la función más importante para efectos del conjunto de beneficios del sistema operativo es que se dedica a hacer detección y corrección de errores esa es la parte fundamental y cuando decimos que se dedica a identificar errores hay varios niveles una cosa es darse cuenta de que existe un error en una salida que le corresponde en una entrada de datos y otra cosa es llevar a cabo alguna operación de corrección son dos cosas completamente diferentes primero, darse cuenta de que existe un error por ejemplo, cuando hay una petición a disco una petición a disco implica que vamos a ver

### Orador 3 · `2:54 - 3:37`

si tenemos la estructura podríamos decir que la petición a disco

### Orador 11 · `3:58 - 3:59`

a ver, si es ahora

### Orador 1 · `4:41 - 8:18`

si pensáramos en un disco eso sería la estructura cuando hablamos de discos, estamos pensando en discos de arreglos por lo que nosotros llamamos discos de arreglos un escusi, que en realidad es una estructura vamos a ver, por ejemplo el registro de la propiedad el registro de discos utilizan estructuras de discos que son arreglos entonces lo que tenemos es algo como esto lo que tenemos en realidad es un arreglo de discos y es lo que permite dependiendo de cómo se estructura la información que un archivo, por ejemplo si tenemos en este caso cinco discos que un archivo se pueda partir y cada una de esas partes vaya a un disco diferente para mejorar el tiempo de respuesta pensando en que no todo el archivo esté concentrado en un único en un único disco y pueda estar saturando las peticiones ahora vamos a ver el tema de los arreglos de discos pero bueno la estructura sería algo como esto el total es lo que nosotros llamamos un plato en el caso de los discos que ustedes tienen localmente son discos de un plato únicamente en el caso de los arreglos tienen la cara interna, la cara externa que sería esta es una cara y la otra estructura de abajo sería la otra cara y lo que tenemos es una cabeza de lectura y escritura una cabeza de lectura y escritura que esta cabeza lo que hace es que no se desplaza sino que esta cabeza nada más corre hacia allá o hacia acá y espera a que la pista se posicione sobre la cabeza de lectura y escritura para hacer el traslado a todo el concéptico se le llama pista a esta unidad en específica se le llama un clúster ahorita vamos a ver por qué se existe esta unidad y acá lo que de manera individual se le llama un sector en el caso de que pensemos en que por ejemplo este sector de afuera es más grande que el sector de adentro eso no funciona así si el dibujo estuviera correctamente hecho esto sería algo como esto la parte adentro sería mayor volumen y conforme va para afuera va teniendo menor volumen hasta que al final aquí tenemos algo sumamente sumamente delgado entonces este sector y este sector de aquí, todos los sectores del disco tienen exactamente la misma unidad, es decir miden la misma cantidad, entonces se define lo que se hace cuando se formatea un disco, se define una unidad de medición de esos sectores entonces ahora si podemos entender que cuando grabamos, cuando hay una una petición de un archivo a un dispositivo como un disco que sabemos que es un dispositivo de naturaleza bloque entonces yo podría tener la petición de A la petición de B esos son procesos la petición de C

### Orador 5 · `8:18 - 8:23`

entonces digamos si todos si todos tienen el mismo espacio

### Orador 1 · `8:28 - 11:47`

yo tengo tres peticiones tres solicitudes en la cola entonces en el caso del disco inevitablemente tengo que tener un buffer que es donde voy colocando los datos de A los datos de B y los datos de C lo voy trayendo porque lo que voy trayendo es que voy trayendo sectores entonces si paso por esta pista si la cabeza de escritura está en un extremo de esta pista, va a traer todos los sectores que hayan de las solicitudes de las peticiones que tengo en la petición en este momento por eso es que decimos que este dispositivo se comporta como algo que puede estar atraciendo varias peticiones de manera simultánea y porque necesito un buffer porque estos son una cantidad de bloques que luego tengo que traernos y tengo que utilizar alguna estrategia para garantizar que el archivo está íntegro, es decir, que todos los sectores sean la prioridad y la competitividad del archivo entonces por eso es que utilizamos un mecanismo como el buffer entonces por eso es que entra aquí una función que es la más importante en realidad que tiene que detectar y corregir posibles errores es decir, que pasó un error en la primera escritura entonces este sector está dañado o sea, el sector está en error vamos a pedirle transmisión para que eso llegue pasa por ejemplo en dispositivos sobre todo pero en contextos de interconexiones de red vamos a ver en una conexión de red en el transcurso desde que usted se conecta hasta que llega a un lugar de petición pasa por diferentes troncales uno quisiera que todo sea en este caso aquí tenemos una troncal digital pero aquí tenemos una troncal analógica entonces lo que pasa es que en este tránsito podemos encontrar cosas como esta es decir, yo estoy completamente seguro que esto es un uno y que esto es un cero pero esto ¿qué será? esto serán dos unos dos ceros pegados esto se pareció a uno esto se pareció a cero pero esto ¿qué será?

está más cerca de uno, está más cerca de cero entonces cuando esas cosas pasan en una tarjeta red que es un dispositivo de entrada y salida entonces se solicita retransmisión de una parte específica que corresponde posiblemente a un paquete entonces por eso es que decimos que el dispositivo es una tarjeta red entonces inevitablemente tiene que tener un buffer que es un lugar donde ir guardando la petición y la integrando y después utilizar algún mecanismo de verificación normalmente le llamamos códigos de redundancia cíclicas

### Orador 5 · `11:47 - 11:47`

¿si?

### Orador 1 · `11:52 - 16:13`

vamos a ver recordemos que a nivel de contexto de intrusion tenemos CPU memoria dispositivo de entrada y salida ¿verdad? esto es básicamente lo que tenemos entonces en el caso de ese buffer para llevar a cabo detección y recopilación en el caso de comunicaciones, en el caso de red todo lo pondríamos en la tarjeta de red en el dispositivo para que la corrección no se pasa eso ahora si a memoria para que pueda seguirse detectado entonces ya venga demorado ¿si? es decir a memoria no puede llegar esto ya a memoria llegó el paquete íntegro y verificado ¿verdad?

y confirmado del emisor ¿verdad? lo que mandaste fue esto es esto y el receptor hace la indicación si correcto es un buen emisor ¿ok? entonces los buffers inevitablemente están en la mayoría de dispositivos de entrada y salida ¿ok?

ahora en el caso de una tarjeta red perfectamente una tarjeta red dependiendo de la aplicación podría tener una utilidad de un caché ¿ok? si constantemente se solicitan los más frecuentemente usados y tiene sentido para esa aplicación entonces si vale la pena un caché de tarjeta red ¿verdad? pero por ejemplo si usted entra a internet y usted ve una página, ve otra página ve otra página, ve otra página anduvo en un transcurso de una hora por 15 páginas ¿verdad?

entonces ¿cuál es la utilidad del caché? ninguna ¿verdad? pero si usted tiene por ejemplo, si estamos hablando de que usted está utilizando un sistema de información en donde usted sabe que la data está en un server, que la red de negocios está en otro server que la aplicación está en otro server ¿verdad?

y usted pasa todo el día trabajando con una aplicación directa entonces si vale la pena tener cosas de esas cachadas porque va a ser menor el tránsito a los dispositivos servers que tienen esa información ¿ok? estamos hasta aquí ¿ok? entonces lo primero que les voy a están hechos para atender peticiones pero en el fondo lo que a nosotros nos interesa lo que a nosotros nos interesa es que llevan a cabo detección y corrección de errores ¿ok?

y que puedan llevar a cabo esa mania pues van a necesitar inevitablemente estructuras como los buffers ¿verdad? que están obviamente en varios dispositivos entonces estamos claros, por ejemplo una estructura como un disco ¿verdad? esta sería digamos su conformación y por eso es que entendemos que yo necesito tener un buffer en el caso del disco porque yo temporalmente estoy trayendo información varias cosas, paso por esta pista la cabeza de lectura escritura paso por esta pista por acá entonces me llevo todos los vectores que hayan de las diferentes peticiones que tienen en esa zona y las voy colocando en esa localidad cuando el archivo está completo se traslada ahora si a memoria, a su bloque en memoria y entonces llevan a cabo lo que conocemos como una parte se queda ahí y la otra parte va a intercambio entonces a ver si entendemos porque esto es un ping pong ¿verdad? es decir, yo saco algo de aquí, va para el buffer, el buffer va para memoria principal en memoria principal pero en memoria principal yo sé que solamente va a ser posible contener una parte no toda, el resto ¿a dónde va a ir?

¿no va a llegar? ¿a dónde? a intercambio pero ¿dónde está el intercambio?

no está en memoria, el intercambio está en disco ¿ok? por eso es que en realidad tenemos una intención lógica ¿verdad? es un ping pong se hace una solicitud espera para entrar y salir, viene a disco disco la escribe en el buffer cuando llega a la memoria principal cuando llega a la memoria principal entonces una parte va a venir una parte se va a quedar acá, el resto vuelve nuevamente a disco, pero no a su espacio original sino a la línea de intercambio

### Orador 15 · `16:13 - 16:18`

ese slot se puede ver en los sistemas como una partición ¿correcto?

### Orador 1 · `16:19 - 18:38`

se instaló la versión de Linux la instaló mamado entonces empezando, es lo primero que solicita ¿verdad? ¿sí? es decir, aunque él le solicite a usted un tamaño de swap no tiene sentido crear un tamaño de swap lo recomendable son son lo recomendable son 100 ¿verdad?

los sistemas vienen abiertos usted lo ocupa más de 100 ¿verdad? lo ocupa más de 100 porque eso va a depender de la cantidad de procesos que tengan en el ciclo, cada vez que un proceso sale del ciclo libera ese espacio y usted entonces lo asigna a otro ¿verdad? pero en el fondo, ese es el espacio que debe ser pago ¿verdad?

ahora hay algo muy importante no todos nos quedamos con la lógica ¿verdad? ok ahora sí, teniendo claro teniendo claro ¿verdad? cuando solicita un archivo ese archivo va a venir y se va a armar se va armando en el buffer cuando está íntegro aplicamos corrección, ya sabemos que sí, que el archivo está completo, que además es consistente ahora sí, el paso siguiente es pedirle al plan para trasladar esa información allá

### Orador 6 · `18:39 - 18:40`

hasta ahora

### Orador 1 · `18:40 - 22:13`

eso es lo normal pero ahora entra en juego otra alternativa que no habíamos considerado que es una excepción esta excepción la podemos explicar hasta que tengamos claro este escenario de lo que pasa aquí ¿por qué?

porque es un cuasimodelo de administración de memoria ¿verdad? que implica entender cómo funciona esto ya no como un bloque de memoria, sino como un archivo ok, entonces para poder entenderlo lo que estamos hablando son dos conceptos el ambiente de dos conceptos acceso directo a memoria y archivos mapeados a memoria en realidad esto es un complemento ¿y qué es lo que hace? repito, en términos convencionales viene una petición de un proceso de un archivo el archivo llega, se coloca en la cola va siendo atendido los sectores van siendo traídos se colocan en buffer cuando el total de los bloquecitos permiten unirlos y dar garantía de que todo está correcto el siguiente paso es trasladar a memoria ok, lo que estamos diciendo es que ese paso en este caso esto no lo vamos a hacer ¿ok? ¿por qué?

porque lo que estamos diciendo es que vamos a procesar directamente vamos a procesar directamente en el buffer ¿ok? es decir vamos a imaginar como si nuestro bloque de memoria principal en realidad en nuestro buffer no vamos a apuntar a nuestro bloque de memoria principal sino que vamos a apuntar a esta dirección del buffer ¿ok? ¿en qué condiciones podemos hacer esto?

podemos hacer esto en sí y solo sí ese archivo no tiene ningún riesgo de dar corrupto ¿por qué? porque lo que estoy haciendo es que estoy jugando directamente sobre el archivo origen en condiciones normales que hacía yo el archivo permanece allá porque yo lo traigo no lo corto y no lo llevo, no, allá quedó lo que me estoy trayendo es una copia y la estoy poniendo en el buffer, cierto si algo sale mal en todo el ciclo de ejecución no hay ningún estrés ¿por qué? porque tengo el origen de datos intacto, no lo he modificado pero en este caso estoy diciendo que el archivo que yo estoy llevando primero es un archivo que por condiciones de seguridad no pasa nada si lo fregamos y lo segundo es que esto va a pasar sí y solo sí cuando son archivos extremadamente grandes entonces, si el archivo que estoy manipulando en ese proceso es un archivo extremadamente grande y si ese archivo no corre el peligro de que su daño digamos que si lo daño vaya a significar algo que repasa entonces yo puedo jugarme el chance de utilizar acceso directo a memoria que en realidad ya sabemos esto es un único concepto acceso directo a memoria es la técnica que me permite hacer esto pero porque puedo manipular los archivos como si me estuviera mapeando memoria

### Orador 14 · `22:18 - 22:23`

¿sí o no? ok, ok, ok

### Orador 1 · `22:23 - 25:01`

vamos de nuevo hasta ahora lo que hemos visto es que tenemos aquellos algoritmos de planificación de memoria particiones fijas todos los tamaños, particiones fijas varios tamaños, mapas bits listas ligadas con todos los ajustes socios, memoria virtual con todas las pulgitas de los plazos en cualquier caso siempre implicaba que la información que se estaba procesando de los archivos era traída físicamente del disco, descargada en el gofre y después de que en el gofre yo garantizaba que todo estaba bien y lo llevaba ahora sí a memoria ¿verdad? esa era la lógica siempre de entrada y salida ese ciclo pero siempre era una copia siempre, esto se mantenía original ¿verdad?

esto siempre se mantenía original ¿sí? entonces esto es la dinámica ¿qué es lo que pasa? si el archivo es muy grande ya sabemos que a memoria solo va a quedar un 3% el resto donde va a ir?

a intercambio, ¿dónde está el intercambio? nuevamente el disco entonces en realidad o sea, eso sí es importante ¿verdad? por supuesto pero siempre ¿qué pasa?

¿dónde está la mayoría de los datos de un proceso que hace intercambio? están en discos entonces recuerden, no es lo mismo ir a pedir algo y resolverlo de carácter lógico en la memoria principal que tener que moverme hasta que el alma sea entradísima a buscar algo ¿sí? primero porque el volumen de la información allá es mucho más grande que aquí, entonces ya eso no le pisa demasiado y en segundo lugar porque esta estructura es de carácter lógico y esta estructura eso implica acá eso implica acá de una vez para meterlos en esto una parte física es decir, mecánicamente hay que mover el dispositivo es decir, hay que poner el disco en una velocidad de rotación hay que poner el disco en una velocidad de rotación hay que tener certeza de que hay un tiempo en el traslado de la información de la cabeza, lectura, escritura, al cofre y viceversa y entonces es un tiempo que suma, mientras que aquí aquí esto es una estructura es una estructura lógica, entonces es muy rápido pero cuando yo tengo que ir intercambiando se me vuelve la panza

### Orador 13 · `25:02 - 25:05`

¿esa memoria que se trabaja en el disco física?

### Orador 1 · `25:06 - 26:53`

no recuerden esto es almacenamiento permanente, disco los archivos están en sus clases cuantos sean para un archivo pero ya para poder yo devolverlos a la petición tengo que armarlos en un espacio ese espacio se llama BOC ahí es donde llevo a cabo detección y corrección del BOC entonces recuerden tenemos las políticas tenemos las políticas de practicación de memoria ahora lo que están diciendo es que existe otra variante, es decir esta variante te permitiría poder dedicar el hecho de que una vez que hay algo aquí, no lo voy a llevar a la memoria no lo voy a ejecutar directamente aquí entonces es un disque el modelo de adición de memoria pero que no existe por si, sino hasta que se junta con la posibilidad de tener archivos mapeados a memoria sobre dispositivos de entrada y salida como el disco que tiene su propio bloque de almacenamiento temporal es decir, tienen que juntarse muchas cosas eso, además de que el archivo es extremadamente grande y además de que si la bregamos nada va a pasar entonces por ejemplo devolviéndonos al caso del examen ¿qué archivos de los que manipulamos ahí creen que podríamos utilizar bajo la modalidad de acceso directo a memoria o como archivos mapeados

### Orador 6 · `26:55 - 26:57`

no sé, yo creo que vamos a ver

### Orador 1 · `27:06 - 28:09`

pensamos en los archivos que manipulamos allá pensamos en los archivos que manipulamos allá por eso, el que registra un dispositivo podríamos utilizar ese caso ese archivo podría ser uno de los que aplicamos a esa memoria no, porque ese archivo no pesa ese archivo no pesa valoraríamos a los datos ¿qué pasa?

vamos a ver un audio es una secuencia y lo que estoy diciendo es que ahorita voy tirando seis tropezitos para ir esforzando ¿qué pasa si yo pierdo un bloquecito de esos? yo no lo guardo como un archivo permanente sino que guardaría bloquecitos de audio para analizar bloquecitos de archivos entonces aún así siendo un bloquecito pesa muchísimo ¿qué pasa si se daña un bloquecito de esos?

### Orador 8 · `28:10 - 28:15`

se corrompe todo el archivo vamos a ver

### Orador 1 · `28:15 - 30:48`

vamos a ver yo tengo un dispositivo yo tengo un dispositivo que es el que está capturando el audio este está haciendo la transmisión el dispositivo lo que hace es que cuando yo lo recibo lo empiezo a cortar para ir guardando para procesarlo si no sería prácticamente imposible ahora cuando se dan los bloquecitos pequeños son pesados entonces la pregunta es ¿se mueven como archivos independientes?

cada lectura prácticamente es un archivo independiente aún así sigue siendo grande en comparación con el archivo aquel que nada más lee un integer program entonces ¿qué pasa si un bloquecito de esos se corrompe? sí, es un camión a ver primero estamos en la aplicación ¿qué es lo que hace la aplicación? la aplicación lo que hace es que está trasladando está trasladando el comportamiento expresivo de la persona es decir ese comportamiento si la persona en este momento está padeciendo de un dolor ¿verdad?

no va a ser algo excepcional, es decir solamente en un bloquecito en una muestra de dos segundos quedó capturado eso el resto del tiempo no, es decir si la persona está teniendo una crisis eso se va a sostener probablemente ¿sí? entonces en ese caso se lee cada dos segundos ¿qué implica perder un bloque de grabación de dos segundos? ¿sí me entienden?

es decir, en ese caso en realidad ese bloquecito no determina no determina algo un fallo clínico ¿verdad? es decir, se puede escuchar el siguiente bloquecito entender cuál es como el comportamiento de lo que está pasando ¿hay algún mecanismo para medir qué tanto se está perdiendo? no, porque por eso le decían digamos que en el caso del salmón ¿cuánto tiempo va a durar cada dos segundos?

en un minuto ¿cuántos clics rechazamos? treinta sí, treinta cambian ¿qué implica perder uno de treinta? implica realmente que eso va a ser un descalzo ¿verdad?

### Orador 4 · `30:49 - 30:49`

¿verdad?

### Orador 1 · `30:50 - 33:35`

en el caso vamos con las imágenes estamos capturando imágenes de un cultivo hay una placa Petri ¿verdad? tiene un cultivo ahí y realmente lo que se está haciendo es tomando una foto y comparándola con la anterior y con la anterior ¿sí? ¿qué implica perder una una imagen de ¿cuántas imágenes creen que podemos tomar en el día?

¿cuántas imágenes creen que podemos tomar en el día? vamos a ver ¿cuánto creen ustedes que regularmente va a un microbiólogo analizar un cultivo? porque actualmente se cambia la observación ¿verdad?

¿cuántas veces creen que el microbiólogo va a analizar un cultivo? en los reales las cuatro veces terminamos en periodo de tiempo que se llama paso cada dos cada media hora cada dos horas cada cuatro horas cada treinta minutos cada dos segundos ¿verdad? entonces si toman una fotografía cada hora ¿verdad?

si toman una fotografía cada hora ¿habrá algún descaro con aprovechar de perder la foto en el procedimiento? probablemente no probablemente no entonces ese es el criterio donde tenemos que argumentar ¿cuál es la frecuencia y cuál es la naturaleza del archivo que estamos manipulando? para saber si de verdad implica que lo podemos fregar y no pasa nada o si realmente si incidiría en un resultado de la análisis ¿ok?

¿ok? entonces queda clarísimo ¿si? es muy fácil, o sea, esto parece muy fácil pero para poderlo implementar yo tengo que tener completo dominio de todo lo que está pasando ¿si?

del ciclo de que cuando hay una petición esa petición llega a una cola de solicitudes y dependiendo de la naturaleza del dispositivo tiene carácter de bloque en este caso puede traer varias peticiones al mismo tiempo la va colocando en un espacio como un buffer y que eso le posibilita una la decisión ordinaria que es pedirle la dirección al practicador de mediano plazo para traerla a memoria en cuyo caso se guardará solamente una parte aquí y el resto irá a la vista también o la excepción ejecutar directamente

### Orador 8 · `33:36 - 33:47`

¿si? si yo tengo un archivo digamos que de media hora tal vez y tal vez un pedacito se me daño eso afectaría el archivo completo se daña todo el archivo si directamente

### Orador 1 · `33:47 - 33:55`

el archivo tiene que guardar la integridad y la integridad es una variedad

### Orador 15 · `33:55 - 34:01`

esos son los mensajes de archivos corruptos en los sistemas cuando uno está haciendo el análisis del dispositivo esa es la porcentaje

### Orador 1 · `34:01 - 34:13`

esos son archivos corruptos ¿verdad? ahora recuerden que hay dos posibilidades una es porque físicamente hay algún daño algunos sectores físicamente irrecuperables ¿verdad?

### Orador 7 · `34:13 - 34:14`

¿qué pasó?

### Orador 1 · `34:15 - 36:11`

o lo otro que fue lo que dijimos la semana pasada recuerden que para poder administrar los archivos yo siempre mantengo como una tabla de referencias ¿si? es decir, puede ser que logro que todos están ahí pero ¿qué pasa si yo perdí la referencia? yo perdí la referencia aquí, ahora me dice que Manuel está en el asiento 124 pero aquí no hay 124 asientos ¿verdad?

es decir, perdí la referencia yo sé que el archivo está físicamente ahí, pero perdí la referencia mediante una técnica que se implementa estoy corrigiendo el archivo existe pero no es accesible ¿si? eso es el menor de los problemas eso casi siempre pasa ¿verdad? cuando ustedes han visto que el sistema está irrecuperable ¿verdad?

la información está ahí no fue que se dañó el disco no fue que se estropearon los sectores es simplemente que perdió la referencia ¿verdad? ¿verdad? bueno estamos listos con los grupos ¿verdad?

vean, analicen bien esto ¿cuál es el sentido? bueno, eso en el caso del segundo examen ¿dónde puedo aplicarlo? ¿dónde no podría aplicarlo?

¿en el primer examen podría aplicarlo? ¿dónde sí, dónde no? ¿verdad?

¿cuáles son las implicaciones? escojo un proceso ¿a este proceso le puede aplicar esto? ¿sí?

¿por esto y esto? ¿no? ¿por esto y esto?

¿quiénes son los grupos? ¿no se ve aquí como la como las ganas?

### Orador 15 · `36:16 - 36:22`

está difícil, pero hay unas ganas de alguna oculación ¿será el intento que da el principio?

### Orador 3 · `36:26 - 36:41`

es que hace dos semanas me encontré con una persona que tenía un cerebro y la otra fue la primera y me dijo que no tenía los cráteres ¿verdad?

### Orador 7 · `36:48 - 36:51`

¿Cómo es que alguien te joda?

### Orador 3 · `36:52 - 36:53`

¿Ah?

### Orador 6 · `36:54 - 37:07`

¿También pensaste que yo… …yo también pensé que tu… …yo también pensé que yo era muy chiquita …yo lo acepto pero…

…se hace como…

### Orador 4 · `37:07 - 37:12`

…como un niño mentiroso Ya, ya va a tomar fotos a eso Ya, ya ¿Qué?

### Orador 3 · `37:13 - 38:53`

Escúchame, escúchame No, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no

### Orador 4 · `38:55 - 38:56`

Pero puedo tomar la fotografía?

### Orador 3 · `38:56 - 39:13`

Si Que, que ¿Dónde está lo del...

### Orador 8 · `39:13 - 39:32`

lo que me apuntó aquí, mapeado mejor y todo eso? Mapeado mejor y todo eso, mapeado mejor y todo eso.

### Orador 6 · `39:33 - 39:34`

¿Esto de aquí?

### Orador 7 · `39:36 - 39:37`

No sé, no lo sé.

### Orador 5 · `39:38 - 39:45`

Dios. ¿Qué es? Es un escape.

### Orador 13 · `39:48 - 39:49`

Yo no sé.

### Orador 5 · `39:51 - 39:54`

No importa, juega acá y vamos.

### Orador 1 · `39:58 - 40:50`

La mayoría de los equipos vienen configurados para utilizar el problema de tiempo. Si usted utiliza, por ejemplo, Mac, o cualquiera que lo utilicemos, podría tener problemas grandes. Los que vienen estrictamente para wireless, nos traen la parte manejadora para poder hacer la conexión.

Ya. Los dispositivos, recuerdo, los dispositivos tienen dos componentes. Uno la parte controladora, que se encarga de la parte lógica.

Y luego la manejadora que se encarga de la parte física, la memoria. La manejadora de este equipo tendría que ver con la parte de la comunicación de wireless. Y en la parte lógica se encargarían de este detalle de ajuste, imágenes y todo lo demás.

### Orador 3 · `40:52 - 40:52`

¿Qué?

### Orador 5 · `40:53 - 41:05`

No hay ningún problema con nada. Bueno, entonces es un escape de unidad. Tiene más que eso, porque viene con redes fuertes.

Y más wireless.

### Orador 4 · `41:10 - 41:54`

Bueno, todavía no hay compañeros. Ahora sí se acomodó. Y también indica si están desactualizados.

Esto puede llegar porque Nesus lo ha indicado con los colores. Generalmente rojo es el que indica que tiene una mayor vulnerabilidad. Cuando se realiza el escaneo indica, por ejemplo, que salen como 13 rojos.

13 rojos no significa que hayan hackeado algo. Sí significa que esas fuertes. Es probable que hayan encuadrado más fácilmente por ese punto.

Sí, sí.

### Orador 5 · `42:00 - 43:26`

Bueno, además es que permite encontrar más vulnerabilidades. Digamos que tiene una forma más rápida. Pero no es que sea más rápida.

No es que sea más rápida. Nos indica los riesgos. Ya sea rojo, amarillo o verde.

Nos indica el riesgo de vulnerabilidad que tengan nuestros puertos. Por ejemplo, redes. Y efectos configuraciones inseguras.

Tenemos más las prácticas. Y los protocolos desactualizados. Además de lo que vienen siendo los dos.

Bueno, las ventajas es que no todo el tiempo. Como digo, compañeros, no todo el tiempo es que nos marquen rojo. No quiere decir que estén mal.

Pueden ser muchas veces que nomás quede ahí como una vulnerabilidad fuerte. Pero puede que no sea así. Entonces esa es una de las ventajas que tenemos.

También tenemos la ventaja de que consume muchos recursos. Ya que lo que va a estar haciendo es que va a consumir muchos CPU. Puede ser algo que viene siendo la red.

Cuando está haciendo las pruebas. Y no detecta todo. Porque tenemos que...

Puede fallar. O puede detectar una nueva vulnerabilidad.

### Orador 13 · `43:26 - 43:36`

Que no detecta el fallo único. También cabe recalcar. Que en esto está la versión PAC.

Y la versión gratuita.

### Orador 5 · `43:36 - 43:48`

La versión gratuita viene como para una cantidad limitada de computadores. Y no queda como para 5 o 6. Y así tenemos que desembolsar.

### Orador 4 · `44:03 - 44:16`

Aquí yo ya estaba haciendo las pruebas. Como pueden ver. ¿Está grabado?

Sí, va a ser grabado. Es que no sé si...

### Orador 5 · `44:18 - 44:28`

Parece que no. No es por el Game Fiber. No sé.

Sí, sí, sí. A veces se da en su web.

### Orador 1 · `44:29 - 44:39`

Sí, sí. Es por eso que están en pantalla. Pero ya no sé qué está.

De verdad no sé cómo lo hice. No sé si está grabado o no.

### Orador 3 · `44:40 - 44:40`

¿No?

### Orador 4 · `44:43 - 44:47`

Sí. Pero ¿qué estoy haciendo mal?

### Orador 9 · `44:49 - 44:52`

Si lo probaron en la red de la casa.

### Orador 4 · `44:54 - 44:56`

Sí, en la red de la casa sí funcionó.

### Orador 7 · `44:57 - 45:00`

Más que todo.

### Orador 4 · `45:00 - 45:07`

Si me acuerdo de esto, no era mi teléfono. Yo sé que fue aquí. Nada más antes no se conectaba.

### Orador 3 · `45:14 - 45:21`

Sí, sí, sí. Una edición de la primera edición.

### Orador 4 · `45:43 - 46:10`

Yo creo que está aquí. Yo creo que está aquí. Sí.

Bueno, en el modo escaneo. Bueno, generalmente la que yo utilicé es esta. Sí, porque ya lo estaban leyendo.

Sí. ¿Ya?

### Orador 7 · `46:13 - 46:16`

Sí, está aquí. ¿Está bien?

### Orador 4 · `46:17 - 46:21`

O sea, está aquí. Y, bueno, bueno.

### Orador 5 · `46:21 - 46:24`

A ver si me quedaba otra para buscar después que tengamos.

### Orador 4 · `46:30 - 46:41`

La edición. Como arroz. A ver.

¿Cuál es?

### Orador 10 · `46:42 - 46:44`

Voy a escribir en la red.

### Orador 4 · `46:49 - 47:37`

Sí, tira los detalles y todo. Bueno, aquí se hubiera mostrado una esquina que lo que hubiera es como para ir escaneando. Está entre critical, que es el rojo, alto, que es el naranja.

Medio es. ¿Algo así? ¿No?

Bueno, bueno. Así que no sé. Es decir, el problema es que solo se muestra una parte y no muestra la otra.

Oiga, oiga. Mire que es la pantalla. La ventana y así lo puede cobrir.

No vamos, no vamos. ¿Ahora?

### Orador 16 · `47:38 - 47:39`

Ahí.

### Orador 4 · `47:43 - 47:50`

Ahí está. Ahí está. ¿Ves?

Aquí está lo que me había dicho. ¿Está escaneando?

### Orador 1 · `47:55 - 47:59`

¿Está decidido? No, no sé. ¿Captura?

¿Cuándo lo crearon en la red?

### Orador 4 · `47:59 - 48:22`

Ah, no. Pero creo que lo estamos visitando. Creo que en la red está.

O sea, tengo una idea. No, creo que no las tengo.

### Orador 1 · `48:23 - 48:41`

Ahí puede ser. Después de este, la mejor reacción es que lo mandan para allá. Para tener la evidencia.

Mándalos dos. Coge la pantalla y después lo manda a los dos. Ah, ok.

Aquí digamos, por el cuarto, por el... ¿Por el cuarto? No.

¿Por el otro lado? ¿Los mandas a este grupo?

### Orador 16 · `48:41 - 48:46`

Sí, sí. ¿Los mandas a este grupo? No, no, no.

No, no, no. Mándalos a los dos. A ver.

### Orador 1 · `48:47 - 48:49`

Bueno, eso sería. Sí. Eso sería.

Ya.

### Orador 3 · `48:56 - 48:58`

Otra idea. Púsquenla.

### Orador 4 · `49:09 - 49:11`

Mándalas a la...

### Orador 3 · `49:15 - 49:40`

Ay, todo me duele. ¿No quieres tocar?

### Orador 7 · `49:40 - 49:57`

No Quiero escuchar ¿Quieres escuchar? No ¿Y ganó por nueve?

### Orador 11 · `49:57 - 49:59`

¿Qué dice? ¿Alguna distancia?

### Orador 7 · `50:01 - 50:19`

¿Cuántos años tiene? No sé ¿Exacto? ¿Exacto?

Exacto ¿Su cómputo tiene cable externo?

### Orador 11 · `50:19 - 50:36`

¿Eh? ¿Su cómputo tiene para cable externo? ¿Qué?

¿Su cómputo tiene para cable externo? ¿Sí? ¿Sí?

Oiga, Arturo Arturo ¿Qué dices?

### Orador 4 · `50:37 - 50:43`

Sí, sí, sé que es la verdad ¿Dónde está? ¿Cómo, cómo?

### Orador 11 · `50:45 - 51:08`

Con cable externo Sí, tiene que ser la PMW Ya lo tengo Bien Bien, bien PMW ¿Qué?

### Orador 16 · `51:13 - 51:13`

¿Qué?

### Orador 7 · `51:36 - 51:37`

¿Por qué ?

### Orador 3 · `51:37 - 51:46`

Por el sinal Por el sinal Sí Una... ¿Qué?

### Orador 12 · `51:49 - 52:04`

¿Dónde está el sensor? ¿Sí? ¿Dónde está el sensor?

Abre solo ¿Dónde está el sensor?

### Orador 2 · `52:05 - 53:56`

Bueno, nosotros vamos a estar hablando sobre DAP, DAP Proxy, DAP Proxy es una aplicación de modos abiertos para generar y generar ideas en AppStore. Bueno, ¿qué hace DAP Proxy? Bueno, el imprimenta varias operaciones, interceptando aplicaciones de APIs y APIs que están utilizando el sistema de usuarios automático, análisis pasivo, análisis activo, futuro, y generación de informes.

Cada una de estas operaciones es crítica, en el interceptar el tráfico se colocan los navegadores de la hoja para ver qué estamos viendo porque no somos bromas, Primero para, porque digamos, esto es un artículo, un artículo próximo, primero decíamos, ¿no? Bueno, pero aquí básicamente es como... Hay unas páginas donde decías como hombre, negro, hombre, negro y negro, que dan como un programa informático, y que también hay un internet navegador y las aplicaciones para poder utilizar qué es lo que pasa en lo que serían 3 o 2 artículos, básicamente este, voy a decir, el resultado de...

¿Dijiste el médico?

### Orador 1 · `53:57 - 53:59`

La forma más sencilla es...

### Orador 3 · `53:59 - 54:00`

Yo tengo una pregunta.

### Orador 12 · `54:01 - 54:08`

¿Ustedes ya han hecho algunas inversiones con la fuerza general o esto es de... Ustedes no lo han hecho, ¿no?

### Orador 1 · `54:09 - 54:15`

No, pero a ustedes es por el punto de vista. Ah, bueno. Sí, sí.

Es así. Sí, sí. ¿A ustedes?

### Orador 9 · `54:16 - 54:22`

Sí, yo creo que lo tienen, sí. ¿Cuál es el tema de ustedes? Es que el día que...

### Orador 1 · `54:22 - 55:05`

Pero ya en el caso de ustedes, ustedes van a buscar un proxy de web, ¿verdad? Y ya lo van a publicar, ya lo van a publicar en las redes sociales, ¿no? En este caso, vean, en este caso funciona así.

Imaginémonos que cada uno de nosotros tiene un nombre, ¿verdad? Pero nosotros diríamos, bueno, si alguien nos viene a buscar aquí, si alguien nos viene a buscar aquí el nombre con el que nos vamos a hacer ir a hacer algo, pongamos en la florida. Entonces digamos que pongamos a Chase.

Bueno, ella va a ser cada uno de nosotros. Si alguien nos busca, nos va a buscar con ese nombre. Y ella va a entender y va a saber exactamente, efectivamente, cuál es el nombre detrás de ese anónimo, de ese alias.

¿Verdad?

### Orador 16 · `55:06 - 55:06`

Sí.

### Orador 1 · `55:07 - 55:07`

Sí.

### Orador 3 · `55:10 - 55:14`

Correcto. ¡Vamos!

### Orador 2 · `55:30 - 56:13`

Es un protocolo que nos envía datos inválidos o ilustrados para encontrar errores. La siguiente y la generación de informes es para detalles MNF o ODT, cuando alguien nos entrega el resultado de un análisis. ¿Cómo lo hace?

Bueno, hay muy cuantos clientes que no conocen el proxy. Le dicen la instrucción. ¿Cómo lo hace el navegador y el servidor?

O sea, registra primero todas las instrucciones y respuestas. Luego, trae la aplicación para mapear todas las páginas. Y entonces, luego, utiliza scripts que adquieren los precios mínimos para tratar el agua alquilícola.

¿Cómo usan esos clientes para tener reportes sobre los resultados de la investigación especial? ¿Usa una instrucción o no?

### Orador 3 · `56:14 - 56:37`

Básicamente, no. Exactamente. Sí.

### Orador 12 · `56:38 - 57:22`

Ya. ¿Cómo lo hace? ¿No lo hace?

No lo hace. ¿Cuántos clientes tiene el servicio?

### Orador 3 · `57:24 - 57:25`

¿No lo hace?

### Orador 1 · `57:38 - 58:27`

Vamos a ver, para terminar esta discusión que hay con los compañeros de Proxy Hay dos cosas, uno es el servicio Proxy, ¿verdad? ¿Qué servicio Proxy? Bueno, yo puse ese internet ahí ahora, ¿verdad?

Entonces, la siguiente... Digamos que... Entonces, se hicieron recibir la petición, ¿verdad?

La primera vez, no les conocen, esa petición nunca la han hecho Entonces, ella la mandaría a...

### Orador 7 · `58:28 - 58:37`

Bueno, se supone que la administración de algún lado tiene que...

### Orador 6 · `58:37 - 58:41`

No, no me salió... No me salió, no me...

### Orador 1 · `58:42 - 1:00:00`

Era para enseñar que yo seguía Entonces, ella viene a entregar, pero se deja una copia Entonces, la siguiente vez que otra persona venga a solicitar un marcador Entonces, ya no va hasta allá Porque la propia Proxy ya le la entrega Esa es la función del Proxy Es decir, evitar es esta Ir hasta allá A traer algo que probablemente alguien de aquí De mi... Intranet Esa es la función del Proxy Ahora, ellos están concentrados en una herramienta Para avaliar la vulnerabilidad del Proxy Ellos están concentrados en la magia que hace este interlocutor aquí Que es el Proxy Entonces, ellos están concentrados en cómo identificar vulnerabilidad del servicio Y ellos concentrados en el servicio El standard que es el Proxy Lo usan cuando...

### Orador 2 · `1:00:00 - 1:00:23`

Ellos saben que... El seguidor está protegido Lo protegido escanea sólo con las páginas principales de la página No tiene ninguna práctica Le dispara a todos Literalmente se dice que le dispara a todos Tiene dos tipos de...

### Orador 7 · `1:00:24 - 1:00:25`

Y...

### Orador 1 · `1:00:47 - 1:01:48`

Siempre para todos Que traigan... Traigan un pantallazo del resultado De cuando lo volvieron en sus casas Porque aquí va a ser una operación completamente diferente Bueno... Pero...

Pero... Si no... No vamos a entender muchas de las cosas Por lo menos si tenemos ya dos comparativas Vamos a saber exactamente el efecto que hacen los...

Los... Yo quiero un perro así Y lo otro es... Vamos a pedir tres cosas Y la tercera es...

Que si ya han desarrollado algún proyecto Un proyecto web, ¿verdad? Que se lo apliquen O al pilar de algún compañero Nada más para... Para empezar con pruebas ¿Les han desarrollado algún proyecto web?

¿De todos los... De todos los...

### Orador 2 · `1:01:48 - 1:02:31`

Los direcciones Que si han desarrollado algún proyecto web Pues sí, sí ¿Qué es auditoría, profe?

### Orador 6 · `1:02:31 - 1:02:33`

Disculpe ¿Auditoría de qué?

### Orador 1 · `1:02:34 - 1:03:29`

No No No La... Cuando se concursa por desarrollos internacionales Dentro de la... Tiene que ir Tiene que ir su ex auditor Y la auditoría Es externo No es interno Siempre tiene que ser una persona externa Pero usted tiene una prima Una firma auditora que es la que se identifica a su sistema, ¿verdad?

Esa firma auditora es un perfil que se dedica principalmente a tratar de identificar todas las posibles vulnerabilidades que hay Y tiene que hacer, ¿verdad, específicamente en el sistema psico-sistema?

### Orador 13 · `1:03:29 - 1:03:30`

Tal vez como objetivo

### Orador 6 · `1:03:31 - 1:03:32`

No, no

### Orador 1 · `1:03:32 - 1:04:07`

Muy bien, tiene que ser parte del perfil paraíso Ahora les digo que realmente, si ustedes están interesados en un muy buen nicho de determinados estos Las vulnerabilidades de los sistemas psico-sistemas Bueno, no solamente la parte del rendimiento, el tiempo de respuesta, el desempeño, las consultas Las consultas de servers, de data, de procesos, de computación, de algoritmos Sino también toda la parte de seguridad Hay mucha plaza ahí en los medios

### Orador 8 · `1:04:12 - 1:04:16`

Hay mucha plaza ahí en los medios Ya, ya me digo que ya

### Orador 4 · `1:04:21 - 1:04:26`

Voy a hacer un repetir, por mi parte he escuchado que tiene determinados

### Orador 1 · `1:04:37 - 1:05:39`

Lo que nos interesa en este caso, digamos, es correr una rutina Correr una rutina de análisis de reportería Digamos, uno programa que esto se discute todos los días Principalmente uno corre las horas pico, ¿verdad? Entonces ya uno sabe cuál es el tráfico en su internet Entonces usted lo corre, usted lo toma para correrlo todos los días hasta la hora Pero usted no va a estar viendo el reporte Sino que usted lo que genera son unas miles de días con los reportes Entonces el hecho genera alertas sobre comportamientos malos en ciertas zonas rurales Sí, gracias Es por como yo hago las manos ¿Cómo hago las manos?

### Orador 14 · `1:05:42 - 1:05:51`

Estás igualito que mi primo El chile Estás igualito ¿Al campo?

### Orador 6 · `1:05:54 - 1:06:10`

Estás igualito que mi primo ¿Por qué no fue a comer pan con la gente? ¿Por qué no fue a tomar un café con la gente?

### Orador 9 · `1:06:10 - 1:06:14`

Sí, mamá, mi caca ¿Qué tu vas a comer?

### Orador 6 · `1:06:14 - 1:06:27`

¿Ah? ¿Qué tu vas a comer? No, no, seguro voy a ir a mi casa Tomo algo, veo si aguanto la noche y luego al pónimo ¿Tienes que ir a pagar?

¿Ah? ¿Tienes que ir a pagar? Sí ¿Tienes que ir a pagar?

¿Ah?

### Orador 12 · `1:06:27 - 1:06:46`

¿Me voy a ir a pagar? Es que no sé Yo no me gustaría gastar energía con la gente ¿No te gustaría?

### Orador 6 · `1:06:46 - 1:06:49`

No me gustaría ¿Por qué se creó tan golpeado?

### Orador 9 · `1:06:54 - 1:07:00`

¿Por qué se semejó a un gato? Me muerdo, nunca me va a ver así ¿Cómo te da?

### Orador 16 · `1:07:01 - 1:07:04`

¿Qué va a ver? ¿Qué va a ver? Yo me quiero dar pena

### Orador 9 · `1:07:21 - 1:08:05`

Sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí, sí Sí, sí, Sí, sí, sí.

### Orador 1 · `1:08:05 - 1:08:22`

Sí, sí, sí. y 3 o 4 de las piezas se conectan a su próximo para salir para ver la salida que genera todo. Lo mismo lo hizo por acá.

### Orador 16 · `1:08:25 - 1:08:31`

Dale, Galea.

### Orador 1 · `1:08:35 - 1:08:52`

¿Qué pasa? ¿Todo bien, Galea? ¡Qué lindo año!

¿Si tienen alguna duda durante la presentación? O sea, pregúnteme, ¿verdad? O sea, ¿supongo que es que hay que soportar el interconex?

¿Está relacionado con eso?

### Orador 7 · `1:08:52 - 1:08:52`

¿O no?

### Orador 6 · `1:08:53 - 1:08:55`

Así es, no terminé la frase.

### Orador 7 · `1:08:56 - 1:08:58`

No, no, no, no.

### Orador 6 · `1:08:58 - 1:08:58`

La frase tengo.

### Orador 12 · `1:09:04 - 1:09:08`

¿No? No, la tengo aquí.

### Orador 7 · `1:09:17 - 1:09:22`

¿Qué pasa? ¿Qué? ¿Qué?

¿Qué pasa?

### Orador 11 · `1:09:30 - 1:09:39`

¿Qué pasa? ¿Quieren matarme? Qué lindo llenar de cerezos.

Dale, dale.

### Orador 12 · `1:09:42 - 1:09:43`

¿Qué es eso?

### Orador 8 · `1:09:48 - 1:09:51`

¿Era la peor respuesta, papi?

### Orador 3 · `1:09:51 - 1:10:01`

Si. ¿Y después de eso, qué hace el día? ¿Qué pasó después?

¿Por qué esto pasa de idea? ¿Funcionó bien?

### Orador 14 · `1:10:02 - 1:10:02`

¿Alto qué?

### Orador 3 · `1:10:02 - 1:10:04`

¿La foto que hizo yo? Dale.

### Orador 10 · `1:10:34 - 1:11:38`

El artevo es una herramienta que significa que el trabajo es socialmente mucho más única y espontánea que el internet. A diferencia de otras herramientas, el artevo no sólo muestra los datos, sino que lo empieza visualmente como un mapa, trabajando desde un modo más claro. Esa es la especificidad de la herramienta.

Entre cosas como personas, empleos, dominios o empresas. Lo que hace el artevo es traer información de diferentes fuentes, y luego relacionarla con lo que sabemos. Esto es muy comercial, por lo que es fácil de hacer una entrevista.

Es un software electrónico. La gente puede encontrar páginas de redes sociales, o incluso servidores. Esto sirve mucho para distribuciones digitales.

### Orador 13 · `1:11:44 - 1:12:22`

¿Cómo lo hace? La herramienta funciona mediante plataformas digitales automáticas. Primero, los usuarios piden un dato inicial, como un documento o un correo.

Luego, la herramienta lo oculta a sus usuarios. Consultan distintas fuentes en Internet. Y por último, los resultados se forman en gráficos.

Como conclusión, es una herramienta muy poderosa porque no sólo busca información, sino que la realiza. Y la reconecta. No necesita nada más.

Es más de ciberseguridad e investigación digital.

### Orador 9 · `1:12:26 - 1:12:29`

¿Se acuerdan de la crisis?

### Orador 1 · `1:12:30 - 1:13:07`

¿Cuándo vemos que en este tipo de relaciones, en su defensa están hablando de defensa y fes públicas? No hay fes privadas como las que nosotros usamos. Si usted se conecta en su casa y usted hace DHCP, es decir, el servidor le asigna a usted un IP.

Esa no es una IP pública, es una IP privada. Entonces, ellos funcionan principalmente a nivel de IPs públicas. Es decir, si usted contrata un IP pública y monta un tipo, un server y lo mantiene activo desde cualquier lugar del mundo, cualquier persona va a poder acceder a esa aplicación.

### Orador 13 · `1:13:12 - 1:13:21`

¿Se acuerdan de la crisis? ¿Cuándo vemos que en este tipo de relaciones, en su defensa están hablando de defensa y fes públicas?

### Orador 7 · `1:13:21 - 1:13:23`

No hay fes privadas como las que nosotros usamos.

### Orador 6 · `1:13:28 - 1:13:35`

Si usted se conecta en su casa y usted hace DHCP, es decir, el servidor le asigna a usted un IP. Es más de ciberseguridad e investigación digital. Si usted se conecta en su casa y usted hace DHCP, es decir, el servidor le asigna a usted un IP.

### Orador 7 · `1:13:38 - 1:13:43`

Es más de ciberseguridad e investigación digital.

### Orador 1 · `1:13:58 - 1:14:03`

¿Sabe cuánto cuesta el arquitecto en Domino? ¿Alguien va a gestionar?

### Orador 8 · `1:14:03 - 1:14:08`

Creo que yo. Yo compro uno baratísimo, la verdad. Solo dos dólares.

### Orador 1 · `1:14:15 - 1:14:17`

Ahí en realidad es lo que está pagando el hosting, ¿verdad?

### Orador 8 · `1:14:18 - 1:14:27`

No, era el dominio más que todo. Era un dominio, no me acuerdo el nombre, pero terminaba en el país. No es un dominio común, digamos.

### Orador 1 · `1:14:27 - 1:14:54`

Sí, es que lo que siempre tratamos de buscar son dominios. Dominio .com, .net, por ejemplo. Y si son de Costa Rica, digamos .cer. Ahí está la academia nacional de dominios, ¿verdad? Se contrata con ellos. Pero un .dominio .com, por ejemplo, anualmente anda como en 60.000, 70.000 colones, ¿verdad?

### Orador 15 · `1:14:54 - 1:14:55`

El dominio.

### Orador 1 · `1:14:56 - 1:15:05`

El dominio. Pero normalmente ahora, digamos, lo que tiene el paquete es con el hosting. Lo que ahora le interesa que es para poder mantener su aplicación.

### Orador 8 · `1:15:05 - 1:15:13`

Yo solo compré un dominio directamente porque el hosting lo tenía entre comillas de dominio. Entonces necesitamos un dominio para apuntar hacia ese hosting.

### Orador 1 · `1:15:14 - 1:15:37`

Y si usted sabe de algún negocio que está próximo a reventar, muy bueno, usted se adelanta, compra el dominio y entonces lo vende. Eso es lo que hacen la mayoría de empresas. Usted va buscando un dominio que a usted le interesa, entonces resulta que ya está ocupado, pero el otro después se lo vende.

Ahora ahí está donde el... Así como la coja del brocantino.

### Orador 7 · `1:15:40 - 1:15:41`

A ver...

### Orador 1 · `1:15:51 - 1:16:27`

Tiene que tener ubicado ya por lo menos algún proveedor de hosting y algún proveedor de... De dominio. De dominio porque en cualquier momento les va a expresar una charla y por lo menos que sepa cómo se gestiona, cuál es el costo mensual, el costo semestral o el costo anual, cómo se hace la solicitud, cómo se mantiene, cómo se garantiza, no perderle una vez que finaliza el crecimiento del banco.

150 libras. Digamos, si usted le cobraba un dominio, ¿cuánto le cobraron?

### Orador 8 · `1:16:28 - 1:16:33`

Bueno, más bien fue como $1.50. Ok, $1.50. No me diga el nombre del dominio.

### Orador 7 · `1:16:35 - 1:16:43`

Pero digamos que ese dominio empiece a generar una tasa de tráfico altísima, cuando vaya a recobar, ¿verdad?

### Orador 8 · `1:16:43 - 1:16:51`

Se lo va a hacer por ahí abajo. ¿Seguramente? Sí, sí.

Porque el dominio va como $15.000 por ahí.

### Orador 1 · `1:16:52 - 1:16:59`

Pero va, digamos, se va incrementando de acuerdo con la naturaleza del acceso.

### Orador 16 · `1:17:03 - 1:17:04`

Ok.

### Orador 1 · `1:17:12 - 1:17:54`

Ok, todo eso que tenemos ahí, son servidores, ¿verdad? Son servidores de la USER que tiene direcciones públicas, por eso pueden ser mapeados, ¿verdad? Todos, todos, todos son servidores.

Ok. Aquí podemos ver, digamos, un servidor que es para pruebas. Este probablemente es de cosas administrativas.

Estos son de rutinas. Esto es una optivería. Por aquí hay uno de salud.

### Orador 8 · `1:17:54 - 1:17:55`

Este es un proyecto de investigación.

### Orador 1 · `1:17:55 - 1:18:16`

Este es para paquetería, específicamente para usuarios de escritorio. Todos, todos, todos son servidores. Cada servidor de estos tiene una dirección pública, y entonces, digamos, brinda algún servicio.

Y por eso aparecen en esa lista que usted ha hablado.

### Orador 7 · `1:18:17 - 1:18:17`

Ok.

### Orador 1 · `1:18:23 - 1:18:30`

Tenemos una página del gobierno. ¿Algún ministerio?

### Orador 7 · `1:18:31 - 1:18:31`

Mientras.

### Orador 12 · `1:18:57 - 1:19:01`

Verga, mira, ya.

### Orador 16 · `1:19:08 - 1:19:09`

¿Qué es eso?

### Orador 7 · `1:19:16 - 1:19:17`

¿Es de los hombres? ¿Esos son?

### Orador 16 · `1:19:18 - 1:19:19`

¿Esos son chiches?

### Orador 9 · `1:19:20 - 1:19:23`

Sí, son técnicos de la auto. Muy interesante.

### Orador 11 · `1:19:24 - 1:19:26`

Aprovechamos y empará todos esos.

### Orador 9 · `1:19:26 - 1:19:26`

¿Ah?

### Orador 7 · `1:19:27 - 1:19:27`

¿Para qué?

### Orador 11 · `1:19:28 - 1:19:33`

¿Ustedes no tienen plan de ciclo para hacer el ayudario? No ¿No son iguales? No, no son iguales ¿Cuántos están?

### Orador 14 · `1:19:33 - 1:19:53`

Están los míos y los míos ¿Una consulta rápida?

### Orador 6 · `1:19:54 - 1:19:55`

¿Ese? ¿Ya pasó?

### Orador 9 · `1:19:55 - 1:19:57`

¿Ya pasó? ¿Ah?

### Orador 6 · `1:19:58 - 1:20:10`

Ya pasó Ya pasó la consulta, que rápida ¿El de Harvester no es muy similar al que nosotros presentamos?

### Orador 1 · `1:20:10 - 1:20:54`

Hay un montón Lo que hay que ver es cuál es la especialidad del servicio Hacen muchas cosas Todos hacen muchas cosas Pero cuál es el espíritu del servicio Ah, ok Perdón No, no, no Ah, sí No, no, está bueno No, no, está bien Sí, sí, ya pasó Sí, sí, ya pasó ¿Ah?

### Orador 4 · `1:20:54 - 1:21:06`

Sí, sí Sí, sí
