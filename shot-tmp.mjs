import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));

// Table analysis screenshot
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.click('.section-nav button[data-target="casos"]');
await page.waitForTimeout(700);
await page.evaluate(() => {
  const rows = document.querySelectorAll('.editable-table tbody tr');
  const set = (r,c,v)=>{const i=rows[r].querySelectorAll('td input')[c];const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;s.call(i,v);i.dispatchEvent(new Event('input',{bubbles:true}));};
  set(0,1,'+'); set(0,2,'+++'); set(0,3,'sí'); set(1,1,'baja'); set(2,1,'alta'); set(2,2,'media');
});
await page.click('.table-analyze-btn');
await page.waitForTimeout(400);
await page.evaluate(() => document.querySelector('.table-feedback').scrollIntoView({block:'center'}));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/analysis-shot.png' });

// Excalidraw fullscreen + FAB
await page.click('.section-nav button[data-target="obsidian"]');
await page.waitForTimeout(400);
const picks = await page.$$('.doc-list .doc-pick');
for (const x of picks){const t=await x.$eval('strong',e=>e.textContent.trim());if(t==='Repaso final'){await x.click();break;}}
await page.waitForTimeout(500);
await page.click('.doc-action[title="Ver en pantalla completa"]').catch(()=>{});
await page.waitForTimeout(500);
const fab = await page.isVisible('.doc-fab-top');
console.log('Fullscreen FAB visible:', fab);
await page.screenshot({ path: '/tmp/fab-shot.png' });
console.log('pageerrors:', errors.length);
await browser.close();
