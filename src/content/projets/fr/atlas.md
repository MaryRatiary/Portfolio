---
title: "Atlas"
tagline: "La plateforme des marchands de biens : dépôt d’opportunité, simulation de marge en 3 minutes, étude des dossiers et suivi jusqu’à la commercialisation."
kind: web
featured: 3
order: 3
year: "2026"
client: "Atlas — réseau de marchands de biens"
role: "Développement full stack, back-office, mise en production"
stack: ["React 19", "TanStack Start", "Convex", "Cloudflare Workers", "API IGN", "Slack API"]
url: "https://atlas-mdb.com"
cover: "../../../assets/projets/atlas/11-simulation-resultat.webp"
coverAlt: "Rapport de simulation d’une opération immobilière sur Atlas (données fictives)"
gallery:
  - src: "../../../assets/projets/atlas/11-simulation-resultat.webp"
    alt: "Rapport de simulation d’une opération immobilière sur Atlas (données fictives)"
    caption: "Rapport de simulation : synthèse du bien, hypothèses, verdict « Éligible » et estimation de revente"
  - src: "../../../assets/projets/atlas/10-simulation-etape-bien.webp"
    alt: "Première étape de la simulation Atlas avec vue aérienne"
    caption: "Simulation, étape 1 : adresse reconnue, vue IGN, surface et lots"
  - src: "../../../assets/projets/atlas/12-depot-dossier-pieces.webp"
    alt: "Formulaire de dépôt de dossier Atlas"
    caption: "Dépôt du dossier : photos, documents et taux de complétude"
  - src: "../../../assets/projets/atlas/13-admin-prospects-filtres.webp"
    alt: "Liste des prospects dans le back-office Atlas"
    caption: "Back-office : prospects avec rail de filtres, notes et signes « Hors critères »"
  - src: "../../../assets/projets/atlas/14-admin-fiche-dossier.webp"
    alt: "Fiche dossier dans le back-office Atlas"
    caption: "Instruction d’un dossier : statut, pièces reçues ou manquantes, dispositifs fiscaux"
  - src: "../../../assets/projets/atlas/16-espace-marchand.webp"
    alt: "Tableau de bord de l’espace marchand Atlas"
    caption: "Espace marchand : dossiers, pièces à compléter et suivi"
  - src: "../../../assets/projets/atlas/01-accueil.webp"
    alt: "Page d’accueil de la plateforme Atlas pour marchands de biens"
    caption: "Page d’accueil : « Augmentez votre marge. Sans gérer un seul chantier. »"
  - src: "../../../assets/projets/atlas/02-accueil-suite.webp"
    alt: "Les cinq étapes du parcours Atlas"
    caption: "Le fonctionnement en cinq étapes"
  - src: "../../../assets/projets/atlas/04-prototype.webp"
    alt: "Démonstration interactive d’Atlas"
    caption: "La démonstration « Atlas, en une minute »"
  - src: "../../../assets/projets/atlas/03-mobile.webp"
    alt: "Atlas sur mobile"
    caption: "Version mobile"
  - src: "../../../assets/projets/atlas/code-01-grille-notation.webp"
    alt: "Extrait de code de la grille de notation Atlas"
    caption: "Code : évaluation d’une opération selon la grille de notation"
  - src: "../../../assets/projets/atlas/code-02-alertes-equipe.webp"
    alt: "Extrait de code des alertes d’équipe Atlas"
    caption: "Code : alertes email de l’équipe avec désinscription"
context: "Atlas reçoit des opportunités immobilières de marchands de biens partout en France. Les dossiers arrivaient incomplets, par email, et l’équipe perdait du temps à trier ceux qui ne respectaient pas ses critères."
built: "Une simulation en 4 étapes (adresse géolocalisée avec la vue IGN, chiffres, avancement) qui produit un rapport d’éligibilité noté sur 100 avec estimation de revente ; un dépôt de dossier complet (pièces, photos avec conversion HEIC, plans, budget travaux) ; un espace marchand pour suivre ses dossiers ; et un back-office : file de travail par priorité, prospects avec rail de filtres, instruction des dossiers, dispositifs fiscaux (Denormandie, Malraux), équipe, emails et alertes Slack."
result: "Les dossiers arrivent complets et déjà notés. L’équipe est alertée en temps réel et se concentre sur les opérations qui entrent dans ses critères."
seoTitle: "Atlas — plateforme pour marchands de biens | Étude de cas"
seoDescription: "Étude de cas : Atlas, plateforme web pour marchands de biens. Dépôt d’opportunités, simulation de marge, back-office et alertes Slack, React et Convex."
---

## Points techniques

- **Grille de notation** de l’opération codée et testée, avec critères éliminatoires.
- **Alertes d’équipe** par email et Slack, avec désinscription individuelle.
- **Photos HEIC** (iPhone) converties en JPEG à l’envoi, aperçus compris.
