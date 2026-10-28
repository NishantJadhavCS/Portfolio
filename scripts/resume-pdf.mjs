// Renders /resume/ with headless Chrome/Edge and saves it as public/Nishant-Jadhav-Resume.pdf.
// Usage: npm run resume:pdf   (set CHROME_PATH to override the browser binary)
import { execFile } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { createServer } from 'vite';

const OUTPUT = resolve(import.meta.dirname, '..', 'public', 'Nishant-Jadhav-Resume.pdf');

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error('No Chrome/Edge found. Set CHROME_PATH to a Chromium-based browser.');
  process.exit(1);
}

const server = await createServer({ server: { port: 5199, strictPort: true }, logLevel: 'error' });
await server.listen();

// Separate profile so an already-open browser window doesn't swallow the headless run.
const profileDir = mkdtempSync(join(tmpdir(), 'resume-pdf-'));

try {
  // Must be async: a sync call would block the event loop and the Vite server could never respond.
  await promisify(execFile)(browser, [
    '--headless=new',
    `--user-data-dir=${profileDir}`,
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=10000',
    `--print-to-pdf=${OUTPUT}`,
    'http://localhost:5199/resume/',
  ], { timeout: 60000 });
  console.log(`Saved ${OUTPUT}`);
} finally {
  await server.close();
  rmSync(profileDir, { recursive: true, force: true });
}
