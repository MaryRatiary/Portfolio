import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './App.css';

const wordVariants = {
  hidden: { y: '115%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 1, delay: 0.1 + i * 0.13, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'practice', label: 'Practice' },
  { id: 'contact', label: 'Contact' },
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
const groupLabels = {
  Frontend: '01 — Interfaces',
  Backend: '02 — Systems',
  Automation: '03 — Flows',
  Craft: '04 — Visual',
};

const projects = [
  {
    title: 'Luxy Shop',
    tagline: 'Boutique e-commerce premium — produits lifestyle haut de gamme.',
    url: 'https://luxyshop.netlify.app',
    tech: 'React · Tailwind · E-Commerce',
    year: '2026',
    category: 'Luxury E-Commerce',
    image: '/luxury.png',
  },
  {
    title: 'K-Pop Shop',
    tagline: 'Boutique en ligne dédiée à la culture K-Pop : merch, albums, lightsticks.',
    url: 'https://kpopshop.netlify.app',
    tech: 'React · Tailwind · Stripe',
    year: '2026',
    category: 'Niche E-Commerce',
    image: '/kpopshop.netlify.png',
  },
  {
    title: 'Scaleas',
    tagline: 'Plateforme e-commerce scalable avec architecture modulaire.',
    url: 'https://scaleas-e.netlify.app',
    tech: 'React · Node · Scalable',
    year: '2026',
    category: 'E-Commerce Platform',
    image: '/scale.png',
  },
  {
    title: 'Nexus Lab',
    tagline: 'Plateforme de digitalisation futuriste avec intégration 3D Three.js.',
    url: 'https://nexuslaab.netlify.app',
    tech: 'React · Three.js · Tailwind',
    year: '2025',
    category: '3D Integration',
    image: '/nexuslaab.png',
  },
  {
    title: 'All Stone Mada',
    tagline: 'E-commerce de pierres précieuses, Madagascar.',
    url: 'https://allstonemada.netlify.app',
    tech: 'React · C# · ASP.Net',
    year: '2024',
    category: 'E-Commerce',
    image: '/allstoneof mada.png',
  },
  {
    title: 'Aveny Work',
    tagline: 'Plateforme IA avec suggestions business et dashboard dynamique.',
    url: 'https://avenywork.netlify.app',
    tech: 'React · Django · ML',
    year: '2024',
    category: 'AI Platform',
    image: '/avenywork.png',
  },
  {
    title: 'Ratiary Business',
    tagline: 'Site multi-services optimisé SEO.',
    url: 'https://ratiarybusiness.netlify.app',
    tech: 'React · Tailwind · SEO',
    year: '2024',
    category: 'Business',
    image: '/ratiarybusiness.png',
  },
  {
    title: 'Rise Platform',
    tagline: 'Réseau social étudiant temps réel, publications & messages.',
    url: 'https://riseplatform.netlify.app',
    tech: 'React · C# · Realtime',
    year: '2024',
    category: 'Social Network',
    image: '/riseplatform.png',
  },
];

const contacts = [
  { icon: '01', label: 'Email', value: 'maryratiary@gmail.com', href: 'mailto:maryratiary@gmail.com' },
  { icon: '02', label: 'Téléphone', value: '+261 ** ** 0917', href: 'tel:+2610917' },
  { icon: '03', label: 'LinkedIn', value: 'Ratiarivony Mario', href: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/' },
  { icon: '04', label: 'GitHub', value: 'MaryRatiary', href: 'https://github.com/MaryRatiary' },
  { icon: '05', label: 'Facebook', value: 'Mario Ratiary', href: 'https://facebook.com/mario.ratiary' },
];

const languages = [
  { name: 'Français', level: 95 },
  { name: 'Anglais', level: 85 },
  { name: 'Allemand', level: 20 },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
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

  const grouped = useMemo(() => {
    return groupOrder.map((group) => ({
      group,
      items: skills.filter((s) => s.group === group),
    }));
  }, []);

  return (
    <div className="shell">
      <motion.div className="progress" style={{ scaleX }} />

      <nav className={`nav container ${scrolled ? 'scrolled' : ''}`}>
        <button className="brand" onClick={() => { scrollTo('home'); setMenuOpen(false); }} aria-label="Accueil">
          <span><em>M</em>ario</span>
          <small>©2026 · MG</small>
        </button>

        <div className="nav-links">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
          <a href="mailto:maryratiary@gmail.com">Hire →</a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '≡'}
        </button>
      </nav>

      {/* Mobile drawer rendered OUTSIDE the nav (backdrop-filter on nav breaks position:fixed in children) */}
      <div
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {item.label}
          </button>
        ))}
        <a
          href="mailto:maryratiary@gmail.com"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Hire →
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
              >
                Antananarivo, Madagascar · Open for work
              </motion.p>

              <h1 className="hero-display">
                <span className="line">
                  <span className="word-mask">
                    <motion.span
                      className="word"
                      custom={0}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                    >
                      Ratiarivony
                    </motion.span>
                  </span>
                </span>
                <span className="line">
                  <span className="word-mask">
                    <motion.span
                      className="word"
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                    >
                      Mario
                    </motion.span>
                  </span>
                  {' '}
                  <span className="word-mask">
                    <motion.span
                      className="word"
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      variants={wordVariants}
                    >
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
                <img src="/moi.png" alt="Portrait de Mario Ratiarivony" />
              </div>
              <div className="portrait-caption">
                Fig. 01 — Self<br />Tana, 2026
              </div>
            </motion.div>

            <div className="hero-bottom">
              <motion.p
                className="hero-subdisplay"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <em>Developer</em> &amp; digital craftsman.
              </motion.p>

              <motion.p
                className="hero-lede"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                Je conçois des interfaces premium, des systèmes
                <em> automatisés </em>N8N et des backends solides en Nest,
                Django ou C#. Vingt ans, basé à Madagascar, disponible pour
                collaborer ailleurs.
              </motion.p>

              <motion.div
                className="hero-cta-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
              >
                <button className="btn btn-primary" onClick={() => scrollTo('work')}>
                  Selected work <span className="arrow">→</span>
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
                  Get in touch
                </button>
              </motion.div>
            </div>
          </div>

          <div className="hero-meta-row">
            <div className="hero-meta">
              <strong>08</strong>
              <span>Shipped projects</span>
            </div>
            <div className="hero-meta">
              <strong>17</strong>
              <span>Stacks mastered</span>
            </div>
            <div className="hero-meta">
              <strong>03</strong>
              <span>Spoken languages</span>
            </div>
            <div className="hero-meta">
              <strong>20</strong>
              <span>Years young</span>
            </div>
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
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Things I&apos;ve <em>shipped</em>.</h2>
          </div>

          <div className="work-list">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
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
                  {p.title}
                  <small>{p.category}</small>
                </span>
                <span className="work-meta">
                  <span>{p.tech}</span>
                  <span>· {p.year}</span>
                  <span className="arrow">↗</span>
                </span>
                <div className="work-thumb-mobile">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ===================== PRACTICE ===================== */}
        <section id="practice" className="section">
          <div className="section-head">
            <p className="eyebrow">Practice · stack</p>
            <h2 className="section-title">A toolbox built for <em>solo shipping</em>.</h2>
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
                  <span>{groupLabels[group]}</span>
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
            <p className="label">Spoken languages</p>
            <div className="lang-items">
              {languages.map((l) => (
                <div className="lang-item" key={l.name}>
                  <strong>{l.level}<span style={{ fontSize: '0.5em', verticalAlign: 'super', marginLeft: 2 }}>%</span></strong>
                  <span>{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section id="contact" className="section">
          <div className="contact-grid">
            <div className="contact-intro">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something <em>worth shipping.</em></h2>
              <p>
                Un projet web, mobile, backend ou un workflow d&apos;automatisation à
                construire ? Écris-moi — je réponds rapidement et propose une
                approche claire avant tout devis.
              </p>

              <div className="contact-list">
                {contacts.map((c) => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                    <span className="icon">{c.icon}</span>
                    <div>
                      <span className="label">{c.label}</span>
                      <span className="value">{c.value}</span>
                    </div>
                    <span className="arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <header>
                <h3>Send a brief.</h3>
                <span>NEW · MESSAGE</span>
              </header>
              <div className="field">
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" placeholder="Votre nom" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="votre@email.com" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Parlez-moi de votre projet…" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Envoyer <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="footer">
          <div className="footer-brand"><em>Mario</em> Ratiarivony</div>
          <div className="footer-meta">© 2026 — Crafted in Antananarivo</div>
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
