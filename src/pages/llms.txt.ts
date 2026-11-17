import { projets, services, posts, slugOf } from '../lib/content';
import { SITE } from '../lib/ld';

export async function GET() {
  const p = await projets('fr');
  const s = await services('fr');
  const b = await posts('fr');
  const line = (title: string, url: string, desc: string) => `- [${title}](${SITE}${url}): ${desc}`;
  const txt = `# Mario Ratiarivony — Développeur web freelance

> Ratiarivony Mario Mamitantely, développeur web freelance basé à Antananarivo (Madagascar). Il crée des sites web sur mesure, des applications web et des SaaS (React, TypeScript, Astro, Next.js, Vue, Convex, NestJS, Django) pour des clients en France et à Madagascar, et intègre de l'automatisation et de l'IA (n8n, LLM) en complément. Travail à distance, en français et en anglais.

## Services
${s.map((x) => line(x.data.title, `/services/${slugOf(x)}/`, x.data.short)).join('\n')}

## Réalisations
${p.map((x) => line(x.data.title, `/projets/${slugOf(x)}/`, x.data.tagline)).join('\n')}

## Articles
${b.map((x) => line(x.data.title, `/blog/${slugOf(x)}/`, x.data.description)).join('\n')}

## Contact
- [Formulaire de contact](${SITE}/contact/)
- Email : maryratiary@gmail.com
- LinkedIn : https://www.linkedin.com/in/mario-mamitantely-ratiarivony/
- GitHub : https://github.com/MaryRatiary
- English version: ${SITE}/en/
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
