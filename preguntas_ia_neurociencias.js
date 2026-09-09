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
`;
