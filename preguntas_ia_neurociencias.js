const MATERIA_ID_IAN = "inteligencia-artificial-neurociencias";
const MATERIA_NOMBRE_IAN = "Inteligencia Artificial y Neurociencias";
const PREGUNTAS_RAW_IAN = `
## Nivel 1: Modelado Computacional del Comportamiento Humano

### Tema: Motivación y diseño del estudio (Cuatro en Línea)

1. ¿Cuál es el objetivo principal del estudio de van Opheusden y colegas?
*a) Estudiar si los jugadores expertos planifican más pasos adelante que los novatos
b) Comparar distintos algoritmos de ajedrez por computadora entre sí
c) Diseñar una interfaz de juego más accesible para principiantes
d) Medir con mucha precisión el tiempo de reacción visual ante estímulos simples presentados

2. Según el paper, ¿por qué el ajedrez resulta poco adecuado para estimar la profundidad de planificación?
a) Porque no hay suficientes jugadores expertos disponibles para estudiar sus partidas registradas
b) Porque las partidas suelen ser demasiado largas para registrarlas
*c) Porque su complejidad dificulta obtener estimaciones cuantitativas de la planificación
d) Porque el tablero de ajedrez es demasiado grande para modelarlo

3. ¿Qué limitación tienen las tareas de planificación simples típicas en ciencia cognitiva?
a) Requieren equipamiento de laboratorio muy costoso para aplicarlas
*b) Imponen un techo a la profundidad de planificación alcanzable por cualquiera
c) Solo pueden aplicarse a participantes con formación técnica previa
d) No permiten registrar el tiempo que tarda cada jugador en responder

4. ¿Por qué el juego "Cuatro en Línea" resultó adecuado para este estudio?
a) Porque solo puede jugarse contra una computadora, nunca entre personas
b) Porque su tablero es idéntico al del ajedrez tradicional
c) Porque no requiere absolutamente ningún tipo de planificación por parte del jugador
*d) Porque combina reglas simples con suficiente complejidad para ser tratable computacionalmente

### Tema: El modelo computacional: función de valor y búsqueda

5. ¿Cuáles son los tres componentes del modelo computacional propuesto?
*a) Función de valor basada en features, algoritmo de búsqueda y mecanismo de atención
b) Red neuronal profunda, función de recompensa y módulo de memoria episódica
c) Codificador visual convolucional, decodificador de acciones y filtro de ruido gaussiano
d) Motor de físicas del tablero de juego, generador de movimientos posibles y árbol de decisiones

6. ¿Qué hace la función de valor V(s, w) del modelo?
a) Cuenta la cantidad total de piezas presentes en el tablero
b) Genera de forma totalmente aleatoria los movimientos legales disponibles en cada turno de juego
*c) Asigna un valor a un estado del tablero como suma ponderada de features
d) Registra el tiempo que el jugador tarda en cada movimiento

7. ¿Qué hace específicamente la feature de "centro" dentro de la función de valor?
a) Penaliza las piezas ubicadas cerca de los bordes del tablero
b) Cuenta cuántas veces aparece un patrón distinto de cuatro piezas alineadas en el tablero
c) Suma los turnos que restan hasta el final de la partida
*d) Asigna un valor más alto a las casillas del centro del tablero

8. ¿Por qué los pesos de las features del jugador activo se multiplican por una constante de escala C?
*a) Porque tres en línea señala una victoria inminente solo para el jugador activo
b) Para compensar diferencias en el tamaño del tablero entre distintas partidas
c) Para que el proceso completo de entrenamiento del modelo converja con mucha mayor rapidez
d) Porque el jugador activo siempre cuenta con más piezas en juego

9. ¿Qué feature de la función de valor describe dos piezas propias alineadas y adyacentes, sin ningún espacio entre ellas?
*a) Dos en línea conectado
b) Dos en línea desconectado
c) Tres en línea
d) Cuatro en línea

10. ¿Qué feature de la función de valor describe dos piezas propias alineadas pero con un espacio vacío entre ellas?
a) Dos en línea conectado
*b) Dos en línea desconectado
c) La tendencia central
d) Tres en línea

11. ¿Qué feature de la función de valor describe cuatro piezas propias alineadas, la condición de victoria del juego?
a) Tres en línea
b) Dos en línea conectado
c) Dos en línea desconectado
*d) Cuatro en línea

12. ¿Qué parámetro del modelo corresponde al tamaño del árbol de decisión que construye el algoritmo de búsqueda?
*a) El tamaño del árbol de decisión construido
b) El umbral de poda que descarta movimientos débiles
c) Los pesos que multiplican a cada feature
d) El nivel de ruido que se agrega a cada evaluación

13. ¿Qué parámetro del modelo corresponde al umbral que se usa para descartar movimientos de bajo valor durante la búsqueda?
a) El tamaño del árbol de decisión construido
*b) El umbral de poda que descarta movimientos débiles
c) Los pesos que multiplican a cada feature
d) El nivel de ruido que se agrega a cada evaluación

14. ¿Qué parámetro del modelo corresponde a los pesos que multiplican a cada feature dentro de la función de valor?
a) El tamaño del árbol de decisión construido
b) El umbral de poda que descarta movimientos débiles
*c) Los pesos que multiplican a cada feature
d) El nivel de ruido que se agrega a cada evaluación

15. ¿Qué parámetro del modelo corresponde a la magnitud del ruido gaussiano agregado a la evaluación de cada posición?
a) El tamaño del árbol de decisión construido
b) El umbral de poda que descarta movimientos débiles
c) Los pesos que multiplican a cada feature
*d) El nivel de ruido que se agrega a cada evaluación

16. En cada iteración del algoritmo de búsqueda, ¿qué hace el modelo con los movimientos de menor valor?
a) Los guarda sin usarlos para evaluarlos en la siguiente partida que se juegue
b) Los convierte automáticamente en la variación principal del árbol
*c) Los descarta cuando su valor baja del mejor movimiento menos un umbral
d) Los ejecuta igual, aunque con menor probabilidad de resultar acertados

17. ¿Qué determina cuándo el algoritmo de búsqueda deja de iterar?
a) Un límite fijo de diez iteraciones por cada posición evaluada
*b) Una probabilidad γ de detenerse después de cada iteración realizada
c) El momento exacto en que se ocupa la totalidad del tablero
d) Un contador de tiempo real medido en segundos desde el inicio

18. En el árbol de decisión construido por el modelo, ¿qué representa la "variación principal"?
a) La rama del árbol que el modelo explora primero por defecto
b) El conjunto de movimientos ilegales descartados en cada nodo
c) El promedio de valores de todas las ramas evaluadas
*d) La secuencia de movimientos de mayor valor para ambos jugadores

### Tema: Mecanismo de atención y ruido en el modelo

19. ¿Cómo modela el mecanismo de atención la atención selectiva humana?
*a) Descartando aleatoriamente ciertas features antes de construir el árbol de decisión
b) Aumentando el peso de todas las features por igual en cada turno
c) Eliminando del tablero las piezas menos relevantes para la partida
d) Duplicando la profundidad de búsqueda en las posiciones centrales

20. Además de descartar features, ¿qué otro tipo de ruido incorpora el mecanismo de atención?
a) Un retraso aleatorio adicional en el tiempo de respuesta del jugador humano
b) Una distorsión aleatoria en la posición de las piezas
*c) Ruido gaussiano agregado al valor V(s) en cada nodo del árbol
d) Una reducción aleatoria en la cantidad de movimientos legales

21. ¿Qué representa la tasa de lapsus (lapse rate) λ en el modelo?
a) La velocidad con la que decae progresivamente la memoria del jugador durante la partida
*b) La probabilidad de que el jugador se equivoque al elegir su acción
c) La cantidad de features que el modelo procesa por segundo
d) El porcentaje de partidas que el jugador abandona sin terminar

### Tema: Validación del modelo con datos humanos

22. ¿Con qué tipos de datos humanos se validó el modelo, además de las elecciones de movimiento?
a) Con encuestas de satisfacción y cuestionarios de personalidad
b) Con registros de frecuencia cardíaca durante la partida
c) Con grabaciones de audio de los comentarios del jugador
*d) Con los tiempos de respuesta registrados y los movimientos oculares

23. ¿Qué método se usó para evaluar qué tan bien el modelo predice las elecciones humanas?
*a) Validación cruzada de cinco pliegues, prediciendo elecciones fuera de muestra
b) Comparación directa contra un jugador de ajedrez profesional
c) Una encuesta posterior preguntando a los jugadores si acertó
d) Un conteo manual de coincidencias en cada partida jugada

24. ¿Qué supone el modelo de "azar" (chance model) usado como punto de comparación?
a) Que el jugador siempre elige el movimiento que maximiza su ventaja
b) Que el jugador imita el último movimiento visto del oponente
*c) Que el jugador se mueve a una casilla desocupada elegida al azar
d) Que el jugador repite siempre la misma jugada inicial

25. ¿Qué relación se encontró entre los movimientos oculares humanos y la búsqueda del modelo?
a) No se encontró ninguna relación estadística significativa entre ambas medidas registradas
*b) Las casillas visitadas por el modelo coincidieron con la atención humana registrada
c) Los movimientos oculares se concentraron únicamente en las esquinas del tablero de juego
d) Los jugadores expertos movieron los ojos con mucha menor frecuencia que los novatos

26. ¿Qué se utilizó como predictor del tiempo de respuesta en cada ensayo?
a) La cantidad total de piezas presentes en el tablero en ese momento
b) El rating Elo que tenía el jugador en ese momento
c) La distancia entre las dos últimas piezas colocadas en el tablero
*d) El árbol de decisión construido por el modelo en ese ensayo

### Tema: Métricas del modelo: definiciones

27. ¿Cómo se define la "profundidad de planificación" (planning depth) en este estudio?
*a) Como la longitud de la variación principal del árbol de búsqueda
b) Como la cantidad total de movimientos legales disponibles en una posición
c) Como el tiempo total que dura una partida completa
d) Como el número de features activas en un momento dado

28. ¿Cómo se define la "tasa de abandono de features" (feature drop rate)?
a) Como la cantidad de partidas perdidas por errores de cálculo
b) Como el porcentaje de piezas retiradas del tablero por turno
*c) Como la probabilidad de lapsus atencional, un parámetro del modelo
d) Como la velocidad de decaimiento del rating Elo entre sesiones

29. ¿Cómo se define la "calidad heurística" (heuristic quality) del modelo?
a) Como la cantidad de sesiones necesarias para alcanzar el máximo rating
*b) Como la correlación entre el valor heurístico y el valor objetivo
c) Como el tiempo promedio que tarda el modelo en converger
d) Como la proporción de movimientos legales que el modelo descarta

### Tema: Resultados: aprendizaje y diferencias individuales

30. A lo largo de las sesiones de juego, ¿qué le sucedió a la profundidad de planificación de los participantes?
a) Se mantuvo constante a lo largo de todas las sesiones
b) Disminuyó progresivamente a medida que aumentaba la experiencia de juego
c) Osciló de forma irregular sin mostrar ninguna tendencia clara
*d) Aumentó junto con el rating Elo de los participantes

31. ¿Qué ocurrió con la tasa de abandono de features a lo largo de las sesiones?
*a) Disminuyó de forma progresiva a medida que avanzaban las sesiones
b) Aumentó progresivamente junto con el rating Elo de los jugadores
c) Se mantuvo idéntica en todas las sesiones registradas del estudio
d) Aumentó únicamente en los participantes con menor rating inicial

32. ¿Qué ocurrió con la calidad heurística de los participantes a lo largo de las sesiones?
a) Mejoró de forma sostenida junto con el rating Elo de los jugadores
b) Empeoró de forma marcada inmediatamente después de la primera sesión
*c) No mostró una mejora clara pese al aumento del rating Elo
d) Se volvió indistinguible entre expertos y novatos desde el inicio

33. Según la conclusión principal del estudio, ¿qué distingue a los jugadores más fuertes de los más débiles?
a) Conocen una mayor cantidad de aperturas memorizadas de antemano
*b) Planifican más profundo y cometen menos lapsus de atención
c) Utilizan exclusivamente movimientos cercanos al centro del tablero
d) Dedican más tiempo total a cada partida que juegan

34. Según los datos de diferencias individuales entre jugadores, ¿qué variable NO se correlacionó con el rating Elo?
a) La profundidad de planificación alcanzada por cada jugador
b) La tasa de abandono de features de cada jugador
c) El desempeño general medido a lo largo de las sesiones
*d) La calidad heurística de los pesos de cada jugador

### Tema: Hipótesis sobre la implementación neural del modelo

35. Según la hipótesis planteada sobre la implementación neural del modelo, ¿con qué región se asocia la función de valor basada en features?
*a) Con la corteza orbitofrontal del cerebro
b) Con el cerebelo y el tronco encefálico
c) Con la corteza visual primaria únicamente
d) Con el núcleo accumbens de forma exclusiva

36. Según la hipótesis planteada sobre la implementación neural del modelo, ¿con qué red se asocia el mecanismo de atención del modelo?
a) Con la red por defecto del cerebro en reposo
b) Con el sistema límbico de forma exclusiva
*c) Con la red frontoparietal del cerebro
d) Con la corteza auditiva primaria del cerebro

## Nivel 2: Aprendizaje: Humanos vs Máquinas

### Tema: Aprendizaje y condicionamiento

1. ¿Cómo se define el aprendizaje según la clase?
*a) Como un cambio en el comportamiento debido a la experiencia
b) Como la capacidad de resolver problemas matemáticos complejos de forma rápida
c) Como el aumento de neuronas nuevas en el cerebro
d) Como la memorización de datos durante la infancia

2. ¿Qué dos tipos de aprendizaje simple se mencionan en la clase como base del comportamiento humano?
*a) El condicionamiento clásico y el condicionamiento operante
b) El aprendizaje social y el aprendizaje por observación directa
c) El aprendizaje implícito y el aprendizaje explícito consciente
d) El aprendizaje supervisado y el aprendizaje por refuerzo automático

### Tema: Aprendizaje en redes neuronales artificiales

3. Según el esquema comparativo presentado, ¿qué elemento de la neurona artificial corresponde a las dendritas?
a) La capa de salida, que produce el resultado final
b) El axón, que transmite la señal hacia otras neuronas
c) La función de no linealidad aplicada a la suma
*d) Las entradas ponderadas que recibe la neurona artificial

4. ¿Qué dos operaciones realiza una neurona artificial antes de generar su salida?
*a) Una suma ponderada de sus entradas y una función de no linealidad
b) Una multiplicación de matrices y un ordenamiento de valores
c) Una normalización de datos y una compresión de imagen
d) Una selección aleatoria de entradas y un promedio simple de todas ellas

### Tema: Estudios con neuronas biológicas: organoides y neuronas in vitro

5. ¿Qué propone el estudio sobre "brainoware" (organoides cerebrales) mencionado en la clase?
a) Que las computadoras cuánticas pueden reemplazar a las neuronas
b) Que los organoides cerebrales pueden reemplazar el ADN humano
*c) Que los organoides cerebrales pueden funcionar como hardware de cómputo para IA
d) Que las redes neuronales artificiales podrían algún día cultivarse en un laboratorio especializado

6. ¿Qué demostró el estudio de neuronas in vitro que jugaron al videojuego Pong?
a) Que las neuronas cultivadas no pueden responder a ningún estímulo externo
*b) Que las neuronas modifican su actividad para reducir la impredictibilidad del entorno
c) Que las neuronas artificiales superan siempre a las neuronas biológicas
d) Que el videojuego Pong no puede ser aprendido por ningún tipo de sistema biológico

### Tema: Priors innatos y aprendizaje rápido en humanos

7. Según un estudio mencionado en la clase sobre videojuegos, ¿qué pregunta central lo motiva?
a) Por qué las computadoras siempre prefieren jugar videojuegos simples en vez de los complejos
b) Por qué los videojuegos antiguos son más difíciles que los modernos
c) Por qué los jugadores expertos memorizan más niveles que los novatos
*d) Por qué los humanos aprenden un videojuego mucho más rápido que una computadora

8. En el ejemplo de las víboras y las flores, ¿qué ilustra el hecho de que las detectemos más rápido?
*a) Que tenemos priors evolutivos que orientan la atención hacia estímulos relevantes para la supervivencia
b) Que las flores son objetos visualmente mucho más simples de reconocer que las víboras venenosas
c) Que el color rojo capta más la atención que el color verde
d) Que los humanos ven mejor de noche que durante el día

9. ¿Qué revela el experimento en el que bebés de pocos meses se sorprenden ante eventos que violan leyes físicas?
a) Que los bebés no pueden distinguir objetos de distinto tamaño o forma
b) Que los bebés prefieren los sonidos graves a los agudos
*c) Que los bebés ya tienen hipótesis previas sobre el mundo físico
d) Que los bebés imitan automáticamente los gestos de los adultos

10. En el experimento con la pelota de color, ¿qué indica que los bebés miren más tiempo cuando cae la bola menos probable?
a) Que los bebés distinguen los colores primarios sin dificultad
*b) Que los bebés tienen una noción intuitiva de la probabilidad
c) Que los bebés prefieren los objetos que se mueven lentamente
d) Que los bebés memorizan la posición exacta de cada objeto

11. Según la clase, ¿a qué otra modalidad sensorial generalizan los bebés su sentido numérico?
a) A la modalidad táctil, distinguiendo distintas texturas por cantidad total percibida
b) A la modalidad olfativa, distinguiendo aromas por intensidad
c) A la modalidad gustativa, distinguiendo sabores por cantidad
*d) A la modalidad auditiva, prefiriendo imágenes con la misma cantidad

12. ¿Qué mostró el estudio sobre precursores del razonamiento lógico en bebés preverbales?
*a) Que los bebés tienen nociones de sumas, restas y conservación de las cosas
b) Que los bebés pueden resolver pequeñas ecuaciones simples antes de aprender a hablar correctamente
c) Que los bebés reconocen letras del alfabeto desde bastante temprano
d) Que los bebés distinguen lenguas extranjeras de su lengua materna

13. Según la clase, ¿desde cuándo mostramos preferencia por estímulos con forma de cara?
a) Recién a partir de los tres años de edad
b) Solo después de aprender a reconocer expresiones emocionales
*c) Desde antes de nacer, incluso de forma intrauterina
d) Únicamente después de los seis meses de vida

### Tema: Comportamiento instintivo

14. ¿Cómo se define un comportamiento instintivo según la clase?
a) Como una habilidad que se aprende únicamente en la escuela formal y estructurada
*b) Como un comportamiento que aparece en humanos típicos con desarrollo típico
c) Como una conducta que solo aparece en animales no humanos
d) Como un comportamiento que depende únicamente de la cultura

15. ¿Qué ejemplo de comportamiento instintivo que habilita aprendizajes más complejos menciona la clase?
a) Que los bebés instintivamente evitan las alturas desde el nacimiento
b) Que los bebés instintivamente reconocen números desde una edad muy temprana en la vida
c) Que los bebés instintivamente imitan sonidos de animales conocidos y comunes
*d) Que los bebés instintivamente prestan atención al habla para aprender una lengua

### Tema: Evolución y selección natural

16. ¿Cómo se define la evolución según la clase?
*a) Como el cambio en los organismos de una población en el tiempo
b) Como el aumento en el tamaño del cerebro de una especie
c) Como la extinción progresiva y natural de las especies menos aptas para sobrevivir
d) Como la aparición espontánea de nuevas especies en un día

17. ¿Cómo se define la selección natural según la clase?
a) Como un tipo de mutación genética totalmente espontánea y aleatoria
b) Como el proceso mediante el cual todos los genes se copian sin ningún error
*c) Como el mecanismo particular de evolución que explica la evolución de las especies
d) Como la elección consciente que hacen los animales de su pareja

### Tema: El concepto de gen y las condiciones de la selección natural

18. ¿De qué dos observaciones surgió históricamente el concepto de gen, según la clase?
a) Que los animales y las plantas comparten exactamente el mismo tipo de ADN en su estructura
b) Que las mutaciones ocurren con mucha mayor frecuencia en la vejez avanzada
c) Que el ambiente modifica de forma directa la apariencia física de los hijos
*d) Que padres e hijos se parecen, y en aspectos heredados de forma independiente

19. ¿Cómo se define un gen en términos clásicos, según la clase?
*a) Como la unidad mínima e irreductible de herencia
b) Como la totalidad del ADN de un organismo
c) Como una proteína que regula el metabolismo celular
d) Como el conjunto de cromosomas de una célula

20. Según la clase, ¿de qué es independiente el concepto de gen?
a) De la existencia de posibles mutaciones dentro de la población
b) De la capacidad reproductiva del organismo portador
*c) Del sustrato físico donde se guarda la información hereditaria
d) Del número de cromosomas presentes en cada célula

21. ¿Qué tres condiciones deben darse para que ocurra un proceso de selección natural, según la clase?
a) Mutación, recombinación y extinción
*b) Variabilidad, heredabilidad y adaptabilidad
c) Competencia, cooperación y territorialidad
d) Reproducción, migración y aislamiento

### Tema: Selección de comportamientos: adaptaciones, subproductos y ruido

22. Según la clase, ¿qué tres "frutos" puede tener un proceso evolutivo darwinista?
*a) Adaptaciones, subproductos y ruido
b) Mutaciones, selecciones y extinciones
c) Genes, cromosomas y proteínas
d) Especies, poblaciones e individuos

23. ¿Cuál de los siguientes ejemplos se menciona en la clase como una adaptación biológica?
a) El color rojo característico de la sangre humana
b) El ombligo que queda tras el nacimiento
*c) El cordón umbilical durante el embarazo
d) El apéndice vermiforme del intestino humano

24. ¿Cuál de los siguientes es un ejemplo de adaptación biológica (un rasgo que aumentó el éxito reproductivo) mencionado en la clase?
a) El ombligo tras el nacimiento
*b) La hemoglobina de la sangre
c) El color rojo de la sangre
d) El apego paterno-materno

25. ¿Cuál de los siguientes ejemplos se menciona en la clase como un subproducto evolutivo?
a) La hemoglobina de la sangre
*b) El ombligo que queda tras el nacimiento
c) El cordón umbilical durante el embarazo
d) La capacidad pulmonar para respirar

26. ¿Cuál de los siguientes es un ejemplo de subproducto evolutivo (byproduct) mencionado en la clase?
a) La hemoglobina presente en la sangre
b) El cordón umbilical
c) El enamoramiento romántico
*d) El color de la sangre

27. ¿Cómo se define un rasgo o comportamiento adaptativo según la clase?
a) Como cualquier conducta que resulta agradable y placentera para el individuo
b) Como cualquier rasgo biológico presente en todos los mamíferos conocidos
c) Como cualquier comportamiento aprendido a lo largo de toda la infancia temprana del individuo
*d) Como aquel que aumentó el éxito reproductivo del organismo en su ambiente

28. ¿Cuál de los siguientes se menciona en la clase como ejemplo de comportamiento adaptativo humano?
*a) El impulso sexual como motor reproductivo
b) El gusto por el fútbol como pasatiempo
c) Las adicciones a distintas sustancias químicas
d) El uso de métodos anticonceptivos modernos

29. ¿Qué comportamiento humano menciona la clase como ejemplo de rasgo adaptativo vinculado a la búsqueda de una fuente de energía?
*a) El gusto por el azúcar
b) Las adicciones a sustancias
c) El gusto por el fútbol profesional
d) El uso de anticonceptivos

30. ¿Qué comportamiento adaptativo menciona la clase relacionado con el vínculo entre padres/madres e hijos pequeños?
a) El gusto por el fútbol
b) Las adicciones a sustancias
*c) El apego paterno-materno
d) El uso de anticonceptivos

31. ¿Qué comportamiento se menciona en la clase como ejemplo de rasgo adaptativo vinculado al vínculo de pareja?
a) Las adicciones a sustancias
*b) El enamoramiento romántico
c) El gusto por el fútbol
d) El uso de anticonceptivos

32. ¿Cómo se define un comportamiento subproducto (byproduct) según la clase?
a) Como un rasgo que mejora de forma directa la supervivencia
b) Como un rasgo presente únicamente en los primates superiores actuales
*c) Como consecuencia de rasgos adaptativos sin ser en sí una ventaja evolutiva
d) Como un rasgo que solo aparece bajo condiciones ambientales muy extremas y poco frecuentes

33. ¿Cuál de los siguientes se menciona en la clase como ejemplo de comportamiento subproducto humano?
a) El apego paterno-materno hacia los hijos pequeños
*b) Las adicciones a distintas sustancias y conductas
c) El gusto por el azúcar como fuente de energía
d) El enamoramiento romántico entre dos personas

34. ¿Qué ejemplo de comportamiento subproducto menciona la clase, vinculado a un pasatiempo o entretenimiento?
a) El impulso sexual
b) El apego paterno-materno hacia los hijos
c) El gusto por el azúcar
*d) El gusto por el fútbol

35. ¿Qué ejemplo de comportamiento subproducto menciona la clase, vinculado al uso de métodos que separan el sexo de la reproducción?
*a) El uso de anticonceptivos
b) El enamoramiento romántico
c) El impulso sexual
d) El gusto por el azúcar

### Tema: Cómo se seleccionan los comportamientos: Darwin, Lamarck y la estructura del cerebro

36. ¿Cuál es la principal diferencia entre la teoría de Lamarck y la de Darwin?
a) Lamarck negaba que existiera la herencia biológica en absoluto
*b) Para Lamarck los rasgos adquiridos se heredan; para Darwin no
c) Darwin negaba que las especies pudieran extinguirse con el tiempo
d) Lamarck proponía que solo las plantas evolucionan por selección natural

37. Según la clase, ¿mediante qué mecanismo se seleccionan los comportamientos a lo largo de la evolución?
a) Mediante la imitación directa y constante de comportamientos entre distintos individuos de la misma especie
b) Mediante el aprendizaje acumulado durante toda la vida de cada individuo
c) Mediante la selección artificial realizada por los propios seres humanos actuales
*d) Mediante la selección de genes que influyen en la estructura del cerebro

38. Según una cita mencionada en la clase, ¿qué afirma sobre el cerebro al nacer?
*a) Que el cerebro no es una tabla rasa, sino que nace con circuitos organizados
b) Que el cerebro nace completamente vacío y se llena solo con la experiencia
c) Que el cerebro deja de cambiar por completo después del nacimiento
d) Que el cerebro solo puede aprender lenguaje durante los primeros meses

### Tema: Módulos mentales y áreas cerebrales especializadas

39. ¿Cómo se define un módulo mental o cerebral según la clase?
a) Como una región del cerebro dedicada solo al lenguaje
b) Como una parte del cerebro que solo se activa dormido
c) Como el conjunto total de neuronas del cerebro
*d) Como una estructura cerebral innata para procesar información específica

40. ¿Qué módulo mental mencionado en la clase se encarga de procesar los sonidos que percibimos?
*a) El procesamiento de sonidos
b) El procesamiento de imágenes visuales
c) El módulo relacionado con los números
d) El módulo relacionado con la moral

41. ¿Qué módulo mental mencionado en la clase se encarga de procesar las imágenes que vemos?
a) El procesamiento de sonidos
*b) El procesamiento de imágenes visuales
c) El módulo relacionado con el lenguaje
d) El módulo relacionado con el amor romántico

42. Según la clase, ¿qué áreas cerebrales se mencionan como módulos relacionados al lenguaje?
*a) El área de Broca y el área de Wernicke
b) El hipocampo y la amígdala cerebral profunda
c) El cerebelo y el tronco encefálico inferior
d) La corteza visual primaria y la corteza auditiva secundaria del cerebro

43. Según la clase, ¿a qué función cognitiva se asocia el surco intraparietal (intraparietal sulcus)?
a) Al reconocimiento de caras familiares y conocidas
b) Al procesamiento del lenguaje hablado y escrito
*c) A la numerosidad, es decir, la noción de cantidad
d) A la coordinación motora fina de las manos

44. ¿Qué dilema se menciona en la clase como ejemplo de módulo moral?
a) El dilema del prisionero en teoría de juegos
*b) El dilema del tranvía, sobre desviar o no un vehículo
c) El dilema del huevo y la gallina en la biología evolutiva
d) El dilema de Monty Hall sobre probabilidades condicionales

45. Según la clase, ¿qué técnica se menciona para estudiar el módulo del amor romántico en el cerebro?
*a) Resonancias magnéticas a personas enamoradas y a personas recién separadas
b) Registros de actividad eléctrica cerebral durante citas a ciegas recientemente organizadas
c) Seguimiento ocular durante conversaciones íntimas de pareja
d) Medición de la frecuencia cardíaca durante encuentros románticos

### Tema: Plasticidad cerebral y aprendizaje neuronal

46. ¿Cómo se define la plasticidad cerebral según la clase?
a) Como la cantidad total de neuronas presentes en todo el cerebro humano
b) Como la velocidad de conducción de los impulsos nerviosos
c) Como la resistencia del cerebro a sufrir cualquier daño
*d) Como la capacidad del sistema nervioso de cambiar con la experiencia

47. ¿Qué principio biológico determina qué partes del cerebro terminan conectadas entre sí, según la clase?
*a) Que las neuronas que se activan juntas terminan conectándose entre sí
b) Que las neuronas más grandes procesan la información más rápido
c) Que las neuronas nunca pueden formar nuevas conexiones sinápticas
d) Que las neuronas se destruyen si no reciben ningún estímulo

48. Según la clase, ¿con qué proceso biológico se identifica al aprendizaje?
a) Con la producción de nuevas neuronas cada día
b) Con el aumento del tamaño total del cerebro
*c) Con la plasticidad sináptica entre las neuronas
d) Con la eliminación completa de neuronas antiguas

49. ¿Cómo se define el reciclaje neuronal según la clase?
a) Como la eliminación de circuitos cerebrales que ya no se usan
*b) Como la reutilización de circuitos preexistentes para aprender habilidades culturales recientes
c) Como la creación de neuronas completamente nuevas para cada habilidad
d) Como la transferencia de memorias entre distintas regiones del cerebro humano adulto

50. Según el desarrollo de la clase, ¿qué explicaría la "paradoja de la lectura"?
a) Que la lectura es en realidad un comportamiento instintivo
b) Que la selección natural favoreció directamente la lectura
c) Que los genes de la lectura mutaron muy recientemente
*d) Que la lectura reutiliza mediante reciclaje neuronal circuitos ya existentes

### Tema: El cerebro lector: circuito de la lectura

51. Según el diagrama del "cerebro lector" presentado en la clase, ¿qué área se especializa en el reconocimiento visual de las palabras escritas?
a) El área de Broca
b) El área de Wernicke posterior
*c) El área denominada VWFA
d) El surco intraparietal

52. Según el diagrama del "cerebro lector" presentado en la clase, ¿qué estructura conecta la VWFA con las áreas de lenguaje hablado, vinculando así la lectura con el habla?
a) El surco intraparietal
*b) El fascículo arqueado
c) La corteza visual temprana
d) El área de Broca

### Tema: Rutas neuronales y memoria de trabajo de largo plazo

53. A diferencia de la arquitectura de Von Neumann de las computadoras, ¿cómo funcionan las redes neuronales del cerebro?
*a) La memoria y el procesamiento utilizan el mismo sustrato físico
b) La memoria y el procesamiento están completamente separados el uno del otro
c) Solo existe memoria, sin ningún tipo de procesamiento activo
d) Solo existe procesamiento, sin ningún tipo de memoria disponible

54. Según la clase, ¿cuáles son las dos limitaciones principales de la memoria de trabajo humana?
a) Alta capacidad y baja velocidad de acceso a la información
b) Baja capacidad y alta durabilidad de la información guardada
*c) Baja capacidad y baja durabilidad de la información guardada
d) Alta capacidad y alta durabilidad sin ningún tipo de límite

55. ¿Qué característica distingue a la memoria de trabajo de largo plazo, según la clase?
a) Que solo puede almacenar información durante unos pocos segundos
*b) Que tiene una capacidad prácticamente ilimitada y se evoca con rapidez
c) Que se borra por completo cada vez que dormimos
d) Que solo funciona correctamente durante la niñez temprana

56. Según la clase, ¿qué es lo que realmente permite pensar mejor, más allá del acceso rápido a información externa?
a) La cantidad total de dispositivos electrónicos que usa una persona a diario
b) La velocidad de la conexión a internet disponible
c) La cantidad de búsquedas que se hacen por día
*d) La información bien consolidada en la memoria de largo plazo

### Tema: Logros extraordinarios requieren esfuerzo

57. Según el paper mencionado sobre atletas mentales ("mental athletes"), ¿qué argumentan los autores sobre sus habilidades?
a) Que sus habilidades son completamente innatas y no pueden entrenarse
b) Que sus habilidades dependen de una estructura cerebral única e irrepetible
*c) Que sus habilidades se basan en trucos que cualquier persona puede aprender
d) Que sus habilidades solo pueden desarrollarse durante la infancia temprana

## Nivel 3: Aprendizaje: Humanos vs Máquinas (Parte 2)

### Tema: Memoria de trabajo de largo plazo: consolidación del aprendizaje

1. Según la teoría de la carga cognitiva (CLT), ¿cuál es la clave del aprendizaje?
a) Evitar por completo la repetición de ejercicios ya resueltos
*b) Guardar información y automatizar procedimientos en la memoria de largo plazo
c) Delegar la mayor parte del conocimiento en dispositivos externos
d) Memorizar la mayor cantidad posible de datos sueltos y aislados entre sí

2. Según la clase, ¿cuál es la forma más efectiva de guardar información en la memoria de trabajo de largo plazo?
a) Mediante el descubrimiento espontáneo, sin ningún tipo de guía docente
b) Mediante la exposición pasiva y repetida a estímulos aleatorios
*c) Mediante la enseñanza y el aprendizaje explícitos y estructurados
d) Mediante el ensayo y error, sin retroalimentación

3. Según la clase, ¿qué efecto tiene comenzar el aprendizaje repitiendo desde el principio, en vez de arrancar directamente por lo más difícil?
a) Elimina por completo la necesidad de práctica posterior
b) Reduce la capacidad disponible de la memoria de corto plazo
c) Bloquea la consolidación de lo aprendido en la memoria de largo plazo
*d) Evita la frustración y refuerza la plasticidad mediante la dopamina

4. Según la clase, ¿en quiénes es importante que el aprendizaje comience generando motivación mediante pequeños logros resueltos de forma autónoma?
*a) Tanto en niños como en adultos
b) Únicamente en niños en edad escolar temprana
c) Únicamente en adultos que ya dominan la habilidad
d) Únicamente en estudiantes universitarios avanzados

### Tema: Las tres etapas del aprendizaje

5. Según la clase, ¿cuáles son las tres etapas de cualquier aprendizaje?
a) Atención, motivación y consolidación general del proceso
*b) Adquisición, fluidez y generalización del aprendizaje
c) Repetición, memorización, evaluación y corrección final
d) Percepción, procesamiento y respuesta motora

6. ¿En qué etapa del aprendizaje se encuentran los estudiantes si todavía no pueden responder con precisión sin ayuda?
*a) En la etapa de adquisición
b) En la etapa de fluidez del aprendizaje
c) En la etapa de generalización del aprendizaje
d) En la etapa de mantenimiento del aprendizaje

7. ¿En qué etapa del aprendizaje se encuentran los estudiantes si responden con precisión pero de forma laboriosa?
a) En la etapa de adquisición del aprendizaje
*b) En la etapa de fluidez
c) En la etapa de generalización del aprendizaje
d) En la etapa de mantenimiento del aprendizaje

8. ¿En qué etapa del aprendizaje están los estudiantes si tienen fluidez y pueden aplicar lo aprendido a contextos nuevos?
a) En la etapa de adquisición del aprendizaje
b) En la etapa de fluidez del aprendizaje
*c) En la etapa de generalización
d) En la etapa de mantenimiento del aprendizaje

9. Según la clase, ¿qué tipo de práctica caracteriza a la etapa de adquisición del aprendizaje?
*a) Instrucción explícita y práctica en bloques del mismo tipo
b) Práctica cronometrada contra reloj para superar la propia marca personal anterior
c) Práctica intercalada con problemas de distintos tipos
d) Práctica espaciada que revisa periódicamente el material aprendido

10. Según la clase, ¿qué tipo de práctica caracteriza a la etapa de fluidez del aprendizaje?
a) Instrucción explícita y práctica en bloques del mismo tipo
*b) Práctica cronometrada, trabajando contra reloj para mejorar la marca personal
c) Práctica intercalada con problemas de distintos tipos
d) Práctica espaciada que revisa periódicamente el material aprendido

11. Según la clase, ¿qué tipo de práctica caracteriza a la etapa de generalización del aprendizaje?
a) Instrucción explícita y práctica en bloques del mismo tipo
b) Práctica cronometrada, trabajando contra reloj para mejorar la marca personal
*c) Práctica intercalada con problemas no rutinarios de varias soluciones posibles
d) Práctica espaciada que revisa periódicamente el material aprendido

12. Según la clase, ¿qué caracteriza a la etapa de mantenimiento del aprendizaje?
a) Instrucción explícita y práctica en bloques del mismo tipo
b) Práctica cronometrada, trabajando contra reloj para mejorar la marca personal
c) Práctica intercalada con problemas de distintos tipos
*d) Práctica espaciada que revisa periódicamente el material ya aprendido

### Tema: Los cuatro pilares del aprendizaje

13. Según la clase, ¿cuáles son los cuatro pilares del aprendizaje que permiten atravesar sus tres etapas?
a) Adquisición, fluidez, generalización y mantenimiento
b) Instrucción, práctica, evaluación y corrección docente
*c) Atención, feedback, motivación y consolidación
d) Percepción, memoria, lenguaje y razonamiento verbal

### Tema: Atención y práctica deliberada

14. Según la clase, ¿qué nombre recibe el esfuerzo que nos saca levemente de la zona de confort y que nos permite seguir aprendiendo?
a) La práctica espaciada del contenido
b) La práctica intercalada de ejercicios
c) La práctica cronometrada bajo presión
*d) La práctica deliberada

15. Según el gráfico de habilidad en función del tiempo presentado en la clase, ¿qué ocurre cuando alguien deja de prestar atención tras alcanzar cierto nivel de desempeño?
*a) Se estanca en una meseta y no sigue mejorando
b) Retrocede automáticamente por completo hasta el nivel de principiante otra vez
c) Alcanza el nivel de experto de forma acelerada
d) Pierde por completo la habilidad ya adquirida

16. Según la clase, ¿cómo se puede saber si realmente se está prestando atención a una tarea que se está realizando?
a) Si se puede realizar la tarea escuchando música sin problema
*b) Si no se puede hacer al mismo tiempo otra tarea no automatizada
c) Si la tarea se completa siempre en menos tiempo que en la sesión anterior
d) Si no se cometen errores durante toda la sesión de práctica

### Tema: Feedback constructivo

17. Según la clase, ¿qué suele funcionar mejor para mejorar el desempeño: el premio o el castigo?
a) El castigo por el mal desempeño
b) Ninguno de los dos tiene efecto sobre el desempeño
*c) El premio por el buen desempeño
d) Ambos funcionan exactamente igual de bien

18. Según la clase, ¿qué fenómeno estadístico puede generar la falsa impresión de que castigar el mal desempeño lo mejora?
a) El sesgo de confirmación
b) La ley de los grandes números
c) El efecto placebo
*d) La regresión a la media

19. Según la clase, ¿en qué orden se organiza una técnica de feedback constructivo usada en organizaciones?
*a) Valoro, me pregunto, sugiero
b) Primero sugiero, luego valoro, después me pregunto
c) Primero me pregunto, luego sugiero, después valoro
d) Primero valoro, luego sugiero, después me pregunto

20. Según la clase, ¿qué explica la "maldición del conocimiento"?
a) Que el conocimiento acumulado siempre se pierde con el tiempo
*b) Que quien sabe algo pierde la perspectiva de quien no lo sabe
c) Que enseñar algo reduce, con el tiempo, el propio dominio sobre ese conocimiento
d) Que el conocimiento nuevo siempre contradice por completo al conocimiento previo adquirido

### Tema: Motivación

21. Según la clase, ¿cómo se define la motivación intrínseca?
a) Como la realización de una actividad para obtener una recompensa externa
b) Como la realización de una actividad únicamente por obligación laboral
*c) Como la realización de una actividad por placer o satisfacción propia
d) Como la realización de una actividad para evitar una consecuencia negativa

22. Según la clase, ¿cómo se define la motivación extrínseca?
a) Como la realización de una actividad por placer o satisfacción propia
b) Como la realización de una actividad sin ningún tipo de objetivo claro
c) Como la realización de una actividad únicamente por simple curiosidad personal
*d) Como la realización de una actividad para obtener una recompensa o evitar un castigo

23. Según la clase, ¿cuáles son los ejemplos de motivación intrínseca que se mencionan?
*a) Un niño que pinta por placer, un investigador que estudia por curiosidad y alguien que hace deporte por diversión
b) Un estudiante que estudia por una calificación, un empleado que trabaja por un bono y un deportista que busca un trofeo
c) Un niño que pinta para ganar un premio, un investigador que publica por prestigio y un deportista que compite por dinero
d) Un empleado que evita una sanción, un estudiante que copia y un deportista que entrena por obligación

24. Según la clase, ¿cuáles son los ejemplos de motivación extrínseca que se mencionan?
a) Un niño que pinta por placer, un investigador que estudia por curiosidad y alguien que hace deporte por diversión
*b) Un estudiante que estudia por una calificación, un empleado que trabaja por un bono y un deportista que busca un trofeo
c) Un niño que pinta para relajarse, un investigador que estudia por vocación y un deportista que juega por amor al deporte
d) Un empleado que disfruta su trabajo, un estudiante que ama aprender y un deportista que entrena por gusto

25. Según la clase, en proyectos de producción por pares como el software libre, ¿qué amenaza a la motivación implica el temor a que el producto común se comercialice para beneficio privado de algunos?
a) El temor a la falla en la integración
b) El temor a la maldición del conocimiento
*c) El temor a la apropiación unilateral del proyecto común
d) El temor a la regresión a la media

26. Según la clase, en proyectos de producción por pares, ¿qué amenaza a la motivación implica que los contribuidores individuales crean que su esfuerzo será desperdiciado?
a) El temor a la apropiación unilateral del recurso común
b) El temor a la regresión estadística hacia la media
c) El temor a la maldición del conocimiento compartido
*d) El temor a la falla en la integración del proyecto

27. Según la clase, ¿qué técnica vinculada a la regulación del esfuerzo y los descansos durante el estudio se menciona?
*a) La técnica Pomodoro
b) La técnica de repaso espaciado
c) La técnica de práctica intercalada
d) La técnica de retroalimentación inmediata

### Tema: Consolidación: el hábito y el crecimiento del conocimiento

28. Según el ejemplo desarrollado en la clase sobre el hábito de leer, ¿qué explica que el conocimiento de un experto genere la sensación de estar frente a un "genio"?
a) Que los expertos nacen con una capacidad cerebral única
*b) Que el conocimiento crece de forma geométrica y exponencial
c) Que el conocimiento se transmite genéticamente entre generaciones
d) Que los expertos memorizan una cantidad fija de datos

29. Según la clase, ¿por qué se dice que el aprendizaje es multiplicativo y no aditivo?
a) Porque cada hora de estudio equivale al doble de conocimiento
b) Porque cada tema nuevo reemplaza por completo al anterior
*c) Porque cada conocimiento nuevo se relaciona con todo lo ya sabido
d) Porque el conocimiento se pierde si no se repite siempre

30. ¿Cómo se define la reserva cognitiva según la clase?
a) Como la cantidad total de neuronas disponibles al nacer
b) Como la velocidad máxima de procesamiento de información
c) Como la capacidad de recordar información sin ningún esfuerzo
*d) Como la tolerancia cognitiva frente a cambios cerebrales por edad o patología

31. Según la cita presentada en la clase, ¿qué son las "Zonas Azules"?
*a) Regiones del mundo con algunas de las poblaciones más longevas
b) Regiones del mundo con los mayores niveles de contaminación
c) Zonas cerebrales asociadas al procesamiento del color azul
d) Países con los sistemas educativos mejor calificados del mundo

32. ¿Cuáles de las siguientes son "Zonas Azules" mencionadas en la clase?
a) París (Francia), Londres (Reino Unido) y Berlín (Alemania)
*b) Cerdeña (Italia), Okinawa (Japón) e Icaria (Grecia)
c) Tokio (Japón), Nueva York (Estados Unidos) y Londres (Reino Unido)
d) El Cairo (Egipto), Roma (Italia) y Atenas (Grecia)

33. Según la clase, ¿qué tipo de actividades asociadas al alto rendimiento cognitivo en adultos mayores incluye rompecabezas, lectura y juegos de mesa?
*a) Actividades intelectualmente estimulantes
b) Actividades físicas
c) Actividades sociales
d) Actividades de consolidación espaciada

34. Según la clase, ¿qué tipo de actividades asociadas al alto rendimiento cognitivo en adultos mayores incluye ejercicios aeróbicos y anaeróbicos, jardinería y danza?
a) Actividades intelectualmente estimulantes
*b) Actividades físicas
c) Actividades sociales
d) Actividades de consolidación espaciada

35. Según la clase, ¿qué tipo de actividades asociadas al alto rendimiento cognitivo en adultos mayores incluye viajes, eventos culturales y socialización con amigos y familia?
a) Actividades intelectualmente estimulantes
b) Actividades físicas
*c) Actividades sociales
d) Actividades de consolidación espaciada

36. Según el estudio de desempeño en un test matemático a distintas edades mencionado en la clase, ¿qué relación se observa entre el nivel educativo y el desempeño a mayor edad?
a) El nivel educativo no tiene relación con el desempeño en la vejez
b) A mayor nivel educativo, el desempeño cae más rápido con la edad
*c) A mayor nivel educativo, el desempeño se mantiene más alto con la edad
d) El desempeño es igual para todos los niveles educativos en la vejez

37. Según la clase, ¿qué tipo de habilidad midió el test matemático usado en el estudio de desempeño por edad?
a) La memoria de trabajo de corto plazo
b) El razonamiento verbal
c) La memoria episódica autobiográfica
*d) La inteligencia fluida

## Nivel 4: Emociones y su regulación

### Tema: El TDAH y sus síntomas emocionales

1. Según el material, ¿cuáles son los rasgos distintivos "core" del TDAH, más allá de los síntomas emocionales asociados?
a) Ansiedad, depresión y baja autoestima
*b) Falta de atención, impulsividad e hiperactividad
c) Procrastinación, insomnio y fatiga crónica
d) Cambios de humor, irritabilidad y aislamiento social

2. El material describe al TDAH en adultos como una condición que suele estar...
a) sobrediagnosticada y sobretratada
b) diagnosticada solo en la niñez
c) asociada únicamente a síntomas físicos y visibles
*d) infradiagnosticada, infratratada y poco reconocida

### Tema: El modelo de los dos sistemas de pensamiento

3. Según el modelo de los dos sistemas de pensamiento retomado en el material, ¿qué caracteriza al Sistema 1?
a) Es lento, consciente y confiable
*b) Es rápido, automático y completamente inconsciente
c) Se usa solo para decisiones complejas
d) Es deliberado y requiere esfuerzo consciente sostenido

4. Según el modelo de los dos sistemas de pensamiento retomado en el material, ¿qué caracteriza al Sistema 2?
a) Es rápido y propenso a errores
b) Opera de forma automática e inconsciente
*c) Es lento, deliberado y requiere esfuerzo consciente
d) Se usa principalmente para tomar decisiones cotidianas simples

### Tema: ¿Qué son las emociones?

5. Según el material, ¿qué relación se plantea entre las emociones y la inteligencia artificial?
*a) Por ahora no se cree que exista un análogo de las emociones en las IAs
b) Las emociones ya fueron replicadas con éxito en los modelos de IA actuales
c) Las emociones son un fenómeno exclusivamente computacional, sin ningún correlato biológico o corporal
d) Los modelos de lenguaje actuales simulan emociones de forma prácticamente idéntica a como las sienten los humanos

6. Según el material, las emociones están asociadas a...
a) procesos exclusivamente culturales aprendidos durante la vida adulta
b) decisiones racionales tomadas de forma plenamente consciente y deliberada
*c) estructuras innatas del cerebro moldeadas por la evolución
d) patrones de crianza específicos de cada familia

7. ¿Qué distingue a los sentimientos, como la felicidad o la satisfacción, de las emociones, según el material?
a) Los sentimientos son exclusivos de los animales no humanos, nunca de los seres humanos adultos y mayores
b) Los sentimientos no tienen ninguna base biológica ni neuronal reconocida por la ciencia actual
c) Los sentimientos son idénticos a las emociones en su definición y en su duración
*d) Los sentimientos se asocian más a componentes cognitivos y duran más en el tiempo de vida

### Tema: Cuatro ideas consensuadas sobre las emociones desde la psicología evolutiva

8. Según el material, ¿qué son las emociones desde la perspectiva de la psicología evolutiva?
*a) El resultado del perfeccionamiento de dispositivos de sobrevivencia a lo largo de la evolución de las especies biológicas
b) Mecanismos aprendidos exclusivamente a través de la cultura y la educación formal recibida durante la vida adulta
c) Un fenómeno exclusivo de la conciencia humana sin base biológica ni ningún correlato en otras especies animales
d) Reacciones aleatorias sin ninguna función adaptativa ni relación alguna con la supervivencia de la especie a lo largo del tiempo

9. Según el material, ¿qué conjunto de fenómenos mentales se explican, entre otros, por el perfeccionamiento evolutivo de las emociones como dispositivos de sobrevivencia?
a) La memoria de trabajo, el lenguaje, el razonamiento lógico y la planificación consciente diaria y constante
b) La plasticidad cerebral, la mielinización, la poda sináptica y la neurogénesis adulta
c) La atención selectiva, la memoria semántica, la toma de decisiones racional y el pensamiento abstracto
*d) Las emociones primarias, los ambientes obesogénicos, el ambiente "instagramagénico", el tribalismo y el amor romántico

10. Según el material, ¿qué tienen en común los dispositivos evolutivos que dan lugar a las emociones en los distintos mamíferos?
a) Cada especie de mamífero desarrolló estructuras cerebrales completamente distintas para las emociones a lo largo de la evolución
b) Solo están presentes en los primates y en el ser humano, nunca en el resto de los mamíferos
*c) Utilizan las mismas estructuras cerebrales y los mismos neurotransmisores en todos los mamíferos, incluyendo al ser humano
d) Dependen exclusivamente del aprendizaje social de cada individuo y no de ninguna estructura cerebral heredada evolutivamente

11. Según el material, ¿a qué función básica están vinculadas las estructuras cerebrales que sustentan las emociones?
*a) A la regulación del equilibrio interno necesario para la supervivencia
b) A la generación del lenguaje verbal y su comprensión en distintos contextos
c) Al almacenamiento de la memoria episódica de largo plazo
d) A la coordinación motora fina de los movimientos voluntarios

12. Según el material, ¿en qué fenómenos corporales están íntimamente arraigadas las emociones?
a) En el lenguaje corporal aprendido culturalmente
b) En la actividad exclusiva de la corteza prefrontal humana
c) En los reflejos motores de la médula espinal
*d) En fenómenos sensitivos y viscerales llamados interocepción corporal

13. Según una idea citada en el material sobre la relación entre el cuerpo y las emociones, ¿qué son las emociones?
a) Pensamientos abstractos y racionales sobre una situación vivida
*b) Los cambios físicos que experimentamos ante una situación determinada
c) Juicios morales que hacemos sobre lo que nos sucede
d) Recuerdos asociados a experiencias pasadas que ya no sentimos igual

### Tema: Las emociones básicas

14. Según el material, ¿qué evidencia relacionada con el desarrollo temprano sustenta que ciertas emociones sean consideradas básicas?
a) Se observan únicamente después de los cinco años de edad y nunca antes de esa etapa
b) Aparecen solo tras la adquisición completa del lenguaje verbal en la infancia
*c) Se observan incluso en personas con ceguera y sordera congénitas, desde edades muy tempranas
d) Se desarrollan exclusivamente durante la adolescencia y la adultez temprana, nunca antes

15. Según el material, ¿qué evidencia transcultural sustenta que ciertas emociones sean consideradas básicas?
*a) Se observan en distintas culturas, lo que sugiere que son universales y compartidas
b) Solo se observan en culturas occidentales industrializadas y profundamente modernas del siglo actual y presente
c) Varían completamente de una cultura a otra, sin ningún patrón común
d) Dependen del idioma que se hable en cada región del mundo

16. Según el material, ¿qué permite reconocer las emociones básicas, más allá de su aparición temprana y su presencia en distintas culturas?
a) Informes verbales estandarizados completados por un profesional entrenado
b) Escáneres cerebrales individuales realizados en un laboratorio especializado
c) Cuestionarios de autopercepción completados de forma individual y voluntaria cada vez
*d) Expresiones faciales universales, comunes a todas las culturas humanas

### Tema: Patrones de desarrollo y envejecimiento

17. Según el gráfico presentado en el material, que compara datos propios con datos de Harvard, ¿qué patrón se observa en el desempeño a lo largo de la edad?
a) Un descenso continuo desde la infancia hasta la vejez, sin ninguna meseta intermedia en ninguno de los dos conjuntos de datos
b) Un patrón completamente distinto entre ambos conjuntos de datos, sin ningún punto de coincidencia entre ellos a lo largo de toda la vida
*c) Un patrón similar de aumento en la juventud, una meseta en la adultez y un descenso hacia edades avanzadas, en ambos conjuntos de datos
d) Un aumento constante del desempeño a lo largo de toda la vida, sin ninguna meseta ni descenso en ninguna etapa del desarrollo o del envejecimiento

### Tema: El sistema nervioso: ramas y funciones

18. Según el diagrama del sistema nervioso presentado en el material, ¿qué compone el sistema nervioso central?
*a) El cerebro (hemisferios, tronco y cerebelo) y la médula espinal
b) Los nervios periféricos y los ganglios del sistema nervioso autónomo periférico
c) El sistema nervioso simpático y el sistema parasimpático periférico
d) Las vías sensoriales y las vías motoras voluntarias del cuerpo

19. Según el diagrama del sistema nervioso presentado en el material, ¿en qué dos ramas se divide el sistema nervioso periférico?
a) En el sistema central y el sistema simpático
*b) En el sistema autónomo y el sistema somático del cuerpo
c) En el sistema parasimpático y el sistema motor
d) En el cerebro y en la médula espinal solamente y exclusivamente

20. Según el diagrama del sistema nervioso presentado en el material, ¿cuál es la función principal asociada a la rama simpática del sistema nervioso autónomo?
a) La relajación y la recuperación del cuerpo en completo y profundo reposo
b) La digestión y el descanso profundo del organismo en calma
c) El procesamiento sensorial voluntario del entorno inmediato y consciente
*d) La acción, asociada a la respuesta de lucha o huida

21. Según el diagrama del sistema nervioso presentado en el material, ¿cuál es la función principal asociada a la rama parasimpática del sistema nervioso autónomo?
*a) La relajación y la recuperación del organismo
b) La acción, asociada a la lucha o huida
c) El control de los movimientos voluntarios
d) El procesamiento de la información sensorial

22. Según el diagrama del sistema nervioso presentado en el material, ¿qué controla el sistema nervioso autónomo en su conjunto?
a) El procesamiento de información sensorial y los movimientos voluntarios del cuerpo humano
*b) Los movimientos musculares involuntarios y los órganos viscerales internos del cuerpo
c) Los reflejos espinales exclusivamente, sin ninguna otra función asociada
d) La producción y comprensión del lenguaje hablado y escrito

23. Según el diagrama del sistema nervioso presentado en el material, ¿de qué se encarga el sistema nervioso somático?
a) De la regulación de los órganos viscerales y las glándulas internas del cuerpo humano por completo
b) De la respuesta de lucha o huida ante amenazas externas inmediatas percibidas
*c) Del procesamiento de la información sensorial y el control de los movimientos musculares voluntarios
d) De la relajación y la recuperación completa del organismo en reposo prolongado y profundo

24. Según el material, ¿cómo se definen los nervios en el diagrama del sistema nervioso?
a) Como conjuntos de cuerpos neuronales
b) Como redes de sinapsis exclusivamente centrales
c) Como estructuras compuestas solo por células gliales
*d) Como manojos organizados de axones nerviosos

25. Según el material, ¿de qué sistema forma parte la denominada "parte reptiliana" del cerebro?
a) Del sistema nervioso somático
*b) Del sistema nervioso autónomo central y periférico
c) De la corteza prefrontal
d) Del sistema límbico exclusivamente y no de otro

### Tema: Dolor, sufrimiento y pensamiento terribilizador

26. Según el esquema presentado en el material sobre la psicología científica y las terapias cognitivo conductuales, ¿qué transforma el dolor en sufrimiento?
*a) El pensamiento terribilizador, también llamado catastrofización
b) La activación del sistema nervioso somático
c) La ausencia de pensamientos conscientes
d) La expresión facial asociada a la emoción

### Tema: El sufrimiento y la sobreactivación del sistema simpático

27. Según el material, ¿con qué está relacionado el sufrimiento a nivel del sistema nervioso?
a) Con la activación exclusiva del sistema nervioso somático
b) Con la ausencia total de actividad del sistema nervioso autónomo
c) Con la actividad basal del sistema nervioso parasimpático y muy estable
*d) Con la sobreactivación del sistema nervioso simpático en el cuerpo

28. Según el material, ¿qué estructuras y ejes intervienen en que el sufrimiento se propague en cascada por el cuerpo?
a) El sistema nervioso parasimpático, el cerebelo y el tronco encefálico
*b) Principalmente el sistema nervioso simpático, la amígdala y el eje hipotalámico-hipofisario-adrenal
c) El sistema nervioso somático, el hipocampo y la corteza visual y occipital
d) El sistema límbico exclusivamente, sin otras estructuras involucradas en el proceso

29. Según el material, ¿qué son los "segundos dardos"?
*a) Los pensamientos posteriores a un dolor inevitable
b) Las sensaciones físicas que acompañan al dolor original
c) Los recuerdos traumáticos reprimidos
d) Las expresiones faciales asociadas al dolor

### Tema: El estrés en la vida moderna

30. Según el material, ¿qué caracteriza a los agentes estresantes que predominan en la vida moderna, a diferencia de los que enfrentaban nuestros antepasados?
a) Son exclusivamente amenazas físicas de supervivencia inmediata, iguales a las que enfrentaban nuestros antepasados en entornos naturales hostiles
b) Han desaparecido casi por completo de la vida cotidiana gracias a los avances tecnológicos, médicos y sociales de las últimas décadas
c) Afectan únicamente a las especies animales no humanas que viven en libertad en entornos naturales y salvajes remotos, lejos de cualquier ciudad o zona habitada por personas
*d) Están relacionados con problemas cotidianos como el tráfico, las finanzas, el trabajo y las relaciones sociales, más que con amenazas de supervivencia inmediata

### Tema: El sistema parasimpático y la regulación emocional

31. Según el material, ¿qué función cumple el sistema nervioso parasimpático en relación con la activación del sistema simpático y el eje hipotalámico-hipofisario-adrenal?
a) La intensifica de forma significativa
*b) Calma esa activación de forma progresiva
c) No tiene ninguna influencia sobre ella
d) La reemplaza por completo de forma permanente

32. Según el material, ¿cuál es la combinación de activación del sistema nervioso autónomo asociada a una vida larga y saludable?
*a) Una activación basal principalmente parasimpática, con una leve activación simpática y picos ocasionales ante grandes oportunidades o amenazas
b) Una activación basal principalmente simpática, con una leve activación parasimpática y picos ocasionales de relajación profunda y muy necesaria
c) Una activación simpática constante y máxima durante todo el día, sin ninguna pausa parasimpática ni descanso
d) La ausencia total de actividad tanto en la rama simpática como en la parasimpática del sistema nervioso autónomo

### Tema: Cultivar experiencias positivas

33. Según el material, ¿cuál es el primer remedio propuesto para guiar al sistema nervioso autónomo hacia la calma?
a) Evitar por completo cualquier situación que genere estrés
b) Suprimir voluntariamente los pensamientos negativos
*c) Buscar conscientemente y absorber experiencias positivas
d) Aumentar la activación del sistema nervioso simpático

34. Según el material, ¿cuáles son los tres pasos propuestos para absorber una experiencia positiva?
a) Identificar el hecho positivo, compartirlo de inmediato en redes sociales y olvidarlo rápidamente después de haberlo vivido
*b) Convertir hechos positivos en experiencias positivas, saborear esas experiencias y percibir cómo se integran en el interior
c) Registrar el hecho positivo por escrito, analizarlo racionalmente en detalle y descartarlo de inmediato para siempre y sin dudarlo
d) Recordar el hecho positivo, compararlo con experiencias pasadas similares y minimizarlo por completo una vez más

35. Según el material, ¿qué efecto tiene repetir la asimilación de experiencias positivas varias veces al día durante meses o años?
a) No genera ningún cambio duradero en el cerebro ni en el cuerpo
b) Aumenta permanentemente la activación del sistema nervioso simpático de forma extrema
c) Disminuye la capacidad de sentir emociones negativas por completo
*d) Cambia gradualmente el cerebro, construyendo estructura neuronal de forma duradera

### Tema: Manejo emocional, razón y consideración moral

36. Según el material, ¿qué diferencia al altruismo humano del de otras especies animales?
*a) El altruismo humano puede basarse en la razón, mientras que el de otras especies es fundamentalmente instintivo
b) El altruismo humano es puramente instintivo, igual que ocurre en el resto de las otras especies animales
c) Solo los animales no humanos son capaces de actuar de forma verdaderamente altruista y desinteresada con otros seres
d) El altruismo humano no tiene ninguna base biológica ni evolutiva reconocida por la ciencia actual

37. Según el material, ¿a qué conclusión llevan la evidencia objetiva y subjetiva analizadas mediante el uso de la razón, respecto de la consideración moral?
a) A que algunas personas merecen mayor consideración moral que otras por su capacidad intelectual superior
b) A que la consideración moral depende exclusivamente de la cultura y el origen de cada persona y su historia personal
*c) A que ninguna persona tiene algo especial que la haga merecedora de mayor consideración moral que las demás
d) A que solo los seres humanos altamente racionales merecen algún tipo de consideración moral plena

### Tema: Una visión alternativa del manejo emocional

38. Según la idea presentada al cierre del material sobre una visión alternativa de la libertad, ¿qué elementos involucra el tipo de libertad más importante?
a) Independencia económica, éxito profesional, reconocimiento social y comodidad material duradera en el tiempo
*b) Atención, consciencia, disciplina, esfuerzo y la capacidad de preocuparse genuinamente por los demás cada día
c) Ausencia total de responsabilidades, obligaciones y compromisos con otras personas cercanas y muy queridas de verdad
d) Control absoluto sobre las propias emociones, sin ninguna intervención externa de otras personas

39. Según el material, ¿con qué se propone identificar al manejo emocional en esta visión alternativa?
a) Con la capacidad de suprimir completamente cualquier emoción negativa apenas aparece, sin dejarla manifestarse de ninguna manera visible
b) Con la capacidad de evitar por completo el contacto con cualquier situación estresante o incómoda que pueda surgir en el día a día
*c) Con la capacidad de mantener la actitud de atención, disciplina y cuidado genuino por los demás descripta en la cita final
d) Con la capacidad de analizar racionalmente cada emoción antes de permitirse sentirla por completo, sin ninguna excepción

## Nivel 5: Introducción a la Genética del Comportamiento

### Tema: Naturaleza humana y usos históricos de la genética

1. ¿Qué característica en común señala Mukherjee entre el nazismo y el lysenkoísmo, pese a sostener teorías de la herencia opuestas?
*a) Ambos usaron una teoría de la herencia para sostener un programa político
b) Ambos negaban por completo la existencia de los genes en el comportamiento humano
c) Ambos basaban sus teorías en estudios de gemelos separados al nacer
d) Ambos promovían el uso de puntajes poligénicos en toda la población

### Tema: Qué es la genética del comportamiento

2. ¿Qué estudia específicamente la genética del comportamiento humano, según la definición presentada en la clase?
a) El código genético completo y exclusivo de cada persona en particular
*b) En qué medida el comportamiento se explica por diferencias en genes o ambientes
c) La estructura del ADN y sus mecanismos de replicación dentro de cada célula humana
d) El desarrollo del sistema nervioso durante toda la etapa embrionaria temprana

3. Según la clasificación de rasgos presentada en la clase, ¿en qué categoría se incluye la estructura cerebral?
a) Capacidades cognitivas generales, junto con la memoria de trabajo y el razonamiento abstracto
b) Personalidad, junto con la extroversión y la apertura a experiencias
*c) Fisiológicos, junto con la altura y la obesidad de una persona
d) Psiquiátricos, junto con la esquizofrenia y la depresión de una persona

4. ¿En qué categoría de rasgos ubica la clase a la fluencia verbal?
a) Fisiológicos, junto con la altura y la obesidad de una persona
b) Psiquiátricos, junto con la esquizofrenia y el autismo de una persona
c) Personalidad, junto con la extroversión y la diligencia de una persona
*d) Capacidades cognitivas generales, junto con la memoria y la matemática

### Tema: Definición del componente genético

5. Según la definición laxa presentada en la clase, ¿qué caracteriza a un rasgo con un componente genético del 100%?
*a) Las diferencias entre personas en ese rasgo se explican totalmente por los genes
b) El rasgo aparece exactamente en el cien por ciento de la población en total
c) El rasgo no puede modificarse mediante ningún tratamiento médico conocido en la actualidad
d) El rasgo se hereda de manera idéntica de ambos progenitores biológicos

6. ¿Cuál de los siguientes fue presentado en la clase como ejemplo de rasgo prácticamente 100% ambiental?
a) El color de ojos de una persona adulta
*b) El idioma en el que hablamos habitualmente
c) La altura adulta de una persona sana
d) El índice de masa corporal de un adulto

7. Si un rasgo tiene, según la definición laxa, un componente genético del 90%, ¿qué implica esto sobre el rasgo?
a) Que el noventa por ciento de la población presenta ese rasgo
b) Que el noventa por ciento de los genes participan en ese rasgo concreto
*c) Que el rasgo es fundamentalmente genético y poco influido por el ambiente
d) Que el rasgo se manifiesta recién luego de noventa días de vida

8. Según la clase, ¿qué factor puede hacer variar el componente genético estimado para un mismo rasgo?
a) El tamaño de la muestra utilizada en el estudio concreto de gemelos
b) El tipo de test psicológico empleado para medir el rasgo
c) La cantidad de cromosomas analizados en el estudio genético
*d) La población en la que se realiza la medición del rasgo

9. En la fórmula rigurosa del componente genético, CG = VG / (VG + VA), ¿qué representa el denominador (VG + VA)?
*a) La variación total del rasgo, sumando su parte genética y ambiental
b) La variación genética heredada exclusivamente por vía materna en la familia
c) La variación explicada únicamente por el ambiente compartido de la familia
d) El número total de genes que participan en ese rasgo del comportamiento

10. Según la definición rigurosa de componente genético, ¿para qué contexto es válido un valor de CG calculado?
a) Es un valor universal, válido para cualquier población y cualquier época
*b) Es válido para una población determinada en un momento determinado
c) Es válido únicamente cuando se estudia a gemelos idénticos criados juntos
d) Es válido solamente si se mide dentro de una única familia

11. ¿Cómo se define el Ambiente Compartido dentro de la variación ambiental total (VA)?
a) Los factores ambientales exclusivos de cada individuo, no compartidos con nadie más
b) La proporción de variación de un rasgo explicada por los genes de la familia
*c) Los factores ambientales que hacen que una familia se parezca, como el barrio
d) Los factores prenatales que afectan únicamente a los gemelos idénticos criados juntos desde el nacimiento

12. ¿Cómo se define el Ambiente No Compartido?
a) Los factores que hacen que dos hermanos criados juntos se parezcan mucho entre sí desde niños
b) Los factores genéticos heredados de forma exclusiva por uno solo de los hijos
c) La correlación entre el ambiente familiar y el componente genético de un rasgo
*d) Todo lo que no es genético ni se comparte entre los miembros de una familia

### Tema: Métodos clásicos: comparación entre gemelos y mellizos

13. Según el método clásico de comparación entre gemelos y mellizos, ¿qué resultado sugiere que un rasgo tiene componente genético?
*a) Que la correlación entre gemelos sea mayor que la correlación entre mellizos
b) Que la correlación entre mellizos sea mayor que la correlación entre gemelos
c) Que gemelos y mellizos presenten exactamente la misma correlación entre sí
d) Que la correlación entre padres e hijos supere a la de los gemelos

14. ¿Cómo se calcula el componente genético (CG) en el método de comparación entre gemelos y mellizos?
a) CG = Corr(gemelos) − Corr(mellizos), sin ningún otro factor adicional
*b) CG = 2 x [Corr(gemelos) − Corr(mellizos)]
c) CG = Corr(padres e hijos biológicos) − Corr(padres e hijos adoptivos)
d) CG = Corr(gemelos) dividido la Corr(mellizos) de ese mismo estudio

15. Uno de los problemas del método señala que los ambientes de los gemelos podrían ser más parecidos entre sí que los de los mellizos. ¿Qué efecto tiene esto sobre la estimación del componente genético?
a) Subestima el componente genético del rasgo que se está estudiando actualmente
b) No genera ningún efecto sobre la estimación final del componente
*c) Sobreestima el componente genético del rasgo que se está estudiando
d) Sobreestima únicamente el componente del ambiente no compartido

16. Respecto a los ambientes intrauterinos, ¿qué problema señala la clase sobre este método de comparación?
a) Al ser más similares entre gemelos, el método sobreestima el componente genético
b) Al ser idénticos en ambos grupos, no generan ningún sesgo en la estimación
c) Al no poder medirse, obligan a descartar por completo este método clásico
*d) Al ser más similares entre mellizos, el método subestima el componente genético

17. ¿En qué consiste el problema de generalización de este método de comparación entre gemelos y mellizos?
*a) En que los resultados no son generalizables, por la mayor prematurez en gemelos y mellizos
b) En que gemelos y mellizos no pueden compararse estadísticamente entre sí de ningún modo posible realmente
c) En que el método solamente puede aplicarse a rasgos de tipo psiquiátrico o cognitivo
d) En que las agencias de adopción seleccionan familias parecidas a las familias biológicas

### Tema: Métodos clásicos: padres e hijos criados juntos

18. En el diseño que compara padres (biológicos o adoptivos) e hijos criados juntos, ¿qué resultado sugiere un componente genético del rasgo?
a) Que la correlación entre padres e hijos adoptivos supere claramente a la biológica
*b) Que la correlación entre padres e hijos biológicos supere a la adoptiva
c) Que ambas correlaciones resulten exactamente idénticas entre sí en el estudio
d) Que no exista correlación alguna en ninguno de los dos grupos comparados

19. En el diseño de padres e hijos criados juntos, ¿cómo se estima el componente del Ambiente Compartido (CAC)?
a) Restando el componente genético completo a la correlación entre gemelos del estudio
b) Multiplicando por dos la correlación entre padres e hijos biológicos
*c) Como la correlación entre padres e hijos adoptivos de ese diseño
d) Restando a uno la correlación entre padres e hijos biológicos

### Tema: Métodos clásicos: padres e hijos dados en adopción al nacer

20. En el diseño con hijos dados en adopción al nacer, ¿cómo se estima el componente genético (CG), a diferencia del diseño con gemelos y mellizos?
a) Multiplicando por dos la correlación entre padres adoptivos e hijos en este diseño
b) Restando a la unidad la correlación entre padres adoptivos e hijos
c) Dividiendo la correlación entre padres biológicos por la de los adoptivos
*d) Directamente como la correlación entre padres biológicos e hijos adoptados, sin duplicar

21. ¿En qué consiste el problema de la colocación selectiva en los diseños con hijos adoptivos?
*a) Que las agencias buscan familias adoptivas parecidas a las biológicas, sobreestimando el componente genético
b) Que los hijos adoptivos nunca llegan a parecerse a sus padres adoptivos en nada
c) Que los padres biológicos nunca pueden ser localizados para participar del estudio
d) Que los ambientes intrauterinos son siempre idénticos entre las familias adoptivas

22. Según la clase, ¿qué solución se propone frente al problema de la colocación selectiva en los estudios de adopción?
a) Descartar por completo los estudios que incluyan hijos adoptivos en la muestra
*b) Evaluar cuán parecidos son entre sí los padres biológicos y los adoptivos
c) Multiplicar por dos todas las correlaciones obtenidas en el estudio
d) Utilizar únicamente gemelos criados juntos en reemplazo de los hijos adoptivos

23. ¿Qué problema puede generar el ambiente intrauterino en los diseños con hijos adoptivos?
a) Puede llevar a subestimar el componente del ambiente no compartido del rasgo
b) Puede hacer que la correlación entre padres adoptivos e hijos sea negativa
*c) Puede llevar a sobreestimar el componente genético del rasgo estudiado
d) Puede impedir por completo calcular cualquier tipo de correlación en el estudio

### Tema: Métodos clásicos: análisis multivariado entre rasgos

24. Comparando gemelos con mellizos, ¿cómo se determina si la correlación entre dos rasgos (por ejemplo, extraversión y belleza) tiene una base genética?
a) Viendo si ambos rasgos, por separado, superan un componente genético del 50%
b) Viendo si los dos rasgos aparecen siempre juntos dentro de la población general
c) Viendo si ambos rasgos se transmiten exclusivamente por vía materna en la familia
*d) Viendo si la correlación cruzada entre ambos rasgos es mayor en gemelos que en mellizos

### Tema: Métodos modernos: correlación entre alelos de genes y rasgos

25. ¿Qué es un SNP (single nucleotide polymorphism), según lo explicado en la clase?
*a) Una variante en un nucleótido del ADN, con hasta cuatro versiones posibles
b) Un gen completo que determina por sí solo un rasgo del comportamiento
c) Un cromosoma adicional presente únicamente en algunas personas de la población
d) Un tipo de mutación que ocurre solamente en el ADN mitocondrial

26. Según el ejemplo de puntaje poligénico sobre logro educativo, ¿qué diferencia de probabilidad de ir a la universidad se observó entre el 20% más y el 20% menos suertudo genéticamente?
a) 50% contra 40% de probabilidad de asistir a la universidad en total
*b) 50% contra 10% de probabilidad de asistir a la universidad
c) 90% contra 50% de probabilidad de asistir a la universidad
d) 30% contra 20% de probabilidad de asistir a la universidad aproximadamente

27. Según la clase, ¿cuáles son las dos formas mencionadas para saber si una correlación entre genes y un rasgo implica causalidad?
a) Aumentar el tamaño muestral y repetir el estudio en otra población
b) Comparar únicamente gemelos que fueron criados dentro del mismo hogar
*c) Controlar variables demográficas y estudiar el puente biológico entre gen y conducta
d) Calcular el componente del ambiente compartido y del no compartido

28. Según el ejemplo dado en la clase, ¿en qué regiones del cerebro se expresan muchos de los genes que correlacionan con el logro educativo?
a) En la retina y en el cerebelo del cerebro humano
b) En el tronco encefálico y la médula espinal humana
c) En el núcleo accumbens y la amígdala del cerebro
*d) En la corteza prefrontal y el hipocampo del cerebro

29. ¿En qué regiones se expresan los genes que correlacionan con la dislexia, según el ejemplo presentado en la clase?
*a) En regiones asociadas al reconocimiento de sonidos del habla
b) En regiones asociadas al control motor fino de las manos
c) En regiones asociadas a la memoria autobiográfica de largo plazo
d) En regiones asociadas a la regulación de las emociones

30. ¿Qué es un puntaje poligénico, según la definición dada en la clase?
a) Una medida directa del porcentaje de genes compartidos entre dos familiares
*b) Un resultado que combina lectura de ADN con análisis matemático de probabilidad
c) El número total de SNPs presentes en el genoma de una persona
d) Un diagnóstico clínico basado exclusivamente en síntomas observables del paciente

31. Según la clase, ¿con qué se compara el funcionamiento del puntaje poligénico, en cuanto a cómo se combinan variantes poco significativas por separado?
a) Con un diagnóstico médico basado en un único análisis de sangre
b) Con un examen de opción múltiple donde solo cuenta la más difícil
*c) Con un test de personalidad, donde cada pregunta individual aporta poco por sí sola
d) Con una prueba de coeficiente intelectual reducida a una sola pregunta

32. ¿Qué es la heredabilidad faltante, según lo explicado en la clase?
a) La parte de la heredabilidad que se pierde al comparar mellizos con gemelos
b) La heredabilidad de rasgos que todavía no fueron estudiados por la ciencia
c) La diferencia entre el componente genético y el ambiente compartido de un rasgo
*d) La diferencia entre la heredabilidad de estudios de gemelos y la explicada por el GWAS

### Tema: Correlación genotipo-ambiente

33. ¿Qué es la correlación genotipo-ambiente de tipo evocativa?
*a) Que otras personas tratan a los chicos de acuerdo a sus propensiones genéticas
b) Que los chicos crean activamente ambientes que correlacionan con sus propios genes
c) Que los chicos reciben de sus padres genes que ya correlacionan con el ambiente
d) Que los chicos modifican la expresión de sus propios genes según el ambiente

34. ¿Qué es la correlación genotipo-ambiente de tipo activa?
a) Que los padres eligen el ambiente familiar en función de sus propios genes
*b) Que los chicos crean ambientes que correlacionan con sus propias propensiones genéticas
c) Que otras personas tratan al chico de forma diferente según su aspecto físico
d) Que los genes de los padres determinan directamente el ambiente escolar del niño

35. ¿Qué es la correlación genotipo-ambiente de tipo pasiva?
a) Que los chicos buscan activamente ambientes que se ajusten a sus propios genes
b) Que otras personas tratan al chico de forma diferente según su genética
*c) Que los chicos reciben genes que correlacionan con el ambiente en que viven
d) Que el ambiente modifica de forma directa la expresión de los genes del chico

36. Según la clase, ¿cuál es una de las consecuencias importantes de que los genes influyan sobre los ambientes?
a) Que el componente genético deja de poder medirse mediante estudios de gemelos
b) Que el ambiente compartido y el no compartido pasan a ser exactamente iguales
c) Que los estudios de adopción dejan de ser útiles para medir el componente genético
*d) Que el componente genético puede darse de forma indirecta y ser modificable

37. Según la clase, ¿por qué muchos ambientes que correlacionan con ciertos rasgos podrían no reflejar una influencia ambiental directa?
*a) Que los genes influyen en ambientes y rasgos simultáneamente, de forma pasiva
b) Errores sistemáticos de medición cometidos en los estudios de gemelos y mellizos realizados
c) La colocación selectiva de las agencias de adopción, de forma exclusiva
d) La imposibilidad práctica de calcular el componente del ambiente compartido

38. Según el método clásico para detectar correlación genotipo-ambiente pasiva, ¿qué se compara?
a) La correlación entre rasgos de dos gemelos criados en hogares distintos
*b) La correlación entre ambiente familiar y rasgos, en familias biológicas y adoptivas
c) El componente genético de los padres biológicos frente al de los adoptivos
d) El ambiente intrauterino de los gemelos frente al de los mellizos

39. Para detectar las correlaciones genotipo-ambiente evocativa y activa mediante métodos clásicos, ¿qué se mide?
a) La correlación entre el ambiente intrauterino y el componente genético del rasgo
b) La correlación entre el ambiente compartido y el ambiente no compartido de la familia
*c) La correlación entre rasgos de los padres biológicos y el ambiente de la familia adoptiva
d) La correlación entre gemelos criados juntos y mellizos criados por separado

40. En el estudio sobre abandono paterno, hábito de fumar durante el embarazo y depresión en los hijos, ¿qué explicación alternativa a la causalidad directa se propone?
a) Que el abandono paterno y el hábito de fumar no están asociados con la depresión
b) Que la depresión de los hijos se debe solamente al ambiente no compartido
c) Que el estudio no logró calcular ningún puntaje poligénico en la muestra utilizada
*d) Que los padres tenían mayor propensión genética a la depresión y los hijos la heredaron

41. En el estudio sobre abandono paterno, hábito de fumar durante el embarazo y depresión en los hijos, ¿qué ocurrió con la relación entre abandono paterno y depresión al controlar por el puntaje poligénico de depresión de los propios niños?
*a) La relación entre ambas variables desapareció por completo del análisis
b) La relación se hizo todavía más fuerte de lo que era antes
c) La relación se mantuvo exactamente igual a como era antes
d) La relación se volvió negativa en lugar de positiva como antes

42. En ese mismo estudio sobre abandono paterno, hábito de fumar durante el embarazo y depresión en los hijos, ¿qué ocurrió al controlar por el puntaje poligénico de depresión de los padres, en lugar del de los hijos?
a) La relación entre abandono paterno y depresión también desapareció del análisis
*b) La relación entre abandono paterno y depresión no desapareció del análisis
c) La relación se volvió considerablemente más significativa que al principio
d) Dejó de poder calcularse el puntaje poligénico de los propios hijos

### Tema: Interacción genotipo-ambiente

43. ¿Qué se entiende por interacción genotipo-ambiente, según la clase?
a) Que los genes influyen sobre los ambientes en los que vive una persona
b) Que ambiente y genes explican, cada uno, la mitad exacta de un rasgo
*c) Que la influencia del ambiente sobre un rasgo puede variar según el alelo del gen
d) Que dos hermanos comparten tanto sus genes como su ambiente familiar

44. En el ejemplo (catalogado como dudoso) sobre el gen MAOA y el maltrato infantil, ¿qué patrón se observa en el gráfico sobre conducta antisocial?
a) La conducta antisocial resulta idéntica en ambos grupos, sin importar el maltrato sufrido
b) La actividad alta de MAOA aumenta la conducta antisocial más que la actividad baja
c) El maltrato solo afecta la conducta antisocial en personas sin ninguna copia del gen MAOA
*d) Con más maltrato, la baja actividad de MAOA muestra un aumento mayor de conducta antisocial

45. En el ejemplo (catalogado como dudoso) sobre el gen transportador de serotonina y los eventos de vida estresantes, ¿qué se observa sobre la probabilidad de un episodio de depresión mayor?
*a) El genotipo s/s aumenta más su probabilidad de depresión que el genotipo l/l
b) El genotipo l/l muestra el aumento más pronunciado ante más eventos estresantes
c) Todos los genotipos muestran la misma probabilidad sin importar los eventos estresantes posibles registrados
d) La probabilidad de depresión disminuye a medida que aumentan los eventos estresantes

46. En el estudio que midió interacción genotipo-ambiente con puntaje poligénico para TDAH y maltrato infantil, ¿qué se concluyó?
a) Que el maltrato solo aumenta los síntomas en quienes tienen puntaje poligénico alto
*b) Que el maltrato aumenta los síntomas independientemente del puntaje, sin interacción detectada
c) Que el puntaje poligénico predice los síntomas mejor de lo que predice el maltrato
d) Que no existe ninguna relación entre el maltrato infantil y los síntomas de TDAH
`;
