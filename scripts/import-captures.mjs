// Copie les visuels retenus depuis ~/Documents/Portfolio-captures vers src/assets/projets (WebP, 2000 px max).
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const SRC = path.join(os.homedir(), 'Documents/Portfolio-captures');
const DST = 'src/assets/projets';
const KEEP = JSON.parse(fs.readFileSync('scripts/captures.json', 'utf8'));

let n = 0;
for (const [slug, files] of Object.entries(KEEP)) {
  fs.mkdirSync(path.join(DST, slug), { recursive: true });
  for (const f of files) {
    const from = path.join(SRC, f.includes('/') ? f : `${slug}/${f}`);
    const to = path.join(DST, slug, path.basename(f).replace(/\.png$/, '.webp'));
    if (!fs.existsSync(from)) { console.error('MANQUANT', from); process.exitCode = 1; continue; }
    if (fs.existsSync(to) && fs.statSync(to).mtimeMs > fs.statSync(from).mtimeMs) continue;
    await sharp(from).resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 82 }).toFile(to);
    n++;
  }
}
console.log(`${n} image(s) importée(s)`);
