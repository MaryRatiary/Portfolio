---
title: "AI agent for a transport company"
tagline: "An assistant that reads booking emails, prepares rides, quotes and invoices in the business software and gets them approved on Slack."
kind: ia
order: 20
year: "2026"
client: "Passenger transport company, Paris (anonymised)"
role: "Agent design and development, business software integration"
stack: ["Python", "API LLM", "Slack API", "API REST métier", "Linux / systemd"]
url: null
cover: "../../../assets/projets/agent-transport/code-01-aiguillage-mail.webp"
coverAlt: "Python agent code excerpt: email routing"
gallery:
  - src: "../../../assets/projets/agent-transport/code-01-aiguillage-mail.webp"
    alt: "Python agent code excerpt: email routing"
    caption: "Code: routing an email (ride, admin or alert)"
  - src: "../../../assets/projets/agent-transport/code-02-garde-anti-invention.webp"
    alt: "Python code excerpt: no-invention guard"
    caption: "Code: guard that rejects any detail missing from the email"
  - src: "../../../assets/projets/agent-transport/code-03-apercu-validation.webp"
    alt: "Python code excerpt: approval buttons"
    caption: "Code: approval buttons on the preview"
context: "The team received dozens of client emails every day (bookings, changes, quote requests) and re-typed everything by hand into their ride management software."
built: "An agent that classifies each email, extracts the useful details and prepares the record in the business software. Nothing is sent without approval: the team gets a Slack preview with “approve” or “fix” buttons. Guardrails block any detail missing from the email (time, address), and a rule registry replays past cases to prevent regressions."
result: "Requests are prepared automatically. The team checks and approves instead of re-typing, and month-end invoices come out of the same tool."
seoTitle: "AI booking agent for a transport company | Case study"
seoDescription: "Case study: an AI agent that reads emails and creates bookings, quotes and invoices in a transport company’s software, with approval on Slack."
---

## What makes it reliable

- **Human approval every time** before anything is written to the business software.
- **No-invention guard**: every detail must come from the email or history, otherwise the agent asks.
- **Replay bench**: past mistakes become tests.

Screenshots show anonymised code: no client, passenger or driver names.
