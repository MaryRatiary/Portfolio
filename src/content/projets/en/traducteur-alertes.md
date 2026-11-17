---
title: "Technical alert translator"
tagline: "A small service that turns raw technical alerts into clear messages for non-technical clients."
kind: ia
order: 22
year: "2026"
client: "B2B prospecting agency (internal tool)"
role: "Design and development"
stack: ["Python", "API LLM", "Webhooks Slack", "systemd"]
url: null
cover: "../../../assets/projets/traducteur-alertes/code-01-traduction-alerte.webp"
coverAlt: "Python alert translator code excerpt"
gallery:
  - src: "../../../assets/projets/traducteur-alertes/code-01-traduction-alerte.webp"
    alt: "Python alert translator code excerpt"
    caption: "Code: translating an alert, falling back to the raw alert"
context: "Workflow alerts were unreadable for clients (“HTTP 401”, stack traces). They worried without knowing what to do."
built: "A service that receives the alert, rewrites it in plain language with the client’s context (which tool, what impact, who acts) using a language model, and posts it to the right Slack channel. If translation fails, the raw alert still goes out: nothing is lost."
result: "Clients understand what is going on, and the tech team keeps the details under the message."
seoTitle: "Translating technical alerts with an LLM | Case study"
seoDescription: "Case study: a Python service that turns technical alerts into clear messages for non-technical clients, using a language model and Slack."
---


