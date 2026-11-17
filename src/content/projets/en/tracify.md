---
title: "Tracify"
tagline: "An agency’s ad-tracking platform: Meta Ads spend, leads and cost per lead for every client, live."
kind: web
featured: 2
order: 2
year: "2026"
client: "Digital marketing agency"
role: "Design, full-stack development"
stack: ["React 19", "TanStack Start", "Convex", "Meta Ads API", "Tailwind CSS 4", "Vercel"]
url: "https://tracify-eta.vercel.app"
cover: "../../../assets/projets/tracify/10-vue-ensemble-agence.webp"
coverAlt: "Tracify dashboard with agency KPIs (demo data)"
gallery:
  - src: "../../../assets/projets/tracify/10-vue-ensemble-agence.webp"
    alt: "Tracify dashboard with agency KPIs (demo data)"
    caption: "Agency overview: spend, leads, cost per lead and latest leads to handle"
  - src: "../../../assets/projets/tracify/11-graphiques-et-clients.webp"
    alt: "Charts and client table in Tracify"
    caption: "Daily spend, leads per day and client table"
  - src: "../../../assets/projets/tracify/12-fiche-client.webp"
    alt: "Demo client page in Tracify"
    caption: "Client page: lead pipeline, account status and campaigns"
  - src: "../../../assets/projets/tracify/14-campagne-performance.webp"
    alt: "Meta campaign KPIs in Tracify"
    caption: "Meta campaign performance: impressions, clicks, CTR, CPC"
  - src: "../../../assets/projets/tracify/15-creatives-performantes.webp"
    alt: "Ad ranking and lead kanban in Tracify"
    caption: "Top-performing ads and the lead kanban"
  - src: "../../../assets/projets/tracify/16-portail-client.webp"
    alt: "Tracify client portal with KPIs and charts"
    caption: "Read-only client portal opened with an access code"
  - src: "../../../assets/projets/tracify/17-portail-client-prospects.webp"
    alt: "Lead kanban in the Tracify client portal"
    caption: "Clients follow their leads, filterable by campaign"
  - src: "../../../assets/projets/tracify/18-mobile-vue-ensemble.webp"
    alt: "Tracify on mobile: overview"
    caption: "Overview on mobile"
  - src: "../../../assets/projets/tracify/19-mobile-portail-client.webp"
    alt: "Tracify on mobile: client portal"
    caption: "Client portal on mobile"
  - src: "../../../assets/projets/tracify/01-accueil.webp"
    alt: "Tracify platform landing page"
    caption: "Tracify public landing page"
  - src: "../../../assets/projets/tracify/code-01-webhook-leads.webp"
    alt: "Tracify lead webhook code excerpt"
    caption: "Code: lead intake webhook (Convex)"
  - src: "../../../assets/projets/tracify/code-02-code-acces-client.webp"
    alt: "Tracify access code generation excerpt"
    caption: "Code: generating a unique client access code"
context: "The agency ran Meta campaigns for many clients. Numbers were scattered across Ads Manager, the CRM and exports, and every client asked for results by message."
built: "A TanStack Start + Convex app: agency overview (spend, leads, cost per lead over 30 days vs the previous period), a page per client, automatic detection of Meta campaigns, per-ad performance, a lead kanban fed by webhook and GoHighLevel sync, and a read-only client portal opened with an access code. Google sign-in for the team."
result: "The team steers every campaign from a single screen, and each client checks their own numbers and leads in their portal."
seoTitle: "Tracify — multi-client Meta Ads tracking platform | Case study"
seoDescription: "Case study: Tracify, an ad-tracking platform for agencies. Meta Ads spend, leads, cost per lead and client portal, built with TanStack Start and Convex."
---

## Technical highlights

- **Tolerant lead webhook**: accepts payloads from several tools (forms, GoHighLevel, Make) and the key in body, URL or header.
- **Client access codes**: unique, revocable, no account needed.
- **Hand-made SVG charts**, lightweight and readable on mobile.
