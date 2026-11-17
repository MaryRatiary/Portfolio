---
title: "Velora"
tagline: "Le CRM commercial d’un installateur solaire : leads, appels, rendez-vous, ventes et installations dans une seule vue claire."
kind: web
featured: 1
order: 1
year: "2026"
client: "Electro Concept OI — installateur solaire, La Réunion"
role: "Conception, développement full stack, mise en production"
stack: ["React", "TypeScript", "Convex", "GoHighLevel API", "n8n", "Vercel"]
url: "https://velora.electroconceptoi.com"
cover: "../../../assets/projets/velora/10-tableau-de-bord.webp"
coverAlt: "Tableau de bord du CRM Velora (données fictives)"
gallery:
  - src: "../../../assets/projets/velora/10-tableau-de-bord.webp"
    alt: "Tableau de bord du CRM Velora (données fictives)"
    caption: "Vue d’ensemble : nouveaux prospects, taux de vente, appels, courbe d’évolution"
  - src: "../../../assets/projets/velora/12-prospects.webp"
    alt: "Liste des prospects dans Velora"
    caption: "Liste des prospects avec filtres par statut, dernier appel et période"
  - src: "../../../assets/projets/velora/13-fiche-prospect.webp"
    alt: "Fiche d’un prospect fictif dans Velora"
    caption: "Fiche prospect : coordonnées, attribution, historique et débrief de vente"
  - src: "../../../assets/projets/velora/16-appel-en-cours.webp"
    alt: "Écran d’appel en cours dans Velora"
    caption: "Écran d’appel : chronomètre et qualification guidée du prospect"
  - src: "../../../assets/projets/velora/15-agenda-rdv.webp"
    alt: "Agenda des rendez-vous commerciaux dans Velora"
    caption: "Agenda des rendez-vous par secteur, avec l’état des débriefs"
  - src: "../../../assets/projets/velora/11-statistiques.webp"
    alt: "Page de statistiques commerciales de Velora"
    caption: "Statistiques : appels, qualifiés, ventes et chiffre d’affaires signé"
  - src: "../../../assets/projets/velora/20-statistiques-sombre.webp"
    alt: "Statistiques Velora en thème sombre"
    caption: "Les mêmes statistiques en thème sombre"
  - src: "../../../assets/projets/velora/14-parametres-equipe.webp"
    alt: "Gestion de l’équipe dans Velora"
    caption: "Gestion de l’équipe : rôles, statut et lien avec GoHighLevel"
  - src: "../../../assets/projets/velora/01-accueil.webp"
    alt: "Page d’accueil du CRM Velora, fond sombre et anneau lumineux"
    caption: "Page d’accueil de Velora : « Pilotez vos prospects »"
  - src: "../../../assets/projets/velora/02-accueil-suite.webp"
    alt: "Présentation des modules du CRM Velora"
    caption: "Les modules du CRM : leads, rendez-vous, installation, finances, statistiques, équipes"
  - src: "../../../assets/projets/velora/code-01-client-crm-reessais.webp"
    alt: "Extrait de code TypeScript du client API GoHighLevel de Velora"
    caption: "Code : client API GoHighLevel avec réessais et gestion du quota"
  - src: "../../../assets/projets/velora/code-02-agregats-lead.webp"
    alt: "Extrait de code Convex qui calcule les agrégats d’un lead"
    caption: "Code : recalcul des agrégats d’un lead dans Convex"
context: "L’équipe commerciale jonglait entre GoHighLevel, des tableurs et des messages pour suivre ses prospects. Personne n’avait une vue fiable du pipeline, des rappels à faire ni du chiffre signé."
built: "Un CRM SaaS sur mesure en React et Convex, synchronisé en continu avec GoHighLevel : pipeline des leads, journal d’appels, agenda des rendez-vous par secteur, suivi d’installation, finances, statistiques et rôles. Un workflow n8n envoie le débrief de chaque rendez-vous. La première version tournait sur NestJS et PostgreSQL ; je l’ai migrée vers Convex pour le temps réel et la simplicité d’exploitation."
result: "Les commerciaux et la direction travaillent chaque jour dans Velora. La synchronisation différentielle avec GoHighLevel évite les doublons, et les agrégats calculés côté serveur gardent l’application rapide malgré des milliers de leads."
seoTitle: "Velora — CRM SaaS sur mesure (React, Convex) | Étude de cas"
seoDescription: "Étude de cas : Velora, CRM SaaS développé pour un installateur solaire. Pipeline de leads, appels, rendez-vous, sync GoHighLevel, React et Convex."
---

## Points techniques

- **Synchronisation idempotente** avec l’API GoHighLevel : réessais avec délai progressif, gestion du quota (HTTP 429), aucune création en double.
- **Agrégats précalculés** par lead (appels, rappels, dernier commentaire) pour des listes instantanées.
- **Rôles et secteurs** : chaque commercial voit ses leads, la direction voit tout.
- **API pour agents** : clés à portée limitée par domaine pour brancher des automatisations en toute sécurité.
