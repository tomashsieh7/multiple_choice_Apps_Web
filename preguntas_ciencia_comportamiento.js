/*
 * ============================================================================
 * FORMATO DE ARCHIVOS DE PREGUNTAS — ESPECIFICACIÓN
 * ============================================================================
 *
 * Este archivo define el contenido de UNA materia para la app de repaso
 * (quiz.html). Se carga con <script src="preguntas.js"></script> (un script
 * clásico, no un módulo ni fetch) para poder abrir quiz.html haciendo doble
 * clic desde el explorador de archivos, sin servidor, sin problemas de CORS.
 *
 * Cada archivo de materia define EXACTAMENTE estas 3 constantes globales,
 * con un sufijo propio (acá "_CCA") para no chocar con los de otras materias
 * si se cargan varios archivos de materia en la misma quiz.html:
 *
 *   const MATERIA_ID_<SUFIJO>     = "id-unico-sin-espacios";
 *   const MATERIA_NOMBRE_<SUFIJO> = "Nombre visible de la materia";
 *   const PREGUNTAS_RAW_<SUFIJO>  = `...texto plano con el formato de abajo...`;
 *
 * Ver el README.md del proyecto para el paso a paso de cómo agregar niveles
 * nuevos a esta materia, o cómo agregar una materia nueva copiando este
 * archivo. Lo que sigue es la especificación exacta del texto plano dentro
 * de PREGUNTAS_RAW_<SUFIJO>:
 *
 * 1. Cada nivel arranca con una línea:
 *      ## Nivel N: Nombre de la clase
 *    donde N es el número de nivel en orden secuencial empezando en 1.
 *
 * 2. Dentro de un nivel, cada pregunta arranca con un número seguido de
 *    punto y el texto de la pregunta:
 *      1. ¿Cuál es la diferencia entre...?
 *
 * 3. Cada pregunta tiene EXACTAMENTE cuatro opciones, cada una en su propia
 *    línea, con el formato:
 *      a) texto
 *      b) texto
 *      c) texto
 *      d) texto
 *
 * 4. La opción correcta se marca anteponiendo un asterisco a la letra:
 *      *c) texto
 *    Debe haber EXACTAMENTE una opción marcada como correcta por pregunta.
 *    Si el parser encuentra una pregunta con cero o más de una opción
 *    marcada, no rompe toda la app: descarta esa pregunta puntual, muestra
 *    un console.error indicando la materia, el nivel y el número de
 *    pregunta involucrados, y avisa con un banner visible en pantalla.
 *
 * 5. Las preguntas dentro de un nivel se separan por una línea en blanco.
 *
 * 6. (Opcional) Dentro de un nivel, las preguntas se pueden agrupar por tema
 *    con una línea:
 *      ### Tema: Nombre del tema
 *    Todas las preguntas hasta el próximo "### Tema:" (o el fin del nivel)
 *    pertenecen a ese tema. Cada tema se convierte en un "checkpoint": al
 *    jugar el nivel se van pasando en el orden en que están escritos en el
 *    archivo, y si se falla una pregunta se reinicia SOLO el tema donde
 *    estabas (rebarajando sus preguntas y opciones), no el nivel entero. Si
 *    un nivel no usa "### Tema:" en absoluto, se juega entero como un único
 *    checkpoint (sin partir en bloques).
 *
 * Ejemplo mínimo de una pregunta bien formada, agrupada por tema:
 *
 *   ### Tema: Patrones arquitectónicos
 *
 *   1. ¿Cuál de los siguientes es un patrón arquitectónico?
 *   a) Bubble sort
 *   *b) Arquitectura en capas
 *   c) Recursión de cola
 *   d) Programación dinámica
 *
 * INSTRUCCIONES PARA GENERAR CONTENIDO NUEVO CON OTRO CHAT/LLM:
 * Pedile que genere preguntas siguiendo EXACTAMENTE este formato, sin
 * markdown adicional, sin numeración fuera de la indicada, con contenido
 * de la materia correspondiente. Cada nivel = un tema o clase distinta, y
 * dentro de cada nivel agrupe las preguntas en "### Tema: Nombre" según el
 * subtema real del material (no en bloques de tamaño parejo ni al azar).
 * Recordarle que no omita el asterisco en la opción correcta y que
 * verifique que cada pregunta tenga una única opción marcada como tal.
 * ============================================================================
 */

const MATERIA_ID_CCA = "ciencia-comportamiento-aplicada";
const MATERIA_NOMBRE_CCA = "Ciencia del Comportamiento Aplicada";

const PREGUNTAS_RAW_CCA = `
## Nivel 1: Esther Dufló y la Ciencia de las Ideas

### Tema: Duflo: el problema de evaluar intervenciones sociales

1. ¿Qué describe mejor el obstáculo principal que Duflo señala al comienzo de la charla para combatir la pobreza?
*a) La falta de evidencia confiable sobre qué intervenciones de ayuda funcionan
b) La falta de fondos disponibles para financiar programas de ayuda internacional
c) La falta de acuerdo político entre los distintos países donantes
d) La falta de personal capacitado dentro de las organizaciones internacionales de ayuda humanitaria

2. Duflo considera mal planteada la pregunta sobre si la ayuda internacional beneficia o perjudica a África porque...
a) no existen datos económicos suficientes sobre el continente africano
*b) no hay forma de construir un contrafáctico para poder comparar
c) los gobiernos africanos no autorizan ese tipo de estudios
d) la pregunta ya fue respondida por estudios académicos previos

3. La analogía que usa Duflo con la medicina medieval sirve para ilustrar...
a) los avances que trajo la ciencia médica moderna a la ayuda social
b) la importancia de combinar varios tratamientos médicos al mismo tiempo
*c) el riesgo de atribuir mérito a una intervención sin evidencia real
d) la resistencia histórica de los médicos a adoptar nuevos métodos

4. ¿Qué método propone Duflo para evaluar intervenciones sociales, tomado de la medicina?
a) Los estudios de caso cualitativos aplicados a comunidades específicas
b) Las encuestas de opinión realizadas a gran escala poblacional
c) Los paneles de expertos internacionales convocados para cada caso
*d) Los ensayos aleatorizados controlados, igual que en medicina

### Tema: Casos de Duflo: inmunización, mosquiteros y educación

5. El "problema de la última milla" en inmunización infantil se refiere a...
*a) que las familias no llevan a sus hijos a vacunarse aunque haya vacunas cerca
b) que no hay suficientes vacunas producidas para toda la población infantil del país
c) que los laboratorios tardan mucho tiempo en distribuir las nuevas vacunas producidas
d) que las familias desconfían profundamente y desde hace mucho tiempo de la medicina occidental moderna

6. ¿Cuál fue el incentivo que se ofreció a cambio de cada inmunización en el experimento que describe Duflo?
a) Un pequeño pago en efectivo entregado en el momento
*b) Un kilo de lentejas entregado por cada inmunización aplicada
c) Una entrada gratuita para usar el centro de salud
d) Una ración semanal de arroz y aceite para la familia

7. Según Duflo, ¿por qué el costo por inmunización lograda terminó siendo más bajo con el incentivo de lentejas?
a) Porque las lentejas resultaron mucho más baratas que otros insumos médicos habituales
b) Porque las familias terminaron pagando parte del costo del incentivo
c) Porque se redujo la cantidad de campamentos de vacunación necesarios
*d) Porque con el mismo personal pagado se lograron muchas más vacunaciones

8. ¿Qué encontró Duflo respecto al uso de los mosquiteros entregados gratis frente a los pagados?
a) Los que pagaron por su propio mosquitero lo usaron con mucha más frecuencia
*b) Se usaron con la misma frecuencia, sin importar si fueron gratis o pagos
c) Los mosquiteros gratis se usaron mayormente como redes de pesca
d) Los mosquiteros gratis terminaron revendiéndose muy rápido en el mercado informal de la región

9. En el largo plazo, quienes habían recibido el mosquitero gratis...
a) mostraron menor disposición a comprar mosquiteros adicionales por su propia cuenta después
b) dejaron de usar cualquier mosquitero por completo al año siguiente
*c) mostraron mayor probabilidad de comprar mosquiteros adicionales por su cuenta
d) exigieron que el gobierno les siguiera regalando mosquiteros cada año

10. Entre las intervenciones para aumentar la asistencia escolar que compara Duflo, ¿cuál resultó de las más costo-efectivas?
a) Construir muchas más escuelas cerca de las comunidades rurales más alejadas
b) Entregar uniformes escolares gratuitos a cada estudiante inscripto
c) Contratar más docentes para cada escuela de la zona
*d) Desparasitar a los chicos para combatir los parásitos intestinales

11. Según las cifras que menciona Duflo, ¿qué se estima que generan cada 100 dólares invertidos en desparasitación?
*a) Entre 30 y 40 años adicionales de escolarización acumulados en la población
b) Entre 5 y 10 vacunas infantiles adicionales aplicadas en la misma comunidad rural
c) Un aumento cercano al 10% en la matrícula de una escuela
d) La construcción de un aula adicional cada dos años aproximadamente

12. ¿Cuál es el mensaje general que Duflo busca transmitir con los tres casos que presenta?
a) Que la ayuda internacional siempre resulta ser la solución más efectiva posible
*b) Que las soluciones efectivas no siempre son las intuitivas, hay que testearlas
c) Que los gobiernos locales deben decidir sin ninguna injerencia extranjera
d) Que las ONG resultan siempre mucho más eficientes que los programas estatales locales

### Tema: Orígenes de la economía del comportamiento

13. El artículo "Prospect Theory" de Kahneman y Tversky se destaca principalmente por...
a) demostrar que los incentivos monetarios no modifican el comportamiento humano
b) introducir el concepto de ensayo aleatorizado controlado en la economía
c) proponer que la ayuda gratuita reduce el valor percibido de los bienes
*d) mostrar con experimentos que se violan axiomas de la utilidad esperada

14. Según el ejemplo de los 500 dólares que menciona el texto en relación con la teoría de Kahneman y Tversky, ¿qué ilustra ese ejemplo?
a) Que el dinero siempre pierde valor con el paso del tiempo por la inflación
*b) Que perder una suma de dinero genera más insatisfacción que la felicidad de ganarla
c) Que el valor del dinero depende exclusivamente de la cantidad de bienes que permite comprar
d) Que las personas prefieren sumas grandes de dinero aunque impliquen mayor riesgo

15. La predicción de Thaler sobre la evolución del "Homo Economicus" plantea que...
a) la economía del comportamiento va a reemplazar por completo a la microeconomía en el futuro
b) los seres humanos se van a volver cada vez más racionales
c) los modelos económicos van a dejar por completo de usar la racionalidad
*d) el Homo Economicus va a evolucionar hacia el Homo Sapiens en los modelos

16. Según el texto, un sesgo (en el sentido de la economía del comportamiento) se define como...
a) una preferencia personal sin relación alguna con la racionalidad
b) un error aleatorio que no sigue ningún patrón reconocible
c) una falla que afecta exclusivamente a las poblaciones de bajos ingresos
*d) una desviación sistemática y predecible en la forma de decidir

17. El libro de Richard Thaler llamado "Misbehaving" ("Portarse mal") se refiere a...
a) el comportamiento imprevisible que suelen tener los mercados financieros
b) las conductas antiéticas de algunas empresas multinacionales conocidas
*c) los errores típicos de percepción y decisión del Homo Sapiens
d) las fallas habituales que tienen los gobiernos al diseñar sus políticas públicas

18. Las "nudge units" mencionadas en la introducción son...
a) laboratorios académicos dedicados exclusivamente a publicar papers científicos especializados
b) empresas privadas de consultoría en marketing y publicidad
c) organismos internacionales que financian programas globales de vacunación en distintos países
*d) organizaciones que aplican la economía del comportamiento a políticas

### Tema: Almuerzos baratos y el peso de los detalles

19. ¿Qué plantean los autores en relación con la frase de Milton Friedman de que "no existe tal cosa como un almuerzo gratis"?
*a) Que, aunque no hay almuerzos gratis, muchas veces existen intervenciones efectivas de bajo costo
b) Que la frase es incorrecta porque la economía del comportamiento logra soluciones totalmente gratuitas
c) Que Friedman se refería únicamente a las políticas de salud y no a otras áreas de gobierno
d) Que la frase solo es válida en países de altos ingresos y no en el resto del mundo

20. En el caso de El Salvador que describen los autores en la introducción, a pesar de haber entregado micronutrientes gratis al 82% de los hogares, ¿qué se descubrió?
a) Que la mayoría de las familias los revendía rápidamente en mercados informales de la zona
b) Que la anemia infantil había desaparecido por completo en pocos meses
*c) Que menos de un cuarto de los hogares los consumía en tiempo y forma
d) Que los micronutrientes entregados no cumplían con los estándares sanitarios exigidos

21. Según el texto, ¿por qué es una buena noticia que "los detalles importen" en el diseño de políticas?
a) Porque los detalles siempre son más fáciles de identificar que los factores estructurales
b) Porque elimina por completo la necesidad de evaluar el impacto de los programas
c) Porque los gobiernos ya cuentan con toda la información necesaria para optimizarlos de manera rápida
*d) Porque diseñar un programa de forma correcta suele costar lo mismo que hacerlo mal

22. El experimento con docentes ecuatorianos sobre el "efecto orden" consistió en...
a) obligar a un grupo de docentes a trabajar en zonas vulnerables
b) comparar el desempeño de los docentes según su año de egreso universitario reciente
*c) cambiar el orden en que se listaban las escuelas en la plataforma
d) ofrecer un bono económico a quienes eligieran escuelas vulnerables

23. Según el texto, ¿cuál es el aspecto negativo de que los detalles importen tanto en la toma de decisiones?
a) Que cambiar un detalle suele ser mucho más costoso que rediseñar todo el programa
b) Que resulta imposible medir el efecto de cualquier intervención basada en detalles
*c) Que entender exactamente qué detalles son relevantes en cada caso resulta difícil
d) Que los detalles solo son relevantes en problemas de salud pública

### Tema: El camino del paciente: de la política a los resultados

24. En el ejemplo del comité de salud contra las enfermedades cardiovasculares, ¿en qué consistía la propuesta de la ministra de infraestructura?
a) Crear un sistema de multas para quienes no asistieran a sus controles médicos
*b) Duplicar la cantidad de hospitales y centros de atención primaria en el país
c) Entrenar a médicos generalistas en técnicas específicas de diagnóstico cardiológico y en tratamiento avanzado
d) Reducir impuestos a las empresas farmacéuticas que producían medicamentos cardiovasculares

25. En el ejemplo hipotético del comité de salud, ¿qué resultado tuvo la política de duplicar hospitales y centros de atención primaria?
*a) Tuvo un impacto modesto, casi imperceptible, sobre las muertes cardiovasculares
b) Redujo las muertes cardiovasculares exactamente en el 20% previsto
c) Fracasó por falta de financiamiento suficiente para poder completarla a tiempo
d) Aumentó de forma notable la cantidad de consultas preventivas

26. Según el texto, ¿por qué reducir las muertes por enfermedades cardiovasculares no depende de una sola decisión sino de varias?
*a) Porque se necesitan múltiples cambios de comportamiento, tanto de pacientes como de personal de salud
b) Porque cada hospital nuevo requiere una decisión administrativa distinta antes de poder construirse
c) Porque los gobiernos deben negociar por separado con cada organismo internacional financiador involucrado
d) Porque cada enfermedad cardiovascular exige un tipo de tratamiento médico completamente distinto al de las demás enfermedades

27. En el ejemplo de Luis, ¿por qué la política de más infraestructura funcionó bien con él?
a) Porque Luis ya conocía personalmente al médico y a las enfermeras del nuevo centro
*b) Porque Luis no tenía las anomalías de decisión que sí tienen otras personas
c) Porque Luis tenía un ingreso más alto que el resto de la población
d) Porque Luis tenía sesgo de sobreconfianza, lo cual lo hizo actuar rápido

28. Según el diagrama del camino de decisiones de Luis, el paciente sin sesgos del ejemplo del comité de salud, ¿qué tareas corresponden al paso "evaluar el riesgo, ser consciente"?
a) Ejercitar tres veces por semana y asistir a la cita programada
b) Llamar a un centro de salud y acordarse de la cita ya agendada
*c) Obtener información sobre los riesgos y las consecuencias, y conocer los síntomas
d) Tomar la píldora diaria y reducir el consumo de sodio y grasa

29. Según el diagrama del camino de decisiones de Luis, el paciente sin sesgos del ejemplo del comité de salud, ¿qué tareas corresponden al paso "ir a un centro de salud"?
*a) Llamar a un centro de salud, arreglar una cita, acordarse de ella y asistir
b) Obtener información sobre los riesgos y las consecuencias, y conocer los síntomas
c) Tomar la píldora diaria, ejercitar tres veces por semana y reducir el sodio y la grasa
d) Consultar con un especialista en cardiología y solicitar una batería completa de estudios de laboratorio

30. Según el diagrama del camino de decisiones de Luis, el paciente sin sesgos del ejemplo del comité de salud, ¿qué tareas corresponden al paso "tomar medicaciones, mejorar hábitos"?
a) Obtener información sobre los riesgos y las consecuencias, y conocer los síntomas
*b) Tomar la píldora diaria, ejercitar tres veces por semana y reducir el sodio y la grasa
c) Llamar a un centro de salud, arreglar una cita, acordarse de ella y asistir
d) Consultar con un especialista en cardiología y solicitar una batería completa de estudios de laboratorio

### Tema: La ciudad de gente normal: anomalías en cada paso

31. En la "ciudad de gente normal", ¿qué anomalía hace que unas 30 de las 100 personas ni siquiera consideren estar en riesgo?
*a) El sesgo de sobreconfianza o sobreoptimismo respecto al propio riesgo
b) La procrastinación habitual en la toma de decisiones cotidianas
c) La inconsistencia temporal de las preferencias de cada persona
d) La falta de atención limitada frente a otros problemas urgentes

32. Los "factores aparentemente irrelevantes" que menciona Thaler, ilustrados con los 15 minutos de espera telefónica, muestran que...
a) los llamados telefónicos son el método menos efectivo para pedir turnos
*b) pequeñas trabas administrativas pueden tener un impacto desproporcionado sobre la acción
c) las personas siempre priorizan lo urgente por encima de lo importante
d) el tiempo de espera no afecta a quienes evaluaron bien su riesgo

33. El trabajo de Eric Bettinger sobre formularios de becas universitarias mostró que...
*a) reducir la carga administrativa aumentó fuertemente la cantidad de postulantes
b) el monto de la beca era el único factor relevante para postularse
c) los formularios más largos filtraban mejor a los candidatos calificados
d) simplificar el trámite no tuvo ningún efecto sobre la cantidad de postulantes

34. En el ejemplo de las 100 personas normales, algunas de las que ya habían conseguido un turno médico finalmente no asistieron a la cita. ¿A qué anomalía atribuye el texto ese comportamiento?
a) Al sesgo de sobreconfianza que suelen tener sobre su propio estado de salud
b) A la desconfianza generalizada y creciente hacia el sistema de salud público de su propia ciudad
c) A la inconsistencia temporal que tienen sus preferencias sobre el futuro cercano
*d) A la atención limitada, que hace que se olviden de lo que no es prominente

35. El sesgo del presente (preferencias temporalmente inconsistentes), ilustrado con el ejemplo de la panadería, hace que las personas...
a) eviten de forma sistemática cualquier tipo de tentación cotidiana
b) sean igual de pacientes en el presente que en el futuro
c) prioricen siempre las recomendaciones médicas que acaban de recibir
*d) sean impacientes en el presente pero se crean pacientes a futuro

36. En el ejemplo de las personas que compraron equipo de running y una membresía de gimnasio tras la consulta médica, ¿qué les impidió finalmente empezar su rutina de ejercicio?
*a) La postergación sucesiva del inicio de la rutina por distintos compromisos y eventos
b) El costo elevado de mantener la membresía del gimnasio durante varios meses
c) La falta de indicaciones claras por parte del médico sobre cómo ejercitarse
d) Una lesión inesperada que les impidió físicamente poder asistir al gimnasio durante esas semanas

37. Al recorrer todo el camino de decisiones en la "ciudad de gente normal", partiendo de 100 personas en riesgo, ¿a cuántas logró llegar la política de infraestructura hasta el cambio efectivo de hábitos?
a) A 25 personas, la misma cantidad que asistió a la cita médica
b) A 60 personas, la misma cantidad que asistió al médico en tiempo y forma
*c) A solamente 10 personas, luego de perder gente en cada paso del camino
d) A 70 personas, la misma cantidad que evaluó correctamente su riesgo

### Tema: Herramientas de la economía del comportamiento para no perder pacientes

38. Según Sendhil Mullainathan y Eldar Shafir en su libro Scarcity, citado en el texto, ¿por qué las poblaciones en contextos de pobreza tienen más dificultad para tomar decisiones de largo plazo, como dar micronutrientes a tiempo?
*a) Porque su ancho de banda mental está ocupado con problemas cotidianos apremiantes
b) Porque priorizan sistemáticamente el ahorro por sobre el cuidado de la salud
c) Porque desconfían sistemáticamente de las recomendaciones del sistema de salud
d) Porque tienen menor acceso a la información sobre los beneficios de esos productos

39. Según el texto, ¿por qué la falta de exámenes regulares de anemia en poblaciones rurales puede dificultar que los padres perciban el riesgo?
a) Porque los exámenes de anemia tienen un costo muy alto para los sistemas de salud
b) Porque los exámenes de anemia solo están disponibles en los grandes centros urbanos
*c) Porque medir y diagnosticar una enfermedad hace que su riesgo se vuelva más saliente
d) Porque sin exámenes los médicos no pueden recetar micronutrientes a las familias

40. Según los datos de la Fundación Avon (2021) que cita el texto, ¿qué proporción de las mujeres argentinas mayores de 40 años nunca se había realizado una mamografía?
*a) Cerca del 16% de las mujeres encuestadas
b) Prácticamente el 57% de las mujeres
c) Casi una cuarta parte de ellas, un 24%
d) Un poco más del 40%

41. En el estudio de Sara Banks sobre campañas de mamografías, el mensaje con encuadre de "pérdida" resultó...
a) contraproducente, porque generaba un fuerte rechazo entre las mujeres
*b) más efectivo que el encuadre de "ganancia" para motivar el chequeo
c) igual de efectivo que no enviar ningún mensaje a las mujeres
d) menos efectivo que el encuadre de "ganancia" para motivar el chequeo

42. El experimento de Altmann y Traxler con pacientes odontológicos alemanes evaluó el efecto de...
a) cambiar el horario habitual de atención del consultorio odontológico
*b) enviar recordatorios por SMS antes de la fecha del turno
c) reducir el tiempo de espera dentro de la sala de espera
d) ofrecer descuentos económicos a quienes asistieran al chequeo dental

43. El estudio de Dan Berry y colegas, realizado en 2015 en Gran Bretaña, mostró que enviar recordatorios por SMS a pacientes con turnos ya agendados permitió...
a) aumentar la cantidad de nuevas consultas solicitadas por los pacientes
b) disminuir el tiempo de espera dentro de las salas de espera
*c) reducir de forma significativa la tasa de inasistencia a esos turnos
d) mejorar la satisfacción general de los pacientes con el sistema de salud

44. El trabajo de Ana Cuesta, Mario Sánchez y coautores, publicado en 2021 sobre Uruguay, mostró que una intervención simple por mensajes de texto fue efectiva para...
a) mejorar la asistencia a controles de enfermedades cardiovasculares programados
*b) aumentar la cantidad de citas agendadas para el estudio de Papanicolaou
c) aumentar la adherencia al tratamiento con micronutrientes en niños pequeños
d) reducir la tasa de inasistencia a controles odontológicos programados

45. Una "herramienta de planificación" (planning prompt), como la usada en el experimento de Milkman sobre colonoscopías, consiste en...
a) ofrecer un incentivo monetario a quien asista a la cita
b) programar automáticamente la cita sin consultar antes a la persona
*c) invitar a completar día, hora y médico a cargo de la cita
d) enviar un recordatorio genérico sin pedir ninguna acción adicional

46. El producto CARES, diseñado por Gine, Karlan y Zinman, es un dispositivo de compromiso que ayuda a...
*a) dejar de fumar depositando dinero en una cuenta bloqueada
b) ahorrar dinero pensando en gastos médicos futuros imprevistos
c) recordar los turnos médicos programados mediante mensajes de texto
d) financiar micronutrientes para niños con riesgo de anemia

47. Según el dato que citan los autores a partir del trabajo de Kevin Volpp y sus coautores, ¿qué ocurre entre los fumadores que manifiestan querer dejar de fumar?
a) Casi todos lo logran dentro de los primeros seis meses de haberlo decidido
b) La mitad recae dentro del primer año, sin importar demasiado cuál sea el método utilizado
*c) Menos del 3% logra efectivamente dejar de fumar, aunque el 70% dice quererlo
d) Solamente quienes reciben apoyo médico profesional y psicológico especializado consiguen dejar de fumar

48. Según el texto, ¿qué limitación tuvo el producto CARES a pesar de haber resultado efectivo para dejar de fumar?
a) Solamente funcionó en personas que ya habían intentado dejar de fumar antes
b) Su costo resultó demasiado alto para poder implementarlo a gran escala
c) Dejó de ser efectivo una vez transcurridos los primeros seis meses
*d) Al ser voluntario, únicamente cerca del 11% de las personas lo adoptó

49. En el experimento de Charness y Gneezy sobre asistencia al gimnasio, ¿qué se observó respecto al incentivo monetario?
a) El incentivo tuvo efecto únicamente durante la primera semana
*b) El aumento en la asistencia se mantuvo tras terminar los incentivos
c) El efecto desapareció apenas terminó el período de incentivos
d) Solo funcionó en estudiantes que ya iban regularmente al gimnasio

50. Según el texto, ¿cuál es la forma correcta de estructurar un incentivo para fomentar un hábito saludable, como ir al gimnasio con regularidad?
a) Aumentar progresivamente el monto del incentivo a medida que pasa el tiempo
*b) Ayudar a cubrir la inversión inicial en el momento clave de la decisión
c) Ofrecer el incentivo únicamente una vez formado el hábito de forma estable
d) Pagar de forma permanente el costo o el esfuerzo que implica la actividad elegida

51. Un "paquete de tentación", como el experimento de Milkman con audiolibros disponibles solo en el gimnasio, busca...
a) reducir el tiempo total que la persona pasa haciendo ejercicio
b) medir el nivel de autocontrol de cada participante antes de empezar
c) reemplazar por completo los incentivos monetarios tradicionales usados antes
*d) asociar una actividad deseable pero poco tentadora con algo placentero

## Nivel 2: Ciencias del Comportamiento y el Origen del Diseño

### Tema: Diseño: definición y su relación con la mente y los entornos

1. ¿Qué representa el concepto de "Behavioral Design" según el material?
*a) La intersección entre las ciencias del comportamiento y el design thinking
b) Una técnica de investigación de mercado basada en encuestas de consumo
c) Una rama del diseño industrial centrada exclusivamente en la ergonomía
d) Un método de programación aplicado al diseño de interfaces digitales

2. Según la definición presentada en el material, ¿qué implica el acto de diseñar?
a) Copiar soluciones ya existentes sin modificar ningún elemento
*b) Examinar una situación existente, imaginar una mejor y actuar para lograrla
c) Registrar los problemas de un sistema sin proponer ningún cambio
d) Imaginar posibilidades sin necesidad de llevarlas nunca a la práctica

3. El diagrama que vincula "mente" y "entornos" en el material ilustra que...
a) los entornos determinan la mente sin ningún tipo de retroalimentación
b) la mente y los entornos funcionan de manera completamente independiente
*c) la mente genera entornos y esos entornos también transforman la mente
d) la mente solo puede modificar entornos digitales, nunca los físicos

### Tema: ¿Todo está diseñado? El diseño humano frente al de otras especies

4. Según el material, ¿qué ejemplos se mencionan de otras especies que también "diseñan" sus propios entornos?
a) Únicamente los seres humanos son capaces de diseñar su entorno
b) Solamente las aves son capaces de construir estructuras complejas
c) Ningún animal no humano modifica su entorno de forma intencional
*d) Panales de abejas, diques de castores y nidos de aves, entre otros

5. Según el material, ¿qué característica distingue al diseño humano por ser creativo?
*a) No sigue un programa instintivo; permite imaginar y crear cosas que aún no existen
b) Sigue siempre un programa instintivo heredado genéticamente
c) Se limita a reproducir exactamente soluciones observadas en otras especies
d) Depende por completo de la imitación de comportamientos previos

6. Según el material, ¿cuál es una característica que distingue el diseño humano del de otras especies?
a) Solo puede aplicarse a la construcción de refugios físicos
*b) Se comunica a través de abstracciones como planos, diagramas o modelos
c) Depende exclusivamente de la imitación de comportamientos observados
d) Sigue siempre un programa instintivo heredado genéticamente

7. Según el material, ¿qué implica que el diseño humano "pueda resolver para otros"?
a) Que el diseño nunca puede tener en cuenta las necesidades de terceros
b) Que el diseño solo puede resolver problemas del propio diseñador
*c) Que muchas veces diseñamos para cumplir objetivos y necesidades ajenas
d) Que el diseño depende siempre de la aprobación de un grupo externo

8. ¿Qué idea transmite la frase "todo está diseñado, pero no todo está bien diseñado"?
a) Que solo los objetos de uso cotidiano fueron diseñados intencionalmente
b) Que el mal diseño ocurre únicamente en algunos contextos digitales actuales
c) Que la mayoría de los entornos actuales carece de intervención humana directa
*d) Que los entornos son resultado de intervenciones humanas, no siempre efectivas

### Tema: Ciencias del comportamiento: definición y disciplinas

9. ¿Qué combinación describe el enfoque de las ciencias del comportamiento según el material?
*a) Método científico y evidencia empírica para poner a prueba hipótesis
b) Intuición personal combinada con opiniones de expertos reconocidos
c) Normativa legal combinada con encuestas de opinión pública
d) Tradición cultural combinada con reglas de convivencia social

10. Según el diagrama presentado en el material, ¿qué disciplinas confluyen en las ciencias del comportamiento?
a) Únicamente la psicología y la neurociencia
*b) Diseño, neurociencia, psicología, antropología, sociología y economía
c) Exclusivamente la economía y la sociología
d) Diseño, matemática, física, química, biología y geografía

11. ¿Qué diferencia plantea el material entre el Homo Economicus y el Homo Heuristicus?
a) El primero toma decisiones grupales y el segundo decisiones individuales
b) El primero es un concepto biológico y el segundo un concepto legal
*c) El primero supone racionalidad plena y el segundo racionalidad limitada
d) El primero prioriza el largo plazo y el segundo el corto plazo

12. ¿Cómo se define la economía del comportamiento en el material?
a) Como la rama de la economía que estudia únicamente los grandes mercados financieros
b) Como una teoría que rechaza por completo los aportes de la economía clásica
c) Como el estudio matemático de la oferta y la demanda sin variables humanas
*d) Como la rama de la economía que incorpora psicología para entender las decisiones

### Tema: La brecha entre intenciones y comportamiento

13. ¿Qué plantea el material respecto a la relación entre creencias, conocimientos y comportamiento?
*a) Que las creencias, conocimientos y gustos no siempre coinciden con el comportamiento
b) Que las creencias determinan siempre el comportamiento de manera directa
c) Que los conocimientos técnicos siempre garantizan decisiones plenamente racionales
d) Que el comportamiento depende únicamente de factores genéticos fijos

14. ¿Cuáles son las tres etapas que propone el material para trabajar con las ciencias del comportamiento?
a) Diseñar, prototipar y testear soluciones rápidamente
*b) Identificar, entender y acortar las brechas
c) Observar, medir y publicar resultados
d) Planificar, ejecutar y evaluar acciones

### Tema: Bases evolutivas del comportamiento

15. Según la frase de Theodosius Dobzhansky citada en el material, ¿qué disciplina solo cobra sentido a la luz de la evolución?
a) La economía
b) La psicología
*c) La biología
d) La sociología

16. Según el diagrama presentado en el material sobre la selección natural, ¿qué describe la etapa de "competencia"?
a) Que las variaciones genéticas se transmiten a la siguiente generación
b) Que los sobrevivientes transmiten sus variaciones genéticas
c) Que todos los individuos de una población tienen la misma probabilidad de sobrevivir
*d) Que algunas variaciones ayudan a la supervivencia frente a otras

17. Según el material, ¿en qué escala temporal opera la selección natural?
*a) En la escala de generaciones, no de individuos
b) En la escala de un único individuo a lo largo de su vida
c) En la escala de un año, sin relación con la reproducción
d) En la escala de décadas, sin importar la especie

18. Según el material, ¿por qué la preferencia adaptativa por alimentos dulces y grasos puede resultar perjudicial hoy en día?
a) Porque esos alimentos ya no aportan ningún tipo de energía al cuerpo
*b) Porque hoy esos alimentos abundan y el gasto energético es bajo
c) Porque el cuerpo humano dejó de digerir azúcares y grasas
d) Porque esa preferencia desapareció por completo en la evolución reciente

19. Según el material, ¿en respuesta a qué ocurrieron los cambios evolutivos en el cerebro humano?
a) En respuesta a cambios climáticos ocurridos en los últimos 200 años
b) En respuesta a la invención de la escritura y la imprenta
*c) En respuesta a problemas de supervivencia y reproducción de nuestros ancestros
d) En respuesta al desarrollo de la inteligencia artificial

### Tema: Decisiones, atención y entornos complejos

20. ¿Qué plantea el material sobre el contexto en el que tomamos decisiones?
a) Que las decisiones se toman siempre de manera aislada del entorno
b) Que el entorno no influye en absoluto en las decisiones humanas
c) Que solo los entornos digitales afectan la toma de decisiones
*d) Que tomamos decisiones en entornos complejos con estímulos que compiten

21. Según el material, ¿por qué no siempre realizamos análisis profundos antes de decidir?
*a) Porque los análisis detenidos y profundos requieren mucha energía cognitiva
b) Porque los análisis profundos no aportan ningún beneficio a las decisiones
c) Porque el cerebro humano carece de capacidad de razonamiento complejo
d) Porque las decisiones importantes se toman siempre de forma colectiva

22. ¿Qué concepto ilustran el experimento y el libro "El gorila invisible" mencionados en el material?
a) Que la memoria a largo plazo humana es prácticamente ilimitada
*b) Que nuestra atención es limitada y podemos no percibir estímulos evidentes
c) Que las personas siempre notan cualquier cambio en su entorno visual
d) Que la atención mejora notablemente bajo presión de tiempo

### Tema: Arquitectura de las decisiones: nudges y tipos de entornos

23. ¿Qué buscaba lograr la imagen de una mosca grabada en los urinarios del aeropuerto de Schiphol (Aad Kieboom, 1999)?
a) Decorar el espacio con un diseño artístico llamativo
b) Medir el caudal de agua utilizado en cada urinario
*c) Orientar la puntería de los usuarios para reducir la suciedad
d) Advertir sobre un riesgo sanitario mediante una señal visible

24. ¿Qué buscaban lograr las marcas pintadas en la curva de una autopista, en el ejemplo de Sunstein y Thaler (2008) presentado en el material?
a) Indicar el límite de velocidad exacto mediante números en el asfalto
b) Reemplazar por completo la necesidad de carteles de señalización vial
c) Medir la cantidad de vehículos que circulan por la autopista
*d) Influir en el comportamiento de los conductores mediante señales visuales en el entorno

25. ¿Qué buscaban lograr las huellas de pies pintadas en el piso, en el ejemplo de Boffins (2011) presentado en el material?
*a) Guiar a las personas hacia el cesto de basura para reducir la suciedad
b) Decorar el espacio público con un diseño artístico llamativo
c) Indicar el camino más corto hacia una estación de transporte público
d) Advertir sobre un riesgo de tránsito en esa zona urbana

26. Según el material, además de físicos, ¿qué otro tipo de entornos pueden influir en nuestras decisiones?
a) Únicamente entornos climáticos y geográficos
*b) Entornos digitales, sociales, económicos, temporales y comunicacionales
c) Solamente entornos relacionados con la temperatura ambiente exterior
d) Exclusivamente entornos vinculados a la legislación vigente

27. Según el diagrama final presentado en el material, ¿qué pregunta guía específicamente al Behavioral Design?
a) ¿Cómo podemos mejorar una situación?
b) ¿Por qué las personas hacen lo que hacen?
*c) ¿Cómo mejoramos una situación a partir de evidencia sobre el comportamiento?
d) ¿Qué disciplinas conforman las ciencias del comportamiento?

## Nivel 3: ¿Cómo tomamos decisiones? (Sesgos e Ilusiones Perceptuales)

### Tema: Percepción e ilusiones visuales

1. ¿Qué describe mejor el concepto de "percepción"?
a) El registro exacto de los estímulos externos, sin intervención del cerebro
b) La capacidad de recordar con precisión información sensorial almacenada previamente
*c) El proceso por el cual el cerebro interpreta la información sensorial recibida
d) La reacción muscular automática e involuntaria frente a un estímulo externo repentino e inesperado

2. ¿Qué explica el fenómeno de "el vestido" (que algunas personas ven blanco/dorado y otras azul/negro)?
*a) Diferencias en los priors de iluminación que el cerebro usa para descontar la luz ambiental
b) Una falla en la retina que afecta de igual manera a todas las personas
c) Un defecto de fabricación en la tela que altera el pigmento real de forma permanente y visible
d) Una variación genética poco frecuente que modifica la cantidad de conos en el ojo

3. Según los priors de iluminación, ¿por qué algunas personas perciben el vestido como blanco/dorado?
a) Porque asumen que la prenda está bajo luz incandescente y descuentan el amarillo
b) Porque perciben el color sin aplicar ningún tipo de corrección lumínica al objeto
c) Porque identifican primero la textura de la tela antes de procesar su color
*d) Porque asumen una sombra bajo cielo azul y descuentan la luz azul percibida

4. ¿Qué plantea el "factor cronotipo" respecto a la percepción del vestido?
a) Los "búhos nocturnos" tienden a percibir blanco/dorado por su exposición a luz artificial
*b) Mujeres y personas mayores tienden a percibir blanco/dorado por mayor exposición a la luz diurna
c) Los hombres jóvenes tienden a percibir blanco/dorado por su mayor exposición reciente y constante a pantallas digitales
d) Las personas que trabajan de noche perciben siempre azul/negro sin ninguna excepción posible

5. ¿Qué demuestra la ilusión de los círculos (el círculo naranja rodeado de círculos grandes frente al rodeado de círculos chicos)?
a) Que el color de un objeto se percibe siempre de forma idéntica en cualquier contexto y situación posible
*b) Que el tamaño percibido de un objeto depende del contexto de los elementos que lo rodean
c) Que la percepción visual depende exclusivamente de la distancia física real que separa al objeto
d) Que dos objetos idénticos son siempre percibidos como iguales sin importar el entorno que los rodea

6. ¿Qué es la anamorfosis?
a) Una técnica que modifica el color real de una imagen según la luz ambiental
b) Un efecto sonoro que altera la percepción de una imagen en movimiento
c) Una ilusión que hace que dos figuras idénticas parezcan de tamaños distintos
*d) Una distorsión visual que solo se percibe correctamente desde un punto de vista específico

7. ¿Qué mostró el estudio que comparó la percepción de ilusiones visuales entre el Reino Unido/Estados Unidos y comunidades de Namibia?
*a) Que las diferencias en el entorno construido moldean cómo se perciben ciertas ilusiones visuales
b) Que la percepción de ilusiones visuales es idéntica en todas las culturas del mundo
c) Que solo las personas con estudios superiores logran ver correctamente las ilusiones visuales
d) Que la edad es el único factor que determina la percepción en una ilusión visual

8. ¿Qué plantea la clase respecto al supuesto de que "todos vemos el mundo de la misma manera"?
a) Confirma que todos los seres humanos ven el mundo exactamente de la misma manera
b) Demuestra que la percepción visual no depende en ningún grado del entorno cultural
*c) Asume universalidad, pero en realidad construye lo percibido a partir de expectativas aprendidas
d) Establece que la fisiología ocular varía tanto que invalida cualquier tipo de generalización

### Tema: Fenómenos perceptuales: pareidolia y sinestesia

9. ¿Qué es la pareidolia?
*a) La tendencia a percibir patrones significativos, como rostros, en estímulos ambiguos o aleatorios
b) La tendencia a recordar con más claridad y detalle las caras familiares que las desconocidas
c) La incapacidad de distinguir rostros humanos de otros objetos con formas similares
d) La preferencia por observar imágenes simétricas antes que imágenes asimétricas o irregulares

10. ¿Qué ventaja evolutiva se asocia a la pareidolia?
a) Permitía reconocer con rapidez el color de los alimentos maduros disponibles
b) Facilitaba recordar con precisión la ubicación exacta de las fuentes de agua
*c) Permitía identificar rápidamente depredadores, compañeros o señales sociales importantes cercanas
d) Ayudaba a distinguir con rapidez los sonidos peligrosos dentro del ruido ambiental

11. ¿Qué es la transmodalidad o sinestesia?
a) La capacidad de ignorar un sentido para concentrarse mejor en otro sentido
*b) La estimulación de un sentido que provoca una respuesta automática e involuntaria en otro
c) La pérdida temporal de un sentido tras una fuerte sobreestimulación sensorial
d) El entrenamiento voluntario de un sentido para mejorar su precisión con el paso del tiempo

12. ¿Qué demuestra el efecto McGurk?
a) Demuestra que el sonido que escuchamos nunca es influido por lo que vemos
b) Demuestra que las personas sordas perciben el habla igual que las personas oyentes
c) Demuestra que el tacto es el sentido que más influye sobre toda la percepción auditiva
*d) Demuestra cómo la información visual puede alterar la percepción de los sonidos que escuchamos

### Tema: Sesgos cognitivos en el juicio y la decisión

13. ¿Qué es el sesgo de confirmación?
*a) La tendencia a buscar e interpretar información de manera que confirme las creencias preexistentes
b) La tendencia a cambiar de opinión con facilidad ante cualquier información nueva recibida
c) La tendencia a olvidar con rapidez la información que resulta incómoda o molesta
d) La tendencia a dar el mismo peso a toda la evidencia, sin importar su origen

14. ¿Qué es el sesgo de disponibilidad?
a) La tendencia a subestimar la probabilidad de eventos que ocurrieron hace poco tiempo
b) La tendencia a recordar con la misma intensidad todos los eventos importantes, memorables o no
*c) La tendencia a sobrestimar la probabilidad de eventos que son más recientes o memorables
d) La tendencia a ignorar por completo los eventos que aparecen en los medios

15. ¿Qué es el descuento hiperbólico?
*a) La tendencia a sobrevalorar las recompensas inmediatas frente a las recompensas futuras
b) La tendencia a valorar por igual una recompensa inmediata y una recompensa futura
c) La tendencia a preferir siempre esperar más tiempo para obtener una recompensa mayor
d) La tendencia a calcular con precisión matemática el valor futuro del dinero

16. ¿Qué es el sesgo del presente?
a) La tendencia a planificar el futuro ignorando por completo las necesidades actuales
b) La tendencia a recordar el pasado con mucha más claridad y detalle que el presente
c) La tendencia a postergar indefinidamente cualquier decisión que resulte importante o compleja
*d) La tendencia a darle demasiado peso al "aquí y ahora" al momento de decidir

17. ¿Qué es el sesgo del status-quo?
a) La tendencia a buscar constantemente el cambio, incluso sin ningún motivo aparente
*b) La tendencia a preferir que las cosas permanezcan igual o mantener una decisión previa
c) La tendencia a modificar las decisiones propias ante cualquier objeción externa recibida
d) La tendencia a comparar cada decisión nueva con la opción más cara que esté disponible

18. Según el estudio de Johnson y Goldstein (2003) sobre donación de órganos, ¿qué se observó al comparar países donde el formulario tenía la opción "donar" marcada por defecto (opt-out) frente a países donde había que inscribirse activamente (opt-in)?
a) Que los países opt-in lograron tasas de consentimiento mucho más altas gracias a campañas de concientización más intensivas
b) Que la opción marcada por defecto no tuvo ningún efecto medible sobre la tasa de consentimiento final
*c) Que los países con consentimiento por defecto (opt-out) tuvieron tasas de consentimiento efectivo mucho más altas
d) Que la tasa de consentimiento fue más alta únicamente en los países que exigían firmar el formulario en una oficina pública

19. ¿Qué describe el sesgo de norma social?
*a) La tendencia a seguir lo que se cree que es "normal" o aceptado por la mayoría
b) La tendencia a actuar siempre en contra de lo que hace la mayoría del grupo social concreto
c) La tendencia a ignorar por completo las opiniones ajenas al momento de decidir
d) La tendencia a modificar las normas sociales según la conveniencia propia del momento

20. En el ejemplo de la factura de energía que compara el consumo propio con el de los vecinos eficientes, ¿qué mecanismo se está utilizando?
a) Sesgo de anclaje, al mostrar el precio original tachado junto al precio final
b) Efecto de dotación, al hacer que la persona valore más su propio consumo
*c) Norma social, al comparar el consumo propio con el de los vecinos eficientes
d) Sesgo de autoridad, al presentar la información como proveniente de un experto

21. ¿Qué demuestra el experimento de conformidad de Asch, en el que se pedía comparar la longitud de una línea con tres líneas alternativas (A, B y C)?
a) Que la percepción visual de la longitud de una línea varía según la edad de quien observa
*b) Que las personas pueden dar una respuesta que saben incorrecta con tal de ajustarse a la opinión del grupo
c) Que los grupos numerosos siempre llegan a conclusiones más precisas que los individuos que deciden solos
d) Que las personas ignoran por completo la opinión de un grupo cuando la respuesta correcta es evidente

22. En el ejercicio donde primero se pregunta si Gandhi murió a una edad determinada (por ejemplo, a los 95 o a los 40 años) y luego se pide estimar su edad real al morir, ¿qué fenómeno busca demostrarse?
a) Que las personas recuerdan con precisión los datos históricos que estudiaron en el colegio
b) Que la palabra "murió" genera una reacción emocional que distorsiona cualquier cálculo posterior
c) Que las personas prefieren no responder preguntas sobre las que no tienen certeza absoluta
*d) Que la cifra inicial mencionada en la pregunta influye en la estimación posterior, aunque sea arbitraria

23. ¿Qué es el sesgo de anclaje?
a) La tendencia a ignorar cualquier información numérica al momento de tomar una decisión
b) La tendencia a comparar siempre el precio de un producto con el de la competencia
*c) La tendencia a depender demasiado de la primera información recibida al tomar decisiones
d) La tendencia a rechazar ofertas que parecen demasiado buenas para ser verdad

24. ¿Qué es el efecto anzuelo (decoy effect)?
a) Ocurre cuando se elimina una opción intermedia para simplificar la decisión final
*b) Ocurre cuando una tercera opción, menos atractiva, hace que otra opción parezca más atractiva
c) Ocurre cuando se ofrece una única opción para evitar que se comparen precios distintos entre sí
d) Ocurre cuando todas las opciones disponibles tienen exactamente el mismo precio final

25. ¿Qué es el sesgo del superviviente?
a) La tendencia a analizar solo los casos que fracasaron, ignorando los que tuvieron éxito
b) La tendencia a atribuir todos los fracasos a la mala suerte y nunca a las decisiones
c) La tendencia a considerar que el éxito y el fracaso tienen siempre la misma probabilidad
*d) La tendencia a analizar solo los casos de éxito, ignorando los que fracasaron o desaparecieron

26. ¿Qué es el sesgo de atribución?
a) La tendencia a atribuir tanto los propios éxitos como los ajenos a causas externas
*b) La tendencia a atribuir las acciones ajenas a rasgos personales y las propias a circunstancias externas
c) La tendencia a no atribuir ninguna causa a las acciones observadas en otras personas
d) La tendencia a atribuir siempre las acciones ajenas a la casualidad y no al carácter

27. ¿Qué es el sesgo del egocentrismo?
a) La tendencia a considerar que el propio esfuerzo nunca influye en los resultados obtenidos
b) La tendencia a subestimar sistemáticamente las propias capacidades frente a las de las demás personas
*c) La tendencia a sobrestimar el propio mérito en los resultados exitosos, minimizando otros factores
d) La tendencia a atribuir todos los logros propios exclusivamente a un golpe de suerte

### Tema: Esfuerzo, propiedad y aversión a la pérdida

28. ¿Cómo se resolvió el problema de "la fricción" con las premezclas para hacer tortas?
*a) Se resolvió agregando un paso, como sumar un huevo, que devolvió sensación de esfuerzo
b) Se resolvió eliminando cualquier paso adicional del proceso completo de horneado
c) Se resolvió bajando el precio del producto para compensar el esfuerzo percibido
d) Se resolvió cambiando el empaque del producto sin modificar en nada la receta

29. ¿Qué es el efecto Ikea?
a) Nos suele satisfacer más un objeto cuanto menos esfuerzo hayamos invertido en obtenerlo
b) Nos suele resultar bastante indiferente el esfuerzo personal invertido en la creación de un objeto
*c) Nos suelen satisfacer más las cosas si estamos involucrados y nos esforzamos en crearlas
d) Nos suele importar más el precio de un mueble que el proceso de armarlo

30. ¿Qué es el efecto de dotación (endowment effect)?
*a) La tendencia a valorar más un objeto simplemente porque uno mismo lo posee
b) La tendencia a valorar más un objeto cuanto más económico resulta en el mercado
c) La tendencia a valorar menos los objetos propios frente a los objetos ajenos
d) La tendencia a valorar únicamente los objetos que fueron un regalo de otra persona

31. ¿Qué es la aversión a la pérdida?
a) La tendencia a sentir el placer de ganar con mayor intensidad que el dolor de perder
b) La tendencia a evaluar ganancias y pérdidas exactamente con la misma intensidad emocional
c) La tendencia a ignorar por completo las pérdidas pequeñas al tomar una decisión
*d) La tendencia a sentir el dolor de perder más que el placer de ganar

### Tema: Persuasión, influencia social y encuadre

32. ¿Qué es el efecto Forer?
a) La tendencia a rechazar cualquier descripción de personalidad que suene general o vaga
*b) La tendencia a aceptar como válidas descripciones vagas y generales como si fueran específicas
c) La tendencia a memorizar con precisión las descripciones de personalidad que se leen
d) La tendencia a comparar la propia personalidad únicamente con la de personas cercanas

33. ¿Qué es el sesgo de autoridad?
a) La tendencia a desconfiar sistemáticamente de cualquier figura con poder o prestigio
*b) La tendencia a confiar más en una información cuando proviene de una figura de autoridad
c) La tendencia a evaluar críticamente cualquier información antes de aceptarla como válida
d) La tendencia a dar el mismo valor a una opinión, sin importar quién la exprese realmente

34. ¿Qué es el efecto halo?
a) La tendencia a formar una primera impresión negativa que nunca cambia con el tiempo
b) La tendencia a evaluar cada característica de una persona de forma completamente independiente
c) La tendencia a ignorar la primera impresión y basarse solo en el análisis posterior
*d) La tendencia a extender una cualidad positiva percibida inicialmente a otras características

35. ¿Qué es el sesgo de afinidad?
*a) La tendencia a favorecer a personas similares a uno mismo en intereses o antecedentes
b) La tendencia a favorecer a personas completamente distintas a uno mismo en todo
c) La tendencia a evaluar a todas las personas exactamente con los mismos criterios
d) La tendencia a desconfiar de las personas que comparten los propios intereses o gustos personales

36. ¿Qué es el efecto encuadre (framing)?
a) La tendencia a reaccionar siempre de la misma manera sin importar cómo se presente algo
b) La tendencia a ignorar por completo la forma en que se presentan los datos
*c) La tendencia a reaccionar de manera distinta ante una misma información según cómo se presente
d) La tendencia a preferir siempre los datos que se presentan en formato de porcentaje

37. Dos jeringas contienen exactamente la misma información estadística: una está etiquetada "95% de supervivencia" y la otra "5% de mortalidad". ¿Qué ilustra este ejemplo?
a) Que la efectividad real de un tratamiento depende de cómo se etiquete el envase que lo contiene
b) Que las personas siempre eligen la opción con el porcentaje numéricamente más alto
c) Que los pacientes prefieren sistemáticamente los tratamientos con mayor riesgo de mortalidad informado
*d) Que una misma información estadística genera reacciones distintas según cómo se la enmarque

38. ¿Qué es el sesgo de saliencia?
*a) La tendencia a prestar más atención a la información más destacada o llamativa
b) La tendencia a prestar más atención a la información menos visible pero más relevante
c) La tendencia a ignorar por completo cualquier estímulo que resulte visualmente llamativo
d) La tendencia a recordar con igual intensidad toda la información, sin importar su formato

39. En la campaña que compara un tacho de basura gris sin marcas con otro pintado de verde y con huellas de pisadas dibujadas en el piso que conducen hacia él, ¿qué busca lograr el cambio de color y las huellas?
*a) Hacer que el tacho resulte más destacado y llamativo para captar la atención de los peatones
b) Reducir el tamaño real del tacho para que ocupe menos espacio en la vereda
c) Indicar el horario en que pasa el camión recolector de residuos por esa calle
d) Medir la cantidad de personas que efectivamente usan el tacho cada día

### Tema: Marco teórico: Sistema 1, Sistema 2 y heurísticas

40. ¿Cómo se define un sesgo cognitivo?
a) Un error aleatorio y poco frecuente que ocurre solo en decisiones muy complejas
b) Una falla que se relaciona exclusivamente con los procesos de memoria a largo plazo
*c) Un error sistemático o tendencia en el juicio y la toma de decisiones rápidas
d) Una estrategia consciente que se usa de forma deliberada para engañar a otros

41. Según Kahneman y Tversky, ¿cómo opera el Sistema 1?
a) Opera con mucho esfuerzo consciente y se utiliza en decisiones complejas
*b) Opera sin esfuerzo, de forma automática e intuitiva, con poca energía mental
c) Opera exclusivamente cuando la persona dispone de mucho tiempo para decidir
d) Opera analizando cada opción de forma matemática antes de tomar una decisión

42. Según Kahneman y Tversky, ¿cómo opera el Sistema 2?
a) Es intuitivo, automático y opera consumiendo muy poca energía mental
b) Es el sistema responsable de todas las decisiones diarias, sin ninguna excepción
c) Es un sistema que actúa exclusivamente mientras la persona está durmiendo
*d) Requiere esfuerzo consciente y se usa en decisiones complejas y reflexivas

43. Según el ejemplo de una persona que conduce con comodidad y sin esfuerzo aparente, ¿qué plantea la clase sobre la relación entre el Sistema 1 y el Sistema 2?
*a) Que una tarea que al principio requiere el Sistema 2 puede volverse automática y pasar al Sistema 1 con la práctica
b) Que conducir es una tarea que siempre exige el uso exclusivo del Sistema 2, sin excepciones
c) Que el Sistema 1 y el Sistema 2 nunca pueden intervenir en una misma actividad
d) Que el Sistema 2 desaparece por completo una vez que una persona aprende a conducir

44. ¿Qué son las heurísticas?
a) Reglas exactas y matemáticas que garantizan siempre llegar a la decisión correcta
b) Procesos que solo se activan cuando el Sistema 2 falla por completo
c) Mecanismos que eliminan por completo la posibilidad de cometer errores de juicio
*d) Atajos mentales usados para simplificar y agilizar la toma de decisiones

45. ¿Qué describe la brecha entre intenciones y acciones?
a) Ocurre únicamente cuando la persona desconoce los beneficios reales de actuar
*b) Es la distancia entre lo que planeamos hacer y lo que realmente terminamos haciendo
c) Es la diferencia entre las creencias de una persona y sus conocimientos previos
d) Es un fenómeno que solo afecta a las decisiones que involucran dinero

## Nivel 4: Explorar y Definir

### Tema: El doble diamante: explorar y definir

1. ¿Cuál es el objetivo principal de esta etapa del proceso, según el material?
*a) Caracterizar el comportamiento actual y definir el comportamiento deseado
b) Diseñar un prototipo de la solución final
c) Medir el impacto de una intervención ya implementada
d) Elegir la mejor herramienta tecnológica disponible para escalar el proyecto

2. Según el esquema del doble diamante presentado, ¿qué etapas conforman el "espacio para el problema"?
a) Diseñar y Evaluar
*b) Explorar y Definir
c) Evaluar y Escalar
d) Definir y Diseñar

3. Dentro del "espacio para la solución", ¿qué etapas se agrupan en ese diamante?
a) Explorar y Definir
b) Descubrir y Entregar
*c) Diseñar y Evaluar
d) Definir y Escalar

4. En el doble diamante, la etapa "Descubrir" (dentro de Explorar) se caracteriza por ser:
a) Convergente, centrada en definir con precisión el problema
b) Convergente, centrada en priorizar las métricas de impacto
c) Divergente, centrada en construir un producto mínimo viable de manera rápida
*d) Divergente, centrada en mapear el sistema y el campo

5. En el doble diamante, la etapa "Definir" se caracteriza por ser:
a) Divergente, centrada en mapear el sistema y detectar posibles puntos de palanca
*b) Convergente, centrada en definir el problema y aplicar una matriz de viabilidad e impacto
c) Divergente, centrada en generar una lluvia de ideas de soluciones posibles
d) Convergente, centrada en construir un producto mínimo viable y sus métricas

6. En el doble diamante, la etapa "Desarrollar" (dentro de Diseñar) se caracteriza por ser:
a) Convergente, centrada en definir el problema con precisión
b) Convergente, centrada en el producto mínimo viable y las métricas
*c) Divergente, centrada en la lluvia de ideas de soluciones, el viaje del usuario y el prototipado rápido
d) Divergente, centrada en mapear el sistema y el campo de investigación

7. La etapa "Entregar" (dentro de Evaluar) se caracteriza por ser convergente y enfocarse en:
*a) El producto mínimo viable y las métricas
b) La lluvia de ideas de soluciones posibles
c) El mapeo del sistema y los puntos de palanca
d) El viaje del usuario y el prototipado rápido

### Tema: Tipos de fuentes y papers académicos

8. ¿Qué diferencia principal existe entre el marco teórico y el estado del arte?
a) El marco teórico se basa siempre únicamente en datos estadísticos, mientras que el estado del arte no utiliza ninguna fuente académica
*b) El estado del arte relevanta lo investigado sobre el problema, mientras que el marco teórico define desde qué lugar se mira esa evidencia
c) El estado del arte es un paso opcional dentro de la investigación, mientras que el marco teórico resulta obligatorio en cualquier trabajo académico serio
d) El marco teórico incluye exclusivamente artículos y libros académicos, mientras que el estado del arte se limita a datasets y estadísticas

9. ¿En qué se diferencian las fuentes de contexto de las fuentes científicas?
a) Las de contexto son siempre más confiables que las científicas
b) Las fuentes científicas nunca incluyen datos cuantitativos ni estadísticas
*c) En su proceso de validación, no en su utilidad para la investigación
d) Las fuentes de contexto no pueden usarse nunca para situar un problema real

10. ¿Por qué confiamos en un artículo publicado en una revista con revisión por pares?
a) Porque fue escrito por un autor muy reconocido y con muchos seguidores
b) Porque no puede ser refutado por la comunidad científica
c) Porque no requiere contrastarse nunca con ninguna evidencia posterior
*d) Porque fue evaluado críticamente por otros expertos antes de publicarse

11. Dentro de los papers de "producción de evidencia", ¿qué distingue a un estudio experimental de uno observacional?
*a) El experimental interviene para ver qué pasa; el observacional describe cómo es el mundo
b) El experimental nunca usa datos originales propios, sino que siempre retoma información ya publicada anteriormente
c) El observacional siempre combina resultados numéricos de otros estudios ya realizados anteriormente
d) El observacional propone y valida nuevos instrumentos de medición como cuestionarios

12. ¿Cuál de los siguientes tipos de síntesis de evidencia sigue reglas explícitas de búsqueda, inclusión y exclusión para reducir sesgos?
a) La revisión narrativa clásica
*b) La revisión sistemática y explícita
c) El paper de interpretación teórica
d) El paper de metodología aplicada

13. Un meta-análisis se define como:
a) Una revisión narrativa sin ningún método explícito de búsqueda ni de selección muy clara
b) Un estudio experimental que interviene sobre una muestra para medir efectos
*c) Una revisión sistemática que además combina los resultados en un efecto estadístico promedio
d) Un paper de metodología que valida un nuevo instrumento de medición

14. Los papers de "interpretación" se fundamentan principalmente en:
a) Datos originales recolectados directamente por el propio autor del estudio
b) La validación estadística rigurosa de un instrumento de medición nuevo
c) Encuestas aplicadas directamente a una muestra amplia y representativa de la población de interés
*d) La expertise del autor, la evidencia existente y la coherencia del argumento

15. ¿Qué buscan validar o mejorar los papers de "metodología"?
*a) Métodos, herramientas o protocolos de investigación científica
b) Las políticas públicas de un problema
c) Las hipótesis sustantivas sobre un fenómeno social
d) El estado del arte de un campo científico

16. Según el material, ¿qué relación existe entre el tipo de paper y para qué sirve dentro de una investigación?
a) La síntesis de evidencia aporta datos nuevos, y la producción de evidencia aporta patrones
b) La interpretación aporta datos nuevos, y la metodología aporta patrones generales
*c) La producción de evidencia aporta datos nuevos, y la síntesis de evidencia aporta patrones
d) La metodología aporta opinión y encuadre, y la interpretación aporta cómo producir conocimiento

17. Además de no fundamentarse en datos propios, ¿qué otra característica tienen los papers de "interpretación"?
a) Siempre validan un instrumento de medición nuevo
b) Solo pueden publicarse si superan una revisión por pares
c) Requieren aplicarse a una muestra representativa de la población
*d) No presentan resultados propios de una investigación original

### Tema: Sesgo de confirmación y neutralidad en la búsqueda de información

18. ¿Qué es el sesgo de confirmación, según el material?
*a) La tendencia a buscar, interpretar y recordar información que confirme nuestras creencias previas, ignorando la que las contradice
b) La tendencia a preferir siempre las fuentes de contexto por sobre las fuentes científicas
c) La tendencia a confiar más en los papers de interpretación que en los de producción de evidencia
d) La tendencia a evitar cualquier revisión sistemática de la literatura disponible

19. Según el material, ¿qué debería lograr una buena búsqueda de información?
a) Confirmar y reforzar las intuiciones iniciales del investigador
*b) Poner a prueba las intuiciones del investigador, en lugar de simplemente validarlas
c) Priorizar siempre las fuentes de acceso restringido por sobre las de acceso abierto
d) Reducir al mínimo la cantidad de fuentes científicas consultadas

20. ¿Qué relación plantea el material entre la neutralidad de una pregunta de búsqueda y la evidencia que se obtiene?
a) Una pregunta neutral siempre arroja menos resultados que una pregunta sesgada
b) Cuanto más específica es la pregunta, menos confiable resulta la evidencia encontrada
*c) Cuanto más neutral es la pregunta, más sólida es la evidencia que se encuentra
d) La neutralidad de la pregunta no guarda relación con la solidez de la evidencia

21. Según el material, ¿qué diferencia existe entre el acceso abierto (open access) y el acceso restringido (paywall) a la información científica?
a) El acceso restringido garantiza mayor rigor científico que el acceso abierto
b) El acceso abierto se utiliza solo para fuentes de contexto, nunca para papers académicos
c) El acceso abierto está reservado exclusivamente a investigadores de la institución que publica
*d) El acceso abierto permite consultar la fuente libremente, mientras que el acceso restringido exige pago o suscripción

### Tema: Métodos de investigación cualitativa: entrevistas y observación

22. Para "explorar el tema" al inicio de una investigación, el material propone combinar:
a) Encuestas cerradas y meta-análisis académicos ya existentes
b) Únicamente entrevistas en profundidad con expertos
c) Datos de acceso restringido, estadísticas oficiales recientes y redes sociales
*d) Revisión bibliográfica (estado del arte) y observaciones de campo

23. ¿Cuál de las siguientes es una característica del análisis cualitativo, según el material?
a) Busca siempre generalizar los resultados a toda la población general
*b) Reconoce la perspectiva y los sesgos del propio investigador
c) Siempre involucra una gran cantidad de participantes
d) Elimina la complejidad del fenómeno estudiado

24. Las observaciones naturales se caracterizan por:
a) Reunir a un grupo grande de participantes para debatir libremente sobre un tema en general
b) Preguntar directamente a las personas sobre sus actitudes y opiniones en profundidad
c) Requerir al menos dos personas conversando sobre un tema puntual y específico
*d) Registrar el comportamiento de los sujetos en su entorno habitual, minimizando la intervención

25. Un focus group se define como una técnica en la que se:
*a) Reúne a un grupo de participantes para responder preguntas en un entorno moderado
b) Registra minuciosamente el comportamiento de una persona sin que esta lo note en absoluto
c) Recopila información mediante una conversación bastante abierta entre dos personas solamente
d) Aplica una escala ya validada para medir un concepto abstracto y complejo

26. ¿Cuál de las siguientes opciones describe mejor a las encuestas como método de investigación cualitativa?
a) Registran el comportamiento de los sujetos en su entorno habitual, sin intervenir
b) Reúnen a un grupo de participantes para responder preguntas en un entorno moderado
c) Se basan en una conversación entre al menos dos personas sobre un tema puntual
*d) Permiten recopilar información sobre actitudes, opiniones y comportamientos, preguntando directamente a las personas

27. Al elegir la estructura de una entrevista, ¿qué relación se plantea entre estructura y conocimiento previo del tema?
a) A mayor conocimiento del tema, se recomienda menos estructura y más flexibilidad
b) La estructura de la entrevista no depende del conocimiento previo del tema
*c) A menor conocimiento del tema, se recomienda menos estructura y más flexibilidad
d) A mayor conocimiento del tema, se recomienda eliminar por completo la entrevista

28. ¿Cuáles son los tres tipos de entrevista según su nivel de estructura, mencionados en el material?
*a) Estructurada, semi estructurada y no estructurada
b) Individual, grupal y virtual
c) Exploratoria, confirmatoria, interpretativa y también parcialmente descriptiva
d) Formal, informal y espontánea

29. Al definir la muestra dentro del protocolo de una entrevista en profundidad, ¿cuál de los siguientes es uno de los criterios a considerar?
a) El presupuesto total disponible para la investigación
*b) El rango etario y la ubicación geográfica de los participantes
c) La cantidad de papers científicos consultados previamente
d) El tipo de escala validada que se va a utilizar

30. Al desarrollar la hipótesis dentro del protocolo de una entrevista en profundidad, esta debe ser:
a) Amplia, general y no verificable
b) Redactada únicamente en términos cualitativos
c) Idéntica a la pregunta de investigación original
*d) Clara, específica y falsable en su planteo

31. Al diseñar las preguntas de una entrevista en profundidad, el material recomienda priorizar:
a) Preguntas sobre opiniones generales antes que ejemplos concretos
b) Preguntas idénticas a las de un cuestionario cerrado
*c) Ejemplos y experiencias reales por sobre las opiniones
d) Una única pregunta que abarque todos los conceptos clave

32. Según las buenas prácticas para entrevistas en profundidad, ¿qué se recomienda respecto a la duración total de la entrevista?
a) Extenderla todo lo posible, sin límite de tiempo, para no perder información
*b) No superar los 60 a 90 minutos, para evitar la fatiga cognitiva del entrevistado
c) Limitarla a un máximo de 15 minutos en total
d) Definir la duración únicamente en función del presupuesto disponible

33. Según las buenas prácticas para entrevistas en profundidad, durante la entrevista se recomienda:
*a) Escuchar más de lo que se habla, en una proporción cercana a 80/20
b) Hablar más de lo que se escucha para guiar al entrevistado en todo momento
c) Completar las respuestas del entrevistado cuando duda o se traba
d) Evitar tomar notas para no interrumpir el registro de audio

34. Durante el registro de una entrevista en profundidad, además de grabar toda la conversación, el material recomienda:
a) Delegar el registro completo en una persona ajena a la entrevista
b) Limitarse a transcribir únicamente las respuestas textuales relevantes
*c) Tomar notas de los aspectos no verbales, como el contexto, los gestos o el ambiente
d) Evitar cualquier tipo de nota adicional para no distraer al entrevistador

35. Según el material, ¿qué se recomienda para obtener mejores insights al recolectar información?
a) Utilizar exclusivamente encuestas cerradas, evitando las entrevistas
b) Recolectar información con un solo método para mantener la consistencia
c) Priorizar siempre las observaciones naturales por sobre cualquier otro método
*d) Complementar al menos dos métodos de recolección de información

### Tema: Arquetipo/Persona

36. Según el material, ¿cuál es el objetivo principal de crear un Arquetipo/Persona?
*a) Ponerte en la piel de tu población objetivo, imaginando a uno de tus usuarios/as
b) Recopilar datos demográficos y estadísticas oficiales sobre el problema
c) Diseñar el protocolo completo de una entrevista en profundidad
d) Sistematizar los papers académicos consultados durante la investigación

37. Según el material, ¿qué representa la Persona construida a partir de este ejercicio?
a) Un caso real y verificado de un usuario particular del proyecto
*b) Un arquetipo que representa a los usuarios de la población objetivo
c) El comportamiento específico que se busca modificar en la intervención
d) El presupuesto disponible para implementar una intervención

### Tema: Herramientas de diagnóstico: Behavioral Journey Map y modelo COM-B

38. El Behavioral Journey Map se enfoca específicamente en:
a) Los datos demográficos generales de la población objetivo del proyecto
*b) Los comportamientos y decisiones de la persona, exponiendo barreras y sesgos
c) La lista completa de todos los papers consultados durante toda la investigación
d) El presupuesto total necesario para implementar la solución propuesta

39. El modelo COM-B establece que para que un comportamiento ocurra:
a) Alcanza con que una sola de las tres áreas esté siempre bien presente en algún momento
b) Solo la motivación reflexiva determina si el comportamiento finalmente se realiza o no
*c) Deben abordarse las tres áreas, ya que si una falla el comportamiento probablemente no ocurra
d) La capacidad física siempre pesa más que las demás áreas del modelo

40. Dentro del modelo COM-B, la "Oportunidad" puede ser:
a) Física o psicológica
b) Reflexiva o automática
c) Observable o específica
*d) Social o física

41. Dentro del modelo COM-B, la "Capacidad psicológica" se refiere específicamente a:
a) La fuerza física y la destreza motora necesarias para actuar
b) El acceso a recursos materiales o financieros del entorno
*c) El funcionamiento mental de la persona, como la comprensión y la memoria
d) Los hábitos y procesos afectivos que impulsan una acción

42. La "Motivación automática" involucra procesos:
a) Conscientes, como planes y evaluaciones racionales
b) Vinculados exclusivamente a normas sociales y culturales
c) Relacionados con el acceso a recursos materiales disponibles
*d) Habituales, instintivos y afectivos, como deseos o impulsos

43. ¿Qué representa "la pólvora" en la metáfora del cañón usada para explicar el modelo COM-B?
*a) El impulso interno que empuja a querer actuar: la motivación
b) La habilidad concreta de la persona para poder hacerlo
c) Lo que el entorno permite o facilita en ese preciso momento
d) La acción final que efectivamente se termina observando

44. En la misma metáfora del cañón usada para explicar el modelo COM-B, ¿qué representa "el cañón"?
a) El impulso interno que empuja a querer actuar
*b) La capacidad: la habilidad concreta con la que se cuenta para actuar
c) Lo que el entorno permite o facilita en ese momento
d) La acción final que efectivamente se termina observando

45. En esa misma metáfora del cañón, ¿qué representa "la bala"?
a) La motivación: el impulso interno que empuja a querer actuar
b) La capacidad: la habilidad concreta con la que se cuenta para actuar
c) La oportunidad: lo que el entorno permite o facilita en ese momento
*d) El comportamiento: la acción final que efectivamente se llega a observar

46. ¿Qué representa "el entorno" (el viento) en esa misma metáfora del cañón?
a) El impulso interno que empuja a querer actuar
*b) Lo que el contexto externo permite o facilita en ese momento
c) La habilidad concreta que la persona ya tiene para poder finalmente hacerlo
d) La acción final que efectivamente se llega a observar

47. Según el modelo COM-B, la Capacidad y la Oportunidad se relacionan con el comportamiento de la siguiente manera:
*a) Juntas hacen posible o facilitan que el comportamiento ocurra
b) Son irrelevantes si la motivación de la persona es suficientemente alta
c) Solo importan en comportamientos relacionados con la salud física
d) Determinan el comportamiento de forma independiente entre sí

48. Además de energizar y dirigir el comportamiento, ¿qué otra relación plantea el modelo COM-B?
a) El comportamiento nunca vuelve a influir sobre la capacidad, la oportunidad o la motivación
*b) El comportamiento realizado también influye de vuelta sobre las otras tres áreas
c) Solo la motivación puede influir sobre el comportamiento, nunca al revés
d) La capacidad es la única área que puede modificarse una vez que el comportamiento ocurrió

49. En el ejemplo "tener amigos que te inviten a salir a correr en grupo", ¿a qué componente del modelo COM-B corresponde?
*a) Oportunidad social
b) Capacidad física
c) Motivación automática
d) Motivación reflexiva

50. En el ejemplo "tener la habilidad para tomar una muestra de sangre", ¿a qué componente del modelo COM-B corresponde?
*a) A la capacidad física, una destreza concreta del cuerpo
b) A la motivación reflexiva, una decisión pensada de antemano
c) A la oportunidad social, algo que depende de otras personas
d) A la motivación automática, un impulso poco consciente

51. En el ejemplo "planear ir a un centro de salud", ¿a qué componente del modelo COM-B corresponde?
a) A la capacidad psicológica, un tipo de comprensión mental
*b) A la motivación reflexiva, una decisión pensada de antemano
c) A la oportunidad física, algo que depende de recursos del entorno
d) A la motivación automática, un impulso poco consciente

52. En el ejemplo "sentir placer anticipado ante la idea de comer un pedazo de chocolate", ¿a qué componente del modelo COM-B corresponde?
a) A la capacidad psicológica, un tipo de comprensión mental
b) A la oportunidad social, algo que depende de otras personas
*c) A la motivación automática, un impulso poco consciente
d) A la motivación reflexiva, una decisión pensada de antemano

53. En el ejemplo "falta de acceso a apoyo especializado durante el parto", ¿qué barrera del modelo COM-B ilustra?
a) A la capacidad física, una destreza concreta del cuerpo
b) A la motivación reflexiva, una decisión pensada de antemano
c) A la oportunidad social, algo que depende de otras personas
*d) A la oportunidad física, algo que depende de recursos del entorno

54. En el ejemplo "tener la intención de dejar de fumar", ¿a qué componente del modelo COM-B corresponde?
*a) A la motivación reflexiva, una decisión pensada de antemano
b) A la motivación automática, un impulso poco consciente
c) A la capacidad psicológica, un tipo de comprensión mental
d) A la oportunidad social, algo que depende de otras personas

55. En el ejemplo "entender el impacto del CO2 en el ambiente", ¿a qué componente del modelo COM-B corresponde?
a) A la motivación reflexiva, una decisión pensada de antemano
b) A la oportunidad física, algo que depende de recursos del entorno
*c) A la capacidad psicológica, el funcionamiento mental de comprensión
d) A la capacidad física, una destreza concreta del cuerpo

56. En el ejemplo "poder salir a correr porque tenemos zapatillas", ¿a qué componente del modelo COM-B corresponde?
a) A la capacidad física, una destreza concreta del cuerpo
b) A la motivación automática, un impulso poco consciente
c) A la oportunidad social, algo que depende de otras personas
*d) A la oportunidad física, algo que depende de recursos del entorno

### Tema: Definición y operacionalización de comportamientos

57. Según el material, ¿cuál de las siguientes opciones sí es un comportamiento?
a) Sentirse seguro
*b) Caminar en el parque
c) Ser más empático
d) Querer cambiar muchas cosas en general

58. Según el material, ¿cuál de las siguientes opciones también sí es un comportamiento?
a) Ser feliz
b) Querer cambiar cosas
c) Ser más empático
*d) Leer un capítulo de un libro

59. ¿Por qué "perder peso" no se considera un comportamiento en sí mismo?
a) Porque es un estado interno que no puede medirse
b) Porque no involucra a ningún actor identificable
*c) Porque puede ser causado por múltiples comportamientos distintos
d) Porque no puede operacionalizarse de ninguna manera

60. ¿Por qué "sentirse seguro" o "ser feliz" no se consideran comportamientos, según el material?
*a) Porque son estados internos que pueden influir en el comportamiento, pero no son conductas en sí mismas
b) Porque pueden ser causados por múltiples comportamientos distintos al mismo tiempo
c) Porque no pueden operacionalizarse bajo ninguna circunstancia
d) Porque no involucran a ningún actor identificable ni asignable

61. Las tres características que debe cumplir un comportamiento bien definido son:
a) Observable, Medible y Falsable
b) Divergente, Convergente y Escalable
c) Reflexivo, Automático y Social
*d) Asignable, Observable y Específico

62. La característica "Asignable" de un comportamiento implica identificar:
*a) Los actores involucrados y quiénes tienen capacidad de modificarlo
b) La escala ya validada que finalmente se usará para medirlo
c) El presupuesto total disponible para intervenirlo directamente
d) La cantidad de participantes necesarios para estudiarlo

63. La característica "Observable" de un comportamiento implica que este debe:
a) Poder atribuirse a un actor específico con capacidad de modificarlo
b) Estar expresado como un objetivo general amplio y aspiracional
*c) Poder observarse y cuantificarse para su posterior evaluación
d) Basarse exclusivamente en la opinión de quien investiga

64. La operacionalización consiste en:
a) Elegir la técnica de recolección de datos más barata disponible
*b) Transformar conceptos abstractos en variables concretas y medibles
c) Reemplazar un comportamiento por un objetivo general equivalente
d) Definir el tamaño de la muestra de un estudio experimental

65. Según el concepto de comportamiento "incómodamente específico" (uncomfortably specific) mencionado en el material, definir bien un comportamiento implica:
*a) Precisar la conducta exacta y el momento en que debe ocurrir, con un nivel de detalle que puede resultar incómodo
b) Formular el comportamiento como un objetivo general amplio y fácil de recordar
c) Evitar mencionar cuándo debe ocurrir la conducta para no limitar su alcance
d) Reemplazar el comportamiento por un estado interno relacionado, como sentirse motivado

66. ¿Cuál de las siguientes opciones corresponde a un comportamiento y no a un objetivo general?
a) Cuidar bien el medio ambiente en la vida cotidiana de todos
b) Ser una persona más productiva en el trabajo
*c) Comer 4 porciones de frutas y verduras al día
d) Sentirse bien con uno mismo en general

67. ¿Cuál de las siguientes opciones corresponde a un comportamiento específico y no a un objetivo general, según el material?
a) Ahorrar para el futuro
*b) Separar los residuos orgánicos al cocinar
c) Comer más sano
d) Ser mejor persona

68. En el ejemplo de la app de ejercicio para una empresa, ¿qué representa la "acción" dentro del esquema outcome-actores-acción?
*a) Ir al gimnasio dos veces por semana durante al menos 30 minutos
b) Los trabajadores de la empresa que todavía no hacen ejercicio de forma regular
c) Disminuir un 50% las visitas al médico o kinesiólogo
d) El costo total de implementar el programa de ejercicio

### Tema: Criterios APEASE para evaluar intervenciones

69. ¿Para qué se utilizan los criterios APEASE, según el material?
*a) Para evaluar la viabilidad y pertinencia de una intervención de cambio de comportamiento propuesta
b) Para diseñar el protocolo de una entrevista en profundidad con usuarios
c) Para clasificar los tipos de papers académicos según su función
d) Para definir si una conducta cumple las condiciones de ser un comportamiento

70. Dentro de los criterios APEASE, ¿qué evalúa el criterio de Asequibilidad?
a) Si la intervención resulta aceptable para los principales interesados
*b) Si la intervención puede llevarse a cabo dentro del presupuesto disponible, incluso a escala
c) Si la intervención es eficaz en el contexto real donde se aplicará
d) Si la intervención podría aumentar las desigualdades sociales existentes

71. ¿Qué pregunta responde el criterio de Viabilidad dentro del modelo APEASE?
a) Si el presupuesto disponible alcanza para implementar la intervención
b) Qué efectos secundarios no deseados podría generar la intervención
*c) En qué medida es factible ejecutar la intervención tal como fue diseñada y a escala
d) En qué medida la intervención reduce las desigualdades sanitarias

72. Según los criterios APEASE, el criterio de Efectividad evalúa específicamente:
a) La factibilidad de ejecutar la intervención tal como fue diseñada
b) La aceptación de la intervención por parte de los interesados principales
c) El costo total de implementar la intervención a mayor escala
*d) La eficacia o rentabilidad de la intervención en el contexto donde se aplicará

73. ¿Qué mide el criterio de Aceptabilidad dentro del modelo APEASE?
*a) En qué medida la intervención propuesta resulta aceptable para los principales interesados
b) La rentabilidad de la intervención en su contexto de aplicación
c) El presupuesto necesario para escalar la intervención
d) Los efectos secundarios no deseados que podría generar

74. Dentro del modelo APEASE, ¿qué busca identificar el criterio de Efectos adversos?
a) Si la intervención resulta aceptable para los interesados principales
*b) Qué efectos secundarios no deseados pueden surgir de aplicar la intervención
c) Si el presupuesto alcanza para ejecutar la intervención a escala
d) En qué medida la intervención aumenta o reduce desigualdades

75. El criterio de Equidad dentro del modelo APEASE evalúa:
a) La factibilidad de implementar la intervención tal como fue diseñada
b) La eficacia de la intervención en el contexto real donde se aplica
*c) En qué medida la intervención aumentará o reducirá desigualdades sociales, económicas o sanitarias
d) Si el costo de la intervención es asumible dentro del presupuesto

## Nivel 5: Sistemas Complejos

### Tema: Concepto de sistema y jerarquías

1. ¿Qué elementos componen todo sistema según lo visto en clase, de manera conjunta?
*a) Los elementos que lo componen, sus conectores internos y su comportamiento general
b) Los objetivos del sistema, sus restricciones internas y los resultados obtenidos con el tiempo
c) Las entradas del proceso, los pasos intermedios y las salidas finales
d) Los actores del sistema, los recursos disponibles y las reglas vigentes

2. Según Donella Meadows, ¿qué es un sistema en términos generales?
a) Una secuencia de eventos que se repite exactamente igual sin importar el contexto
*b) Un conjunto de elementos interrelacionados y organizados de forma coherente para alcanzar un fin
c) Un conjunto de reglas fijas que restringen a todos sus componentes
d) Un conjunto de objetos físicos que comparten un mismo espacio físico

3. En el ejemplo del pájaro sobre "sistemas dentro de sistemas más grandes", ¿qué concepto se ilustra con la palabra "holón"?
a) Un sistema que solo puede existir de forma completamente aislada de su entorno
b) Un componente que jamás se relaciona con ningún otro elemento del sistema
*c) Algo que es simultáneamente un todo y parte de un todo mayor dentro del sistema
d) Un sistema que carece por completo de cualquier tipo de comportamiento emergente

4. Según la clase, ¿qué le ocurre a un ser vivo cuando muere, en términos sistémicos?
a) Se transforma en un sistema más grande junto con su entorno inmediato
b) Mantiene su carácter sistémico porque su materia física sigue existiendo tal como estaba antes
c) Se convierte en un conector que vincula a otros sistemas vivos cercanos
*d) Pierde su carácter sistémico porque sus interrelaciones dejan de funcionar de forma correcta

### Tema: Ciclos reforzadores y balanceadores

5. ¿Qué diferencia principal existe entre los ciclos reforzadores (R) y los ciclos balanceadores (B) de un sistema?
*a) Los reforzadores amplifican el comportamiento del sistema y los balanceadores lo mantienen estable
b) Los reforzadores mantienen el comportamiento del sistema y los balanceadores lo amplifican sin freno
c) Los reforzadores solo existen en sistemas biológicos y los balanceadores en económicos
d) Los reforzadores reducen la incertidumbre y los balanceadores la aumentan de forma constante

6. En el ejemplo del termostato visto en clase, ¿qué tipo de ciclo representa la relación entre la temperatura de la sala y sus ajustes?
a) Un ciclo reforzador que amplifica sin ningún límite la temperatura interior
*b) Un ciclo balanceador que busca mantener estable la temperatura de la sala
c) Un ciclo de crecimiento exponencial propio únicamente de los sistemas financieros
d) Un ciclo de exceso y colapso típico de las poblaciones biológicas

### Tema: Arquetipos de sistemas y casos de dinámica de sistemas

7. ¿Qué caracteriza principalmente al crecimiento exponencial descripto en la clase de hoy?
a) Es un proceso constante que no depende de ningún ciclo de retroalimentación del sistema
b) Es un proceso que se desacelera de forma progresiva hasta detenerse totalmente
*c) Es un proceso que se acelera a medida que la cantidad crece, mediante ciclos reforzadores
d) Es un proceso que ocurre exclusivamente dentro de sistemas de tipo financiero y no en otros

8. En el arquetipo "Overshoot and Collapse" (Exceso y Colapso), ¿qué le sucede a un sistema que supera su capacidad de sostenerse?
a) Se estabiliza de manera automática por la acción de sus propios ciclos balanceadores de forma sostenida
b) Se transforma de manera permanente en un ciclo reforzador que nunca se detiene
c) Aumenta de forma indefinida su capacidad de carga sin ningún límite aparente
*d) Eventualmente colapsa, cayendo muy por debajo de su nivel previo de sostenibilidad en profundidad

9. Según el arquetipo "Soluciones que fracasan", ¿qué sucede al ensanchar rutas para reducir la congestión de tráfico?
a) La congestión se reduce de forma permanente sin generar ningún efecto secundario en el sistema vial
*b) El alivio inicial atrae más conductores y la congestión vuelve a persistir con el tiempo
c) El bucle de refuerzo desaparece por completo apenas se aplica la solución
d) La solución propuesta elimina de raíz la causa principal del problema de tráfico

10. ¿Qué ilustra "el efecto Cobra" contado en la clase sobre la India colonial?
a) Cómo una recompensa por cobras muertas eliminó la plaga de forma sostenible
b) Cómo la cría de cobras se prohibió con éxito desde el inicio del programa
*c) Cómo una solución simple, la recompensa por cobras, aumentó sin querer la plaga
d) Cómo el gobierno británico decidió ignorar por completo el problema de las cobras

11. En el caso de Bogotá, ¿qué resultado tuvo la ley que restringía la circulación de autos según el número de patente?
*a) Los residentes compraron más autos, lo que aumentó la contaminación y el tráfico general
b) Redujo la contaminación y la cantidad de autos en circulación de forma sostenida
c) Eliminó por completo el tráfico vehicular en toda la ciudad de manera inmediata
d) No tuvo ningún efecto sobre la cantidad de vehículos en circulación diaria de la ciudad

12. Al comparar el "sistema DDT" en su versión de expectativa con la versión de realidad, ¿qué se evidencia?
a) Que el sistema real resultó ser mucho más simple de lo esperado inicialmente en la práctica
*b) Que el sistema real incluía muchos más componentes interconectados de lo previsto por la OMS
c) Que la intervención con DDT no tuvo ningún efecto sobre los mosquitos transmisores
d) Que el pueblo Dayak no participó en ningún momento de todo el proceso

### Tema: Pensamiento sistémico y mapeo de sistemas

13. ¿Cómo se define el pensamiento sistémico según lo visto en clase de hoy?
a) Un método que predice con exactitud el comportamiento futuro de cualquier sistema dado
b) Una técnica pensada exclusivamente para resolver problemas propios de la ingeniería
c) Un método que deja de lado por completo el contexto histórico del sistema
*d) Un enfoque centrado en entender cómo se interrelacionan las partes de un sistema

14. ¿Para qué sirve, según la clase, el ejercicio de mapeo de sistemas complejos?
*a) Para ayudar a dar sentido a la "maraña" de un problema complejo
b) Para reemplazar por completo la necesidad de recolectar datos sobre el problema
c) Para garantizar una única solución correcta a cualquier tipo de problema
d) Para eliminar la necesidad de identificar a los actores involucrados

15. Según la clase, ¿qué característica tiene un mapa de sistema una vez que fue elaborado?
a) Es una representación definitiva que ya no debe modificarse con el paso del tiempo
*b) Es un mapa vivo que cambia y se actualiza con el paso del tiempo
c) Solo puede aplicarse a sistemas de tipo estrictamente biológico o natural
d) Deja de ser útil apenas se identifican los actores principales implicados

16. ¿Qué equilibrio es importante lograr al mapear un sistema, según lo visto en clase?
a) Entre usar solamente texto o solamente imágenes al armar el mapa completo
b) Entre incluir únicamente actores del sector público o únicamente del sector privado
*c) Entre mapear la complejidad detallada y hacerla lo suficientemente simple y útil
d) Entre el tamaño final del mapa y la cantidad de colores que se utilizan

17. En los diagramas causales de análisis de causa y efecto vistos en clase, ¿qué representan las interconexiones entre componentes?
a) Actores que no mantienen ninguna relación entre sí dentro del sistema completo de manera clara
b) Límites administrativos que separan a las distintas partes del sistema entero
c) Relaciones que son exclusivamente de tipo económico entre los distintos actores
*d) Un vínculo causal que conecta las variables de causa y de efecto

### Tema: Puntos de palanca y el Iceberg

18. ¿Qué son los "puntos de palanca" (leverage points) definidos por Donella Meadows?
a) Los elementos de un sistema que nunca pueden ser modificados de ningún modo
b) Los conectores que unen entre sí a dos sistemas que resultan exactamente idénticos
c) Los resultados finales que produce un sistema una vez que deja de funcionar
*d) Lugares estratégicos donde un pequeño cambio genera un gran impacto concreto en el sistema

19. Según la jerarquía de puntos de palanca de Donella Meadows, ¿cuál tiene mayor potencial de impacto sobre un sistema?
*a) Transformar los paradigmas o modelos mentales que sostienen los objetivos y las reglas
b) Modificar los parámetros y números del sistema, como montos, plazos o cupos establecidos de forma sostenida
c) Cambiar el tamaño de las reservas o los stocks acumulados dentro del sistema
d) Reducir las demoras que existen entre una acción y sus consecuencias posteriores

20. En la herramienta "El Iceberg" del pensamiento sistémico, ¿qué nivel corresponde a "lo que vemos: hechos y síntomas visibles"?
a) El nivel de patrones y tendencias observadas a lo largo del tiempo en el tiempo
*b) El nivel de eventos concretos que ocurren de manera visible en la superficie
c) El nivel de estructuras subyacentes que sostienen esos patrones y eventos
d) El nivel de modelos mentales y creencias más profundas del sistema

21. Según "El Iceberg", ¿qué acción se asocia al nivel de "estructuras subyacentes" del sistema?
a) Reaccionar ante los síntomas visibles de un problema inmediato y concreto
b) Anticipar los patrones y tendencias que se repiten una y otra vez
*c) Diseñar las reglas, políticas e infraestructuras subyacentes que sostienen el sistema
d) Transformar los modelos mentales y las creencias culturales más profundas

### Tema: Abordaje iterativo frente a la complejidad

22. Según la clase, ¿por qué los problemas complejos rara vez tienen una solución permanente y definitiva?
*a) Porque mantener el equilibrio requiere un ajuste constante de las variables involucradas
b) Porque los sistemas complejos dejan de existir por completo una vez resueltos en cada caso
c) Porque las soluciones complejas siempre terminan generando el llamado efecto cobra
d) Porque los ciclos balanceadores del sistema desaparecen por completo con el tiempo

23. En el ciclo "Testear y Aprender" presentado en clase, ¿cuál es el objetivo de la etapa "Ajustar"?
a) Escalar las soluciones ya validadas hacia otros contextos y poblaciones distintas
*b) Ajustar la solución mediante iteraciones ágiles, empezando por las suposiciones más críticas
c) Detectar los obstáculos para el enfoque de prueba y eliminarlos del proceso en la práctica
d) Definir el resultado deseado y comprender bien el contexto del problema

24. En el esquema de "Espacio para problema / Espacio para solución" (doble diamante), ¿qué caracteriza a la fase divergente de "Descubrir"?
a) Definir el problema mediante el uso de una matriz de viabilidad e impacto
b) Entregar el producto mínimo viable junto con sus métricas de seguimiento correspondientes
*c) Explorar ampliamente mediante mapas del sistema e investigación de campo sobre el problema
d) Realizar una lluvia de ideas de soluciones concretas para resolver el problema

### Tema: Comportamiento, información y cambio sostenible

25. Según la evidencia de las ciencias del comportamiento presentada en clase, ¿qué rol cumple la información al cambiar un comportamiento?
a) Es irrelevante porque el comportamiento depende únicamente de factores estructurales del entorno
b) Es la única variable que garantiza por sí sola el cambio sostenido de conducta
c) Solo resulta relevante dentro de los sistemas de salud y no en otros contextos
*d) Es necesaria pero no suficiente para lograr un cambio sostenido de conducta

26. En el estudio de caso sobre HIV e ITS en Comodoro Rivadavia, ¿qué problema se identificó vinculado al "acceso a la información sobre salud"?
*a) Contenidos dispersos y confusos, y falta de información clara sobre los servicios
b) Exceso de campañas y de referentes confiables disponibles para dar orientación clara
c) Sobreabundancia de circuitos claros y bien definidos para gestionar turnos y derivaciones médicas
d) Exceso de datos actualizados sobre las características de toda la población local

27. Según la frase citada en clase sobre el cambio de conducta sostenible, ¿qué se necesita además de comprender a la persona?
a) Aumentar de manera exclusiva la cantidad de información disponible para las personas
*b) Comprender y transformar el sistema que hace posible o conveniente esa conducta de forma sostenida
c) Reemplazar a la persona involucrada por otro actor dentro del mismo sistema
d) Ignorar por completo el contexto estructural en el que ocurre esa conducta
`;