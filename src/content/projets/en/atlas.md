---
title: "Atlas"
tagline: "A platform for property dealers: submit a deal, get a margin simulation in 3 minutes, then review and follow it through to sale."
kind: web
featured: 3
order: 3
year: "2026"
client: "Atlas — property dealer network"
role: "Full-stack development, back-office, production launch"
stack: ["React 19", "TanStack Start", "Convex", "Cloudflare Workers", "API IGN", "Slack API"]
url: "https://atlas-mdb.com"
cover: "../../../assets/projets/atlas/11-simulation-resultat.webp"
coverAlt: "Property deal simulation report on Atlas (demo data)"
gallery:
  - src: "../../../assets/projets/atlas/11-simulation-resultat.webp"
    alt: "Property deal simulation report on Atlas (demo data)"
    caption: "Simulation report: property summary, assumptions, “Eligible” verdict and resale estimate"
  - src: "../../../assets/projets/atlas/10-simulation-etape-bien.webp"
    alt: "First step of the Atlas simulation with aerial view"
    caption: "Simulation step 1: recognised address, IGN aerial view, area and units"
  - src: "../../../assets/projets/atlas/12-depot-dossier-pieces.webp"
    alt: "Atlas deal submission form"
    caption: "Deal submission: photos, documents and completion rate"
  - src: "../../../assets/projets/atlas/13-admin-prospects-filtres.webp"
    alt: "Prospect list in the Atlas back-office"
    caption: "Back-office: prospects with filter rail, scores and “out of criteria” flags"
  - src: "../../../assets/projets/atlas/14-admin-fiche-dossier.webp"
    alt: "Deal page in the Atlas back-office"
    caption: "Deal review: status, received or missing documents, tax schemes"
  - src: "../../../assets/projets/atlas/16-espace-marchand.webp"
    alt: "Atlas dealer area dashboard"
    caption: "Dealer area: deals, documents to complete and tracking"
  - src: "../../../assets/projets/atlas/01-accueil.webp"
    alt: "Atlas platform home page for property dealers"
    caption: "Home page: “Grow your margin without running a single build site.”"
  - src: "../../../assets/projets/atlas/02-accueil-suite.webp"
    alt: "The five steps of the Atlas journey"
    caption: "How it works, in five steps"
  - src: "../../../assets/projets/atlas/04-prototype.webp"
    alt: "Interactive Atlas demo"
    caption: "The “Atlas in one minute” demo"
  - src: "../../../assets/projets/atlas/03-mobile.webp"
    alt: "Atlas on mobile"
    caption: "Mobile version"
  - src: "../../../assets/projets/atlas/code-01-grille-notation.webp"
    alt: "Atlas scoring grid code excerpt"
    caption: "Code: scoring a deal against the grid"
  - src: "../../../assets/projets/atlas/code-02-alertes-equipe.webp"
    alt: "Atlas team alerts code excerpt"
    caption: "Code: team email alerts with opt-out"
context: "Atlas receives property deals from dealers all over France. Files arrived incomplete, by email, and the team wasted time sorting out those that did not meet its criteria."
built: "A 4-step simulation (geolocated address with IGN aerial view, figures, progress) that produces an eligibility report scored out of 100 with a resale estimate; full deal submission (documents, photos with HEIC conversion, plans, works budget); a dealer area to track deals; and a back-office: priority work queue, prospects with a filter rail, deal review, French tax schemes (Denormandie, Malraux), team, emails and Slack alerts."
result: "Deals arrive complete and already scored. The team gets real-time alerts and focuses on deals that match its criteria."
seoTitle: "Atlas — platform for property dealers | Case study"
seoDescription: "Case study: Atlas, a web platform for property dealers. Deal submission, margin simulation, back-office and Slack alerts, built with React and Convex."
---

## Technical highlights

- **Scoring grid** for each deal, coded and tested, with knock-out criteria.
- **Team alerts** by email and Slack, with per-person opt-out.
- **HEIC photos** (iPhone) converted to JPEG on upload, previews included.
