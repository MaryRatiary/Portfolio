// Génère dist/og/<chemin>.png (1200x630) pour chaque page HTML de dist/, à partir de son <title>.
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const F = (p) => fs.readFileSync(`node_modules/@fontsource/${p}`);
const fonts = [
  { name: 'Serif', data: F('instrument-serif/files/instrument-serif-latin-400-normal.woff'), weight: 400, style: 'normal' },
  { name: 'Serif', data: F('instrument-serif/files/instrument-serif-latin-400-italic.woff'), weight: 400, style: 'italic' },
  { name: 'Mono', data: F('ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff'), weight: 400, style: 'normal' },
  { name: 'Sans', data: F('inter/files/inter-latin-600-normal.woff'), weight: 600, style: 'normal' },
];
const h = (type, style, ...children) => ({ type, props: { style, children: children.length === 1 ? children[0] : children } });
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, '’').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : f === 'index.html' && pages.push(p); } })('dist');

fs.mkdirSync('dist/og', { recursive: true });
let n = 0;
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  if (/<meta name="robots" content="noindex/.test(html)) continue;
  const rel = path.relative('dist', path.dirname(file));
  const slug = rel === '' ? 'index' : rel.replaceAll(path.sep, '-');
  const en = rel === 'en' || rel.startsWith('en' + path.sep);
  let title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || 'Mario Ratiarivony');
  title = title.split(' | ')[0].replace(/ — (Développeur|Freelance).*$/i, '').trim();
  if (/^Mario Ratiarivony$/.test(title)) title = en ? 'Freelance web developer' : 'Développeur web freelance';
  const size = title.length > 52 ? 64 : title.length > 34 ? 76 : 92;
  const tree = h('div', { width: 1200, height: 630, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', background: '#F5F1EB', color: '#1A1612', fontFamily: 'Sans', position: 'relative' },
    h('div', { position: 'absolute', right: -120, top: -120, width: 420, height: 420, borderRadius: 420, background: '#A8461C', opacity: 0.92, display: 'flex' }),
    h('div', { display: 'flex', alignItems: 'center', gap: 18 },
      h('div', { width: 56, height: 56, borderRadius: 56, background: '#1A1612', color: '#F5F1EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Serif', fontStyle: 'italic', fontSize: 34 }, 'M'),
      h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 22, letterSpacing: 2, color: '#6B6159' }, en ? 'MARIO RATIARIVONY · FREELANCE WEB DEVELOPER' : 'MARIO RATIARIVONY · DÉVELOPPEUR WEB FREELANCE')),
    h('div', { display: 'flex', fontFamily: 'Serif', fontSize: size, lineHeight: 1.04, maxWidth: 980 }, title),
    h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Mono', fontSize: 22, color: '#6B6159', borderTop: '2px solid #1A1612', paddingTop: 22 },
      h('div', { display: 'flex' }, 'marioportfoliio.netlify.app'),
      h('div', { display: 'flex', color: '#A8461C' }, en ? 'Websites · Web apps · SaaS' : 'Sites · Applications web · SaaS')));
  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  fs.writeFileSync(`dist/og/${slug}.png`, new Resvg(svg).render().asPng());
  n++;
}
console.log(`${n} image(s) de partage générée(s)`);
