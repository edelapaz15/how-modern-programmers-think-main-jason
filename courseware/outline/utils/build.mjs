// build.mjs — runs INSIDE the container (see Containerfile / entrypoint.sh).
//
// Converts one Markdown outline file into a styled PDF:
//   Markdown --(marked)--> HTML --(headless Chrome via puppeteer-core)--> PDF
//
// The Markdown is the source of record; the PDF is the deliverable. We drive
// Chrome through the DevTools protocol (puppeteer-core) rather than the
// `--print-to-pdf` CLI flag, because the CLI path hangs in this headless image.
//
// Usage: node build.mjs <input.md> <output.pdf>

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { marked } from 'marked';
import puppeteer from 'puppeteer-core';

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error('Usage: node build.mjs <input.md> <output.pdf>');
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(here, 'outline.css'), 'utf8');

const rawMd = readFileSync(inPath, 'utf8');

// Derive the document <title> from the YAML front matter (title/subtitle) so the
// converter stays course-agnostic — no per-course edit needed here.
const fmMatch = rawMd.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
const fm = fmMatch ? fmMatch[1] : '';
const fmVal = (key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
};
const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const docTitle =
  [fmVal('title'), fmVal('subtitle')].filter(Boolean).join(' — ') || 'Course Outline';

// Strip the YAML front matter (metadata for other tools; not rendered here).
const md = rawMd.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

const body = marked.parse(md);

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(docTitle)}</title>
  <style>${css}</style>
</head>
<body>
${body}
</body>
</html>`;

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/usr/local/bin/chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});

try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load', timeout: 30000 });
  await page.pdf({
    path: outPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.8in', bottom: '0.8in', left: '0.8in', right: '0.8in' },
  });
} finally {
  await browser.close();
}

console.log(`    wrote ${outPath}`);
