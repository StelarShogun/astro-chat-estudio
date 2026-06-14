import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';

// Turns raw TurboScribe transcripts ("[Orador N] (m:ss - m:ss)\n texto") into readable
// Markdown so they render with headings and styled paragraphs like the Obsidian notes.
const DIR = 'public/source-material/transcripciones';
const SPEAKER = /^\[([^\]]+)\]\s*\(([^)]+)\)\s*$/;

function toMarkdown(raw, title) {
  const lines = raw.split(/\r?\n/);
  const out = [`# ${title}`, ''];
  let open = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const speaker = trimmed.match(SPEAKER);
    if (speaker) {
      if (open) out.push('');
      out.push(`### ${speaker[1]} · \`${speaker[2]}\``);
      out.push('');
      open = true;
      continue;
    }

    out.push(trimmed);
    out.push('');
  }

  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

const entries = await readdir(DIR);
const txtFiles = entries.filter((file) => file.endsWith('.txt'));

let count = 0;
for (const file of txtFiles) {
  const path = join(DIR, file);
  const raw = await readFile(path, 'utf8');
  const title = file
    .replace(/^transcripciones-/, '')
    .replace(/-txt\.txt$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const md = toMarkdown(raw, title);
  const outPath = path.replace(/-txt\.txt$/, '-txt.md').replace(/\.txt$/, '.md');
  await writeFile(outPath, md);
  await unlink(path);
  count += 1;
  console.log(`✓ ${file} → ${outPath.split('/').pop()}`);
}

console.log(`\nConverted ${count} transcripts to Markdown.`);
