import fs from 'node:fs';
import path from 'node:path';
const DIST = 'dist';
const SITE = 'https://marioportfoliio.netlify.app';
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(DIST);
if (!files.length) { console.error('Aucune page dans dist/'); process.exit(1); }
const errs = [];
const titles = new Map(), descs = new Map();
const exists = (url) => {
  const u = new URL(url, SITE); if (u.origin !== SITE) return true;
  const p = path.join(DIST, decodeURI(u.pathname));
  return fs.existsSync(p) && fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html'));
};
for (const f of files) {
  if (f.endsWith('google2527cdef195b7cab.html')) continue;
  const h = fs.readFileSync(f, 'utf8');
  const noindex = /<meta name="robots" content="noindex/.test(h);
  const one = (re) => (h.match(re) || [])[1];
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errs.push(`${f}: ${h1} H1`);
  const title = one(/<title>([^<]*)<\/title>/); const desc = one(/<meta name="description" content="([^"]*)"/);
  if (!title) errs.push(`${f}: pas de <title>`);
  if (!desc) errs.push(`${f}: pas de description`);
  if (noindex) continue;
  if (title && (title.length < 25 || title.length > 65)) errs.push(`${f}: titre ${title.length} car.`);
  if (desc && (desc.length < 110 || desc.length > 165)) errs.push(`${f}: description ${desc.length} car.`);
  if (titles.has(title)) errs.push(`${f}: titre dupliqué avec ${titles.get(title)}`); titles.set(title, f);
  if (descs.has(desc)) errs.push(`${f}: description dupliquée avec ${descs.get(desc)}`); descs.set(desc, f);
  const canon = one(/<link rel="canonical" href="([^"]*)"/);
  if (!canon?.startsWith(SITE)) errs.push(`${f}: canonical absente ou relative`);
  if (!/<html lang="(fr|en)"/.test(h)) errs.push(`${f}: lang manquant`);
  for (const [, l, href] of h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g))
    if (!exists(href)) errs.push(`${f}: hreflang ${l} -> ${href} introuvable`);
  if (!/hreflang="x-default"/.test(h)) errs.push(`${f}: pas de x-default`);
  const og = one(/<meta property="og:image" content="([^"]*)"/);
  if (!og?.startsWith('https:')) errs.push(`${f}: og:image absente`);
  else if (!exists(og)) errs.push(`${f}: image de partage introuvable ${og}`);
  for (const [, j] of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))
    { try { JSON.parse(j); } catch { errs.push(`${f}: JSON-LD invalide`); } }
  for (const [, href] of h.matchAll(/<a [^>]*href="(\/[^"#?]*)/g))
    if (!exists(href)) errs.push(`${f}: lien interne cassé ${href}`);
  for (const [, tag] of h.matchAll(/(<img [^>]*>)/g))
    if (!/ alt="[^"]+"/.test(tag)) errs.push(`${f}: image sans alt`);
}
// Mots confidentiels interdits dans le site publié
// La liste reste locale (fichier .confidentiel, ignoré par git) pour ne pas publier les noms qu'elle protège.
const words = fs.existsSync('.confidentiel') ? fs.readFileSync('.confidentiel', 'utf8').split(/\r?\n/).map((w) => w.trim()).filter(Boolean) : [];
const FORBIDDEN = words.length ? new RegExp(`\\b(${words.join('|')})\\b`, 'i') : null;
if (FORBIDDEN) for (const f of files) { const m = fs.readFileSync(f, 'utf8').replace(/<[^>]+>/g, ' ').match(FORBIDDEN); if (m) errs.push(`${f}: mot confidentiel « ${m[0]} »`); }
// Le formulaire sans JS doit mener à une vraie page de remerciement (noindex)
for (const [form, lang] of [['contact/index.html', 'fr'], ['en/contact/index.html', 'en']]) {
  const p = path.join(DIST, form); if (!fs.existsSync(p)) continue;
  const action = (fs.readFileSync(p, 'utf8').match(/<form[^>]*class="contact-form"[^>]*action="([^"]+)"/) || fs.readFileSync(p, 'utf8').match(/<form[^>]*action="([^"]+)"[^>]*class="contact-form"/) || [])[1];
  if (!action || action.includes('?') || !exists(action) || path.join(DIST, action, 'index.html') === p) { errs.push(`${form}: action du formulaire sans vraie page de remerciement (${action})`); continue; }
  if (!/noindex/.test(fs.readFileSync(path.join(DIST, action, 'index.html'), 'utf8'))) errs.push(`${action}: la page de remerciement doit être noindex`);
}
// Scripts npm cohérents avec Astro
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!/^astro dev/.test(pkg.scripts.dev || '')) errs.push('package.json: dev doit lancer astro dev');
if (!/check-seo/.test(pkg.scripts.build || '')) errs.push('package.json: build doit finir par check-seo');
// Ancien sitemap redirigé
if (!/from = "\/sitemap\.xml"/.test(fs.readFileSync('netlify.toml', 'utf8'))) errs.push('netlify.toml: /sitemap.xml doit rediriger vers /sitemap-index.xml');
const home = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
for (const id of ['work', 'contact']) if (!home.includes(`id="${id}"`)) errs.push(`accueil: ancre #${id} manquante`);
const contact = path.join(DIST, 'contact/index.html');
if (fs.existsSync(contact)) { const c = fs.readFileSync(contact, 'utf8');
  if (!c.includes('data-netlify="true"') || !c.includes('name="form-name"')) errs.push('contact: formulaire Netlify absent'); }
for (const f of ['sitemap-index.xml', 'robots.txt', 'rss.xml', 'llms.txt', 'google2527cdef195b7cab.html'])
  if (!fs.existsSync(path.join(DIST, f))) errs.push(`fichier manquant: ${f}`);
if (errs.length) { console.error(errs.join('\n')); console.error(`\n${errs.length} problème(s) sur ${files.length} pages`); process.exit(1); }
console.log(`SEO OK — ${files.length} pages vérifiées`);
