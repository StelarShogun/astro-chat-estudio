import { chromium } from 'playwright';

const executablePath =
  process.env.CHROMIUM_PATH ??
  '/home/dilan/.cache/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-linux64/chrome-headless-shell';
const url = process.env.URL ?? 'http://127.0.0.1:4321/';

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];

page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);
const title = await page.title();
const heading = await page.locator('h1').first().innerText().catch(() => null);
const bodyText = await page.locator('body').innerText().catch(() => null);
const background = await page
  .locator('.hero-copy')
  .evaluate((node) => getComputedStyle(node).backgroundColor)
  .catch(() => null);
await page.screenshot({ path: 'page-check.png', fullPage: true });
await browser.close();

console.log(
  JSON.stringify(
    { title, heading, background, bodyText: bodyText?.slice(0, 500), errors, screenshot: 'page-check.png' },
    null,
    2,
  ),
);
