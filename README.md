# App de repaso multiple choice

App de estudio tipo multiple choice, organizada por materias y niveles. Es un HTML autocontenido: **no necesita servidor, ni instalación, ni conexión a internet**.

## Cómo abrirla

Hacé doble clic en `index.html` desde el explorador de archivos. Se abre en el navegador y listo.

Los archivos deben quedar siempre en la misma carpeta:

```
index.html                         ← la app
preguntas.js                       ← materia "Arquitectura de Aplicaciones Web"
preguntas_ciencia_comportamiento.js ← materia "Ciencia del Comportamiento Aplicada"
preguntas_ia_neurociencias.js      ← materia "Inteligencia Artificial y Neurociencias"
preguntas_ia_neurociencias_p2.js   ← materia "IA y Neuro p. 2"
imagenes/                          ← imágenes que usan las preguntas
README.md                          ← este archivo
```

## Cómo se juega

1. **Materias**: elegís la materia que querés repasar. Cada una muestra cuántos niveles aprobaste.
2. **Niveles**: cada nivel es una clase o tema y se muestran como un camino. **Todos están abiertos**: no hace falta aprobar uno para entrar al siguiente. El primero sin aprobar aparece destacado como «Siguiente». Cada nivel muestra si está aprobado o saltado y, si lo jugaste, sus estrellas.
3. **Checkpoints**: las preguntas de cada nivel se agrupan según los **temas** que se declaren con `### Tema: Nombre` dentro del nivel. Cada tema es un checkpoint y se juegan en el orden en que aparecen en el archivo. Un tema con **más de 8 preguntas se parte en partes parejas** (por ejemplo, 19 preguntas pasan a 7, 6 y 6, con el nombre «Tema (parte 1 de 3)»), para que un error no obligue a repetir demasiado. Un nivel sin ningún `### Tema:` se divide igual en partes de hasta 8.
4. **Preguntas**: dentro de un checkpoint, las preguntas se juegan en orden aleatorio y con las opciones también mezcladas. En todas se **elige y después se toca «Comprobar»** (así un toque sin querer no cuenta como respuesta). La mayoría son de **respuesta única**; las de **selección múltiple** dicen «Elegí todas las correctas» y para acertar hay que marcar exactamente las correctas, ni de más ni de menos. Con teclado, las letras eligen una opción y Enter comprueba y continúa.
5. **Resultado de cada pregunta**: una barra inferior fija muestra si acertaste. Si fallaste, se resalta lo correcto y **se reinicia ese checkpoint desde el principio** (se vuelven a barajar sus preguntas y opciones), sin tocar los checkpoints anteriores. En selección múltiple cada opción indica si estaba bien marcada, si faltó marcarla o si no correspondía. No hay temporizador en ningún momento.
6. **Avance guardado**: al completar cada checkpoint se guarda dónde quedaste. Si cerrás la página, el nivel muestra «Continuar» con cuántas preguntas llevás (también podés «Empezar de nuevo»). Si salís en medio de un checkpoint, se retoma desde el comienzo de ese checkpoint. Si cambiás el contenido del nivel en el archivo de preguntas, el avance guardado de ese nivel se descarta solo.
7. **Resumen y estrellas**: al completar todos los checkpoints el nivel queda aprobado. El resumen muestra cuántas preguntas acertaste a la primera (la primera vez que las viste) y cuántos reintentos hubo. Las estrellas dependen de los reintentos de checkpoint: **tres sin ninguno, dos con 1 a 3, una con 4 o más**. Si volvés a jugar el nivel se guarda tu mejor marca. Desde ahí podés continuar al siguiente nivel, jugar de nuevo o volver a la lista.
8. **Saltar nivel**: cada nivel sin aprobar tiene un botón **«Saltar nivel»** (con confirmación) que lo marca como aprobado sin jugarlo. Queda como «Saltado», sin estrellas.
9. **Puntos**: cada pregunta acertada **a la primera** (la primera vez que la ves) suma 10 puntos. Se suman al completar cada checkpoint, así que salir a mitad de uno y volver no los duplica; acertar en un reintento o saltar un nivel no suma. El resultado de cada nivel muestra los puntos ganados y la pantalla de materias, el total.
10. **Meta semanal**: la pantalla de materias muestra tu semana (de lunes a domingo). Un día cuenta como de estudio cuando completás al menos un checkpoint. La meta es de **2 a 5 días por semana** (3 por defecto, se cambia en los ajustes). No hay racha que perder: una semana cumplida sigue contando aunque después subas la meta.
11. **Insignias**: hay cuatro, y cada una se ve con su fecha en la pantalla de insignias. *Primer nivel* (aprobar un nivel jugándolo), *Nivel perfecto* (tres estrellas), *Materia completa* (todos sus niveles aprobados jugando, sin saltear ninguno) y *Cuatro semanas con meta* (en total, seguidas o no). Una insignia ganada no se pierde si reiniciás una materia. Al ganarla se muestra en el resumen del nivel o, si fue a mitad de uno, en un aviso breve.
12. **Ajustes de juego** (ícono de engranaje): un interruptor apaga estrellas, puntos, meta semanal, insignias y celebraciones (se siguen registrando, solo se dejan de mostrar) y se elige la meta semanal. El sonido al responder y la vibración vienen apagados. Todo se guarda en el dispositivo y no se sincroniza entre dispositivos.

---

## Pruebas

`tests/juego.test.js` prueba puntos, meta semanal, insignias y avisos en un navegador real. Con la app servida (`python3 -m http.server 8765`), se corre con `QUIZ_URL=http://127.0.0.1:8765/index.html node tests/juego.test.js` y necesita Playwright (`npm i playwright`).

---

## Formato de las preguntas

Todo el contenido vive como texto plano dentro de un archivo `.js`. Las reglas son:

- Cada nivel arranca con una línea `## Nivel N: Nombre de la clase` (N secuencial, empezando en 1).
- Dentro de un nivel, cada pregunta arranca con un número, punto y el texto: `1. ¿Cuál es...?`
- Cada pregunta tiene **entre 2 y 6 opciones**, una por línea: `a) texto`, `b) texto`, `c) texto`, etc. (hasta `f`).
- La(s) opción(es) correcta(s) se marca(n) con un asterisco delante de la letra: `*c) texto`. Si hay **una sola** opción marcada, la pregunta es de respuesta única (la clásica); si hay **dos o más**, la app la trata automáticamente como pregunta de selección múltiple ("Elegí todas las opciones correctas") — no hace falta ningún marcador extra en el texto, alcanza con poner más de un asterisco.
- Las preguntas se separan entre sí con una **línea en blanco**.
- (Opcional, para que los checkpoints sigan el tema real) Dentro de un nivel podés agrupar las preguntas con `### Tema: Nombre del tema`. Todas las preguntas hasta el próximo `### Tema:` (o el fin del nivel) quedan en ese tema, y cada tema se juega como un checkpoint propio en el orden en que aparece. Si no usás `### Tema:` en un nivel, ese nivel se juega entero como un único checkpoint.
- (Opcional) Una pregunta puede llevar una imagen: agregá una línea `![texto alternativo](imagenes/archivo.png)` justo debajo del encabezado de la pregunta (antes de las 4 opciones). La ruta es relativa a la carpeta donde vive `index.html`, así que las imágenes van en una carpeta `imagenes/` en la raíz del repo.

Ejemplo:

```
## Nivel 1: Introducción a la Arquitectura de Software

### Tema: Patrones arquitectónicos

1. ¿Cuál de los siguientes es un patrón arquitectónico?
a) Bubble sort
*b) Arquitectura en capas
c) Recursión de cola
d) Programación dinámica

### Tema: Atributos de calidad

2. ¿Qué diagrama se muestra en la imagen?
![Diagrama de capas de una arquitectura de software](imagenes/nivel1-diagrama-capas.png)
a) El nombre de una variable
*b) Un requisito no funcional como la escalabilidad
c) Un tipo de test unitario
d) Un comando de git
```

### Prompt para generar preguntas con otro chat

Podés pegar esto en otro chat junto con el material de la clase:

> Generá preguntas multiple choice sobre el siguiente material, respetando EXACTAMENTE este formato de texto plano, sin markdown adicional ni texto explicativo alrededor:
>
> - Cada nivel arranca con una línea `## Nivel N: Nombre de la clase` (N secuencial empezando en 1).
> - Dentro de cada nivel, agrupá las preguntas por subtema real del material usando `### Tema: Nombre del tema` antes de cada grupo (no repartas en bloques de tamaño parejo ni al azar: cada `### Tema:` debe corresponder a un tema o sección real del contenido).
> - Cada pregunta arranca con un número seguido de punto: `1. texto de la pregunta`.
> - Cada pregunta tiene entre 2 y 6 opciones, una por línea: `a) texto`, `b) texto`, `c) texto`, etc. (hasta `f`).
> - La(s) opción(es) correcta(s) se marca(n) con un asterisco antes de la letra: `*c) texto`. La mayoría de las preguntas deben tener una sola opción correcta (respuesta única); ocasionalmente, cuando tenga sentido, generá alguna con dos o más opciones correctas (selección múltiple) marcando cada una con su asterisco.
> - Las preguntas se separan entre sí con una línea en blanco.

---

## Cómo subir preguntas nuevas (a una materia que ya existe)

Esto es lo que vas a hacer cada vez que curses una clase nueva. **No hace falta tocar `index.html`.**

1. Abrí el archivo de la materia (por ejemplo `preguntas.js`) con cualquier editor de texto.
2. Bajá hasta el final del texto entre comillas invertidas (` `` `), justo antes de la línea `` `; ``.
3. Pegá el nuevo nivel respetando el formato, con el número que le corresponde:

```js
const PREGUNTAS_RAW_AAW = `
## Nivel 1: Introducción a la Arquitectura de Software
... (niveles que ya tenías) ...

## Nivel 4: Seguridad en Aplicaciones Web      ← nivel nuevo

### Tema: Inyección de código

1. ¿Qué previene principalmente el uso de consultas parametrizadas?
a) Ataques de denegación de servicio
*b) Inyección SQL
c) Ataques de fuerza bruta
d) Fugas de memoria

2. ...

### Tema: Autenticación

3. ...
`;
```

4. Guardá el archivo y recargá `index.html` en el navegador (F5). El nivel nuevo aparece automáticamente, abierto desde el primer momento. Los `### Tema:` son opcionales: si el nivel nuevo no los usa, se juega entero como un único checkpoint (y se parte en tandas de hasta 8 preguntas si es más largo).

> ⚠️ Ojo con el texto de las preguntas: si una pregunta contiene el carácter de comilla invertida (`` ` ``) o la secuencia `${`, hay que escaparlos con `\` porque el contenido va dentro de un template literal de JavaScript. En la práctica casi nunca pasa.

---

## Cómo subir una materia nueva

La app no puede "descubrir" archivos sola porque se abre directamente desde el disco (sin servidor, un navegador no puede listar carpetas ni leer archivos por su cuenta). Por eso agregar una materia son 2 pasos manuales, pero es siempre igual:

### Paso 1 — Crear el archivo de la materia

Copiá `preguntas.js` y renombralo, por ejemplo `preguntas_bases_datos.js`. Adentro, cambiá el sufijo `_AAW` de las tres constantes por uno propio (por ejemplo `_BD`) y poné tu contenido:

```js
const MATERIA_ID_BD = "bases-de-datos";              // id único, sin espacios
const MATERIA_NOMBRE_BD = "Bases de Datos";          // nombre que se ve en la app
const PREGUNTAS_RAW_BD = `
## Nivel 1: Modelo Relacional

1. ¿Qué es una clave primaria?
a) Una contraseña de acceso a la base
*b) Un atributo o conjunto de atributos que identifica unívocamente cada fila
c) Un índice secundario opcional
d) Un tipo de backup incremental

...
`;
```

El sufijo tiene que ser distinto al de las otras materias, si no las variables chocan entre sí.

### Paso 2 — Registrarla en `index.html`

Abrí `index.html` y buscá el bloque de scripts cerca del final. Agregá dos cosas:

```html
<script src="preguntas.js"></script>
<script src="preguntas_bases_datos.js"></script>   <!-- ← 1) el archivo nuevo -->

<script>
const MATERIAS_DISPONIBLES = [
  { id: MATERIA_ID_AAW, nombre: MATERIA_NOMBRE_AAW, raw: PREGUNTAS_RAW_AAW },
  { id: MATERIA_ID_BD,  nombre: MATERIA_NOMBRE_BD,  raw: PREGUNTAS_RAW_BD  },  // ← 2) la entrada nueva
];
</script>
```

Guardá, recargá `index.html` y la materia nueva aparece en la pantalla inicial.

---

## Cómo cambiar el aspecto visual

Todos los colores, la tipografía y el redondeo de bordes están en un único bloque `:root { ... }` al principio del `<style>` de `index.html`, cada uno con un comentario de qué controla. El resto del CSS solo usa esas variables, así que no hace falta buscar colores repetidos por el archivo.

Por ejemplo, para cambiar el dorado por un azul, editás una sola línea:

```css
:root {
  --accent:      #4aa3df;   /* antes: #d4af37 */
  --accent-text: #06121c;   /* texto sobre el color de acento, para que contraste */
}
```

Variables principales:

| Variable | Qué controla |
|---|---|
| `--bg-body` | Fondo general de la página |
| `--bg-panel` / `--bg-panel-alt` | Fondo de tarjetas y de los botones de opción |
| `--text-primary` / `--text-muted` | Texto principal y secundario |
| `--accent` / `--accent-text` | Color de acento (títulos, botones principales) |
| `--correct-bg` / `--correct-fg` | Colores de respuesta correcta |
| `--incorrect-bg` / `--incorrect-fg` | Colores de respuesta incorrecta |
| `--radius` | Redondeo de bordes |
| `--font-body` | Familia tipográfica |
| `--max-width` | Ancho máximo del contenido en pantallas grandes |

La app es responsive: funciona igual en computadora y en el navegador del celular (las tarjetas se apilan en una columna en pantallas angostas y los botones tienen buen tamaño para tocar con el dedo).

La tipografía se carga desde Google Fonts, pero si no hay internet cae automáticamente a una fuente del sistema sin romper nada.

---

## Cómo funciona el progreso guardado

- El progreso se guarda en el **localStorage del navegador** de esa computadora o teléfono. No se sincroniza entre dispositivos: si abrís la app en el celular, arranca de cero ahí.
- Un nivel queda **aprobado** cuando lográs el 100% de aciertos en algún intento. Una vez aprobado, queda aprobado para siempre: si después volvés a jugarlo para practicar y fallás, no se vuelve a bloquear nada.
- El botón **"Reiniciar progreso de esta materia"** está en la pantalla de niveles de cada materia y pide confirmación antes de ejecutarse. Solo borra el progreso de **esa** materia: el de las demás queda intacto.

---

## Si algo no funciona

**Aparece un aviso amarillo de "preguntas ignoradas".** Significa que alguna pregunta no cumple el formato y fue descartada (el resto de la app sigue funcionando normal). Abrí la consola del navegador con **F12 → Consola** y vas a ver mensajes que indican exactamente la materia, el nivel y el número de pregunta con problema. Las causas más comunes son:

- Ninguna opción marcada con `*`, o más de una marcada.
- Menos o más de 4 opciones, o letras repetidas.
- Falta la línea en blanco que separa una pregunta de la siguiente.
- La pregunta no arranca con `número. texto`.

**Un nivel aparece como "Sin preguntas válidas".** Todas sus preguntas fueron descartadas por errores de formato, o el nivel quedó vacío. Revisá la consola como arriba.

**Un nivel no muestra los checkpoints por tema que esperaba.** Revisá que cada `### Tema:` esté escrito exactamente así (con los tres `#`, dos puntos y el nombre) y que no le falten preguntas válidas — si todas las preguntas de un tema quedan descartadas por errores de formato, ese tema se descarta entero y verás el aviso en consola.

**La materia nueva no aparece.** Revisá que hayas hecho los dos pasos: agregar el `<script src="...">` y la entrada en `MATERIAS_DISPONIBLES`. Si en la consola ves un error del tipo "X is not defined", es que el sufijo de las variables del archivo nuevo no coincide con el que pusiste en `MATERIAS_DISPONIBLES`.
