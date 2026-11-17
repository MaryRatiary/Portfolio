# Source des fiches projets (FR/EN). Génère src/content/projets/{fr,en}/<slug>.md
# Lancer : python3 scripts/projets-data.py
import json, os, sys

def img(slug, f): return f"../../../assets/projets/{slug}/{f}"

P = []

def projet(slug, **kw): P.append(dict(slug=slug, **kw))

# ---------------------------------------------------------------- VEDETTES
projet('velora', kind='web', featured=1, order=1, year='2026', url='https://velora.electroconceptoi.com',
  stack=['React', 'TypeScript', 'Convex', 'GoHighLevel API', 'n8n', 'Vercel'],
  fr=dict(title='Velora', client='Electro Concept OI — installateur solaire, La Réunion', role='Conception, développement full stack, mise en production',
    tagline='Le CRM commercial d’un installateur solaire : leads, appels, rendez-vous, ventes et installations dans une seule vue claire.',
    context='L’équipe commerciale jonglait entre GoHighLevel, des tableurs et des messages pour suivre ses prospects. Personne n’avait une vue fiable du pipeline, des rappels à faire ni du chiffre signé.',
    built='Un CRM SaaS sur mesure en React et Convex, synchronisé en continu avec GoHighLevel : pipeline des leads, journal d’appels, agenda des rendez-vous par secteur, suivi d’installation, finances, statistiques et rôles. Un workflow n8n envoie le débrief de chaque rendez-vous. La première version tournait sur NestJS et PostgreSQL ; je l’ai migrée vers Convex pour le temps réel et la simplicité d’exploitation.',
    result='Les commerciaux et la direction travaillent chaque jour dans Velora. La synchronisation différentielle avec GoHighLevel évite les doublons, et les agrégats calculés côté serveur gardent l’application rapide malgré des milliers de leads.',
    seoTitle='Velora — CRM SaaS sur mesure (React, Convex) | Étude de cas',
    seoDescription='Étude de cas : Velora, CRM SaaS développé pour un installateur solaire. Pipeline de leads, appels, rendez-vous, sync GoHighLevel, React et Convex.',
    body='## Points techniques\n\n- **Synchronisation idempotente** avec l’API GoHighLevel : réessais avec délai progressif, gestion du quota (HTTP 429), aucune création en double.\n- **Agrégats précalculés** par lead (appels, rappels, dernier commentaire) pour des listes instantanées.\n- **Rôles et secteurs** : chaque commercial voit ses leads, la direction voit tout.\n- **API pour agents** : clés à portée limitée par domaine pour brancher des automatisations en toute sécurité.'),
  en=dict(title='Velora', client='Electro Concept OI — solar installer, Réunion Island', role='Design, full-stack development, production launch',
    tagline='A sales CRM for a solar installer: leads, calls, appointments, sales and installations in one clear view.',
    context='The sales team was juggling GoHighLevel, spreadsheets and chat messages to follow up prospects. Nobody had a reliable view of the pipeline, the call-backs due or the revenue signed.',
    built='A custom SaaS CRM built with React and Convex, continuously synced with GoHighLevel: lead pipeline, call log, appointment calendar by area, installation tracking, finances, analytics and roles. An n8n workflow sends a debrief after each appointment. The first version ran on NestJS and PostgreSQL; I migrated it to Convex for real-time updates and simpler operations.',
    result='Sales reps and management work in Velora every day. Differential sync with GoHighLevel prevents duplicates, and server-side aggregates keep the app fast across thousands of leads.',
    seoTitle='Velora — custom SaaS CRM (React, Convex) | Case study',
    seoDescription='Case study: Velora, a SaaS CRM built for a solar installer. Lead pipeline, calls, appointments, GoHighLevel sync, built with React and Convex.',
    body='## Technical highlights\n\n- **Idempotent sync** with the GoHighLevel API: retries with backoff, rate-limit handling (HTTP 429), no duplicates.\n- **Pre-computed aggregates** per lead (calls, call-backs, last comment) for instant lists.\n- **Roles and areas**: each rep sees their leads, management sees everything.\n- **Agent API**: domain-scoped keys to plug automations in safely.'),
  gallery=[
    ('10-tableau-de-bord.webp', 'Vue d’ensemble : nouveaux prospects, taux de vente, appels, courbe d’évolution', 'Overview: new leads, sales rate, calls, trend curve', 'Tableau de bord du CRM Velora (données fictives)', 'Velora CRM dashboard (demo data)'),
    ('12-prospects.webp', 'Liste des prospects avec filtres par statut, dernier appel et période', 'Lead list with filters by status, last call and period', 'Liste des prospects dans Velora', 'Lead list in Velora'),
    ('13-fiche-prospect.webp', 'Fiche prospect : coordonnées, attribution, historique et débrief de vente', 'Lead record: contact details, attribution, history and sale debrief', 'Fiche d’un prospect fictif dans Velora', 'Demo lead record in Velora'),
    ('16-appel-en-cours.webp', 'Écran d’appel : chronomètre et qualification guidée du prospect', 'Call screen: timer and guided lead qualification', 'Écran d’appel en cours dans Velora', 'Live call screen in Velora'),
    ('15-agenda-rdv.webp', 'Agenda des rendez-vous par secteur, avec l’état des débriefs', 'Appointment calendar by area, with debrief status', 'Agenda des rendez-vous commerciaux dans Velora', 'Sales appointment calendar in Velora'),
    ('11-statistiques.webp', 'Statistiques : appels, qualifiés, ventes et chiffre d’affaires signé', 'Analytics: calls, qualified leads, sales and signed revenue', 'Page de statistiques commerciales de Velora', 'Velora sales analytics page'),
    ('20-statistiques-sombre.webp', 'Les mêmes statistiques en thème sombre', 'The same analytics in dark mode', 'Statistiques Velora en thème sombre', 'Velora analytics in dark mode'),
    ('14-parametres-equipe.webp', 'Gestion de l’équipe : rôles, statut et lien avec GoHighLevel', 'Team management: roles, status and GoHighLevel link', 'Gestion de l’équipe dans Velora', 'Team management in Velora'),
    ('01-accueil.webp', 'Page d’accueil de Velora : « Pilotez vos prospects »', 'Velora home page: “Steer your prospects”', 'Page d’accueil du CRM Velora, fond sombre et anneau lumineux', 'Velora CRM landing page with a dark background and glowing ring'),
    ('02-accueil-suite.webp', 'Les modules du CRM : leads, rendez-vous, installation, finances, statistiques, équipes', 'CRM modules: leads, appointments, installation, finances, analytics, teams', 'Présentation des modules du CRM Velora', 'Overview of the Velora CRM modules'),
    ('code-01-client-crm-reessais.webp', 'Code : client API GoHighLevel avec réessais et gestion du quota', 'Code: GoHighLevel API client with retries and rate-limit handling', 'Extrait de code TypeScript du client API GoHighLevel de Velora', 'TypeScript excerpt of the Velora GoHighLevel API client'),
    ('code-02-agregats-lead.webp', 'Code : recalcul des agrégats d’un lead dans Convex', 'Code: recomputing a lead’s aggregates in Convex', 'Extrait de code Convex qui calcule les agrégats d’un lead', 'Convex code excerpt computing a lead’s aggregates'),
  ])

projet('tracify', kind='web', featured=2, order=2, year='2026', url='https://tracify-eta.vercel.app',
  stack=['React 19', 'TanStack Start', 'Convex', 'Meta Ads API', 'Tailwind CSS 4', 'Vercel'],
  fr=dict(title='Tracify', client='Agence de marketing digital', role='Conception, développement full stack',
    tagline='La plateforme de suivi publicitaire d’une agence : dépenses Meta Ads, prospects et coût par prospect de chaque client, en direct.',
    context='L’agence gérait les campagnes Meta de nombreux clients. Les chiffres étaient éparpillés entre le gestionnaire de publicités, le CRM et des exports, et chaque client demandait ses résultats par message.',
    built='Une application TanStack Start + Convex : vue d’ensemble de l’agence (dépense, prospects, coût par prospect sur 30 jours comparés à la période précédente), fiche par client, détection automatique des campagnes Meta, performance de chaque publicité, kanban des prospects alimenté par webhook et synchronisation GoHighLevel, et un portail client en lecture seule ouvert par code d’accès. Connexion Google pour l’équipe.',
    result='L’équipe pilote toutes les campagnes depuis un seul écran, et chaque client consulte lui-même ses chiffres et ses prospects dans son portail.',
    seoTitle='Tracify — plateforme de suivi Meta Ads multi-clients | Cas',
    seoDescription='Étude de cas : Tracify, plateforme de suivi publicitaire pour agence. Dépenses Meta Ads, prospects, coût par lead, portail client. TanStack Start et Convex.',
    body='## Points techniques\n\n- **Webhook de leads** tolérant : accepte les formats de plusieurs outils (formulaires, GoHighLevel, Make) et la clé dans le corps, l’URL ou l’en-tête.\n- **Codes d’accès client** uniques, révocables, sans compte à créer.\n- **Graphiques SVG faits main**, légers et lisibles sur mobile.'),
  en=dict(title='Tracify', client='Digital marketing agency', role='Design, full-stack development',
    tagline='An agency’s ad-tracking platform: Meta Ads spend, leads and cost per lead for every client, live.',
    context='The agency ran Meta campaigns for many clients. Numbers were scattered across Ads Manager, the CRM and exports, and every client asked for results by message.',
    built='A TanStack Start + Convex app: agency overview (spend, leads, cost per lead over 30 days vs the previous period), a page per client, automatic detection of Meta campaigns, per-ad performance, a lead kanban fed by webhook and GoHighLevel sync, and a read-only client portal opened with an access code. Google sign-in for the team.',
    result='The team steers every campaign from a single screen, and each client checks their own numbers and leads in their portal.',
    seoTitle='Tracify — multi-client Meta Ads tracking platform | Case study',
    seoDescription='Case study: Tracify, an ad-tracking platform for agencies. Meta Ads spend, leads, cost per lead and client portal, built with TanStack Start and Convex.',
    body='## Technical highlights\n\n- **Tolerant lead webhook**: accepts payloads from several tools (forms, GoHighLevel, Make) and the key in body, URL or header.\n- **Client access codes**: unique, revocable, no account needed.\n- **Hand-made SVG charts**, lightweight and readable on mobile.'),
  gallery=[
    ('10-vue-ensemble-agence.webp', 'Vue d’ensemble de l’agence : dépense, prospects, coût par prospect et derniers leads à traiter', 'Agency overview: spend, leads, cost per lead and latest leads to handle', 'Tableau de bord Tracify avec les indicateurs de l’agence (données fictives)', 'Tracify dashboard with agency KPIs (demo data)'),
    ('11-graphiques-et-clients.webp', 'Dépense quotidienne, prospects par jour et tableau des clients', 'Daily spend, leads per day and client table', 'Graphiques et tableau des clients dans Tracify', 'Charts and client table in Tracify'),
    ('12-fiche-client.webp', 'Fiche client : pipeline des prospects, état du compte et campagnes', 'Client page: lead pipeline, account status and campaigns', 'Fiche d’un client fictif dans Tracify', 'Demo client page in Tracify'),
    ('14-campagne-performance.webp', 'Performance d’une campagne Meta : impressions, clics, CTR, CPC', 'Meta campaign performance: impressions, clicks, CTR, CPC', 'Indicateurs de performance d’une campagne Meta dans Tracify', 'Meta campaign KPIs in Tracify'),
    ('15-creatives-performantes.webp', 'Les publicités les plus performantes et le kanban des prospects', 'Top-performing ads and the lead kanban', 'Classement des publicités et kanban des prospects dans Tracify', 'Ad ranking and lead kanban in Tracify'),
    ('16-portail-client.webp', 'Portail client en lecture seule, ouvert par code d’accès', 'Read-only client portal opened with an access code', 'Portail client Tracify avec indicateurs et graphiques', 'Tracify client portal with KPIs and charts'),
    ('17-portail-client-prospects.webp', 'Le client suit ses prospects, filtrables par campagne', 'Clients follow their leads, filterable by campaign', 'Kanban des prospects dans le portail client Tracify', 'Lead kanban in the Tracify client portal'),
    ('18-mobile-vue-ensemble.webp', 'Vue d’ensemble sur mobile', 'Overview on mobile', 'Tracify sur mobile : vue d’ensemble', 'Tracify on mobile: overview'),
    ('19-mobile-portail-client.webp', 'Portail client sur mobile', 'Client portal on mobile', 'Tracify sur mobile : portail client', 'Tracify on mobile: client portal'),
    ('01-accueil.webp', 'Page d’accueil publique de Tracify', 'Tracify public landing page', 'Page d’accueil de la plateforme Tracify', 'Tracify platform landing page'),
    ('code-01-webhook-leads.webp', 'Code : webhook de réception des leads (Convex)', 'Code: lead intake webhook (Convex)', 'Extrait de code du webhook de leads de Tracify', 'Tracify lead webhook code excerpt'),
    ('code-02-code-acces-client.webp', 'Code : génération d’un code d’accès client unique', 'Code: generating a unique client access code', 'Extrait de code de génération des codes d’accès Tracify', 'Tracify access code generation excerpt'),
  ])

projet('atlas', kind='web', featured=3, order=3, year='2026', url='https://atlas-mdb.com',
  stack=['React 19', 'TanStack Start', 'Convex', 'Cloudflare Workers', 'API IGN', 'Slack API'],
  fr=dict(title='Atlas', client='Atlas — réseau de marchands de biens', role='Développement full stack, back-office, mise en production',
    tagline='La plateforme des marchands de biens : dépôt d’opportunité, simulation de marge en 3 minutes, étude des dossiers et suivi jusqu’à la commercialisation.',
    context='Atlas reçoit des opportunités immobilières de marchands de biens partout en France. Les dossiers arrivaient incomplets, par email, et l’équipe perdait du temps à trier ceux qui ne respectaient pas ses critères.',
    built='Une simulation en 4 étapes (adresse géolocalisée avec la vue IGN, chiffres, avancement) qui produit un rapport d’éligibilité noté sur 100 avec estimation de revente ; un dépôt de dossier complet (pièces, photos avec conversion HEIC, plans, budget travaux) ; un espace marchand pour suivre ses dossiers ; et un back-office : file de travail par priorité, prospects avec rail de filtres, instruction des dossiers, dispositifs fiscaux (Denormandie, Malraux), équipe, emails et alertes Slack.',
    result='Les dossiers arrivent complets et déjà notés. L’équipe est alertée en temps réel et se concentre sur les opérations qui entrent dans ses critères.',
    seoTitle='Atlas — plateforme pour marchands de biens | Étude de cas',
    seoDescription='Étude de cas : Atlas, plateforme web pour marchands de biens. Dépôt d’opportunités, simulation de marge, back-office et alertes Slack, React et Convex.',
    body='## Points techniques\n\n- **Grille de notation** de l’opération codée et testée, avec critères éliminatoires.\n- **Alertes d’équipe** par email et Slack, avec désinscription individuelle.\n- **Photos HEIC** (iPhone) converties en JPEG à l’envoi, aperçus compris.'),
  en=dict(title='Atlas', client='Atlas — property dealer network', role='Full-stack development, back-office, production launch',
    tagline='A platform for property dealers: submit a deal, get a margin simulation in 3 minutes, then review and follow it through to sale.',
    context='Atlas receives property deals from dealers all over France. Files arrived incomplete, by email, and the team wasted time sorting out those that did not meet its criteria.',
    built='A 4-step simulation (geolocated address with IGN aerial view, figures, progress) that produces an eligibility report scored out of 100 with a resale estimate; full deal submission (documents, photos with HEIC conversion, plans, works budget); a dealer area to track deals; and a back-office: priority work queue, prospects with a filter rail, deal review, French tax schemes (Denormandie, Malraux), team, emails and Slack alerts.',
    result='Deals arrive complete and already scored. The team gets real-time alerts and focuses on deals that match its criteria.',
    seoTitle='Atlas — platform for property dealers | Case study',
    seoDescription='Case study: Atlas, a web platform for property dealers. Deal submission, margin simulation, back-office and Slack alerts, built with React and Convex.',
    body='## Technical highlights\n\n- **Scoring grid** for each deal, coded and tested, with knock-out criteria.\n- **Team alerts** by email and Slack, with per-person opt-out.\n- **HEIC photos** (iPhone) converted to JPEG on upload, previews included.'),
  gallery=[
    ('11-simulation-resultat.webp', 'Rapport de simulation : synthèse du bien, hypothèses, verdict « Éligible » et estimation de revente', 'Simulation report: property summary, assumptions, “Eligible” verdict and resale estimate', 'Rapport de simulation d’une opération immobilière sur Atlas (données fictives)', 'Property deal simulation report on Atlas (demo data)'),
    ('10-simulation-etape-bien.webp', 'Simulation, étape 1 : adresse reconnue, vue IGN, surface et lots', 'Simulation step 1: recognised address, IGN aerial view, area and units', 'Première étape de la simulation Atlas avec vue aérienne', 'First step of the Atlas simulation with aerial view'),
    ('12-depot-dossier-pieces.webp', 'Dépôt du dossier : photos, documents et taux de complétude', 'Deal submission: photos, documents and completion rate', 'Formulaire de dépôt de dossier Atlas', 'Atlas deal submission form'),
    ('13-admin-prospects-filtres.webp', 'Back-office : prospects avec rail de filtres, notes et signes « Hors critères »', 'Back-office: prospects with filter rail, scores and “out of criteria” flags', 'Liste des prospects dans le back-office Atlas', 'Prospect list in the Atlas back-office'),
    ('14-admin-fiche-dossier.webp', 'Instruction d’un dossier : statut, pièces reçues ou manquantes, dispositifs fiscaux', 'Deal review: status, received or missing documents, tax schemes', 'Fiche dossier dans le back-office Atlas', 'Deal page in the Atlas back-office'),
    ('16-espace-marchand.webp', 'Espace marchand : dossiers, pièces à compléter et suivi', 'Dealer area: deals, documents to complete and tracking', 'Tableau de bord de l’espace marchand Atlas', 'Atlas dealer area dashboard'),
    ('01-accueil.webp', 'Page d’accueil : « Augmentez votre marge. Sans gérer un seul chantier. »', 'Home page: “Grow your margin without running a single build site.”', 'Page d’accueil de la plateforme Atlas pour marchands de biens', 'Atlas platform home page for property dealers'),
    ('02-accueil-suite.webp', 'Le fonctionnement en cinq étapes', 'How it works, in five steps', 'Les cinq étapes du parcours Atlas', 'The five steps of the Atlas journey'),
    ('04-prototype.webp', 'La démonstration « Atlas, en une minute »', 'The “Atlas in one minute” demo', 'Démonstration interactive d’Atlas', 'Interactive Atlas demo'),
    ('03-mobile.webp', 'Version mobile', 'Mobile version', 'Atlas sur mobile', 'Atlas on mobile'),
    ('code-01-grille-notation.webp', 'Code : évaluation d’une opération selon la grille de notation', 'Code: scoring a deal against the grid', 'Extrait de code de la grille de notation Atlas', 'Atlas scoring grid code excerpt'),
    ('code-02-alertes-equipe.webp', 'Code : alertes email de l’équipe avec désinscription', 'Code: team email alerts with opt-out', 'Extrait de code des alertes d’équipe Atlas', 'Atlas team alerts code excerpt'),
  ])

# ---------------------------------------------------------------- WEB
projet('simulateur-solaire', kind='web', order=4, year='2026', url='https://simulateur.electroconceptoi.com',
  stack=['React', 'Vite', 'TypeScript', 'Render'],
  fr=dict(title='Simulateur solaire', client='Electro Concept OI — La Réunion', role='Développement, intégration au tunnel publicitaire',
    tagline='Un simulateur d’économies solaires en une minute, branché sur les publicités et le CRM.',
    context='Les publicités Facebook de l’installateur envoyaient vers un simple formulaire. Les visiteurs voulaient d’abord savoir combien ils pouvaient économiser.',
    built='Un simulateur en quelques questions (logement, facture, toiture) qui affiche une estimation d’économies et d’aides, puis transmet le contact qualifié au CRM Velora.',
    result='Le prospect arrive dans le CRM avec ses réponses, et le commercial prépare son appel en connaissant déjà le projet.',
    seoTitle='Simulateur solaire en ligne — React | Mario Ratiarivony',
    seoDescription='Simulateur d’économies solaires développé en React pour un installateur à La Réunion : estimation en une minute, intégré aux publicités et au CRM.'),
  en=dict(title='Solar simulator', client='Electro Concept OI — Réunion Island', role='Development, ad funnel integration',
    tagline='A one-minute solar savings simulator, wired into the ads and the CRM.',
    context='The installer’s Facebook ads sent people to a plain form. Visitors first wanted to know how much they could save.',
    built='A short simulator (home, bill, roof) that shows estimated savings and grants, then hands the qualified contact over to the Velora CRM.',
    result='Prospects land in the CRM with their answers, so sales reps prepare the call already knowing the project.',
    seoTitle='Online solar savings simulator — React | Mario Ratiarivony',
    seoDescription='Solar savings simulator built with React for an installer in Réunion Island: a one-minute estimate, connected to the ad funnel and the CRM.'),
  gallery=[
    ('01-accueil.webp', 'Écran d’accueil : « Votre simulation solaire gratuite en 1 minute »', 'Start screen: “Your free solar simulation in 1 minute”', 'Écran d’accueil du simulateur solaire Electro Concept OI', 'Electro Concept OI solar simulator start screen'),
  ])

projet('velvet-escapes', kind='web', order=5, year='2026', url='https://velvet-escapes.com',
  stack=['React', 'Vite', 'i18n', 'Hostinger'],
  fr=dict(title='Velvet Escapes', client='Velvet Escapes — voyages premium', role='Développement front-end, contenus, mise en ligne',
    tagline='Le site d’une agence de voyages premium en Europe et au Brésil : destinations, resorts et demandes sur mesure.',
    context='Une agence de voyages haut de gamme avait besoin d’un site à la hauteur de ses destinations, en plusieurs langues, qui donne envie de prendre contact.',
    built='Un site React aux codes du luxe : grandes images, typographie fine, fiches destination et resort, sélecteur de langue et formulaire de contact avec envoi par WhatsApp ou email.',
    result='Un site élégant et rapide sur mobile, sur lequel l’agence ajoute ses nouvelles destinations.',
    seoTitle='Velvet Escapes — site d’agence de voyages premium | Cas',
    seoDescription='Étude de cas : site React pour Velvet Escapes, agence de voyages premium. Fiches destinations et resorts, multilingue, contact WhatsApp et email.'),
  en=dict(title='Velvet Escapes', client='Velvet Escapes — premium travel', role='Front-end development, content, launch',
    tagline='Website for a premium travel agency in Europe and Brazil: destinations, resorts and tailor-made requests.',
    context='A high-end travel agency needed a site that matched its destinations, in several languages, and made people want to get in touch.',
    built='A React site with luxury codes: large imagery, refined typography, destination and resort pages, a language switcher and a contact form that sends through WhatsApp or email.',
    result='An elegant site that is fast on mobile, where the agency adds new destinations.',
    seoTitle='Velvet Escapes — premium travel agency website | Case study',
    seoDescription='Case study: React website for Velvet Escapes, a premium travel agency. Destination and resort pages, multilingual, WhatsApp and email contact.'),
  gallery=[
    ('01-accueil.webp', 'Accueil : « Où le luxe, le désir et l’évasion se rencontrent »', 'Home: “Where luxury, desire and escape meet”', 'Page d’accueil du site Velvet Escapes', 'Velvet Escapes home page'),
    ('02-accueil-suite.webp', 'Présentation de l’agence', 'About the agency', 'Section de présentation de Velvet Escapes', 'Velvet Escapes about section'),
    ('10-fiche-destination.webp', 'Fiche destination : Alter do Chão, Amazonie', 'Destination page: Alter do Chão, Amazon', 'Fiche destination Alter do Chão sur Velvet Escapes', 'Alter do Chão destination page on Velvet Escapes'),
    ('11-fiche-resort.webp', 'Fiche resort : projet en développement au Brésil', 'Resort page: project in development in Brazil', 'Fiche d’un resort au Brésil sur Velvet Escapes', 'Brazil resort page on Velvet Escapes'),
    ('12-formulaire-contact.webp', 'Formulaire de contact : envoi par WhatsApp ou email', 'Contact form: send through WhatsApp or email', 'Formulaire de contact Velvet Escapes', 'Velvet Escapes contact form'),
    ('03-mobile.webp', 'Accueil sur mobile', 'Home on mobile', 'Velvet Escapes sur mobile', 'Velvet Escapes on mobile'),
    ('13-mobile-fiche-destination.webp', 'Fiche destination sur mobile', 'Destination page on mobile', 'Fiche destination Velvet Escapes sur mobile', 'Velvet Escapes destination page on mobile'),
  ])

projet('greengarden-lodge', kind='web', order=6, year='2026', url=None,
  stack=['React 19', 'Vite', 'CSS sur mesure', 'Optimisation d’images'],
  fr=dict(title='GreenGarden Lodge', client='Écolodge à Nosy Be, Madagascar', role='Design, développement, traitement des photos',
    tagline='Le site vitrine d’un écolodge à Nosy Be : bungalows, galerie filtrable de plus de 200 photos et demande de réservation.',
    context='Le lodge n’avait que des photos sur WhatsApp et une page Facebook. Il voulait un vrai site pour recevoir des réservations en direct.',
    built='Un site React rapide : accueil immersif, chambres et formules avec tarifs 2026, excursions, galerie de 213 photos compressées et filtrables par catégorie, formulaire de demande de réservation et version mobile soignée.',
    result='Un site qui met enfin le lodge en valeur, léger malgré plus de 200 photos, et prêt à être relié à un outil de réservation.',
    seoTitle='GreenGarden Lodge — site d’écolodge à Nosy Be (React)',
    seoDescription='Site vitrine React pour un écolodge à Nosy Be, Madagascar : bungalows, tarifs, galerie de 213 photos filtrable et formulaire de réservation.'),
  en=dict(title='GreenGarden Lodge', client='Eco-lodge in Nosy Be, Madagascar', role='Design, development, photo processing',
    tagline='Showcase website for an eco-lodge in Nosy Be: bungalows, a filterable gallery of 200+ photos and booking requests.',
    context='The lodge only had photos on WhatsApp and a Facebook page. It wanted a real website to take direct bookings.',
    built='A fast React site: immersive home page, rooms and packages with prices, a gallery of 213 compressed photos sorted by category, a booking form and a polished mobile version.',
    result='A site that finally showcases the lodge, lightweight despite 200+ photos, and ready to plug into a booking tool.',
    seoTitle='GreenGarden Lodge — eco-lodge website in Nosy Be (React)',
    seoDescription='React showcase website for an eco-lodge in Nosy Be, Madagascar: bungalows, prices, a filterable 213-photo gallery and a booking request form.'),
  gallery=[
    ('01-accueil.webp', 'Accueil : « Votre refuge tropical au cœur de l’île aux parfums »', 'Home: “Your tropical hideaway on the island of perfumes”', 'Page d’accueil du site GreenGarden Lodge', 'GreenGarden Lodge home page'),
    ('02-bungalows.webp', 'Chambres et formules avec tarifs', 'Rooms and packages with prices', 'Chambres et formules de GreenGarden Lodge', 'GreenGarden Lodge rooms and packages'),
    ('03-galerie.webp', 'Galerie filtrable : piscine, bungalows, chambres, restaurant, jardin', 'Filterable gallery: pool, bungalows, rooms, restaurant, garden', 'Galerie photo filtrable de GreenGarden Lodge', 'GreenGarden Lodge filterable photo gallery'),
    ('04-reservation.webp', 'Demande de réservation', 'Booking request', 'Formulaire de réservation de GreenGarden Lodge', 'GreenGarden Lodge booking form'),
    ('05-mobile-accueil.webp', 'Accueil sur mobile', 'Home on mobile', 'GreenGarden Lodge sur mobile', 'GreenGarden Lodge on mobile'),
    ('06-mobile-bungalows.webp', 'Hébergements sur mobile', 'Rooms on mobile', 'Hébergements GreenGarden Lodge sur mobile', 'GreenGarden Lodge rooms on mobile'),
  ])

projet('campus', kind='web', order=7, year='2026', url=None,
  stack=['Vue 3', 'Node.js', 'Express 5', 'MongoDB', 'JWT', 'Docker'],
  fr=dict(title='Campus', client='Projet personnel — plateforme de formation', role='Conception et développement full stack (MEVN)',
    tagline='Une plateforme de cours en ligne : catalogue, chapitres, quiz notés, progression et certificats vérifiables.',
    context='Construire une plateforme d’apprentissage complète, côté élève comme côté enseignant, avec un vrai contrôle des droits.',
    built='Une API Express et MongoDB (authentification JWT, cours, chapitres, quiz, progression, certificats) et une interface Vue 3 : catalogue, lecteur de cours, quiz, vérification publique d’un certificat par code, espace enseignant avec suivi des élèves, thème clair et sombre.',
    result='Une plateforme fonctionnelle de bout en bout, où un enseignant ne peut modifier que ses propres cours.',
    seoTitle='Campus — plateforme e-learning MEVN (Vue, Node, MongoDB)',
    seoDescription='Campus, plateforme de cours en ligne développée en Vue 3, Express et MongoDB : quiz, progression, certificats vérifiables et espace enseignant.'),
  en=dict(title='Campus', client='Personal project — learning platform', role='Full-stack design and development (MEVN)',
    tagline='An online course platform: catalogue, chapters, graded quizzes, progress tracking and verifiable certificates.',
    context='Build a complete learning platform, for students and teachers, with proper access control.',
    built='An Express and MongoDB API (JWT auth, courses, chapters, quizzes, progress, certificates) and a Vue 3 interface: catalogue, course reader, quizzes, public certificate verification by code, a teacher area with student tracking, light and dark themes.',
    result='A working end-to-end platform where teachers can only edit their own courses.',
    seoTitle='Campus — MEVN e-learning platform (Vue, Node, MongoDB)',
    seoDescription='Campus, an online course platform built with Vue 3, Express and MongoDB: quizzes, progress tracking, verifiable certificates and a teacher area.'),
  gallery=[
    ('07-tableau-de-bord-sombre.webp', 'Tableau de bord de l’élève, thème sombre', 'Student dashboard, dark theme', 'Tableau de bord élève de Campus en thème sombre', 'Campus student dashboard in dark theme'),
    ('01-catalogue.webp', 'Catalogue des cours avec progression', 'Course catalogue with progress', 'Catalogue des cours de la plateforme Campus', 'Campus course catalogue'),
    ('02-lecture-cours.webp', 'Lecture d’un chapitre avec exemples de code', 'Reading a chapter with code examples', 'Lecteur de cours Campus', 'Campus course reader'),
    ('03-quiz.webp', 'Quiz noté', 'Graded quiz', 'Quiz dans la plateforme Campus', 'Quiz in the Campus platform'),
    ('05-espace-enseignant-suivi.webp', 'Espace enseignant : suivi des élèves inscrits', 'Teacher area: tracking enrolled students', 'Espace enseignant de Campus', 'Campus teacher area'),
    ('04-certificat.webp', 'Vérification publique d’un certificat', 'Public certificate verification', 'Vérification d’un certificat Campus', 'Campus certificate verification'),
    ('06-mobile-catalogue.webp', 'Catalogue sur mobile', 'Catalogue on mobile', 'Campus sur mobile', 'Campus on mobile'),
  ])

projet('seo-pcmi-plans', kind='web', order=8, year='2026', url='https://pcmi-plans.fr',
  stack=['WordPress', 'Bricks Builder', 'Rank Math Pro', 'Schema.org', 'Search Console'],
  fr=dict(title='SEO PCMI Plans', client='PCMI Plans — plans de permis de construire', role='Audit et optimisation SEO technique',
    tagline='Audit et optimisation SEO d’un site WordPress de plans pour permis de construire.',
    context='Le site d’un dessinateur de plans de maisons était peu visible sur Google : descriptions en double entre deux extensions, pages sans mots-clés cibles, données structurées incomplètes.',
    built='Audit complet, suppression des balises en double, titres et descriptions réécrits pour chaque page autour de trois mots-clés cibles, données structurées, indexation et suivi dans la Search Console, sans toucher au design ni aux textes.',
    result='Une base SEO propre : une seule description par page, 30 pages ciblées sur des recherches réelles de clients.',
    seoTitle='SEO WordPress — audit et optimisation PCMI Plans | Cas',
    seoDescription='Étude de cas SEO : audit et optimisation d’un site WordPress (Bricks, Rank Math) de plans de permis de construire. Méta, schéma et indexation.'),
  en=dict(title='SEO for PCMI Plans', client='PCMI Plans — building permit plans', role='Technical SEO audit and optimisation',
    tagline='SEO audit and optimisation of a WordPress site selling building permit plans.',
    context='A house-plan designer’s site was barely visible on Google: duplicate descriptions from two plugins, pages without target keywords, incomplete structured data.',
    built='Full audit, duplicate tags removed, titles and descriptions rewritten for every page around three target keywords, structured data, indexing and Search Console follow-up, without touching design or copy.',
    result='A clean SEO base: one description per page, 30 pages targeting real customer searches.',
    seoTitle='WordPress SEO — PCMI Plans audit & optimisation | Case',
    seoDescription='SEO case study: audit and optimisation of a WordPress site (Bricks, Rank Math) selling building permit plans. Meta tags, schema and indexing.'),
  gallery=[
    ('01-accueil.webp', 'Le site PCMI Plans optimisé', 'The optimised PCMI Plans site', 'Page d’accueil du site PCMI Plans', 'PCMI Plans home page'),
  ])


projet('mada-skills', kind='web', order=9, year='2026', url=None,
  stack=['React 19', 'Django REST', 'Tailwind CSS 4', 'JWT', 'n8n', 'API LLM'],
  fr=dict(title='Mada Skills', client='Hackathon DataDay 2026 — équipe Zenith', role='Développement full stack en équipe',
    tagline='Révéler les talents malgaches sans diplôme : quiz quotidiens, coach IA, missions et certificats d’entreprise vérifiables.',
    context='À Madagascar, beaucoup de soudeurs, couturières ou développeurs autodidactes n’ont pas de diplôme pour prouver leur niveau aux entreprises.',
    built='Une plateforme React + Django REST : quiz quotidiens générés par IA (QCM, réponse écrite, code), XP et taux de réussite, place de marché des talents, missions publiées par des entreprises, messagerie, et certificats vérifiables par code ou QR code. Les traitements IA passent par des workflows n8n.',
    result='Un produit complet présenté au hackathon, du parcours candidat jusqu’à la certification par l’entreprise.',
    seoTitle='Mada Skills — plateforme de talents à Madagascar (React, Django)',
    seoDescription='Mada Skills, plateforme qui certifie les talents malgaches sans diplôme : quiz générés par IA, missions, messagerie et certificats vérifiables.'),
  en=dict(title='Mada Skills', client='DataDay 2026 hackathon — team Zenith', role='Full-stack development in a team',
    tagline='Revealing Malagasy talent without degrees: daily quizzes, an AI coach, missions and verifiable company certificates.',
    context='In Madagascar, many self-taught welders, tailors and developers have no diploma to prove their skills to employers.',
    built='A React + Django REST platform: daily AI-generated quizzes (multiple choice, written answers, code), XP and success rate, a talent marketplace, missions posted by companies, messaging, and certificates verifiable by code or QR code. AI processing runs through n8n workflows.',
    result='A complete product presented at the hackathon, from the candidate journey to company certification.',
    seoTitle='Mada Skills — talent platform in Madagascar (React, Django)',
    seoDescription='Mada Skills, a platform that certifies Malagasy talent without degrees: AI-generated quizzes, missions, messaging and verifiable certificates.'),
  gallery=[
    ('02-tableau-de-bord.webp', 'Tableau de bord du talent : XP, réussite, scores et profil certifié', 'Talent dashboard: XP, success rate, scores and certified profile', 'Tableau de bord d’une candidate sur Mada Skills (données fictives)', 'Candidate dashboard on Mada Skills (demo data)'),
    ('01-accueil.webp', 'Accueil : « Le talent n’attend pas le diplôme »', 'Home: “Talent doesn’t wait for a diploma”', 'Page d’accueil de Mada Skills', 'Mada Skills home page'),
    ('03-talents.webp', 'Place de marché des talents certifiés', 'Marketplace of certified talent', 'Place de marché des talents Mada Skills', 'Mada Skills talent marketplace'),
    ('04-quiz.webp', 'Quiz du jour : QCM, réponse écrite et code', 'Daily quiz: multiple choice, written answer and code', 'Quiz quotidien sur Mada Skills', 'Daily quiz on Mada Skills'),
    ('05-messages.webp', 'Messagerie autour d’une mission', 'Messaging about a mission', 'Messagerie Mada Skills', 'Mada Skills messaging'),
    ('06-certificat-verifie.webp', 'Vérification publique d’un certificat d’entreprise', 'Public verification of a company certificate', 'Certificat vérifié sur Mada Skills', 'Verified certificate on Mada Skills'),
    ('07-mobile-tableau-de-bord.webp', 'Tableau de bord sur mobile', 'Dashboard on mobile', 'Mada Skills sur mobile', 'Mada Skills on mobile'),
  ])

# ---------------------------------------------------------------- IA
projet('agent-ia-transport', kind='ia', order=20, year='2026', url=None,
  stack=['Python', 'API LLM', 'Slack API', 'API REST métier', 'Linux / systemd'],
  fr=dict(title='Agent IA pour une société de transport', client='Société de transport de personnes, Paris (anonymisée)', role='Conception et développement de l’agent, intégration au logiciel métier',
    tagline='Un assistant qui lit les emails de réservation, prépare les courses, devis et factures dans le logiciel métier et les fait valider sur Slack.',
    context='L’équipe recevait chaque jour des dizaines d’emails de clients (réservations, modifications, demandes de devis) et ressaisissait tout à la main dans son logiciel de gestion des courses.',
    built='Un agent qui classe chaque email, extrait les informations utiles et prépare la création dans le logiciel métier. Rien ne part sans validation : l’équipe reçoit un aperçu sur Slack avec des boutons « valider » ou « corriger ». Des garde-fous bloquent toute information absente du mail (heure, adresse), et un registre de règles métier rejoue les cas passés pour éviter les régressions.',
    result='Les demandes sont préparées automatiquement. L’équipe vérifie et valide au lieu de tout ressaisir, et les factures de fin de mois sont générées depuis le même outil.',
    seoTitle='Agent IA de réservation pour une société de transport | Cas',
    seoDescription='Étude de cas : agent IA qui lit les emails, crée réservations, devis et factures dans le logiciel métier d’un transporteur, avec validation sur Slack.',
    body='## Ce qui fait la fiabilité\n\n- **Validation humaine systématique** avant toute écriture dans le logiciel métier.\n- **Garde anti-invention** : chaque information doit venir du mail ou de l’historique, sinon l’agent pose la question.\n- **Banc de rejeu** : les erreurs passées deviennent des tests.\n\nLes captures montrent du code anonymisé : aucun nom de client, de passager ou de chauffeur.'),
  en=dict(title='AI agent for a transport company', client='Passenger transport company, Paris (anonymised)', role='Agent design and development, business software integration',
    tagline='An assistant that reads booking emails, prepares rides, quotes and invoices in the business software and gets them approved on Slack.',
    context='The team received dozens of client emails every day (bookings, changes, quote requests) and re-typed everything by hand into their ride management software.',
    built='An agent that classifies each email, extracts the useful details and prepares the record in the business software. Nothing is sent without approval: the team gets a Slack preview with “approve” or “fix” buttons. Guardrails block any detail missing from the email (time, address), and a rule registry replays past cases to prevent regressions.',
    result='Requests are prepared automatically. The team checks and approves instead of re-typing, and month-end invoices come out of the same tool.',
    seoTitle='AI booking agent for a transport company | Case study',
    seoDescription='Case study: an AI agent that reads emails and creates bookings, quotes and invoices in a transport company’s software, with approval on Slack.',
    body='## What makes it reliable\n\n- **Human approval every time** before anything is written to the business software.\n- **No-invention guard**: every detail must come from the email or history, otherwise the agent asks.\n- **Replay bench**: past mistakes become tests.\n\nScreenshots show anonymised code: no client, passenger or driver names.'),
  gallery=[
    ('code-01-aiguillage-mail.webp', 'Code : aiguillage d’un email (mission, administratif ou alerte)', 'Code: routing an email (ride, admin or alert)', 'Extrait de code Python de l’agent : classement des emails', 'Python agent code excerpt: email routing'),
    ('code-02-garde-anti-invention.webp', 'Code : garde qui refuse toute information absente du mail', 'Code: guard that rejects any detail missing from the email', 'Extrait de code Python : garde anti-invention', 'Python code excerpt: no-invention guard'),
    ('code-03-apercu-validation.webp', 'Code : boutons de validation de l’aperçu', 'Code: approval buttons on the preview', 'Extrait de code Python : boutons de validation', 'Python code excerpt: approval buttons'),
  ])

projet('prospection-b2b-automatisee', kind='ia', order=21, year='2026', url=None,
  stack=['n8n', 'Python', 'API d’enrichissement', 'Séquences email', 'Slack'],
  fr=dict(title='Prospection B2B automatisée', client='Agence de prospection B2B (plusieurs clients)', role='Workflows n8n, outillage Python, mise en service chez les clients',
    tagline='Un pipeline qui trouve, note et contacte les bons prospects pour chaque client, avec une surveillance qui alerte en cas de panne.',
    context='Une agence de prospection devait lancer des campagnes pour plusieurs clients sans refaire le même travail à chaque fois, et sans laisser une panne passer inaperçue.',
    built='Des modèles de workflows n8n réutilisables (sourcing, normalisation, dédoublonnage, notation, enrichissement sous plafond, envoi vers la plateforme d’emailing), une notation configurable par type d’acheteur et une surveillance qui envoie des alertes claires sur Slack.',
    result='Chaque nouveau client démarre à partir des mêmes briques testées. Les pannes sont signalées dès qu’elles arrivent, en langage clair.',
    seoTitle='Prospection B2B automatisée avec n8n | Étude de cas',
    seoDescription='Étude de cas : pipeline de prospection B2B automatisé avec n8n et Python. Sourcing, scoring, enrichissement, séquences email et alertes Slack.'),
  en=dict(title='Automated B2B prospecting', client='B2B prospecting agency (several clients)', role='n8n workflows, Python tooling, client roll-out',
    tagline='A pipeline that finds, scores and contacts the right prospects for each client, with monitoring that alerts on failures.',
    context='A prospecting agency had to launch campaigns for several clients without redoing the same work each time, and without missing a failure.',
    built='Reusable n8n workflow templates (sourcing, normalisation, de-duplication, scoring, capped enrichment, push to the emailing platform), configurable scoring per buyer type and monitoring that posts clear alerts to Slack.',
    result='Every new client starts from the same tested building blocks. Failures are reported as soon as they happen, in plain language.',
    seoTitle='Automated B2B prospecting with n8n | Case study',
    seoDescription='Case study: an automated B2B prospecting pipeline built with n8n and Python. Sourcing, scoring, enrichment, email sequences and Slack alerts.'),
  gallery=[
    ('code-01-scoring.webp', 'Code : notation d’un prospect selon le barème du client', 'Code: scoring a prospect against the client’s grid', 'Extrait de code Python de notation des prospects', 'Python prospect scoring code excerpt'),
    ('code-02-surveillance-alertes.webp', 'Code : surveillance et alertes (nouveau, rappel, résolu)', 'Code: monitoring and alerts (new, reminder, resolved)', 'Extrait de code Python de surveillance', 'Python monitoring code excerpt'),
  ])

projet('traducteur-alertes', kind='ia', order=22, year='2026', url=None,
  stack=['Python', 'API LLM', 'Webhooks Slack', 'systemd'],
  fr=dict(title='Traducteur d’alertes techniques', client='Agence de prospection B2B (outil interne)', role='Conception et développement',
    tagline='Un petit service qui transforme les alertes techniques brutes en messages clairs pour des clients non techniciens.',
    context='Les alertes des workflows étaient illisibles pour les clients (« HTTP 401 », traces d’erreur). Ils s’inquiétaient sans savoir quoi faire.',
    built='Un service qui reçoit l’alerte, la reformule en français simple avec le contexte du client (quel outil, quel impact, qui agit) grâce à un modèle de langage, et la publie dans le bon canal Slack. Si la traduction échoue, l’alerte brute part quand même : rien ne se perd.',
    result='Les clients comprennent ce qui se passe et l’équipe technique garde le détail sous le message.',
    seoTitle='Traduire des alertes techniques avec un LLM | Étude de cas',
    seoDescription='Étude de cas : service Python qui traduit les alertes techniques en messages clairs pour des clients non techniciens, avec un LLM et Slack.'),
  en=dict(title='Technical alert translator', client='B2B prospecting agency (internal tool)', role='Design and development',
    tagline='A small service that turns raw technical alerts into clear messages for non-technical clients.',
    context='Workflow alerts were unreadable for clients (“HTTP 401”, stack traces). They worried without knowing what to do.',
    built='A service that receives the alert, rewrites it in plain language with the client’s context (which tool, what impact, who acts) using a language model, and posts it to the right Slack channel. If translation fails, the raw alert still goes out: nothing is lost.',
    result='Clients understand what is going on, and the tech team keeps the details under the message.',
    seoTitle='Translating technical alerts with an LLM | Case study',
    seoDescription='Case study: a Python service that turns technical alerts into clear messages for non-technical clients, using a language model and Slack.'),
  gallery=[
    ('code-01-traduction-alerte.webp', 'Code : traduction d’une alerte avec repli sur l’alerte brute', 'Code: translating an alert, falling back to the raw alert', 'Extrait de code Python du traducteur d’alertes', 'Python alert translator code excerpt'),
  ])

# ---------------------------------------------------------------- ARCHIVES
def archive(slug, order, year, url, stack, fr, en, gallery):
  projet(slug, kind='archive', order=order, year=year, url=url, stack=stack, fr=fr, en=en, gallery=gallery)

archive('luxe-shirt', 30, '2025', 'https://luxyshop.netlify.app', ['React', 'Tailwind CSS'],
  dict(title='Luxe Shirt', client='Projet e-commerce', tagline='Boutique en ligne de chemises haut de gamme.',
    context='Une vitrine e-commerce à la hauteur de chemises haut de gamme.', built='Interface React et Tailwind : collections, fiches produits, animations discrètes, parcours d’achat simple.', result='Une boutique élégante, rapide et responsive.',
    seoTitle='Luxe Shirt — boutique e-commerce React | Mario Ratiarivony', seoDescription='Luxe Shirt, boutique en ligne de chemises haut de gamme réalisée en React et Tailwind CSS : collections, fiches produits et version mobile.'),
  dict(title='Luxe Shirt', client='E-commerce project', tagline='Online store for high-end shirts.',
    context='An e-commerce showcase worthy of premium shirts.', built='React and Tailwind interface: collections, product pages, subtle animations, a simple checkout flow.', result='An elegant, fast and responsive store.',
    seoTitle='Luxe Shirt — React e-commerce store | Mario Ratiarivony', seoDescription='Luxe Shirt, an online store for high-end shirts built with React and Tailwind CSS: collections, product pages and a mobile version.'),
  [('01-accueil.webp', 'Accueil de la boutique', 'Store home page', 'Page d’accueil de la boutique Luxe Shirt', 'Luxe Shirt store home page'),
   ('02-suite.webp', 'Collections', 'Collections', 'Collections de chemises Luxe Shirt', 'Luxe Shirt shirt collections'),
   ('03-mobile.webp', 'Version mobile', 'Mobile version', 'Boutique Luxe Shirt sur mobile', 'Luxe Shirt store on mobile')])

archive('kpop-shop', 31, '2025', 'https://kpopshop.netlify.app', ['React', 'Tailwind CSS', 'Stripe'],
  dict(title='K-Pop Shop', client='Projet e-commerce', tagline='Boutique de produits dérivés K-Pop : vêtements, accessoires, collections.',
    context='Un public passionné et un univers visuel fort.', built='React et Stripe : bandeau d’annonces, collections, panier et paiement sécurisé.', result='Une boutique de niche complète, du catalogue au paiement.',
    seoTitle='K-Pop Shop — boutique en ligne React et Stripe | Mario R.', seoDescription='K-Pop Shop, boutique de produits dérivés K-Pop réalisée en React, Tailwind CSS et Stripe : collections, panier, paiement sécurisé et mobile.'),
  dict(title='K-Pop Shop', client='E-commerce project', tagline='K-Pop merchandise store: apparel, accessories, collections.',
    context='A passionate audience and a strong visual universe.', built='React and Stripe: announcement bar, collections, cart and secure checkout.', result='A complete niche store, from catalogue to payment.',
    seoTitle='K-Pop Shop — React and Stripe online store | Mario R.', seoDescription='K-Pop Shop, a K-Pop merchandise store built with React, Tailwind CSS and Stripe: collections, cart, secure checkout and mobile version.'),
  [('01-accueil.webp', 'Accueil de la boutique', 'Store home page', 'Page d’accueil de K-Pop Shop', 'K-Pop Shop home page'),
   ('02-suite.webp', 'Mise en avant d’une collection', 'Featured collection', 'Collection mise en avant sur K-Pop Shop', 'Featured collection on K-Pop Shop'),
   ('03-mobile.webp', 'Version mobile', 'Mobile version', 'K-Pop Shop sur mobile', 'K-Pop Shop on mobile')])

archive('all-stone-mada', 32, '2024', 'https://allstonemada.netlify.app', ['React', 'C#', 'ASP.NET'],
  dict(title='All Stone Mada', client='Négociant en pierres précieuses, Madagascar', tagline='E-commerce de pierres précieuses de Madagascar.',
    context='Vendre en ligne des pierres certifiées, avec gestion du catalogue.', built='Front React, back C# / ASP.NET : catalogue, commandes et administration.', result='Un e-commerce complet relié à un vrai back-office.',
    seoTitle='All Stone Mada — e-commerce de pierres précieuses (React)', seoDescription='All Stone Mada, e-commerce de pierres précieuses de Madagascar : front React, back-office C# et ASP.NET pour le catalogue et les commandes.'),
  dict(title='All Stone Mada', client='Gemstone dealer, Madagascar', tagline='E-commerce for Madagascar gemstones.',
    context='Selling certified stones online, with catalogue management.', built='React front end, C# / ASP.NET back end: catalogue, orders and admin.', result='A complete store connected to a real back-office.',
    seoTitle='All Stone Mada — gemstone e-commerce (React, ASP.NET)', seoDescription='All Stone Mada, an e-commerce site for Madagascar gemstones: React front end with a C# and ASP.NET back-office for the catalogue and orders.'),
  [('01-accueil.webp', 'Accueil : « All Stones of Madagascar »', 'Home: “All Stones of Madagascar”', 'Page d’accueil All Stone Mada', 'All Stone Mada home page'),
   ('02-suite.webp', 'Les engagements : certification, rareté, traçabilité', 'Commitments: certification, rarity, traceability', 'Section engagements All Stone Mada', 'All Stone Mada commitments section'),
   ('03-mobile.webp', 'Version mobile', 'Mobile version', 'All Stone Mada sur mobile', 'All Stone Mada on mobile')])

archive('aveny-work', 33, '2024', 'https://avenywork.netlify.app', ['React', 'Django', 'Machine learning'],
  dict(title='Aveny Work', client='Projet personnel', tagline='Une plateforme d’orientation guidée par l’IA : une mission par jour pour trouver sa voie.',
    context='Aider des jeunes à découvrir un métier qui leur correspond.', built='Interface React illustrée, back Django avec suggestions générées par IA et tableau de bord.', result='Un parcours ludique et simple à prendre en main.',
    seoTitle='Aveny Work — plateforme d’orientation IA (React, Django)', seoDescription='Aveny Work, plateforme d’orientation guidée par l’IA : missions quotidiennes, suggestions de métiers et tableau de bord. React et Django.'),
  dict(title='Aveny Work', client='Personal project', tagline='An AI-guided career platform: one mission a day to find your path.',
    context='Helping young people find a job that suits them.', built='Illustrated React interface, Django back end with AI suggestions and a dashboard.', result='A playful journey that is easy to pick up.',
    seoTitle='Aveny Work — AI career guidance platform (React, Django)', seoDescription='Aveny Work, an AI-guided career platform: daily missions, job suggestions and a dashboard, built with React and Django by Mario Ratiarivony.'),
  [('01-accueil.webp', 'Accueil illustré', 'Illustrated home page', 'Page d’accueil illustrée d’Aveny Work', 'Aveny Work illustrated home page')])

archive('rise-platform', 34, '2024', 'https://riseplatform.netlify.app', ['React', 'C#', 'Temps réel'],
  dict(title='Rise Platform', client='Projet personnel', tagline='Un réseau social étudiant en temps réel : publications et messagerie.',
    context='Un espace d’échange pour étudiants.', built='Front React, back C# avec communication temps réel.', result='Une plateforme sociale fonctionnelle de bout en bout.',
    seoTitle='Rise Platform — réseau social étudiant temps réel (React)', seoDescription='Rise Platform, réseau social étudiant en temps réel : publications, messagerie et profils. Front React et back-end C# avec WebSockets.'),
  dict(title='Rise Platform', client='Personal project', tagline='A real-time student social network: posts and messaging.',
    context='A space for students to connect.', built='React front end, C# back end with real-time communication.', result='A working end-to-end social platform.',
    seoTitle='Rise Platform — real-time student social network (React)', seoDescription='Rise Platform, a real-time student social network: posts, messaging and profiles. React front end and a C# back end with WebSockets.'),
  [('01-accueil.webp', 'Écran de connexion', 'Sign-in screen', 'Écran de connexion de Rise Platform', 'Rise Platform sign-in screen')])

archive('madagiascar', 35, '2026', None, ['React', 'NestJS', 'API LLM'],
  dict(title='MadagIAscar', client='Projet personnel', tagline='Une plateforme d’IA pensée pour Madagascar : assistance, contenus et services locaux.',
    context='Rendre l’IA utile localement.', built='React et NestJS, intégration de modèles de langage et de contenus locaux.', result='Une plateforme opérationnelle, présentée en démonstration privée.',
    seoTitle='MadagIAscar — plateforme d’IA pour Madagascar (React, NestJS)', seoDescription='MadagIAscar, plateforme d’intelligence artificielle pensée pour Madagascar : assistance, contenus et services locaux. React, NestJS et LLM.'),
  dict(title='MadagIAscar', client='Personal project', tagline='An AI platform built for Madagascar: assistance, content and local services.',
    context='Making AI useful locally.', built='React and NestJS, language model integration and local content.', result='A working platform, shown in private demos.',
    seoTitle='MadagIAscar — AI platform for Madagascar (React, NestJS)', seoDescription='MadagIAscar, an artificial intelligence platform built for Madagascar: assistance, content and local services. React, NestJS and LLMs.'),
  [('01-accueil.webp', 'Interface de la plateforme', 'Platform interface', 'Interface de la plateforme MadagIAscar', 'MadagIAscar platform interface')])

# ---------------------------------------------------------------- GÉNÉRATION
ASSET = {'simulateur-solaire': 'simulateur', 'velvet-escapes': 'velvet', 'greengarden-lodge': 'greengarden', 'seo-pcmi-plans': 'pcmi',
         'agent-ia-transport': 'agent-transport', 'prospection-b2b-automatisee': 'prospection-b2b', 'luxe-shirt': 'luxy', 'kpop-shop': 'kpop',
         'all-stone-mada': 'allstone', 'aveny-work': 'aveny', 'rise-platform': 'rise'}

def q(s): return json.dumps(s, ensure_ascii=False)
errs = []
for p in P:
  folder = ASSET.get(p['slug'], p['slug'])
  for lang in ('fr', 'en'):
    d = p[lang]
    if not 25 <= len(d['seoTitle']) <= 65: errs.append(f"{p['slug']}/{lang} titre {len(d['seoTitle'])}")
    if not 110 <= len(d['seoDescription']) <= 165: errs.append(f"{p['slug']}/{lang} desc {len(d['seoDescription'])}")
    g = p['gallery']
    for it in g:
      if not os.path.exists(f"src/assets/projets/{folder}/{it[0]}"): errs.append(f"image manquante {folder}/{it[0]}")
    L = ['---', f"title: {q(d['title'])}", f"tagline: {q(d['tagline'])}", f"kind: {p['kind']}"]
    if p.get('featured'): L.append(f"featured: {p['featured']}")
    L += [f"order: {p['order']}", f"year: {q(p['year'])}", f"client: {q(d['client'])}"]
    if d.get('role'): L.append(f"role: {q(d['role'])}")
    L += [f"stack: {q(p['stack'])}", f"url: {q(p['url'])}",
          f"cover: {q(img(folder, g[0][0]))}", f"coverAlt: {q(g[0][3 if lang == 'fr' else 4])}", 'gallery:']
    for f, cfr, cen, afr, aen in g:
      L += [f"  - src: {q(img(folder, f))}", f"    alt: {q(afr if lang == 'fr' else aen)}", f"    caption: {q(cfr if lang == 'fr' else cen)}"]
    L += [f"context: {q(d['context'])}", f"built: {q(d['built'])}", f"result: {q(d['result'])}",
          f"seoTitle: {q(d['seoTitle'])}", f"seoDescription: {q(d['seoDescription'])}", '---', '', d.get('body', ''), '']
    os.makedirs(f'src/content/projets/{lang}', exist_ok=True)
    open(f"src/content/projets/{lang}/{p['slug']}.md", 'w').write('\n'.join(L))
if errs:
  print('\n'.join(errs)); sys.exit(1)
print(f'{len(P)} projets générés (FR+EN)')
