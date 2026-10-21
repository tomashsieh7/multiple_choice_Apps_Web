// Pruebas de puntos, meta semanal, insignias y avisos de la app.
//
// Uso (con la app servida, por ejemplo `python3 -m http.server 8765`):
//   QUIZ_URL=http://127.0.0.1:8765/index.html node tests/juego.test.js
// Necesita Playwright instalado (`npm i playwright`) y un Chromium.
// Con PLAYWRIGHT_CHROMIUM=/ruta/al/chromium se usa un navegador ya instalado.

const { chromium } = require('playwright');

const URL = process.env.QUIZ_URL || 'http://127.0.0.1:8765/index.html';
let passed = 0, failed = 0;

function check(name, cond, detail) {
  if (cond) { passed++; return; }
  failed++;
  console.log('FALLA:', name, detail !== undefined ? JSON.stringify(detail) : '');
}

async function open(browser, { tz = 'America/Argentina/Buenos_Aires', storage = {}, time } = {}) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, timezoneId: tz });
  const page = await ctx.newPage();
  page.errs = [];
  page.on('pageerror', e => page.errs.push(e.message));
  if (time) await page.clock.install({ time });
  await page.addInitScript(entries => {
    if (sessionStorage.getItem('__seeded')) return;
    sessionStorage.setItem('__seeded', '1');
    for (const [k, v] of Object.entries(entries)) localStorage.setItem(k, v);
  }, storage);
  await page.goto(URL);
  return page;
}

const store = (page, key) => page.evaluate(k => JSON.parse(localStorage.getItem(k)), key);

// Responde la pregunta actual leyendo las opciones correctas del estado de la app.
async function answer(page, correct) {
  const q = await page.evaluate(() => {
    const q = currentQuestion();
    return { multi: q.multi, ok: q.options.filter(o => o.isCorrect).map(o => o.letter), no: q.options.filter(o => !o.isCorrect).map(o => o.letter) };
  });
  const pick = correct ? q.ok : (q.multi ? q.ok.slice(1) : [q.no[0]]);
  for (const letter of pick) await page.click(`[data-letter="${letter}"]`);
  await page.click('[data-act="check"]');
}

(async () => {
  const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {});

  // Los avisos viven fuera de #app: su botón de cerrar tiene que responder igual.
  {
    const page = await open(browser);
    await page.evaluate(() => showBadgeToast([BADGES[0]]));
    check('el aviso aparece', (await page.$('.toast')) !== null);
    await page.click('[data-act="close-toast"]');
    check('el botón de cerrar quita el aviso', (await page.$('.toast')) === null);
    await page.context().close();
  }

  // Puntos: 10 por acierto a la primera, solo al completar el checkpoint.
  {
    const page = await open(browser);
    await page.click('[data-act="open-materia"][data-i="0"]');
    await page.click('[data-act="start-level"][data-i="0"]');
    await answer(page, true);                              // 1.ª pregunta del 1.er checkpoint (2 preguntas)
    await page.click('[data-act="next"]');
    check('a mitad de un checkpoint todavía no hay puntos', (await store(page, 'quizAppGame_v1')) === null || (await store(page, 'quizAppGame_v1')).points === 0);
    await answer(page, true);
    await page.click('[data-act="next"]');
    check('al completar el checkpoint suma 10 por pregunta', (await store(page, 'quizAppGame_v1')).points === 20);
    await page.click('[data-act="exit-level"]');
    await page.click('[data-act="resume-level"][data-i="0"]');
    await answer(page, false);                             // se falla la primera de este checkpoint
    await page.click('[data-act="next"]');
    await answer(page, true);                              // acertar en un reintento no suma
    await page.click('[data-act="next"]');
    check('acertar en un reintento no suma puntos', (await page.evaluate(() => state.cpFirstTry)) <= 1);
    await page.context().close();
  }

  // Datos guardados ilegibles o fuera de rango: la app carga con valores por defecto.
  {
    const page = await open(browser, { storage: {
      quizAppGame_v1: JSON.stringify({ points: 'mucho', studyDays: ['<img src=x onerror=window.__x=1>'], weeksMet: 5, badges: { 'primer-nivel': '<b>' } }),
      quizAppSettings_v1: JSON.stringify({ goal: 99 }),
    } });
    const snapshot = await page.evaluate(() => ({ points: state.game.points, days: state.game.studyDays.length, badges: Object.keys(state.game.badges).length, goal: state.settings.goal, x: window.__x }));
    check('datos corruptos: valores por defecto y sin código ejecutado', page.errs.length === 0 && snapshot.points === 0 && snapshot.days === 0 && snapshot.badges === 0 && snapshot.goal === 3 && snapshot.x === undefined, { snapshot, errs: page.errs });
    await page.context().close();
  }

  // La semana va de lunes a domingo en hora local: domingo 23:59 y lunes 00:01 son semanas distintas.
  {
    const page = await open(browser, { tz: 'America/New_York', time: new Date(2026, 2, 7, 12).getTime() });
    const at = (y, m, d, h, min) => page.evaluate(a => new Date(a[0], a[1], a[2], a[3], a[4]).getTime(), [y, m, d, h, min]).then(ms => page.clock.setSystemTime(ms));
    await page.click('[data-act="open-settings"]');
    await page.click('[data-act="set-goal"][data-n="2"]');
    await page.click('[data-act="close-settings"]');
    await at(2026, 2, 8, 23, 59); await page.evaluate(() => bankCheckpoint(0));
    await at(2026, 2, 9, 0, 1);   await page.evaluate(() => bankCheckpoint(0));
    let g = await store(page, 'quizAppGame_v1');
    check('domingo 23:59 y lunes 00:01 no suman a la misma semana', g.weeksMet.length === 0 && JSON.stringify(g.studyDays) === '["2026-03-09"]', g);
    await at(2026, 2, 10, 10, 0); await page.evaluate(() => bankCheckpoint(0));
    g = await store(page, 'quizAppGame_v1');
    check('lunes y martes con meta de 2 cumplen la semana', JSON.stringify(g.weeksMet) === '["2026-03-09"]', g);
    await page.context().close();
  }

  // Repaso del día: una pregunta vencida sube de paso al acertar, y un error la devuelve al paso 1,
  // se repite una sola vez al final y no reinicia nada.
  {
    const page = await open(browser, { time: new Date(2026, 2, 10, 12).getTime() });
    const seedOne = box => page.evaluate(b => {
      const [key, entry] = Array.from(reviewIndex().entries())[0];
      state.review.items[key] = { m: entry.materia.id, box: b, due: todayKey() };
      saveReview(state.review);
      render();
      return key;
    }, box);
    const key = await seedOne(1);
    await page.click('[data-act="start-review"]');
    await answer(page, true);
    await page.click('[data-act="next"]');
    let r = await store(page, 'quizAppReview_v1');
    check('repaso: acertar en el paso 1 la pasa al paso 2, a 3 días', r.items[key].box === 2 && r.items[key].due === '2026-03-13', r.items[key]);
    check('repaso: 5 puntos por acierto a la primera', (await store(page, 'quizAppGame_v1')).points === 5);

    await seedOne(3);
    await page.click('[data-act="start-review"]');
    await answer(page, false);
    check('repaso: un error no pide reiniciar nada', !/Reintentar checkpoint/.test(await page.innerText('.dock')));
    await page.click('[data-act="next"]');
    const repeated = await page.evaluate(() => state.sessionQuestions.length === 2 && state.sessionQuestions[1].repeat);
    check('repaso: la pregunta fallada se repite una vez al final', repeated);
    await answer(page, true);
    await page.click('[data-act="next"]');
    r = await store(page, 'quizAppReview_v1');
    check('repaso: tras el error queda en el paso 1, a mañana, y la repetición no suma puntos', r.items[key].box === 1 && r.items[key].due === '2026-03-11' && (await store(page, 'quizAppGame_v1')).points === 5, r.items[key]);
    await page.context().close();
  }

  await browser.close();
  console.log(`${passed} bien, ${failed} mal`);
  process.exit(failed ? 1 : 0);
})();
