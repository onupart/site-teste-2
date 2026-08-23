import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium, webkit } from 'playwright';

const root = process.cwd();
const browserName = (process.env.JC_BROWSER || 'chromium').toLowerCase();
const browserType = browserName === 'webkit' ? webkit : chromium;
const outDir = path.join(root, `qa-screenshots-${browserName}`);
fs.mkdirSync(outDir, { recursive: true });

const mime = {
  '.html': 'text/html; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8', '.mp3': 'audio/mpeg', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  try {
    const u = new URL(req.url, 'http://127.0.0.1:4173');
    let rel = decodeURIComponent(u.pathname).replace(/^\/+/, '');
    if (!rel || rel.endsWith('/')) rel += 'index.html';
    const file = path.resolve(root, rel);
    if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) {
      res.writeHead(403); res.end('forbidden'); return;
    }
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404); res.end('not found'); return;
    }
    res.writeHead(200, { 'content-type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  } catch (e) {
    res.writeHead(500); res.end(String(e));
  }
});

await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
const base = 'http://127.0.0.1:4173';
const routes = ['/', ...Array.from({ length: 10 }, (_, i) => `/jesus-crypto/p${String(i + 1).padStart(2, '0')}/`)];
const devices = [
  { name: 'desktop', viewport: { width: 1440, height: 900 }, isMobile: false, hasTouch: false },
  { name: 'mobile390', viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
  { name: 'mobile320', viewport: { width: 320, height: 740 }, isMobile: true, hasTouch: true }
];

const browser = await browserType.launch({ headless: true });
const failures = [];
const report = [];

for (const device of devices) {
  for (const route of routes) {
    const slug = route === '/' ? 'hub' : route.match(/p\d{2}/)?.[0] || 'page';
    const context = await browser.newContext({ viewport: device.viewport, isMobile: device.isMobile, hasTouch: device.hasTouch });
    const page = await context.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    page.on('pageerror', e => pageErrors.push(String(e)));
    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

    try {
      const response = await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 });
      if (!response || response.status() >= 400) failures.push(`${slug}/${device.name}: HTTP ${response?.status() ?? 'no-response'}`);

      const h1 = page.locator('h1');
      const h1Count = await h1.count();
      if (h1Count !== 1) failures.push(`${slug}/${device.name}: expected exactly one H1, got ${h1Count}`);
      else if (!(await h1.isVisible())) failures.push(`${slug}/${device.name}: H1 not visible`);

      const title = await page.title();
      if (!title.trim()) failures.push(`${slug}/${device.name}: document title empty`);

      const overflow = await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - window.innerWidth));
      if (overflow > 2) failures.push(`${slug}/${device.name}: horizontal overflow ${overflow}px`);

      const buttons = page.locator('button:visible');
      if (await buttons.count()) {
        const first = buttons.first();
        await first.focus();
        await first.click();
        await page.waitForTimeout(120);
        if (slug === 'p02') {
          await first.click();
          await page.waitForTimeout(80);
        }
      }

      await page.screenshot({ path: path.join(outDir, `${slug}-${device.name}.png`), fullPage: true });
      if (pageErrors.length) failures.push(`${slug}/${device.name}: pageerror ${pageErrors.join(' | ')}`);
      if (consoleErrors.length) failures.push(`${slug}/${device.name}: console error ${consoleErrors.join(' | ')}`);
      report.push({ browser: browserName, route, device: device.name, title, h1Count, overflow, pageErrors, consoleErrors });
    } catch (e) {
      failures.push(`${slug}/${device.name}: ${e.message}`);
    } finally {
      await context.close();
    }
  }
}

await browser.close();
server.close();
fs.writeFileSync(path.join(outDir, 'browser-qa-report.json'), JSON.stringify({ browser: browserName, generated_at: new Date().toISOString(), report, failures }, null, 2));

console.log(`${browserName} QA pages checked: ${report.length}`);
console.log(`${browserName} screenshots generated: ${report.length}`);
if (failures.length) {
  console.error(`${browserName} QA failures: ${failures.length}`);
  for (const f of failures) console.error(`ERR ${f}`);
  process.exit(1);
}
console.log(`PASS — ${browserName} desktop/mobile staging QA`);
