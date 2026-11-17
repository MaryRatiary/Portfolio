export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];
export const altLang = (l: Lang): Lang => (l === 'fr' ? 'en' : 'fr');
export const localePath = (l: Lang, p: string) => (l === 'fr' ? p : `/en${p}`);
/** Retire le préfixe /en d'un chemin. */
export const basePath = (p: string) => (p.startsWith('/en/') ? p.slice(3) : p === '/en' ? '/' : p);

const dict = {
  fr: {
    'nav.projects': 'Réalisations', 'nav.services': 'Services', 'nav.about': 'À propos', 'nav.blog': 'Blog', 'nav.contact': 'Contact',
    'cta.project': 'Parler de votre projet', 'cta.work': 'Voir mes réalisations', role: 'Développeur web freelance',
    skip: 'Aller au contenu', theme: 'Changer de thème', lang: 'English', langShort: 'EN', home: 'Accueil',
    available: 'Disponible pour de nouveaux projets', location: 'Antananarivo, Madagascar · en télétravail pour la France',
    views: 'visites', rights: 'Conçu et développé par Mario Ratiarivony',
  },
  en: {
    'nav.projects': 'Work', 'nav.services': 'Services', 'nav.about': 'About', 'nav.blog': 'Blog', 'nav.contact': 'Contact',
    'cta.project': 'Discuss your project', 'cta.work': 'See my work', role: 'Freelance web developer',
    skip: 'Skip to content', theme: 'Toggle theme', lang: 'Français', langShort: 'FR', home: 'Home',
    available: 'Available for new projects', location: 'Antananarivo, Madagascar · working remotely worldwide',
    views: 'visits', rights: 'Designed and built by Mario Ratiarivony',
  },
} as const;
export type Key = keyof typeof dict.fr;
export const t = (l: Lang, k: Key): string => dict[l][k];
