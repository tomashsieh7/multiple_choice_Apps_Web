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

19. En la versión de Python del ejemplo, ¿qué rol cumplen re.findall(patron, linea) y Counter(ips).most_common(), respectivamente?
a) Reemplazar las coincidencias del patrón y eliminar las IPs repetidas del resultado
b) Validar que la línea cumpla el patrón y ordenar las IPs alfabéticamente
c) Contar las líneas del archivo y filtrar las IPs que se repiten en él
*d) Extraer todas las coincidencias del patrón y listarlas de mayor a menor frecuencia

20. En la versión SQL del ejemplo, ¿qué logran en conjunto regexp_matches con el patrón, GROUP BY m[1], count(*) y ORDER BY n DESC?
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

29. ¿Qué lenguaje genera la gramática regular con producciones S → 0A, A → 1B, A → ε y B → 0A?
*a) El lenguaje 0(10)*, con un 0 inicial
b) El lenguaje 0(1+0)*, un 0 seguido de ceros y unos
c) El lenguaje (01)*, sin ningún 0 inicial
d) El lenguaje 0(01)*, con un 0 inicial

30. En la gramática con producciones S → 0A, A → 1B, A → ε y B → 0A, ¿cuál es una derivación válida de la cadena 010?
a) S ⇒ 0A ⇒ 01B ⇒ 010
*b) S ⇒ 0A ⇒ 01B ⇒ 010A ⇒ 010
c) S ⇒ 0A ⇒ 01B ⇒ 010B ⇒ 010A ⇒ 010
d) S ⇒ 0A ⇒ 1B ⇒ 10A ⇒ 010

31. En la gramática con producciones S → 0A, A → 1B, A → ε y B → 0A, ¿por qué la cadena 01 no pertenece al lenguaje generado?
a) Porque S solo puede reemplazarse por 0A y eso impide generar cadenas de longitud par
*b) Porque tras generar 01 queda la variable B, que no se puede eliminar sin otro 0
c) Porque la producción A → ε obliga a que toda cadena termine en 0 antes del 1
d) Porque la variable A no tiene ninguna producción que genere el terminal 1 al derivar

32. Según el teorema visto, ¿qué ocurre con una gramática cuyas producciones tienen la forma A → wB o A → w, con w una cadena de terminales?
a) Genera un lenguaje libre de contexto que en general no es regular
*b) Puede reescribirse como gramática regular, y esa gramática genera el mismo lenguaje
c) Solo puede generar lenguajes finitos, porque w tiene una longitud fija
d) No puede generar un lenguaje regular salvo que w tenga un único símbolo

33. ¿Qué lenguaje genera la gramática regular con producciones S → 0A, A → 10A y A → ε?
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

8. Sea la gramática S → aSa | T, T → bTb | W, W → cWc | c. ¿Cuáles de las siguientes cadenas pertenecen a su lenguaje?
*a) c
b) abccba
*c) aabcbaa
d) abcab
*e) ccc
f) ε

9. En la gramática de expresiones con las producciones <expresión> → <expresión> + <expresión>, <expresión> → <expresión> * <expresión>, <expresión> → (<expresión>) y <expresión> → id, ¿qué producción hay que aplicar primero para derivar (id + id) * id?
a) <expresión> → <expresión> + <expresión>
*b) <expresión> → <expresión> * <expresión>
c) <expresión> → id
d) <expresión> → (<expresión>)

10. En esa gramática de expresiones, ¿qué producción permite generar subexpresiones entre paréntesis, como (id + id)?
*a) <expresión> → (<expresión>)
b) <expresión> → <expresión> + <expresión>
c) <expresión> → id
d) <expresión> → <expresión> * <expresión>

11. En esa gramática de expresiones, ¿qué producción cierra una rama de la derivación, generando un terminal y sin dejar variables?
*a) <expresión> → id
b) <expresión> → (<expresión>)
c) <expresión> → <expresión> + <expresión>
d) <expresión> → <expresión> * <expresión>

12. En esa gramática de expresiones, ¿qué producción interviene para derivar una suma como id + id?
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

26. Las oraciones como «El gato [que el perro [que Juan adoptó] persiguió] escapó» tienen una estructura de subordinadas anidadas. ¿Qué forma general responde a ese patrón?
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

35. En la GLCP de juguete, Sustantivo → sapo [0,4], Sustantivo → piel [0,3] y Sustantivo → pelo [0,1] son algunas producciones de Sustantivo. ¿Qué se puede concluir?
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

## Nivel 3: Modelado computacional del lenguaje

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

12. ¿Cuántas palabras tiene la oración «El Dr. Gómez cobró $1.250,00 el 09/12 por el análisis de ADN.»?
a) Las mismas en cualquier tokenizador, porque la definición de palabra es única y universal
b) Exactamente las que resultan de separar el texto por los espacios en blanco
c) Exactamente una por cada secuencia de letras, ignorando por completo los números y los símbolos
*d) Depende de cómo se tokenice la abreviatura, el monto, la fecha y la sigla

13. ¿Cuáles de los elementos de la oración «El Dr. Gómez cobró $1.250,00 el 09/12 por el análisis de ADN.» son casos problemáticos para tokenizar?
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

29. ¿En qué consiste el POS tagging?
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

33. En «La compra se concretó», «la» es un artículo y «compra» un sustantivo, pero en «La compra con crédito», «la» es un pronombre y «compra» un verbo. ¿Qué ilustran estos ejemplos?
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

### Tema: Análisis sintáctico

44. En el análisis sintáctico de «El informe dice que no hay evidencia», las reglas se aplican sobre etiquetas como DT, NN y VB. ¿Qué representan esas etiquetas?
*a) La clase de palabra de cada palabra
b) Las entidades nombradas que aparecen en la oración
c) La forma de diccionario de cada palabra
d) Los constituyentes del árbol

45. Con las reglas NP → DT NP y NP → NN, ¿cómo se analiza «El informe» una vez etiquetado como DT NN?
a) «El» forma un NP con DT y luego «informe» se agrega a ese NP como un VP
b) «El informe» forma un solo PP, porque contiene un determinante seguido de un sustantivo común
*c) «informe» forma un NP con NN y luego «El» y ese NP forman otro NP con DT NP
d) «informe» forma un NP con NN y «El» forma otro NP sin ninguna relación entre ambos dentro del árbol

46. La figura muestra el parsing completo de «El informe dice que no hay evidencia». ¿Qué ofrece un parsing completo que no ofrece un chunking?
![Árbol de parsing completo de la oración El informe dice que no hay evidencia, con la raíz S, los constituyentes NP, VP y PP, y las reglas de la gramática a la izquierda](imagenes/iap2-nivel3-arbol-parsing.png)
*a) Un árbol que relaciona todos los constituyentes hasta llegar al símbolo inicial S
b) Una lista de las entidades nombradas que aparecen en toda la oración
c) La forma de diccionario de cada palabra, que el chunking no calcula
d) Etiquetas de clase de palabra para cada palabra, que el chunking no llega a asignar

47. ¿Por qué a veces se usa shallow parsing o chunking en lugar de un parsing completo?
a) Porque el parsing completo no admite oraciones con varios verbos
b) Porque el chunking devuelve el árbol completo con menos etiquetas
c) Porque el parsing completo requiere gramáticas regulares limitadas
*d) Porque el parsing completo es caro computacionalmente

### Tema: Modelos de lenguaje

48. ¿Qué provee un modelo de lenguaje?
*a) Una medida de cuán probable es una secuencia de palabras
b) Una traducción de cada oración a otro idioma
c) Una lista de las palabras válidas del idioma con su clase gramatical
d) Un árbol de derivación para cada oración que se le presenta

49. Según un modelo de lenguaje, ¿qué relación esperamos entre P(el gato come pescado) y P(pescado come gato el)?
*a) La primera es mayor que la segunda
b) Ninguna de las dos puede calcularse
c) La segunda es mayor que la primera en cualquier modelo
d) Ambas son iguales porque tienen las mismas palabras

50. Un sistema de reconocimiento del habla genera varias transcripciones posibles de lo que dijo el usuario. ¿Qué problema resuelve el modelo de lenguaje en ese caso?
a) Reducir cada transcripción a su forma de diccionario para poder compararlas
b) Etiquetar cada palabra de la transcripción con su clase gramatical
c) Identificar las entidades nombradas de las transcripciones
*d) Elegir la más plausible entre las hipótesis generadas

51. ¿Cuáles de las siguientes son aplicaciones clásicas de los modelos de lenguaje según la clase?
*a) Reconocimiento automático del habla
*b) Traducción automática
c) Reducción de palabras con stemming
*d) Corrección ortográfica y gramatical
*e) Predicción de texto
f) Cálculo de similitud coseno entre documentos

### Tema: Gramáticas libres de contexto probabilísticas

52. Usando la GLCP de la figura, ¿cuál es la probabilidad de la derivación S → VP, VP → Verb, Verb → book?
![Tabla de una gramática libre de contexto probabilística con reglas y probabilidades entre corchetes, y un léxico con probabilidades por palabra](imagenes/iap2-nivel3-pcfg-tabla.png)
a) 0,70, la suma de las probabilidades de las tres reglas
b) 0,0175, el producto de las probabilidades de las dos primeras reglas
*c) 0,00525, el producto de las probabilidades de las tres reglas
d) 0,05, la probabilidad de la primera regla aplicada

53. Una oración tiene dos árboles de parsing con probabilidades 0,002 y 0,003 según una GLCP. ¿Cuál es la probabilidad de la oración?
a) 0,0025, el promedio de las probabilidades de ambos árboles
*b) 0,005, la suma de las probabilidades de ambos árboles
c) 0,003, la probabilidad del árbol más probable de los dos
d) 0,000006, el producto de las probabilidades de ambos

54. ¿Para cuáles de las siguientes tareas se menciona que una GLCP resulta útil como modelo del lenguaje?
*a) Reconocimiento del habla
b) Stemming de palabras
*c) Traducción automática
*d) Corrección de ortografía
e) Cálculo de la similitud coseno
*f) Detección de idioma

### Tema: Predicción de palabras

55. ¿Cuáles de las siguientes asociaciones entre tipo de conocimiento usado para predecir palabras y lo que abarca son correctas?
*a) Léxico: conocimiento de las palabras
b) Léxico: conocimiento de los significados
*c) Sintáctico: conocimiento de la estructura
d) Sintáctico: conocimiento de las palabras y sus significados
*e) Semántico: conocimiento de los significados
f) Semántico: conocimiento de la estructura y las palabras

56. Además de los conocimientos léxico, sintáctico y semántico, ¿qué otro conocimiento usamos las personas para predecir palabras futuras?
*a) Conocimiento del mundo
b) Conocimiento morfológico
c) Conocimiento fonético del habla
d) Conocimiento estadístico de corpus

### Tema: N-gramas

57. ¿Qué permite la regla de la cadena aplicada a la probabilidad de una oración?
a) Calcularla como la probabilidad de la palabra más frecuente de la oración
b) Estimarla contando cuántas veces aparece la oración completa en el corpus
*c) Descomponerla en un producto de probabilidades de cada palabra dadas las anteriores
d) Calcularla como la suma de las probabilidades de cada palabra tomada de forma aislada

58. ¿Qué afirma la suposición de Markov que se usa en los N-gramas?
*a) Que la probabilidad de una palabra depende solo de las N−1 palabras anteriores
b) Que la probabilidad de una palabra depende de todas las palabras
c) Que la probabilidad de una palabra es independiente de las palabras que la rodean
d) Que la probabilidad de una palabra depende solo de las N palabras que la siguen

59. Con un modelo de bigramas, ¿con qué se aproxima P(viernes | está abierto de lunes a)?
a) P(viernes | está abierto), que usa las dos primeras palabras
*b) P(viernes | a), que usa solo la palabra anterior
c) P(viernes | de lunes a), que usa las tres palabras anteriores
d) P(viernes | lunes a), que usa dos palabras

60. Con un modelo de trigramas, ¿con qué se aproxima P(viernes | está abierto de lunes a)?
a) P(viernes | de lunes a), que usa las tres palabras anteriores
b) P(viernes | está abierto), que usa las dos primeras palabras
c) P(viernes | a), que usa solo la palabra anterior
*d) P(viernes | lunes a), que usa las dos palabras anteriores

61. Al estimar con bigramas P(está abierto de lunes a viernes), ¿qué factores aparecen en los extremos de la fórmula?
a) P(<start>) al comienzo y P(<end>) al final, sin condicionar
*b) P(está | <start>) al comienzo y P(<end> | viernes) al final
c) P(<start> | está) al comienzo y P(viernes | <end>) al final del producto
d) P(está) al comienzo y P(viernes) al final, sin ningún marcador de límites

62. ¿Cómo se estima P(abierto | está) con bigramas a partir de las frecuencias de un corpus grande?
a) Como #(abierto) / #(está), contando solo palabras sueltas
b) Como el cociente #(está abierto) / #(abierto) del corpus
*c) Como el cociente #(está abierto) / #(está)
d) Como #(está) / #(está abierto), invertido

63. En un corpus, la palabra «está» aparece 200 veces y el par «está abierto» aparece 50 veces. Con bigramas, ¿cuánto vale P(abierto | está) y qué significa?
a) 0,75, la proporción de veces que «está» no va seguida de «abierto»
*b) 0,25, la proporción de veces que «está» va seguida de «abierto»
c) 4, la cantidad de veces que «está» aparece por par
d) 0,25, la proporción de veces que «abierto» aparece en cualquier posición del corpus

### Tema: Semántica vectorial

64. ¿Qué dice la hipótesis distribucional?
a) Que las palabras más frecuentes de un corpus son siempre las más importantes
b) Que las palabras de la misma clase gramatical se distribuyen de forma muy pareja
*c) Que las palabras que se usan en contextos similares suelen tener significados similares
d) Que las palabras con la misma raíz tienen significados parecidos entre sí

65. Entre los intentos de representar documentos como vectores listados en la clase, ¿cuál se ilustra con una matriz con documentos (d1, d2, ...) y términos (w1, w2, ...)?
a) LSA (Latent Semantic Analysis)
b) PMI (Pointwise Mutual Information)
c) TF-IDF (Term Frequency–Inverse Document Frequency)
*d) La matriz documento-término (Bag of Words)

66. ¿Cuáles de las siguientes técnicas se listan como intentos de representación vectorial anteriores a los word embeddings?
*a) TF-IDF
*b) PMI
*c) LSA
*d) LDA
e) GloVe
f) BERT

67. ¿Cuáles de las siguientes asociaciones entre técnica y tipo de representación son correctas?
*a) Word2Vec: word embedding
b) GloVe: embedding contextual
*c) GloVe: word embedding
*d) ELMo: embedding contextual
e) BERT: word embedding
*f) BERT: embedding contextual

68. ¿Cómo se define la similitud coseno entre dos vectores A y B, que forman un ángulo θ?
![Dos vectores A y B que parten del origen y forman un ángulo θ, con una naranja en el extremo de A y una manzana en el extremo de B](imagenes/iap2-nivel3-vectores-angulo.png)
a) Como el seno del ángulo θ entre ambos, dividido por la suma de las normas
b) Como el producto A·B, sin dividir por las normas de ambos vectores
*c) Como cos(θ), igual a A·B dividido por el producto de ‖A‖ y ‖B‖
d) Como la distancia entre los extremos de A y B, dividida por θ

### Tema: Modelos neuronales recurrentes

69. La figura muestra una red neuronal recurrente (RNN) y su versión desplegada. ¿Qué lugar ocupaban las RNN en el PLN hasta 2017-18?
![Red neuronal recurrente con un bucle sobre el estado oculto h y su versión desplegada en varios pasos de tiempo con entradas x, estados h y salidas o](imagenes/iap2-nivel3-rnn-desplegada.png)
a) Eran un método estadístico anterior a los n-gramas
b) Eran una técnica simbólica basada en reglas escritas a mano
c) Eran la técnica que reemplazaba a los transformers
*d) Eran el estado del arte del procesamiento del lenguaje

70. Según la clase, ¿qué problema solucionó la variante LSTM de las RNN?
a) La secuencialidad
b) La falta de datos de entrenamiento
c) El cuello de botella en seq2seq
*d) El gradiente desvaneciente

71. ¿Qué significa que la secuencialidad figure como problema de las RNN?
a) Que exigen palabras ordenadas alfabéticamente
b) Que solo procesan secuencias de longitud fija conocida
*c) Que procesan un token por vez
d) Que solo predicen la palabra siguiente de la secuencia

72. En «la profesora que diseñó el plan de estudios de la nueva carrera de humanidades estaba preocupado», el final de la oración depende de «la profesora», que está muy lejos. ¿Qué problema de las RNN ilustra la clase con este ejemplo?
a) La secuencialidad
b) El gradiente desvaneciente
c) El cuello de botella en seq2seq
*d) Las dependencias largas

73. En el esquema encoder–decoder de la figura, ¿qué problema de las RNN señala el signo de exclamación?
![Esquema encoder-decoder de una RNN que traduce the dog eats al francés, con un signo de exclamación sobre el estado que conecta el encoder con el decoder](imagenes/iap2-nivel3-seq2seq.png)
*a) El cuello de botella en seq2seq
b) La secuencialidad de procesar un token por vez
c) Un gradiente desvaneciente al entrenar
d) Las dependencias largas entre palabras

### Tema: Herramientas

74. ¿Cuáles de las siguientes herramientas figuran en la lista de la clase?
*a) NLTK
b) OpenCV
*c) spaCy
d) Matplotlib
*e) FreeLing
f) Selenium
`;
