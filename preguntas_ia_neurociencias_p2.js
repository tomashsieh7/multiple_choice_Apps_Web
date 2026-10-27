const MATERIA_ID_IAN2 = "ia-neurociencias-p2";
const MATERIA_NOMBRE_IAN2 = "IA y Neuro p. 2";
const PREGUNTAS_RAW_IAN2 = `
## Nivel 1: Lenguajes regulares

### Tema: Definiciones preliminares

1. ¿Qué diferencia hay entre una cadena y un alfabeto?
a) Una cadena es una secuencia infinita de símbolos y un alfabeto es un conjunto de lenguajes
b) Una cadena es un conjunto finito de símbolos sin orden y un alfabeto es una secuencia finita de ellos
*c) Una cadena es una secuencia finita de símbolos y un alfabeto es un conjunto finito de símbolos
d) Una cadena es un conjunto de cadenas y un alfabeto es un conjunto finito de símbolos

2. El conjunto de todos los palíndromos sobre el alfabeto {0,1} (ε, 0, 1, 00, 11, 010, 101, ...) es un ejemplo de:
a) un alfabeto formado por infinitos símbolos distintos
b) una cadena muy larga cuya longitud no está acotada
*c) un lenguaje infinito, formado por infinitas cadenas distintas
d) un lenguaje finito, porque solo hay dos símbolos

3. Si Σ = {a}, ¿qué contiene el lenguaje Σ*?
*a) Todas las cadenas de a's, desde ε en adelante
b) Las cadenas a, aa, aaa, ... pero no la cadena vacía
c) Solamente la cadena vacía y la cadena a
d) Únicamente las cadenas que tienen una sola letra a

4. Sea Σ = {0,1}. ¿Cuáles de los siguientes elementos pertenecen a Σ*?
*a) ε
b) ∅
*c) 1001
d) 012
*e) 0
f) {0,1}

5. Si L1 = {a, e} y L2 = {x, y}, ¿qué lenguaje es la concatenación L1L2?
a) {a, e, x, y}
b) {ax, ay, ex, ey, xa, xe}
c) {axy, exy, ax, ey}
*d) {ax, ay, ex, ey}

6. ¿Cuáles de las siguientes igualdades valen para cualquier lenguaje L sobre un alfabeto Σ?
*a) L{ε} = L
b) L∅ = L
*c) L∅ = ∅
d) L^0 = ∅
e) L^2 = L

7. Si L = {a, b}, ¿qué lenguaje es L^2?
a) {a, b, aa, bb}
*b) {aa, ab, ba, bb}
c) {aa, bb}
d) {a, b, aa, ab, ba, bb}

8. ¿Cómo se definen la clausura de Kleene L* y la clausura positiva L+ en términos de las potencias de L?
a) L* es la intersección de todas las L^i y L+ es la unión de las L^i con i par
b) L* es la concatenación de L consigo mismo una única vez y L+ la repite una cantidad infinita de veces
*c) L* es la unión de las L^i con i ≥ 0 y L+ es la unión de las L^i con i ≥ 1
d) L* es la unión de las L^i con i ≥ 1 y L+ es la unión de las L^i con i ≥ 0

9. Si L = {a, b}, ¿cuál de las siguientes cadenas pertenece a L* pero no pertenece a L+?
*a) La cadena vacía ε, de longitud cero
b) La cadena ab, formada por dos cadenas de L
c) La cadena ba, formada por dos cadenas de L
d) La cadena a, una cadena de L

### Tema: Expresiones regulares

10. ¿Cuáles de las siguientes afirmaciones sobre los casos base de la definición de expresión regular son correctas?
*a) La ER ∅ denota el lenguaje vacío, que no contiene ninguna cadena
b) La ER ε denota el lenguaje vacío ∅, igual que la ER ∅
*c) La ER ε denota el lenguaje {ε}, que contiene solo la cadena vacía
*d) La ER a, con a ∈ Σ, denota el lenguaje {a}, con una sola cadena
e) La ER a, con a ∈ Σ, denota todas las repeticiones posibles de a

11. En la notación de ER de la materia, ¿qué operación sobre lenguajes representa el símbolo + en r + s?
a) La intersección R ∩ S de los dos lenguajes
*b) La unión R ∪ S de los dos lenguajes
c) La clausura positiva del lenguaje R
d) La concatenación RS de los dos lenguajes

12. Si r denota el lenguaje {a, b} y s denota el lenguaje {c}, ¿qué lenguaje denota la ER rs?
a) {ca, cb}
*b) {ac, bc}
c) {a, b, c}
d) {abc}

13. Para cualquier ER r, ¿qué cadena pertenece siempre al lenguaje denotado por r*, incluso si r denota ∅?
a) La cadena r escrita exactamente una vez
*b) La cadena vacía ε, que tiene longitud cero
c) La cadena más corta del lenguaje de r, repetida
d) Ninguna cadena, porque ∅* es el lenguaje vacío

14. ¿En qué se diferencian las ER (sa)* y (s+a)* sobre el alfabeto {s, a}?
a) (sa)* denota todas las cadenas sobre {s, a} y (s+a)* solo repeticiones exactas de sa
b) Denotan el mismo lenguaje, porque la unión conmuta con la concatenación
*c) (sa)* denota solo repeticiones de sa y (s+a)* denota cualquier cadena sobre {s, a}
d) (sa)* no contiene la cadena vacía y (s+a)* sí la contiene

15. ¿Qué cadenas denota la ER s(a* + p)?
a) La letra s seguida de al menos una a o de al menos una p
b) La letra s seguida de cualquier combinación de a's y p's mezcladas
*c) La letra s seguida de cero o más a's, o de una única p
d) La letra s seguida de cero o más a's y después de una única p

16. ¿Qué ER sobre Σ = {0,1} denota las cadenas que terminan en 101?
a) (0+1)*10*1, con ceros opcionales entre los unos
*b) (0+1)*101, con cualquier prefijo y luego 101
c) (0+1)101*, con un símbolo y después 101 repetido
d) 101(0+1)*, que fija el 101 al principio

17. ¿Qué ER sobre Σ = {0,1} denota las cadenas que contienen 00 o 11 al menos una vez?
*a) (0+1)*(00+11)(0+1)*, con prefijo y sufijo libres
b) (0+1)*0011(0+1)*, que exige 0011 completo
c) (00+11)*, solo repeticiones de 00 o de 11
d) (0+1)(00+11)(0+1), con un solo símbolo a cada lado

18. Dado el siguiente fragmento de access.log, ¿qué cadenas extrae de cada línea el patrón [0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+?
![Fragmento de un archivo access.log con líneas que comienzan con direcciones numéricas y fechas entre corchetes](imagenes/iap2-nivel1-log-access.png)
a) Los códigos de estado, como 401 o 200
b) Las rutas pedidas, como /admin o /login
*c) Las direcciones IP, como 203.0.113.66
d) Las fechas, como 07/Oct/2026

19. En el código de Python de la imagen, ¿qué rol cumplen re.findall(patron, linea) y Counter(ips).most_common(), respectivamente?
![Programa en Python que lee access.log, extrae coincidencias de un patrón con re.findall y cuenta repeticiones con Counter](imagenes/iap2-nivel1-python-ips.png)
a) Reemplazar las coincidencias del patrón y eliminar las IPs repetidas del resultado
b) Validar que la línea cumpla el patrón y ordenar las IPs alfabéticamente
c) Contar las líneas del archivo y filtrar las IPs que se repiten en él
*d) Extraer todas las coincidencias del patrón y listarlas de mayor a menor frecuencia

20. En la consulta SQL de la imagen, ¿qué logran en conjunto regexp_matches con el patrón, GROUP BY m[1], count(*) y ORDER BY n DESC?
![Consulta SQL con count(*), regexp_matches sobre la tabla logs, GROUP BY m[1] y ORDER BY n DESC](imagenes/iap2-nivel1-sql-ips.png)
a) Reemplazan cada IP por su cantidad y luego ordenan todas las líneas de forma alfabética
b) Agrupan las líneas por fecha y devuelven solamente la primera IP de cada grupo
*c) Extraen las IPs, cuentan cuántas veces aparece cada una y las ordenan de más a menos frecuente
d) Validan cada línea de la tabla, descartan las que no tienen ninguna IP y devuelven las restantes

21. ¿Qué muestra que el mismo patrón de ER se use en bash, en Python y en SQL para resolver el mismo problema?
a) Que las ER solo pueden aplicarse desde la línea de comandos de un sistema
*b) Que las ER son una notación común que se reutiliza en herramientas distintas
c) Que cada lenguaje exige escribir una ER distinta para poder extraer las IPs
d) Que las ER reemplazan la necesidad de ordenar o contar los resultados obtenidos

### Tema: Gramáticas regulares

22. En una gramática (V, T, P, S), ¿qué diferencia hay entre las variables de V y los terminales de T?
*a) Las variables se reemplazan mediante producciones, mientras que los terminales forman las cadenas finales y no se reescriben
b) Las variables son siempre una sola letra y los terminales pueden ser cadenas de cualquier longitud
c) Las variables son las cadenas generadas por la gramática y los terminales son las reglas de producción que se aplican
d) Las variables forman las cadenas del lenguaje y los terminales son símbolos auxiliares que desaparecen al derivar

23. ¿Qué especifican P y S en una gramática (V, T, P, S)?
a) P es la cantidad de pasos de la derivación y S es la cadena que resulta al final
b) P es el alfabeto de terminales y S es el conjunto de todas las variables
c) P es el conjunto de cadenas generadas y S es el último símbolo de cada derivación
*d) P son las reglas de reescritura y S es la variable inicial desde la que arranca toda derivación

24. ¿Cuál de las siguientes producciones respeta la forma permitida en una gramática regular (A, B variables; a terminal)?
*a) A → aB, con un terminal y luego una variable
b) A → aBb, con una variable entre dos terminales
c) A → BC, con dos variables seguidas en el lado derecho
d) A → BCa, con dos variables y luego un terminal

25. ¿Qué diferencia hay entre aplicar A → aB y aplicar A → a en una derivación de una gramática regular?
a) La primera cierra la derivación sin dejar variables; la segunda genera un terminal y deja una variable pendiente
b) La primera genera dos terminales a la vez; la segunda no genera ningún terminal en la cadena resultante
*c) La primera genera un terminal y deja una variable pendiente; la segunda genera un terminal y no deja variables
d) La primera elimina la variable A sin generar ningún terminal; la segunda agrega una variable nueva a la cadena resultante

26. ¿Para qué sirve incluir una producción A → ε en una gramática regular?
a) Para impedir que la variable A pueda derivar cadenas formadas solo por terminales
b) Para repetir indefinidamente la variable A sin generar terminales
c) Para generar un terminal ε que aparece en todas las cadenas del lenguaje
*d) Para eliminar la variable A y cerrar la derivación sin agregar terminales

27. ¿Qué significa α ⇒* β en una gramática G?
*a) Que β se obtiene de α aplicando 0 o más producciones de G
b) Que β se obtiene de α aplicando al menos dos producciones distintas de G
c) Que β se obtiene de α aplicando exactamente una producción de G
d) Que α y β generan el mismo lenguaje en la gramática G

28. ¿Qué cadenas pertenecen al lenguaje generado L(G) de una gramática G con símbolo inicial S?
a) Todas las cadenas, con variables incluidas, que se pueden derivar desde el símbolo S
b) Las cadenas de terminales derivables desde cualquier variable de G
c) Todas las cadenas de T* aunque no se puedan derivar desde S
*d) Las cadenas formadas solo por terminales que se pueden derivar desde S

29. ¿Qué lenguaje genera la gramática regular de la imagen?
![Cuatro producciones: S → 0A, A → 1B, A → ε y B → 0A](imagenes/iap2-nivel1-gramatica-0a.png)
*a) El lenguaje 0(10)*, con un 0 inicial
b) El lenguaje 0(1+0)*, un 0 seguido de ceros y unos
c) El lenguaje (01)*, sin ningún 0 inicial
d) El lenguaje 0(01)*, con un 0 inicial

30. En la gramática de la imagen, ¿cuál es una derivación válida de la cadena 010?
![Cuatro producciones: S → 0A, A → 1B, A → ε y B → 0A](imagenes/iap2-nivel1-gramatica-0a.png)
a) S ⇒ 0A ⇒ 01B ⇒ 010
*b) S ⇒ 0A ⇒ 01B ⇒ 010A ⇒ 010
c) S ⇒ 0A ⇒ 01B ⇒ 010B ⇒ 010A ⇒ 010
d) S ⇒ 0A ⇒ 1B ⇒ 10A ⇒ 010

31. En la gramática de la imagen, ¿por qué la cadena 01 no pertenece al lenguaje generado?
![Cuatro producciones: S → 0A, A → 1B, A → ε y B → 0A](imagenes/iap2-nivel1-gramatica-0a.png)
a) Porque S solo puede reemplazarse por 0A y eso impide generar cadenas de longitud par
*b) Porque tras generar 01 queda la variable B, que no se puede eliminar sin otro 0
c) Porque la producción A → ε obliga a que toda cadena termine en 0 antes del 1
d) Porque la variable A no tiene ninguna producción que genere el terminal 1 al derivar

32. Según el teorema visto, ¿qué ocurre con una gramática cuyas producciones tienen la forma A → wB o A → w, con w una cadena de terminales?
a) Genera un lenguaje libre de contexto que en general no es regular
*b) Puede reescribirse como gramática regular, y esa gramática genera el mismo lenguaje
c) Solo puede generar lenguajes finitos, porque w tiene una longitud fija
d) No puede generar un lenguaje regular salvo que w tenga un único símbolo

33. ¿Qué lenguaje genera la gramática regular de la imagen?
![Tres producciones: S → 0A, A → 10A y A → ε](imagenes/iap2-nivel1-gramatica-10a.png)
*a) El lenguaje 0(10)*, con un 0 inicial
b) El lenguaje (0+10)*, con cualquier cantidad de bloques
c) El lenguaje 0(1+0)*, con cualquier mezcla de 1 y 0
d) El lenguaje (01)*, formado por repeticiones de 01

34. ¿Qué establece el teorema que relaciona las gramáticas regulares con los lenguajes regulares?
a) Los lenguajes regulares son un subconjunto propio de todos los lenguajes generados por gramáticas regulares
b) Las gramáticas regulares generan todos los lenguajes libres de contexto posibles
*c) Un lenguaje es generado por una gramática regular si y solo si es regular
d) Toda gramática regular genera solamente lenguajes finitos, con pocas cadenas cada uno

### Tema: Un lenguaje que no es regular

35. ¿Qué estrategia de demostración se usa para probar que L = {a^n b^n | n ≥ 1} no es regular?
a) Se construye una ER que denota L y se muestra que esa ER resulta inválida
b) Se enumeran las cadenas de L y se comprueba que son infinitas
*c) Se supone que L es regular y se llega finalmente a una contradicción
d) Se prueba por inducción que toda gramática regular genera a lo sumo n terminales

36. En la demostración de que {a^n b^n | n ≥ 1} no es regular, ¿qué propiedad de las producciones de una gramática regular se usa?
*a) Cada producción genera exactamente un terminal y deja a lo sumo una variable
b) Cada producción genera exactamente dos terminales y elimina una variable de la cadena en curso
c) Cada producción debe terminar con la cadena vacía ε para cerrar la derivación
d) Cada producción puede dejar cualquier cantidad de variables pendientes en la cadena

37. En esa demostración, ¿por qué en la derivación de a^n b^n tiene que repetirse alguna variable?
a) Porque la gramática debe tener al menos una variable por cada símbolo de la cadena derivada
b) Porque cada producción regular agrega la misma variable que acaba de reemplazar en el paso anterior de la derivación
c) Porque la variable inicial S reaparece obligatoriamente al final de toda derivación posible de la gramática
*d) Porque la derivación tiene al menos n pasos y aparecen n+1 variables, pero la gramática solo tiene n distintas

38. Cuando una variable A se repite en la derivación, se omite el tramo entre sus dos apariciones. ¿Por qué eso lleva a una contradicción?
*a) Porque se obtiene una cadena con más b's que a's que no pertenece a L, pero la gramática la genera
b) Porque se obtiene una cadena con más a's que b's que ya no es generada por la gramática en cuestión
c) Porque se obtiene una cadena con la misma cantidad de a's y b's pero en distinto orden
d) Porque se obtiene una cadena de L que la gramática en realidad no debería poder generar

39. En la demostración de que {a^n b^n | n ≥ 1} no es regular, al omitir el tramo entre las dos apariciones de A (con índices i < j) queda la cadena a^(n−j+i) b^n. ¿Por qué tiene más b's que a's?
*a) Porque j − i > 0, así que la cadena tiene menos a's que antes
b) Porque j − i = 0, así que se agregaron b's nuevas al final
c) Porque n − j es negativo, así que se eliminaron b's de la cadena
d) Porque A genera una b cada vez que se repite en la derivación

## Nivel 2: Gramáticas libres de contexto

### Tema: Definición de gramática libre de contexto

1. ¿Qué distingue la forma de las producciones de una GLC (A → α, con α ∈ (V ∪ T)*) de la de una gramática regular?
*a) El lado derecho puede ser cualquier cadena de variables y terminales, en cualquier orden y cantidad
b) El lado derecho solo puede contener terminales y nunca puede contener ninguna variable ni la cadena vacía
c) El lado izquierdo puede ser una cadena de varios símbolos y no solamente una variable
d) El lado derecho debe tener exactamente un terminal seguido de a lo sumo una variable

2. En una GLC G, ¿qué significa que α derive β (α ⇒* β)?
a) Que β contiene al menos un terminal más que la cadena α
*b) Que partiendo de α y aplicando 0 o más producciones de P se llega a β
c) Que α y β son cadenas equivalentes porque G genera a las dos
d) Que β se obtiene de α aplicando exactamente una producción de P

3. ¿Qué cadenas forman el lenguaje L(G) generado por una GLC G = (V, T, P, S)?
a) Las cadenas w tales que w deriva el símbolo inicial S
b) Las cadenas de variables y terminales que se pueden derivar desde S
c) Las cadenas de terminales que aparecen en alguna producción de P
*d) Las cadenas w formadas solo por terminales que S deriva

4. ¿Cuándo decimos que un lenguaje L es libre de contexto (LLC)?
*a) Cuando existe alguna GLC G tal que el lenguaje L coincide exactamente con L(G)
b) Cuando todas las cadenas de L tienen exactamente la misma longitud entre sí
c) Cuando L es generado por una gramática regular y por ninguna otra clase de gramática
d) Cuando L no puede ser denotado por ninguna expresión regular sobre su alfabeto

5. ¿Cuándo dos GLC G1 y G2 son equivalentes?
a) Cuando tienen la misma cantidad de producciones y el mismo símbolo inicial
b) Cuando todas las cadenas que generan tienen la misma longitud
*c) Cuando generan el mismo lenguaje, es decir, cuando L(G1) = L(G2)
d) Cuando tienen las mismas variables y los mismos terminales, aunque difieran las producciones

### Tema: Ejemplos de gramáticas libres de contexto

6. En la gramática con producciones S → aSb y S → ab, ¿qué rol cumple la producción S → ab?
a) Permite que la cantidad de a's de la cadena sea distinta de la cantidad de b's
b) Reemplaza todas las apariciones de aS por ab en un solo paso de derivación
*c) Cierra la derivación eliminando S, y sin ella nunca se obtendría una cadena de terminales
d) Genera la b final de cada cadena y deja la variable S para seguir derivando

7. Con la gramática de producciones S → aSb y S → ab, ¿qué producciones hay que aplicar, y en qué orden, para derivar a³b³?
a) S → ab dos veces y después S → aSb una vez, en ese orden
*b) S → aSb dos veces y después S → ab una vez
c) S → aSb tres veces seguidas, una por cada par a-b
d) S → ab tres veces seguidas, una por cada par a-b

8. ¿Cuáles de las siguientes cadenas pertenecen al lenguaje de la gramática de la imagen?
![Producciones S → aSa | T, T → bTb | W y W → cWc | c](imagenes/iap2-nivel2-glc-ejercicio.png)
*a) c
b) abccba
*c) aabcbaa
d) abcab
*e) ccc
f) ε

9. En la gramática de expresiones de la imagen, ¿qué producción hay que aplicar primero para derivar (id + id) * id?
![Cuatro producciones de una gramática de expresiones con suma, producto, paréntesis e id](imagenes/iap2-nivel2-glc-expresiones.png)
a) <expresión> → <expresión> + <expresión>
*b) <expresión> → <expresión> * <expresión>
c) <expresión> → id
d) <expresión> → (<expresión>)

10. En la gramática de expresiones de la imagen, ¿qué producción permite generar subexpresiones entre paréntesis, como (id + id)?
![Cuatro producciones de una gramática de expresiones con suma, producto, paréntesis e id](imagenes/iap2-nivel2-glc-expresiones.png)
*a) <expresión> → (<expresión>)
b) <expresión> → <expresión> + <expresión>
c) <expresión> → id
d) <expresión> → <expresión> * <expresión>

11. En la gramática de expresiones de la imagen, ¿qué producción cierra una rama de la derivación, generando un terminal y sin dejar variables?
![Cuatro producciones de una gramática de expresiones con suma, producto, paréntesis e id](imagenes/iap2-nivel2-glc-expresiones.png)
*a) <expresión> → id
b) <expresión> → (<expresión>)
c) <expresión> → <expresión> + <expresión>
d) <expresión> → <expresión> * <expresión>

12. En la gramática de expresiones de la imagen, ¿qué producción interviene para derivar una suma como id + id?
![Cuatro producciones de una gramática de expresiones con suma, producto, paréntesis e id](imagenes/iap2-nivel2-glc-expresiones.png)
a) <expresión> → (<expresión>)
*b) <expresión> → <expresión> + <expresión>
c) <expresión> → id
d) <expresión> → <expresión> * <expresión>

13. En la derivación de (id + id) * id de la clase, ¿qué cadena se obtiene inmediatamente después de <expresión> * <expresión>?
a) <expresión> * <expresión> + <expresión>
b) <expresión> * id
*c) (<expresión>) * <expresión>
d) (id + id) * <expresión>

### Tema: Árboles de derivación

14. ¿Cuáles de las siguientes propiedades cumple un árbol de derivación de una GLC G = (V, T, P, S)?
*a) La raíz está etiquetada con el símbolo inicial S
b) Las hojas pueden estar etiquetadas con variables de V
*c) Los nodos internos están etiquetados con variables de V
*d) Las hojas están etiquetadas con terminales de T o con ε
e) La raíz puede estar etiquetada con cualquier terminal de T

15. En un árbol de derivación, un nodo interno etiquetado A tiene tres hijos etiquetados B, c y D (con c terminal). ¿Qué debe cumplirse?
a) Las producciones A → B, A → c y A → D deben estar en P
b) Debe existir una producción que lleve del símbolo inicial S a la cadena BcD
*c) La producción A → BcD debe pertenecer al conjunto P de producciones de la gramática
d) B, c y D deben ser todas variables del conjunto V de la gramática

16. ¿Qué significa que un nodo de un árbol de derivación tenga la etiqueta ε?
a) Que es una variable que quedó sin ninguna producción para reemplazarla
b) Que es un nodo interno desde el cual se siguen aplicando producciones
c) Que es la raíz del árbol, porque se deriva la cadena vacía
*d) Que es una hoja, y su variable padre se reemplazó por la cadena vacía

### Tema: Pertenencia y parsing

17. ¿Qué problema resuelve un algoritmo de parsing para una GLC G?
*a) Determina si una cadena x pertenece a L(G) y, si pertenece, puede devolver un árbol de derivación
b) Genera todas las cadenas del lenguaje L(G) ordenadas de menor a mayor longitud, sin repetir ninguna
c) Construye la gramática más chica que sea equivalente a G, eliminando todas las variables innecesarias
d) Convierte G en una expresión regular que denota el mismo lenguaje que G, sin cambiar ninguna de las cadenas

18. El algoritmo CYK es un algoritmo de programación dinámica. ¿Qué requisito exige sobre la gramática?
a) Que no permita más de un árbol de derivación para cada cadena de entrada
b) Que sea una gramática regular, sin producciones que tengan variables a la derecha de un terminal
*c) Que esté escrita en forma normal de Chomsky antes de analizar la cadena
d) Que no tenga símbolo inicial para poder probar todas las variables posibles

19. ¿Cuál de las siguientes producciones es válida en una gramática en forma normal de Chomsky (A, B, C variables; a terminal)?
*a) A → BC, con dos variables y ningún terminal a la derecha de la flecha
b) A → aB, con un terminal seguido de una variable a la derecha
c) A → BCD, con tres variables y ningún terminal en la parte derecha
d) A → ε, que elimina la variable A de la cadena en el siguiente paso

20. ¿Qué garantiza el teorema sobre la forma normal de Chomsky?
a) Que toda cadena de una GLC tiene un único árbol de derivación posible según la gramática
b) Que toda GLC es en realidad una gramática regular escrita de otra manera, con otras variables
c) Que el parsing de cualquier gramática puede resolverse sin necesidad de programación dinámica
*d) Que cualquier GLC puede convertirse a otra con producciones A → BC o A → a

### Tema: Jerarquía de Chomsky

21. ¿Cuáles de las siguientes asociaciones entre tipo de lenguaje y formalismo que lo define son correctas?
*a) Tipo 3: expresiones regulares y gramáticas regulares
b) Tipo 2: gramáticas sensibles al contexto
*c) Tipo 2: gramáticas libres de contexto
*d) Tipo 1: gramáticas sensibles al contexto
e) Tipo 0: gramáticas libres de contexto
*f) Tipo 0: gramáticas sin restricciones

22. En el tipo 0 de la jerarquía de Chomsky, ¿qué significa que «recursivo» sea sinónimo de «computable»?
*a) Que sus cadenas pueden enumerarse o ser aceptadas por alguna máquina de Turing
b) Que son lenguajes finitos que se pueden describir con una lista de cadenas
c) Que sus gramáticas deben tener producciones que se llamen a sí mismas para derivar
d) Que todas sus cadenas se pueden generar con alguna gramática libre de contexto

23. ¿En qué lugar de la jerarquía de Chomsky se ubica el lenguaje {a^n b^n | n ≥ 1}?
a) Es sensible al contexto, pero no es un lenguaje libre de contexto
*b) Es libre de contexto, pero no es un lenguaje regular
c) Es regular, por lo que se puede denotar con una expresión regular
d) Es recursivamente enumerable, pero no es sensible al contexto

24. ¿En qué lugar de la jerarquía de Chomsky se ubica el lenguaje {a^n b^n c^n | n ≥ 1}?
a) Es regular, porque usa solamente tres símbolos distintos en total
*b) Es sensible al contexto pero no llega a ser libre de contexto
c) Es libre de contexto, porque se genera con una producción como S → aSbc
d) Es un lenguaje tipo 0 que ninguna gramática puede llegar a generar

### Tema: Lenguajes naturales y gramáticas

25. ¿Por qué los lenguajes naturales como el español no pueden ser lenguajes regulares?
a) Porque en sus oraciones no puede repetirse ninguna palabra más de una vez
*b) Porque admiten subordinadas anidadas, parecidas a palíndromos, que una gramática regular no puede generar
c) Porque tienen más símbolos de los que puede contener cualquier alfabeto finito de caracteres posibles
d) Porque sus palabras son demasiado largas para describirse con una ER

26. Las oraciones de la imagen tienen una estructura de subordinadas anidadas. ¿Qué forma general responde a ese patrón?
![Dos oraciones en español con subordinadas anidadas marcadas con corchetes de colores](imagenes/iap2-nivel2-oraciones-anidadas.png)
a) a1 b1 a2 b2 a3 b3, con cada dependencia contigua a su par
b) a1 a2 a3 b1 b2 b3, con dependencias cruzadas entre los símbolos de cada par
*c) a1 a2 a3 b3 b2 b1, con dependencias anidadas parecidas a un palíndromo
d) a^n b^n c^n, con la misma cantidad de tres símbolos distintos

27. ¿Qué fenómeno ilustra el diagrama de la oración en alemán suizo «...nosotros dejamos a los chicos ayudar a Hans a pintar la casa» y qué consecuencia tiene?
![Oración en alemán suizo con su traducción palabra por palabra y arcos que conectan sustantivos con verbos](imagenes/iap2-nivel2-aleman-suizo.png)
a) Dependencias anidadas a1 a2 a3 b3 b2 b1, que cualquier GLC genera sin problema
b) La concordancia de género y número, que una expresión regular puede reconocer
*c) Dependencias seriales cruzadas a1 a2 a3 b1 b2 b3, que escapan a los LLC
d) La ausencia de dependencias entre verbos y objetos, que una GLC no necesita representar

28. ¿Qué dificultad plantea para las GLC una oración como «Mi amiga me llamó ayer para contarme que estaba preocupada»?
*a) Exige concordancia de género y número, como entre «amiga» y «preocupada»
b) Contiene subordinadas anidadas que ninguna GLC logra representar en sus árboles
c) Usa verbos conjugados sin sujeto explícito en todas las cláusulas de la oración
d) Mezcla palabras de dos idiomas dentro de una misma oración

29. ¿Cuál es la posición general sobre si los lenguajes naturales son libres de contexto?
a) Se acepta que casi todos son regulares y unos pocos son libres de contexto
b) Se acepta que ningún lenguaje natural es libre de contexto
c) Se acepta que todos lo son, sin ninguna excepción conocida hasta hoy
*d) En líneas generales sí lo son, salvo en unas pocas excepciones

### Tema: Una GLC de juguete para el español

30. ¿Cuál de las siguientes oraciones se puede derivar con la GLC de juguete de la figura?
![Gramática libre de contexto de juguete para el español, con producciones para Oración, FraseNominal, Artículo, Sustantivo, Adjetivo, FraseVerbal, Verbo y Adverbio](imagenes/iap2-nivel2-gramatica-juguete.png)
a) el sapo alegremente salta
*b) sapo verde tiene el pelo
c) el sapo verde tiene el pelo
d) la piel salta alegremente verde

31. Con la GLC de juguete de la figura, se puede derivar «la sapo tiene piel verde». ¿Qué muestra esto?
![Gramática libre de contexto de juguete para el español, con producciones para Oración, FraseNominal, Artículo, Sustantivo, Adjetivo, FraseVerbal, Verbo y Adverbio](imagenes/iap2-nivel2-gramatica-juguete.png)
*a) Que la gramática no captura la concordancia de género entre el artículo y el sustantivo
b) Que la gramática genera oraciones que no tienen ninguna estructura de frase nominal reconocible
c) Que la gramática no puede generar ninguna oración con un adjetivo después del sustantivo
d) Que la gramática es ambigua, porque la oración tiene más de un árbol de derivación posible

### Tema: Gramáticas libres de contexto probabilísticas

32. ¿Qué agrega una GLC probabilística (GLCP) respecto de una GLC común?
a) Variables adicionales que almacenan cuántas veces se usó cada regla durante la derivación
b) Un orden fijo en el que deben aplicarse las producciones de la gramática en cada derivación
c) Terminales nuevos que representan la probabilidad con que aparece cada palabra en el texto
*d) Una probabilidad p, entre 0 y 1, asociada a cada producción A → α [p]

33. En una GLCP, ¿qué representa la probabilidad p de una producción A → α?
a) La probabilidad de que la variable A sea el símbolo inicial de la gramática
b) La probabilidad de que la cadena α aparezca en cualquier oración del lenguaje
*c) La probabilidad de expandir la variable A usando esa producción en la derivación
d) La proporción de oraciones del lenguaje que contienen la variable A

34. En una GLCP, ¿qué condición cumplen las probabilidades de todas las producciones que expanden una misma variable A?
a) Suman 1 en toda la gramática, pero no necesariamente por variable
b) Todas son iguales entre sí, para que ninguna regla tenga ventaja
c) Cada una es menor que 0,5, para que ninguna regla domine las demás
*d) Suman 1 entre todas las producciones que expanden a la variable A

35. En la GLCP de juguete de la imagen, ¿qué se puede concluir sobre las producciones de Sustantivo que aparecen con sus probabilidades?
![Producciones de Oración y de Sustantivo con probabilidades entre corchetes](imagenes/iap2-nivel2-glcp-sustantivos.png)
a) La palabra sapo es siempre el sustantivo más frecuente en cualquier oración dada
*b) Existen otras producciones de Sustantivo cuyas probabilidades suman lo que falta para completar 1
c) La probabilidad de que una oración cualquiera contenga algún sustantivo es 0,8
d) Hay un error, porque las probabilidades deben sumar 1 entre esas tres producciones dadas

36. ¿Cómo se calcula la probabilidad de un árbol de parsing T en una GLCP?
a) Sumando las probabilidades de todas las producciones usadas en el árbol completo
b) Promediando las probabilidades de las producciones usadas en el árbol
c) Tomando solamente la probabilidad de la producción aplicada en la raíz
*d) Multiplicando las probabilidades de las producciones aplicadas en todo el árbol

37. Una oración tiene varios árboles de parsing posibles en una GLCP. ¿Cómo se obtiene la probabilidad de la oración?
a) Se promedian las probabilidades de todos sus árboles de parsing
b) Se multiplican entre sí las probabilidades de todos sus árboles de parsing
c) Se toma la probabilidad del árbol más probable y se descartan los demás
*d) Se suman las probabilidades de todos sus árboles de parsing posibles

38. Un sistema de reconocimiento del habla duda entre «una moneda de cincuenta centavos» y «una manera de cincuenta centauros». ¿Cómo puede ayudar una GLCP?
*a) Calculando la probabilidad de cada oración y eligiendo la más probable de todas
b) Eligiendo la oración que se pueda derivar con la menor cantidad de producciones aplicadas
c) Descartando la oración que tenga alguna palabra que no pertenezca a la gramática dada
d) Eligiendo la oración que tenga más palabras, porque contiene más información

39. ¿Cuál de las siguientes es una aplicación de una GLCP usada como modelo del lenguaje?
*a) Elegir la transcripción más plausible entre varias hipótesis en el reconocimiento del habla
b) Minimizar la cantidad de variables de una gramática sin cambiar el lenguaje que genera
c) Convertir una expresión regular en una gramática regular equivalente a ella
d) Demostrar que un lenguaje no es regular encontrando una variable que se repite

## Nivel 3: Modelado computacional del lenguaje (parte 1)

### Tema: Tareas y aplicaciones del Procesamiento del Lenguaje Natural

1. ¿Cuáles de las siguientes figuran entre las tareas de PLN de la lista de la clase?
*a) Segmentación en frases y oraciones
b) Detección de objetos en imágenes
*c) Desambiguación léxica (WSD)
d) Compresión de archivos de audio
*e) Etiquetado de roles semánticos
f) Reconocimiento facial en fotografías

2. Dentro de la lista de tareas de PLN, ¿qué tareas se agrupan bajo el análisis morfológico?
a) El reconocimiento de entidades y el análisis de sentimiento
b) El parsing sintáctico y la desambiguación léxica de las palabras
c) La segmentación en oraciones y el etiquetado de roles semánticos del texto
*d) La tokenización y la normalización de las palabras de un texto

3. ¿Cuáles de las siguientes figuran entre las aplicaciones de PLN de la lista de la clase?
*a) Anonimización de documentos
b) Control de temperatura industrial
*c) Filtros de spam
*d) Moderación de contenido
e) Cálculo de rutas de entrega
*f) Subtitulado automático

4. ¿Cuáles de las siguientes figuran entre las tareas y aplicaciones de PLN de la lista de la clase?
*a) Resolución de referencias
*b) Análisis de sentimiento
c) Predicción de la demanda eléctrica
*d) Recuperación de información
*e) Detección de noticias falsas
*f) Análisis de reviews de productos

5. ¿Cuáles de las siguientes figuran entre las aplicaciones de PLN de la lista de la clase?
*a) Clasificación de tickets de soporte
*b) Indicadores de mercado basados en noticias financieras
c) Segmentación de imágenes satelitales de cultivos
*d) Identificación de enfermedades y genes en papers médicos
*e) Extracción de entidades y relaciones en textos legales
*f) Monitoreo de marcas y personas en redes y medios

### Tema: Racionalismo y empirismo

6. ¿Qué postura sostiene que la razón humana es la fuente principal y más confiable de conocimiento, y con qué polo del eje se asocia?
a) El empirismo, que se asocia con el uso de los datos
*b) El racionalismo, que se asocia con el uso de teorías
c) El empirismo, que se asocia con las teorías formales
d) El racionalismo, que se asocia con los datos masivos

7. ¿Qué postura sostiene que el conocimiento proviene principalmente de la experiencia sensorial, y con qué polo del eje se asocia?
a) El racionalismo, que se asocia con los datos masivos
*b) El empirismo, que se asocia con los datos
c) El empirismo, que se asocia con las teorías formales
d) El racionalismo, que se asocia con teorías

8. Un equipo arma un sistema de PLN que aprende regularidades a partir de grandes cantidades de texto, sin escribir reglas lingüísticas a mano. ¿Con qué postura se alinea ese enfoque?
*a) Con el empirismo, porque el conocimiento proviene de la experiencia, es decir, de los datos
b) Con el racionalismo, porque confía en las teorías que formulan los expertos del área
c) Con el racionalismo, porque la razón humana es la fuente principal de conocimiento
d) Con ambas posturas por igual, porque los datos y las teorías pesan exactamente lo mismo siempre

### Tema: Evolución histórica del PLN

9. ¿Cuáles de las siguientes asociaciones entre paradigma del PLN y técnicas son correctas?
*a) Simbólico: reglas, diccionarios, expresiones regulares y GLC
b) Simbólico: n-gramas, GLCP, Naive Bayes y RF
*c) Estadístico: n-gramas, GLCP, Naive Bayes, SVM, RF y HMM
*d) Neuronal: RNN, CNN y LSTM
e) Neuronal: GPT, BERT, BART y LSTM
*f) Transformers: GPT, BERT y BART

10. ¿Cuál es el orden cronológico aproximado de los paradigmas del PLN?
a) Estadístico, simbólico, luego neuronal y finalmente transformers
b) Simbólico, estadístico, transformers, neuronal
c) Simbólico, neuronal, estadístico y transformers
*d) Simbólico, estadístico, neuronal y luego transformers

11. ¿Por qué las GLC se ubican en el paradigma simbólico y las GLCP en el estadístico?
a) Porque las GLC se usan solo con lenguajes naturales y las GLCP solo con lenguajes de programación formales
b) Porque las GLCP no usan reglas de producción y las GLC sí las usan
*c) Porque las GLCP agregan probabilidades a las reglas, y las GLC solo definen qué cadenas son válidas
d) Porque las GLCP aprenden sus propias reglas mediante redes neuronales recurrentes entrenadas con corpus

### Tema: Tokenización

12. ¿Cuántas palabras tiene la oración de la imagen?
![Oración «El Dr. Gómez cobró $1.250,00 el 09/12 por el análisis de ADN.»](imagenes/iap2-nivel3-oracion-tokenizar.png)
a) Las mismas en cualquier tokenizador, porque la definición de palabra es única y universal
b) Exactamente las que resultan de separar el texto por los espacios en blanco
c) Exactamente una por cada secuencia de letras, ignorando por completo los números y los símbolos
*d) Depende de cómo se tokenice la abreviatura, el monto, la fecha y la sigla

13. ¿Cuáles de los elementos de la oración de la imagen son casos problemáticos para tokenizar?
![Oración «El Dr. Gómez cobró $1.250,00 el 09/12 por el análisis de ADN.»](imagenes/iap2-nivel3-oracion-tokenizar.png)
*a) Dr.
b) cobró
*c) $1.250,00
*d) 09/12
e) análisis
*f) ADN

14. ¿Cuáles de las siguientes asociaciones entre caso problemático de la tokenización y ejemplo son correctas?
*a) Abreviaturas: Dr.
b) Siglas: Dr.
*c) Siglas: ADN
d) Contracciones: ADN
*e) Contracciones: al y del
*f) Fechas: 09/12

15. ¿Cuáles de los siguientes elementos de las redes sociales figuran entre los casos problemáticos de la tokenización?
*a) Emojis, como :-)
b) Párrafos largos
*c) #Hashtags
d) Verbos conjugados
*e) @Menciones
f) Sustantivos propios

### Tema: Normalización y morfología

16. ¿Qué diferencia hay entre el stemming y la lematización?
*a) El stemming corta el final de la palabra y la lematización la reduce a su forma de diccionario
b) El stemming reduce cada palabra a su forma de diccionario y la lematización corta el final de la palabra
c) Ambos exigen conocer la morfología del idioma, pero la lematización es más rápida que el stemming
d) El stemming agrupa solamente verbos regulares y la lematización agrupa solamente sustantivos del texto analizado

17. Un sistema reduce «corrió», «corriendo» y «correrá» a «corr» cortando el final de cada palabra con reglas. ¿Qué técnica usa y qué característica tiene?
a) Lematización, que es rápida pero inexacta porque se basa en reglas heurísticas
*b) Stemming, que es rápido pero inexacto porque se basa en reglas heurísticas
c) Stemming, que es lento y exacto porque exige conocer la morfología del idioma
d) Lematización, que es lenta y muy exacta porque usa el diccionario

18. Un sistema reduce «corro», «corrió» y «corriendo» a «correr», la forma canónica de diccionario. ¿Qué técnica usa y qué requiere?
a) Lematización, que se basa en cortes heurísticos del final de la palabra
b) Stemming, que se basa en reglas y resulta rápido pero inexacto
c) Stemming, que requiere conocer la morfología del idioma
*d) Lematización, que requiere conocimiento de la morfología del lenguaje

19. ¿Qué estudia la morfología y cuál es su unidad básica con significado?
a) Las relaciones entre oraciones del texto, y su unidad es el párrafo
*b) La estructura interna de las palabras, y su unidad básica es el morfema
c) El orden de las palabras en la oración, y su unidad básica es el sintagma
d) El significado de las palabras en contexto, y su unidad básica es el lema

20. ¿Qué dos tipos de morfemas se distinguen en la clase?
a) Raíces y lemas, como correr y corr en la normalización
b) Flexiones y derivaciones, como gat-a-s y cuchillada
*c) Raíces y afijos, como los prefijos y los sufijos
d) Prefijos y sufijos, sin que existan las raíces

21. ¿Cuáles de las siguientes asociaciones entre proceso de formación de palabras y ejemplo son correctas?
*a) Flexión: gat-a-s y cant-á-ba-mos, que agregan información gramatical
b) Flexión: cuchillo → cuchillada, que cambia el significado
*c) Derivación: cuchillo → cuchillada, que cambia el significado
*d) Composición: medianoche, telaraña y correveidile, que juntan 2 o más raíces
e) Composición: gat-a-s y cant-á-ba-mos, que agregan información gramatical
f) Derivación: telaraña y correveidile, que juntan 2 o más raíces

### Tema: Reconocimiento de entidades nombradas (NER)

22. ¿En qué se diferencia el reconocimiento de entidades nombradas de etiquetar todos los sustantivos de un texto?
a) En que el NER etiqueta únicamente los sustantivos propios que empiezan con mayúscula
b) En que el NER solo se aplica sobre textos legales y no sobre las noticias
c) En que el NER reemplaza cada sustantivo por su forma canónica de diccionario
*d) En que el NER busca entidades específicas del mundo real y no cualquier sustantivo

23. Un texto menciona a «la Dra. Juana Pérez», luego a «la jueza» y luego a «ella», refiriéndose siempre a la misma persona. ¿Qué característica de las entidades ilustra esto?
a) Que «Dra.» es una abreviatura y hace que la oración quede sin entidades
*b) Que una misma entidad aparece varias veces y de formas distintas
c) Que las entidades de tipo persona no pueden repetirse dentro del mismo texto
d) Que «la jueza» y «ella» son sustantivos y deben ignorarse

24. ¿Cuáles de los siguientes tipos de entidades identifica el NER según la clase?
*a) Personas
b) Verbos conjugados
*c) Organizaciones
*d) Lugares
*e) Expresiones de tiempo
*f) Expresiones de cantidad

25. En una oración aparecen «Banco Nación», «Córdoba» y «Marta Díaz». ¿Qué categorías estándar de NER les corresponden, respectivamente?
a) PER (persona), ORG (organización) y LOC (lugar) en orden
*b) ORG (organización), LOC (lugar) y PER (persona) en orden
c) MISC (miscelánea) para el banco, LOC (lugar) y PER (persona)
d) LOC (lugar), PER (persona) y ORG (organización)

26. ¿Qué categoría estándar de NER recibe el nombre de miscelánea?
a) ORG, la categoría de las organizaciones
*b) MISC, la categoría miscelánea
c) LOC, solo lugares
d) PER, la categoría de las personas

27. ¿Qué se hace con las categorías de NER en dominios específicos, como los textos médicos o legales?
*a) Se agregan categorías propias del dominio, como leyes, medicamentos y genes, a las estándar
b) Se reemplazan las categorías estándar por una única categoría general llamada simplemente entidad
c) Se etiquetan como sustantivos comunes y se resuelven con el POS tagging
d) Se eliminan las categorías PER y ORG porque no aparecen en ningún texto del dominio médico

### Tema: Etiquetado de clases de palabras (POS tagging)

28. ¿Qué criterios hacen que ciertas palabras se agrupen en una misma clase de palabras?
*a) Que aparezcan en contextos similares, cumplan funciones similares y sufran transformaciones similares
b) Que tengan la misma cantidad de sílabas y la misma terminación
c) Que aparezcan con la misma frecuencia dentro de un corpus de gran tamaño
d) Que provengan de la misma raíz y compartan un mismo significado

29. ¿En qué consiste el POS tagging que se ilustra en la imagen?
![Oración «El informe dice que no hay evidencia» con una clase de palabra escrita debajo de cada palabra](imagenes/iap2-nivel3-pos-etiquetas.png)
a) En reducir cada palabra a su raíz cortando el final de la palabra
*b) En asignar a cada palabra una etiqueta que indica su clase gramatical
c) En identificar y clasificar menciones a entidades del mundo real
d) En construir un árbol que muestre la estructura sintáctica de toda la oración dada

30. ¿Cuáles de las siguientes asociaciones entre clase de palabra y ejemplos son correctas?
*a) Conjunciones: y, o, ni, sino
b) Determinantes: yo, mi, mío
*c) Determinantes: el, un, ese, estas
*d) Preposiciones: de, por, a
e) Adverbios: púrpura, altas, ridículo
f) Preposiciones: y, o, ni, sino

31. ¿Cuáles de las siguientes asociaciones entre clase de palabra y ejemplos son correctas?
*a) Pronombres: yo, mi, mío
b) Pronombres: desafortunadamente, despacio
*c) Adverbios: desafortunadamente, despacio
*d) Adjetivos: púrpura, altas, ridículo
*e) Sustantivos: silla, parlante
*f) Verbos: estar, estoy, comprendería

32. Las palabras «parlante» y «bajo» aparecen listadas en la clase bajo más de una clase de palabras. ¿Qué indica eso?
*a) Que una misma palabra puede pertenecer a más de una clase de palabras
b) Que esas palabras deben eliminarse del vocabulario antes de etiquetar el texto
c) Que el etiquetador debe asignarles todas las clases posibles a la vez
d) Que esas palabras pertenecen siempre a la clase más frecuente del corpus de entrenamiento

33. ¿Qué ilustran los ejemplos de la imagen sobre las clases que reciben «la» y «compra»?
![Dos oraciones con «la compra» y las clases de palabra asignadas a «la» y a «compra» en cada una](imagenes/iap2-nivel3-la-compra.png)
a) Que el POS tagging se resuelve con un diccionario que asigna una clase por palabra
b) Que los pronombres aparecen siempre antes de un verbo en todas las oraciones del idioma español
c) Que las palabras cambian de significado al flexionarse con distintos sufijos y desinencias
*d) Que el POS tagging no es un mapeo directo de cada palabra a su clase

34. En «Time flies like an arrow», ¿cuáles de las siguientes palabras tienen más de un tag posible según la clase?
*a) Time, con los tags VB y NN
*b) flies, con los tags VB y NN
c) an, con los tags DT y VB
*d) like, con los tags VB y PR
e) arrow, con los tags NN y VB

35. ¿Qué compromiso implica usar un tagset grande, como el del Brown Corpus, en lugar de uno reducido (N, V, Adj, Adv, Otros)?
*a) Es más informativo, pero resulta más difícil de etiquetar
b) Es menos informativo y además resulta más difícil de etiquetar
c) Es menos informativo, pero más fácil de etiquetar
d) Es más informativo y además resulta bastante más fácil de etiquetar

36. ¿Cuál de los siguientes tagsets se usa actualmente con mayor frecuencia para el inglés?
a) El tagset reducido formado por N, V, Adj, Adv y Otros
b) El tagset EAGLE, pensado originalmente para textos escritos en inglés
*c) El tagset del Penn Treebank, basado en un corpus del Wall Street Journal
d) El tagset del Brown Corpus, que sigue siendo el más usado hoy en día

37. ¿Para qué idioma se menciona el tagset EAGLE como ejemplo?
a) Para el alemán, como ejemplo de tagset de otro idioma europeo
b) Para el francés, como alternativa al Brown Corpus
*c) Para el español, como ejemplo de tagset de otro idioma
d) Para el inglés, como alternativa directa al Penn Treebank

38. ¿Cómo funciona, a grandes rasgos, el POS tagging basado en reglas?
a) Asigna a cada palabra su tag más frecuente y lo corrige con un modelo de lenguaje de bigramas
b) Divide el texto en frases, etiqueta cada frase completa y luego la separa en palabras sueltas
*c) Asigna a cada palabra todos sus tags posibles y elimina tags con reglas, iterando hasta dejar uno
d) Construye el árbol sintáctico de la oración y deduce las etiquetas a partir de ese árbol

39. En «She promised to back the bill», cada palabra tiene los tags candidatos de la figura. Aplicando la regla «eliminar VBN si VBD es una opción cuando VBN|VBD sucede a <start> PRP», ¿qué ocurre con «promised»?
![Oración She promised to back the bill con los tags candidatos apilados sobre cada palabra](imagenes/iap2-nivel3-pos-candidatos.png)
a) Se elimina VBD y queda VBN, porque sucede a un pronombre
b) No se elimina ninguno, porque la regla solo se aplica a verbos en infinitivo
*c) Se elimina VBN y queda VBD, porque sucede a la secuencia <start> PRP
d) Se eliminan ambos tags, porque la regla no permite ninguno de los dos

40. En «She promised to back the bill», aplicando la regla «después de DT no puede venir VB (si hay otra opción disponible)», ¿qué ocurre con «bill»?
![Oración She promised to back the bill con los tags candidatos apilados sobre cada palabra](imagenes/iap2-nivel3-pos-candidatos.png)
a) Se eliminan ambos tags, porque ninguno puede venir después de DT
*b) Se elimina VB y queda NN, porque sucede inmediatamente al determinante «the»
c) No se elimina ninguno, porque «bill» no sucede de forma inmediata a un determinante
d) Se elimina NN y queda VB, porque sucede a un determinante

41. ¿Qué significa la aclaración «si hay otra opción disponible» en la regla «después de DT no puede venir VB»?
*a) Que VB solo se elimina si la palabra tiene otro tag posible disponible
b) Que la regla solo se aplica cuando la palabra anterior es DT
c) Que la regla elimina cualquier tag que no sea VB después de un DT
d) Que la regla se aplica solo una vez por cada oración del texto

42. ¿Cuáles de las siguientes asociaciones entre enfoque de POS tagging y ejemplo son correctas?
*a) Basado en reglas: EnCG ENGTWOL
*b) Basado en transformaciones: Brill tagger
c) Basado en reglas: HMM, SVM y RNN
*d) Basado en datos: SVM, HMM, RNN y BERT afinado
e) Basado en transformaciones: HMM, SVM y RNN

43. ¿Cuáles de los siguientes tipos de texto representan un desafío para el POS tagging según la clase?
*a) El habla espontánea
*b) El lenguaje informal, como «tkm lol»
c) Textos periodísticos formales
*d) Los neologismos
*e) Las variantes dialectales
f) Oraciones simples y frecuentes

## Nivel 4: Modelado computacional del lenguaje (parte 2)

### Tema: Análisis sintáctico

1. En el análisis sintáctico de la imagen, ¿qué representan las etiquetas rojas que acompañan a cada palabra de la oración?
![Reglas de gramática a la izquierda y la oración «El informe dice que no hay evidencia» con etiquetas rojas sobre cada palabra](imagenes/iap2-nivel4-reglas-etiquetas.png)
*a) La clase de palabra de cada palabra
b) Las entidades nombradas que aparecen en la oración
c) La forma de diccionario de cada palabra
d) Los constituyentes del árbol

2. Con las reglas de la imagen, ¿cómo se analiza «El informe» una vez etiquetado como DT NN?
![Reglas de gramática a la izquierda y la oración «El informe dice que no hay evidencia» con etiquetas rojas sobre cada palabra](imagenes/iap2-nivel4-reglas-etiquetas.png)
a) «El» forma un NP con DT y luego «informe» se agrega a ese NP como un VP
b) «El informe» forma un solo PP, porque contiene un determinante seguido de un sustantivo común
*c) «informe» forma un NP con NN y luego «El» y ese NP forman otro NP con DT NP
d) «informe» forma un NP con NN y «El» forma otro NP sin ninguna relación entre ambos dentro del árbol

3. La figura muestra el parsing completo de «El informe dice que no hay evidencia». ¿Qué ofrece un parsing completo que no ofrece un chunking?
![Árbol de parsing completo de la oración El informe dice que no hay evidencia, con la raíz S, los constituyentes NP, VP y PP, y las reglas de la gramática a la izquierda](imagenes/iap2-nivel3-arbol-parsing.png)
*a) Un árbol que relaciona todos los constituyentes hasta llegar al símbolo inicial S
b) Una lista de las entidades nombradas que aparecen en toda la oración
c) La forma de diccionario de cada palabra, que el chunking no calcula
d) Etiquetas de clase de palabra para cada palabra, que el chunking no llega a asignar

4. La imagen muestra un chunking de la oración. ¿Por qué a veces se usa shallow parsing o chunking en lugar de un parsing completo?
![Fragmentos de árbol NP y VP sobre la oración etiquetada «El informe dice que no hay evidencia», sin raíz S](imagenes/iap2-nivel4-chunking.png)
a) Porque el parsing completo no admite oraciones con varios verbos
b) Porque el chunking devuelve el árbol completo con menos etiquetas
c) Porque el parsing completo requiere gramáticas regulares limitadas
*d) Porque el parsing completo es caro computacionalmente

### Tema: Modelos de lenguaje

5. ¿Qué provee un modelo de lenguaje?
*a) Una medida de cuán probable es una secuencia de palabras
b) Una traducción de cada oración a otro idioma
c) Una lista de las palabras válidas del idioma con su clase gramatical
d) Un árbol de derivación para cada oración que se le presenta

6. Según un modelo de lenguaje, ¿qué relación esperamos entre P(el gato come pescado) y P(pescado come gato el)?
*a) La primera es mayor que la segunda
b) Ninguna de las dos puede calcularse
c) La segunda es mayor que la primera en cualquier modelo
d) Ambas son iguales porque tienen las mismas palabras

7. Un sistema de reconocimiento del habla genera varias transcripciones posibles de lo que dijo el usuario. ¿Qué problema resuelve el modelo de lenguaje en ese caso?
a) Reducir cada transcripción a su forma de diccionario para poder compararlas
b) Etiquetar cada palabra de la transcripción con su clase gramatical
c) Identificar las entidades nombradas de las transcripciones
*d) Elegir la más plausible entre las hipótesis generadas

8. ¿Cuáles de las siguientes son aplicaciones clásicas de los modelos de lenguaje según la clase?
*a) Reconocimiento automático del habla
*b) Traducción automática
c) Reducción de palabras con stemming
*d) Corrección ortográfica y gramatical
*e) Predicción de texto
f) Cálculo de similitud coseno entre documentos

### Tema: Gramáticas libres de contexto probabilísticas

9. Usando la GLCP de la figura, ¿cuál es la probabilidad de la derivación S → VP, VP → Verb, Verb → book?
![Tabla de una gramática libre de contexto probabilística con reglas y probabilidades entre corchetes, y un léxico con probabilidades por palabra](imagenes/iap2-nivel3-pcfg-tabla.png)
a) 0,70, la suma de las probabilidades de las tres reglas
b) 0,0175, el producto de las probabilidades de las dos primeras reglas
*c) 0,00525, el producto de las probabilidades de las tres reglas
d) 0,05, la probabilidad de la primera regla aplicada

10. Una oración tiene dos árboles de parsing con probabilidades 0,002 y 0,003 según una GLCP. ¿Cuál es la probabilidad de la oración?
a) 0,0025, el promedio de las probabilidades de ambos árboles
*b) 0,005, la suma de las probabilidades de ambos árboles
c) 0,003, la probabilidad del árbol más probable de los dos
d) 0,000006, el producto de las probabilidades de ambos

11. ¿Para cuáles de las siguientes tareas se menciona que una GLCP resulta útil como modelo del lenguaje?
*a) Reconocimiento del habla
b) Stemming de palabras
*c) Traducción automática
*d) Corrección de ortografía
e) Cálculo de la similitud coseno
*f) Detección de idioma

### Tema: Predicción de palabras

12. ¿Cuáles de las siguientes asociaciones entre tipo de conocimiento usado para predecir palabras y lo que abarca son correctas?
*a) Léxico: conocimiento de las palabras
b) Léxico: conocimiento de los significados
*c) Sintáctico: conocimiento de la estructura
d) Sintáctico: conocimiento de las palabras y sus significados
*e) Semántico: conocimiento de los significados
f) Semántico: conocimiento de la estructura y las palabras

13. Además de los conocimientos léxico, sintáctico y semántico, ¿qué otro conocimiento usamos las personas para predecir palabras futuras?
*a) Conocimiento del mundo
b) Conocimiento morfológico
c) Conocimiento fonético del habla
d) Conocimiento estadístico de corpus

### Tema: N-gramas

14. ¿Qué permite la regla de la cadena aplicada a la probabilidad de una oración?
a) Calcularla como la probabilidad de la palabra más frecuente de la oración
b) Estimarla contando cuántas veces aparece la oración completa en el corpus
*c) Descomponerla en un producto de probabilidades de cada palabra dadas las anteriores
d) Calcularla como la suma de las probabilidades de cada palabra tomada de forma aislada

15. ¿Qué afirma la suposición de Markov que se usa en los N-gramas?
*a) Que la probabilidad de una palabra depende solo de las N−1 palabras anteriores
b) Que la probabilidad de una palabra depende de todas las palabras
c) Que la probabilidad de una palabra es independiente de las palabras que la rodean
d) Que la probabilidad de una palabra depende solo de las N palabras que la siguen

16. Con un modelo de bigramas, ¿con qué se aproxima P(viernes | está abierto de lunes a)?
a) P(viernes | está abierto), que usa las dos primeras palabras
*b) P(viernes | a), que usa solo la palabra anterior
c) P(viernes | de lunes a), que usa las tres palabras anteriores
d) P(viernes | lunes a), que usa dos palabras

17. Con un modelo de trigramas, ¿con qué se aproxima P(viernes | está abierto de lunes a)?
a) P(viernes | de lunes a), que usa las tres palabras anteriores
b) P(viernes | está abierto), que usa las dos primeras palabras
c) P(viernes | a), que usa solo la palabra anterior
*d) P(viernes | lunes a), que usa las dos palabras anteriores

18. Al estimar con bigramas P(está abierto de lunes a viernes), ¿qué factores aparecen en los extremos de la fórmula?
a) P(<start>) al comienzo y P(<end>) al final, sin condicionar
*b) P(está | <start>) al comienzo y P(<end> | viernes) al final
c) P(<start> | está) al comienzo y P(viernes | <end>) al final del producto
d) P(está) al comienzo y P(viernes) al final, sin ningún marcador de límites

19. ¿Cómo se estima P(abierto | está) con bigramas a partir de las frecuencias de un corpus grande?
a) Como #(abierto) / #(está), contando solo palabras sueltas
b) Como el cociente #(está abierto) / #(abierto) del corpus
*c) Como el cociente #(está abierto) / #(está)
d) Como #(está) / #(está abierto), invertido

20. En un corpus, la palabra «está» aparece 200 veces y el par «está abierto» aparece 50 veces. Con bigramas, ¿cuánto vale P(abierto | está) y qué significa?
a) 0,75, la proporción de veces que «está» no va seguida de «abierto»
*b) 0,25, la proporción de veces que «está» va seguida de «abierto»
c) 4, la cantidad de veces que «está» aparece por par
d) 0,25, la proporción de veces que «abierto» aparece en cualquier posición del corpus

### Tema: Semántica vectorial

21. ¿Qué dice la hipótesis distribucional?
a) Que las palabras más frecuentes de un corpus son siempre las más importantes
b) Que las palabras de la misma clase gramatical se distribuyen de forma muy pareja
*c) Que las palabras que se usan en contextos similares suelen tener significados similares
d) Que las palabras con la misma raíz tienen significados parecidos entre sí

22. Entre los intentos de representar documentos como vectores listados en la clase, ¿cuál se ilustra con la matriz de la imagen?
![Matriz con filas d1 a d5 y columnas w1 a w5 con valores numéricos](imagenes/iap2-nivel4-matriz-doc-termino.png)
a) LSA (Latent Semantic Analysis)
b) PMI (Pointwise Mutual Information)
c) TF-IDF (Term Frequency–Inverse Document Frequency)
*d) La matriz documento-término (Bag of Words)

23. ¿Cuáles de las siguientes técnicas se listan como intentos de representación vectorial anteriores a los word embeddings?
*a) TF-IDF
*b) PMI
*c) LSA
*d) LDA
e) GloVe
f) BERT

24. ¿Cuáles de las siguientes técnicas se presentan en la clase como word embeddings?
*a) Word2Vec
b) ELMo
*c) GloVe
d) BERT

25. ¿Cuáles de las siguientes técnicas se presentan en la clase como embeddings contextuales?
a) Word2Vec
*b) ELMo
c) GloVe
*d) BERT

26. ¿Cómo se define la similitud coseno entre dos vectores A y B, que forman un ángulo θ?
![Dos vectores A y B que parten del origen y forman un ángulo θ, con una naranja en el extremo de A y una manzana en el extremo de B](imagenes/iap2-nivel3-vectores-angulo.png)
a) Como el seno del ángulo θ entre ambos, dividido por la suma de las normas
b) Como el producto A·B, sin dividir por las normas de ambos vectores
*c) Como cos(θ), igual a A·B dividido por el producto de ‖A‖ y ‖B‖
d) Como la distancia entre los extremos de A y B, dividida por θ

### Tema: Modelos neuronales recurrentes

27. La figura muestra una red neuronal recurrente (RNN) y su versión desplegada. ¿Qué lugar ocupaban las RNN en el PLN hasta 2017-18?
![Red neuronal recurrente con un bucle sobre el estado oculto h y su versión desplegada en varios pasos de tiempo con entradas x, estados h y salidas o](imagenes/iap2-nivel3-rnn-desplegada.png)
a) Eran un método estadístico anterior a los n-gramas
b) Eran una técnica simbólica basada en reglas escritas a mano
c) Eran la técnica que reemplazaba a los transformers
*d) Eran el estado del arte del procesamiento del lenguaje

28. Según la clase, ¿qué problema solucionó la variante LSTM de las RNN?
a) La secuencialidad
b) La falta de datos de entrenamiento
c) El cuello de botella en seq2seq
*d) El gradiente desvaneciente

29. ¿Qué significa que la secuencialidad figure como problema de las RNN?
a) Que exigen palabras ordenadas alfabéticamente
b) Que solo procesan secuencias de longitud fija conocida
*c) Que procesan un token por vez
d) Que solo predicen la palabra siguiente de la secuencia

30. En «la profesora que diseñó el plan de estudios de la nueva carrera de humanidades estaba preocupado», el final de la oración depende de «la profesora», que está muy lejos. ¿Qué problema de las RNN ilustra la clase con este ejemplo?
a) La secuencialidad
b) El gradiente desvaneciente
c) El cuello de botella en seq2seq
*d) Las dependencias largas

31. En el esquema encoder–decoder de la figura, ¿qué problema de las RNN señala el signo de exclamación?
![Esquema encoder-decoder de una RNN que traduce the dog eats al francés, con un signo de exclamación sobre el estado que conecta el encoder con el decoder](imagenes/iap2-nivel3-seq2seq.png)
*a) El cuello de botella en seq2seq
b) La secuencialidad de procesar un token por vez
c) Un gradiente desvaneciente al entrenar
d) Las dependencias largas entre palabras

### Tema: Herramientas

32. ¿Cuáles de las siguientes herramientas figuran en la lista de la clase?
*a) NLTK
b) OpenCV
*c) spaCy
d) Matplotlib
*e) FreeLing
f) Selenium

## Nivel 5: Fundamentos de LLMs #1 (parte 1)

### Tema: Repaso preliminar: softmax

1. ¿Qué hace la función softmax con un vector z ∈ R^k?
a) Lo lleva a media 0 y desvío estándar 1
b) Lo reemplaza por un vector con solo la componente máxima
c) Lo ordena de menor a mayor
*d) Lo mapea a una distribución de probabilidades

2. ¿Cómo se llaman los componentes del vector z ∈ R^k que softmax mapea a una distribución de probabilidades?
a) Los embeddings de los tokens
*b) Los logits
c) Queries
d) Las keys y values

3. Si los logits son puntajes crudos asignados a cada palabra de un vocabulario, ¿cómo se calcula con softmax la probabilidad de la palabra i?
*a) Elevando e a su logit y dividiendo por la suma de e elevado a cada logit del vocabulario
b) Calculando el logaritmo de su logit y dividiéndolo por el logit más grande del vocabulario completo
c) Restando a su logit la media de los logits y dividiendo por el desvío estándar de todos
d) Dividiendo su logit por la suma de los logits de todas las palabras que componen el vocabulario completo del modelo

4. En el ejemplo de la imagen, ¿qué ocurre con «pez», la palabra de menor logit, al aplicar softmax?
![Tabla con logits, e elevado al logit y probabilidad de gato, perro, loro y pez, junto a un gráfico de barras](imagenes/iap2-nivel5-softmax-ejemplo.png)
a) Recibe una probabilidad negativa, porque su logit es −1
*b) Recibe la menor probabilidad, pero sigue siendo positiva
c) Recibe probabilidad 0, porque su logit es el menor del vocabulario
d) Recibe la misma probabilidad que loro, por tener logit parecido

### Tema: Tokenización: ¿cuál es la unidad básica?

5. ¿Cuáles de las siguientes unidades básicas de tokenización se presentan en la clase con un problema?
*a) Palabras completas
b) Fragmentos (subwords)
*c) Caracteres

6. ¿Qué problema presenta usar palabras completas como unidad básica de tokenización?
a) Exige construir el vocabulario fusionando los pares de símbolos más frecuentes dentro del corpus
b) Divide cada palabra en fragmentos como anti, uber e ización
*c) Es poco eficiente, porque no está claro qué hacer con las palabras desconocidas
d) Se pierde totalmente el significado de lo que se lee

7. ¿Qué problema presenta usar caracteres como unidad básica de tokenización?
*a) Se pierde totalmente el significado
b) Exige fusionar pares de símbolos frecuentes
c) Trata cada palabra como un símbolo único
d) Es poco eficiente

8. ¿Cuál de las siguientes unidades básicas de tokenización se aproxima a la morfología?
*a) Fragmentos (subwords)
b) Las palabras completas
c) Caracteres

9. En el ejemplo de la clase, ¿cómo se divide la palabra «antiuberización» en fragmentos?
a) antiuberi · zación
b) an · ti · uber · ización
*c) anti · uber · ización
d) antiu · beri · zación

10. ¿Para qué se usa BPE (Byte-Pair Encoding)?
a) Para llevar cada vector a media 0 y desvío estándar 1
b) Para convertir cada token en su embedding mediante una matriz entrenada
c) Para asignar probabilidades a cada palabra del vocabulario completo del modelo
*d) Para construir el vocabulario de fragmentos a partir de frecuencias

11. ¿Con qué vocabulario base empieza BPE, que trabaja con textos en UTF-8?
a) Con todas las palabras distintas que aparecen en el corpus
b) Con las filas de la matriz E
c) Con las sílabas más frecuentes que aparecen en el corpus
*d) Con los 256 valores posibles de un byte

12. ¿Qué se hace en BPE con los pares de símbolos más frecuentes de un corpus?
a) Se separan en los bytes individuales del corpus
b) Se descartan para quedarse con los símbolos más raros
*c) Se fusionan iterativamente en un nuevo token
d) Se reemplazan por la palabra completa que los contiene

13. En el ejemplo de BPE de la clase, ¿qué fusión aparece luego de t+h → th?
a) Fusionar th+t en tht al final del proceso
*b) Fusionar th+e para formar the
c) Fusionar h+e en he
d) Fusionar t+e para formar te

14. ¿Hasta cuándo se repiten las fusiones de BPE?
a) Hasta que cada palabra sea un único token
b) Hasta que no queden pares de símbolos en el corpus
c) Hasta que la pérdida se estabiliza por completo
*d) Hasta alcanzar el tamaño de vocabulario deseado

### Tema: Embeddings

15. ¿Cómo se obtiene el embedding de un token a partir de su id?
*a) Seleccionando su fila correspondiente en la matriz de embeddings
b) Aplicando softmax sobre su id y la matriz de embeddings
c) Multiplicando su id por la matriz feedforward
d) Sumando todas las columnas de la matriz de embeddings entre sí

16. En la matriz de embeddings E ∈ R^{|Vocab|×d}, ¿qué representa d?
*a) La dimensión del embedding
b) La cantidad de tokens ingresados
c) El tamaño total del vocabulario
d) La cantidad de cabezas de atención

17. ¿Cómo se entrena la matriz de embeddings E?
a) Se fija de antemano y no se modifica durante el entrenamiento
b) Se calcula con el promedio de los vectores de cada token en el corpus
c) Se entrena aparte, mediante BPE, antes de entrenar el resto de la red
*d) Junto con el resto de los pesos de la red, punta a punta

18. ¿Qué información se le suma al token embedding?
a) La probabilidad que el modelo le asigna a cada token
b) La distribución de probabilidad sobre todo el vocabulario
c) El embedding del token que viene a continuación
*d) Un vector que codifica el lugar del token en la secuencia

19. ¿Cómo se obtiene el embedding de entrada x_i del i-ésimo token?
*a) Sumando el token embedding y el positional embedding
b) Restando el positional embedding al token embedding
c) Concatenando el token embedding con el positional embedding
d) Multiplicando el token embedding por el positional embedding de la secuencia

### Tema: Atención: intuición central

20. ¿Por qué los embeddings estáticos no codifican bien el significado de las palabras?
a) Porque el vocabulario fijo no incluye palabras desconocidas
b) Porque cada token se representa con una dimensión d demasiado chica
c) Porque la información posicional se suma al token embedding
*d) Porque el significado de las palabras depende del contexto

21. Al leer una oración de izquierda a derecha, ¿qué vamos haciendo con la interpretación de las palabras?
a) La fijamos desde la primera lectura y no la cambiamos más
b) La reemplazamos por la del token que viene a continuación
*c) La vamos refinando a medida que tenemos más información del contexto
d) La descartamos cada vez que aparece un token nuevo en la oración

22. ¿Qué es la atención según la clase?
a) Un mecanismo que lleva cada vector a media 0 y desvío estándar 1 para estabilizar el aprendizaje
b) Un mecanismo que convierte los logits en una distribución de probabilidades sobre todo el vocabulario de palabras
*c) Un mecanismo que pondera y combina representaciones de tokens en el contexto para enriquecer la de un token dado
d) Un mecanismo que asigna probabilidad 1 a la próxima palabra y 0 a las demás palabras del vocabulario completo del modelo

23. En el ejemplo «La grúa llevó el auto al taller», ¿en qué pasa a convertirse «taller» una vez enriquecido con el contexto?
a) Un curso
*b) Un taller mecánico
c) Un espacio de artesanías

### Tema: Atención: primera versión simplificada

24. En la primera versión simplificada de la atención, ¿cómo se calcula a_i?
![Capa de self-attention con entradas x1 a x5 y salidas a1 a a5, con flechas desde las entradas hacia cada salida](imagenes/iap2-nivel5-atencion-causal.png)
*a) Como la suma de los x_j con j ≤ i, cada uno multiplicado por un peso α_ij
b) Como el último x_j de la secuencia de entrada, multiplicado por un peso α_ij
c) Como el producto de todos los x_j de la secuencia, incluidos los posteriores a i
d) Como la suma de todos los x_j posteriores a i de la secuencia, cada uno multiplicado por α_ij

25. En la figura de la capa de self-attention causal, ¿a qué entradas atiende el modelo para calcular a_3?
![Capa de self-attention con entradas x1 a x5 y salidas a1 a a5, con flechas desde las entradas hacia cada salida](imagenes/iap2-nivel5-atencion-causal.png)
a) Solo a x_1 y x_2, sin la entrada x_3
b) A las cinco entradas, de x_1 a x_5
c) A x_3, x_4 y x_5, desde la entrada actual
*d) A x_1, x_2 y x_3, hasta la entrada actual

26. En la primera versión de la atención, ¿qué métrica de similitud se propone para score(x_i, x_j)?
a) La resta x_i − x_j
b) La suma x_i + x_j
*c) El producto escalar x_i · x_j
d) El producto de x_i por la matriz W^K

27. ¿Cómo se obtienen los α_ij a partir de los scores en la primera versión?
*a) Normalizándolos con softmax para todo j ≤ i
b) Dividiendo cada score por la cantidad de tokens N
c) Aplicando ReLU a cada score de toda la secuencia
d) Aplicando LayerNorm a cada score

28. En el ejemplo a_3 = α_31 x_1 + α_32 x_2 + α_33 x_3, ¿qué cumplen los pesos α?
*a) Cada uno está entre 0 y 1 y su suma es 1
b) Valen 1 para x_1, x_2 y x_3 por igual en toda la secuencia de entrada
c) Pueden ser negativos y su suma total es igual a 0 para cualquier secuencia
d) Cada uno es mayor que 1 y su suma es igual a 3

### Tema: Atención: consultas, claves y valores

29. ¿Qué rol cumple el vector query q_i = x_i W^Q?
*a) Responde a qué busca x_i
b) Responde a qué ofrece x_j
c) Responde a qué información aporta x_j
d) Indica la posición

30. ¿Qué rol cumple el vector key k_j = x_j W^K?
*a) Responde a qué ofrece x_j para ser encontrado
b) Responde a qué información aporta x_j si es elegido
c) Responde a qué busca x_i
d) Responde a qué lugar ocupa x_j en la secuencia

31. ¿Qué rol cumple el vector value v_j = x_j W^V?
*a) Responde a qué información aporta x_j si es elegido
b) Responde a qué lugar ocupa x_j
c) Responde a qué busca x_i en la secuencia
d) Responde a qué ofrece x_j para ser encontrado

32. Con query, key y value, ¿cómo se calcula score(x_i, x_j)?
a) Con el producto escalar de q_i y v_j, luego dividido por √d_k
b) Con el producto de k_i y v_j, dividido por √d_k
*c) Con el producto escalar de q_i y k_j, dividido por √d_k
d) Con el producto escalar de q_i y k_j, multiplicado por √d_k

33. En la clase, ¿qué rótulos acompañan a la división del score por √d_k y a la matriz W^O, respectivamente?
a) Reshaping para la división y scaling
*b) Scaling para la división y reshaping para W^O
c) Scaling para la división y masking para W^O
d) Masking para la división y reshaping para la matriz W^O

34. ¿Qué vectores se ponderan con los α_ij para obtener a_i en la versión completa de la atención?
a) Las queries q_j de la secuencia
b) Las keys k_j de la secuencia
*c) Los values v_j, antes de multiplicar por W^O
d) Los embeddings x_j originales, como en la primera versión

35. ¿Qué forma tienen las matrices W^Q y W^K?
*a) De forma d × d_k
b) De forma d × d_v, como W^V
c) De forma d_k × d_v
d) De d_v × d

36. ¿Qué forma tiene la matriz W^V?
a) De forma d × d_k
b) De d_v × d
c) De forma d_k × d_v, igual que W^O
*d) De forma d × d_v

37. ¿Qué forma tiene la matriz W^O?
a) De d × d_k
b) De forma d_k × d_v, igual que W^V
*c) De forma d_v × d
d) De forma d × d_v

## Nivel 6: Fundamentos de LLMs #1 (parte 2)

### Tema: Self-attention

1. En la figura de self-attention causal que calcula a_3, el tercer elemento de la secuencia, ¿qué se genera para cada entrada en el primer paso?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
a) Los pesos α mediante softmax
b) Los scores divididos por √d_k
*c) Los vectores key, query y value
d) La salida de self-attention reformada a 1 × d

2. En la figura que calcula a_3 con self-attention causal, ¿qué se compara con las keys de x_1, x_2 y x_3 en el segundo paso?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
a) La salida a_3
*b) La query de x_3
c) El embedding del cuarto token x_4
d) El value de x_3

3. En la figura que calcula a_3 con self-attention causal, ¿qué se hace con el score escalar luego de comparar la query con las keys?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
a) Se lo suma
*b) Se lo divide por √d_k
c) Se lo reforma a 1 × d
d) Se lo multiplica por x_3

4. En la figura que calcula a_3 con self-attention causal, ¿qué se hace con los scores una vez divididos por √d_k?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
a) Se los reforma a 1 × d
*b) Se los convierte en pesos α_{3,j} mediante softmax
c) Se los suma directamente entre sí
d) Se los multiplica por W^O

5. En la figura que calcula a_3 con self-attention causal, ¿qué se hace con cada vector value una vez obtenidos los pesos α?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
*a) Se lo pondera
b) Se lo divide por √d_k
c) Se genera
d) Se lo reforma

6. En la figura que calcula a_3 con self-attention causal, ¿qué se hace con los vectores value ya ponderados?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
a) Se descartan
*b) Se los suma
c) Se los compara con keys
d) Se los pasa por softmax

7. En la figura que calcula a_3 con self-attention causal, ¿a qué dimensión se reformatea el vector sumado para obtener la salida a_3?
![Cálculo de a_3 con self-attention causal en ocho pasos numerados, desde x_1, x_2 y x_3 hasta la salida](imagenes/iap2-nivel6-self-attention-a3.png)
a) Una fila de 1 × |Vocab|
b) Un vector 1 × d_v
c) Una fila de 1 × d_k de cada cabeza
*d) Una fila de 1 × d

### Tema: Multi-head attention

8. ¿Cómo operan las A cabezas de atención de una capa multi-head?
a) En paralelo, y todas atienden de la misma manera al contexto completo
b) Solo una está activa por token, elegida con softmax en cada capa
c) Una detrás de otra, y cada una usa la salida de la anterior
*d) En paralelo, y cada una atiende de manera distinta al contexto

9. ¿Qué tiene cada cabeza de atención en multi-head attention?
a) Su propia matriz de embeddings de entrada
b) Su propia matriz W^O de proyección final
c) Sus propios parámetros γ y β de normalización por cada capa
*d) Sus propias matrices de pesos de query, key y value

10. ¿Qué se hace con las salidas de las cabezas de atención para obtener a_i?
*a) Se concatenan y se proyectan con W^O
b) Se suman elemento a elemento y se enmascaran
c) Se eligen por softmax y se reformatean
d) Se promedian y se normalizan

11. Si d_v = d/A, ¿qué forma tiene la matriz W^O en multi-head attention?
a) Rectangular, de forma d × A
b) Rectangular, de A × d_v
c) Un solo vector
*d) Cuadrada, de d × d

### Tema: Transformer Block

12. ¿Cuáles de los siguientes componentes combina cada bloque Transformer según la clase?
![Bloque Transformer en las posiciones i-2, i-1 e i, con residual stream, layer norms, multi-head attention y feedforward](imagenes/iap2-nivel6-bloque-transformer.png)
*a) Layer Norm
b) Language Model Head
*c) Multi-head attention
d) Pérdida de entropía cruzada
*e) Feed forward
*f) Conexiones residuales

13. ¿Qué se hace con los bloques Transformer en el modelo?
a) Se reemplazan por uno
*b) Se apilan unos sobre otros
c) Se reducen a uno solo con pesos compartidos
d) Se aplican en paralelo y se concatenan

14. En la versión del bloque Transformer que usa la clase (prenorm), ¿dónde ocurren las layer norms?
![Bloque Transformer en las posiciones i-2, i-1 e i, con residual stream, layer norms, multi-head attention y feedforward](imagenes/iap2-nivel6-bloque-transformer.png)
*a) Antes de las capas de atención y de feedforward
b) Después de las capas de atención y de feedforward de cada bloque
c) Solo después de la última capa de feedforward
d) Solo antes de la primera capa de atención

15. Según la figura del bloque Transformer, ¿qué módulo es el único sensible a la información de otras posiciones previas de tokens?
![Bloque Transformer en las posiciones i-2, i-1 e i, con residual stream, layer norms, multi-head attention y feedforward](imagenes/iap2-nivel6-bloque-transformer.png)
a) Feedforward
b) La layer norm
*c) La atención
d) La conexión residual

### Tema: Transformer Block: Layer Norm y Feedforward

16. ¿A qué valores lleva LayerNorm las componentes del vector x?
a) A media 1 y desvío estándar igual a √d_k
b) A media 0 y desvío estándar igual a d
*c) A media 0 y desvío estándar 1
d) A media 1 y desvío estándar de 0

17. ¿Cómo se aplica la normalización de LayerNorm?
a) Sobre todos los vectores a la vez
b) Solo sobre el último vector, para estabilizar el aprendizaje
c) Sobre cada matriz de pesos, para estabilizar el aprendizaje
*d) De forma independiente para cada vector, para estabilizar el aprendizaje

18. ¿Qué son γ y β en LayerNorm?
a) Constantes fijas que se eligen de antemano en cada capa
b) La media y el desvío estándar de las componentes de x
c) Las matrices de pesos del feedforward de cada bloque Transformer
*d) Vectores de parámetros que se aprenden, uno por capa

19. ¿Qué es el feedforward de un bloque Transformer?
a) Una red fully-connected de 1 sola capa, sin ninguna capa oculta
b) Una red recurrente que procesa los tokens de a uno, en orden
*c) Una red fully-connected de 2 capas, con una capa oculta de dimensión d_ff
d) Una capa de atención con A cabezas que trabajan en paralelo

20. En Feedforward(x) = W_2 · ReLU(W_1 · x + b_1) + b_2, ¿qué función de activación se aplica entre las dos capas?
a) La función de softmax
b) Una capa LayerNorm
*c) La función ReLU
d) La máscara

21. Si la atención mezcla información contextual entre tokens, ¿qué hace la feedforward según la intuición de la clase?
a) Normaliza cada vector a media 0 y desvío estándar 1
b) Convierte los logits en probabilidades sobre el vocabulario
*c) Almacena o codifica conocimiento sobre los tokens
d) También mezcla información contextual entre tokens

22. ¿Cómo interactúan la atención y la feedforward con el residual stream?
![Bloque Transformer en las posiciones i-2, i-1 e i, con residual stream, layer norms, multi-head attention y feedforward](imagenes/iap2-nivel6-bloque-transformer.png)
a) Lo normalizan a media 0 y desvío estándar 1 en cada bloque
b) Lo reemplazan por completo con su propia salida en cada bloque del modelo
c) Lo recorren una sola vez, al final de todos los bloques del modelo
*d) Le agregan (suman) información, y cada componente lee de él y escribe sobre él

### Tema: Forma matricial

23. En la forma matricial, ¿qué representa X ∈ R^{N×d}?
a) Los embeddings de los d tokens del vocabulario completo
b) Los logits de los N tokens siguientes de la secuencia
c) Los pesos de las N cabezas de atención de la capa multi-head
*d) Los embeddings de los N tokens de la secuencia de entrada

24. En la forma matricial, ¿cómo se obtienen Q, K y V?
*a) Multiplicando X por W^Q, W^K y W^V, respectivamente
b) Multiplicando X por W^O siempre
c) Aplicando softmax sobre X siempre
d) Multiplicando X por sí misma y por su transpuesta

25. En la forma matricial de la atención, ¿qué se le suma a QK^T/√d_k dentro del softmax?
a) La matriz de proyección W^O
*b) La matriz M
c) La matriz V de values
d) La matriz E

26. En la forma matricial, ¿cómo se calcula head?
a) Con el softmax de QK^T/√d_k + M, multiplicado luego por la matriz Q
*b) Con el softmax de QK^T/√d_k + M, multiplicado por la matriz V
c) Con el softmax de QK^T/√d_k + M, multiplicado por K
d) Con el softmax de QK^T/√d_k + M, multiplicado por W^Q

27. En la forma matricial, ¿cómo se obtiene A a partir de head?
a) Aplicando LayerNorm a head
*b) Multiplicando head por W^O
c) Multiplicando head por la transpuesta E^T
d) Sumando X

28. En la práctica, ¿qué forma se suele buscar que tengan las matrices W^Q, W^K, W^V y W^O?
a) Todas de forma d × A, una por cabeza
b) Todas de forma N × d, como la matriz X
*c) Todas cuadradas, de d × d
d) Todas de forma |Vocab| × d, como E

### Tema: Máscara causal

29. En la matriz de la imagen, ¿qué oculta la máscara causal?
![Matriz de 5×5 con ceros en celdas verdes y −∞ en celdas rosadas, con i (query) en las filas y j (key) en las columnas](imagenes/iap2-nivel6-mascara-causal.png)
*a) La información futura
b) La información de las keys anteriores
c) La información de la query
d) Los logits

30. ¿Qué valor y qué posiciones corresponden a las celdas rosadas de la matriz M de la imagen?
![Matriz de 5×5 con ceros en celdas verdes y −∞ en celdas rosadas, con i (query) en las filas y j (key) en las columnas](imagenes/iap2-nivel6-mascara-causal.png)
a) El valor 0, en las posiciones donde j > i
*b) El valor −∞, en las posiciones donde j > i
c) El valor −∞, en las posiciones donde j ≤ i
d) El valor 1, en las posiciones de la diagonal principal

31. En la matriz M de la imagen, ¿qué valor tiene M en las celdas verdes?
![Matriz de 5×5 con ceros en celdas verdes y −∞ en celdas rosadas, con i (query) en las filas y j (key) en las columnas](imagenes/iap2-nivel6-mascara-causal.png)
a) El valor −∞
b) El valor 1 siempre
c) El valor S_ij
*d) 0

32. ¿Qué probabilidad le asigna el softmax a las posiciones con −∞?
a) La misma que las demás
b) Una probabilidad negativa
c) Máxima
*d) Probabilidad 0

33. Con la máscara M, ¿qué valor queda en α_ij cuando j > i?
a) Conserva su valor
b) Pasa a valer −∞
c) Pasa a valer 1
*d) Queda en 0

34. Con la máscara M, cuando j > i, ¿qué ocurre con el value v_j en el cálculo de a_i?
a) Aporta a a_i con peso máximo
*b) No aporta nada a a_i
c) Se reemplaza por −∞ en a_i
d) Aporta a a_i como los demás

## Nivel 7: Fundamentos de LLMs #1 (parte 3)

### Tema: Language Model Head

1. Para estimar P(tres | No hay dos sin), ¿qué vector se usa para predecir w_5?
a) h^L_5
b) El vector h^1_4
c) El vector h^L_1 inicial
*d) El vector h^L_4

2. ¿Qué información codifica h^L_N?
a) La posición del token N en la secuencia
b) La distribución sobre el vocabulario
c) La pérdida de entropía cruzada del token N
*d) Información contextual útil para predecir w_{N+1}

3. ¿Qué convierte la LM Head a h^L_N?
a) En el embedding del token que viene luego en la secuencia
*b) En una distribución de probabilidad sobre las |Vocab| palabras
c) En los pesos de atención de la secuencia
d) En la matriz de embeddings E del modelo

4. ¿Cómo se obtienen los logits u en la LM Head?
a) Aplicando softmax
b) Multiplicando h^L_N por la matriz W^O
c) Multiplicando h^L_N por E
*d) Multiplicando h^L_N por E^T

5. En la figura de la LM Head, ¿qué forma tiene la unembedding layer U y qué relación guarda con la matriz de embeddings E?
![Esquema de la Language Model Head con la unembedding layer, los logits, el softmax y las probabilidades de palabras](imagenes/iap2-nivel7-lm-head.png)
a) Forma |V| × d, y es igual a la matriz E
b) Forma d × d, y se entrena aparte de la matriz E
*c) Forma d × |V|, y es la transpuesta de la matriz E
d) Forma 1 × |V|, y es la inversa de la matriz E

6. En la figura de la LM Head, ¿en qué orden se transforma h^L_N hasta obtener las probabilidades de las palabras?
![Esquema de la Language Model Head con la unembedding layer, los logits, el softmax y las probabilidades de palabras](imagenes/iap2-nivel7-lm-head.png)
a) Logits → unembedding layer → softmax → probabilidades
b) Softmax → logits → unembedding layer
c) Unembedding layer → softmax
*d) Unembedding layer → logits → softmax

7. Una vez obtenida la distribución y = softmax(u), ¿qué se hace?
a) Se aplica antes una máscara causal sobre y
b) Se suma y al residual stream de la última capa del modelo
c) Se multiplica y por la matriz W^O de salida
*d) Se muestrea el siguiente token ŵ_{N+1} a partir de y

8. ¿Hacia qué empuja el entrenamiento a h^L_n?
a) A tener norma igual a cero en cada capa del modelo
*b) A parecerse al embedding del token que viene a continuación
c) A tener media 0 y desvío estándar 1 en cada capa
d) A parecerse al embedding del token que vino justo antes que él

9. En la decodificación en inferencia, ¿qué token elige el método greedy?
*a) El token más probable
b) Un token al azar del vocabulario
c) Al azar entre los k más probables
d) El menos probable

10. En la decodificación en inferencia, ¿cómo elige el token el método Random / Top-k random?
*a) Al azar sobre los k más probables, según la distribución del softmax
b) Toma el token que ocupa la posición k del vocabulario
c) Siempre toma el token más probable según el softmax
d) Al azar sobre todo el vocabulario, con igual probabilidad

11. ¿Cómo se calcula y al usar una temperatura τ?
*a) y = softmax(u / τ)
b) y = u / τ
c) y = softmax(τ)
d) y = softmax(u) multiplicado por τ

12. Con una temperatura τ < 1, ¿hacia qué tiende la distribución y?
a) Queda igual
*b) Hacia la decodificación greedy
c) Hacia probabilidad 0 para cada token
d) Hacia la decodificación al azar

13. Con una temperatura τ > 1, ¿hacia qué tiende la distribución y?
*a) Hacia la decodificación al azar
b) Hacia la decodificación greedy
c) Queda idéntica a softmax(u)
d) Hacia probabilidad 1 para el token más probable

14. ¿Cuáles de los siguientes métodos de decodificación en inferencia figuran en la clase?
*a) Greedy
b) Teacher forcing
*c) Random / Top-k random
d) Máscara causal
*e) Temperatura

### Tema: Transformer LLM

15. ¿Qué tipo de modelo de lenguaje es el Transformer LLM de la imagen?
![Esquema de un Transformer LLM con el token de entrada w_i, el input encoding, las capas 1 a L, la LM Head y el token w_{i+1}](imagenes/iap2-nivel7-transformer-llm.png)
a) Encoder-only
*b) Un modelo decoder-only
c) Un modelo de tipo encoder-decoder
d) Una red recurrente

16. Según la figura del Transformer LLM, ¿qué hace el modelo con el token de entrada w_i?
![Esquema de un Transformer LLM con el token de entrada w_i, el input encoding, las capas 1 a L, la LM Head y el token w_{i+1}](imagenes/iap2-nivel7-transformer-llm.png)
a) Lo mapea a un token anterior w_{i−1} con un bloque
b) Lo reemplaza por su embedding sin pasar por bloques
c) Lo clasifica en una categoría gramatical mediante la LM Head
*d) Lo mapea, apilando bloques Transformer, a un token siguiente predicho w_{i+1}

17. En la figura del Transformer LLM, ¿qué módulos atraviesa el vector dentro de la capa L y después de ella, de abajo hacia arriba, hasta llegar a la LM Head?
![Esquema de un Transformer LLM con el token de entrada w_i, el input encoding, las capas 1 a L, la LM Head y el token w_{i+1}](imagenes/iap2-nivel7-transformer-llm.png)
*a) Layer norm, atención, layer norm, feedforward y una layer norm extra
b) Atención, layer norm, feedforward, layer norm y una capa de embeddings
c) Layer norm, feedforward, layer norm, atención y una máscara causal extra
d) Atención, feedforward, layer norm y luego una segunda LM Head

### Tema: Entrenamiento: pérdida de entropía cruzada

18. En la pérdida de entropía cruzada, ¿qué vale y[w]?
*a) 1 para la próxima palabra w_{N+1} y 0 para las demás
b) 0 para la próxima palabra w_{N+1} y 1 para las demás palabras
c) 1 para todas las palabras del vocabulario completo
d) La probabilidad que el modelo le asigna a w

19. ¿A qué se reduce L_CE(ŷ, y) cuando y vale 1 solo para la próxima palabra w_{N+1}?
a) A −log de la probabilidad asignada a la palabra más probable
b) A la suma de los logaritmos de todas las probabilidades de la distribución ŷ completa
c) Al logaritmo de la probabilidad más alta que predice el modelo
*d) A −log ŷ[w_{N+1}], el logaritmo negativo de la probabilidad asignada a la palabra correcta

20. Si el modelo recibe «no hay dos sin», ¿cómo es la pérdida cuando le asigna probabilidad 0,9 a «tres» y cuando le asigna 0,1?
a) Baja en ambos casos
b) Alta con 0,9 y muy baja con 0,1
*c) Baja con 0,9 y alta con 0,1
d) Alta en ambos casos

21. ¿Qué recibe como entrada el modelo durante el entrenamiento con teacher forcing?
a) Los T tokens, pero con el último ocultado
*b) Una secuencia correcta completa de T tokens
c) Solo el primer token
d) La secuencia que el propio modelo fue generando

22. ¿Qué se produce en una sola pasada con teacher forcing?
a) T pares y un único gradiente
*b) T pares (predicción, token correcto) y T gradientes
c) Un único par (predicción, token correcto) y T gradientes
d) Un único par (predicción, token correcto) y un único gradiente

23. ¿Cómo se define la pérdida completa en el entrenamiento?
a) Como la cross-entropy del último token de la secuencia de entrada completa
b) Como el máximo de la cross-entropy entre todas las T posiciones del modelo
c) Como la suma de todas las probabilidades que el modelo asigna a los T tokens dados
*d) Como el promedio sobre las T posiciones de la cross-entropy entre predicción y token correcto

### Tema: Algunos números

24. Según la observación de la clase, ¿cómo se relaciona el largo del contexto N con el número de parámetros del modelo?
a) Crece en proporción directa con N
b) Crece con el cuadrado de N
*c) No depende del largo del contexto N
d) Disminuye a medida que aumenta N

25. Según la observación de la clase, ¿qué aspecto del modelo sí se ve afectado por el largo del contexto N?
a) El número de parámetros del modelo, que crece con N
b) El tamaño del vocabulario |V|, usado por la LM Head
*c) El tiempo de cómputo, ya que la inferencia es O(N²)
d) La dimensión d de los embeddings de cada token

26. En la tabla de configuraciones de la imagen, ¿qué representa la columna L?
![Tabla con modelos de lenguaje (GPT-2 XL, GPT-3, Qwen3 y Llama 3.1) y las columnas Year, L, d, A, d_ff, |V|, Context y Params](imagenes/iap2-nivel7-tabla-configuraciones.png)
a) La dimensión del modelo completo
b) El número de cabezas de atención
*c) El número de capas
d) El tamaño del vocabulario

27. En la tabla de configuraciones de la imagen, ¿qué representa la columna d?
![Tabla con modelos de lenguaje (GPT-2 XL, GPT-3, Qwen3 y Llama 3.1) y las columnas Year, L, d, A, d_ff, |V|, Context y Params](imagenes/iap2-nivel7-tabla-configuraciones.png)
a) El número de capas del modelo
b) La dimensión del bloque feedforward
c) El largo del contexto
*d) La dimensión del modelo

28. En la tabla de configuraciones de la imagen, ¿qué representa la columna A?
![Tabla con modelos de lenguaje (GPT-2 XL, GPT-3, Qwen3 y Llama 3.1) y las columnas Year, L, d, A, d_ff, |V|, Context y Params](imagenes/iap2-nivel7-tabla-configuraciones.png)
a) El número de capas apiladas
*b) El número de cabezas de atención
c) La dimensión de la capa feedforward del bloque
d) El tamaño del vocabulario del modelo

29. En la tabla de configuraciones de la imagen, ¿qué representa la columna d_ff?
![Tabla con modelos de lenguaje (GPT-2 XL, GPT-3, Qwen3 y Llama 3.1) y las columnas Year, L, d, A, d_ff, |V|, Context y Params](imagenes/iap2-nivel7-tabla-configuraciones.png)
a) La dimensión del modelo completo
b) El número de cabezas de atención
c) El largo del contexto máximo
*d) La dimensión del feedforward

30. En la tabla de configuraciones de la imagen, ¿qué representa la columna |V|?
![Tabla con modelos de lenguaje (GPT-2 XL, GPT-3, Qwen3 y Llama 3.1) y las columnas Year, L, d, A, d_ff, |V|, Context y Params](imagenes/iap2-nivel7-tabla-configuraciones.png)
a) El número de capas del modelo
b) La dimensión de la capa feedforward
*c) El tamaño del vocabulario
d) El número de cabezas de atención

31. ¿Cuáles de las siguientes columnas figuran en la tabla de configuraciones de modelos de lenguaje transformer de la clase?
a) Costo de entrenamiento
*b) Año del modelo
*c) Cantidad de parámetros
d) Cantidad de GPUs utilizadas
*e) Largo del contexto

32. ¿Cuáles de los siguientes modelos figuran en la tabla de configuraciones de modelos de lenguaje transformer de la clase?
*a) GPT-2 XL
b) ResNet-50
*c) Qwen3-0.6B
*d) GPT-3
e) AlexNet
*f) Qwen3-32B

33. ¿Cuáles de los siguientes modelos figuran también en la tabla de configuraciones de modelos de lenguaje transformer de la clase?
a) Stable Diffusion 1.5
*b) Llama 3.1 405B
c) Segment Anything 2
*d) Llama 3.1 8B
e) YOLO versión 3

## Nivel 8: Fundamentos de LLMs #2 (parte 1)

### Tema: Arquitecturas de Transformers

1. ¿Qué hace un transformer decoder?
![Tres esquemas rotulados Decoder, Encoder y Encoder-Decoder, con las conexiones entre tokens de entrada y de salida](imagenes/iap2-nivel8-arquitecturas.png)
a) Clasifica los tokens de la entrada sin generar ningún texto
b) Procesa toda la entrada con un encoder y genera la salida con cross-attention
*c) Toma una serie de tokens y genera iterativamente un token de salida por vez
d) Mapea una secuencia de input embeddings a embeddings contextuales de igual longitud

2. ¿Por qué se dice que los decoders son modelos generativos y causales?
a) Porque atienden al encoder con cross-attention
*b) Porque la información fluye de izquierda a derecha
c) Porque la información fluye de derecha a izquierda del texto
d) Porque cada token recibe la información de toda la entrada

3. ¿Qué hace un transformer encoder?
![Tres esquemas rotulados Decoder, Encoder y Encoder-Decoder, con las conexiones entre tokens de entrada y de salida](imagenes/iap2-nivel8-arquitecturas.png)
a) Genera la salida token por token, prestándole atención a otro módulo
*b) Mapea una secuencia de input embeddings a embeddings contextuales de la misma longitud
c) Toma una serie de tokens y genera iterativamente un token de salida por vez
d) Calcula la probabilidad de la palabra siguiente a partir de los tokens anteriores

4. ¿Qué información contienen los embeddings contextuales que produce un encoder?
*a) La de toda la entrada
b) Ninguna del contexto
c) La de los tokens ya generados
d) Solo la de los tokens anteriores

5. ¿Para qué se usa un encoder, que no genera texto?
a) Para prestarle atención a un decoder mediante la cross-attention
b) Para generar la secuencia de salida un token por vez
c) Para predecir iterativamente el siguiente token de una secuencia
*d) Para clasificar o tomar decisiones sobre los tokens, como sentimiento o NER

6. ¿Cómo funciona un modelo encoder-decoder?
![Tres esquemas rotulados Decoder, Encoder y Encoder-Decoder, con las conexiones entre tokens de entrada y de salida](imagenes/iap2-nivel8-arquitecturas.png)
a) Un decoder procesa toda la secuencia de entrada y un encoder genera la salida un token por vez
*b) Un encoder procesa toda la entrada y un decoder genera la salida un token por vez
c) Un solo módulo causal procesa la entrada y genera la salida de izquierda a derecha
d) Dos encoders procesan la entrada y la salida, sin generar texto token por token

7. ¿Mediante qué mecanismo el decoder de un encoder-decoder le presta atención al encoder?
a) Self-attention causal
b) Masked language modeling
c) Denoising
*d) La cross-attention

8. ¿Cuáles de los siguientes modelos figuran como ejemplos de decoder en la clase?
*a) GPT
b) BERT
*c) Claude
d) Whisper
*e) Llama

9. ¿Cuáles de los siguientes modelos figuran como ejemplos de encoder en la clase?
*a) BERT
b) GPT
*c) RoBERTa
d) BART
*e) RoBERTuito

10. ¿Cuáles de los siguientes modelos figuran como ejemplos de encoder-decoder en la clase?
a) Llama
*b) BART
c) RoBERTa
*d) Whisper

11. Según la figura de las tres arquitecturas, ¿qué produce un encoder como salida?
![Tres esquemas rotulados Decoder, Encoder y Encoder-Decoder, con las conexiones entre tokens de entrada y de salida](imagenes/iap2-nivel8-arquitecturas.png)
a) Una serie de tokens generada de a uno por vez
b) Una única etiqueta para toda la entrada
c) Una distribución de probabilidad sobre el vocabulario del siguiente token
*d) Una codificación: una representación vectorial de cada token

### Tema: Encoders bidireccionales (BERT)

12. ¿Qué usan los encoders bidireccionales para mapear los input embeddings (x_1, …, x_n) a los output embeddings (h_1, …, h_n)?
a) Una red recurrente
b) Cross-attention
*c) La self-attention
d) Una máscara causal

13. ¿Qué diferencia a los output embeddings de BERT de los de GPT?
a) Se generan de a uno por vez, como los tokens de salida de un decoder
*b) Contienen información contextual de toda la secuencia, no solo de los tokens anteriores
c) Contienen información contextual solo de los tokens anteriores, como en GPT
d) Tienen una longitud distinta a la de la secuencia de input embeddings

14. ¿Para qué tareas son útiles los encoders bidireccionales?
*a) Para hacer clasificaciones o tomar decisiones basadas en los tokens y sus contextos
b) Para generar texto de izquierda a derecha, un token por vez
c) Para traducir una secuencia del source language al target language
d) Para predecir el token siguiente a partir de los tokens anteriores

15. En la figura del transformer causal (a) de self-attention, ¿qué información usa el cálculo de la atención en cada token?
![Dos capas de self-attention con entradas x1 a x5, una causal (a) y una bidireccional (b), con las conexiones hacia a3](imagenes/iap2-nivel8-atencion-causal-bidireccional.png)
*a) Solo la información vista antes en el contexto
b) Solo la de los output embeddings calculados
c) La información de todos los tokens, tanto anteriores como posteriores
d) Solo la información de los tokens que siguen al token actual

16. En la figura del modelo de atención bidireccional (b), ¿a qué entradas atiende el modelo al procesar cada token?
![Dos capas de self-attention con entradas x1 a x5, una causal (a) y una bidireccional (b), con las conexiones hacia a3](imagenes/iap2-nivel8-atencion-causal-bidireccional.png)
a) Solo a las entradas posteriores al token actual
b) Solo a las entradas anteriores al token actual
*c) A todas las entradas, tanto las anteriores como las posteriores
d) Solo al token actual de la secuencia

### Tema: Implementación: se elimina la máscara

17. ¿Cómo se implementa la atención bidireccional a partir de la atención causal?
a) Reemplazando el softmax por una función que ignora los tokens futuros
*b) Eliminando la máscara que impide a la atención mirar a tokens futuros
c) Agregando una máscara que impide mirar a los tokens pasados
d) Sumando −∞ en todas las posiciones de la matriz de scores

18. En head = softmax(QK^T/√d_k + M)V del decoder causal, ¿qué valores tiene la matriz M?
a) 0 en las posiciones j > i y −∞ en las j ≤ i
b) −∞ en todas las posiciones de la matriz de scores QK^T
c) 0 en todas las posiciones de la matriz de scores QK^T
*d) 0 en las posiciones j ≤ i y −∞ en las posiciones j > i

19. En las matrices M de la imagen, donde cada fila corresponde a un token, ¿a qué posiciones puede atender el primer token en el Decoder y en el Encoder?
![Dos matrices de 5×5 rotuladas Decoder y Encoder, con celdas verdes de valor 0 y celdas rosadas de valor −∞](imagenes/iap2-nivel8-matrices-mascara.png)
*a) Solo a sí mismo en el Decoder, y a todas en el Encoder
b) A todas en el Decoder, y solo a sí mismo en el Encoder
c) A todas las posiciones, tanto en el Decoder como en el Encoder
d) Solo a sí mismo, tanto en el Decoder como en el Encoder

### Tema: Entrenamiento de BERT: Denoising + NSP

20. ¿En qué consiste el denoising en el entrenamiento de BERT?
*a) Se corrompe la entrada y el modelo debe reconstruir los tokens originales
b) Se genera el token siguiente y el modelo debe predecir si pertenece al texto
c) Se eliminan las oraciones repetidas y el modelo las genera
d) Se agrega ruido a los pesos y el modelo debe recuperar su valor original

21. ¿Cómo se corrompe la entrada en el denoising?
a) Se reordenan los tokens y se enmascara la segunda oración completa
b) Se eliminan algunos tokens de la secuencia y se acortan sus embeddings
*c) Algunos tokens se enmascaran y otros se reemplazan por otros al azar
d) Se enmascaran todos los tokens y se reemplaza solo el último al azar

22. ¿En qué consiste NSP (Next Sentence Prediction)?
a) Dada una oración, el modelo debe reconstruir los tokens que fueron enmascarados
b) Dadas dos oraciones, el modelo debe generar la oración que sigue a la segunda
c) Dadas dos oraciones, el modelo debe predecir si una de ellas contiene tokens al azar
*d) Dadas dos oraciones, el modelo debe predecir si la segunda sigue a la primera

23. ¿Con qué formato se arma un ejemplo de entrenamiento de BERT?
*a) [CLS] segmento A [SEP] segmento B [SEP]
b) [CLS] segmento A segmento B [SEP]
c) [SEP] segmento A [CLS] segmento B [CLS] [SEP]
d) [CLS] segmento A [CLS] segmento B

24. ¿Con qué dos objetivos simultáneos se preentrena BERT?
a) MLM y cross-attention
b) NSP y teacher forcing
*c) MLM y NSP
d) Solo NSP

25. ¿Desde qué vector se predice en BERT si el segmento B sigue al segmento A?
*a) Desde h[CLS]
b) Desde el último token de B
c) Desde el primer token de B
d) Desde el primer [SEP]

26. ¿Cómo se define la pérdida de preentrenamiento de BERT?
a) Solo como L_MLM, porque NSP no tiene pérdida
b) Como el producto de ambas pérdidas
c) Solo como L_NSP, porque MLM no tiene pérdida
*d) Como la suma de L_MLM y L_NSP

27. En la figura de la clase sobre masked language model training, ¿qué tokens entran en la pérdida de entrenamiento?
![Entrenamiento de masked language model con tokens enmascarados o reemplazados, un encoder bidireccional y pérdidas de entropía cruzada](imagenes/iap2-nivel8-mlm.png)
a) Solo los dos tokens que fueron enmascarados en la secuencia
b) Solo el único token que fue reemplazado por una palabra ajena
c) Todos los tokens de entrada de la secuencia de ejemplo
*d) Solo los tres tokens seleccionados: dos enmascarados y uno reemplazado por una palabra ajena

### Tema: Fine-tuning, ejemplo 1: clasificación de sentimiento

28. En el ejemplo de fine-tuning de clasificación de sentimiento, ¿cuál es la tarea?
![Encoder bidireccional con la entrada [CLS] entirely predictable and lacks energy y una cabeza de clasificación de sentimiento](imagenes/iap2-nivel8-sentimiento.png)
*a) Dada una oración, asignar una de las clases positivo, negativo o neutro
b) Dada una oración, generar su traducción completa al target language
c) Dados dos segmentos, predecir si el segundo sigue al primero
d) Dada una secuencia, asignar una etiqueta BIO a cada uno de sus tokens

29. ¿Qué head se usa en el ejemplo de clasificación de sentimiento?
![Encoder bidireccional con la entrada [CLS] entirely predictable and lacks energy y una cabeza de clasificación de sentimiento](imagenes/iap2-nivel8-sentimiento.png)
*a) Una single feedforward layer con W_c ∈ R^{d×3}
b) Una single feedforward layer con W_c ∈ R^{d×d} de salida
c) Una red recurrente con tres estados
d) Una capa de cross-attention con tres cabezas

30. ¿Qué vector se le pasa a la capa W_c en y = softmax(h^L_CLS W_c)?
![Encoder bidireccional con la entrada [CLS] entirely predictable and lacks energy y una cabeza de clasificación de sentimiento](imagenes/iap2-nivel8-sentimiento.png)
a) El promedio de los output embeddings de todos los tokens
b) El input embedding del token [CLS] de entrada
c) El output embedding del último token de la oración
*d) El output embedding del token [CLS]

31. ¿Cómo se entrena la clasificación de sentimiento?
a) Con texto sin etiquetas y una pérdida que suma MLM y NSP
b) Con datos etiquetados y una pérdida basada en la máscara causal
c) Con datos sin etiquetar y teacher forcing sobre cada token
*d) Con datos etiquetados y cross-entropy loss entre el output y la respuesta correcta

32. ¿Cómo se ajusta la matriz W_c en el fine-tuning de clasificación de sentimiento?
a) Se ajusta tras congelar la red
b) Se ajusta antes que el resto, que se entrena después
*c) Junto con el resto de la red
d) Se fija de antemano y no se ajusta

33. ¿Cuál es la alternativa más barata que menciona la clase para el fine-tuning de clasificación?
a) Ajustar solo el token [CLS], dejando W_c congelada
*b) Ajustar solo W_c, dejando el resto congelado
c) Ajustar todo el modelo salvo la matriz W_c
d) Ajustar solo A y B, dejando W_c congelada

34. ¿Qué alternativa mejor menciona la clase para el fine-tuning?
a) La técnica NSP de preentrenamiento
b) La capa cross-attention
c) La técnica QLoRA de cuantización
*d) La técnica LoRA de bajo rango

## Nivel 9: Fundamentos de LLMs #2 (parte 2)

### Tema: Fine-tuning, ejemplo 2: NER

1. ¿Cuál es la tarea de NER en el ejemplo de fine-tuning?
![Encoder bidireccional con la entrada [CLS] Jane Villanueva of United Airlines Holding discussed y una cabeza de NER sobre cada token](imagenes/iap2-nivel9-ner.png)
a) Dada una oración, generar la oración que sigue en el texto original
b) Dada una oración, predecir si la segunda sigue a la primera
*c) Dada una oración, asignar a cada token una etiqueta que forma una secuencia BIO
d) Dada una oración, asignar una única clase entre positivo, negativo o neutro

2. En el esquema de etiquetas BIO, ¿qué indica la etiqueta B?
a) Que está fuera de toda entidad
*b) El comienzo de una entidad
c) Que es el final de una entidad
d) La continuación de una entidad previa

3. En el esquema de etiquetas BIO, ¿qué indica la etiqueta I?
*a) La continuación de una entidad
b) Que es un lugar
c) Que está fuera de toda entidad
d) El comienzo de una nueva entidad

4. En el esquema de etiquetas BIO, ¿qué indica la etiqueta O?
a) Que el token es una organización cualquiera
b) El comienzo de una entidad cualquiera
c) La continuación de una entidad previa
*d) Que el token está fuera de toda entidad

5. En las etiquetas de NER del ejemplo, ¿qué indican PER y LOC?
*a) PER indica una persona y LOC indica un lugar
b) PER indica la continuación de una entidad y LOC su comienzo
c) PER indica un lugar y LOC indica una persona concreta
d) PER indica el comienzo de una entidad y LOC su fin

6. En la oración «Gabriel García Márquez nació en Aracataca, Colombia, y vivió en la Ciudad de México.», ¿qué etiquetas reciben «Gabriel García Márquez»?
*a) B-PER, I-PER e I-PER
b) B-PER, B-PER, B-PER
c) B-PER, I-PER y después O
d) B-LOC, I-LOC, I-LOC

7. En la oración «Gabriel García Márquez nació en Aracataca, Colombia, y vivió en la Ciudad de México.», ¿qué etiquetas reciben «Aracataca» y «Colombia»?
a) I-LOC e I-LOC, respectivamente
b) B-LOC e I-LOC, respectivamente
*c) B-LOC y B-LOC
d) B-PER y B-LOC, respectivamente

8. En la oración «Gabriel García Márquez nació en Aracataca, Colombia, y vivió en la Ciudad de México.», ¿qué etiquetas reciben «Ciudad de México»?
*a) B-LOC, I-LOC e I-LOC
b) B-LOC, I-LOC y después O
c) B-LOC, B-LOC, B-LOC
d) B-PER, I-PER, I-PER

9. En la oración «Gabriel García Márquez nació en Aracataca, Colombia, y vivió en la Ciudad de México.», ¿qué etiqueta reciben «nació» y «vivió»?
a) B-PER
*b) La etiqueta O
c) La etiqueta I-PER
d) La etiqueta B-LOC, de lugar

10. En el fine-tuning de NER, ¿qué head se usa?
![Encoder bidireccional con la entrada [CLS] Jane Villanueva of United Airlines Holding discussed y una cabeza de NER sobre cada token](imagenes/iap2-nivel9-ner.png)
a) Una red recurrente con k estados
b) Una capa de cross-attention con k cabezas
*c) Una single feedforward layer con W_NER ∈ R^{d×k}
d) Una single feedforward layer con W_NER ∈ R^{d×3}, como antes

11. En W_NER ∈ R^{d×k}, ¿qué representa k?
*a) El número de etiquetas para la tarea
b) La cantidad de entidades de la oración
c) La cantidad de tokens de toda la oración
d) La dimensión de los embeddings

12. En y_i = softmax(h^L_i W_NER), ¿qué es y_i?
![Encoder bidireccional con la entrada [CLS] Jane Villanueva of United Airlines Holding discussed y una cabeza de NER sobre cada token](imagenes/iap2-nivel9-ner.png)
a) Un vector con la etiqueta elegida para el token i
*b) Una distribución de probabilidades sobre las k etiquetas
c) Una distribución de probabilidades sobre los tokens del vocabulario
d) Una distribución de probabilidades sobre las posiciones de la oración

13. En t_i = argmax_k y_i[k], ¿cómo se elige la etiqueta del token i?
![Encoder bidireccional con la entrada [CLS] Jane Villanueva of United Airlines Holding discussed y una cabeza de NER sobre cada token](imagenes/iap2-nivel9-ner.png)
a) Se elige la etiqueta con menor probabilidad
*b) Se elige la etiqueta con mayor probabilidad
c) Se muestrea una etiqueta al azar según la distribución y_i
d) Se elige la del token anterior

14. ¿Cómo se ajusta la matriz W_NER en el fine-tuning de NER?
a) Solo cuando el resto de la red cambia
b) Junto con la matriz W_c de clasificación
c) Antes de entrenar el resto de la red
*d) Junto con el resto de la red, o bien sola

15. ¿Qué métodos menciona la clase como algo más sofisticado para elegir la secuencia más probable en NER?
*a) Viterbi y CRF
b) Greedy y Top-k random
c) NSP junto con MLM
d) LoRA y también QLoRA

16. En la figura de NER con un encoder bidireccional, ¿qué se le pasa a la NER head?
![Encoder bidireccional con la entrada [CLS] Jane Villanueva of United Airlines Holding discussed y una cabeza de NER sobre cada token](imagenes/iap2-nivel9-ner.png)
a) Solo el output vector del token [CLS]
b) Los input embeddings de todos los tokens
*c) El output vector de cada token de entrada
d) Solo el output vector del último token

17. En la figura de NER con un encoder bidireccional, ¿cómo se interpretan las etiquetas que reciben «United», «Airlines» y «Holding»?
![Encoder bidireccional con la entrada [CLS] Jane Villanueva of United Airlines Holding discussed y una cabeza de NER sobre cada token](imagenes/iap2-nivel9-ner.png)
*a) Como una única entidad de tipo organización
b) Como tres entidades de tipo organización, una por token
c) Como una persona seguida de dos lugares
d) Como tres tokens que quedan fuera de toda entidad

### Tema: Encoder-decoder: cross-attention

18. En cross-attention, ¿de dónde vienen las queries y de dónde las keys y values?
a) Las queries, keys y values vienen todas del mismo encoder
b) Las queries, keys y values vienen todas del mismo decoder
*c) Las queries vienen del decoder y las keys y values del encoder
d) Las queries vienen del encoder y las keys y los values vienen del decoder

19. En cross-attention, ¿cómo se calculan Q, K y V?
a) Q = H_enc W^Q, K = H_dec W^K, V = H_dec
b) Q = H_enc W^Q, K = H_enc W^K y V = H_dec W^V
*c) Q = H_dec W^Q, K = H_enc W^K, V = H_enc W^V
d) Q = H_dec W^Q, K = H_dec W^K y V = H_enc W^V

20. ¿Qué le permite cross-attention al decoder?
a) Ignorar las palabras del source language mientras genera en el target language
*b) Prestar atención a todas las palabras del source language mientras genera en el target language
c) Prestar atención solo a las palabras del target language que ya generó
d) Generar todas las palabras del target language en una sola pasada

21. ¿Cómo presta atención la multi-head attention en el encoder de un encoder-decoder?
a) Solo al token actual, porque no tiene masking
*b) Hacia adelante y hacia atrás, porque no tiene masking
c) Solo hacia atrás, porque usa una máscara causal
d) Solo hacia adelante, porque ve la entrada completa

### Tema: Encoder-decoder: traducción automática

22. Según el pie de la figura de traducción automática, ¿qué bloque usa el decoder?
![Encoder con la oración The green witch arrived y decoder con su entrada y salida en español, conectados por cross-attention](imagenes/iap2-nivel9-traduccion.png)
a) Un bloque sin self-attention, que solo atiende a todas las palabras del encoder
b) El mismo bloque que el encoder, sin ninguna capa extra de atención cruzada
c) Un bloque con una máscara bidireccional, sin cross-attention hacia las palabras del encoder
*d) Un bloque más potente, con una capa extra de cross-attention que atiende a las palabras del encoder

23. Según el pie de la figura de traducción automática, ¿qué bloques usa el encoder?
![Encoder con la oración The green witch arrived y decoder con su entrada y salida en español, conectados por cross-attention](imagenes/iap2-nivel9-traduccion.png)
a) Bloques sin self-attention
b) Bloques más potentes que los del decoder
*c) Los bloques transformer que ya vimos
d) Bloques con cross-attention

24. En la figura de traducción automática, ¿qué relación hay entre la entrada y la salida del decoder?
![Encoder con la oración The green witch arrived y decoder con su entrada y salida en español, conectados por cross-attention](imagenes/iap2-nivel9-traduccion.png)
a) La entrada es la secuencia que entra al encoder, sin cambios
*b) La entrada es la salida desplazada una posición hacia la derecha
c) La entrada es la salida escrita en orden inverso, de derecha a izquierda
d) La entrada y la salida son siempre idénticas, posición por posición

25. En la figura de traducción automática, ¿qué tokens especiales aparecen al comienzo de la entrada del decoder y al final de su salida?
a) </s> primero y <s> al final
b) [SEP] al comienzo y [CLS] al final del todo
c) [CLS] al comienzo y [SEP] al final
*d) <s> al comienzo y </s> al final

### Tema: LoRA (Low-Rank Adaptation)

26. En el fine-tuning completo, ¿qué debe aprender cada matriz W ∈ R^{d×d}?
*a) Una actualización ΔW del mismo tamaño que W
b) Dos matrices más chicas que W, en lugar de actualizar W
c) Una corrección de rango bajo de menor tamaño que W
d) Una actualización ΔW de tamaño r × r, con r ≪ d

27. ¿Qué se congela y qué se aprende en el fine-tuning con LoRA?
![Pesos preentrenados W de d×d, matrices A y B de rango r con sus inicializaciones, entrada x y salida h](imagenes/iap2-nivel9-lora.png)
a) Se congelan A y B y se aprende una actualización completa de W
*b) Se congela W y se aprende solo una corrección de rango bajo de la matriz
c) Se aprende una actualización completa de W y se congelan A y B
d) Se congela el modelo entero y se aprende solo la matriz de embeddings

28. En LoRA, ¿cómo se expresa la matriz adaptada W'?
![Pesos preentrenados W de d×d, matrices A y B de rango r con sus inicializaciones, entrada x y salida h](imagenes/iap2-nivel9-lora.png)
*a) W' = W + ΔW = W + AB
b) W' = W − ΔW = W − AB, restando la corrección
c) W' = W · ΔW = W · AB
d) W' = ΔW = AB, sin sumar W

29. En LoRA, ¿qué dimensiones tienen las matrices A y B?
![Pesos preentrenados W de d×d, matrices A y B de rango r con sus inicializaciones, entrada x y salida h](imagenes/iap2-nivel9-lora.png)
*a) A ∈ R^{d×r} y B ∈ R^{r×d}, con r ≪ d
b) A ∈ R^{d×r} y B ∈ R^{r×d}, con r mucho mayor que d
c) A ∈ R^{r×d} y B ∈ R^{d×r}, r ≪ d
d) A ∈ R^{d×d} y B ∈ R^{r×r}, siendo r ≪ d

30. Para una matriz W ∈ R^{d×d}, ¿cuántos parámetros se entrenan con LoRA con rango r?
a) r · r parámetros
b) d · d parámetros, como en W
*c) 2 · d · r parámetros
d) d · r² parámetros

31. ¿Qué intuición hay detrás de LoRA?
*a) Que la actualización necesaria para adaptar un modelo tiene rango intrínsecamente bajo
b) Que W debe actualizarse en tantas direcciones como su tamaño
c) Que la actualización necesaria para adaptar un modelo tiene rango intrínsecamente alto
d) Que hay que mover los pesos en todas las direcciones posibles del espacio

32. Según la intuición de LoRA, ¿en cuántas direcciones hace falta mover los pesos?
a) En ninguna dirección
b) En la mitad de las direcciones
c) En todas las direcciones
*d) Solo en unas pocas

33. En el entrenamiento con LoRA, ¿qué matrices reciben gradientes?
a) Solo B, mientras A y W quedan congeladas durante el entrenamiento
*b) Solo A y B, mientras W queda congelada
c) Solo W, mientras A y B quedan congeladas
d) W, A y B, sin matrices congeladas

34. Según la figura de LoRA, ¿cómo se inicializan las matrices B y A?
*a) B en cero y A con una distribución normal N(0, σ²)
b) B con una distribución normal N(0, σ²) y A inicializada en cero
c) Ambas con una distribución normal N(0, σ²), como W
d) Ambas inicializadas en cero, igual que la matriz W

35. En LoRA, ¿qué ventaja de eficiencia computacional se menciona?
a) La optimización no requiere calcular ningún gradiente
b) La optimización incluye W completa, además de A y B
c) La optimización se hace solo sobre W
*d) La optimización se hace solo sobre A y B

36. ¿Qué se dice de LoRA respecto del costo en inferencia?
a) Tiene un costo extra en inferencia, porque hay que calcular A y B aparte
*b) No tiene costo extra en inferencia, porque la corrección se fusiona con W
c) No tiene costo extra en inferencia, porque elimina el decoder entero
d) Tiene un costo extra en inferencia, porque se descongela W entera

37. ¿Qué se puede intercambiar por tarea, dominio o dialecto con LoRA?
a) Los datos de preentrenamiento
*b) Los adaptadores, que son chicos
c) El modelo base completo, que es chico
d) Las matrices W, que son chicas

38. ¿Cómo es el rendimiento de LoRA respecto del fine-tuning completo?
a) Peor en inferencia pero mejor en entrenamiento
b) Notablemente mejor, a cambio de más parámetros
c) Notablemente peor, a cambio de menos parámetros
*d) Comparable al del fine-tuning completo

39. ¿Cuáles de las siguientes ventajas de LoRA figuran en la clase?
*a) Mayor eficiencia computacional
b) Actualiza todos los pesos de W
*c) Sin costo extra en inferencia
d) Necesita una ΔW del tamaño de W
*e) Adaptadores chicos e intercambiables
*f) Rendimiento comparable al fine-tuning completo

40. ¿En qué consiste QLoRA?
a) Modelo base en 16 bits, sin ningún adaptador LoRA
b) Modelo base en 16 bits, adaptadores LoRA cuantizados a 4 bits
c) Modelo base cuantizado a 4 bits, adaptadores LoRA también cuantizados a 4 bits
*d) Modelo base cuantizado a 4 bits, adaptadores LoRA entrenados en 16 bits

41. ¿Qué ahorro y qué costo tiene QLoRA?
a) Acelera mucho el entrenamiento, a costa de usar más memoria
b) Gasta más memoria, a costa de un entrenamiento un poco más lento
*c) Ahorra memoria, a costa de un entrenamiento un poco más lento
d) Ahorra memoria sin ningún costo en el entrenamiento

42. ¿Qué permite hacer QLoRA?
a) Fine-tunear modelos sin necesidad de ninguna GPU
*b) Fine-tunear modelos muy grandes en una sola GPU
c) Fine-tunear modelos chicos en varias GPU a la vez
d) Preentrenar modelos desde cero sin datos etiquetados
`;
