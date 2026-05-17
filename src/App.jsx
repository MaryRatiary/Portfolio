import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './App.css';

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  { name: 'React', level: 95, group: 'Frontend' },
  { name: 'Next.js', level: 85, group: 'Frontend' },
  { name: 'React Native', level: 90, group: 'Mobile' },
  { name: 'Angular', level: 75, group: 'Frontend' },
  { name: 'Nest backend', level: 86, group: 'Backend' },
  { name: 'Django', level: 80, group: 'Backend' },
  { name: 'C# / ASP.Net', level: 85, group: 'Backend' },
  { name: 'Java', level: 70, group: 'Backend' },
  { name: 'Symfony', level: 75, group: 'Backend' },
  { name: 'Automatisation N8N', level: 88, group: 'Automation' },
  { name: 'Make', level: 80, group: 'Automation' },
  { name: 'HubSpot', level: 85, group: 'Automation' },
  { name: 'Lemlist', level: 80, group: 'Automation' },
  { name: 'Brevo', level: 78, group: 'Automation' },
  { name: 'Blender', level: 82, group: 'Design' },
  { name: 'Adobe After Effects', level: 88, group: 'Design' },
  { name: 'CapCut', level: 90, group: 'Design' },
];

const projects = [
  {
    title: 'Nexus Lab',
    description: 'Intégration 3D avec Three.js sur une plateforme de digitalisation futuriste.',
    url: 'https://nexuslaab.netlify.app',
    tech: ['React', 'Three.js', 'Tailwind CSS'],
    image: '/nexuslaab.png',
    category: '3D Integration',
  },
  {
    title: 'All Stone Mada',
    description: 'Plateforme e-commerce de vente de pierres précieuses à Madagascar.',
    url: 'https://allstonemada.netlify.app',
    tech: ['React', 'C#', 'ASP.Net'],
    image: '/allstoneof mada.png',
    category: 'E-Commerce',
  },
  {
    title: 'Aveny Work',
    description: 'Site web avec IA intégrée pour suggestions business et tableau de bord dynamique.',
    url: 'https://avenywork.netlify.app',
    tech: ['React', 'Django', 'Machine Learning'],
    image: '/avenywork.png',
    category: 'AI Platform',
  },
  {
    title: 'Ratiary Business',
    description: 'Site web statique pour promouvoir des offres multi-services en ligne.',
    url: 'https://ratiarybusiness.netlify.app',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    image: '/ratiarybusiness.png',
    category: 'Business',
  },
  {
    title: 'Rise Platform',
    description: 'Réseau social étudiant avec publications, messages et formulaires dynamiques.',
    url: 'https://riseplatform.netlify.app',
    tech: ['React', 'C#', 'Real-time'],
    image: '/riseplatform.png',
    category: 'Social Network',
  },
];

const contacts = [
  { label: 'Age', value: '20 ans', icon: '✦' },
  { label: 'Email', value: 'maryratiary@gmail.com', href: 'mailto:maryratiary@gmail.com', icon: '@' },
  { label: 'Téléphone', value: '+261****0917', href: 'tel:+261****0917', icon: '☎' },
  { label: 'Téléphone 2', value: '+261****8480', href: 'tel:+261****8480', icon: '☎' },
  { label: 'Facebook', value: 'Mario Ratiary', href: 'https://facebook.com/mario.ratiary', icon: 'f' },
  { label: 'LinkedIn', value: 'Ratiarivony Mario', href: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/', icon: 'in' },
];

const languages = [
  { name: 'Français', level: 95 },
  { name: 'Anglais', level: 85 },
  { name: 'Allemand', level: 20 },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [dark, setDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const portraitY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <main className="portfolio-shell">
      <motion.div className="progress-line" style={{ scaleX }} />

      <nav className="top-nav">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Retour accueil">
          <span>M</span>
          <small>Portfolio</small>
        </button>
        <div className="nav-links">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>
          ))}
        </div>
        <button className="mode-button" onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'}</button>
      </nav>

      <section id="home" className="hero-section section-offset">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            Disponible pour collaborer · Madagascar
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Ratiarivony <span>Mario Mamitantely</span>
          </motion.h1>
          <motion.p className="hero-text" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            Développeur web, mobile et backend. Je crée des interfaces premium, des systèmes automatisés N8N et des backends solides avec Nest, Django ou C#.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
            <button className="primary-cta" onClick={() => scrollTo('projects')}>Voir mes projets</button>
            <button className="secondary-cta" onClick={() => scrollTo('contact')}>Me contacter</button>
          </motion.div>
          <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <span><strong>5+</strong> projets publics</span>
            <span><strong>17</strong> compétences clés</span>
            <span><strong>3</strong> langues</span>
          </motion.div>
        </div>

        <motion.div className="portrait-stage" style={{ y: portraitY }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.8 }}>
          <motion.a className="mini-pin mini-one" href="https://nexuslaab.netlify.app" target="_blank" rel="noreferrer" animate={{ y: [0, -12, 0], rotate: [-7, -3, -7] }} transition={{ duration: 5.4, repeat: Infinity }}>
            <img src="/nexuslaab.png" alt="Nexus Lab" />
            <span>3D</span>
          </motion.a>
          <motion.a className="mini-pin mini-two" href="https://avenywork.netlify.app" target="_blank" rel="noreferrer" animate={{ y: [0, 10, 0], rotate: [6, 2, 6] }} transition={{ duration: 4.8, repeat: Infinity }}>
            <img src="/avenywork.png" alt="Aveny Work" />
            <span>AI</span>
          </motion.a>
          <div className="pin-card portrait-main">
            <img src="/moi.png" alt="Mario Ratiarivony" />
          </div>
          <motion.div className="floating-note note-one" animate={{ y: [0, -14, 0], rotate: [-3, 1, -3] }} transition={{ duration: 5, repeat: Infinity }}>
            UI/UX · Web Dev
          </motion.div>
          <motion.div className="floating-note note-two" animate={{ y: [0, 12, 0], rotate: [4, -1, 4] }} transition={{ duration: 4.5, repeat: Infinity }}>
            N8N Automation
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="skills-section section-offset">
        <div className="section-heading">
          <p className="eyebrow">Expertise</p>
          <h2>Un profil complet, du design au backend.</h2>
        </div>
        <div className="skill-board">
          {skills.map((skill, index) => (
            <motion.article className="skill-card" key={skill.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: (index % 6) * 0.04 }}>
              <div>
                <p>{skill.group}</p>
                <h3>{skill.name}</h3>
              </div>
              <span>{skill.level}%</span>
              <div className="skill-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 0.9 }} /></div>
            </motion.article>
          ))}
        </div>
        <div className="language-strip">
          {languages.map((language) => (
            <div key={language.name}>
              <span>{language.name}</span>
              <strong>{language.level}%</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section section-offset">
        <div className="section-heading centered">
          <p className="eyebrow">Réalisations</p>
          <h2>Une galerie façon Pinterest, mais plus professionnelle.</h2>
        </div>
        <div className="masonry-grid">
          {projects.map((project, index) => (
            <motion.a className={`project-pin pin-${index + 1}`} href={project.url} target="_blank" rel="noreferrer" key={project.title} initial={false} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} transition={{ delay: index * 0.04 }}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <small>{project.category}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section section-offset">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Travaillons ensemble</h2>
            <p>Vous avez un projet web, mobile, backend ou automatisation ? Envoyez un message et discutons d'une solution claire.</p>
          </div>
          <div className="contact-grid">
            {contacts.map((item) => {
              const content = <><span>{item.icon}</span><div><small>{item.label}</small><strong>{item.value}</strong></div></>;
              return item.href ? <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">{content}</a> : <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>
        <form className="message-card" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="Votre nom" />
          <input placeholder="votre@email.com" type="email" />
          <textarea placeholder="Votre message..." rows="5" />
          <button>Envoyer</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Mario Mamitantely</p>
        <div>
          <a href="https://www.linkedin.com/in/mario-mamitantely-ratiarivony/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/MaryRatiary" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:maryratiary@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
