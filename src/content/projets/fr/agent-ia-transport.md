---
title: "Agent IA pour une société de transport"
tagline: "Un assistant qui lit les emails de réservation, prépare les courses, devis et factures dans le logiciel métier et les fait valider sur Slack."
kind: ia
order: 20
year: "2026"
client: "Société de transport de personnes, Paris (anonymisée)"
role: "Conception et développement de l’agent, intégration au logiciel métier"
stack: ["Python", "API LLM", "Slack API", "API REST métier", "Linux / systemd"]
url: null
cover: "../../../assets/projets/agent-transport/code-01-aiguillage-mail.webp"
coverAlt: "Extrait de code Python de l’agent : classement des emails"
gallery:
  - src: "../../../assets/projets/agent-transport/code-01-aiguillage-mail.webp"
    alt: "Extrait de code Python de l’agent : classement des emails"
    caption: "Code : aiguillage d’un email (mission, administratif ou alerte)"
  - src: "../../../assets/projets/agent-transport/code-02-garde-anti-invention.webp"
    alt: "Extrait de code Python : garde anti-invention"
    caption: "Code : garde qui refuse toute information absente du mail"
  - src: "../../../assets/projets/agent-transport/code-03-apercu-validation.webp"
    alt: "Extrait de code Python : boutons de validation"
    caption: "Code : boutons de validation de l’aperçu"
context: "L’équipe recevait chaque jour des dizaines d’emails de clients (réservations, modifications, demandes de devis) et ressaisissait tout à la main dans son logiciel de gestion des courses."
built: "Un agent qui classe chaque email, extrait les informations utiles et prépare la création dans le logiciel métier. Rien ne part sans validation : l’équipe reçoit un aperçu sur Slack avec des boutons « valider » ou « corriger ». Des garde-fous bloquent toute information absente du mail (heure, adresse), et un registre de règles métier rejoue les cas passés pour éviter les régressions."
result: "Les demandes sont préparées automatiquement. L’équipe vérifie et valide au lieu de tout ressaisir, et les factures de fin de mois sont générées depuis le même outil."
seoTitle: "Agent IA de réservation pour une société de transport | Cas"
seoDescription: "Étude de cas : agent IA qui lit les emails, crée réservations, devis et factures dans le logiciel métier d’un transporteur, avec validation sur Slack."
---

## Ce qui fait la fiabilité

- **Validation humaine systématique** avant toute écriture dans le logiciel métier.
- **Garde anti-invention** : chaque information doit venir du mail ou de l’historique, sinon l’agent pose la question.
- **Banc de rejeu** : les erreurs passées deviennent des tests.

Les captures montrent du code anonymisé : aucun nom de client, de passager ou de chauffeur.
