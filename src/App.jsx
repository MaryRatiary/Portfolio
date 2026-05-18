import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './App.css';

/* ============================================================
   i18n DICTIONARIES
   ============================================================ */

const I18N = {
  fr: {
    nav: { work: 'Projets', practice: 'Expertise', contact: 'Contact', hire: 'Travailler →' },
    eyebrowHero: 'Antananarivo, Madagascar · Disponible',
    hero: {
      sub: (<><em>Développeur</em> &amp; artisan du numérique.</>),
      lede: (
        <>
          Je conçois des interfaces premium, des systèmes
          <em> automatisés </em>N8N et des backends solides en Nest,
          Django ou C#. Vingt ans, basé à Madagascar, disponible pour
          collaborer ailleurs.
        </>
      ),
      ctaWork: 'Voir les projets',
      ctaContact: 'Me contacter',
    },
    meta: {
      shipped: 'Projets livrés',
      stacks: 'Outils maîtrisés',
      langs: 'Langues parlées',
      years: 'Ans jeune',
    },
    views: 'visites',
    work: {
      eyebrow: 'Projets sélectionnés',
      title: (<>Ce que j&apos;ai <em>livré</em>.</>),
    },
    practice: {
      eyebrow: 'Expertise · stack',
      title: (<>Une boîte à outils pour <em>livrer en solo</em>.</>),
    },
    groupLabels: {
      Frontend: '01 — Interfaces',
      Backend: '02 — Systèmes',
      Automation: '03 — Flux',
      Craft: '04 — Visuel',
    },
    langsLabel: 'Langues parlées',
    langNames: { Français: 'Français', Anglais: 'Anglais', Allemand: 'Allemand' },
    contact: {
      eyebrow: 'Contact',
      title: (<>Construisons quelque chose <em>qui mérite d&apos;exister.</em></>),
      body:
        "Un projet web, mobile, backend ou un workflow d'automatisation à construire ? Écris-moi — je réponds rapidement et propose une approche claire avant tout devis.",
      formTitle: 'Envoyer un brief.',
      formMeta: 'NOUVEAU · MESSAGE',
      fieldName: 'Nom',
      fieldEmail: 'Email',
      fieldMessage: 'Message',
      placeholderName: 'Votre nom',
      placeholderEmail: 'votre@email.com',
      placeholderMessage: 'Parlez-moi de votre projet…',
      send: 'Envoyer',
    },
    contactLabels: { email: 'Email', phone: 'Téléphone', linkedin: 'LinkedIn', github: 'GitHub', facebook: 'Facebook' },
    footer: { tagline: '© 2026 — Conçu à Antananarivo' },
    projects: {
      luxy: { title: 'Luxy Shop', tagline: 'Boutique e-commerce premium — produits lifestyle haut de gamme.' },
      kpop: { title: 'K-Pop Shop', tagline: 'Boutique en ligne dédiée à la culture K-Pop : merch, albums, lightsticks.' },
      scaleas: { title: 'Scaleas', tagline: 'Plateforme e-commerce scalable avec architecture modulaire.' },
      nexus: { title: 'Nexus Lab', tagline: 'Plateforme de digitalisation futuriste avec intégration 3D Three.js.' },
      allstone: { title: 'All Stone Mada', tagline: 'E-commerce de pierres précieuses, Madagascar.' },
      aveny: { title: 'Aveny Work', tagline: 'Plateforme IA avec suggestions business et dashboard dynamique.' },
      ratiary: { title: 'Ratiary Business', tagline: 'Site multi-services optimisé SEO.' },
      rise: { title: 'Rise Platform', tagline: 'Réseau social étudiant temps réel, publications & messages.' },
      madagiascar: { title: 'MadagIAscar', tagline: 'Plateforme IA dédiée à Madagascar : assistance intelligente, contenus et services locaux.' },
    },
  },
  en: {
    nav: { work: 'Work', practice: 'Practice', contact: 'Contact', hire: 'Hire →' },
    eyebrowHero: 'Antananarivo, Madagascar · Open for work',
    hero: {
      sub: (<><em>Developer</em> &amp; digital craftsman.</>),
      lede: (
        <>
          I craft premium interfaces,
          <em> automated </em>N8N systems and solid backends with Nest,
          Django or C#. Twenty years young, based in Madagascar, open to
          collaborate anywhere.
        </>
      ),
      ctaWork: 'Selected work',
      ctaContact: 'Get in touch',
    },
    meta: {
      shipped: 'Shipped projects',
      stacks: 'Stacks mastered',
      langs: 'Spoken languages',
      years: 'Years young',
    },
    views: 'views',
    work: {
      eyebrow: 'Selected work',
      title: (<>Things I&apos;ve <em>shipped</em>.</>),
    },
    practice: {
      eyebrow: 'Practice · stack',
      title: (<>A toolbox built for <em>solo shipping</em>.</>),
    },
    groupLabels: {
      Frontend: '01 — Interfaces',
      Backend: '02 — Systems',
      Automation: '03 — Flows',
      Craft: '04 — Visual',
    },
    langsLabel: 'Spoken languages',
    langNames: { Français: 'French', Anglais: 'English', Allemand: 'German' },
    contact: {
      eyebrow: 'Contact',
      title: (<>Let&apos;s build something <em>worth shipping.</em></>),
      body:
        "Got a web, mobile, backend or automation project to ship? Drop me a line — I answer quickly and lay out a clear approach before any quote.",
      formTitle: 'Send a brief.',
      formMeta: 'NEW · MESSAGE',
      fieldName: 'Name',
      fieldEmail: 'Email',
      fieldMessage: 'Message',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderMessage: 'Tell me about your project…',
      send: 'Send',
    },
    contactLabels: { email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', facebook: 'Facebook' },
    footer: { tagline: '© 2026 — Crafted in Antananarivo' },
    projects: {
      luxy: { title: 'Luxy Shop', tagline: 'Premium lifestyle e-commerce boutique.' },
      kpop: { title: 'K-Pop Shop', tagline: 'Online store dedicated to K-Pop culture — merch, albums, lightsticks.' },
      scaleas: { title: 'Scaleas', tagline: 'Scalable e-commerce platform with modular architecture.' },
      nexus: { title: 'Nexus Lab', tagline: 'Futuristic digitalization platform with Three.js 3D integration.' },
      allstone: { title: 'All Stone Mada', tagline: 'Precious stones e-commerce, Madagascar.' },
      aveny: { title: 'Aveny Work', tagline: 'AI platform with business suggestions and dynamic dashboard.' },
      ratiary: { title: 'Ratiary Business', tagline: 'SEO-optimized multi-services site.' },
      rise: { title: 'Rise Platform', tagline: 'Real-time student social network — posts and messages.' },
      madagiascar: { title: 'MadagIAscar', tagline: 'AI platform for Madagascar — smart assistance, content and local services.' },
    },
  },
};

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */

const wordVariants = {
  hidden: { y: '115%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.13, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

/* ============================================================
   DATA (locale-independent)
   ============================================================ */

const navItems = [
  { id: 'work', tk: 'work' },
  { id: 'practice', tk: 'practice' },
  { id: 'contact', tk: 'contact' },
];

const skills = [
  { name: 'React', level: 95, group: 'Frontend' },
  { name: 'Next.js', level: 85, group: 'Frontend' },
  { name: 'Angular', level: 75, group: 'Frontend' },
  { name: 'React Native', level: 90, group: 'Frontend' },
  { name: 'Nest', level: 86, group: 'Backend' },
  { name: 'Django', level: 80, group: 'Backend' },
  { name: 'C# / ASP.Net', level: 85, group: 'Backend' },
  { name: 'Java', level: 70, group: 'Backend' },
  { name: 'Symfony', level: 75, group: 'Backend' },
  { name: 'N8N', level: 88, group: 'Automation' },
  { name: 'Make', level: 80, group: 'Automation' },
  { name: 'HubSpot', level: 85, group: 'Automation' },
  { name: 'Lemlist', level: 80, group: 'Automation' },
  { name: 'Brevo', level: 78, group: 'Automation' },
  { name: 'Blender', level: 82, group: 'Craft' },
  { name: 'After Effects', level: 88, group: 'Craft' },
  { name: 'CapCut', level: 90, group: 'Craft' },
];

const groupOrder = ['Frontend', 'Backend', 'Automation', 'Craft'];

const projects = [
  { key: 'luxy',     url: 'https://luxyshop.netlify.app',     tech: 'React · Tailwind · E-Commerce', year: '2026', category: 'Luxury E-Commerce',  image: '/luxury.png' },
  { key: 'kpop',     url: 'https://kpopshop.netlify.app',     tech: 'React · Tailwind · Stripe',     year: '2026', category: 'Niche E-Commerce',   image: '/kpopshop.netlify.png' },
  { key: 'scaleas',  url: 'https://scaleas-e.netlify.app',    tech: 'React · Node · Scalable',       year: '2026', category: 'E-Commerce Platform', image: '/scale.png' },
  { key: 'nexus',    url: 'https://nexuslaab.netlify.app',    tech: 'React · Three.js · Tailwind',   year: '2025', category: '3D Integration',     image: '/nexuslaab.png' },
  { key: 'allstone', url: 'https://allstonemada.netlify.app', tech: 'React · C# · ASP.Net',          year: '2024', category: 'E-Commerce',          image: '/allstoneof mada.png' },
  { key: 'aveny',    url: 'https://avenywork.netlify.app',    tech: 'React · Django · ML',           year: '2024', category: 'AI Platform',         image: '/avenywork.png' },
  { key: 'ratiary',  url: 'https://ratiarybusiness.netlify.app', tech: 'React · Tailwind · SEO',    year: '2024', category: 'Business',           image: '/ratiarybusiness.png' },
  { key: 'rise',     url: 'https://riseplatform.netlify.app', tech: 'React · C# · Realtime',         year: '2024', category: 'Social Network',     image: '/riseplatform.png' },
  { key: 'madagiascar', url: 'http://62.72.18.244:5173/', tech: 'React · NestJS · IA', year: '2026', category: 'AI Platform', image: '/madagiascar.png' },
];

const contactsBase = [
  { code: 'email',    icon: '01', value: 'maryratiary@gmail.com', href: 'mailto:maryratiary@gmail.com' },
  { code: 'phone',    icon: '02', value: '+261 ** ** 0917',       href: 'tel:+2610917' },
  { code: 'linkedin', icon: '03', value: 'Ratiarivony Mario',     href: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/' },
  { code: 'github',   icon: '04', value: 'MaryRatiary',           href: 'https://github.com/MaryRatiary' },
  { code: 'facebook', icon: '05', value: 'Mario Ratiary',         href: 'https://facebook.com/mario.ratiary' },
];

const languages = [
  { name: 'Français', level: 95 },
  { name: 'Anglais', level: 85 },
  { name: 'Allemand', level: 20 },
];

/* ============================================================
   ICONS
   ============================================================ */

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6l1.4 1.4M5 19l1.4-1.4M17.6 6.4L19 5" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* ============================================================
   HELPERS
   ============================================================ */

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getInitialLang() {
  if (typeof window === 'undefined') return 'fr';
  const saved = localStorage.getItem('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  return navigator.language?.startsWith('en') ? 'en' : 'fr';
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);
  const [visitCount, setVisitCount] = useState(null);
  const t = I18N[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#14110D' : '#F5F1EB');
  }, [theme]);

  useEffect(() => {
    const storageKey = 'mario-portfolio-views';
    const current = Number.parseInt(localStorage.getItem(storageKey) || '0', 10);
    const next = Number.isFinite(current) ? current + 1 : 1;
    localStorage.setItem(storageKey, String(next));
    setVisitCount(next);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const portraitY = useTransform(heroProgress, [0, 1], [0, -90]);
  const portraitYSpring = useSpring(portraitY, { stiffness: 80, damping: 22 });

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverPreview, setHoverPreview] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!previewRef.current) return;
      previewRef.current.style.left = `${e.clientX}px`;
      previewRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 720 && menuOpen) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const grouped = useMemo(() => {
    return groupOrder.map((group) => ({
      group,
      items: skills.filter((s) => s.group === group),
    }));
  }, []);

  const Tools = () => (
      <div className="nav-tools">
        <div className="visit-pill" aria-label={`${visitCount ?? 0} ${t.views}`}>
          <EyeIcon />
          <strong>{visitCount ?? '—'}</strong>
          <span>{t.views}</span>
        </div>
        <div className="lang-toggle" role="group" aria-label="Language">
        <button
          className={lang === 'fr' ? 'on' : ''}
          onClick={() => setLang('fr')}
          aria-pressed={lang === 'fr'}
        >FR</button>
        <button
          className={lang === 'en' ? 'on' : ''}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >EN</button>
      </div>
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );

  return (
    <div className="shell">
      <motion.div className="progress" style={{ scaleX }} />

      <nav className={`nav container ${scrolled ? 'scrolled' : ''}`}>
        <button className="brand" onClick={() => { scrollTo('home'); setMenuOpen(false); }} aria-label="Home">
          <span><em>M</em>ario</span>
          <small>©2026 · MG</small>
        </button>

        <div className="nav-links">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {t.nav[item.tk]}
            </button>
          ))}
          <a href="mailto:maryratiary@gmail.com">{t.nav.hire}</a>
        </div>

        <div className="nav-right">
          <Tools />
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer rendered OUTSIDE the nav */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {t.nav[item.tk]}
          </button>
        ))}
        <a
          href="mailto:maryratiary@gmail.com"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          {t.nav.hire}
        </a>
      </div>

      <main className="container">
        {/* ===================== HERO ===================== */}
        <section id="home" className="hero" ref={heroRef}>
          <div className="hero-grid">
            <div className="hero-top">
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                key={`eyebrow-${lang}`}
              >
                {t.eyebrowHero}
              </motion.p>

              <h1 className="hero-display">
                <span className="line">
                  <span className="word-mask">
                    <motion.span className="word" custom={0} initial="hidden" animate="visible" variants={wordVariants}>
                      Ratiarivony
                    </motion.span>
                  </span>
                </span>
                <span className="line">
                  <span className="word-mask">
                    <motion.span className="word" custom={1} initial="hidden" animate="visible" variants={wordVariants}>
                      Mario
                    </motion.span>
                  </span>
                  {' '}
                  <span className="word-mask">
                    <motion.span className="word" custom={2} initial="hidden" animate="visible" variants={wordVariants}>
                      <em>Mamitantely.</em>
                    </motion.span>
                  </span>
                </span>
              </h1>
            </div>

            <motion.div
              className="portrait-wrap"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ y: portraitYSpring }}
            >
              <div className="portrait">
                <img src="/moi.png" alt="Portrait Mario Ratiarivony" />
              </div>
              <div className="portrait-caption">
                Fig. 01 — Self<br />Tana, 2026
              </div>
            </motion.div>

            <div className="hero-bottom">
              <motion.p
                className="hero-subdisplay"
                key={`sub-${lang}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {t.hero.sub}
              </motion.p>

              <motion.p
                className="hero-lede"
                key={`lede-${lang}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {t.hero.lede}
              </motion.p>

              <motion.div
                className="hero-cta-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
              >
                <button className="btn btn-primary" onClick={() => scrollTo('work')}>
                  {t.hero.ctaWork} <span className="arrow">→</span>
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
                  {t.hero.ctaContact}
                </button>
              </motion.div>
            </div>
          </div>

          <div className="hero-meta-row">
            <div className="hero-meta"><strong>09</strong><span>{t.meta.shipped}</span></div>
            <div className="hero-meta"><strong>17</strong><span>{t.meta.stacks}</span></div>
            <div className="hero-meta"><strong>03</strong><span>{t.meta.langs}</span></div>
            <div className="hero-meta"><strong>20</strong><span>{t.meta.years}</span></div>
          </div>
        </section>

        {/* ===================== MARQUEE ===================== */}
        <div className="marquee">
          <div className="marquee-track">
            <span>React</span><span>Nest</span><span>Django</span><span>N8N</span>
            <span>React Native</span><span>C# · ASP.Net</span><span>Three.js</span>
            <span>Automation</span><span>UI / UX</span><span>Madagascar</span>
            <span>React</span><span>Nest</span><span>Django</span><span>N8N</span>
            <span>React Native</span><span>C# · ASP.Net</span><span>Three.js</span>
            <span>Automation</span><span>UI / UX</span><span>Madagascar</span>
          </div>
        </div>

        {/* ===================== WORK ===================== */}
        <section id="work" className="section">
          <div className="section-head">
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2 className="section-title">{t.work.title}</h2>
          </div>

          <div className="work-list">
            {projects.map((p, i) => {
              const meta = t.projects[p.key];
              return (
                <motion.a
                  key={p.key}
                  className="work-row"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onMouseEnter={() => setHoverPreview(p.image)}
                  onMouseLeave={() => setHoverPreview(null)}
                >
                  <span className="work-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="work-title">
                    {meta.title}
                    <small>{p.category}</small>
                  </span>
                  <span className="work-meta">
                    <span>{p.tech}</span>
                    <span>· {p.year}</span>
                    <span className="arrow">↗</span>
                  </span>
                  <div className="work-thumb-mobile">
                    <img src={p.image} alt={meta.title} loading="lazy" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* ===================== PRACTICE ===================== */}
        <section id="practice" className="section">
          <div className="section-head">
            <p className="eyebrow">{t.practice.eyebrow}</p>
            <h2 className="section-title">{t.practice.title}</h2>
          </div>

          <div className="stack-grid">
            {grouped.map(({ group, items }) => (
              <motion.article
                key={group}
                className="stack-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <header>
                  <h3>{group}</h3>
                  <span>{t.groupLabels[group]}</span>
                </header>
                <div className="stack-list">
                  {items.map((s, j) => (
                    <div className="stack-item" key={s.name}>
                      <b>{s.name}</b>
                      <i className="stack-bar">
                        <motion.span
                          className="stack-bar-fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: s.level / 100 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1.2, delay: j * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                        />
                      </i>
                      <em>{s.level}</em>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="lang-row">
            <p className="label">{t.langsLabel}</p>
            <div className="lang-items">
              {languages.map((l) => (
                <div className="lang-item" key={l.name}>
                  <strong>{l.level}<span style={{ fontSize: '0.5em', verticalAlign: 'super', marginLeft: 2 }}>%</span></strong>
                  <span>{t.langNames[l.name]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section id="contact" className="section">
          <div className="contact-grid">
            <div className="contact-intro">
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.body}</p>

              <div className="contact-list">
                {contactsBase.map((c) => (
                  <a key={c.code} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                    <span className="icon">{c.icon}</span>
                    <div>
                      <span className="label">{t.contactLabels[c.code]}</span>
                      <span className="value">{c.value}</span>
                    </div>
                    <span className="arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <header>
                <h3>{t.contact.formTitle}</h3>
                <span>{t.contact.formMeta}</span>
              </header>
              <div className="field">
                <label htmlFor="name">{t.contact.fieldName}</label>
                <input id="name" name="name" placeholder={t.contact.placeholderName} />
              </div>
              <div className="field">
                <label htmlFor="email">{t.contact.fieldEmail}</label>
                <input id="email" name="email" type="email" placeholder={t.contact.placeholderEmail} />
              </div>
              <div className="field">
                <label htmlFor="message">{t.contact.fieldMessage}</label>
                <textarea id="message" name="message" rows="5" placeholder={t.contact.placeholderMessage} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                {t.contact.send} <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="footer">
          <div className="footer-brand"><em>Mario</em> Ratiarivony</div>
          <div className="footer-meta">{t.footer.tagline}</div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/mario-mamitantely-ratiarivony/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/MaryRatiary" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:maryratiary@gmail.com">Email</a>
          </div>
        </footer>
      </main>

      {/* Floating hover preview (desktop) */}
      <div ref={previewRef} className={`work-preview ${hoverPreview ? 'active' : ''}`}>
        {hoverPreview && <img src={hoverPreview} alt="" />}
      </div>
    </div>
  );
}
