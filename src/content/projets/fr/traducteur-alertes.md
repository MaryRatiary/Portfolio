---
title: "Traducteur d’alertes techniques"
tagline: "Un petit service qui transforme les alertes techniques brutes en messages clairs pour des clients non techniciens."
kind: ia
order: 22
year: "2026"
client: "Agence de prospection B2B (outil interne)"
role: "Conception et développement"
stack: ["Python", "API LLM", "Webhooks Slack", "systemd"]
url: null
cover: "../../../assets/projets/traducteur-alertes/code-01-traduction-alerte.webp"
coverAlt: "Extrait de code Python du traducteur d’alertes"
gallery:
  - src: "../../../assets/projets/traducteur-alertes/code-01-traduction-alerte.webp"
    alt: "Extrait de code Python du traducteur d’alertes"
    caption: "Code : traduction d’une alerte avec repli sur l’alerte brute"
context: "Les alertes des workflows étaient illisibles pour les clients (« HTTP 401 », traces d’erreur). Ils s’inquiétaient sans savoir quoi faire."
built: "Un service qui reçoit l’alerte, la reformule en français simple avec le contexte du client (quel outil, quel impact, qui agit) grâce à un modèle de langage, et la publie dans le bon canal Slack. Si la traduction échoue, l’alerte brute part quand même : rien ne se perd."
result: "Les clients comprennent ce qui se passe et l’équipe technique garde le détail sous le message."
seoTitle: "Traduire des alertes techniques avec un LLM | Étude de cas"
seoDescription: "Étude de cas : service Python qui traduit les alertes techniques en messages clairs pour des clients non techniciens, avec un LLM et Slack."
---


