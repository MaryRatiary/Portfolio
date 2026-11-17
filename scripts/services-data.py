# Génère src/content/services/{fr,en}/<slug>.md — python3 scripts/services-data.py
import json, os, sys
q = lambda s: json.dumps(s, ensure_ascii=False)
S = [
 dict(slug='developpement-web', order=1, stack=['React', 'Next.js', 'Astro', 'Vue / Nuxt', 'Tailwind CSS', 'Netlify / Vercel'],
  related=['greengarden-lodge', 'velvet-escapes', 'seo-pcmi-plans'],
  fr=dict(title='Création de sites web sur mesure',
   short='Sites vitrines et sites sur mesure rapides, bien référencés et faciles à faire évoluer.',
   summary='Un site qui charge vite, qui donne confiance et qui apparaît sur Google. Je conçois et développe votre site de A à Z, sans thème générique ni extensions superflues.',
   deliverables=['Maquette des pages clés validée avant le développement', 'Site responsive, rapide (score Lighthouse visé : 95+)', 'SEO technique : balises, données structurées, sitemap, vitesse', 'Formulaire de contact, analytics respectueux, mise en ligne', 'Formation pour modifier vos contenus, code livré sur votre GitHub'],
   seoTitle='Développeur web freelance — création de site sur mesure',
   seoDescription='Création de sites web sur mesure par un développeur freelance : sites vitrines rapides, responsives et optimisés pour Google. React, Astro, Next.js.',
   body='''## Pour qui ?

Les entreprises, indépendants et associations qui veulent un site **professionnel, rapide et visible**, sans dépendre d’un thème WordPress alourdi par vingt extensions.

## Comment je travaille

1. **Un échange de 30 minutes** pour comprendre votre activité, vos clients et vos objectifs.
2. **Une maquette** des pages principales, que vous validez avant toute ligne de code.
3. **Le développement**, avec un lien de test pour suivre l’avancement.
4. **La mise en ligne** sur votre nom de domaine, avec le référencement technique déjà en place.

## Pourquoi un site sur mesure ?

Un site sur mesure ne charge que ce qui est utile. Il est donc plus rapide, ce que Google prend en compte dans son classement. Il est aussi plus simple à faire évoluer : vous ajoutez une page ou une fonctionnalité sans tout casser.

Je choisis la technologie selon le besoin : **Astro** pour un site vitrine ultra rapide, **Next.js** ou **React** quand il faut de l’interactivité, **WordPress** si vous tenez à éditer vous-même toutes vos pages.''',
   faq=[('Combien coûte un site vitrine sur mesure ?', 'Cela dépend du nombre de pages et des fonctionnalités. Après notre premier échange, je vous envoie un devis à prix fixe, détaillé page par page, sans frais cachés.'),
        ('Combien de temps faut-il pour créer mon site ?', 'Comptez en général 2 à 4 semaines pour un site vitrine, selon le nombre de pages et la rapidité des retours sur la maquette.'),
        ('Vous êtes à Madagascar : comment se passe la collaboration ?', 'Entièrement à distance : appels en visio, messages, et un lien de test mis à jour en continu. Le décalage avec Paris n’est que d’une ou deux heures.'),
        ('Mon site sera-t-il bien référencé sur Google ?', 'Le référencement technique est inclus : vitesse, balises, données structurées, sitemap et indexation. Le positionnement dépend aussi de votre contenu et de la concurrence, et je vous conseille sur ce point.'),
        ('Le site m’appartient-il ?', 'Oui. Le code est livré sur votre compte GitHub et le site est hébergé à votre nom. Vous restez libre de travailler avec qui vous voulez ensuite.'),
        ('Proposez-vous la maintenance ?', 'Oui, en option : mises à jour, petites évolutions, sauvegardes et surveillance, au forfait mensuel ou à la demande.')]),
  en=dict(title='Custom website development',
   short='Fast, search-friendly showcase and custom websites that are easy to grow.',
   summary='A website that loads fast, builds trust and shows up on Google. I design and build your site end to end, with no generic theme and no plugin bloat.',
   deliverables=['Mock-up of key pages approved before development', 'Responsive, fast website (Lighthouse target: 95+)', 'Technical SEO: tags, structured data, sitemap, speed', 'Contact form, privacy-friendly analytics, launch', 'Handover session, code delivered to your GitHub'],
   seoTitle='Freelance web developer — custom website development',
   seoDescription='Custom website development by a freelance web developer: fast, responsive showcase sites optimised for Google. Built with React, Astro or Next.js.',
   body='''## Who is it for?

Businesses, freelancers and non-profits that want a **professional, fast and visible** website, without a WordPress theme weighed down by twenty plugins.

## How I work

1. **A 30-minute call** to understand your business, your customers and your goals.
2. **A mock-up** of the main pages, approved before any code is written.
3. **Development**, with a staging link so you can follow progress.
4. **Launch** on your domain, with technical SEO already in place.

## Why custom?

A custom site only loads what it needs, so it is faster — and Google takes speed into account. It is also easier to grow: you add a page or a feature without breaking everything.

I pick the technology for the job: **Astro** for a lightning-fast showcase site, **Next.js** or **React** when you need interactivity, **WordPress** if you want to edit every page yourself.''',
   faq=[('How much does a custom website cost?', 'It depends on the number of pages and features. After our first call I send a fixed-price quote, detailed page by page, with no hidden costs.'),
        ('How long does it take?', 'Usually 2 to 4 weeks for a showcase site, depending on the number of pages and how quickly the mock-up is approved.'),
        ('You are based in Madagascar: how do we work together?', 'Fully remote: video calls, messages and a staging link updated continuously. Madagascar is UTC+3, which overlaps well with European and Middle-East working hours.'),
        ('Will my site rank on Google?', 'Technical SEO is included: speed, tags, structured data, sitemap and indexing. Rankings also depend on your content and competition, and I advise you on that too.'),
        ('Do I own the website?', 'Yes. The code is delivered to your GitHub account and the site is hosted in your name. You are free to work with anyone afterwards.'),
        ('Do you offer maintenance?', 'Yes, as an option: updates, small changes, backups and monitoring, monthly or on demand.')])),
 dict(slug='applications-saas', order=2, stack=['React', 'TypeScript', 'Convex', 'NestJS', 'Django', 'PostgreSQL'],
  related=['velora', 'tracify', 'atlas'],
  fr=dict(title='Applications web et SaaS sur mesure',
   short='CRM, tableaux de bord, back-offices et SaaS conçus autour de votre façon de travailler.',
   summary='Quand les tableurs et les outils du marché ne suffisent plus, je développe l’application qui colle à vos processus : un CRM, une plateforme client, un back-office, un SaaS.',
   deliverables=['Cadrage fonctionnel et maquettes des écrans', 'Application web complète : interface, API, base de données', 'Connexion à vos outils (CRM, paiement, emailing, API métier)', 'Rôles et droits d’accès, sécurité, sauvegardes', 'Mise en production, documentation et suivi'],
   seoTitle='Création de SaaS et d’applications web sur mesure | Freelance',
   seoDescription='Développement d’applications web et de SaaS sur mesure : CRM, tableaux de bord, back-offices, intégrations API. React, TypeScript, Convex, NestJS.',
   body='''## Des outils utilisés tous les jours

Mes applications récentes tournent en production et sont utilisées chaque jour : un **CRM commercial** synchronisé avec GoHighLevel, une **plateforme de suivi publicitaire** multi-clients, une **plateforme pour marchands de biens** avec back-office et alertes.

## Ce que je prends en charge

- **Le cadrage** : on part de vos processus réels, pas d’une liste de fonctionnalités.
- **Le développement complet** : base de données, API, interface, droits d’accès.
- **Les intégrations** : CRM, Meta Ads, Stripe, emailing, Slack, API métier.
- **La mise en production** et le suivi : surveillance, corrections, évolutions.

## Une approche par étapes

Je livre une première version utile rapidement, puis on l’améliore avec les retours des utilisateurs. Vous voyez l’application avancer chaque semaine.''',
   faq=[('Quelle est la différence entre une application sur mesure et un logiciel du marché ?', 'Un logiciel du marché vous oblige à suivre sa logique. Une application sur mesure suit la vôtre, se connecte à vos outils et évolue avec votre activité.'),
        ('Combien de temps pour une première version ?', 'Une première version utilisable sort souvent en 4 à 8 semaines, selon le périmètre. On l’enrichit ensuite par étapes.'),
        ('Quelles technologies utilisez-vous ?', 'Principalement React et TypeScript côté interface, et Convex, NestJS ou Django côté serveur, selon le projet. Je privilégie des technologies répandues pour que vous ne soyez jamais bloqué.'),
        ('Pouvez-vous reprendre une application existante ?', 'Oui. Je commence par un audit du code et de l’hébergement, puis je propose un plan : corriger, migrer ou refaire progressivement.'),
        ('Mes données sont-elles en sécurité ?', 'Les accès sont gérés par rôle, les secrets ne sont jamais dans le code, et les données sont sauvegardées. Je documente tout ce qui est en place.')]),
  en=dict(title='Custom web apps and SaaS',
   short='CRMs, dashboards, back-offices and SaaS built around the way you work.',
   summary='When spreadsheets and off-the-shelf tools are no longer enough, I build the application that fits your processes: a CRM, a client platform, a back-office, a SaaS.',
   deliverables=['Functional scoping and screen mock-ups', 'Complete web app: interface, API, database', 'Integration with your tools (CRM, payments, emailing, business APIs)', 'Roles and permissions, security, backups', 'Production launch, documentation and follow-up'],
   seoTitle='Custom SaaS and web application development | Freelance',
   seoDescription='Custom web applications and SaaS: CRMs, dashboards, back-offices and API integrations, built with React, TypeScript, Convex and NestJS by a freelancer.',
   body='''## Tools people use every day

My recent apps run in production and are used daily: a **sales CRM** synced with GoHighLevel, a multi-client **ad-tracking platform**, a **platform for property dealers** with a back-office and alerts.

## What I handle

- **Scoping**: we start from your real processes, not from a feature list.
- **Full development**: database, API, interface, permissions.
- **Integrations**: CRM, Meta Ads, Stripe, emailing, Slack, business APIs.
- **Production** and follow-up: monitoring, fixes, new features.

## Step by step

I ship a useful first version quickly, then improve it with user feedback. You see the app move forward every week.''',
   faq=[('What is the difference between a custom app and off-the-shelf software?', 'Off-the-shelf software makes you follow its logic. A custom app follows yours, connects to your tools and grows with your business.'),
        ('How long until a first version?', 'A usable first version often ships in 4 to 8 weeks, depending on scope. We then extend it step by step.'),
        ('Which technologies do you use?', 'Mostly React and TypeScript for the interface, and Convex, NestJS or Django on the server, depending on the project. I favour widely used tech so you are never locked in.'),
        ('Can you take over an existing app?', 'Yes. I start with an audit of the code and hosting, then propose a plan: fix, migrate or rebuild gradually.'),
        ('Is my data safe?', 'Access is role-based, secrets never live in the code, and data is backed up. I document everything that is in place.')])),
 dict(slug='automatisation-ia', order=3, stack=['n8n', 'Python', 'API LLM', 'Slack', 'Webhooks'],
  related=['agent-ia-transport', 'prospection-b2b-automatisee', 'traducteur-alertes'],
  fr=dict(title='Automatisation et intégration IA',
   short='Workflows n8n et assistants IA branchés sur vos outils, avec validation humaine.',
   summary='En complément du développement web, j’automatise les tâches répétitives : lire des emails, préparer des devis, synchroniser des outils, alerter la bonne personne. L’IA prépare, vous validez.',
   deliverables=['Analyse des tâches répétitives et du gain attendu', 'Workflows n8n ou scripts sur mesure, documentés', 'Assistant IA relié à vos outils (email, CRM, Slack, logiciel métier)', 'Validation humaine et garde-fous contre les erreurs', 'Surveillance et alertes compréhensibles'],
   seoTitle='Automatisation n8n et intégration IA pour PME | Freelance',
   seoDescription='Automatisation de tâches et intégration d’IA pour PME : workflows n8n, assistants qui lisent les emails et préparent devis et réservations, avec validation.',
   body='''## Des automatisations qui tournent vraiment

- Un **agent qui lit les emails de réservation** d’une société de transport, prépare les courses, devis et factures, et les fait valider sur Slack.
- Un **pipeline de prospection B2B** en n8n, réutilisé pour plusieurs clients.
- Un **traducteur d’alertes** qui transforme des erreurs techniques en messages clairs.

## Mes principes

- **L’humain valide** avant toute action importante.
- **Pas d’invention** : l’IA n’écrit que ce qu’elle peut justifier.
- **Tout est surveillé** : si quelque chose casse, vous le savez, en langage clair.''',
   faq=[('Faut-il déjà avoir un site ou une application ?', 'Non. J’automatise aussi des outils existants comme la messagerie, le CRM, les tableurs ou le logiciel métier, du moment qu’ils ont une API ou un export.'),
        ('L’IA peut-elle faire des erreurs ?', 'Oui, c’est pourquoi je mets en place une validation humaine et des garde-fous : l’IA prépare, une personne valide, et les erreurs passées deviennent des tests.'),
        ('n8n, c’est quoi ?', 'Un outil d’automatisation open source qui relie vos applications entre elles. Il peut être hébergé chez vous, et vos données restent sous votre contrôle.'),
        ('Combien coûte une automatisation ?', 'Cela va d’un petit workflow à un agent complet. Je chiffre après avoir mesuré le temps gagné, pour que l’investissement soit clair.')]),
  en=dict(title='Automation and AI integration',
   short='n8n workflows and AI assistants connected to your tools, with human approval.',
   summary='Alongside web development, I automate repetitive work: reading emails, drafting quotes, syncing tools, alerting the right person. The AI prepares, you approve.',
   deliverables=['Review of repetitive tasks and expected time savings', 'Documented n8n workflows or custom scripts', 'AI assistant connected to your tools (email, CRM, Slack, business software)', 'Human approval and guardrails against mistakes', 'Monitoring and plain-language alerts'],
   seoTitle='n8n automation and AI integration for SMBs | Freelance',
   seoDescription='Task automation and AI integration for small businesses: n8n workflows and assistants that read emails and draft quotes and bookings, with human approval.',
   body='''## Automations running in production

- An **agent that reads booking emails** for a transport company, prepares rides, quotes and invoices, and gets them approved on Slack.
- A **B2B prospecting pipeline** in n8n, reused across several clients.
- An **alert translator** that turns technical errors into clear messages.

## My principles

- **A human approves** before anything important happens.
- **No invention**: the AI only writes what it can justify.
- **Everything is monitored**: if something breaks, you know, in plain language.''',
   faq=[('Do I need an existing website or app?', 'No. I also automate the tools you already use, such as email, CRM, spreadsheets or business software, as long as they have an API or an export.'),
        ('Can the AI make mistakes?', 'Yes, which is why I add human approval and guardrails: the AI prepares, a person approves, and past mistakes become tests.'),
        ('What is n8n?', 'An open-source automation tool that connects your apps together. It can be self-hosted so your data stays under your control.'),
        ('How much does an automation cost?', 'Anything from a small workflow to a full agent. I quote after estimating the time saved, so the investment is clear.')])),
]
errs = []
for s in S:
  for lang in ('fr', 'en'):
    d = s[lang]
    if not 25 <= len(d['seoTitle']) <= 65: errs.append(f"{s['slug']}/{lang} titre {len(d['seoTitle'])}")
    if not 110 <= len(d['seoDescription']) <= 165: errs.append(f"{s['slug']}/{lang} desc {len(d['seoDescription'])}")
    faq = '\n'.join(f"  - q: {q(a)}\n    a: {q(b)}" for a, b in d['faq'])
    md = f"""---
title: {q(d['title'])}
short: {q(d['short'])}
summary: {q(d['summary'])}
order: {s['order']}
deliverables: {q(d['deliverables'])}
stack: {q(s['stack'])}
related: {q(s['related'])}
seoTitle: {q(d['seoTitle'])}
seoDescription: {q(d['seoDescription'])}
faq:
{faq}
---

{d['body']}
"""
    os.makedirs(f'src/content/services/{lang}', exist_ok=True)
    open(f"src/content/services/{lang}/{s['slug']}.md", 'w').write(md)
if errs: print('\n'.join(errs)); sys.exit(1)
print('services OK')
