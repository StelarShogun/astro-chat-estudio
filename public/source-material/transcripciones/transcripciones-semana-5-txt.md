# Semana 5

### Orador 1 · `0:02 - 1:38`

Estamos grabando, creo que ahí se ve bien toda la toda la pizarra, me dicen ahí cómo se ve Perfecto profesor, que listo, ok, vamos entonces a detallar el Los algoritmos de planificación de CPU

### Orador 2 · `1:39 - 1:49`

Ok, vamos a ver un momentito, vamos a acomodar esto aquí

### Orador 5 · `1:49 - 3:31`

Ok, bueno, hay algunos aspectos que son importantísimos cuando hablamos de la planificación de CPU

### Orador 6 · `3:46 - 3:49`

Profe, podría escribir un poquito más grande, es que casi no lo veo

### Orador 1 · `3:50 - 7:38`

Perfecto, no sé si lo hacemos más cerca, si lo pongo más cerca tal vez se vea mejor Ok, ok, hay cinco principios que buscan los algoritmos de planificación de CPU Ok, eficacia, eficiencia, rendimiento, tiempo de respuesta y tiempo de espera En cuanto a la eficacia, tiene que ver con la ejecución de todas las solicitudes Es decir, que no se haga discriminación Cuando decimos que no se haga discriminación, es decir, que al menos Si en algunos instantes por un tema de mejorar el contexto de ejecución Se deben relegar algunos procesos y privilegiar otros Lo cierto del caso es que el concepto de eficacia busca que todos, todos en algún momento Completen su ejecución, ok La eficiencia tiene que ver con que La eficiencia habla de que debe hacer un uso balanceado de sus recursos Es decir, aquí lo que estamos tratando de privilegiar Recuerden es el hecho de que las colas se mantengan balanceadas Es decir, que la cola de listos y la cola de espera por entrada y salida Siempre se encuentren equiparadas Porque recuerden, si nosotros cargamos la cola de espera por entrada y salida Entonces lo que va a pasar es que van a haber pocos procesos en la cola de listos Y probablemente vaya a haber un menor aprovechamiento de ese recurso Por el contrario, si tengo saturada la cola de espera por la cola de listos Y casi sin solicitudes en espera por entrada y salida Entonces lo que está pasando es que los dispositivos de espera por entrada y salida Están completamente subutilizados, es decir, prácticamente no están atendiendo peticiones Entonces el concepto de eficacia se trata de que el contexto haga un balance de las colas Tratando de que todo el mundo esté haciendo algo en algún momento El tercer aspecto habla del rendimiento Y el rendimiento está asociado con el aprovechamiento

### Orador 2 · `7:43 - 7:52`

¿Se lee bien? Más o menos ¿En serio? ¿Se ve pequeño todavía?

### Orador 3 · `7:53 - 7:56`

Sí, pero me di un toquecito clarito a la letra

### Orador 1 · `7:56 - 9:06`

Voy a cambiar de marcador, a ver si será el marcador tal vez Entonces el rendimiento habla sobre el aprovechamiento de CPU Que es lo que tratamos, de que el CPU esté 100% ocupado Cuando hablamos de rendimiento, pues en realidad lo que estamos buscando es cosas como estas Es decir, que todos los procesos, ese es el sueño, ese es el ideal Si esto pasa, entonces estamos de maravilla Pero si esto pasa, estamos malísimos Esto entonces va a empezar, digamos, esto nos va a meter en problemas Aquí estamos diciendo que el CPU tiene unas grandes porciones de tiempo que está subutilizado ¿Por qué pasaba esto? ¿Por qué pasaba el caso B?

### Orador 6 · `9:10 - 9:20`

Porque el CPU encontraba una solicitud de espera por entrada y salida en el comienzo de la ejecución ¿Vamos de nuevo?

### Orador 1 · `9:21 - 9:22`

¿Otra vez?

### Orador 6 · `9:23 - 9:37`

Ok, porque en el proceso de ejecución se encontraba una solicitud de espera por entrada y salida Lo cual hacía que se quedara ahí esperando esa entrada, entonces se despreciaba el aprovechamiento del CPU

### Orador 1 · `9:41 - 16:38`

Vamos a afinar ese detalle En realidad lo que podemos decir es que El proceso que se encuentra en ejecución en este momento De su pila de código, de la pila de código a partir de la cual él inicia Este es el puntero, a la siguiente instrucción Entonces, cuando este proceso entra a ejecución Y el puntero indica cuál es la instrucción que continúa ejecutándose A partir de ese momento, prontamente va a encontrar una instrucción de espera por entrada y salida Entonces, vamos de nuevo con la explicación de qué fue lo que pasó aquí Lo que pasó fue que el proceso que entró a ejecución A partir del puntero a la instrucción que continuaba ejecutándose Prontamente, ese proceso encontró una instrucción de espera por entrada y salida Entonces, eso lo lleva a tener que cambiar de estado y entonces esa porción del CPU no se va a utilizar ¿Estamos claros y claras hasta ahí? Profe, que dice un compañero que si lo puede aceptar, por favor Ok, vamos a ver Entonces, ¿estamos claros con esa situación?

El otro criterio importante es el tiempo de respuesta El tiempo de respuesta esto es Para un proceso ¿Cuánto dura? Desde que entra hasta que termina Ese es el tiempo de respuesta Es decir, desde que entra hasta que termina, ¿cuánto dura? Entonces, si usted va al banco a hacer un depósito Ese es el tiempo desde que usted llegó al banco Incluido el tiempo que dura haciendo la fila para entrar Hasta que ya usted salió del banco Ok, ese es el tiempo de respuesta Esto inevitablemente también nos va a determinar cuál es el promedio Entre dos intervalos de tiempo Es decir, yo estoy sacando el tiempo de respuesta de un banco Entonces, yo le pregunto Vamos a ver Melanie, ¿usted cuánto tiempo duró desde que entró hasta que salió? Y probablemente Melanie me va a decir, bueno, yo duré 45 minutos Bueno, ese es el tiempo de respuesta de un proceso en específico Pero a mí me interesa más conocer cuál es el promedio del tiempo de respuesta Para conocer el promedio de tiempo de respuesta Yo tengo que establecer dos intervalos Entonces yo digo, bueno, ¿cuánta gente entró entre las 9.30? ¿Cuánta gente entró entre las 9.30 y las 10.30? ¿Y cuánta gente salió entre 9.30 y 10.30? Y entonces ahí yo tendría un promedio para determinar En este periodo de tiempo, ¿cuánta gente entró y cuánta gente salió? Entonces, eso lo dividiría entre esa unidad de tiempos Y aquí decimos que entraron 20 y salieron 30 Entonces yo lo promediaría y estaría diciendo Bueno, estamos atendiendo una tasa de 25 personas por hora ¿Ok?

Entonces, eso mismo haríamos, ¿verdad? Hola Dice Gamma que se lo puede afectar, por favor Entonces, eso mismo pasaría si yo quiero establecer El tiempo de respuesta de mi contexto de ejecución Establezco un punto, un rango hora inicio, un rango hora de fin Y digo, bueno, en ese periodo de tiempo Entraron tantos procesos, finalizaron tantos procesos ¿Ok? Y ahí ya con eso yo determino cómo anda mi promedio ¿Y siempre cuál es el interés?

El interés es comparar Comparar ese promedio de las 9.30, 10.30 Obviamente con el de 10.30, 11.30 ¿Ok? Para así saber en cuál intervalo de tiempo anda mejor el promedio Resulta que en este el promedio anda alrededor de las 42 personas En esa hora Bueno, ¿qué es lo que pasa? ¿Por qué es que de 10.30 a 11.30 se atiende tanta gente? ¿Y por qué de 9.30 a 10.30 se atiende tan poquísima gente? ¿Ok? Entonces, esto es un indicador indispensable ¿Por qué?

Porque yo tengo que estar rastreando este tiempo de respuesta Para determinar Si mi promedio tiende a bajar Entonces yo tengo que Tengo que tomar medidas a nivel de planificador Probablemente que me lleven incluso a cambiar la política de administración Clarísimos con el tiempo de respuesta Este criterio es fundamental ¿Alguna duda?

### Orador 3 · `16:44 - 16:48`

Profe, no sé si lo podría repetir ¿Qué parte?

### Orador 2 · `16:48 - 16:48`

¿O todo?

### Orador 1 · `16:52 - 25:48`

Si le miento, le diría que no todo, pero sí me falta Ok, vamos a ver Eh Digamos que el tiempo de respuesta es una de las variables más importantes Que utilizan los planificadores Para tomar decisiones a la hora de decidir el algoritmo Y sobre todo para determinar si tiene que hacer algún cambio O si continúa con la política que tiene ¿Ok? Entonces, por ejemplo, digamos, ¿qué es lo que pasa? Si llega un banco Y el banco ya tiene un modelo de trabajar ¿Verdad?

Probablemente atiende por fichas Hace una clasificación muy extraña Incluso en algunos bancos Si usted llega y le dan una ficha Y ve que pasan 5 o 6 personas antes que usted ¿Verdad? De las que llegaron después ¿Viste? Entonces son modelos muy extraños Lo cierto del caso es que cuando llega un banco Usted en ningún momento La fila, por así decirlo, se reorganiza Es decir, siempre se mantiene el mismo patrón ¿Ok?

Aquí lo que decimos es que el CPU Si toma decisiones De manera intermitente Es decir, en un momento dado Utiliza una política Pero posteriormente puede decir No, esa política ya vi que no me está funcionando Entonces vamos a cambiarla Pero igual el cambiarla Significa que va a arrastrarla Se le va a poner detrás Va a medir todo para en un momento Después determinar Si toma decisiones Del cambio a la nueva política Me benefició como se esperaba O más bien me está perjudicando el contexto ¿Ok?

Eso es lo que queremos Entonces ¿Por qué el rendimiento es muy importante? Porque el rendimiento me dice En un rango de tiempo ¿Cuántas solicitudes entraron? Y ¿Cuántas solicitudes salieron?

Entonces yo tengo un promedio para determinar Y para decir Bueno, en promedio Se están atendiendo Por hora 25 personas Pero ese mismo rango Lo establezco En un tiempo posterior De 10.30 a 11.30 Y resulta que de 10.30 a 11.30 Yo determine que atendí 42 personas ¿Ok? Si atendo 42 personas De 10.30 a 11.30 Y de 9.30 a 10.30 Atendí 25 Entonces quiere decir que tuve mejor rendimiento En este periodo de tiempo Si tuve mejor rendimiento en este periodo de tiempo Entonces parece que la política me está funcionando Pero ¿Qué pasa si fue al revés? De 9.30 a 10.30 Tenía 42 personas Y de 9.30 a 10.30 Bajé a 25 Entonces ahí definitivamente mi promedio bajó Y entonces más bien ahí La obligación sería cambiar la política O buscar a ver cuáles son los indicadores Que me podrían dar una Una idea De qué sería lo que está bajando Ese rendimiento ¿Ok? ¿Estamos claros? Ok Y el quinto criterio ahora es El tiempo de respuesta Tiempo de espera, perdón ¿Ok? Y con respecto al tiempo de espera En realidad estaría dado por dos detalles Uno El tiempo que espera un proceso Que está en la cola de listos Para pasar a ejecución ¿Ok?

Recordemos que en el ciclo Tenemos esto ¿Ok? Y que un proceso Iba de listo a ejecución De ejecución a espera por entrada y salida Y cuando llega a espera por entrada y salida Entonces lo que hago es que Lo coloco en un dispositivo ¿Ok? En el dispositivo que lo va a atender ¿Ok?

Aquí lo coloco en esa cola Aquí llegó este julano ¿Ok? Aquí llegó este julano ¿A qué hora llegó? Llegó justamente a las 8.40 ¿Ok?

Llegó a las 8.40 Ahora que sale Sale de ahí A las 8.50 ¿Ok? Es decir Para esta iteración Este julano duró 10 minutos 10 minutos Bueno, 10 unidades de tiempo No digamos minutos, hablemos de unidades de tiempo ¿Ok? Duró 10 unidades de tiempo esperando Esta vez que fue ahí a espera por entrada y salida Para salir ¿Ok?

Esta vez duró 10 minutos Lo cuarto que me interesa sobre manera Es decir, ¿Cuál es la sumatoria? ¿Ok? La sumatoria es La primera vez duró 5 La segunda vez duró 7 La tercera vez duró 8 La tercera vez duró 15 La tercera vez duró 10 Es esta que está aquí ¿Ok?

Si ya yo tengo una sumatoria Entonces ya yo puedo sacar el promedio El promedio De En entrada y salida ¿Ok? Ya yo puedo sacar el promedio De espera por entrada y salida Igualmente Cuando el proceso pasa Cuando ese proceso vino aquí A la cola de listos ¿Ok? Aquí teníamos esto Y este julano que venía de allá Viene para acá Este julano que venía de allá Vino para acá y se colocó aquí ¿Ok?

¿A qué hora llegó aquí? Llegó a la cola de listos A las 8 41 ¿Ok? ¿Y a qué hora él va haciendo esto?

Va pasando, va pasando el lugar Va pasando el lugar Hasta que llega el primero ¿Ok? En algún momento el planificador Le va a decir, es su turno ¿A qué hora? A las 8 y 47 ¿Ok?

¿Cuánto tiempo duró ahí? Duró Duró 6 unidades de tiempo ¿Ok? Y vamos a sacar la sumatoria Para tener un promedio La primera vez que llegó a la cola de listos Duró 4 unidades de tiempo La segunda vez 18 La tercera vez 25 Esta, esta 1, 2, 3, 4, 5 15 16 13 6 ¿Ok?

Y ya con eso yo puedo tener un promedio Un promedio del tiempo de espera De ese proceso en la cola de listos ¿Les queda claro? La referencia y el tiempo de respuesta Perdón, sí, tiempo de espera Perdón, tiempo de espera Perdón ¿Les queda claro? Vean, son muy importantes Estos dos criterios son fundamentales ¿Profe?

### Orador 2 · `25:48 - 25:58`

¿Sí? ¿Será que al final le puedo tomar una foto? Así, claro Claro, claro Gracias ¿Profe?

### Orador 7 · `25:59 - 26:05`

Sí Tengo una pregunta Dígame ¿Cuál es la diferencia entre tiempo de espera y tiempo de respuesta?

### Orador 1 · `26:06 - 27:18`

Ok, ya se la explico Ok, ahí está, me dicen cómo se ve Dicen cómo se ve, cómo quedó Se ve bien, profe Ok Entonces, la pregunta era ¿Cuál era la pregunta?

### Orador 7 · `27:19 - 27:23`

La diferencia entre tiempo de espera y tiempo de...

### Orador 1 · `27:23 - 29:22`

Ok Tiempo de espera y tiempo de respuesta Y tiempo de respuesta, exacto Me suenan igual, pero no sé cuál es Ok Vamos a ver ¿El tiempo de respuesta? ¿El tiempo de respuesta? Ok, ok, vamos a ver Imagínese que usted va al banco Ok Imagínese que usted va al banco Entonces, en el banco, a usted le dicen Bueno Usted llega al banco a las...

A las 8.30 Incluso antes de que abran para... Para el faircase y el primero Usted llegó al banco Voy a anotarlo acá, me dicen si se ve Ok La hora de llegada Usted es más lerdo, yo creo La hora de llegada al banco 8.30 Ok ¿A qué hora salió? Dijimos que había durado 45 minutos Entonces va a salir A las 9.15 Ok Entonces Su tiempo de respuesta En este caso es de Su tiempo de respuesta es de 45 minutos 45 unidades de tiempo Ok, vamos a ponerlo así Unidades de tiempo Ok Ese es su tiempo de respuesta Ahora vamos a sacar El tiempo de Espera El tiempo de espera Lo que dice es que, vamos a ver Usted duró Haciendo fila para entrar

### Orador 2 · `29:32 - 29:33`

Tiempo, en la fila de entrada ¿Cuánto dura?

### Orador 1 · `29:34 - 30:10`

Más o menos, digamos que duró 20 minutos Haciendo esa fila Ok, entra al banco Vamos a ver otra fila Tiempo de fila Interna Imaginémonos que ahí duró Otros 20 Esto es muy sencillo Digamos que duró más o menos como unos Como unos 22 minutos Ok Entonces Esto determina que su tiempo de espera

### Orador 2 · `30:15 - 30:17`

Su tiempo de espera es de

### Orador 1 · `30:21 - 34:16`

42 minutos Ok Si usted duró Si su tiempo de respuesta fueron De 5 minutos Entonces con el tiempo de espera usted puede decir ¿Cuánto duró ejecutando? ¿Cuánto duró haciendo la transferencia? 3 minutos Que es en promedio lo que usted puede durar más o menos No sé si les queda bien claro la diferencia Entre una cosa y otra Ok Digamos que es como cuando El tiempo de Espera Es como cuando ya lo Lo atendieron digamos No, no, no El tiempo de espera es ¿Cuánto duró usted en las filas?

Ok Y el tiempo de respuesta es ¿Cuánto duró usted En total desde que entró Hasta que terminó Ok Desde que llegó hasta que salió del banco Correcto Sí, correcto Ok Digamos teniendo claro Ese escenario usted puede decir ¿Qué pasa? ¿Qué pasa? ¿Qué pasa?

Digamos cuando para un proceso El tiempo De Espera Disminuye Cuando el tiempo de espera disminuye Puede ser uno Que esté haciendo más ejecución Y haga poca espera por entrar y salir Ok Es decir Si usted lo que va a hacer Por ejemplo es una solicitud De un crédito ¿Verdad? No es lo mismo que ir a hacer un depósito Si usted va a hacer una solicitud De un crédito Pues probablemente el tiempo de espera Puede ser que sea igual ¿Verdad? El tiempo de Vamos a ver El tiempo de espera Digamos en las filas usted no se lo va a quitar Ok Pero ¿Cuál es su tiempo?

¿Cuál es su tiempo? El tiempo de ejecución Ok El tiempo de espera se mantuvo igual ¿Verdad? Porque eso fue lo que duró En las dos filas Pero entonces Su tiempo de ejecución Perfectamente ese tiempo de ejecución Más o menos Tramitando un préstamo Podría durar más o menos como 40 minutos Ok Entonces 40 minutos Más 42 de espera Ya tenemos un total De 82 minutos Ok Entonces vean que En este caso Es un excelente promedio Es decir Aumentó la tasa de aprovechamiento de CPU Y se mantuvo el tiempo de espera Ok Pero por lo menos aumentó La tasa de aprovechamiento de CPU Ok Eso es lo que hace Que nos pase como lo que hacemos en los bancos Es decir Que el tiempo efectivo De lo que usted va a hacer Sea una porción como Proporcional Como el 2% o el 3% Es decir, uno va al banco Yo les voy a Casi asegurar que uno en un banco En promedio dura una hora Por cualquier tontera que usted vaya a hacer ¿Y cuánto dura usted? ¿Cuánto lo duran atendiendo? es un es un es una acción muy muy explícita es decir eso es un pésimo funcionamiento verdad si analizamos eso en función del rendimiento eso da eso es algo desastroso verdad estamos

### Orador 7 · `34:19 - 34:26`

entonces el tiempo de espera nunca puede ser más alto que el tiempo de respuesta

### Orador 1 · `34:26 - 35:05`

el tiempo no no no no no porque está en la sumatoria verdad en la sumatoria el tiempo de respuesta será la sumatoria del tiempo espera más el tiempo ejecución es muy importante vamos a notarlo acá ok entonces el tiempo de respuesta diríamos que es la sumatoria de el tiempo de espera más el tiempo de ejecución ok muy importante ese detalle que acaban de aclarar

### Orador 2 · `35:07 - 35:18`

alguna duda hasta aquí estamos clarísimos y clarísimos entonces

### Orador 1 · `35:19 - 40:52`

bueno entonces diríamos que este es esto es lo que buscan verdad esto es lo que buscamos cuando decidimos planificar cpu ok privilegiar estas cinco estas cinco propiedades ok bueno voy a sacar una foto para que eso quede ahí para que les quede completo porque si es muy importante ese detalle creo que les ayuda mucho a aclarar esa condición listo ok las políticas de planificación son las siguientes ok esas son básicamente las cuatro ah bueno y por supuesto que ok esas son las políticas first comfort server, run rolling, primero el trabajo más corto, apropiatividad, más llamado prioridades y colas múltiples ok vamos a empezar por el primero first comfort server ok que first comfort server vamos a ver ok vamos con el con el primero algoritmo first comfort server ok estos algoritmos que es lo que regulan lo que regulan principalmente es esto que está acá la cola de listos ok es decir ellos se encargan de todo el contexto porque las decisiones que tomen van a depender de lo que está pasando en todos los estados ok pero la política de planificación aplica estrictamente para esta cola ok y aquí lo que tenemos es esto ok una cantidad de solicitudes en la cola de listos y otras allá en las colas de espera por entrada y salida ok bueno que requerimos para implementar first comfort server que creen ustedes cuál será el parámetro que determina el ordenamiento de esta cola que determina quién está primero y quién está

### Orador 2 · `40:52 - 41:07`

de último que el tiempo de llegada pero el tiempo de llegada la pregunta es que determina o quien

### Orador 1 · `41:07 - 42:21`

determina no que determina que determina que él esté de primero que esté de último en esa fila verdad ya tenemos una recomendación que es el tiempo de llegada ok ok quien mencionó que era el tiempo de llegada o axel axel entonces mi pregunta es el tiempo de llegada donde axel recuerda que aquí tenemos aquí tenemos la cola de solicitudes cierto bueno la lista de peticiones aquí tenemos la lista de peticiones entonces que éste es una cola igualmente verdad de julanos que quieren entrar al ciclo ok lo que quieren es entrar al ciclo entonces mi pregunta es axel ese ese tiempo de llegada es acá o es el tiempo de llegada cuando llegó aquí a la cola cómo funciona

### Orador 4 · `42:24 - 42:30`

sería en el en el planificador de corto plazo la cola de listos sería la cola de listos es decir

### Orador 1 · `42:30 - 42:35`

cada vez de que el julano llega aquí se escribe ese tiempo de llegada

### Orador 4 · `42:37 - 42:42`

y ayer ya que sí pero ese es su versión

### Orador 1 · `42:46 - 44:15`

la posición de axel es que el tiempo de llegada va a ser este tiempo de aquí ahora axel usted tiene claro que este proceso va a llegar aquí muchas veces verdad es decir cuántas veces el proceso va a pasar por la cola de listos pasa muchísimas veces eso sí lo tiene bien claro sí ok entonces siguiendo su recomendación diríamos que el tiempo de llegada siempre va a cambiar porque va a ser cada vez de que él llega aquí entonces él recibe esa etiqueta estamos de acuerdo axel sí ok ahora mi versión mi versión es que juguemos con el tiempo de llegada pero del proceso cuando cuando apareció aquí en la cola en la cola de listos ok si yo juego con ese tiempo entonces pues lo que va a pasar es que ese tiempo llegada va a ser único no va a cambiar al ser único diríamos que cada vez de que ese proceso llega acá va a jugar con los tiempos no el de llegada aquí sino el que ya trae desde que nació como solicitud tenemos dos posibilidades hasta este momento ok eso es lo que quiero que nos quede claro hasta aquí por ahora que me interesa resolver me interesa resolver un detalle ustedes conocen el algoritmo fifo verdad que es el algoritmo fifo yo que es el algoritmo fifo

### Orador 2 · `44:19 - 44:39`

primero entrar primero en salir primero en entrar primero en salir ok primero en entrar primero en

### Orador 1 · `44:39 - 47:00`

salir ok primero en entrar primero en salir yo tengo esto teníamos este este escenario verdad es el proceso 1 es el proceso 2 ok esto es la pila de código el proceso 1 es la pila código el proceso 2 hasta este momento yo tengo que tener muy claro de que perfectamente p1 puede ok digamos que vamos a poner aquí hora de llegar ok del proceso 1 las 8 48 procesos 8 49 ok el proceso 1 tiene una cola de una pila de código más pequeña que el proceso 2 el proceso 1 llegó a las 8 48 el proceso llegó 2 llegó a la 8 a las 8 49 pero perfectamente puede suceder que el proceso 2 que el proceso 1 ok eso es perfectamente posible de que suceda que el proceso finalice primero que el proceso 1 cómo podemos explicar eso cómo podríamos explicar eso cuéntenme alguien tiene una hipótesis de cómo el proceso 2 pudo terminar primero que el proceso 1 y si ese llegó de primero

### Orador 4 · `47:00 - 47:25`

por más y corto pequeño que será pila de código ya hasta que termine de finalizar y el entra y si tiene poco mucho hasta que termine estrictamente pasa al siguiente por eso es que sale primero ok alguien con otra hipótesis otra hipótesis ahí

### Orador 1 · `47:29 - 49:09`

un dato por entrar y salir en el proceso 1 pero igual si él está esperando o sea no puede esperar eternamente verdad ok lo cierto el caso es que evidentemente lo que tenemos acá es que vamos a ir sacando algunas conclusiones sobre el proceso 2 ok una es que hace menos entra y salida ok el proceso 1 hace más entra y salida ok el proceso 1 otro es que el proceso 1 yo creo que el proceso 2 hace aprovecha mejor aprovecha más el cpu y que el proceso 2 1 pues aprovecha mucho menos el cpu ok hablemos un poquito de cosas prácticas de cosas prácticas ok de lo que ustedes conocen de lo que ustedes conocen qué creen ustedes que son procesos que hagan mucha entrada y salida qué creen ustedes que sea un proceso que haga mucha entrada y salida de lo que ustedes conocen hasta este momento un formulario un que un formulario y que es el formulario cuénteme por ejemplo cuando

### Orador 3 · `49:09 - 49:20`

usted va a registrarse sea que usted descargue un juego y usted se va a ingresar por primera vez usted se tiene que registrar entonces es un formulario se queda esperando entrada y salida

### Orador 1 · `49:21 - 50:31`

ok ok vean vamos a ir aclarándonos un poquito estamos hablando propiamente del contexto ejecución hablando propiamente ese contexto ejecución entonces lo que diríamos es que lo que nos interesa es tratar de medir o cuantificar qué es lo que realmente hace procesamiento entonces por ejemplo si yo tengo si vamos a ver si yo tengo el sistema de matrícula verdad de la una entonces yo quiero hacer la consulta de cuáles son los estudiantes que están matriculados en el curso sistemas operativos de la de la sede de zarapiquí que tienen que viven a una distancia mayor a 45 kilómetros de la sede ok esa consulta sobre qué sobre qué tabla se lleva a cabo se lleva a cabo sobre una tabla que se llama estudiante

### Orador 3 · `50:31 - 50:42`

cuántos registros creen ustedes que tenga esa tabla registros la de registro estudiantes

### Orador 1 · `50:42 - 50:59`

sí cuántos estudiantes creen ustedes que hay en la una 9.000 ok digamos no tienen que tener en la universidad nacional tiene que ver más tiene que ver con unos 25.000 estudiantes

### Orador 2 · `50:59 - 51:03`

más o menos por ahí por ahí tiene que andar un momentito por favor para atender esta llamada

### Orador 1 · `51:03 - 1:01:11`

por favor ok bueno disculpen por favor ok entonces estábamos tratando de que vayamos como ubicándonos verdad que es un proceso este intensivo en entrar y salir entonces estamos hablando de una consulta para poder determinar cuáles eran los estudiantes de la universidad nacional del campus zarapiquí del curso de sistemas operativos que viven a más de 45 kilómetros de distancia verdad esa es la consulta entonces la tabla sobre la cual se hace la consulta probablemente sea de unos 25.000 registros que es el de la universidad nacional entonces vean que el volumen en este caso de entra y salida es bastante alto verdad es decir esta será será un proceso de los que probablemente hagan un consumo exhaustivo de entrada y salida ok y lo que hagan de cpu sea bajísimo ok probablemente el promedio ande que sé yo vamos a ponerlo acá cpu podría andar cercano como como a un 15 por ciento si al caso y a un 85 por ciento de espera por entrada y salida ok en el caso de esa consulta ok entonces dependiendo siempre el origen de datos sobre el cual hagamos las consultas eso va a determinar el volumen de entrada y salida que se requiera ok pero por ejemplo yo digo yo digo bueno vamos a sacar vamos a sacar igual sobre la misma muestra pero vamos a determinar el promedio ponderado el promedio ponderado de la de del segundo del primer ciclo del 2022 a este punto con las evaluaciones que haya entonces qué tiene que hacer ir a revisar el reporte de la nota de cada reporte de nota de cada profesor para poder sacar un promedio ponderado por estudiante para después sacar un promedio ponderado de toda la clase y ahí la cosa cambia probablemente en la entrada y salida sea el mismo volumen pero como se empezó a incrementar el consumo de cpu entonces esto puede llegar más o menos cercano a un 35 por ciento y aquí un 65 por ciento ok qué fue lo que pasó no fue que la espera por entrar y salir a este bajo no lo que pasó fue que aumentó considera considerablemente la ejecución ok por eso fue que se balanceó un poco ok qué pasa si yo cojo y digo bueno vamos a sacar vamos a sacar de las notas de la nota de ustedes de la nota de ustedes que ya la muestra es específica ya no es ya no es sobre la tabla estudiantes y no sobre la tabla cursos sacar todo el filtrado de notas y vamos a determinar el vamos a determinar que vamos a vamos a determinar el ok los puntos ok punto máximo los puntos máximos y los puntos mínimos en el tiempo por meses es decir vamos a determinar cuáles son los meses cuáles son los meses donde ustedes han tenido máximos rendimientos y los meses de han tenido mínimos rendimientos aquí hay que hacer un análisis numérico bastante exhaustivo ok entonces en este caso ese será un proceso en donde la tasa de cpu puedan dar más o menos como el 85 por ciento y la tasa de espera por entrada y salida cerca del 15 por ciento ok porque porque ya son tablas muy específicas con datos numéricos y en realidad lo que tenemos aquí es mucho mucho mucho cpu ok este es un caso de procesos que hacen exhaustivo cpu y poca entrada y salida ok ahora valoren ustedes una una ejecución en donde por ejemplo tengan que aplicar una tengan que aplicar una identificación de una huella dactilar cómo valorarían ese esa instancia ejecución cómo la valorarían en términos de ejecución y espera por entrada y salida cómo lo ven

### Orador 4 · `1:01:17 - 1:01:23`

el programa entra está corriendo el que lee los entra y no no la pregunta es digamos en

### Orador 1 · `1:01:23 - 1:01:43`

este balance en este balance porcentaje de ejecución por esta espera por entrada y salida para para una una una detección de una huella una huella dactilar cómo se comporta intensivo en ejecución o intensivo en entrada y salida

### Orador 4 · `1:01:49 - 1:01:50`

en entrada y salida

### Orador 1 · `1:01:53 - 1:02:18`

esperamos que lo que el programa ok ok todos están de acuerdo hay alguien que piensa diferente alguien sabe cómo funciona un algoritmo para para determinar una huella dactilar

### Orador 3 · `1:02:24 - 1:02:33`

no es que y no sé profes los más avanzados es por ultrasonido creo y los de antes eran

### Orador 1 · `1:02:33 - 1:11:06`

por puntos de presión ok en realidad en realidad eso es esa es la técnica pero el fundamento computacional para hacer eso es hacer vectores ok hacer vectores y ir reconociendo patrones en esos vectores en realidad lo que se aplica son puros algoritmos matemáticos esos algoritmos matemáticos en realidad la muestra el origen de datos es muy pequeño es es ínfimo pero lo que es exhaustivo es en procesamiento matemático entonces son por ciento son son rutinas que andan alrededor de del 95 por ciento de cpu y un 10 por ciento de espera por entrada y salida es decir el origen de datos es una unidad muy pequeña ok pero por ejemplo si yo les digo a ustedes vamos a hacer una una reconocimiento facial ok si es un reconocimiento facial pues entonces ya es otro el asunto y el detalle es completamente diferente porque un reconocimiento facial en realidad se realiza sobre una fotografía y fotografías de alta resolución entonces hacer fotografías de alta resolución ya el origen de datos ya es bastante pesado ok y lo que se ejecuta sobre él ya no son ya no son este este reconocimiento patrones este matricales sino que lo que se utilizan son una una técnica que se llama se llama segmentación donde se coge la fotografía está la foto verá digamos que ahí está el rostro de la persona primero eso se determina se ubica se elimina todo lo demás y una vez que se tenga ese rostro la persona entonces lo que hacemos es esto venimos y partimos en porciones y decimos cuánto se parece esto al original esto lo original y entonces al final lo que tenemos es que hay un 65% de parecido o un 98% de parecido esto quiere decir que si es la misma persona esto quiere decir que no es la misma persona por ejemplo ok estamos este modelo si es tiene una tasa de espera por entrada y salida cercana al 80% y una tasa de ejecución pues en el caso de un 20% ok bueno ya tenemos entonces una idea una idea una noción verdad una noción de que son procesos intensivos en entrada y salida y procesos intensivos en cpu ok acá que nos interesa nos interesa primero determinar que perfectamente el proceso 1 y el proceso 2 son completamente independientes es decir sobre ello no podemos no podemos presumir absolutamente nada no podemos sacar no podemos sacar ninguna hipótesis sobre ellos ok no podemos predecir nada esa es el término nos vamos no podemos predecir su comportamiento si si lo viéramos solamente por la cola y porque llegó primero estos son criterios completamente erróneos para decir él va a terminar de primero ok es lo primero que tenemos que tener claro acá el otro aspecto importante es que si el algoritmo fuera first in first out tendríamos que garantizar entonces que el proceso 1 debe terminar que el proceso 2 el contexto de ejecución no puede garantizar eso no puede hacerlo verdad entonces por eso es que nunca nunca se hace referencia a first in first out ok si no lo único que tenemos es un tiempo de llegada ok un tiempo de llegada que me sirve de ordenamiento ok está todavía en discusión las dos emociones que teníamos uno es que cada vez de que el proceso salía de espera por entrar y salía y llegara listo se le asigna un tiempo un tiempo de llegada ok esa era la hipótesis de axel que cuando él llega a la cola de listos cada vez de que llega a la cola listo se le ponga punto llegó y se le ponga esa hora y se organice de acuerdo a lo que está ahí y mi hipótesis es que se mantenga el tiempo de llegada de vamos a ponerlo para que les quede bien ilustrado del nacimiento ok no importa cuántas veces ustedes vayan al banco cada vez de que van al banco los van a ordenar por la fecha de nacimiento ok pero la de axel es la de axel es que cada vez de que él llega ese va a ser su tiempo de llegada ok si tomamos si tomamos la opción de axel cada vez de que el proceso llega acá hay que asignarle una etiqueta de tiempo ok y pues en realidad vean que si cada vez de que llega a la cola de listos yo le asigno una etiqueta de tiempo a dónde va a ir él siempre en la cola o la bola me escuchan al final de la pregunta a dónde va a llegar al final de la cola sería al final de la cola ok entonces la pregunta es tendría sentido que yo juegue con una política en donde si esto es una es una cola que se coloque siempre al final es para qué para qué para qué cachín voy yo voy a andar jugando con esa variable de tiempo de llegada entonces efectivamente no es el tiempo de llegada no corresponde a un tiempo que se le asigna cada vez de que él llega a la cola de listos sino que más bien es por su tiempo de nacimiento ok es decir cuando yo estoy jugando con el algoritmo first server ok en realidad lo que estoy tratando de privilegiar que vayan saliendo los que llegaron de primero ok eso es lo que voy a privilegiar entonces qué va a pasar este es un lano que acaba de salir de allá probablemente venga y a dónde se incruste probablemente se incruste acá ok por qué porque él había llegado aquí mucho antes que todos estos entonces vean que cada vez de que él venga la siguiente vez que él venga es decir siempre va a ocupar lugares lugares privilegiados los últimos que nacieron son los que se van a colocar al final de la cola ok qué privilegia el algoritmo el algoritmo lo que privilegia es que vayan saliendo que ir privilegiando a los que van llegando de primero ok evidentemente no siempre puede controlarlo ok porque porque cuando llegue allá a espera por entrada y salida pues la lógica y la regla puede cambiar ok pero por lo menos en la cola de listos cada vez de que ese proceso llegue aquí se va a ordenar por hora y probablemente siempre va a caer en los primeros lugares hasta que finalmente salgo hasta que finalmente finalice pero es la palabra correcta entonces estamos claros en por qué aplico la hora de llegada no cada vez de que llegó a la cola de listos porque no tenía sentido porque siempre lo mandaría al final sino que más bien es el tiempo de llegada pero de la hora en la que nació en la hora en la que él se presentó aquí como petición ok

### Orador 4 · `1:11:07 - 1:11:21`

estamos claros con la primera política entonces ese algoritmo casi que está regido por el planificador de largo plazo es correcto sí

### Orador 1 · `1:11:21 - 1:11:33`

ok listo bueno vamos a hacer una pausa y nos vemos dentro de 20 minutos para tomarnos un

### Orador 2 · `1:11:34 - 1:31:23`

resquito hola hola hola

### Orador 1 · `1:31:30 - 1:38:22`

hola hola seguimos hola hola hola me escuchan entonces para finalizar el first server olvide mencionarles que este algoritmo es un detalle muy importante pongan atención por favor este algoritmo first con first server ok siempre va a llevar a cabo esta rutina first con first server ok porque por qué razón por qué razón nunca él nunca nunca va a ir a la cola de listos porque el tiempo que él va a hacer uso de cpu si esta es la porción que le corresponde ok vamos a ver si él entra acá empieza a ejecutar acá va a avanzar en su fila de código ok y va a salir hasta que encuentre una operación de entrada y salida es decir aquí no se dice él va a ejecutar esta porción de código no es decir esa regla no aplica para él aquí lo que se dice es que él entra a ejecución y cuando va y cuándo va a salir de ejecución hasta que se encuentre una operación de espera por entrada y salida entonces qué es lo que va a pasar pues muy probablemente la ráfaga de él se va a comportar así ok muy probablemente sea algo así también muy probablemente sea algo así entró una operación de entrada y salida salió pero también puede pasar algo como esto decir puede ser que él entra y rápidamente se encuentra una operación de entrada y salida puede ser que él entre después de un tiempo prudencial hace una operación de entrada y salida pero también puede ser que pase esto esto esto no está esto no es digamos no está bien verdad pero no está bien no está bien para el contexto está bien tal vez para el proceso verdad está bien para el proceso porque se está aprovechando muchísimo la cpu ok pero para el contexto porque no está bien porque esto esto es equivalente a monopolizar cpu ok eso es equivalente a monopolizar cpu y qué quiere decir que monopoliza el cpu bueno que en realidad pareciera como que él se está apropiando el cpu que se está aprovechando el cpu verdad eso pasa cuando usted va en la fila del banco verdad en el área de cajas principalmente y de pronto llega una persona que se pega en una ventana verdad y nada que sea y nada y nada que la desocupa y ustedes que las otras ventanillas circulan rápido y esa ventanilla la persona que llegó ahí no se mueve y no se mueve verdad esa persona está monopolizando ese cpu ok entonces esto estaría bienísimo para la persona que está siendo atendida verdad pero no está bien para los demás es decir para todo el contexto ejecución eso no se ve bien ok eso se vería como una monopolización de cpu en este caso lo que queremos es lo que queremos es digamos que sea un promedio de esto o de esto ok porque porque esto lo que nos indica es bueno que aunque entre poco va a ser cpu pero va a ser espera por pero en algunos casos va a ser un aprovechamiento considerable ok esto lo que dice es aquí de una vez él tiene una etiqueta en la frente que dice intensivo en entrada y salida ok esto es lo que está pasando con él ahí en ese instante ok entonces para finalizar a first con first server es la política que entra y empieza a ejecutar y finaliza o libera la cpu hasta que se encuentre una operación de espera por entrada y salida claro si claro hasta aquí ok ok entonces podríamos decir que una de las desventajas verá que una de las desventajas de de first con first server ok vamos a ponerles a voy a ponerles acá porque es que ya allá no me queda campo ok ok la venta ok la venta se ve eso que escribo ya así no se ve el indoza ni bola dicen ahora

### Orador 2 · `1:38:26 - 1:38:31`

ok si se ve pero no se puede leer gracias gracias

### Orador 1 · `1:38:33 - 1:42:43`

ok con first server ok podríamos decir que la ventaja y la desventaja la ventaja es cuál podríamos decir que la ventaja cuál podríamos decir que la ventaja bueno primero que es un algoritmo rápido es decir él no quiere no necesita mayor detalle para poder para poder ordenar verdad la hora lo que está nacido ahora lo que está nacido y con eso ordena la lista ok es un algoritmo rápido ok otra ventaja es que tiene es que favorece favorece procesos intensivos en cpu ok y la ventaja que tiene es que puede puede verdad porque no siente monopolizar el cpu ok precisamente para resolver esa desventaja que él tiene aparece robin ok en realidad los que han visto la película robin hood verdad lo que se trata de robarle a los pobres ok este es por eso es que se llama así este algoritmo ok porque lo que se trata es de buscar una distribución equitativa ok lo que trata de buscar una vez una hacer una institución equitativa una distribución equitativa quien de cpu ok es decir que todos tengan la misma porción de cpu ok por eso se llama el algoritmo robin robin perdón ok para esto lo que necesitamos es primero definir una unidad un número mágico es decir cuánto es cuánto es esa porción equitativa ok entonces lo primero que haces que determina lo primero que hace es que determina un cuánto ok entonces ese cuánto ese cuánto es el tiempo que todo proceso va a tener de cpu ok cuánto tiempo tenía de cpu en first-come-first-server cuánto tiempo tenía cpu first-come-first-server cuánto tiempo tenía en cpu cada proceso se utilizaba first-come-first-server hola hola

### Orador 4 · `1:42:47 - 1:43:07`

porque por el tiempo digamos si duraba más en ejecución o sea monopolizaba la cpu eso iba a tomar mucho más tiempo entonces el tiempo variando dependiendo del proceso que se puede decir que

### Orador 1 · `1:43:07 - 1:45:55`

es un cuento infinito nada así pero de cuánto de qué depende no infinito jamás verdad porque en algún momento va a terminar de qué depende de qué depende del tiempo que dura en cpu un proceso si está utilizando el algoritmo first-come-first-server a ver de qué de qué depende cuánto tiempo dura en cpu un proceso si está utilizando el algoritmo first-come-first-server de qué depende depende de qué tan rápido encuentre una operación de espera por entrada y salida es lo único de lo que él depende ok pero aquí de qué va a depender va a depender del tamaño del cuanto ok y ese cuanto se determina en unidades de tiempo ok es decir el cuanto puede ser puede ser de 25 unidades de tiempo pero el cuanto puede llegar a ser de 5 ok etcétera etcétera etcétera ese tamaño de ese cuanto es completamente dinámico es decir en un momento puede decir que estamos utilizando un cuantum de 25 pero después puede ser que lo pasemos a un cuantum de 5 la pregunta del millón es porque un cuantum de 25 y porque un cuantum de 5 y lo más importante es que cuando cambiaría yo de un cuantum de 25 de 5 a 25 y cuando más bien cambiaría de un cuantum de 25 a 5 a ver primero que creen que está pasando para que yo utilice un cuantum de 25 y que creen que está pasando para que yo utilice un cuantum de 5 o porque lo bajaría o porque lo subiría cuáles son las hipótesis

### Orador 2 · `1:46:04 - 1:46:27`

a ver cuéntenme bueno

### Orador 1 · `1:46:33 - 1:48:32`

el tamaño del cuantum va a estar expresado por qué tan rápido o qué tan posterior me encuentre una operación de espera por entrada y salida si este es si ese es el tiempo asignado de cpu y un proceso que entra aquí se encuentra aquí su operación de espera por entrada y salida entonces se lo apaga a ser así si yo le asigno un cuantum de este tamaño y aquí se encontró una operación de espera por entrada y salida entonces él va a desperdiciar todo eso pero si yo no tengo eso sino que lo que tengo es una ráfaga en donde el proceso entra y la operación de espera por entrada y salida será encontrar muy largo entonces este tiene una operación de espera por entrada y salida este es un cuantum bajo y este es un cuantum alto no se puede no se puede establecer un cuantum para un proceso y otro cuantum para otro proceso si yo digo en este momento vamos jugando con un cuantum de 25 ese será para todos los procesos y si digo ahora vamos a jugar con un cuantum de 5 ese será para todos los procesos ok entonces si el cuantum es muy grande si el cuantum es muy grande cuál va a

### Orador 2 · `1:48:32 - 1:48:54`

ser el problema si el cuantum es muy grande cuál va a ser el problema no estamos en nada la verdad

### Orador 1 · `1:48:54 - 1:54:04`

es que yo creo que tienen la cámara puesta ahí y están en otras cosas si el cuantum es muy grande hay una tasa de desperdicio considerable que es este caso el cuantum es muy grande y él rápidamente encuentra operaciones de espera por entrada y salida y todo ese tiempo lo va a desperdiciar y si en el otro caso tenemos que el cuantum es muy pequeño si el cuantum es muy pequeño entonces lo que va a pasar es que lo que va a lo que va a suceder es que esta es la línea de tiempo aquí está el proceso 1 sale entre el proceso 2 sale entre el proceso 3 sale entre el proceso 4 sale entre el proceso 5 es decir constantemente se están intercambiando los procesos cuando los procesos se intercambian constantemente lo que decimos es que aumenta la tasa de cambios de contexto que es un cambio de contexto un cambio de contexto es el tiempo voy a ponerlo entre comillas el tiempo perdido entre la salida de un proceso de cpu y la entrada del siguiente cada vez cada vez que el cajero del banco lo deja atender a usted y atiende a otra persona sucede un cambio de contexto entonces si se itera muchas veces como en este caso entonces qué es lo que va a pasar que se está desperdiciando mucho tiempo si usted suma todos esos intervalos en azul la sumatoria elevar un número muy grande que podría ser diferente en esta otra línea de tiempo donde entra aquí sale el proceso 1 aquí el proceso 2 y el proceso 3 cuántos cambios de contexto en esa unidad de tiempo 3 en esta 6 6 cambios de contexto entonces en cada cambio de contexto se entiende como un tipo como una pérdida de tiempo porque es el tiempo en el cual el cpu tiene que este dejar lo que está haciendo y atender lo nuevo que pasa en ese periodo de tiempo en un cambio de contexto en un cambio de contexto lo primero que tengo que hacer es dejar el proceso que estoy finalizando su instancia de ejecución y ir a escribir todos los registros a memoria cuáles serían sus registros el puntero por donde quede el estado de las variables que estaban procesando los archivos que mantenga abiertos toda la información de ese proceso tengo que escribirla en memoria para que la siguiente vez que ese proceso vuelva a entrar a ejecución ya yo tenga ese proceso un estado consistente cargo la información inicia el nuevo proceso entonces si el si el cuanto es muy grande hay una gran tasa de desperdicio y si el cuanto es muy pequeño igual la tasa de desperdicio se va a aumentar a ocasionada por

### Orador 2 · `1:54:04 - 1:54:33`

los cambios de contexto alguna pregunta entonces si o si siempre va a haber perdida de tiempo si hay menos hay pérdida de tiempo en

### Orador 1 · `1:54:33 - 1:55:33`

cualquiera de los dos casos va a haber pérdida de tiempo la pregunta es que es más barato pero y cuando son muchos procesos cuando siempre son muchos procesos eso no es ningún inconveniente ok el siguiente algoritmo sería el algoritmo de primero el trabajo más corto y primero el trabajo más corto tiene dos modalidades uno es

### Orador 2 · `1:55:34 - 1:55:53`

por pila de código eso depende de la cantidad de instrucciones y por por consumo de memoria

### Orador 1 · `1:55:58 - 2:02:52`

ok por pila de código no hay nada que inventar ya desde que desde que el algoritmo entra a ejecución ya se sabe cuántas líneas de código tiene ok en la cola de peticiones eso es imposible de poder determinar lo mismo el consumo de memoria en la cola de peticiones es imposible de poder determinar sólo se puede terminar a nivel de cuando ya entra el contexto al artículo ejecución cuando entra el ciclo ejecución ya se sabe cuántas líneas de código tiene entonces podría ser un criterio de ordenamiento ok primero los más cortos o viceversa primero los más grandes o ordenarlos por el consumo de memoria si los ordenamos por consumo de memoria diríamos que los procesos que más consumen memoria los procesos que más consumen memoria los que más consumen son los intensivos y entra y salida y los que más consumen son aquellos que hacen poca entrada y salida cuando hago esta esta división de intensivos en entrada y salida y poca entrada y salida primero tengo que tomar la decisión de cuál es la política que más me conviene en el caso de la política de pila de código es una política completamente bruta es decir no nos toma en consideración ningún principio ni ningún criterio este importante es simplemente una política de ordenamiento es una política como para como para arrancar un contexto ejecución para echar a andar a ver cómo se comporta todo y a ver qué decisiones tomó una política por consumo de memoria es importante porque la memoria siempre es un recurso que es de suma competencia y siempre está expuesto a condiciones críticas es decir la memoria nunca no nunca es disponible siempre se juega con los sobros ok pues entonces por eso la memoria correctamente es importante hay procesos que entran en ejecución y crecen en consumo de memoria hasta llevar a un nivel de poner en condiciones críticas el contexto de ejecución es decir ya no se puede prácticamente que ni siquiera terminar de ejecutar algunos procesos y no se toman medidas para sacarlo a él pronto de ejecución para que libere memoria y se pueden ejecutar el resto de procesos en ese caso si los criterios de ordenamiento serían por consumo de memoria o por pila de código ambos en ambos casos harían harían esta rutina en esta rutina acá se me olvidó mencionarles que en el caso del ron robin es el único que aplica esta política ron robin es el único que aplicaría esta política porque ron robin lo que hace es que como se le termina el tiempo como se le da un tiempo de uso de cpu ese tiempo se va a terminar en algún momento es decir él no va a esperar aquí está la instrucción de espera por entrada y salida aquí es el punto de entrada ahí entra la ejecución empieza a ejecutar esa instrucción empieza a ejecutar esta y aquí se le terminó el cuanto ahí finaliza en cuanto es decir él no alcanzó él no alcanzó este punto acá que es donde está la operación de entrada y salida por lo tanto viene a listo y la siguiente vez que ente probablemente arranca este punto y si se vaya a encontrar la operación de entrada y salida pero en este caso por eso es que se da el hecho de que un proceso pasa de ejecución a listo es la única posibilidad cuando se aplica en la política ron robin entonces estamos ejecutando primero el trabajo más corto con primero el trabajo más corto entonces el algoritmo siempre va a salir de ejecución hasta que se encuentre una operación de espera por entrada y salida es decir será esta la condición nunca va a ir de ejecución a listo y cuando el proceso si estoy ejecutando primero el trabajo más corto entonces el modelo ordenamiento será aquí siempre por el tamaño de la pila de código es decir el proceso uno ya tiene una cantidad de líneas de código desde que nace entonces ese valor nunca va a cambiar siempre que llega a listo va a mantener el valor original y va a ir colocándose en las posiciones donde va este algoritmo tiene una una posible desventaja la posible desventaja que tiene es el envejecimiento y el envejecimiento lo que determina es que

### Orador 2 · `2:02:54 - 2:03:19`

hay procesos que son reiteradamente relegados de ejecución

### Orador 1 · `2:03:22 - 2:04:25`

que quiere decir eso que si esta lista está ordenada por primero primero el trabajo más corto entonces siempre quienes van a caer al inicio 1 2 los de la pila de código más pequeña lo de la pila de código más corta o los de bajo consumo de memoria entonces estos humanos que están acá van a estar reiteradamente relegados porque porque siempre va a haber alguien más pequeños que ellos siempre va a haber alguien que ocupe menos cantidad de memoria entonces cuando eso pasa estos procesos esos procesos

### Orador 2 · `2:04:25 - 2:04:37`

caerían en esa condición de envejecimiento si están en esa condición de envejecimiento

### Orador 1 · `2:04:38 - 2:04:48`

entonces ellos van a tardar demasiado tiempo y va a aumentar aquel índice que llamábamos tiempo de espera que era el tiempo que un proceso duraba en una cola esperando a ser atendido

### Orador 3 · `2:04:57 - 2:05:12`

pero antes de borrar eso puede tomarle foto eso le iba a decir profe y también si puede mover un poquito la cámara porque se está comiendo casi que todo el lado derecho de la esquina y toda esa parte de lo que estás escribiendo ahí

### Orador 4 · `2:05:14 - 2:05:19`

un poquito más ahí ahí perfecto gracias

### Orador 1 · `2:05:19 - 2:05:22`

hubiera sido un detallazo si me hubieran avisado hace rato

### Orador 2 · `2:05:24 - 2:06:12`

el siguiente algoritmo que aplicaría sería apropiatividad la apropiatividad está asociada

### Orador 1 · `2:06:19 - 2:13:31`

está asociada con los sistemas de tiempo real que es un sistema de tiempo real un sistema de tiempo real es un sistema que en el momento en que se genere un evento esperado el proceso que lleva a cabo esa rutina se va a ejecutar de manera inmediata entonces por ejemplo donde se aplica sistemas de tiempo real bueno se aplican en telemedicina en detección de riesgo por ejemplo de incendio entre otros es decir por ejemplo telemedicina un paciente está siendo monitoreado por un dispositivo que hace una medición de algunos líquidos en el cuerpo en el momento en el que ese dispositivo determine un umbral automáticamente se dispara un evento y ese evento en la ejecución de un proceso que lleva a cabo un disparo de una alerta ese es por ejemplo un proceso de naturaleza de tiempo real ok son mal llamados sistemas de tiempo real no es un sistema el sistema es toda la funcionalidad lo que permite que se esté tomando la muestra que se llegue al análisis de la muestra que se haga la interpretación que esté llevando el contador de tiempo que hayan entradas de datos de otras rutinas pero ahí en ese que llamamos tiempo real sistema tiempo real en realidad lo único que fuera es un proceso con esa naturaleza pues qué es lo que va a pasar que hay un único proceso hay un único proceso que tiene esa etiqueta es decir en el contexto ejecución sólo hay la posibilidad de que un proceso tenga la etiqueta de propiedad es decir sólo un proceso puede asumir esa condición y en el momento en el que ese proceso entra en ejecución automáticamente él va a disponer de esos recursos eso que quiere decir que por ejemplo que si estamos jugando con la propia actividad y el proceso aparece en el momento en el que el proceso salga de la cola de espera automáticamente va a entrar a ejecución cuando el proceso va a ejecución él va a ejecutar hasta encontrar una operación de espera por entrada y salida va al dispositivo encargado de atenderlo y evidentemente lo que va a pasar es que se va a colocar al inicio de la lista ok al inicio de la cola de solicitudes de ese dispositivo el dispositivo lo atiende y una vez que lo atiende aplica la misma lógica pasa directamente pasa directamente a ejecución ok es decir él va a sacar a los villanos que esté en ejecución y va a entrar él a esa condición inevitablemente él no va a poder digamos no vamos a monopolizar el cpu porque porque cada vez de que la buena operación de entrada y salida el sistema se dedica a tener otra cosa es decir un sistema de tiempo real lo único que tiene es un proceso un proceso que tiene la condición de apropiatividad él tiene la potestad de poder desplazar a alguien del lugar donde esté ok en la cola de listos y en la cola de espera por entrada y salida se va a colocar de primero cuántos procesos apropiativos pueden haber en un contexto de ejecución sólo uno que creen ustedes que pasaría si habrían dos procesos dos procesos apropiativos si hubieran dos procesos apropiativos lo que va a pasar es que entra el proceso 1 ok inmediatamente que le entra ejecución entra el proceso 2 y lo quita el proceso 1 el proceso 1 sale va de nuevo al listo porque tiene todos los datos pero como él es apropiativo entonces saca el proceso 1 va a entrar nuevamente el proceso 1 y saca el proceso 2 y el proceso 2 nuevamente vuelve a entrar y lo vuelve a sacar con el agravante de que ambos están desplazando y ninguno está avanzando en su pila de código porque un proceso desplaza constantemente al al al otro entonces en un contexto no pueden existir dos procesos apropiativos sería como un bucle el problema no es el bucle el problema no es el bucle el problema es que uno interrumpe al otro y entonces ninguno ninguno está avanzando en su pila de código están enfrascados en una competencia por el recurso sin hacer aprovechamiento de él y finalmente el último algoritmo es el de cola múltiples y

### Orador 2 · `2:13:31 - 2:14:22`

el de cola múltiples es una combinación es decir en cola múltiples ya ustedes después de conocer el contexto y perfilar comportamientos y perfilar comportamientos entonces determina que puede

### Orador 1 · `2:14:22 - 2:16:36`

hacer colas entonces en la cola 1 se podría tener que es con free server en la cola 2 se podría robin y este podría decir culto 2 2 procesos y de este ejecuto 5 procesos que quiere decir que la cola listos usted dice voy a ejecutar 2 por primero el trabajo por primero llegar primero primero ser servido entonces van a ir estos dos y después de ejecutar esos dos voy con los siguientes que siguen voy a ejecutar 5 con robin 1 2 3 4 5 y vuelvo nuevamente 2 por fiel con free server es decir la cola se tiene que estar ordenando en cada instancia incluso si yo podría decir una cola robin con un cuantum pequeño y una cola 3 con un robin o un cuantum grande y ejecuto en vez de 5 procesos acá voy a ejecutar voy a ejecutar 4 y un proceso cada vuelta ejecuto 2 primero de free server se fueron estos dos primeros ya lo saqué ya pasaron a ejecución después de los que siguen voy con robin primero con cuanto pequeño y ordenó de los que están aquí quienes tienen cuanto más pequeño los colocó al inicio y ejecutó los primeros cuatro después de ello digo quien el cuantum más grande y ejecutó el para qué para evitar envejecimiento por ejemplo

### Orador 4 · `2:16:39 - 2:16:45`

una consulta el en sí el concepto de combinación cuál sería es que no me quedó muy claro esa parte

### Orador 1 · `2:16:46 - 2:20:04`

es que en realidad no estoy jugando con un anteriormente de aquí para atrás jugaba con una política cierto es decir yo decía o estoy jugando con frisco free server o estoy jugando con robin o estoy jugando con primero el trabajo más corto por pila de código o estoy jugando por menos trabajo más corto porque su memoria pero era una en ese instante sólo con una estaba jugando pero ahora lo que estoy diciendo es con cola múltiples que yo puedo decir voy a jugar tres colas ok en una cola voy a tener voy a tener ordenados voy a meter una una una cantidad de procesos y van a estar ordenados por frisco free server en otra cola voy a meter robin y ordenados por un cuantum pequeño y una tercera cola robin pero cuantum los que tienen cuanto más grandes entonces ahora si bien el ciclo ejecución dijo del ron robin de menos perdón de frisco free server de menos y le dan los dos primeros que están al inicio la cola ahora de ron robin de los cuantos pequeños en el cuarto y los primeros cuartos la cola de ron robin de los de cuanto un árbol grande de me uno y le doy uno terminó esa vuelta con las siguientes vueltas de frisco free server de menos procesos obviamente van y los dos que están al inicio de la cola es decir ahora es esto que está aquí esto que está aquí es exactamente decir ahora yo voy a tener aquí 1 2 3 esta va a ser mi cola 1 mi cola 2 y mi cola 3 ok donde antes tenía donde antes tenía una única cola hasta el momento lo que hemos manejado es que teníamos una única cola quiero que estamos diciendo es que ya no vamos a tener una única cola vamos a tener tres colas tengo una en donde tengo procesos ordenados por frisco free server tengo una segunda cola donde tengo procesos ordenados por ron robin con cuanto un pequeño y aquí que probablemente sea muy muy muy muy muy corta procesos de ron robin pero con cuánto muy grande entonces cada vez de que de que de que me toque elegir voy a decir primero de la cola 1 dice que son dos procesos saco uno en chua listo la siguiente vez me toca todavía de frisco free server saco el siguiente que saque este saque este sigue el tercer proceso pero ya el tercer proceso ya no de esa cola dice que van cuatro de esta entonces 1 2 3 4 y después que sigue uno de ésta y voy de nuevo para la de la de frisco free server 1 2 y voy para la cola 2 1 2 3 4 ok ahora si me entienden

### Orador 2 · `2:20:07 - 2:20:08`

y si

### Orador 3 · `2:20:12 - 2:20:21`

o no no lo escuché bien sigamos y este proceso

### Orador 1 · `2:20:23 - 2:21:43`

usa también el apropiativo si con las múltiples puedo utilizar la propiedad la propiedad yo la puedo usar en cualquiera de los algoritmos la propiedad no es un algoritmo como tal la propiedad es una etiqueta es que hay una confusión la gente dice vamos a aplicar un algoritmo o muchas bibliografías hablan de un ordenamiento por prioridades prioridades no existe en un contexto de ejecución sólo existen dos prioridades una que es el que puede patearle el cero a todos y todos los demás entonces no existen eso de organizar grupos de prioridades eso no existe sólo existe un posible algoritmo un posible proceso que tiene la potestad de desplazar a todos que es la propia en la perspectiva y todos los demás están en el mismo rango ok entonces yo puedo aplicar a la perspectiva confieso con el trabajo más corto ok y por supuesto que también publicado en cola múltiples pero yo no puedo decir voy a tener de cola 1 1 de la cola 1 1 de la cola 2 y otro de la cola 3 eso jamás puede ser posible ok

### Orador 6 · `2:21:48 - 2:21:54`

y este algoritmo de colas múltiples digamos más que todo en qué sistemas se aplican

### Orador 1 · `2:21:54 - 2:22:51`

o en qué procesos en todos los contextos de ejecución se aplican colas múltiples porque en un momento yo puedo decir o sea no me sirve ni aplicar frisco ofrecer el puro mi primer trabajo más corto puro tengo que hacer una combinación y entonces en ese caso lo que tiene que ver aquí es el criterio ordenamiento ahora porque esto puede cambiar entonces me sirven con las múltiples pero me sirve decir que ejecuto 2 3 y 1 posiblemente esto de que va a depender de la naturaleza del contexto si lo que me interesa sacar es procesos que hagan mucho consumo de cpu entonces yo quiero sacar estos procesos rápido si quiero sacar rápido los que hacen poco consumo cpu entonces más bien subo aquí subo aquí 4 1 ok eso lo que va a depender

### Orador 3 · `2:22:51 - 2:23:05`

de la naturaleza los que esté ejecutando algoritmos de planificación este es el que tiene más eficacia y eficiencia no yo no he hecho eso

### Orador 1 · `2:23:11 - 2:23:21`

en un contexto puede ser que el más eficiente sea pero no necesariamente pero no necesariamente en otro contexto todo va a depender de cuál

### Orador 6 · `2:23:21 - 2:23:44`

la naturaleza de los procesos que estén ejecutando eso es lo que le consulta ahorita en realidad digamos la pregunta que le hice anteriormente yo preguntaba como tipo de propiedad que usted comentó que se aplicaba más en el teléfono y sitio y cosillas así es un ejemplo yo dije es un

### Orador 1 · `2:23:44 - 2:24:46`

ejemplo pero por ejemplo digamos en un contexto de ejecución usted determina que hay un proceso que no está avanzando en ejecución y es un proceso importante porque es importante porque tiene una gran cantidad de memoria acumulada porque todavía está tierno en su pila de código este porque si yo lo logro sacar rápido voy a liberar mucho recurso entonces que es lo que se hace le pega el chozo eléctrico le estampa la etiqueta propiedad y va a lograr que lo saque ese proceso y usted va a resolver va a volver a respirar su contexto de ejecución la propiedad no es estrictamente para esos casos verdad pero es una estrategia lo que sí hay que tener demasiada claridad es que en un contexto de ejecución usted no pone donde usted se reparte a propiedad es como repartir confites verdad es decir sólo un proceso y hasta que usted esté seguro que ese proceso salió usted puede después volver a considerar asignar a propiedad porque

### Orador 6 · `2:24:46 - 2:25:03`

eso sí estaba claro pero en realidad la pregunta que iba a hacer es que así va como usted comentó que apropiatividad de unos ejemplos en los que se aplicaba más que todo digamos los otros tipos de algoritmos bajo qué contexto se toma en cuenta cuál aplicar y cuál no en general

### Orador 1 · `2:25:04 - 2:36:17`

ok ok si usted por ejemplo está teniendo problemas con procesos que están digamos que tienen mucho tiempo vamos a ver recuerde que usted analiza variables verdad lo único que usted tiene para tomar decisiones es el análisis de variables si usted tiene y viene y pregunta por por en el bloque en la tabla de procesos cómo están el promedio de tiempo de espera de los procesos y se encuentra que el proceso 45 el proceso 45 se sacó el premio ok es el que tiene mayor tasa de tiempo de espera un intervalo de tiempo después viene y pregunta y nuevamente el proceso 45 tiene la etiqueta de tiempo espera más alta ok viene y pregunta después y resulta que el 45 aparece entre los tres que tienen la tasa de espera más alta entonces aquí evidentemente hay algo que hacer por ese proceso ok entonces una política se podría hacer de cambiémoslo si o sea si tiene tanto tiempo de estar en el ciclo entonces si yo lo acomodo con primero en llegar primero se servido yo sé que lo voy a favorecer cierto porque él va a ser más viejo que muchos de los que están ahí entonces cambiémoslo verdad cambiémosle la política para favorecer ese fulano ok es decir las políticas no aplica una política para para un caso específico todo va a depender de qué es lo que está pasando de cómo se está comportando de cuál es la lógica eso es lo que hay que lo que hay que leer verdad si ustedes tienen por ejemplo que la tasa de aprovechamiento de cpu está bajando entonces porque está bajando la tasa de aprovechamiento de cpu porque puede ser que los procesos que están que usted está teniendo tienen muchas muchísima muchísima entrada y salida pues qué pasa si usted tiene esos procesos qué pasa si usted tiene procesos de digamos que se comportan así como ese que tienen una tasa elevada de espera por entrada y salida y usted está jugando con cuántos demasiado grandes después lo que va a pasar es esto el proceso entra y desperdicia todo ese tiempo ok qué pasa si se está jugando si se está jugando con vámonos si usted tiene ese problema si usted tiene ese problema entonces ya ron robin no le está sirviendo ok qué quiere decir que entonces lo que le conviene es aplicar un algoritmo en donde el proceso una vez que encuentre una operación de espera por entrar y salir a salga entonces cambia a first con first server se olvidó el ron robin no me sirve no me sirve aplicar ron robin aquí voy a first con first server voy a first con first server entonces yo sé que él viene y entra entra ejecuta y aprovecha no hace desperdicio ok y cambia otro proceso y cambia otro proceso pero de pronto de un pronto 8 entonces esa pila de código se empezó a comportar diferente de ahí para abajo ahora la otra operación entra y salía está por aquí y la otra está por aquí qué comportamiento tiene eso eso ya tendría un comportamiento así eso tendría un comportamiento así y cómo se llama eso se llama monopolización de cpu ya no me sirve ya esto no me sirve ya esto no me sirve yo que necesito yo aquí hacer un uso equitativo entonces voy nuevamente a ron robin ok por eso es que esto no es estático esto no se comporta esto es esto no no no no no no no hay una receta específica es hay que estar midiendo cómo se comporta hay que estar midiendo las variables del bloque de control hay que estar midiendo las variables de la tabla de procesos para sacar promedios y determinar hay que determinar del bloque control de procesos para determinar procesos que están envejeciendo para procesos que están siendo constantemente relegados para procesos que están siendo este excluidos hay que determinar la tasa la tasa el tiempo de respuesta para ver cuáles procesos están durando demasiado porque si antes duraban poco ahora están durando demasiado es decir la única el único mecanismo eficiente y efectivo para hacerlo es basarse en los resultados del bloque control de procesos y de la tabla de procesos es lo único de por demás de ahí sobre la naturaleza de los procesos es muy poco lo que se puede determinar a excepción de los que ya conocemos los que son intensivos en entrada y salida los que son intensivos en cpu los que son intensivos en entrada y salida y consumen mucha memoria los que son intensivos en entrada y salida pero consumen poca memoria de los que son intensivos en cpu y consumen mucha memoria intensivos en cpu pero consumen poca memoria etcétera ok vamos a analizar un poquito las secciones críticas ok tienen a vista acá ok esto es secciones críticas que en el apartado del libro vamos a buscar esa referencia voy a hacer vamos a hacer unas salas y cada una de ellas conceptualiza la sección que le corresponde y lo que va a determinar es qué es qué es lo que cada una de esas alternativas resuelve ahorita la vuelta yo le voy a explicar que es una sección crítica y lo que ustedes van a determinar es principalmente lo que nos interesa es cuál es el espíritu del algoritmo es decir

### Orador 2 · `2:36:17 - 2:36:37`

qué es lo que trata de resolver en la lectura del libro que le mandó el digital eso es rapidito en

### Orador 1 · `2:36:38 - 2:36:52`

15 minutos no más de eso vamos a hacer siete salas ahí están logradas ya vamos a compartir

### Orador 5 · `2:36:52 - 2:37:31`

para que esté verdad que si por ejemplo a mí me toca la sala 2 pues hablamos

### Orador 2 · `2:37:35 - 2:57:22`

gracias estamos listos

### Orador 1 · `2:57:33 - 2:57:53`

ok bueno vamos a analizar lo que son secciones críticas y tenemos que las secciones críticas parten de cuatro supuestos y uno que dos procesos no encontrarse al mismo tiempo en su sección crítica ok vamos a definir qué es una sección

### Orador 2 · `2:57:53 - 2:58:55`

crítica una sección crítica es cuando dos o más procesos comparten variables y coinciden en ejecución que significa eso significa que en él en el ciclo

### Orador 1 · `2:59:36 - 3:06:47`

en el ciclo que tenemos es esto un proceso entra ejecución que estamos ejecutando ese es el proceso 1 ok el proceso 1 entró aquí que entra a ejecutarse el proceso 1 ok aquí en este punto utiliza una variable compartida ok pues el proceso entra aquí y empieza a ejecutar esta porción del código hasta este punto le da y le da y le da hasta este punto se encuentra una operación de entrada y salida ok este es el proceso 1 que se está ejecutando ahí de qué depende de esto que se ejecute todo o que se ejecuta una porción del algoritmo ok del algoritmo qué pasa si estamos utilizando first-come-first-server se va a ejecutar todo hasta esta operación si es primero el tramo más corto por fila de código igual se va a ejecutar todo qué pasa si es un robin probablemente se vaya a haber interrumpido acá o acá o acá o acá ok es decir van a pasar 1 2 3 4 5 iteraciones en las cuales él va a ser recurrentemente esto va a venir aquí a la cola listos entonces lo que decimos es que si él aquí tiene una una variable compartida que la está utilizando en ese ciclo vean a través del cual está usando la cpu hasta que no haga una operación de espera por entrada y salida en esa variable él la va a tener va a ser propia de este proceso 1 la sección crítica se da cuando una vez que el proceso 1 sale ejecución y entra el proceso 2 y resulta que el proceso la variable compartida es aquí entra el proceso 2 el proceso va por aquí entre ejecución acá y va a ejecutar esta porción del código pero resulta que aquí tenemos una variable compartida ok entonces como esta variable ya está asignada y no se ha encontrado una operación de espera por entrada y salida él va a tener todo este segmento de código es decir van a pasar 1 2 3 4 5 iteraciones por ejecución a través de las cuales él mantiene la variable sí pero el proceso 2 en este momento entra en este punto entonces va a coincidir los dos en el uso de la variable compartida siempre y cuando esté utilizando robin sí y sólo si estoy utilizando robin si estoy utilizando cualquiera de los otros no hay ningún problema porque él va a venir y va a ejecutar todo va a liberar ejecuta libera ejecuta libera pero si estoy utilizando robin él puede interrumpir aquí y ejecutar el proceso 2 y el proceso va a hacer uso de la variable a por eso decimos es que los procesos no deben encontrarse al mismo tiempo en su sección crítica qué pasaría por ejemplo si el proceso 1 viene a ejecutar esta parte del código y el proceso 2 apenas va por aquí el proceso 2 viene por aquí viene por aquí le toca hacer pruebas esto esto esto después después cuando ya esté una no sale de acá y el proceso 2 va a empezar a hacer uso de la variable compartida ya este otro la liberó entonces aunque existe la posibilidad de la variable compartida nunca coincidieron en ejecución los dos al mismo tiempo en el uso de la variable por lo tanto ahí no habría una sección una sección crítica entonces el primer enunciado dice que dos procesos no deben encontrarse al mismo tiempo en su sección crítica y si pasa aplicaríamos cualquiera de las reglas que ustedes evaluaron 2 no debe hacerse hipótesis sobre la velocidad cpu que quiere decir eso que vean la pila de código del proceso 1 y vean la pila de código del proceso 2 vean donde está la variable compartida el proceso 1 idea en la línea en instrucción donde está la variable compartida el proceso 2 hipotéticamente yo podría decir ahí nunca ver la sección crítica porque porque vea este por donde viene que ejecutándose es decir nunca van a coincidir en el tiempo esto nunca se va a alinear no yo no jamás puedo este presumir y generar hipótesis sobre cómo se van a comportar las pilas de código o cómo se van a ejecutar porque porque ya vimos que perfectamente el proceso 1 que tiene una pila de código más corta que el proceso 2 puede terminar más rápido el proceso 2 que el proceso 1 el tercer enunciado dice que por ningún proceso fuera la sección crítica puede bloquear a otro proceso es decir que si ya el proceso 1 entró y tiene las variables compartidas en el momento en que llega el proceso 2 y dice yo ocupo esa variable entonces voy a bloquear al proceso 1 para coger yo la variable eso no se puede hacer una vez que ya hay un proceso con una variable compartida dentro lo único que tengo que hacer es generar cualquier mecanismo de los que ustedes se hablaron para garantizar que el proceso 2 no va a entrar mientras que ese gulano no salga de aquí el cuarto criterio dice que el cuarto criterio dice que ningún proceso debe esperar eternamente para entrar a la sección crítica porque porque una sección crítica dice que es cuando dos o más procesos comparten las variables y coinciden en instante ejecución pero qué pasa si no son dos si son y si no son dos y son muchísimos los procesos si son muchos los procesos entonces aquí lo que lo que está pasando es que perfectamente el proceso 1 ya está haciendo uso de la variable llegó el proceso 2 más está esperando pero perfectamente puede llegar 7 procesos después tratando de acceder a esta variable entonces perfectamente el proceso 2 se va relegando relegando relegando relegando y llega un momento en el cual decimos bueno ya hay que dársela al

### Orador 2 · `3:06:47 - 3:07:07`

proceso 2 porque porque no puede esperar eternamente para entrar a esa sección crítica alguna duda de mi parte no creo que eso también

### Orador 1 · `3:07:10 - 3:07:12`

sí claro ya ya

### Orador 3 · `3:07:13 - 3:07:20`

luego me confundí un toquecito ahí con la parte donde usted dijo sobre los dos procesos que no pueden convivir o algo así

### Orador 1 · `3:07:22 - 3:09:50`

bueno esa es la esencia de la sección crítica los dos procesos no pueden coincidir es decir los dos procesos no pueden estar en ese ciclo de ejecución en ese momento si ya hay uno que entró a ejecución el otro que viene y que solicita uso de esa variable tiene que esperarse no puede entrar la ejecución por nada y si son muchos igual hay un esquema de ordenamiento pero no afectan el rendimiento pues por supuesto que va a afectar por supuesto que afecta pero está está primero el principio de que hay que proteger esa variable compartida el asunto muy práctico el asunto muy práctico tenemos tenemos una caja tenemos una caja con repostería todos tenemos que acceder a esa caja con repostería pero todos tenemos un orden qué pasa por ejemplo si llego yo y cojo una repostería le pego un mordisco pero inmediatamente me quita otro proceso el otro proceso va a llegar va a entrar a la caja usted probablemente vaya a coger su repostería entera le va a pegar un mordisco llega otro proceso y lo quita después de siete procesos que entre el octavo que llegue que va a encontrar que todas las reposterías están mordidas cuando lo lógico es que cada uno mordiera sólo se comiera sólo una repostería entonces que entrara yo tuviera acceso me comiera mi repostería completa libero después entra otro proceso se comen su repostería completa entra otro proceso se comen su repostería completa etcétera ok porque si no entonces la siguiente vez que me toque mi turno cómo voy a saber yo cuál es la que ya había mordido y cómo es cómo va a ser cuántos mordiscos le ha pegado eso en la sección crítica la sección crítica el asunto es coincidir coincidir en el momento ok vean lo muy práctico o sea ustedes tienen un tiempo de merienda cada uno toma el tiempo de merienda a la hora que quieran verdad cuál sería el problema el problema sería coincidir en ese tiempo de merienda ok si coinciden porque porque es la misma variable es decir como acceder a la

### Orador 3 · `3:09:50 - 3:09:58`

misma caja entonces el tiempo de variable la variable compartida y sería el tiempo de merienda

### Orador 1 · `3:09:58 - 3:11:38`

no no la variable compartida sería la caja de la serían las meriendas simplemente imagínese que hay una caja con costillas ok que hay una caja con costillas es más vamos a poner bonito dos variables compartidas las costillas y el fresco ok yo salgo yo voy de primero entonces yo vengo me sirvo un vaso de fresco y cojo una costilla le pego un mordisco a la costilla además le pegué dos mordiscos a la costilla y me tomé un trago de agua pero inmediatamente llegó otro proceso y me quitó llegó otro vez y me quitó ese proceso probablemente coja o la costilla que yo he mordido o coja otra costilla verdad el hecho es que después de que pasaba siete ocho veces eso con diferentes personas me toca a mí nuevamente entonces dónde está dónde está mi vaso de fresco si yo sólo me he tomado un trago y el que está aquí tiene un cuarto y qué pasa con las costillas no está la costilla que tiene que tenía dos mordiscos que yo había mordido sólo hay dos costillas enteras y las otras están por la mitad o le falta un cuarto ok ese es el asunto o sea lo que hay que proteger es que cuando hay variables compartidas dos procesos no pueden coincidir en él en el uso de ella al mismo tiempo o sea pero lo que tiene que pasar es que usted primero se

### Orador 6 · `3:11:38 - 3:11:44`

coma su costilla y su fresquita y después llega el otro exactamente porque porque es una variable

### Orador 1 · `3:11:44 - 3:12:05`

compartida lo que tengo que hacer es una vez que yo llego perfectamente puede llegar otro pero ese otro tiene que esperarse a que yo termine ok no quiere decir que mientras que yo esté nadie puede estar no no pueden llegar cinco o seis peticiones pero ya hay que proteger hay que decir nadie más va a entrar hasta que ese proceso se coma su costilla y se tome su fresca verdad

### Orador 2 · `3:12:05 - 3:13:34`

si perfecto vamos a escuchar el espíritu de los algoritmos vamos a empezar con variables de salvadura lo que queremos ahora si me escuchan el espíritu del algoritmo a ver el grupo 1 variables de salvadura hola hola hola alguien

### Orador 1 · `3:13:34 - 3:13:38`

me escucha se me fue el volumen o sí sí pero es el escucho

### Orador 4 · `3:13:43 - 3:13:55`

ese dice que como el espíritu es como que dos archivos no se pueden poner en cola simultáneamente algo así como lo que se explica ahorita lo de las costillas también garantiza la

### Orador 3 · `3:13:55 - 3:14:09`

exclusión mutua y una de las desestajas que ahí podemos ver es que por ejemplo los procesos lentos atrasan a los procesos rápidos entre otras cosas ahí que apuntamos en el bloc de notas

### Orador 1 · `3:14:10 - 3:14:11`

ok

### Orador 2 · `3:14:14 - 3:14:15`

qué estrategia utiliza

### Orador 4 · `3:14:33 - 3:14:36`

profesor si no lo buscamos o no lo encontramos

### Orador 3 · `3:14:40 - 3:14:57`

no es no es que más bien a este yo a ver sería más que nada que los coordina para solamente o sea hacer como cambiar el turno uno por uno no sé algo algo así lo estuvimos leyendo

### Orador 1 · `3:14:57 - 3:15:14`

por ahí pero no sé si va orientado con él utiliza un ciclo y utiliza para para garantizar que efectivamente en ese ciclo sólo va a haber un proceso y cambia el estado de esa bandera verdad

### Orador 2 · `3:15:15 - 3:15:30`

sí sí correcto pero bueno ya están listos los de barrios de cerradura ok vamos con la solución

### Orador 3 · `3:15:30 - 3:16:11`

de paredes o bueno bueno ahí este dice bueno para como el espíritu ahora sí que este consta de dos procedimientos escritos en ángeles y lo que indica es que hay que proporcionar prototipos de función para todas las funciones definidas se utiliza con el código se ve que igual es como lo que se está explicando ahora que permite que varios procesos esté compartan recursos utilizando pues las variables que hay compartiendo esa memoria y igual usted lo que utiliza es como un way para como para ordenar todo eso que no me quedó súper muy claro todavía pero en realidad

### Orador 1 · `3:16:11 - 3:16:38`

son variables verdad esos son variables lo importante es que digamos que él utiliza hay un procedimiento que llama a entrar a región es el que controla precisamente ese acceso y entonces teniendo claro que ya el proceso concluyó el uso de la variable entonces ya puede determinar si está libre el proceso o si hay alguna rutina dentro todavía algún hilo y de hecho ahí también

### Orador 4 · `3:16:38 - 3:16:54`

lo que menciona es que si el proceso es uno llama a este método de entrar a región y esperar hasta que el proceso cero sea falso llamando a la región para que llegue perfecto digamos en este caso en

### Orador 1 · `3:16:54 - 3:17:10`

este caso no hay ningún orden verdad simplemente usted llega y trata hacer no se va después llega y otra vez trata hacer decir aquí no nos lleva a ningún orden de en qué momento fueron solicitando

### Orador 3 · `3:17:10 - 3:18:23`

ok bueno eso es como la prueba y lo que hace es que es para varios procesadores entonces lo que hace es que agarra una variable y por decir flag y la convierte en uno si está en uno y lo almacena al ver ese registro dice que está en uso entonces después hasta que convierte en cero los demás procesadores puede agarrar esa variable y igual volver al estado que ellos ocupan si está

### Orador 4 · `3:18:29 - 3:19:32`

yo profe y los algunos apuntes decía que es útil para resolver problemas de discriminación y evitar condiciones de experiencia también se habla de competencia también se habla de un problema de producto consumidor en que dos procesos que comparten un recurso uno es un productor consumidor verdad el productor genera un producto lo almacena y el otro proceso que el consumidor lo toma ese producto uno a uno pero para ahí se puede dar un problema lo que decía y para que no haya añada más productos a la capacidad del almacén y que el consumidor no tome no tome productos y está vacío entonces para para solucionar eso se implementan los semáforos que lo que hace es dormir o despertar el proceso según el estado del almacén esa es la premisa que decía por ahí el libro si esto pasa por ejemplo digamos este

### Orador 1 · `3:19:34 - 3:21:08`

cuando usted tiene evidentemente ya es para para digamos para para más de dos procesos cuando son más de dos procesos verdad porque este lo que tenemos es que un proceso lleva a cabo vamos a ver digamos cuando se hacen por ejemplo análisis matemáticos donde uno tiene operaciones integradas en donde usted ejecuta primero lo que está entre entre paréntesis luego lo que está entre corchetes y finalmente lo que está entre ellas creo que si era el orden si no me equivoco si verdad entonces pues probablemente eso depende de generaciones estadísticas en tiempo en tiempo real que se van generando verdad y precisamente puede llegar a ocurrir que la exclusión o la o la segregación del segmento de paréntesis a corchetes o a llaves implique que todavía haya deficiencia de variables en el segmento anterior entonces eso genera una inconsistencia en los resultados entonces es un mecanismo para poder garantizar eso es decir la variable compartida es es en las variables que van dentro pero tiene incluso un modelo ordenamiento por eso es que digamos en estos casos muy práctico con la implementación por ejemplo el semáforo verdad ok vamos con contadores de eventos bueno

### Orador 3 · `3:21:10 - 3:22:50`

a lo que yo logré para recopilar porque a mí la computadora entonces primero que esto se basa en soluciones para el productor y el consumidor mientras mediante semáforos se basa en la exclusividad mutua para evitar las condiciones de competencia esta tiene definidas tres operadores que serían el de bueno el de leer avanzar y esperar el de leer regresa el valor de el de avanzar incrementa la forma del valor de y el de esperar espera hasta que tenga el valor de v o mayor y también sería que una descripción más general tal vez que este el contador de verdad permite que el nombre de eventos se produzca durante un periodo de tiempo determinado y el principio de este mismo es que el contador valora el número de puntos aplicados a la entrada para un periodo de tiempo predefinido no sé si yo se entiende algo que decir aquí tengo las acciones y

### Orador 1 · `3:22:50 - 3:23:38`

no yo creo que aquí lo que podríamos agregar verdad es que digamos se lleva el conteo de los eventos entonces este digamos no ha sido como muy frecuentemente utilizado porque por ejemplo en procesamiento distribuido dependiendo los de fases que hay en las en las en los digamos en los tiempos por el por el por el traslado de la información por el tránsito de los paquetes perfectamente puede ser que esos valores lleguen este ya obsoletos y entonces ya otro haya este asumido el control de la variable

### Orador 3 · `3:23:39 - 3:23:53`

de hecho aquí viendo las gráficas se nota como que hay un periodo de tiempo de validez que ya como después ya después de esa línea ya no si ok vamos con

### Orador 4 · `3:23:55 - 3:24:12`

pasos mensajes nos tocó a nosotros a mí y a lagos este es básicamente un mecanismo de comunicación entre procesos que se basa en dos primitivas 100 y 6 es un mensaje destino y

### Orador 7 · `3:24:12 - 3:24:23`

6 es un mensaje de origen al igual que los demáforos y a diferencia de los monitoreos son servicios llamadas al sistema verdad porque sonados por el sistema operativo

### Orador 4 · `3:24:23 - 3:24:33`

de los lenguajes de programación tendrán rutinas de biblioteca para invocar tales servicios desde un programa dichas rutinas de bibliotecas tendrán un formato parecido al

### Orador 2 · `3:24:33 - 3:24:39`

siguiente y además existen dos tipos que hay que explicar un toquecillo largo

### Orador 7 · `3:24:48 - 3:25:19`

que los sistemas operativos suelen implementar dos tipos de comunicación basado en transferencias este mensaje está la directa y la indirecta este dice que la directa del sistema tanto el proceso emisor como el proceso receptor deben especificar el proceso destino y origen respectivamente y está el indirecto que los mensajes se envíen y reciben de unos objetos proporcionados por el sistema operativo denominados buzón

### Orador 1 · `3:25:25 - 3:27:23`

este modelo el de paso mensajes precisamente lo que está hecho es digamos para aquellos aspectos en donde el control mediante variables o cualquier otra estrategia es más complejo que si lo negociamos entre los que vamos a hacer uso de la variable eso sería como por ejemplo como en el caso de las de la de la caja de las de la merienda verdad que en vez de que utilicemos algún mecanismo una pizarra este con un timbre por ejemplo o que nos dividamos por tiempos este que por ejemplo cuando yo voy a ir yo les mando un mensaje a ustedes y cuando termino le mando mensaje y el siguiente manda un mensaje diciendo sigo yo y cuando termina manda un mensaje diciendo es decir ese paso de mensaje lo que está diciendo es que hay mecanismos hay veces que es más fácil que se negocie entre los procesos que dejar a que un ente externo sea el que el que el que negocie el acceso de los demás procesos verdad bueno hay muchísimos otros estrategias verdad no los analizamos todos pero son los que más nos interesan este dejaríamos la clase hasta aquí y nos veríamos entonces el próximo martes para hacer la revisión de los proyectos les parece bueno nos vemos entonces hasta luego que la pasen bien gracias pero una consulta ya la otra semana entonces

### Orador 3 · `3:27:27 - 3:27:32`

no estoy muy metido en eso entonces sería hasta 19 ya con la visión de

### Orador 1 · `3:27:32 - 3:27:38`

yo tenía una consulta ya confiesa que no está muy metido en eso

### Orador 3 · `3:27:43 - 3:27:57`

no sé si me escucha y dígame la calidad en caso de que yo quisiera disolver mi grupo que implica implicaciones con llevaría eso

### Orador 1 · `3:27:57 - 3:28:09`

cuál es la propuesta y en cuál grupo es usted yo estoy en el grupo 2 2

### Orador 3 · `3:28:10 - 3:28:26`

la propuesta que tiene ya y este entre el compañero joey anderson estábamos decidiendo formar un grupo nosotros y tal vez con otro chico que yo creo que también va a disolver su grupo

### Orador 1 · `3:28:26 - 3:28:38`

pero no sé vamos a ver cuál sería la propuesta entonces quiénes serían sería yo anderson y otro

### Orador 3 · `3:28:38 - 3:28:45`

grupo ahí pero todavía no lo vamos a disolver porque vamos a terminar este proyecto y lo

### Orador 1 · `3:28:46 - 3:28:51`

valoramos este posterior para para los siguientes proyectos si está bien pero muchas gracias
