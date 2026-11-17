---
title: "Velora"
tagline: "A sales CRM for a solar installer: leads, calls, appointments, sales and installations in one clear view."
kind: web
featured: 1
order: 1
year: "2026"
client: "Electro Concept OI — solar installer, Réunion Island"
role: "Design, full-stack development, production launch"
stack: ["React", "TypeScript", "Convex", "GoHighLevel API", "n8n", "Vercel"]
url: "https://velora.electroconceptoi.com"
cover: "../../../assets/projets/velora/10-tableau-de-bord.webp"
coverAlt: "Velora CRM dashboard (demo data)"
gallery:
  - src: "../../../assets/projets/velora/10-tableau-de-bord.webp"
    alt: "Velora CRM dashboard (demo data)"
    caption: "Overview: new leads, sales rate, calls, trend curve"
  - src: "../../../assets/projets/velora/12-prospects.webp"
    alt: "Lead list in Velora"
    caption: "Lead list with filters by status, last call and period"
  - src: "../../../assets/projets/velora/13-fiche-prospect.webp"
    alt: "Demo lead record in Velora"
    caption: "Lead record: contact details, attribution, history and sale debrief"
  - src: "../../../assets/projets/velora/16-appel-en-cours.webp"
    alt: "Live call screen in Velora"
    caption: "Call screen: timer and guided lead qualification"
  - src: "../../../assets/projets/velora/15-agenda-rdv.webp"
    alt: "Sales appointment calendar in Velora"
    caption: "Appointment calendar by area, with debrief status"
  - src: "../../../assets/projets/velora/11-statistiques.webp"
    alt: "Velora sales analytics page"
    caption: "Analytics: calls, qualified leads, sales and signed revenue"
  - src: "../../../assets/projets/velora/20-statistiques-sombre.webp"
    alt: "Velora analytics in dark mode"
    caption: "The same analytics in dark mode"
  - src: "../../../assets/projets/velora/14-parametres-equipe.webp"
    alt: "Team management in Velora"
    caption: "Team management: roles, status and GoHighLevel link"
  - src: "../../../assets/projets/velora/01-accueil.webp"
    alt: "Velora CRM landing page with a dark background and glowing ring"
    caption: "Velora home page: “Steer your prospects”"
  - src: "../../../assets/projets/velora/02-accueil-suite.webp"
    alt: "Overview of the Velora CRM modules"
    caption: "CRM modules: leads, appointments, installation, finances, analytics, teams"
  - src: "../../../assets/projets/velora/code-01-client-crm-reessais.webp"
    alt: "TypeScript excerpt of the Velora GoHighLevel API client"
    caption: "Code: GoHighLevel API client with retries and rate-limit handling"
  - src: "../../../assets/projets/velora/code-02-agregats-lead.webp"
    alt: "Convex code excerpt computing a lead’s aggregates"
    caption: "Code: recomputing a lead’s aggregates in Convex"
context: "The sales team was juggling GoHighLevel, spreadsheets and chat messages to follow up prospects. Nobody had a reliable view of the pipeline, the call-backs due or the revenue signed."
built: "A custom SaaS CRM built with React and Convex, continuously synced with GoHighLevel: lead pipeline, call log, appointment calendar by area, installation tracking, finances, analytics and roles. An n8n workflow sends a debrief after each appointment. The first version ran on NestJS and PostgreSQL; I migrated it to Convex for real-time updates and simpler operations."
result: "Sales reps and management work in Velora every day. Differential sync with GoHighLevel prevents duplicates, and server-side aggregates keep the app fast across thousands of leads."
seoTitle: "Velora — custom SaaS CRM (React, Convex) | Case study"
seoDescription: "Case study: Velora, a SaaS CRM built for a solar installer. Lead pipeline, calls, appointments, GoHighLevel sync, built with React and Convex."
---

## Technical highlights

- **Idempotent sync** with the GoHighLevel API: retries with backoff, rate-limit handling (HTTP 429), no duplicates.
- **Pre-computed aggregates** per lead (calls, call-backs, last comment) for instant lists.
- **Roles and areas**: each rep sees their leads, management sees everything.
- **Agent API**: domain-scoped keys to plug automations in safely.
