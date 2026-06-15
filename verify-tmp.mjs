import { chromium } from 'playwright';
const browser = await chromium.launch();
const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

// --- Interactive exam: symbols legend + AI table analysis ---
await page.click('.section-nav button[data-target="casos"]');
await page.waitForTimeout(800);
const legendExists = await page.isVisible('.symbols-legend');
// fill a couple cells: A row -> rafaga "+", es "+++", tiempoReal "no", and one wrong
await page.evaluate(() => {
  const rows = document.querySelectorAll('.editable-table tbody tr');
  const setCell = (row, colIndex, val) => {
    const inp = rows[row].querySelectorAll('td input')[colIndex];
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(inp, val);
    inp.dispatchEvent(new Event('input', { bubbles: true }));
  };
  // columns: 0 proceso,1 rafaga,2 es,3 tiempoReal,...
  setCell(0, 1, '+');        // A rafaga low (expected baja=low) -> correct
  setCell(0, 2, '+++');      // A es high (expected alta=high) -> correct
  setCell(0, 3, 'sí');       // A tiempoReal yes -> flagged
  setCell(1, 1, 'baja');     // B rafaga low (expected media) -> mismatch
});
await page.waitForTimeout(300);
await page.click('.table-analyze-btn');
await page.waitForTimeout(400);
const fbVisible = await page.isVisible('.table-feedback');
const fbText = await page.textContent('.table-feedback');
console.log('Symbols legend present:', legendExists);
console.log('Table feedback shown:', fbVisible);
console.log('Feedback flags tiempo real:', /tiempo real/i.test(fbText));
console.log('Feedback mentions mismatch (media):', /media/i.test(fbText));
console.log('Feedback has completion %:', /% completa/.test(fbText));

// --- Excalidraw zoom controls ---
await page.click('.section-nav button[data-target="obsidian"]');
await page.waitForTimeout(400);
const picks = await page.$$('.doc-list .doc-pick');
for (const p of picks) { const t = await p.$eval('strong', e=>e.textContent.trim()); if (t==='Mapa final del curso'){ await p.click(); break; } }
await page.waitForTimeout(1200);
const hasControls = await page.isVisible('.excalidraw-controls');
const tBefore = await page.$eval('.excalidraw-canvas', el => el.style.transform);
await page.click('.excalidraw-controls button[title="Acercar"]');
await page.waitForTimeout(200);
const tAfter = await page.$eval('.excalidraw-canvas', el => el.style.transform);
console.log('Excalidraw controls present:', hasControls);
console.log('Zoom changed transform:', tBefore !== tAfter);

console.log('CONSOLE ERRORS:', errors.length);
errors.forEach(e => console.log('  -', e));
await browser.close();
