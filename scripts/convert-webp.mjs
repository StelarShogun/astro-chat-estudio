import { readdir, readFile, writeFile, stat, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = 'public';
const RASTER = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const all = await walk(ROOT);
const images = all.filter((file) => RASTER.has(extname(file).toLowerCase()));

let converted = 0;
for (const file of images) {
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const before = (await stat(file)).size;
  await sharp(file).webp({ quality: 82, effort: 6 }).toFile(out);
  const after = (await stat(out)).size;
  await unlink(file);
  converted += 1;
  console.log(
    `✓ ${file} → ${out}  (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB)`,
  );
}

// Rewrite image extensions inside markdown / excalidraw source files so embeds keep resolving.
const textFiles = all.filter((file) => /\.(md|excalidraw)$/i.test(file));
let rewritten = 0;
for (const file of textFiles) {
  const original = await readFile(file, 'utf8');
  const updated = original.replace(/\.(png|jpe?g)(?=["'\)\]\s]|$)/gi, '.webp');
  if (updated !== original) {
    await writeFile(file, updated);
    rewritten += 1;
  }
}

console.log(`\nConverted ${converted} images to WebP, rewrote ${rewritten} source files.`);
