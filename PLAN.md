# Plan — multiple_choice_Apps_Web

## Estado

### En curso

### Pendientes
- **Agregar materias/niveles reales adicionales** a medida que el usuario curse nuevas clases, siguiendo el patrón ya documentado en el README.
- **Revisar el recorte de `imagenes/iap2-nivel3-arbol-parsing.png`**, que corta la parte superior del árbol (no se ve la raíz). Es un tema del archivo de imagen, no del código.

### Completadas
- 2026-10-21 — Materia nueva "IA y Neuro p. 2" (3 niveles, 9 imágenes, sufijo `_IAN2`)
- 2026-09-28 — Preguntas de selección múltiple ("elegí todas las correctas") y opciones variables (2 a 6)
- 2026-09-27 — Imágenes dentro de las preguntas, desde la carpeta `imagenes/`
- 2026-09-27 — Publicación en GitHub Pages (`quiz.html` pasó a llamarse `index.html` el 2026-09-09 para que Pages la sirva en la raíz)
- 2026-09-10 — Botón "Saltar nivel" para desbloquear el siguiente nivel sin responder preguntas
- 2026-08-19 — App de estudio multiple-choice multi-materia (Arquitectura de Aplicaciones Web)
- 2026-08-28 — Cargar contenido real de "Arquitectura de Aplicaciones Web" (4 niveles) y crear la materia "Ciencia del Comportamiento Aplicada" (3 niveles)
- 2026-08-28 — Checkpoints dentro de cada nivel
- 2026-09-05 — Checkpoints agrupados por tema (`### Tema:`) en vez de por tamaño parejo

## Bitácora de decisiones

### 2026-10-21 — Materia nueva "IA y Neuro p. 2": archivo y sufijo propios, registrada a mano
**Contexto:** el usuario subió una clase nueva (`preguntas_ia_neurociencias_p2.js`) que no continúa la materia "Inteligencia Artificial y Neurociencias" sino que define una materia distinta, con su propio id (`ia-neurociencias-p2`) y sufijo de variables (`_IAN2`).
**Decisión:** se agregó como materia independiente siguiendo el patrón de registro manual ya documentado (un `<script src>` más y una entrada más en `MATERIAS_DISPONIBLES`), sin tocar la materia "IAN" existente. Sus 9 imágenes usan el prefijo `iap2-` para no chocar con las de otras materias. Es el primer contenido real con muchas preguntas de selección múltiple (21 solo en el Nivel 3), así que se validó de punta a punta en un navegador: carga de las 4 materias, juego del Nivel 3 completo, toggle y confirmación de selección múltiple, respuesta incompleta que reinicia el checkpoint, y carga de las imágenes en escritorio y en ancho de celular.
**Alternativas descartadas:** sumar este contenido como niveles 6 en adelante de la materia "IAN" (el usuario lo entregó con id y nombre de materia propios, y mezclar clases distintas dentro de una materia contradice cómo viene organizado el resto).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-09-28 — Selección múltiple detectada por la cantidad de asteriscos, con acierto todo-o-nada
**Contexto:** el usuario pidió sumar preguntas de "elegir las correctas entre varias", además de las de respuesta única.
**Decisión:** no hay un marcador nuevo en el texto: una pregunta con un solo `*` sigue siendo de respuesta única (se responde al hacer clic) y una con dos o más pasa sola a selección múltiple (`question.multi`), con opciones que se prenden y apagan, una pista "Elegí todas las opciones correctas" y un botón "Confirmar respuesta". Se acierta solo si se marcan exactamente las correctas, ni de más ni de menos (`isCorrectSelection`), y un error reinicia el checkpoint igual que antes. De paso se amplió el rango de opciones de 4 fijas a entre 2 y 6 (letras a-f), y se exige al menos una correcta. El estado `selectedLetter` pasó a ser `selectedLetters` (arreglo). Se verificó que las 884 preguntas ya cargadas siguieran parseando idéntico y sin ninguna marcada como múltiple por error. También se actualizaron el README, el prompt para el generador de preguntas y la skill `preguntas-multiple-choice-conceptuales` (esta última hay que guardarla a mano desde claude.ai, porque la copia local no se sincroniza hacia la cuenta).
**Alternativas descartadas:** un marcador explícito en el texto, por ejemplo `[multi]` (agregaba una sintaxis más para el generador sin aportar nada que los asteriscos no den); puntaje parcial (se propuso el criterio todo-o-nada y el usuario lo aceptó, coherente con el resto de la app, donde cualquier error reinicia el checkpoint; el puntaje parcial no se llegó a plantear).
**Revisión post-implementación:** salió tal cual lo planeado. Pendiente de mejora opcional: en una respuesta incorrecta de selección múltiple, todas las correctas se marcan en verde sin distinguir cuáles había marcado el usuario y cuáles no.

### 2026-09-27 — Imágenes en las preguntas como archivos aparte, no embebidas en base64
**Contexto:** el usuario quería usar imágenes de las diapositivas dentro de las preguntas.
**Decisión:** una línea opcional `![texto alternativo](imagenes/archivo.png)` justo después del enunciado y antes de las opciones. El parser la separa de las opciones y la app muestra un `<img>` con ancho máximo del contenedor. Los archivos viven en la carpeta `imagenes/` de la raíz del repo, con nombres sin espacios que incluyen nivel y tema (y un prefijo de materia cuando hace falta evitar choques).
**Alternativas descartadas:** embeber las imágenes en base64 dentro de los `.js` (cada una agrega miles de caracteres ilegibles, el archivo de preguntas deja de poder editarse a mano y el generador puede cortar el texto a la mitad).
**Revisión post-implementación:** salió tal cual lo planeado. Las imágenes que llegan en `.webp` se convierten a `.png` para que coincidan con la ruta que ya referencia el texto.

### 2026-09-10 — Botón "Saltar nivel": disponible en cualquier nivel, en cualquier momento
**Contexto:** el usuario pidió una forma de avanzar de nivel sin tener que responder sus preguntas (por ejemplo, para repasar contenido más adelante sin quedar trabado en un nivel que no le interesa rendir en ese momento).
**Decisión:** cada tarjeta de nivel en la pantalla de niveles tiene, además del botón para jugarlo, un botón secundario "Saltar nivel" (con confirmación) que marca ese nivel como aprobado y desbloquea el siguiente — disponible en cualquier nivel (incluso bloqueados o sin preguntas válidas) mientras no esté ya aprobado. Se agregó `skipLevel(materiaId, levelNumber, progress)`, separado de `recordAttempt`: agrega el nivel a `passedLevels` pero **no** toca `lastAttempts`, para no simular un puntaje que nunca se jugó. Como la tarjeta de nivel ya no puede ser un único `<button>` (necesita dos acciones independientes), pasó a ser un `<div class="card">` que envuelve un botón interno `.tile-btn` (jugar) y el botón `.btn-skip` (saltear).
**Alternativas descartadas:** restringir el salto solo a niveles ya desbloqueados (el usuario pidió explícitamente que funcione en cualquier nivel, en cualquier momento); registrar el salto en `lastAttempts` como si fuera un intento con 100% de aciertos (se descartó por falsear las estadísticas de intentos reales).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-09-05 — Checkpoints por tema declarado, no por tamaño calculado
**Contexto:** los checkpoints (4 bloques parejos, calculados sobre el nivel ya barajado) no tenían ninguna relación con el contenido: dos preguntas de temas distintos podían caer en el mismo bloque, y la composición cambiaba en cada intento. El usuario pidió que los checkpoints reflejen el tema real de las preguntas.
**Decisión:** nuevo marcador de formato `### Tema: Nombre del tema` dentro de un nivel; cada tema declarado es un checkpoint, jugado en el orden en que aparece en el archivo (no se rebaraja el orden de los temas, solo las preguntas y opciones dentro de cada uno). La cantidad de checkpoints ya no es fija en 4: es la cantidad de temas que tenga el nivel. Se eliminaron `computeCheckpointSizes` y `splitIntoCheckpoints`; `startLevel` toma los checkpoints directo de `level.topics`, armados por el parser. Un nivel sin ningún `### Tema:` (como los niveles ya cargados hoy en `preguntas.js` y `preguntas_ciencia_comportamiento.js`) se sigue jugando como un único checkpoint con todas sus preguntas, igual que antes de existir los checkpoints — degradación sin romper nada, consistente con el resto del parser.
**Alternativas descartadas:** exigir que todo nivel tenga al menos un `### Tema:` y romper/advertir fuerte si no lo tiene (se descartó por innecesariamente disruptivo con el contenido ya cargado); descartar las preguntas escritas antes del primer `### Tema:` de un nivel que sí declara temas (se descartó por perder contenido por un error de organización menor del archivo; en cambio se agrupan en un checkpoint sin nombre visible al principio).
**Revisión post-implementación:** salió tal cual lo planeado. Nota para el usuario: los niveles ya cargados hoy no tienen `### Tema:`, así que se juegan como un único checkpoint hasta que se resuban con esos headers agregados.

### 2026-08-19 — Registro manual de materias en vez de descubrimiento automático
**Contexto:** la app tiene que abrirse con doble clic desde `file://`, sin servidor. Se pidió poder extender la app a otras materias con el tiempo.
**Decisión:** cada materia es un archivo `.js` que define 3 constantes con un sufijo propio (`MATERIA_ID_*`, `MATERIA_NOMBRE_*`, `PREGUNTAS_RAW_*`) cargado con `<script src>` clásico; `quiz.html` arma a mano un array `MATERIAS_DISPONIBLES` que las enumera. Agregar una materia son 2 pasos manuales y documentados (duplicar archivo + agregar 2 líneas en `quiz.html`).
**Alternativas descartadas:** descubrimiento automático vía `fetch` de un directorio de materias (imposible en `file://` por CORS, no hay servidor); un único archivo monolítico con todas las materias mezcladas (peor para copiar/pegar un patrón y para que otro LLM genere contenido de una materia a la vez).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-08-19 — Avance entre preguntas con botón manual, no automático
**Contexto:** el pedido original prohíbe cualquier temporizador/cuenta regresiva, pero también pide que el juego avance a la siguiente pregunta sin interrumpirse tras cada respuesta.
**Decisión:** tras ver el feedback de correcto/incorrecto, el usuario avanza con un botón "Siguiente pregunta" — nunca automático.
**Alternativas descartadas:** auto-advance con `setTimeout` de ~1s sin contador visible (técnicamente cumple "sin temporizador" pero es ambiguo y el usuario prefirió control total del ritmo).
**Revisión post-implementación:** salió tal cual lo planeado (confirmado explícitamente por el usuario antes de implementar).

### 2026-08-19 — "Aprobado" es permanente por materia, no depende del último intento
**Contexto:** un nivel se aprueba con 100% de aciertos en un intento; había que definir qué pasa si más adelante el usuario reintentra ese nivel por practicar y falla.
**Decisión:** una vez que un nivel llega a 100% en algún intento, queda marcado como aprobado para siempre y el siguiente nivel permanece desbloqueado, sin importar reintentos posteriores fallidos.
**Alternativas descartadas:** que el estado "aprobado" reflejara solo el último intento (podría re-bloquear el siguiente nivel por un reintento de práctica, lo cual castiga repasar).
**Revisión post-implementación:** salió tal cual lo planeado (confirmado explícitamente por el usuario).

### 2026-08-19 — Reset de progreso individual por materia
**Contexto:** primera versión del plan proponía un único botón de reset global (más simple de implementar).
**Decisión:** cada materia tiene su propio botón "Reiniciar progreso" en su pantalla de niveles, que solo borra `progress.materias[esaMateria]` en localStorage.
**Alternativas descartadas:** un solo botón de "reiniciar todo" en la pantalla de selección de materias (más simple, pero el usuario explícitamente no quiso perder el progreso de todas las materias de una sola vez).
**Revisión post-implementación:** salió tal cual lo planeado, ajustado a pedido explícito del usuario tras la primera propuesta.

### 2026-08-19 — Errores de formato en preguntas: se descartan, no rompen la app
**Contexto:** el parser de texto plano puede encontrarse preguntas mal formadas (sin opción correcta marcada, o con más de una).
**Decisión:** se descarta solo la pregunta malformada, se loguea un `console.error` con materia/nivel/número de pregunta, y se muestra un banner no bloqueante en pantalla — nunca se detiene toda la app.
**Alternativas descartadas:** halt total de la app ante cualquier error de formato (peor experiencia de debugging para el propio usuario editando su archivo de preguntas, y bloquea el resto de niveles bien formados por un solo typo).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-08-19 — Publicar `main` empujando la branch directo, sin PR
**Contexto:** el usuario pidió mergear la branch de trabajo a `main` para poder habilitar GitHub Pages, pero el repo no tenía ningún commit ni branch `main` todavía.
**Decisión:** se publicó el contenido de `claude/web-arch-quiz-app-4lxk3a` directamente como `main` (`git push origin claude/web-arch-quiz-app-4lxk3a:main`), equivalente a un merge sin conflictos por no existir historia previa en `main`.
**Alternativas descartadas:** abrir un Pull Request contra `main` (no es posible crearlo si la rama base no existe todavía en GitHub).
**Revisión post-implementación:** salió tal cual lo planeado.

### 2026-08-28 — Checkpoints por nivel: 4 bloques fijos, reintento de checkpoint completo
**Contexto:** con niveles largos (30-60+ preguntas ya cargadas en el contenido real), fallar una sola pregunta tarde obligaba a rehacer el nivel entero desde cero, lo cual el usuario consideró un castigo desproporcionado.
**Decisión:** cada nivel se reparte en 4 checkpoints lo más parejos posible (ej. 33 → 9/8/8/8; <4 preguntas → un único checkpoint con todas). Al fallar una pregunta se reinicia únicamente ese checkpoint desde el principio, rebarajando tanto el orden de sus preguntas como las opciones de cada una. Como esto garantiza terminar el nivel con el 100% de aciertos, la pantalla de resultado quedó con un único desenlace ("aprobado") y se agregó un botón opcional "Jugar de nuevo".
**Alternativas descartadas:** reintentar solo la pregunta puntual fallada, sin agrupar en bloques (el usuario pidió explícitamente bloques/checkpoints, no reintento pregunta por pregunta); checkpoints de tamaño variable u otra cantidad de bloques (se fijó en 4, confirmado explícitamente); mantener la rama "no aprobado / Reintentar nivel" del código aunque quedara inalcanzable (se descartó por ser código muerto, decisión explicada en el plan y confirmada al aprobarlo).
**Revisión post-implementación:** salió tal cual lo planeado.
