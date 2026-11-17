import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { posts, slugOf } from './content';
import { localePath, type Lang } from '../i18n/ui';

export async function feed(lang: Lang, ctx: APIContext) {
  const list = await posts(lang);
  return rss({
    title: lang === 'fr' ? 'Mario Ratiarivony — Blog' : 'Mario Ratiarivony — Blog (EN)',
    description: lang === 'fr' ? 'Conseils pour créer votre site, votre application web ou votre SaaS.' : 'Advice for building your website, web app or SaaS.',
    site: ctx.site!,
    items: list.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: localePath(lang, `/blog/${slugOf(p)}/`) })),
    customData: `<language>${lang === 'fr' ? 'fr-FR' : 'en-US'}</language>`,
  });
}
