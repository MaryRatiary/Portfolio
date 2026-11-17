import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Projet = CollectionEntry<'projets'>;
export type Service = CollectionEntry<'services'>;
export type Post = CollectionEntry<'blog'>;

export const slugOf = (e: { id: string }) => e.id.split('/')[1];

export async function projets(lang: Lang) {
  const all = await getCollection('projets', (e) => e.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}
export async function services(lang: Lang) {
  const all = await getCollection('services', (e) => e.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}
export async function posts(lang: Lang) {
  const all = await getCollection('blog', (e) => e.id.startsWith(`${lang}/`));
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
export const kindLabel = (lang: Lang, k: 'web' | 'ia' | 'archive') =>
  ({
    fr: { web: 'Développement web', ia: 'Intégration IA & automatisation', archive: 'Projet antérieur' },
    en: { web: 'Web development', ia: 'AI integration & automation', archive: 'Earlier project' },
  })[lang][k];
