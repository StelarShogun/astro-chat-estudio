# Semana 15

### Orador 1 · `0:12 - 4:37`

Un evento que ya pasó o que debe generar algún proceso del conjunto. Entonces la definición es esa. Es la condición en la que ocurre un proceso o un grupo de procesos que no avanza en ejecución.

Ya sea porque esperan un evento que probablemente ya pasó o que nunca sucederá o que debe generar algún proceso del conjunto. Entonces lo que sucede es que hoy en la clase tenemos a... ¿Qué afecta?

Tenemos a Arturo, tenemos a Anthony y tenemos a... ¿Anthony? A Brian.

Ok, tenemos a Brian. Tenemos cuatro invitados especiales. Entonces resulta que muy probablemente estamos en una sesión acá en la que necesitamos avanzar en una tarea y probablemente no vamos a lograr avanzar en esa tarea porque Anthony está esperando que Brian termine o Brian está esperando que Arturo le dé una instrucción para avanzar.

Pero resulta que Arturo también está esperando una instrucción que le dé ya a Brian. Entonces en realidad lo que sucede es que el contexto en general no avanza porque todos están esperando una instrucción que le dé a alguien del mismo grupo. Normalmente en un contexto de ejecución tenemos grupos de procesos que comparten variables, que comparten información, que comparten registros.

Esos son principalmente los que nos generan esta condición. En la medida en la que un proceso entre al ciclo de ejecución, solicite un recurso, un recurso únicamente, libera el recurso, pues eso no genera absolutamente ningún inconveniente. Pero esos procesos son la excepción.

Normalmente el 80% de los procesos que se ejecutan en un contexto intercambian información con procesos de un otro. Entonces ahí es donde tenemos el gran problema. Ahora, ahora.

Y el gran problema acá es que tenemos recursos de dos tipos. El principal problema es que tenemos recursos de dos tipos. Apropiativos y no apropiativos.

¿Qué quiere decir esto? Bueno, que hay recursos que pueden estar siendo asignados a un proceso, pero que si llega otra solicitud puede desplazar a quien esté haciendo un uso y lo puede obligar a atender al proceso siguiente. Pero también tenemos recursos que son no apropiativos.

Esos son el menor inconveniente. ¿Por qué? Porque ese proceso es de uso exclusivo.

Es decir, en el tanto de que ese recurso esté siendo asignado a un proceso, nadie más puede interrumpirlo. Entonces, evidentemente, el problema de fondo lo tenemos con los recursos que son de carácter apropiativo. Es decir, aquellos recursos a los cuales un proceso le dice, detenga lo que está haciendo y me atiende a mí.

### Orador 8 · `4:38 - 4:40`

Eso es una gran complicación.

### Orador 1 · `4:41 - 8:18`

La otra gran complicación es que los procesos normalmente solicitan más de un recurso. ¿Eso qué quiere decir? Bueno, que si realmente estamos en ese espacio de la clase, y probablemente Arturo tenga en ese momento una P0 a mano, tenga un cuaderno y tenga una calculadora, los tres recursos los tiene ya asignados.

Pero de pronto tenemos otro proceso de allá que viene, que ya tiene asignado, que tiene asignado, vamos a ver, que tiene asignado una ficha. ¿Vean? Tiene asignado una ficha.

¿Dónde graba? ¿Pero dónde? ¿Aquí?

¿Puede escoger? ¿Usted es el juez, no? Bueno, Calavera.

Sí, sí. Si no se fija ahí, a ver si hay alguien informático afuera. Entonces resulta que Arturo, que tenía ya una P0 rojo, tenía un cuaderno y tenía una calculadora, y teníamos otro proceso de allá que tiene asignado una ficha.

Y ese proceso de allá está solicitando, la ficha que ya tiene, pero además solicita una P0 roja que tiene asignado Arturo. Entonces este es el grandísimo problema. Es decir, los procesos normalmente solicitan más de un recurso.

Si tuviéramos un proceso que entra, solicita un único recurso y en una única instancia libera, no hay problema. Entonces ya tenemos dos condiciones complejas aquí. Uno, que hay recursos que son apropiativos.

Dos, que en su mayoría los procesos solicitan más de un recurso. Y lo otro, el otro gran problema que tenemos es una política que se llama RON RODING. ¿En qué consiste RON RODING?

RON RODING consiste en que a cada proceso le voy a dar una porción de CPU igual para todos. Entonces, ¿qué es lo que va a pasar? Que si, por ejemplo, que si la tarea que iba a llevar a cabo Brian tardaba 25 minutos, y yo le digo, ok, usted no va a tener los 25 minutos porque no estamos jugando con First Come, First Served, ni estamos jugando con primero el trabajo más corto, ni estamos jugando con prioridades, sino que en realidad usted solo tiene 5 minutos.

Entonces, si su tarea duraba 25 minutos, entonces esos 25 minutos va a tener que dividirlos entre 5. Es decir, va a iterar 5 veces. ¿Ok?

¿Qué significa que va a iterar 5 veces? Pues que él entra, tiene el recurso, pero no lo puede liberar.

### Orador 7 · `8:18 - 8:18`

¿Por qué?

### Orador 1 · `8:19 - 8:33`

Porque no ha terminado toda la instancia. Es decir, su ráfaga que pudo haber sido así, ¿ok? Ahora, ¿qué es lo que va a pasar?

Se va a ver constantemente interrumpida. ¿Cuántas? 5 veces.

### Orador 8 · `8:33 - 8:33`

¿Ok?

### Orador 1 · `8:34 - 8:51`

Entonces, él entra y le quitan la CPU. ¿Qué quiere decir? Que los recursos todavía no están asignados.

¿Por qué? ¿Qué pasa, por ejemplo, si ese recurso es una variable compartida? Yo no puedo dejar a que otro proceso entre y tome esa variable y la modifique.

### Orador 8 · `8:51 - 8:52`

¿Por qué?

### Orador 1 · `8:52 - 9:54`

Porque después va a venir nuevamente Brian y va a continuar donde él quedó con el valor de la variable, pero resulta que ya la variable está modificada, entonces eso no podemos permitirlo. ¿Por qué? Porque se presentó ahí una sección crítica.

Por ejemplo, en el caso de variables compartidas. Entonces, ese es el inconveniente. Hay 3 agravantes entonces, ¿verdad?

Tenemos 3 agravantes. 1. Los recursos que son de naturaleza apropiativa.

2. Los procesos normalmente solicitan más de un recurso. Y 3.

Todo esto se genera principalmente cuando estamos jugando Round Robin. En el caso contrario, el proceso entraría y usa el recurso durante todo el tiempo y al final lo libera. Pero este es el escenario que realmente nos complica la existencia.

¿Alguno más aquí?

### Orador 3 · `9:59 - 10:05`

Ninguna. Todo borrado. Parece que está jugando Mike.

### Orador 1 · `10:20 - 10:27`

Tenemos 4 condiciones que se deben cumplir para que se haga un bloqueo.

### Orador 7 · `10:53 - 10:53`

.

### Orador 5 · `11:27 - 11:27`

. .

### Orador 4 · `11:48 - 11:49`

. . .

.

### Orador 1 · `11:49 - 13:09`

La otra condición es la condición de posesión y espera. ¿Eso qué quiere decir? Que efectivamente un proceso puede ser que tenga un recurso ya asignado, pero que en la siguiente iteración requiera un recurso adicional para poder finalizar.

O incluso tener tres o cuatro recursos ya asignados y requerir un último recurso para poder finalizar. Es la condición de posesión y espera. ¿Y la otra condición es la condición de no propición?

¿Qué es la condición de no propición? Bueno, la condición de no propición dice que ningún proceso puede quitarle de manera obligatoria un recurso que tenga otro proceso asignado. Entonces, volviéndonos a lo anterior, si yo tengo dos recursos y me falta uno para terminar, yo no puedo quitarle ese tercer recurso al proceso que lo tenga.

Entonces es la condición de no propición. Yo no puedo quitarle un recurso a alguien que ya lo tenga asignado. ¿La cuarta condición es la condición de espera circular?

Es decir, no debo esperar un evento que genera otro proceso que tiene asignado un recurso que yo necesito. Ahorita vamos a revisar mejor. Voy a quitarme porque me falta una de las condiciones.

### Orador 3 · `13:26 - 13:29`

Dígale que la lleve usted. ¿Qué está haciendo? ¿Qué es?

### Orador 4 · `13:30 - 13:32`

Estoy viendo la nota.

### Orador 3 · `13:35 - 13:40`

Dígale que se la traiga. Se llama exclusión mutua.

### Orador 7 · `13:45 - 13:50`

Y la exclusión mutua dice que un proceso o está asignado o está libre.

### Orador 1 · `13:50 - 14:31`

Es decir, solo existen dos posibilidades para ese recurso. Está asignado a un proceso o está libre para todos los procesos que quieran utilizarlo. Si se cumplen esas cuatro condiciones, entonces incluimos en una condición de bloqueo.

¿Cómo se modelan los bloqueos? Los bloqueos se modelan de esta manera. ¿Ok?

Esto es un recurso. Y esto es un proceso. Vamos a modelar una solicitud.

### Orador 3 · `14:35 - 14:37`

Una solicitud sería algo como esto.

### Orador 1 · `14:38 - 15:15`

Es decir, el proceso P está solicitando al recurso R. Luego tenemos una asignación. Y lo que diríamos es que el proceso P que solicita al recurso R, como R no está asignado, entonces el recurso R se le asigna al proceso P.

### Orador 3 · `15:17 - 15:28`

Y finalmente diríamos que el proceso P lidera al recurso R.

### Orador 1 · `15:28 - 15:51`

Es decir, el recurso R en este momento está disponible. Siguiendo entonces esta nomenclatura, podemos fácilmente entender cómo es que se genera una condición de un bloqueo. Principalmente mediante la posición de espera circular.

Si yo tengo... ¿Me dices si sale la pantalla o si todavía se ve? Si yo tengo...

### Orador 7 · `15:57 - 16:07`

A, B y C. Y R, S y T.

### Orador 1 · `16:15 - 17:00`

Si yo tengo algo como esto, tengo tres procesos, tres recursos. Pero cada proceso solicita al menos dos recursos. Entonces lo que tendríamos es algo como esto.

A solicita a R. R no está asignado, entonces se le asigna al proceso A. Luego viene B y solicita a S.

S no está asignado, por lo tanto se le asigna a B. Finalmente viene el proceso C y solicita a T, que T no está asignado y se le asigna a S. Después viene el problema.

### Orador 8 · `17:00 - 17:01`

¿Por qué?

### Orador 1 · `17:01 - 18:20`

Porque A solicita a S para poder finalizar su ejecución. Pero ¿qué pasa? S ya está asignado al proceso B.

Por lo tanto no se puede atender esa petición. Vamos a atender la siguiente petición. ¿Cuál es?

B solicita a C. Pero T está asignado al proceso C, por lo tanto no se le puede asignar. Finalmente viene el proceso C y solicita a R.

Pero ¿qué pasa con R? Ya está asignado al proceso A, entonces no se le puede asignar. Es decir, aquí lo que tenemos es evidentemente una esfera circular.

Un proceso que ya tiene asignado un recurso solicita otro recurso que ya está asignado a otro proceso. Y ese proceso solicita un recurso que ya está asignado a otro proceso y ese proceso solicita un recurso que ya está asignado a otro proceso. Es decir, aquí lo que tenemos es una condición en la cual hay un grupo de procesos de un conjunto que están solicitando un recurso que ya tiene otro proceso del mismo grupo.

### Orador 5 · `18:20 - 18:27`

¿Cómo resolvemos esa condición? Bueno, muy sencillo.

### Orador 1 · `18:28 - 20:19`

Eso lo resolvemos mediante una estrategia que se llama una asignación controlada. En la que fácilmente podemos decir A solicita a F, F no está asignado, F se le asigna a A. Nos brindamos al proceso B, votamos a C, C solicita a T, T no está asignado, se le asigna a C.

Finalmente A solicita a S, S no está asignado, S se le asigna. En cuyo caso, este proceso de una vez finaliza. ¿Quién finaliza?

Finaliza A y los recursos R y S quedaron libres. Finalmente vamos a atender a C. ¿Por qué?

Porque no tiene sentido atender a B, podría atender a B pero mejor libero completamente el recurso S. ¿Por qué? Porque se solicitaba a R, R está libre, se le asigna y el proceso C finaliza.

Y solo me queda ahora un proceso con todos los recursos disponibles por lo cual se va a poder ejecutar. Solicita S, está libre, solicita T, está libre, se le asigna y el proceso C ejecuta y finaliza. Eso es una asignación controlada de los recursos.

Entonces es una forma de poder romper la esfera circular. ¿Alguna duda hasta aquí?

### Orador 4 · `20:38 - 21:38`

Lo que se encontraba venido a su vida era completamente separado de la comunidad. Esto marca la salida del mundo. Algo está confiando.

Bien, bien, bien. Bien, ya nos vamos a la segunda zona. Pero por favor, a partir de este momento, preste atención a su sitio de su casa y a su familia.

Su hija cargaba con este acordeon.

### Orador 5 · `21:39 - 22:03`

Dijeron que era muy importante cerrar ese tercer ojo temporalmente ya que a su edad iba a ser demasiado traumático. para intentarse un poco de cosas. Accedimos inmediatamente a lo que ellos nos habían dicho.

Y la verdad es que, mientras yo vivía ese proceso, me pararon otras cosas que no se hicieron un día. Yo sé de que estábamos en una casa de hermanos.

### Orador 1 · `22:04 - 22:13`

Las estrategias para enfrentar bloqueos son cuatro. La primera es omisión. La segunda es recuperación.

Detección y recuperación.

### Orador 7 · `22:13 - 22:14`

Caballo.

### Orador 1 · `22:22 - 26:30`

Detección y recuperación. La tercera, evasión. Y la cuarta, prevención.

La prevención mediante la negación de las cuatro condiciones ya conocemos. La primera estrategia de enfrentar bloqueos ustedes la conocen muy bien. Cuando se les pone la pantalla azul y les aparece un montón de ceros.

Eso es omisión. Es decir, probablemente algo va a salir mal en ese contexto de ejecución. Pero la verdad es que, para lo que el usuario está haciendo, que él mismo lo resuelva.

Que le pegue el botonazo ahí. Oprima, control, alt, supreme. Eso es omisión.

Es decir, dejar simplemente que el usuario resuelva el problema que se le puede presentar. Entonces ya ustedes saben muy bien cuáles líneas encajan dentro de ese modelo. El segundo corresponde a detección y recuperación.

Detección y recuperación es la política que utilizan todos los kernels de Linux. Evasión, para ejecutar evasión implica prácticamente hacer un pre-ejecutado. Hasta ahora yo conozco solamente Solaris que ejecuta evasión.

Solaris es el sistema operativo preferido. Para los sistemas de bases de datos como Oracle. Entonces utilizan la estrategia de evasión.

Y finalmente, prevención mediante la negación de las cuatro condiciones. Esto solo se utiliza en procesamiento distribuido. Porque implica prácticamente modelar todos los posibles escenarios.

Donde podría eventualmente generarse un bloqueo. Entonces esto consume demasiado CPU. Por eso se tiene que hacer de manera distribuida.

Nosotros nos vamos a concentrar acá. En la estrategia de detección y recuperación. ¿Por qué?

Porque no solamente tiene que ver con el hecho de detectar que hay una posible condición de bloqueo. Sino además cómo salimos de esa condición. El asunto es que no se le puede delegar al usuario.

Sino que el mismo conjunto de servicios debe ser capaz de resolver esa situación. Entonces ahí nos vamos a concentrar. El primer caso consiste en...

Primero vamos a hablar de detección. Para hablar de detección tenemos dos posibilidades. Cuando tenemos un recurso de cada tipo.

Y cuando tenemos varios recursos de cada tipo. Primero vamos a hablar de detección y luego hablamos de recuperación. Entonces tenemos detección cuando tenemos un recurso de cada tipo.

Cuando tenemos un recurso de cada tipo lo que tenemos que generar es una matriz. Perdón, un vector. ¿Generamos un vector?

### Orador 12 · `26:43 - 26:45`

Generamos un vector de recorrido.

### Orador 1 · `26:48 - 26:51`

Vamos a ver un ejemplo que viene aquí para poder ubicarnos.

### Orador 5 · `27:49 - 28:07`

¡Vaya!

### Orador 4 · `29:03 - 29:04`

Vamos a ver.

### Orador 1 · `29:10 - 34:09`

Aquí tenemos un modelado en el cual todos estos son recursos de diferentes tipos. Un recurso de cada tipo. Es como si usted en su equipo se tuviera un disco duro.

Una impresora. Un monitor. Un teclado.

Un mouse. Un recurso de cada tipo únicamente. Y tenemos estos procesos.

A, B, C, D, E, F y G. Entonces vamos a hacer la secuencia de solicitudes para tratar de entender en el momento en que se puede generar un bloqueo. Y cómo llevar a cabo el proceso de detección.

Es lo que andamos buscando. Arrancamos diciendo que el proceso A posee a R. Dice que A posee a R.

Cuando dice que posee a R es que ya lo tiene asignado. Y desea a S. Desea a S quiere decir que S todavía no se le ha asignado al proceso A.

El 2 dice que el proceso B no posee recurso alguno. Y desea a T. Es decir, no tiene nada asignado y desea a T.

Dice que el proceso C no posee recurso alguno y desea a S. C no tiene nada asignado, desea a S. En el 4 dice que el proceso D posee a U y desea a S y a T.

Posee a U y desea a S y a T. Luego en el 5 tenemos que el proceso E posee a T. E posee a T.

Y dice que Desea a V. El 6 dice que el proceso F posee a W. Posee a W y desea a S.

En el 7 dice que el proceso G posee a V. Posee a V y desea a U. Y listo, se nos acabaron las solicitudes.

Este es el escenario que tenemos. Entonces, hasta este punto podemos hacer un análisis para determinar si hay alguna condición de bloqueo acá. Utilizando este vector.

Para utilizar el vector, el vector del recorrido. Lo hacemos para cada proceso. Entonces vamos a empezar con el vector de A.

Y el vector de A nos dice que, bueno, esto genera una lista en donde tenemos A. Como ya tiene algo asignado, empezamos en lo que tiene asignado. El proceso.

Y la solicitud S. Y ahí muere porque S no está asignado absolutamente a nadie. Entonces este sería el vector de el proceso A.

Tiene asignado a R. Está el proceso y el otro recurso que solicita que es S. ¿Cómo determinamos mediante el vector si el proceso está bloqueado o no está bloqueado?

Si el recurso, más de una vez, hay una condición de bloqueo. Si el recurso aparece más de una vez, tenemos ahí una condición de bloqueo. Entonces el proceso A, en este momento, no está bloqueado.

Vamos a ver el vector D.

### Orador 8 · `34:09 - 34:20`

Tiene nada asignado.

### Orador 1 · `34:21 - 35:49`

Empieza ahí. Luego solicita a T. Que T solicita a E.

Que E solicita a V. Que V solicita a G. Que G solicita a U.

Que U solicita a D. Y que D solicita finalmente a T. Si hago este recorrido, el recurso T aparece dos veces en el vector.

Por lo tanto, está en una condición de bloqueo. Lo que pasa es que en este caso tengo dos camionas posibles. ¿Por qué?

Porque cuando llegue aquí a D, voy a tomar la ruta de S. Y en este caso, esto, se encontraba en una condición de bloqueo, pero esto se encontraba en una condición libre. Entonces, cuando tenemos una condición como esta en la cual tenemos dos posibilidades, tenemos que tomar las dos rutas para determinar si en alguno de ellos, en el vector aparece dos veces el mismo recurso.

Con la aparición, al menos de una vez, entonces todo el proceso se encuentra en una condición de bloqueo. Vamos ahora al vector de C.

### Orador 7 · `35:54 - 36:04`

El vector de C sería... Allá tenemos a C. No tiene nada asignado.

### Orador 8 · `36:05 - 36:06`

C no tiene nada asignado.

### Orador 1 · `36:07 - 37:42`

¿Y a quién solicita? A S. Que no está asignado.

Por lo tanto, el proceso C, al igual que el proceso A, no están bloqueados. Vamos ahora al proceso D. Tenemos aquí a D.

Que D, hasta este momento, tiene asignado a S. Entonces empezamos en S. D, D, D, E, V, G, U, D.

Nuevamente. Entonces, dos veces aparece el mismo recurso en el vector, por lo tanto, se encuentra en una condición de bloqueo. ¿Sí?

¿Cuál? ¿En dónde? Ah, este es correcto, sí, porque vea que ese no está asignado.

Es una solicitud únicamente. Ok, ok, listo, listo, está bien. Perfecto.

Listo, vamos con el proceso. Y decimos que el vector de... Está aquí, ok.

Está cercamente en la misma condición, ¿verdad?

### Orador 8 · `37:42 - 37:43`

Porque ya tiene asignado a T.

### Orador 1 · `37:59 - 38:25`

Se repite el recurso en el vector, por lo tanto, está bloqueado. Sí, señor. El proceso, sí.

Decimos que para este contexto de ejecución, hasta este momento, los procesos B, D y E se encuentran bloqueados.

### Orador 4 · `38:26 - 38:37`

Ok, el proceso D.

### Orador 1 · `38:38 - 39:23`

Ajá. Sí. Sí.

Ajá. Igual, o sea, lo que pasa es que aquí yo puedo hacer los dos recorridos y voy a determinar que un recorrido no está bloqueado. Pero como ubiqué uno que sí está bloqueado, entonces automáticamente todo el proceso está bloqueado.

¿Ya? Hay que hacer las dos rutas. Hay que hacer las dos rutas, correcto, sí.

Ok. Vamos con F. F dice que tiene asignado a W.

F y solicita a S que no está asignado. Por lo tanto, este vector está limpio, este proceso no está bloqueado.

### Orador 8 · `39:23 - 39:23`

Ok.

### Orador 1 · `39:25 - 39:27`

Finalmente tenemos a G.

### Orador 8 · `39:33 - 39:46`

Ok. Que G tiene asignado a V, que es donde empieza. G.

U. D.

### Orador 1 · `39:47 - 40:00`

Y S, por ejemplo, y ahí muere. Ok. Y para ese camino no está bloqueado.

Vamos a hacer el otro. V. G.

### Orador 8 · `40:02 - 40:07`

U. D. T.

### Orador 1 · `40:11 - 40:23`

V. G. D.

Y aquí encontré dos veces el mismo recurso. Ok. Por lo tanto, este está bloqueado y todo el proceso está en una condición de bloqueo.

### Orador 8 · `40:23 - 40:23`

Ok.

### Orador 1 · `40:26 - 41:07`

Entonces, tenemos que de los 2, 4, 6, de los 7 procesos, tenemos 1, 2, 3 en una condición libre y tenemos 4 en una condición de bloqueo. Ok. Hasta aquí lo único que hemos hecho es darnos cuenta de que hay una condición de bloqueo en ese contexto de ejecución.

Ok. Estamos con detección. Ok.

Es decir, ya aquí detectamos cuáles son los problemas que están en esa condición de bloqueo. Ok. Entonces, estamos claros en cómo detectar cuando tenemos sólo un recurso de cada tipo.

Ok. Esto es un programa vacilóncimo.

### Orador 2 · `41:13 - 41:17`

Ya me imagino otra vez qué belleza. Como arroz.

### Orador 1 · `41:39 - 42:06`

Vamos ahora al modelado para detectar cuando tenemos varios recursos de cada tipo. Ok. Cuando tenemos varios recursos de cada tipo, entonces recuerden, ahora ya no tenemos un disco duro, sino que tenemos 2 discos duros o 3 discos duros.

No tenemos 2 impresoras, sino que tenemos 3 impresoras. No tenemos un escáner, sino que tenemos 2 o 3 escáneres. Ok.

Ese es el imaginario.

### Orador 8 · `42:06 - 42:06`

Ok.

### Orador 1 · `42:07 - 42:10`

Entonces, vamos a ver. El ejemplo dice que...

### Orador 8 · `42:12 - 42:13`

Dice que tenemos...

### Orador 1 · `42:38 - 43:22`

4, 3, 2, 1. Ok. Que tenemos...

Esos son unidades de cinta. Dice que estos son plotter. Que son 3 impresoras.

Y que estas son unidades de CD. Ok. Eso es lo que tenemos en este contexto de ejecución.

4 unidades de cinta.

### Orador 7 · `43:23 - 43:24`

¿Saben para qué se utilizan las unidades de cinta?

### Orador 1 · `43:26 - 47:59`

Las unidades de cinta se utilizan para hacer respaldos. Digamos, los sistemas de datos respaldan... Digamos, los...

Los bancos se hacen... Se tienen que generar en un medio físico. Bueno, en una empresa o una institución formal.

Se genera un respaldo diario. Se genera en una unidad física. Y ese dispositivo, un mensajero de correo de Costa Rica, lo recoge todos los días y lo deposita en un casillero que está guardado en una puerta bancaria.

Esto le permite la garantía a la institución o a la empresa de que si algo sucede, que el mecanismo de recuperación va a ser efectivo. Entonces... Unidades de cinta...

Bueno, son un dispositivo que se llama Z-Drive. Es algo parecido a un diskette, solo que es mucho más ancho. Vamos a ver, a un disco le caen...

A un CD le caen... Bueno, a los... A los...

A un DVD les caben 5 GB. 4.7 GB. Por ahí.

¡Qué llamadura! A un DVD le caben como 4.7 GB. A un Z-Drive le caben más o menos como...

Le caben como 25 GB. Entonces lo que se hace es que un Z-Drive... Digamos, la empresa normalmente tiene unos 5 dispositivos.

Entonces los va rotando. Los va rotando. Entonces, digamos, el mensajero llega hoy y guarda en el casillero del banco el de hoy y se lleva el último que trajo.

Entonces el respaldo... Digamos, va quedando un respaldo en el disco con una antigüedad prácticamente de un mes. Si tenemos 5 discos, rotan los 5 días de la semana.

Cada uno guarda 5 o 6 copias de la base de datos. Entonces tenemos como una rotación en ese repositorio como de un mes. Entonces tenemos una capacidad de reacción de un mes.

Ya dependiendo del grado de complejidad de la empresa, pues lo hará más periódico o utilizará más medios, pero más o menos así funciona. Luego tenemos los flutters, que los flutters son los dispositivos que utilizan para... Vamos a ver.

Cuando se utiliza... Cuando se trabaja con sistemas de información geográfica que se hacen impresiones en AutoCAD, o RGIS, o RView, o QC, o cualquiera de esos sistemas geográficos, se mantiene un dispositivo que es como un hub, como un rotercito que ustedes conocen, ¿verdad? En RJ45, pero solamente que los puertos son RS232.

Porque precisamente por el nivel de definición, las interfaces tienen que ser de esa manera, no son impresoras USB. Entonces ese dispositivo que llamamos flutter en realidad no es otra cosa más que como decir un rotercito, pero lo que tiene son 4 o 5 puertos de RS232. Entonces sale uno que va a la compu y va al hub ese y ese distribuye a 4 o 5 impresoras.

Luego tenemos 3 impresoras corrientes y una unidad de CD corriente. Eso es lo que sabemos que tenemos en este momento. Es decir, esos son los recursos con los que nuestro sistema cuenta en ese instante.

Luego decimos que tenemos un vector de recursos disponibles. Esto D quiere decir la existencia total. Es decir, eso es lo único que tenemos para poder repartir.

Luego tenemos el vector de disponibles. Ese vector de disponibles lo que tiene es esta cantidad de recursos. Eso quiere decir que en este instante de ejecución ya hay procesos que están utilizando recursos y por ejemplo, ya no tengo dos unidades de cinta, ya no tengo un flutter, ya no tengo ni una sola impresora ni tampoco tengo la unidad de CD que tenía.

Es decir, todo eso está asignado.

### Orador 11 · `48:00 - 48:09`

Y tenemos 3 procesos en ejecución. Ok.

### Orador 1 · `48:22 - 48:29`

Tenemos una matriz de asignación actual y finalmente tenemos una matriz de solicitudes.

### Orador 7 · `48:37 - 48:37`

Ok.

### Orador 1 · `48:38 - 49:54`

Esa asignación actual tiene en este momento 0, 0, 1, 0. 2, 0. 0, 1.

0, 1. 2, 0. Ok.

Eso de aquí quiere decir que tengo 3 procesos. A, B y C. Y que el proceso A ya tiene asignados una impresora.

El proceso B tiene asignados dos unidades de cinta y una unidad de CD. Y el proceso C tiene asignado un flutter y tiene asignado dos impresoras. Ahora vamos a ver qué es lo que cada proceso solicita para poder finalizar.

Ok. El proceso A solicita. El proceso A dice que para poder terminar necesita dos flutter y necesita una unidad de cinta.

El proceso B solicita una unidad de cinta y solicita una impresora.

### Orador 4 · `49:55 - 50:05`

Y finalmente el proceso C solicita dos unidades de cinta y un flutter.

### Orador 1 · `50:06 - 53:55`

Entonces, a este estado de la instancia de ejecución vamos a determinar si realmente es posible finalizar este contexto de ejecución y que todos los procesos terminen. Sabiendo que tenemos tres procesos en ejecución. Que tenemos un único vector de recursos en existencia.

Pero que a este instante de ejecución ya he asignado algunos. Y que tengo nuevas solicitudes y que lo único que tengo es ese vector de recursos disponibles para poder finalizar las solicitudes. Entonces, teniendo eso en consideración, yo diría que si solo tengo dos unidades de cinta y un flutter disponible.

¿A cuál proceso puedo atender? El único que tengo que fijarme es en las solicitudes nuevas. Y efectivamente el proceso que puedo atender es el proceso C.

¿Qué solicita el proceso C? Solicita efectivamente dos unidades de cinta y un flutter. Teniendo eso en consideración, mi nuevo vector de disponibles una vez que atiendo esa petición me queda completamente en cero.

¿Ahora qué pasa? ¿Cuál va a ser mi nueva matriz de asignación actual? Esto no va a cambiar.

El proceso A no va a cambiar. Ni el B tampoco. Las solicitudes de A no han cambiado.

De B tampoco han cambiado. Pero el proceso C finalizó. ¿Y qué devolvió?

Devolvió cero, uno, dos, cero. Esto aquí arriba. Y finalizó.

Y también devolvió lo que se le asignó en la última solicitud. Es decir, el proceso A finalizó. ¿Qué me queda ahora nada más?

El proceso C fue el que finalizó. ¿Y cómo me queda mi nuevo vector de recursos disponibles? Me queda cero, dos, dos, dos.

Ese es mi nuevo vector de recursos disponibles. ¿Con este vector de recursos disponibles cuál proceso puedo atender? Al proceso A que solicita dos unidades de cinta, sí tengo dos.

Una unidad sí, no tengo unidad sí. Al proceso B que solicita una unidad de cinta, más bien tengo dos. Y solicita una impresora, ¿cuántas tengo?

Tengo dos. Entonces voy a atender a ese proceso. ¿Qué le vamos a quitar?

Lo que estoy asignando actualmente. ¿Ok? Cero, uno, dos, uno.

¿Ok? Ahora sí, atiendo al proceso B. Mi nuevo vector, perdón, las solicitudes de A no van a cambiar.

Cero, cero, uno, cero. Ni tampoco lo que solicita. ¿Y quién finaliza?

B. ¿En este caso? Por lo tanto solo me queda el proceso A por atender.

### Orador 7 · `54:06 - 54:12`

¿Ok? Ahora sí. ¿Qué liberé aquí?

### Orador 1 · `54:13 - 55:05`

¿Qué liberé aquí? Liberé dos, cero, cero, uno. ¿Y qué libero aquí?

Uno, cero, uno, cero. ¿Qué me queda como nuevo vector de recursos disponibles? Uno, dos, dos, cuatro.

Si tengo este nuevo vector de recursos disponibles, ahora sí puedo atender el proceso que solicita. Dos unidades de cinta, tengo cuatro. Una unidad de C y tengo una.

Le quito lo que voy a asignar, dos, uno. ¿Qué me queda? Me queda cero, dos, dos, dos.

¿Ok? ¿Y qué va a pasar? Bueno, que finalmente...

A termina.

### Orador 7 · `55:08 - 55:11`

B ya había terminado, C ya había terminado.

### Orador 1 · `55:12 - 56:07`

No tengo ninguna solicitud. ¿Y qué devuelvo? ¿Qué devuelvo acá?

Una impresora. Una impresora. ¿Y qué devuelvo acá?

Dos unidades de cinta y una unidad de C. ¿Cuál es mi nuevo vector de recursos disponibles? ¿Ok?

Y esto, si todo salió como tenía que salir, tiene que ser exactamente igual a el vector de recursos existentes que tenía originalmente. Aquí no me puede sobrar absolutamente ningún recurso. ¿Estamos?

Ahora sí, ¿cómo se verá eso en C? Corriendo.

### Orador 2 · `56:10 - 56:13`

Buena foto. ¿Cómo se ve? Estamos en una fotillo de superman.

### Orador 1 · `56:13 - 56:13`

¿Buena foto?

### Orador 2 · `56:14 - 56:19`

Sí. ¿Qué? ¿Me bajaron un proyecto duro ahora sí?

### Orador 1 · `56:20 - 56:25`

No, no, hombre. ¿Apenas para calentar? ¿Apenas para calentar?

### Orador 2 · `56:37 - 56:44`

Pero es una pregunta así, fuera de todo. ¿Usted trabaja en alguna empresa o trabaja así desde desarrollador?

### Orador 1 · `56:46 - 56:48`

Sí, es correcto, Galea.

### Orador 7 · `56:48 - 56:49`

¿Trabaja o trabajaba?

### Orador 1 · `56:50 - 56:55`

No, trabajaba. Los primeros años trabajé en...

### Orador 8 · `56:55 - 56:55`

vamos a ver.

### Orador 1 · `56:56 - 59:06`

Hay una organización que se llama el DAF. Es como una agencia de cooperación alemana en Costa Rica. Entonces, en el 90 era muy fuerte.

Bueno, finales de 90 era muy fuerte. Vamos a ver, digamos que el DAF era el que gestionaba todo lo que eran becas de cooperación a Centroamérica. Entonces, la mayoría de universidades europeas mandaban tesieros acá a hacer prácticamente las tesis.

Entonces, por ejemplo, había mucha gente de geografía, de hidrografía, de forestales, de agricultura sostenible. Que eran como los sistemas de corriente. Entonces, en el DAF, digamos, llegaban las solicitudes, entonces decían, bueno, ahí va una caja con un montón de dispositivos y vamos a hacer una tesis en el volcán arenal para medir sinicidad.

O para medir con dispositivos sensores de olor para medir niveles de azufre y cosas de ese tipo. Entonces, había que hacer las instalaciones, había que programar las aplicaciones, que se conectaran al dispositivo, que hicieran el bajado de datos y cosas de ese tipo. Principalmente trabajábamos con eso.

Digamos que lo que se desarrollaban eran aplicaciones precisamente que hicieran vacíos de datos y que hicieran análisis, análisis de interpretación. Y en la mayoría de los casos, eso era, digamos, casi todo eran gráficos. Se expresaban como gráficos, o medias gráficas.

Y después ya había lo administrativo ahí, pero eso era muy básico. Era lo que era control de activos, control de personal. Porque, digamos, en ese tiempo sí el DAF tenía bastante personal.

Había como unas 180 personas. ¿Quién está hablando?

### Orador 2 · `59:08 - 59:08`

Yo, yo, yo.

### Orador 1 · `59:10 - 59:43`

El DAF era una barra como el CATI, más o menos. La verdad es que el DAF no daba, digamos, no daba grados académicos, sino que lo que hacía era que solamente llegaban investigadores o la mayoría testearios. Y entonces el trabajo principalmente era tratar de trabajar con dispositivos y programar aplicaciones que hicieran análisis de los datos que generaban.

¿Sí?

### Orador 2 · `59:44 - 59:53`

Sí, sí. ¿Y por qué se retiró Francis Gamming a la prórroga? ¿Por qué?

¿Dónde se retiró?

### Orador 9 · `59:53 - 59:54`

Ya lo mató.

### Orador 1 · `59:57 - 1:02:45`

Bueno, este, más o menos como en el, como a inicios del, como en el 2005, usted sabe que, bueno, el DAF empezó a perder muchos socios y quien empezó a ganar socios fue Taiwán. Entonces, digamos, se instalaron muchas instituciones acá que tenían alianzas con Taiwán y entonces la barra de tecnología se disparó. Entonces yo me pasé, me pasé a Linta, porque Linta era el que le daba soporte a la gente de Taiwán.

Pero eso fue flor como de, como de tres o cuatro años. Porque después vino el convenio con China, entonces el amor era con China, entonces mandaron a volar a los, a los taiwaneses, pero los mandaron a volar, o sea, eso es literal, digamos. Esos madres los liquearon y de todo.

Este, yo por ejemplo, digamos, conozco ahí, ahí guapiles, por suerte, hay unos madres que son taiwaneses y esos madres sí, digamos, se eran dos hermanillos. Casi, esos madres trabajaron mucho en la barra genética de una variedad que se llama Girolando, que es un proceso de ganado, este, guir con hoste para producción de leche en bajura. Esos madres son unos bichos en la barra genética.

Tan es así que yo, o sea, son muy compas, entonces yo fui hace como tres años y vea que nivel de mentalidad de esos bichos, madre. Esos madres estaban, estaban, este, con unos criaderos de, de, de pitbull, pero, este, puros, con padrotes de, unos padrotes mexicanos y otros, este, rusos, y tenían un proyecto de cabra, madre, y la barra de las cabras era, madre, para producir leche para criar las crías de los, de los, de los pitbull, madre. Imagínense cuánto valía una cría.

O sea, ni siquiera los vendían aquí, esos madres todos los tenían vendidos, madre. En Panamá y en Colombia y en, de todos lados los tenían vendidos. Pero sí, digamos, por ejemplo, esa, digamos, esa barra fue una, digamos, es una realidad.

Eso se mueve mucho por política. Entonces, por ejemplo, digamos, por eso es que muchos proyectos mueren o que hayan nada, porque, digamos, cambian, cambian las alianzas estratégicas y entonces toda esa barra queda botado, verdad. Sí.

Ah, bueno, entonces, después de eso, como, como, como ese, como ese escenario era tan incierto, verdad, este, bueno, se ganaba muy bien, pero era muy incierto. Entonces, este, me salió la oportunidad con la, con la UCF, entonces, bueno, en realidad yo nunca me negué de la U. Desde que yo saqué el machi, empecé a trabajar con la U, y entonces, este, me ayudaron con el, con el grado en TEC, y entonces, este, seguía dando cursos.

O sea, yo nunca, nunca me negué de la U. Ya después, lo que hice fue que ya dejé todo lo de otra parte y ya me dediqué solo a la U. Verdad.

### Orador 2 · `1:02:45 - 1:02:49`

Se dedicó a maltratar gente ya a tiempo completo.

### Orador 9 · `1:02:50 - 1:02:55`

Ya, ya, ya lleva, ya lleva años en esto. Ya lo hiciste con la U. Con gente operativa.

### Orador 2 · `1:02:57 - 1:03:11`

Ok, bueno, que he dicho que no hay ninguna duda, entonces. No, pero yo no tengo ninguna duda. Ah, dígame.

Ok. Bueno, en las, en la columna, en la tercera columna, donde se van restando y todo eso, los procesos quedan ahí.

### Orador 1 · `1:03:11 - 1:03:12`

Los recursos disponibles.

### Orador 2 · `1:03:13 - 1:03:22`

Ajá, los recursos disponibles. Ok, cuando entra el primer proceso y le resta a lo primero, quedan puros ceros, pero en la que sigue queda cero, uno, dos, cero. Ok, ok, ok.

### Orador 1 · `1:03:23 - 1:03:37`

Y esto corresponde a esto. Ok. Una vez que atiendo la solicitud, el que atendí fue a C, verdad.

Sí, efectivamente. Como yo, el proceso finaliza, ¿qué es lo que hace? Devuelve los recursos.

### Orador 8 · `1:03:38 - 1:03:38`

Ok.

### Orador 1 · `1:03:42 - 1:03:49`

Eso es lo que hace. Los devuelvo al nuevo vector de disponibles y ahora este es mi nuevo vector de recursos disponibles.

### Orador 2 · `1:03:50 - 1:03:56`

Sí. Ah, listo, entonces. O sea, cuando ellos finalizan hasta que terminan de utilizar todos los recursos.

### Orador 1 · `1:03:56 - 1:04:15`

Devuelven, ¿qué devuelven? Tanto lo que ya tenían como lo que yo les acabo de asignar, porque por eso pudo finalizar. Sí.

Lo que hay que entender es que trabajamos con dos matrices. Una, la asignación actual, que es el proceso A, ya tiene algo asignado y solicita algo más.

### Orador 8 · `1:04:15 - 1:04:15`

Ok.

### Orador 1 · `1:04:16 - 1:04:20`

Entonces, cuando el proceso finaliza, pues libera tanto lo que ya tenía como lo que le acabo de asignar.

### Orador 2 · `1:04:24 - 1:04:27`

Y entonces los procesos finalizan cuando caen en puros ceros.

### Orador 1 · `1:04:28 - 1:09:46`

Correcto, sí. El escenario ideal sería algo como esto, ¿verdad? Si no llegamos a esto, entonces tenemos problemas.

Y es donde tenemos que aplicar ahora sí las estrategias de recuperación. Hasta ahora, ¿qué hemos hecho? Solo detección.

Vamos con recuperación. Ok. Las estrategias de recuperación son tres.

La primera... Eh... Ok.

Las estrategias son tres. Apropiación, rollback y eliminación. ¿Apropiación de qué?

Apropiación del recurso. Es decir, aquí una vez que, por ejemplo, por alguna razón... Por ejemplo, en el anterior, donde yo identifique que tenía una condición de bloqueo.

Había cuatro que estaban en un ciclo ahí. Entonces yo podría aplicar apropiación. ¿Qué es?

Ahora sí, ahí yo le podría dar el derecho a uno de los procesos de ese ciclo a que coja lo que él necesita. ¿Ok? Entonces, eso es una estrategia para poder recuperarme de aquella condición de bloqueo.

¿Ok? Entonces, pero primero yo tuve que haber demostrado, mediante la técnica del vector de recorrido o las matrices de asignación, que hay una condición de bloqueo. Entonces, la primera condición es la condición de apropiación.

Yo le estamparía a un proceso la etiqueta de apropiación. Y inmediatamente rastrearía a ver si ese proceso salió a esa condición. ¿Ok?

Si no, le cambio la etiqueta de apropiación a otro proceso. Pero yo identifique un grupo de procesos. Ah, ok, sonamos el proceso.

A, F, G y Z. Entonces, la apropiación primero se la voy a A. No funcionó, no salió.

Ok, se la vamos a dar a F. No sale, se la vamos a dar a Z. Ok, Z sí salió.

Y ahora vamos con otros tres. ¿Cómo hacemos con otros tres? Vamos dándole apropiación a cada uno de ellos.

¿Ok? ¿Estamos claros con la primera? Apropiación.

¿Estamos? Ok. Vamos con la siguiente técnica.

La siguiente técnica, vamos vacilona, rollback. ¿Ok? ¿Qué significa rollback?

Rollback significa devolverse. Rollback es un concepto muy, muy utilizado por Oracle. De hecho, hay una estructura que se llama los rollback tablespace.

¿Qué son? Son cuadros de todo lo que en una tabla se va haciendo. De tal forma que eso me permite poder restaurar una transacción alterada.

¿En qué consiste esto entonces? Bueno, recuerden que en el primer caso había una secuencia de ejecución. Esa secuencia de ejecución yo fui elaborándola para montar los vectores.

Entonces, si yo en un momento detecto que hay una condición de bloqueo, yo me devuelvo. Y entonces lo que haría es hacer una asignación controlada. Es decir, ya ahora, recuerden que tenía yo aquí algo así como G, que era un proceso, V, T.

Y que entonces él tenía asignado a T y solicitaba a V. Entonces, ahora yo me devuelvo y ahora voy a decir, no voy a atender al proceso V que solicita a V. Y se le asigna, sino que esto no lo voy a atender.

Me devolví y entonces, cuando G solicita T que no está asignado, se le asigna, solicita a V. Ya V está libre, se le asigna. Entonces es devolverse y hacer una asignación controlada de los recursos.

Eso significa rollback. Así es que ya saben que definitivamente vamos a ocupar un archivo. Un archivo en donde vamos a ir registrando todas las asignaciones para posteriormente hacer rollback.

Para poder devolverme y hacer una asignación. Y nuevamente tengo que rastrear a ver si finalmente los procesos salieron de esa condición. Y el último, ya sería el plan miedo, es echarse un proceso.

Es decir, un proceso lo vamos a quitar. Así, ya ese proceso haya tenido, ya se le haya asignado algo, lo eliminamos. Y si lo eliminamos, ¿qué va a pasar?

Lo vamos a poner de nuevo en la cola de solicitudes. Pensando en que probablemente lo que ese proceso libere, me permita que otros puedan avanzar. Entonces esas son las tres técnicas de recuperación que tenemos.

¿Alguna duda? ¿Alguna duda?

### Orador 2 · `1:09:52 - 1:09:56`

¿Cómo se llamaba esa última? Eliminación se llama.

### Orador 1 · `1:09:57 - 1:11:02`

Si usted busca en internet ahí, política de recuperación de bloqueos. Ahí viene la librería, eliminación.se se llama. Tene nada más la llama y ya.

¿Ya estamos? Esas son las tres técnicas. Entonces lo que vamos a implementar efectivamente son las dos estrategias para detectar si hay una condición de bloqueo.

Y después de eso vamos a aplicar las tres condiciones. Primero aplicaría apropiación. Si no salimos de la condición aplicando apropiación, aplicamos rollback.

Si no salimos ni con apropiación ni con rollback, aplicamos eliminación. ¿Estamos? Ya y ese sería el proyecto entonces.

No se diga más. ¿Les parece?

### Orador 2 · `1:11:03 - 1:11:14`

Profe, y si ese es el proyecto. Bueno, el vector ese de recursos iniciales que se van a ir poniendo en las matrices y demás. ¿Eso se genera?

¿Lo generamos igual? ¿Generamos los procesos del anterior de forma lateral?

### Orador 1 · `1:11:15 - 1:11:17`

Correcto, correcto, sí, sí.

### Orador 2 · `1:11:18 - 1:11:27`

Ok, y la matriz, bueno, donde se trabaja. Bueno, ella va a tener el tamaño que nosotros le predispongamos.

### Orador 1 · `1:11:28 - 1:11:35`

Sí, esa matriz va a tener ya un tamaño fijo porque ya los recursos ya están determinados.

### Orador 2 · `1:11:39 - 1:11:41`

Profe, ¿y cuánto tiempo tenemos para esto?

### Orador 1 · `1:11:42 - 1:11:42`

¿Para qué?

### Orador 2 · `1:11:43 - 1:11:44`

Para entregar el proyectillo.

### Orador 1 · `1:11:45 - 1:11:51`

Para empezar, tienen hoy todo el resto del día. Y todos los días de esta semana.

### Orador 2 · `1:11:52 - 1:11:55`

Salva, que matricule todos los otros cursos.

### Orador 1 · `1:11:59 - 1:14:17`

Todos los otros cursos ya están arreglados, no se preocupe por eso. Ok, vamos a hacer una cosa. Voy a ir a tomarme algo porque tengo como hacia hambre.

Creo que está para el, aquí abajo puse la fecha. Para el primero de julio. El viernes que sigue, desde el viernes en ocho.

Ok, bueno, entonces este proyecto es de bloqueos. Implemente un programa ASEC que administre los bloqueos en un taller de mecánica. Dice que en el taller de mecánica tenemos los siguientes recursos.

Tenemos estas tres categorías. Cuatro. Perdón, tres sí.

Mecánicos, máquinas y herramientas. Mecánicos, tenemos estos perfiles. Electricistas, pintores, mecánicos de motor, mecánicos de caja, mecánicos de roto de suspensión, mecánicos de gas.

Y llantero. Tenemos las siguientes máquinas. Dos gatas hidráulicas, dos pistolas de pintar, un torno, una soldadura.

Tres sopladoras y un servicio sanitario, muy importante. Luego tenemos las siguientes herramientas. Tenemos un teléfono, un juego de cubos.

Ese juego de cubos tiene esas llaves del 1 al 30. Aquí tenemos dos Rush. El Rush es la llave con la que funcionan los cubos.

Es decir, a pesar de que yo tenga 30 cubos aquí arriba, solo tengo posibilidad de usar dos de ellos en un instante. Luego tengo dos desatornilladores Phillips que son los de punta cruz. Tengo dos desatornilladores corrientes punta...

### Orador 10 · `1:14:20 - 1:14:21`

Punta plana.

### Orador 1 · `1:14:27 - 1:15:09`

Tengo cuatro alicates y tengo un juego de llaves finas. Del 10 al 30. Así es que si los cubos están ocupados y hay llaves de esa numeración, se pueden tomar.

¿Eso qué quiere decir? Que tenemos cubos que van de la numeración del 1 al 30. Pero si alguien ocupa un cubo número 7 y ese cubo está ocupado, entonces puede venir a buscar acá dentro de las llaves fijas.

Si la llave 7 está desocupada, entonces puede utilizarla. Entonces estamos claros con los recursos. Tenemos mecánicos, tenemos máquinas y tenemos herramientas.

### Orador 9 · `1:15:10 - 1:15:15`

¿Alguna duda con los recursos? Pero no hay llave fija de 7, digamos. Solo de 10 al 30.

### Orador 1 · `1:15:15 - 1:15:47`

Sí, perdón, perdón. Arriba del 10, que toque. Es para ver si está poniendo tensión, Calián.

Obvio, obvio. ¿Alguna duda con los recursos? Los únicos que hay plan B es para los cubos, ¿verdad?

Es decir, la primera alternativa sería usar un cubo. Si el cubo está ocupado, si el rush está ocupado y el cubo está ocupado, entonces voy a pulsar con la llave fija. ¿Estamos?

### Orador 3 · `1:15:50 - 1:15:56`

Entonces tenemos estos tres categorías de recursos.

### Orador 1 · `1:15:56 - 1:16:19`

Es decir, aquí vamos jugando con la política de varios recursos de cada tipo. Hasta aquí estamos. Ok, ahora sí.

Vamos a poner una rutina para determinar para cada solicitud de reparación. Entendida que cada solicitud es un hilo. ¿Hilos?

### Orador 7 · `1:16:20 - 1:16:20`

Estrictamente.

### Orador 1 · `1:16:21 - 1:19:07`

Ok. Es decir, sí o sí, hilos. Ok, en realidad cada solicitud es una orden de reparación de un vehículo cuyo valor de registro será el número de placa.

Es decir, que tenemos una cola de solicitudes siempre con diez peticiones nuevas. La cola siempre va a tener diez peticiones nuevas. Y cada petición nueva tiene la rutina de reparación que incluye un programa con los mecánicos que será un aleatorio entre tres y uno de cada tipo que van a intervenir en la reparación, el tiempo que cada mecánico va a tardar en cada una de las máquinas y las herramientas que van a utilizar.

Entonces, la rutina que implica qué recursos voy a utilizar y cuánto tiempo voy a utilizar cada uno de esos recursos. Y pues por supuesto que el orden. Yo podría perfectamente entender si ustedes lo tienen bien de programarlo no en orden sino en función de los recursos disponibles también.

¿Verdad? Eso es algo que ustedes valoran. Eso no tiene mayor relevancia.

Dice que sólo un mecánico va a atender cada tarea. Es decir, las tareas no se ejecutan de manera simultánea. Dice, pero esa tarea puede ocupar más de una máquina o utilizar más de una herramienta.

Esto sí es importante. Aquí es donde entra el tema de la competencia por los recursos. Y la condición de posesión espera.

Tengo asignado ya algo y solicito algo más. Tenemos máquinas apropiativas y no apropiativas. Tenemos herramientas apropiativas y no apropiativas.

Y al inicio determinamos aleatoriamente cuáles son apropiativas y cuáles no. Recuerden que los recursos que son apropiativos pueden ser interrumpidos. Esa es una permisa fundamental.

Los recursos que ustedes determinen son de carácter apropiativo. Entonces el recurso puede tener lo que está haciendo y atender una nueva petición. Tenemos siempre una cantidad aleatoria de entre 10 y 25 reparaciones simultáneas.

Eso ya ustedes lo definen. Cada cierto periodo de tiempo se coge una rutina que determina ese valor aleatoriamente. Es decir, el ciclo de ejecución.

La tarea consiste en hacer detección de bloqueos, ya sea en la modalidad de un recurso de cada tipo. Es decir, esta no la vamos a aplicar en este caso.

### Orador 3 · `1:19:08 - 1:19:22`

Vamos a aplicar solamente varios recursos de cada tipo. Bien basados en el principio de posición y esperanza.

### Orador 1 · `1:19:23 - 1:19:42`

Aplicaremos los métodos del vector del recorrido para el caso de recursos de este lo que vamos a utilizar. La matriz de asignación para el caso de varios recursos de cada tipo.

### Orador 3 · `1:19:43 - 1:19:53`

Y finalmente aplicar la respectiva política de recuperación y orden respectivo. Primero, apropiación. Si no lo solucionan, rollback.

Y si no lo solucionan, eliminación.

### Orador 1 · `1:19:54 - 1:20:36`

Lo que podemos hacer es que lo programen quemado. Es decir, en un instante ejecutamos solo una rutina. Lo podemos lanzar y ejecutar utilizando rollback.

Y lo volvemos a lanzar utilizando eliminación del proceso. Porque si no es muy poco probable que sean presentes las condiciones para que se ejecute. Primero apropiación, luego rollback y finalmente eliminación del proceso.

Es muy muy muy poco probable que eso suceda. Y una solicitud se podría dar, digamos, como se suele sacar. Tenemos mecánicos, tenemos máquinas, tenemos herramientas.

### Orador 3 · `1:20:36 - 1:20:43`

En caso de esta solicitud tenemos el ID, que es el número de placa. Tenemos el tiempo total.

### Orador 1 · `1:20:45 - 1:21:18`

Tenemos que ocupar mecánicos, electricista y un mecánico de motor. Y las máquinas que vamos a utilizar va a ser un torno o una soldadora. Y las herramientas que vamos a utilizar es un philips, una llave y aquí está el tiempo del grosado.

Es decir, esto es muy importante que lo saquen bien preciso. Así en algún tiempo total y después la distribución tiene que sumar esa cantidad de tiempo. Porque si no, nos perdemos.

### Orador 3 · `1:21:21 - 1:21:27`

Vamos a ir un poquito más adelante del puente de la sala 4. Ahí al frente de la tarimera fue.

### Orador 1 · `1:21:29 - 1:21:37`

Aquí dice Arturo y Yafel que si no hay otro más fácil.

### Orador 3 · `1:21:39 - 1:21:40`

Aquí está.

### Orador 1 · `1:21:40 - 1:21:43`

Por eso no me cerraron, aquí está. Porque también se ocupaba ya entero 5 minutos.

### Orador 3 · `1:21:44 - 1:21:52`

Desde el colegio ahí cada uno se separa, pero ese man era mi amigo. ¿Dudas? Yo propio una duda ahí.

Estás de estos.

### Orador 2 · `1:21:54 - 1:21:56`

Haces el proyecto con hambre o algo así.

### Orador 1 · `1:22:01 - 1:22:06`

Ok. Y lo vamos a hacer en grupos máximo de dos.

### Orador 10 · `1:22:07 - 1:22:08`

Mínimo de uno.

### Orador 1 · `1:22:10 - 1:22:44`

Ok. Ustedes se organizan ahí, nada más me dicen quiénes son y listo. Pero estamos claros.

Lo más importante es esto. Esta inicialización o esta estructura correctamente. El inicio de la solicitud es fundamental.

Mínimo 3 mecánicos. Mínimo 2 máquinas. Y creo que eran mínimo 4 herramientas, si no me equivoco.

Ok. Ok.

### Orador 10 · `1:22:48 - 1:22:58`

¿Quién está dando solicitud? Joel. ¿Cómo vas?

Joel, Joel no habla.

### Orador 2 · `1:23:01 - 1:23:17`

Hola, hola, hola. No, la matriz es la misma que hicimos nosotros.

### Orador 1 · `1:23:17 - 1:23:19`

Los procesos, procesos y recursos.

### Orador 2 · `1:23:20 - 1:23:25`

Ok. Correcto, correcto, ya, ya, ahora sí, ahora sí.

### Orador 1 · `1:23:25 - 1:23:37`

Es correcto, es correcto, sí. Eso sí es muy importante, ¿verdad? Eso sí es muy, muy importante.

Que puedan manejar un timer ahí para controlar el tiempo. Porque eso sí es fundamental.

### Orador 6 · `1:23:42 - 1:23:50`

Profe, hay que aplicar las dos, digamos, las dos rutinas. O solo se puede elegir una para todo.

### Orador 1 · `1:23:53 - 1:23:54`

¿Cuáles dos rutinas calíamos?

### Orador 6 · `1:23:55 - 1:23:59`

La de varios y la de otra. No, no, no.

### Orador 1 · `1:24:00 - 1:24:05`

Ese proyecto solo lo vamos a aplicar sobre la política de varios recursos de cada tipo.

### Orador 9 · `1:24:06 - 1:24:07`

Sí.

### Orador 1 · `1:24:10 - 1:24:18`

La otra mitad del proyecto me la volé, mejor. Que era la de un recurso de cada tipo.

### Orador 9 · `1:24:23 - 1:24:31`

Recuerda, porque era... Un motor potente. ¿Ah?

Un motor potente con ese ahí para bajar el tiempo, yo creo.

### Orador 1 · `1:24:32 - 1:25:11`

La otra parte, la otra parte era, era muy interesante porque era sobre la parte eléctrica de los vehículos. Porque en esa, en esa sí, los dispositivos son muy específicos. Digamos, normalmente en un taller solo hay un tester, solo hay una máquina de medir amperaje.

Solo hay una máquina de medir generación de bobina. Eran cuatro recursos, pero... Pero al final, mejor lo dejamos así, facilito.

Pero pueden llegar ahora, claro. De una, sí.

### Orador 3 · `1:25:13 - 1:25:17`

A ver, ¿dudas? Mata, ¿quién está yendo a la zapata, güey?

### Orador 10 · `1:25:18 - 1:25:22`

Papi, yo. Y el tío es grandísimo.

### Orador 3 · `1:25:22 - 1:25:24`

Para ese tipo son las zapatas, güey.

### Orador 10 · `1:25:26 - 1:25:28`

Parezco extraña disparando en los ojos, amigo.

### Orador 3 · `1:25:28 - 1:25:32`

Sí, güey. Dígame.

### Orador 2 · `1:25:33 - 1:25:49`

Bueno, ya le mencioné. Bueno, ya me respondió que en cada espacio se le iba a asignar el tiempo, ¿verdad? En lo que es la matriz.

Ahora, en lo que es el vector de recursos iniciales, ¿cómo se administra ese tiempo para que se pueda utilizar? No, no, no.

### Orador 1 · `1:25:49 - 1:26:26`

En el vector de recursos iniciales, recuerda, solo van recursos disponibles y los recursos asignados. Y las solicitudes. Entonces, ahí es donde usted tiene que ir controlando, ¿verdad?

Para la unidad de tiempo, si ya ese recurso ya se liberó o si no se ha liberado. Pero lo más importante es eso, digamos, es decir, usted en un instante dado, usted tiene 5 o 7 solicitudes donde tiene recursos ya asignados y solicitudes de otros recursos, ¿ok? Eso es lo que se pone bonito ahí, ¿verdad?

Ese es el asunto complicado.

### Orador 6 · `1:26:29 - 1:26:42`

Entonces, por ejemplo, si un proceso tiene todos los recursos para él y durante cada ejecución que va a él, ese tiempo se va restando para que queden disponibles algunas, me imagino.

### Orador 1 · `1:26:43 - 1:27:33`

Es correcto, sí, sí, es correcto. Ahora, recuerde que el problema que tenemos es con los recursos que son apropiativos, ¿verdad? Porque, o sea, es decir, si el recurso es apropiativo, usted no puede asumir que una vez que entró una solicitud, nadie más va a tener acceso a ese recurso, ¿no?

Si es apropiativo, el problema es que constantemente lo van a estar quitando, ¿sí? O sea, no se trata nada más de decir, bueno, el desatornillador Philips se va a usar 3 minutos y desde que entra el proceso a solicitarlo, si es apropiativo, desde que entra hasta que finalizan los 3 minutos ya el proceso queda libre, el recurso queda libre. No, porque si es apropiativo y llega otra solicitud y lo necesita, va a desplazar al proceso anterior, ¿verdad?

Sí.

### Orador 6 · `1:27:34 - 1:27:45`

Y en ese caso, te dieron 3 minutos, corrió un poquito y esa... Sí, sí. Y ese dato de ese tiempo para...

### Orador 1 · `1:27:46 - 1:29:16`

Es correcto, es correcto, hay que guardar ese dato de ese tiempo y la siguiente vez que vuelve a final el recurso continúa a partir del momento en donde se le había sancionado. Veamos, ese proyecto parece sencillo, tiene el aspecto de ser muy sencillo. Es muy complejo coordinar el tema de los recursos apropiativos, eso es lo más complejo, ¿ok?

Es decir, el pensar en que un recurso constantemente está siendo asignado a uno, se quita, entra otro, se quita, entra otro. Es decir, usted tiene que definir mínimo una unidad de tiempo de uso. Es decir, ese proceso, aunque sea apropiativo y aunque el recurso sea apropiativo, tiene que sumar al avance, ¿ok?

Porque si no, entonces ahí tenemos un problema gravísimo, que es que un proceso quita otro, y quita otro, y quita otro, y entonces el problema es que ninguno está avanzando, pero ni medio segundo. Entonces hay que definir una unidad mínima de avance, ¿ok? Aunque sea apropiativo, el concepto que vamos a aplicar es que no monopolice el recurso, sino que alguien lo puede desplazar, pero ya con un avance de uso, ¿ok?

¿Ok?

### Orador 10 · `1:29:23 - 1:29:23`

¿Estamos?

### Orador 3 · `1:29:27 - 1:29:31`

Ok, pregunta.

### Orador 1 · `1:29:32 - 1:29:37`

¿Quiere dejar la entrega para el próximo martes o quiere que la extendamos para ese viernes?

### Orador 6 · `1:29:45 - 1:29:47`

¿Viernes? Ok.

### Orador 1 · `1:29:47 - 1:30:00`

Ahora, si la dejamos para viernes, ustedes tienen que disponer de un rato, ya sea en la mañana o en la tarde, para que podamos hacer la entrega al proyecto. ¿Viernes sin clases?

### Orador 6 · `1:30:02 - 1:30:08`

Bueno, en mi caso ya no hay viernes sin clases. Sería porque yo sí trabajo los viernes.

### Orador 1 · `1:30:09 - 1:30:11`

¿Quién está hablando? Perdón, ¿quién?

### Orador 6 · `1:30:11 - 1:30:11`

Jay.

### Orador 1 · `1:30:11 - 1:30:12`

Vamos a dejar de compartir.

### Orador 7 · `1:30:16 - 1:30:17`

Yo, Jay, estoy trabajando.

### Orador 1 · `1:30:17 - 1:30:18`

Jay está trabajando.
