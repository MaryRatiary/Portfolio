export const SITE = 'https://marioportfoliio.netlify.app';
export const PERSON_ID = `${SITE}/#person`;

export const personLd = () => ({
  '@context': 'https://schema.org', '@type': 'Person', '@id': PERSON_ID,
  name: 'Ratiarivony Mario Mamitantely',
  alternateName: ['Mario Ratiarivony', 'Mario Mamitantely Ratiarivony', 'Mario Ratiary'],
  givenName: 'Mario', additionalName: 'Mamitantely', familyName: 'Ratiarivony',
  jobTitle: 'Développeur web freelance', url: `${SITE}/a-propos/`,
  image: `${SITE}/og/a-propos.png`, email: 'mailto:maryratiary@gmail.com', nationality: 'Malagasy',
  address: { '@type': 'PostalAddress', addressLocality: 'Antananarivo', addressCountry: 'MG' },
  knowsAbout: ['Développement web', 'React', 'Next.js', 'Astro', 'Vue.js', 'Nuxt', 'NestJS', 'Django', 'Convex', 'TypeScript', 'SEO technique', 'Automatisation n8n', 'Intégration IA'],
  knowsLanguage: ['fr', 'en', 'mg'],
  sameAs: ['https://www.linkedin.com/in/mario-mamitantely-ratiarivony/', 'https://github.com/MaryRatiary', 'https://facebook.com/mario.ratiary', 'https://www.youtube.com/@MarioRatiarivony'],
});

export const websiteLd = () => ({
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`,
  name: 'Mario Ratiarivony — Développeur web freelance', inLanguage: ['fr-FR', 'en-US'], publisher: { '@id': PERSON_ID },
});

export const businessLd = (lang: 'fr' | 'en') => ({
  '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': `${SITE}/#business`,
  name: 'Mario Ratiarivony — Développement web', url: `${SITE}/`, founder: { '@id': PERSON_ID },
  image: `${SITE}/og/index.png`, email: 'maryratiary@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Antananarivo', addressCountry: 'MG' },
  areaServed: [{ '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Madagascar' }],
  priceRange: '€€',
  description: lang === 'fr'
    ? 'Création de sites web, applications web et SaaS sur mesure, SEO technique et automatisation.'
    : 'Custom websites, web applications and SaaS, technical SEO and automation.',
});

export const breadcrumbLd = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: new URL(it.url, SITE).href })),
});

export const videoLd = (lang: 'fr' | 'en') => ({
  '@context': 'https://schema.org', '@type': 'VideoObject',
  name: 'Mario, développeur full-stack',
  description: lang === 'fr'
    ? 'Présentation en vidéo de Mario Ratiarivony, développeur web freelance : parcours, méthode et projets.'
    : 'Video introduction of Mario Ratiarivony, freelance web developer: background, method and projects.',
  thumbnailUrl: 'https://i.ytimg.com/vi/UBUzwtlQ65Q/maxresdefault.jpg',
  uploadDate: '2026-11-10T08:49:32-08:00', duration: 'PT51S',
  contentUrl: 'https://www.youtube.com/watch?v=UBUzwtlQ65Q',
  embedUrl: 'https://www.youtube-nocookie.com/embed/UBUzwtlQ65Q',
  author: { '@id': PERSON_ID },
});
