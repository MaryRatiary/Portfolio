---
title: "Tracify"
tagline: "La plateforme de suivi publicitaire d’une agence : dépenses Meta Ads, prospects et coût par prospect de chaque client, en direct."
kind: web
featured: 2
order: 2
year: "2026"
client: "Agence de marketing digital"
role: "Conception, développement full stack"
stack: ["React 19", "TanStack Start", "Convex", "Meta Ads API", "Tailwind CSS 4", "Vercel"]
url: "https://tracify-eta.vercel.app"
cover: "../../../assets/projets/tracify/10-vue-ensemble-agence.webp"
coverAlt: "Tableau de bord Tracify avec les indicateurs de l’agence (données fictives)"
gallery:
  - src: "../../../assets/projets/tracify/10-vue-ensemble-agence.webp"
    alt: "Tableau de bord Tracify avec les indicateurs de l’agence (données fictives)"
    caption: "Vue d’ensemble de l’agence : dépense, prospects, coût par prospect et derniers leads à traiter"
  - src: "../../../assets/projets/tracify/11-graphiques-et-clients.webp"
    alt: "Graphiques et tableau des clients dans Tracify"
    caption: "Dépense quotidienne, prospects par jour et tableau des clients"
  - src: "../../../assets/projets/tracify/12-fiche-client.webp"
    alt: "Fiche d’un client fictif dans Tracify"
    caption: "Fiche client : pipeline des prospects, état du compte et campagnes"
  - src: "../../../assets/projets/tracify/14-campagne-performance.webp"
    alt: "Indicateurs de performance d’une campagne Meta dans Tracify"
    caption: "Performance d’une campagne Meta : impressions, clics, CTR, CPC"
  - src: "../../../assets/projets/tracify/15-creatives-performantes.webp"
    alt: "Classement des publicités et kanban des prospects dans Tracify"
    caption: "Les publicités les plus performantes et le kanban des prospects"
  - src: "../../../assets/projets/tracify/16-portail-client.webp"
    alt: "Portail client Tracify avec indicateurs et graphiques"
    caption: "Portail client en lecture seule, ouvert par code d’accès"
  - src: "../../../assets/projets/tracify/17-portail-client-prospects.webp"
    alt: "Kanban des prospects dans le portail client Tracify"
    caption: "Le client suit ses prospects, filtrables par campagne"
  - src: "../../../assets/projets/tracify/18-mobile-vue-ensemble.webp"
    alt: "Tracify sur mobile : vue d’ensemble"
    caption: "Vue d’ensemble sur mobile"
  - src: "../../../assets/projets/tracify/19-mobile-portail-client.webp"
    alt: "Tracify sur mobile : portail client"
    caption: "Portail client sur mobile"
  - src: "../../../assets/projets/tracify/01-accueil.webp"
    alt: "Page d’accueil de la plateforme Tracify"
    caption: "Page d’accueil publique de Tracify"
  - src: "../../../assets/projets/tracify/code-01-webhook-leads.webp"
    alt: "Extrait de code du webhook de leads de Tracify"
    caption: "Code : webhook de réception des leads (Convex)"
  - src: "../../../assets/projets/tracify/code-02-code-acces-client.webp"
    alt: "Extrait de code de génération des codes d’accès Tracify"
    caption: "Code : génération d’un code d’accès client unique"
context: "L’agence gérait les campagnes Meta de nombreux clients. Les chiffres étaient éparpillés entre le gestionnaire de publicités, le CRM et des exports, et chaque client demandait ses résultats par message."
built: "Une application TanStack Start + Convex : vue d’ensemble de l’agence (dépense, prospects, coût par prospect sur 30 jours comparés à la période précédente), fiche par client, détection automatique des campagnes Meta, performance de chaque publicité, kanban des prospects alimenté par webhook et synchronisation GoHighLevel, et un portail client en lecture seule ouvert par code d’accès. Connexion Google pour l’équipe."
result: "L’équipe pilote toutes les campagnes depuis un seul écran, et chaque client consulte lui-même ses chiffres et ses prospects dans son portail."
seoTitle: "Tracify — plateforme de suivi Meta Ads multi-clients | Cas"
seoDescription: "Étude de cas : Tracify, plateforme de suivi publicitaire pour agence. Dépenses Meta Ads, prospects, coût par lead, portail client. TanStack Start et Convex."
---

## Points techniques

- **Webhook de leads** tolérant : accepte les formats de plusieurs outils (formulaires, GoHighLevel, Make) et la clé dans le corps, l’URL ou l’en-tête.
- **Codes d’accès client** uniques, révocables, sans compte à créer.
- **Graphiques SVG faits main**, légers et lisibles sur mobile.
