# 05 05 2026 10 12 1

### Orador 1 · `0:01 - 6:56`

Un seriosísimo problema con respecto a la limitación del tamaño de la memoria. Es decir, esa es la preocupación hasta este momento. Entonces, hasta el momento, todo el problema había sido la preocupación por la limitación de la memoria.

Y a todo esto de aquí hacia atrás, es a lo que nosotros le llamamos memoria sin intercambio. Es decir, solamente disponíamos de este espacio y nada más. Es decir, esto que teníamos aquí era el todo.

Ahora tenemos una posibilidad, y esa posibilidad le llamamos memoria por intercambio. ¿Eso qué quiere decir? Que de almacenamiento secundario...

Voy a ponerlo acá para que nos quede más clarito. De almacenamiento secundario... De almacenamiento secundario, ahora vamos a reservar un espacio, una porción.

Y a esta porción, a esta porción es a la que le vamos a llamar nuestra área de intercambio. Y entonces ahora, prácticamente le podemos decir que el tamaño de nuestra memoria principal ahora es ilimitado. Es decir, ahora cero problema con la limitación de la memoria.

¿Por qué? Porque tenemos un espacio adicional que es de proporciones bíblicas. Entonces, se murió el problema aquel de estar pensando en las limitaciones de tamaño.

Me imagino que cuando ustedes hicieron la instalación de Linux, de la versión que he instalado, lo instalaron manualmente, ¿verdad? Entonces definieron, lo primero que les pide es cuál es, qué cantidad de área quieren para el área suave. El área suave es el área de intercambio.

Es decir, esta área suave no es un área común del disk B para escribir datos, sino es una extensión de la memoria principal. ¿Lo ven? ¿Lo ven?

Como si fuera almacenamiento temporal. Es un espacio que se reserva para que lo que no cabe en memoria principal vaya a ese lugar. Entonces, imaginen ustedes ahora que esto sería exactamente igual como sin cada uno de ustedes.

En vez de tener solamente el espacio de ese computador, ¿verdad? Sería solo que haya memoria principal. Ahora tienen cada uno de ustedes un aula enfrente donde pueden echar lo que quieran.

Si quieren entrar en una bicicleta, lo meten ahí. Si quieren entrar en un carro, lo meten ahí. Si quieren entrar desde la cama, lo meten ahí.

Es decir, todo, todo, todo. Todo lo que ustedes ocupan ahora va a estar ahí, en esa área de intercambio. Entonces, ese es el principio de pensar en la memoria como intercambio.

Primera referencia. Ya estamos imaginando que la memoria es de tamaño ilimitado. Ya cero problema con eso.

Ahora, ¿cuál es el problema? ¿Cuál es el problema real? Imaginen que usted tiene, fíjense, todo lo que necesita en esta vida en una ola de esas.

Pero, en el fondo, cuando usted ejecuta, yo voy a ejecutar de lo que usted tiene en su bloque de memoria principal. Entonces, la magia está en tratar de mantener aquí, en memoria principal, ahora sí, lo que usted más frecuentemente utiliza. Es decir, se le va a aplicar el principio del caché, pero ahora para memoria virtual.

A esto le llamamos área de intercambio o también se le llama, como quiera llamarlo, memoria virtual. De cualquiera de las dos formas se le conoce. Entonces, yo puedo referirme como área de intercambio o como memoria virtual.

¿Por qué memoria virtual? Porque la memoria virtual hace referencia a que el documento lo que conoce es la memoria principal. Es decir, un espacio que es físico, que es limitado, que tiene ciertas restricciones.

Ahora, al pensar en que eso es de carácter ilimitado completamente, exactamente esa es la analogía del principio de memoria virtual. Es decir, cuando hablo de memoria virtual es que tengo ahora un tamaño del que ya no le preocupamos. La dimensión cuando ocupe ya no es relevante.

Pero sí, ¿qué es lo que debe preocuparme ahora? Ahora lo que debe preocuparme es la lógica para saber qué mantengo aquí y qué mantengo en ese espacio que es ilimitado. Esa es la magia.

Y recuerden, funciona exactamente igual al principio del caché. Lo ideal sería que lo que yo ocupe para trabajar hoy aquí, todo lo tenga aquí. Que no tenga que estar yendo hasta ese espacio a traer cosas.

Saludos. Ese es el principio. Tengo dos conceptos importantes.

Páginas y marcos para páginas. ¿A quién le correspondía valorar eso en la presentación? ¿Quién los callea?

### Orador 9 · `7:03 - 7:06`

¿En serio?

### Orador 1 · `7:08 - 7:36`

Páginas, marcos para páginas. Si los señalos, toca. Paginación calleando.

¿Se acuerdan qué era paginación? ¿Qué entendieron? Las preguntas, ¿qué entendieron?

### Orador 2 · `7:38 - 7:50`

Lo que me acuerdo un poco era que el tamaño del marco tenía que ser igual al tamaño de la página. Y ahora la gente tiene los billetes con el mismo tamaño. Ok.

### Orador 1 · `8:10 - 10:00`

Ahorita se va acordando. Ahorita se va acordando porque ahora vamos a entender realmente qué es una página y qué es un marco para páginas. El principio es el siguiente.

Vamos a ver. Cada elemento de lo que ustedes tienen en su escritorio es una página. En realidad así lo vemos como una página.

¿Eso qué quiere decir? Que es un dato real. Es decir, yo tengo un dato que se llama botella.

¿Verdad? Yo tengo un dato que se llama botella, que tiene un peso, que tiene una dimensión, que tiene un volumen. ¿Verdad?

¿Sí? Es decir, cuando yo digo, cuando yo señalo a este bloque de memoria, a esta variable en específico, ¿verdad? Efectivamente es la variable.

¿Sí? Ok. ¿Pero qué pasa?

¿Qué pasa en el momento en el que yo necesito mantener otras cosas aquí y ya no puedo mantener esta botella aquí? ¿A dónde va esa botella? ¿A dónde va esa botella?

Ok. Va a intercambio. ¿Ok?

Perfecto. Nosotros va a intercambio. ¿Ok?

Perfecto. Nosotros va a intercambio. Entonces, ¿qué es lo que pasa?

Ojo. ¿Qué pasa cuando yo esta botella me la traigo y la pongo allá en intercambio? ¿Qué tengo que hacer?

¿Qué tengo que hacer aquí? ¿Copiar? Bueno, meter una cópia de esto para allá.

No, porque si hay una cópia sería como mantenerla aquí.

### Orador 5 · `10:01 - 10:02`

Referenciarlo. ¿Ah? Referenciarlo.

### Orador 1 · `10:02 - 10:03`

¿Qué es referenciar? La calidad.

### Orador 5 · `10:04 - 10:06`

Como decir dónde lo va a dejar.

### Orador 1 · `10:06 - 10:12`

Ok. En el momento en que yo me lleve esto para allá, ¿yo tengo que dejar aquí qué cosa?

### Orador 5 · `10:12 - 10:13`

La referencia.

### Orador 1 · `10:14 - 10:33`

La referencia de la dirección en área de intercambio donde coloqué esa variable. ¿Ok? Entonces, la siguiente vez que yo venga aquí a buscar la botella, ¿a dónde voy a apuntar?

¿A qué espacio de todo el área de intercambio?

### Orador 5 · `10:34 - 10:35`

A la referencia.

### Orador 1 · `10:35 - 10:53`

A la referencia. ¿Cierto? Entonces, cuando yo apunto, cuando lo que apunto no es a la botella, sino que es a una referencia, eso en realidad es un marco para página.

¿Ok? ¿Qué es una referencia? Una referencia.

Bien.

### Orador 7 · `11:11 - 11:20`

¿Significo qué? ¿Ao qué? ¿Cómo?

¿Ao qué? ¿Siguiente? Opa.

Almacenamiento. Almacenamiento. Muy bien.

### Orador 4 · `11:36 - 11:37`

¿Qué otra canción?

### Orador 6 · `11:38 - 11:39`

¿Cuál es?

### Orador 5 · `11:39 - 11:40`

La de convencete.

### Orador 6 · `11:43 - 11:45`

Convencete, tío. Tú no me vas.

### Orador 5 · `11:47 - 11:48`

¿Sería bueno que yo me cague de nuevo?

### Orador 1 · `11:50 - 15:09`

¿Sí? ¿No pasa nada? Nada.

Tiene el pelo hermáidico. Entonces, si esto estuviera aquí, si esto estuviera así, en realidad lo que estoy apuntando a esto, yo diría que estoy apuntando a una página, para que contiene una variable real. Pero en el momento en el que yo me tenga que llevar esto para allá, yo me tendría que llevar esto para allá, para la línea de intercambio?

¿Por qué tendría que llevarme esto para el intercambio? ¿Pero por qué yo tendría que sacar esto de aquí? ¿Usted en algún momento ocuparía esta botella?

Cierto, ahorita, cuando usted tiene pensado ahorita usarla, claro. Entonces, ¿por qué yo tendría que quitar esto y llevármelo para allá? Si sé que a donde chulo a ti cobre la voy a usar.

Yo sacrificaría en llevarme esto hasta allá, porque es que allá ocupo este espacio para otra cosa. Es decir, ocupo algo, ¿dónde está ese algo? Eso que ocupo, ¿dónde está?

En intercambio. Como ahora el tamaño de la memoria casi es ilimitado, entonces ya ahora hago menos entra y salida, ¿verdad? Pero las cosas, ¿dónde van a estar?

En intercambio. Entonces, lo que ocupo está en intercambio. Y inmediatamente, ¿qué tengo que hacer?

Es coger algo de aquí para llevarme para allá. Es decir, cuando yo me llevo esto para allá, lo primero que voy a hacer antes de llevármelo es esto, que era una página que contenía actos, ahora se va a convertir aquí en lo que me hubiera participado. Entonces, ¿qué es lo que tengo que hacer aquí?

Un montón de páginas, y acá una página contendría esto, otra página contendría esto, otra página contendría esto, ¿sí? Y una de esas era esa botella. Pero necesito llevármela para allá y traer más cosas.

En el momento en que yo me lleve eso para allá, entonces, esta página, esto que era una página, ahora se convierte en un marco para páginas. Ahora dice que la botella está en esta dirección, en área de intercambio. ¿En esto?

Ahora sí, yo puedo escribir esta variable en intercambio y traerme la variable que ocupaba. Y esa variable la colocó en mi espacio de memoria principal.

### Orador 4 · `15:11 - 15:15`

¿La pone de donde se acuesta? ¿La otra variable?

### Orador 1 · `15:16 - 17:12`

Sí, pero es que digamos, si yo ya en Twitter lo pongo así en blanco, cada una de ellas, esto es una página, contiene una variable. Esta es otra página, contiene otra variable. Pero en el momento en el que yo apunto, por ejemplo, aquí, y yo digo, bueno, ¿qué busco?

Busco la botella. Pero aquí, ¿a dónde apunta la botella? Apunta a una dirección en intercambio.

Entonces, esto no era una página. ¿Qué era esto? Un marco para páginas.

Es decir, en mi bloque de memoria principal yo voy a tener páginas que las páginas contienen variables específicas. Pero, cuando apunto a algo, pero cuando yo vengo a buscar un mouse, me doy cuenta que a donde estoy apuntando con un mouse, es a una dirección, entonces esto no es una página. Es decir, lo que contiene a mouse no es una página, es un marco para páginas.

Y aquí lo que está es la dirección de dónde está la variable. La página es la que contiene una variable como tal. Y esta es una página.

Pero cuando yo busco mouse que le dice que está aquí, entonces lo que me encuentro es un marco para páginas. ¿Por qué? Porque lo que encuentro no es la variable, sino que es una estructura que contiene direcciones de variables.

Eso lo vamos a ver. ¿Sí? Eso lo vamos a ver.

¿Cómo es la proporción correcta? ¿Sí?

### Orador 5 · `17:13 - 17:16`

Ahora. Todos los bloques de memoria pueden representar páginas.

### Orador 1 · `17:16 - 17:16`

¿Perdón?

### Orador 5 · `17:16 - 17:18`

Todos los bloques de memoria representan páginas.

### Orador 1 · `17:19 - 18:23`

No. Y ese es otro asunto. El otro asunto es que evidentemente ya surge la duda.

¿Para qué queremos marcos para páginas? ¿Por qué no tenemos sólo páginas? ¿Por qué no podemos tener sólo páginas?

Porque hay una gran cantidad de cosas en intercambio que usted no puede tener aquí. ¿Ok? Por ejemplo.

¿Dónde está su horror? Está en intercambio, no está aquí. Está en intercambio.

Entonces, ¿qué tengo que hacer? Tengo que buscar la referencia, dónde está, y ir a traerlo. Pero para traerlo, ¿qué tengo que hacer?

Algo tengo que sacrificar. ¿Verdad? Algo tengo que sacrificar.

Entonces, ese es el principio. Que yo, por más que quiera, no voy a poder tener todas las variables aquí. Entonces, inevitablemente, ¿qué tengo que hacer?

Muchas de estas no van a ser páginas, sino que van a ser marcos para páginas. ¿Ok? Es decir...

### Orador 4 · `18:23 - 18:48`

Profe, esa era mi pregunta, de hecho. Digamos que había un marco para páginas, ¿ok? ¿Ocupa otra cosa que está en intercambio?

Donde yo saque esa cosa, digamos, lo que ocupa para ir a intercambio, en ese lugar guarda la referencia, y trae la otra. Pero, digamos, las referencias se guardan en un lugar, ¿no? No, no, no.

Ya, ya, ya.

### Orador 1 · `18:49 - 22:06`

Ahorita vamos a hablar de la parte algorítmica. Ahorita vamos a hablar. ¿Por qué?

Y de todo el procedimiento que se lleva a cabo. Por ahora, hasta este momento, tenemos clarísimo que es una página y que es un marco para páginas. Esa es la primera pregunta.

Hasta este momento, lo único que nos queda claro es aquí. Entendemos claramente que es una página y que es un marco para páginas. Segundo.

Entendemos que no tiene sentido que todo esto fueran puras páginas. ¿Verdad? O sea, sería el escenario ideal que todo lo que hay detrás sean puras páginas.

¿Sí? Porque así no tengo que hacer intercambio. Pero entonces, ¿de qué tamaño tendría que ser esto?

¿Verdad? ¿Sí? Bueno, para eso es intercambio.

Para tener aquí las cosas, ¿verdad? Las cosas más frecuentemente utilizadas. ¿Sí?

Eso implica que ya esté pensando de una vez en la aplicación de un algoritmo en la aplicación de un algoritmo para mantener aquí las páginas más frecuentemente utilizadas. ¿Sí? ¿Estamos?

Hasta ahí vamos. Hasta ahí estamos. ¿Sí?

Entonces, ya sabemos. Si esto contiene una variable como tal, a esto le llamamos una página. Pero si cuando apunto a una variable lo que me cuento es una dirección, quiere decir que esto es un marco para páginas.

¿Sí? Ahora, la pregunta del millón que deberíamos estar haciendo es, bueno, ¿qué será lo correcto? ¿Tener 50% de páginas y 50% de marcos?

¿O tener más marcos? ¿O tener más páginas? Bueno, ustedes por eso no se preocupen, porque el sistema es completamente dinámico.

¿Eso qué quiere decir? Que en un momento podemos tener aquí, digamos que tenemos un espacio para 20 páginas. ¿Ok?

Ya sabemos que muchas de ellas van a ser marcos. ¿Ok? Pero en un momento perfectamente yo les puedo decir, bueno, ya ustedes no van a tener este espacio, sino que ahora van a tener la mitad.

Si eso se reduce a la mitad, ¿qué va a pasar? Muchas de las que son páginas se van a tener que convertir en marcos para páginas. ¿Ok?

Entonces, ese es un principio fundamental. Este espacio no necesita el tipo de dinámico. Entonces, en un momento puede pasar que usted tenga una holgura, tenga 11 páginas.

¿Ok? Es decir, está en la fama. Pero perfectamente puedo decir que, digamos, restrija.

Quédese solo con la mitad del espacio. Entonces, empieza a hacer referencias para mandar ese intercambio, y se deja aquí un montón de marcos y muy pocas páginas. ¿Sí?

Casi al llegar al nivel de que casi todo van a ser marcos para páginas. ¿Ok? Pero después, va a haber una época donde va a decir a usted, no, duplique eso.

Entonces usted empieza a traerse, a traerse variantes, a colocarlas en páginas. ¿Verdad? Se trae todas esas, cada referencia ya se las colocó como páginas.

Y este marco, este marco ya no existe, ahora va a ser una página.

### Orador 11 · `22:07 - 22:07`

¿Sí?

### Orador 1 · `22:07 - 22:29`

Es decir, cuando yo logre traerme las ocho variables, las ocho referencias, ya este marco, ya no es marco, ahora se convierte en una página. Y al verlo, una variable. ¿Sí?

Hasta ahí estamos. Hasta ahí estamos. ¿Alguien tiene alguna duda hasta aquí?

Sí, Galeano, tíralo.

### Orador 4 · `22:29 - 22:33`

¿Qué es más divergente, los marcos para la página o la página?

### Orador 1 · `22:33 - 22:49`

Hace poco he puesto todo ya, Galeano. ¿Verdad? Pareciera ser que el sueño ideal es tener aquí puras páginas.

Pareciera ser, ¿verdad? ¿Sí? Pero el problema es que esto es limitado.

Esto es limitado, entonces es solamente un sueño. Ese sería el ideal, nada más.

### Orador 3 · `22:49 - 22:52`

Y se convierte en páginas hasta que llena todos los espacios.

### Orador 1 · `22:53 - 23:25`

¿No? O sea, en el momento, en el momento que yo necesito trasladar algo para allá, todas las páginas, ¿verdad? Y yo necesito trasladar esto para allá, yo hago esto, como los ocupo ahora que es una referencia, ya tengo que buscar un marco.

¿Verdad? Inevitablemente ya una página se va a convertir en marco. Es decir, hasta el momento que ocupamos a ver que una página contiene variables reales y un marco lo que contiene son referencias a variables que están en el intercambio.

### Orador 8 · `23:25 - 23:33`

¿Un intercambio? ¿Un intercambio? ¿Va a haber un intercambio?

¿Para cuáles variables? ¿Para cuáles variables? Ok.

### Orador 1 · `23:34 - 23:41`

Ok. En el momento en que ocupamos una variable para allá, quiere decir que yo tengo que dejar aquí una referencia.

### Orador 8 · `23:41 - 23:54`

¿Verdad? Pero digamos, si usted deja una variable para allá para traerse otra porque la necesita, eso no, digamos, esa nueva variable no va exactamente donde está el marco de referencia que había puesto de la manera anterior que sale.

### Orador 1 · `23:54 - 24:36`

Ya casi vamos a los algoritmos, pues no va a quedar dictado. Sí, sí, sí. Ok.

Por ahora usted tiene la lógica del intercambio. ¿Sí? La lógica del intercambio es, a ver, que si yo saco algo de aquí, tengo que dejar aquí una referencia para poderlo ubicar allá.

¿Verdad? ¿Sí? Lo que no sé mal es que yo esto me lo lleve para allá y resulta que después, ya sé que está en intercambio, ¿verdad?

Pero cuando yo vengo a buscar, yo no voy a buscar intercambio, yo voy a buscar en mi área principal, en mi área de trabajo. Y resulta que, ¿dónde está el marco? No está en ningún lado.

Se perdió la variable. Esa variable ya no es, ya no es recuperable. ¿Verdad?

Es decir, lo que no está referenciado acá, en el área de trabajo, en la memoria principal, no existe, literalmente. ¿Estamos? ¿Sí?

### Orador 7 · `24:37 - 24:46`

Entonces, los bloques de memoria siempre son o páginas o marcos. O pueden haber los dos. ¿Qué cosa?

Los bloques de memoria son o páginas o marcos.

### Orador 1 · `24:46 - 24:57`

Correcto. Correcto. En memoria principal, utilizando memoria virtual, los bloques son vistos como páginas o como marcos para páginas.

Ahí solo hay páginas si contiene variables.

### Orador 7 · `24:58 - 24:59`

Nunca son los dos.

### Orador 1 · `24:59 - 25:01`

O marcos para páginas si contiene referencias.

### Orador 7 · `25:02 - 25:03`

Nunca son los dos.

### Orador 1 · `25:03 - 27:49`

Nunca, ya vamos a ver. O sea, lo que estamos viendo, lo que estamos viendo es lo siguiente. Imagínense que este es el bloque de este proceso.

¿Ok? Este bloque. Ahora, lo que veríamos serían como estos.

¿Sí? En donde algunos son páginas, es decir, contienen variables, y otros son marcos para páginas o contienen referencias. ¿Sí?

Ahora, mi bloquecito de memoria, ahora yo lo veo así, de esta manera. Unos son páginas y otros son marcos para páginas. Lo cierto, el caso es que cuando yo apunto a cualquier variable, apunto a mi bloque de memoria principal.

Si está aquí, si esa es la variable, digo, si esa no es la variable, sino que es una referencia, una referencia a una variable que está allá, entonces, a esto, es a lo que llamamos, ¿cómo se llama esa variable? File o página. ¿Sí?

¿Qué es un file o página? ¿Es algo malo? No es algo malo.

¿Qué es un file o página? Nada más, es que yo apunté a algo que era la variable, pero no es una variable, sino que es una referencia. Eso es un file o página.

Eso es un file o página. Un file o página no es nada malo. No es algo malo que pasó en absoluto.

Simplemente es que yo estoy apuntando a algo que creí que estaba ahí, pero resulta que eso no está ahí en una página, sino que es un marco. Entonces, lo que implica es que tenga que ir a intercambio a traerlo. ¿Sí?

Ahora, un file o página, un file o página implica, un file o página, ahora implica que se tenga que ejecutar un algoritmo de reemplazo de páginas.

### Orador 5 · `27:49 - 27:49`

¿Ok?

### Orador 1 · `27:51 - 29:02`

¿Eso qué quiere decir? ¿Eso qué quiere decir? Que, cuando yo apunté aquí a mouse, ¿verdad?

Cuando apunté a mouse, ¿qué fue lo que me encontré? Un marco para páginas. Entonces, esto es un file o página.

Inmediatamente, ¿qué tengo que hacer? Ejecutar un algoritmo de reemplazo de páginas. ¿Quién es el responsable del algoritmo de reemplazo de páginas?

Siga, te mando, salí ahí. Sí, por segunda oportunidad, L, R, U, N, R, U, reloj. ¿Quién, quién va a llegar?

No al algoritmo, sino al espíritu. ¿Cuál es el espíritu? ¿Ajá?

¿Ajá? ¿Pasaste eso? ¿Está bueno?

N, R, U, vos no estás reciente. E, E, E, N, R, U. A ver, ¿quién más?

¿Quién más? ¿Ustedes de la academia?

### Orador 9 · `29:04 - 29:07`

¿A ustedes? Ah, ok, empecemos con FIFO, entonces.

### Orador 1 · `29:09 - 29:12`

Ok. ¿Cuál es el espíritu de FIFO?

### Orador 2 · `29:17 - 29:27`

Ok, pero en este contexto, ya, ya, ya. Ok, fíjense.

### Orador 1 · `29:28 - 29:34`

Ok. Si lo que tenemos acá es, ¿qué tenemos en la estalla principal?

### Orador 11 · `29:37 - 29:38`

¿Ah?

### Orador 1 · `29:39 - 30:37`

Ya ahora, ya ahora nosotros ya no hablamos de variables. ¿Qué tenemos? Ok, tenemos páginas que contienen una variable o marcos para páginas que contienen una referencia.

Métanse eso en la cabeza. O tengo marcos para páginas que lo que contienen son referencias, o tengo páginas que una página contiene una variable real. ¿Sí?

¿Qué es lo que me interesa? Lo que me interesa es que lo que yo ando buscando esté ahí en páginas para no tener que ir pegándome todo el viaje hasta allá. ¿Sí?

Eso es lo que me interesa. Si yo tengo marcos para páginas y tengo páginas, ok, cuando yo apunto a mi variable en mouse y lo que me encuentro es que eso es un file de páginas porque a mí lo que estoy apuntando no es a la variable sino que es un marco para páginas entonces ¿qué tengo que ejecutar? Ahora sí, Calián.

### Orador 11 · `30:39 - 30:39`

Sí.

### Orador 1 · `30:40 - 30:47`

Ajá. Ok. Entonces, ¿cómo explicaría yo ese algoritmo aquí, Calián?

¿Cómo se imagina usted la aplicación de ese algoritmo?

### Orador 2 · `30:51 - 31:18`

Si tuve un waterfall de agua entonces yo creo que lo lo No, es que no sé si es muy fuerte pero lo que es... Me estampó los oídos, ¿qué importa? Lo deshecho.

¿Qué deshecha, Calián? Es... Puede ser...

Ok, ¿sería decir esto?

### Orador 5 · `31:19 - 31:34`

No, no, tampoco. Pero digamos, estoy acá. Venga.

Ya, ok. Desea irme tu empleo. ¿Cómo estás, Calián?

Ya casi le toca a Coquito. Ya casi le toca a Coquito. Se parte de mano.

### Orador 1 · `31:35 - 31:44`

Ya, ya, ya. Ese es el ejemplo. Ok.

Eso es un file y resulta que lo que usted a lo que usted apunta es un marco para páginas.

### Orador 5 · `31:44 - 31:46`

¿Con quién voy a tocar? Ok, ahora sí, ¿qué hacemos? Con quién voy a tocar.

### Orador 7 · `31:50 - 31:53`

Se salvaron. Se salvaron.

### Orador 5 · `31:59 - 32:05`

¿Cuál es su algoritmo? ¿Qué es lo que hace el ritmo?

### Orador 1 · `32:12 - 32:15`

En este contexto, ¿qué quieren ustedes hacer?

### Orador 11 · `32:15 - 32:18`

Imagina que harían ritmos. Un ritmo, claro.

### Orador 1 · `32:22 - 32:34`

¿Qué se imagina que harían ritmos aquí? ¿Tal vez en un fiesta o algo así? ¿Qué se imagina que harían ritmos aquí?

### Orador 9 · `32:36 - 33:01`

Lo que salió fue un par de páginas. Correcto. Entonces, para mí, el primero que o sí, el primero que salió la verdad es que estaba la primera vez que estaba la variable ahí y hacer el intercambio.

Pero, ¿cuál salía? O sea, digamos, ¿el primero de quién?

### Orador 7 · `33:01 - 33:09`

La variable que ya había hecho el intercambio, su combo. Venga, pero es que ya no está bien.

### Orador 1 · `33:10 - 34:28`

Es el problema ahí. ¿Ok? Bueno, ok.

Ok, bien, ok. Es el marco en sus páginas. Una página, una página, una página, una página, una página, una página.

¿Sí? Ok. Entonces, 5, ¿qué es lo que necesitan por llegar aquí?

Con esto de acuerdo. ¿De llegar a dónde? ¿Cómo se llama eso?

¿Cómo se llama eso? ¿Me lo puedo llamar eso? Ok, ajá.

Ok, esto es la manera principal. ¿Sí? Entonces, 5, ¿qué es lo que estamos ordenando?

Ajá. ¿Y cómo lo vamos a ordenar? Ok.

Entonces, lo que yo tengo que hacer es que sucedió un fallo en páginas. ¿Verdad? Apunté a una página pero resulta que error.

Y a lo que apunté era una dirección. Entonces, ahora, ¿qué es lo que tengo que hacer? Tengo que traerme esta variable, ¿cierto?

Y la pregunta es ¿dónde voy a colocar la variable que me traigo? ¿Ah? ¿Dónde?

En una página. ¿En una página? Ok.

### Orador 2 · `34:28 - 34:29`

¿El detalle es cuál página?

### Orador 1 · `34:30 - 35:55`

El detalle es cuál página y para eso entonces lo que hago es que ejecuto este primer algoritmo. 5. Es decir, estas páginas, ¿cómo están ordenadas?

Ok. ¿Cuál es la hora llegada de esta página? ¿Cuál es la hora llegada de esta página?

¿Cuál es la hora llegada de esta página? Ok. Y entonces, ¿cuál es la página que se va a ir?

La página con la etiqueta más vieja. ¿Cierto? ¿Sí?

Entonces, ¿cuál es la página con la etiqueta más vieja? Esta, ok. Entonces, se va esta variable, se va esta variable y para traerme la otra.

Pero entonces, ¿qué es lo que tengo que hacer inmediatamente? Delirar marco para página y variar esta referencia. Ok.

Y decir, ahora esta dirección ahora lo que va a apuntar es, ya no el mouse y no ahora una pizzeria. Ok. Primero, tengo que cambiar la referencia aquí.

¿Sí? Ahora sí. La variable, la página va a intercambio la variable va a intercambio y de intercambio me traigo la variable que necesitaba y la coloco en la página que sale.

¿Sí?

### Orador 2 · `35:56 - 36:10`

Lo que está diciendo es que la más vieja le estoy dando un intercambio como que la más vieja ¿Y si son de distintos tamaños?

### Orador 1 · `36:11 - 36:39`

¿Las páginas? No, no, no. Las páginas son de distintos tamaños.

Las páginas son de distintos tamaños. No importa, no importa digamos que contengan. No importa que contengan.

¿Ok? Las páginas son de distintos tamaños. ¿Sí?

Ahora, el asunto es que una página puede contener una variable como tal pero también pues quiero que contengan sean puros marcos. ¿Sí? ¿Ok?

¿Estamos? No entiendo. Profe, explíquenos.

### Orador 2 · `36:40 - 36:40`

Voy yo primero.

### Orador 1 · `36:41 - 36:41`

Dígame.

### Orador 2 · `36:41 - 36:49`

Si yo otra vez ocupo el lapicero ¿qué pasó?

### Orador 1 · `36:52 - 37:09`

¿Cuál es la página? ¿Cuál es la página? Segundo.

Segundo, ejecuto el algoritmo. Tercero. Cambio la referencia.

Cambio la referencia. Cuarto. Hago el intercambio.

¿Sí?

### Orador 4 · `37:12 - 37:18`

Cuando hace el cambio la referencia es en donde encontró el fallo de página. No.

### Orador 1 · `37:18 - 37:25`

El cambio de la referencia es a donde me voy a llevar la variable que voy a mover para después poderla ubicar para regresarla.

### Orador 11 · `37:26 - 37:26`

¿Sí?

### Orador 4 · `37:28 - 37:43`

Pero lo que no entiendo es que digamos que cuando se vino ahí encontró un fallo de página. ¿Me entienden? Ah.

Vamos a ver.

### Orador 1 · `37:44 - 39:31`

Vamos a ver. Vamos con esto. Ok.

Usted ve aquí. Digamos, esta es mi área de intercambio. Esta es la área de intercambio de el proceso falsero.

¿Sí? Ok. Todo esto para poder ubicarlo tiene una dirección.

¿Sí? Ok. En esa dirección es lo que apunta a la página.

Entonces, si apunta a la dirección en la grilla, venga, aquí está. Acierto de página. Eso se llama acierto de página.

Pero cuando apunta al lapicero, ¿verdad? Al lapicero que nos encontramos, un marco para página. Esto es un error de página.

Ok. Un fallo de página. Y entonces, automáticamente, ¿qué es lo que dice?

Que aquí, aquí está la dirección. ¿Por qué? Porque aquí, en este espacio, porque aquí en este espacio igualmente se maneja por direcciones.

Entonces, yo no vengo a traerme, yo no vengo a traerme esta variable. Vengo a traerme lo que esté en esta dirección. Lo que está en esta dirección es lo que me voy a activar para allá.

¿Sí? Y esa dirección es la que yo tengo que actualizar allá. ¿Sí?

Porque es la foto, o sea, yo no tengo Si yo me traigo, si sucede un fallo por la página y me traigo esta variable para acá, ¿verdad? Me traigo esta variable para acá y me llevo la que ocupo para allá. Resolví esa instancia de fusión.

Pero después cuando se apunte a la pieza de los rojos, ¿sí está aquí? No, pero no está. ¿Verdad?

¿Sí? Eso sí es un horror, Kaniel. Porque no hay posibilidad de recuperar esa variable.

No tengo la referencia. ¿Sí? Si yo no apunto a una variable, apunto a una dirección.

Ok, deme lo que está en esa dirección. ¿Estamos?

### Orador 4 · `39:31 - 39:40`

Entonces, ¿qué viene haciendo ahí el rastreadorismo activo si lo está apuntando prácticamente en el mismo espacio? ¿Para qué era el rastreadorismo activo?

### Orador 2 · `39:43 - 39:47`

Para... Pero ¿para qué es el rastreadorismo activo?

### Orador 9 · `39:52 - 39:57`

¿Para qué? ¿Y para qué lo tenemos? ¿Y para qué pongo yo la dirección?

### Orador 1 · `40:01 - 40:40`

El algoritmo es para saber a quién de aquí sacrifico para llevarme para allá. ¿Sí? Para eso es el algoritmo.

Es decir, de todo lo que yo tengo aquí, a quién sacrifico para llevarme para allá. Esa es la lógica del algoritmo. ¿Estamos?

Dale. ¿Aquí estamos? ¿Se dice blanco?

Blanco. Sí.

### Orador 5 · `40:53 - 41:07`

Seguro que es contento de que cuando se agarra, por ejemplo, trae una variable para allá, para acá, ¿qué pasaba si esa variable era más grande que la que se llevó? Pero como todos son del mismo tamaño. ¿Todas las variables son del mismo tamaño?

### Orador 1 · `41:10 - 42:11`

Pero el mouse es una página. O sea, usted no diferencia si estos páginas son blancos. Nada más que cuando usted llegó, se va haciendo a que esta no es una página.

Es un marco, es una página. Esto, ¿qué es un marco para página? ¿Qué es un marco para página?

Es una página, es una página que por limitación de espacio, ahora tuvo que convertirse en referencia de alguien intentando. Eso es una página. Un marco, eso es una página que por limitación de espacio, tuvo que convertirse en referencia para alguien intentando.

Marcelo, leo algo. ¿Leo algo? Entonces, el primer algoritmo...

### Orador 3 · `42:13 - 42:20`

Profe, esos son los tamaños. Usted dice que todas las páginas tienen el mismo tamaño, pero las variables no siempre son del mismo tamaño.

### Orador 1 · `42:23 - 44:08`

Para efectos, digamos, para efectos de entender el ambiente lógico, el tamaño es completamente irrelevante. Puede ser que la página mantenga igual que la variable, si son pequeñas, puede guardar más variables. El hecho es que ahí está en la página la variable.

Es decir, eso no es una mayor preocupación. Lo que sí es preocupación es que a lo que apunte no esté aquí. Eso sí, ese es el problema.

Bueno, eso no es un problema, nada más que eso nos obliga a ejecutar un algoritmo de reemplazo. Lo que sí tenemos que tener claro es que lo que sí se pasa de problema a catástrofe es el hecho de que yo mueva una variable de aquí para intercambio sin actualizar la referencia. Eso sí está preocupado.

¿Ok? Repitamos los pasos. Repitamos los pasos.

El proceso apunta a una variable conteniendo una página. La página a la que se apunta no es una página sino es un marco para páginas. Sucede un págino de páginas.

Se ejecuta el algoritmo de reemplazo de páginas. Se determina cuál es la página sacrificada. Se actualiza la referencia en el marco.

Se hace el intercambio. Se lleva la variable. Se extrae la no variable.

Se carga en la página. Y listo. ¿Sí?

¿Ahora sí? ¿Sí, Carián?

### Orador 2 · `44:08 - 44:38`

No, la verdad es que en la página de etiqueta más vieja por decirlo así la que ocasionó el padre de páginas esa referencia se va a ir al cambio se obtiene la variable y esa variable pasa a la página pero esa página que yo traigo o sea esa variable lo traigo en una página nueva o sea no más tengo la página ¿y la otra pasa a ser referencia?

### Orador 1 · `44:38 - 45:50`

Sí las páginas están en la dirección tal y otra preguntilla ¿en el marco de páginas solamente hay una referencia? No Es un marco ¿cuántas referencias hay? varias pero más interesante que eso más interesante que esto si esto se pone si esto se pone muy estrujado ¿qué va a pasar?

¿sí? es decir los marcos para páginas pueden eventualmente apuntar a un número pero puede crecer el número de referencias ¿sí? ¿sí?

porque esto es completamente dinámico recuerden en un momento y si ha ido en dura nos devolvíamos otra vez a la página que sólo tenía 8 marcos ¿verdad? incluso a una página que contiene 4 marcos medianos ¿sí? pero cuando encontramos todo esto la cosa está crítica ¿verdad?

la cosa está crítica ¿qué está pasando aquí?

### Orador 3 · `45:50 - 46:06`

evidentemente se va a disparar la tasa de fallo de página profe es que es que no entiendo algo cuando usted pasa el fallo de página ¿se ejecuta fijo y todo eso?

### Orador 1 · `46:06 - 46:20`

suave, suave empecemos en orden a ver cuál es la secuencia para ver cuándo tenemos el problema en el error lo de las referencias es lo que sí, pero empecemos a ver el paso a paso es pasa el fallo de página ¿por qué pasó el fallo de página?

### Orador 3 · `46:21 - 47:28`

porque apuntó algo que creía que era una variable pero era una referencia ok el proceso apunta a una variable de su bloque de nombre principal a lo que está apuntando no es una variable sino a un marco para página digamos entonces hay que ejecutar fijo no, ejecutar un algoritmo bueno un algoritmo ok un algoritmo de de reemplazo de página ok ¿y por qué un algoritmo de reemplazo de página? para hacer el intercambio ¿y por qué necesita el intercambio? porque ocupa ese espacio ok ahora sí ajá entonces usted viene a ejecutar fijo ahora sí este agarra esa variable sí y la lleva a la memoria virtual ¿sí?

bueno a dar el intercambio ajá esa referencia se apunta ahí la que acabo de llevar ahí está el error antes se llevó la variable antes de haber anotado la referencia sí, sí, antes antes de apuntar la referencia ok, primero anotó la referencia ¿verdad?

### Orador 1 · `47:29 - 47:31`

y ahora sí me llevo ahora sí con toda confianza la variable

### Orador 3 · `47:31 - 47:33`

traigo la que ocupo

### Orador 1 · `47:33 - 47:37`

traigo la que ocupo viene con un con un número de página diferente y lo coloco aquí

### Orador 3 · `47:37 - 47:43`

encima de esas referencias prácticamente hagamos este ejercicio ok cada página

### Orador 1 · `47:43 - 48:09`

o sea cada variable esta variable está concedida en una página cada variable está concedida en una página cada variable está concedida en una página si muevo la variable se va a la página ah, ok sí ahora antes de responder su pregunta porque se debe anotar la última ¿verdad? cuando usan páginas normalmente normalmente se van veinticinco páginas y vienen veinticinco ¿sí?

### Orador 4 · `48:11 - 48:19`

es que yo creo que lo que ella está preguntando es digamos ok, se escribió en la dirección de memoria digamos supongamos que en el cuadrado ese ¿verdad?

### Orador 1 · `48:19 - 48:21`

en el marco ah, en el marco

### Orador 4 · `48:22 - 48:28`

para entender no pasa ok, se escribió ahí en la dirección de memoria pero cuando trae

### Orador 1 · `48:28 - 48:28`

la otra

### Orador 4 · `48:29 - 48:34`

este la página le cae encima de esa no, no, no cuando yo me traigo

### Orador 1 · `48:34 - 49:04`

ok o sea esta es la variable esta es la variable ok la variable está lo que me interesa es la página en la que está la variable la variable no me interesa o sea, yo apunte a la variable si está vengo a cierta página si no está fallo página lo que me interesa es la página ok, me voy me voy con el número de páginas x se va para allá y viene la variable y con el número de páginas sale ok

### Orador 3 · `49:04 - 49:09`

¿pero qué hace esa referencia que quedó de aquel de aquella variable?

### Orador 1 · `49:10 - 49:30`

pues primero ¿qué hice antes? llevármela actualizar actualizar aquí actualizar aquí la dirección ah, ya, ya ahí viene como una página nueva exactamente cuando llegues aquí esta va a ser la página la página que está en la última posición de la cola la página que acaba de llegar ¿sí?

### Orador 2 · `49:32 - 49:40`

no, de verdad que bueno yo creo que ese fue lo último cuando viene esta página nueva ya entra como la más nueva voy a decir

### Orador 6 · `49:44 - 50:18`

calidad, perdón yo creo que bien Hector claro donde se almacenan las cosas en el software en el área de intercambio en el área de intercambio son como lockers nosotros lo que utilizamos para en las páginas y todo eso son las llaves de los lockers entonces cuando se da un par la dirección la dirección cuando se da un par de páginas porque hay una locker yo la abrí y me encontré otra cosa que no era un par entonces el cambio es cambiar la dirección no cambiar el objeto cambiar la dirección del objeto ok

### Orador 5 · `50:19 - 50:40`

entonces la página si representa únicamente como esa variable que si tengo en memoria no despacho ni absolutamente nada y directamente si yo quiero traer una página pero la variable que contiene esa página no me va para meterla en la memoria principal si, si, si

### Orador 1 · `50:40 - 50:51`

no, no, no perfectamente o sea que pasa aquí simplemente es que tengo que juntar cuatro páginas y hacerlas marco para traer esa página que busco perfectamente

### Orador 2 · `50:51 - 50:52`

sería otro algoritmo

### Orador 1 · `50:52 - 51:26`

no, no o sea el algoritmo es siempre tengo que adquirir esa que indico a quien me llevo o sea yo no me llevo una más sino que me llevo cuatro me llevo esas cuatro cosas si entonces ahora eso lo convierto en un marco y lo colocamos para tres páginas si ok entonces lo que vamos a ver a continuación son los algoritmos de reemplazo ok ya vimos FIFO si excelente suficientemente claro no hay ninguna observación

### Orador 11 · `51:26 - 51:26`

verdad

### Orador 1 · `51:26 - 51:53`

es decir es cuando la página cuando la página llega aquí que actualiza su etiqueta de hora de llegar punto ok nada más nada más hasta ahí ok vamos con segunda oportunidad cuente la calidad que andaba agarrando todo lo que había a ver

### Orador 8 · `51:53 - 52:13`

que consiste segunda oportunidad que entendías por segunda oportunidad yo entendí que es lo mismo que FIFO la diferencia que no se adquiriría los tiempos sino que toma en cuenta algo llamado interferencia interferencia lo que hace es verificar si la página usa recientemente no perdón me equivoqué

### Orador 1 · `52:27 - 53:19`

ya casi vamos con segunda oportunidad ok ya cambiamos enero ¿quién respondió enero? ok ¿quién respondió enero?

¿quién respondió salud gracias perdón ok todos todos los algoritmos todos los algoritmos lo que hacen es lo mismo ¿qué es lo que hacen? escoger cuál es la que se va para darle canto a la que se va a contraer esos son todos los algoritmos ok sigo ¿qué es lo que se categoriza en clases? ok ¿cuáles son las clases?

### Orador 10 · `53:27 - 53:29`

¿cuáles son los guides que emanizan?

### Orador 1 · `53:40 - 59:02`

si RMA RMA ¿Qué significa ARRIVE? Presencia y Modificación Lectura y Escritura de Variables Así que a veces necesitamos las páginas Es decir, ¿qué contiene una página y una variable? Arturo, ¿para qué?

Bien, ¿verdad? ¿Qué contiene una página? Y eso no lo confirma Lo que contiene es una variable Entonces, ¿la variable fue leída o fue modificada?

¿Sí? Entonces, ya eso nos libera del problema ¿Es decir, es una página o es una variable? No, no La página que contiene es una variable Pero hacemos referencia y es como una página Es lo que nos interesa ¿Ok?

Entonces Si la primera clase es la clase Z Estamos volando ¿Ok? La clase 1 es... Ok, ahora sí Este código NRU lo que hace es que clasifica en clases las páginas Entonces ¿Cuántas páginas hay?

Muchas, muchas Recuerden Cuando sucede un fallo de página Se cambia en 45 Es decir, tengo que escoger 45 para ayudarme ¿Por qué? Porque tengo que traer 45 ¿Ok? Entonces, no es nada más que escojo una y cuáles No, no Se escoge un montón Un montón, se va un montón, miren En cada instancia de exclusión ¿Ok?

En la clase 0 ¿Qué es lo que estamos haciendo? Ahora ven que estamos... Fijo que utilizaba...

¡Talía! Lo estamos perdiendo No me asuste Nada más, la hora de llegar a la página ¿Ok? Ahora NRU lo que estamos diciendo Que NRU hace toda una categorización Es decir, administrativamente Este es un algoritmo élite ¿Verdad?

Es decir, es un algoritmo inteligente Que hace una valoración sustantiva Y determina Que la página, si tiene una categoría 0 ¿Ok? Que si está en la clase 0 No ha sido ni leída, ni ha sido modificada Es cambiar a ese, pero a las ya ¿Ok? Es decir, cuando se escoge, escoge Y yo digo ¿Quiénes de estas no han sido ni leídas, ni modificadas?

Esas A las ya se pueden mover ¿Ok? De tal forma que si dileye Que las de la última clase Que se van a ir Van a ser Páginas que han sido leídas Y que han sido modificadas Para los que quisieran Porque, en teoría Si han sido leídas, si han sido modificadas Pues porque son de uso frecuente Entonces son las que deberían privilegar Van a tener aquí Entonces Se van a ir siempre las primeras clases ¿Ok? La pregunta es ¿Cómo se va a dar una clase 1?

O sea, en qué condición Una página No ha sido leída Pero si fue modificada ¿Sabes lo extraño de eso? Eso era lo que le daban los italianos Tengo los paisanos italianos La clase 2 Una página que sí ha sido leída ¿Verdad? Si ha sido leída Pero no ha sido modificada Es perfectamente entendible ¿Verdad?

¿Sí? Y la última, ya saben Una página leída modificada Pero los que quisiéramos Que esté la idéntica No la toque porque Frecuentemente la están usando Es lo que quisieron ¿Ok? Entonces Ese es un algoritmo Es un algoritmo Conciencia ¿Ok?

Es decir Está tomando decisiones Informadas Genial Hasta ahí Entonces NR1 ¿Qué dice? ¿Cuántas páginas? Ok Tengo Aquí tengo 22 Aquí tengo 17 Aquí tengo 41 Aquí 85 ¿Ok?

¿De cuántos he fallado páginas? De 28 Se fueron 22 Y 6 de aquí Y traigo las mismas ¿Ok? Ya eso va a dependerte Desde cuánto sea El total de fallo De páginas ¿Ok?

Pero entonces ¿Cómo es que se vuelve? ¿Verdad? De aquí para acá ¿Dónde voy a pasar?

¿Alguna más Para el algoritmo? ¿Alguna más Para el algoritmo? ¿Como Ross?

¿Sí? ¿Sí? Ok Nada más Es El tiempo Que se tiene que tomar ¿Verdad?

El tiempo que se tiene que tomar Es planificado Para llevar El control Para construir Esa tabla Es el posto Iniciativo ¿Sí? Ok En el grupo Ahora si vamos con Segunda oportunidad Ok Ahora si Tiene la segunda oportunidad Perdón ¿Sí?

### Orador 4 · `59:06 - 59:29`

Una mejora de Una mejora del tiempo Es una mejora Nada más que Una mejora Ya La primera opción Es Acordar más tiempo Pues que Cuarta El primer Interferencia Y es Que si está en cero Se tendría que Segundar la mejora La que nosotros Precisamente

### Orador 1 · `59:29 - 1:02:04`

Es esta Y si es un uno Pues Se dice Ok Ok, ok, recuerden el FIFO es, FIFO es, se va primero a la página más vieja, sí, pero ahora lo que estamos diciendo es que, como NRO hace esta categorización, aprovechamos de eso, ok, y entonces preguntemos, las más viejas van a estar bien, y lo primero que pregunto es, ¿cuál viene cañada?

¿Qué valor tiene? ¿Si es cero? Ok, entonces diría, ok, si esta es la página escogida, adiós, es decir, si la página que está de primera, o las primeras diez páginas, las más viejas, ¿verdad?, que estamos ordenadas en ese orden, las diez más viejas, y tiene que subir R en cero, adiós, si hay alguna de ellas que tiene que subir R en uno, ¿qué va a pasar?

Pero además, pero además, lo que hago es que le pregunto, ok, subí el R, ¿en cuánto está?, ¿en uno o en cero? En uno, ok, se la jugó, no se va a ir, pero no se pase de esto, se la voy a poner en cero, sí, es decir, le pregunto, si el bit del R es uno, entonces le digo, ok, no, por ahora está perdonado, pero se lo voy a cambiar a cero, ¿por qué?, porque si usted lo está cañando, la siguiente vez se va a ir cero, ¿verdad?, pero si bien el R es que usted es frecuentemente utilizado, la siguiente vez que venga a preguntarle otra vez, obviamente su bit ya habrá cambiado a uno, ¿sí?, entonces muy probablemente ese sea el caso, ¿sí?, ¿todos tienen una explicación en la vida?, ¿alguien?, ¿sí?, es decir, ese es el hecho de por qué en algún momento si hice una ordenación y pasamos de segunda oportunidad a NFO, quedaron páginas con esa categoría, con un bit del R en cero y un bit N en uno, porque acaba de subir, acaba de pasar de segunda oportunidad y a esa página se le empieza su bit, ¿sí?

### Orador 2 · `1:02:06 - 1:02:06`

¿sí?

### Orador 1 · `1:02:15 - 1:05:07`

esto era como digamos, una página que no ha sido leída, pero que aparece como modificada, o sea, ¿cómo se explica eso?, la explicación es que anteriormente estábamos organizando por segunda oportunidad, entonces le limpiamos el bit a una página, ¿verdad?, y después pasamos a NFO y por eso aparecen unas con esa categoría, pero voy allá y después... pero está claro entonces, ¿sí?, ¿verdad?, es que cuando categorizamos, o sea, ¿por qué algo puede estar con esta naturaleza?, cero y uno, ¿cómo algo que no ha sido referenciado está modificado?, o sea, no tiene ninguna lógica, ¿verdad?, es porque el algoritmo anterior era segunda oportunidad, se le limpió el bit, es lo que decimos, se le limpió el bit, ¿ok?, y ahora pasamos a NFO y entonces, ¿qué es algo que no ha sido referenciado?

¿sí? eso ya, de una vez, nos da a entender que el algoritmo de reemplazo no es estático, ¿verdad?, el algoritmo de reemplazo es completamente inalienable, voy aquí primero ok, segunda oportunidad recuerden, solamente ordenamos PIFO, pero ahora le pregunto, tu bit R, cero y uno, lo limpiamos y le perdonamos la vida y seguimos, ¿verdad?, en ese orden, ¿sí? no, porque es que vamos a ver, esta falla peor, digamos, yo le pregunto por el bit R, pero el bit M era uno, cuando lo limpio el bit R, veo cero y uno, cuando pasamos a NFO, entonces digo, ok, su bit R, cero, M, uno, ¿cómo que está en R, cero y en M, uno?

¿cuál es el algoritmo que nos falta? ¿cuál es el algoritmo que nos falta? ¿cuál algoritmo nos falta, nos faltan dos todavía?

¿cuál?

### Orador 5 · `1:05:10 - 1:05:18`

el reloj a ver, ¿qué consiste el algoritmo?

### Orador 11 · `1:05:18 - 1:05:18`

¿cómo?

### Orador 10 · `1:05:20 - 1:05:48`

básicamente, nada más que el circular es un algoritmo circular, que, bueno, lo que ha de estar, el mismo, el bit R, el uno, se da la segunda oportunidad, sigue ahí, pero dice, si estaba usando recientemente R, la saca, porque no pudo usar recientemente M, entonces, al ser circular, vuelve a iniciar el algoritmo ¿y para qué?, ¿para qué quiero circular por toda la lista?

### Orador 1 · `1:05:57 - 1:07:31`

el chiste es el mismo, pero vamos buscando lo siguiente, ok, recuerden que son las primeras páginas, cuando estamos usando la segunda oportunidad, ¿verdad? yo le dije su bit, ¿en cuánto estaba? estaba en uno, ¿verdad?

le perdonamos la vida, le perdonamos la vida, pero le limpiamos el bit, ¿sí? y de una vez, lo saco, lo amenazo, si la próxima es fácil y está en cero, se va entonces, lo que no tiene sentido es, lo que no tiene sentido es que, evidentemente, va a estar en el bloque de las páginas que la siguiente parte preguntarles ¿verdad?, entonces, la probabilidad de que la siguiente vez, ya haya cambiado su bit, va a ser reducida, aunque sea una página frecuentemente usada por eso es que el chiste está ahí, ¿verdad? entonces, le doy vuelta a todas las páginas, y ahora sí, la siguiente vez que me pregunto, ¿ok?

ah, ya me acordé del cero, ¿verdad? ya me acordé que ya no tenía la vida, ¿cómo está su bit ahora? ya está en uno, ah, ¿sí?

entonces ya no había nada, ¿verdad? eso es lo que anda buscando, nada más, ¿ok? ¿el chiste es?

¿el chiste es? recuerden, la ciencia es, tratar de mantener aquí, las variables que más frecuentemente utilizo eso es lo que anda buscando, ¿verdad? ¿ahora?

### Orador 9 · `1:07:33 - 1:07:34`

¿ah, no, saló?

### Orador 6 · `1:07:35 - 1:07:38`

¿ah? ¿sólo él? ¿sólo él?

### Orador 1 · `1:07:39 - 1:08:32`

¿sólo él, nada más? ¿ok? ahora, vamos a ver, recuerden la ciencia es, tratar de buscar, mantener aquí las variables que más frecuentemente se usen ¿cierto?

¿pero FIFO aplica esa regla? ¿qué es FIFO? es un algoritmo práctico, rápido, ¿verdad?

¿sí? ¿por qué? hay momentos en los que, la tasa la tasa de aprovechamiento baja la tasa de de retorno baja entonces, ¿qué me interesa?

mover el contexto de ejecución, no tanto tomar decisiones asentadas pero hay condiciones en las que la memoria entra ¿verdad? entonces, si me interesa tomar decisiones inteligentes entonces, tengo que privilegiar a ellos ¿qué sigue después del reloj?

### Orador 7 · `1:08:34 - 1:08:37`

uso no tan reciente ¿cuál?

### Orador 1 · `1:08:37 - 1:12:55`

uso no tan reciente LRU ¿ok? ¿quién usó LRU? ¿NORI?

¿sí? entonces, tenemos por orden de llegada LRU segunda oportunidad reloj ¿ok? y tenemos finalmente a LRU ¿FIFO?

¿cómo ordena? LRU por el orden en el que la página llegó aquí ¿verdad? ahora, LRU lo que hace es que lleva una etiqueta de tiempo una etiqueta de tiempo desde hace cuánto que esa página desde hace cuánto esa página no se lea o no se escribe ya sea para lectura o para escritura ¿ok?

es mi pregunto ¿cuál es la página que tiene más tiempo de que nadie se acuerde de ella? esas páginas ¿ok? puede ser que la página se trajo la del primero ¿verdad?

pero es una página que hace un momento fue usada entonces, no va a estar al principio de esa pina, al principio de esa lista van a estar al principio de la lista las páginas que inic... digamos que se traje y que tienen la etiqueta más grande de tiempo de que no se lea o no se escribe ¿ok? y por último están el algoritmo óptimo ¿ok?

¿dentro de cuánto va a ser usada esa página? ¿ok? este es el algoritmo de la tera cristal ¿dentro de cuánto tiempo ¿dentro de cuánto tiempo va a ser usada esta página?

¿cómo hacemos para saber eso? ¿ah? la única manera la única manera es una proyección probabilística ¿cuánto costaría eso?

¿ah? ese es el detalle ¿ok? hacer hacer esa proyección probabilística es algo carísimo pero en el fondo ¿qué sigue siendo?

¿qué sigue siendo? una probabilidad ¿en el fondo sigue siendo una probabilidad? ¿si?

ese puede ser el examen de ampliación el algoritmo de ¿cómo? el algoritmo óptimo de reemplazar páginas ¿también lo hacíamos famosos? ¿sí?

¿sí? ¿no? es una posibilidad ¿podríamos cogerlo por ahora?

no, eso no existe vamos con FIFO, NREO, segunda oportunidad RELOJ y NREO vamos ¿alguna duda hasta aquí?

### Orador 2 · `1:13:00 - 1:13:19`

¿como arroz? una duda, el de RELOJ es que bueno, la de RELOJ es que la de RELOJ ¿no? la de RELOJ ¿no?

¿no?

### Orador 7 · `1:13:22 - 1:13:31`

en las páginas hay una diferencia RELOJ con segunda probabilidad ¿segunda probabilidad es una mano?

### Orador 1 · `1:13:32 - 1:16:39`

ah bueno ¿Cuántas veces da la vuelta el reloj? Imagínese que estaban ustedes en una de las páginas de un cotero. ¿El reloj como una cocina?

¿Cómo se ordena el reloj? En círculo, circularmente. Porque es una variante siempre del mismo.

Primeras páginas en llegar, últimas páginas en llegar. Entonces, segunda oportunidad siempre empieza desde las más viejas, de las que llegaron de primero. Siempre empieza aquí.

Mientras que a segunda oportunidad deja la marca. Segunda oportunidad. Segunda oportunidad dice, ok, reemplacé esta página, aquí hay un marcador.

La siguiente vez empiezo aquí para allá. Reemplazo allá, la siguiente vez empiezo aquí para acá. Segunda oportunidad.

Pero ahora el reloj va rotando por todas las páginas. ¿Cuántas vueltas da? Esto no es relevante.

Nada más que él siempre va haciendo todo el barrio por todas las páginas. ¿Cuántas vueltas da? Esto es completamente irrelevante.

Termina allá y va a empezar otra vez aquí. ¿El reloj? Inmediatamente.

Lo que va a pasar es que hay un fallo. Allá reemplazo una y eran siete. Se devuelve aquí, me faltan todavía seis.

Voy buscando por acá otra vez. ¿La otra pregunta? ¿Ya?

¿Alguna otra duda? El examen es la siguiente semana. Hay que sumer en las variables de bloque, control del proceso.

Sumer en todas las que a partir de anexión de memoria pueden ir. ¿Lo hay que imaginar? Es indispensable.

Es indispensable para el primer examen. Primero es mujer. Política.

Porque eso va a depender. Y ya después las otras preguntas van en función de memoria. ¿El otro más?

Una pregunta es una decisión sobre el ciclo. Es fundamental. Es decir, ¿cuál es la política de las comunicaciones en Perú?

Esa es una. ¿Y todas las demás? ¿Verdad?

El 75% va a ir en función de las demás. Desde esta categoría que hemos analizado.
