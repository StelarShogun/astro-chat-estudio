import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const url = 'https://claude.ai/share/b6cc7735-1787-461f-a987-9587d6acc6d1';
const executablePath =
  process.env.CHROMIUM_PATH ??
  '/home/dilan/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome';
const headless = process.env.HEADED !== '1';
const waitMs = Number(process.env.WAIT_MS ?? 20000);

const browser = await chromium.launch({
  executablePath,
  headless,
  args: ['--disable-blink-features=AutomationControlled'],
});

const page = await browser.newPage({
  userAgent:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 1600 },
});

const responses = [];
page.on('response', async (response) => {
  const responseUrl = response.url();
  if (!responseUrl.includes('/api/')) return;

  const contentType = response.headers()['content-type'] ?? '';
  if (!contentType.includes('json')) return;

  try {
    responses.push({
      url: responseUrl,
      status: response.status(),
      body: await response.text(),
    });
  } catch {
    // Some responses are streamed or no longer readable.
  }
});

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
await page.waitForTimeout(waitMs);

const text = await page.locator('body').innerText().catch(() => '');
await writeFile('src/data/claude-share-text.txt', text);
await writeFile('src/data/claude-share-responses.json', JSON.stringify(responses, null, 2));

await browser.close();

console.log(`Extracted ${text.length} text characters and ${responses.length} JSON responses.`);
