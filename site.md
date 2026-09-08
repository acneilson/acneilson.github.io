# Portfolio Site Plan - Test Automation Developer

## Site Structure — 8 Full-Page Sections
| # | Page | File | Status |
|---|------|------|--------|
| 1 | Hero / Above the Fold | `src/sections/hero.jsx` + `src/css/hero.css` | ✅ Implemented — dark gradient, centered, 100dvh |
| 2 | About Me | `src/sections/about.jsx` + `src/css/about.css` | ✅ Implemented — light theme `#f9fafb`, 3 paragraphs, Lightspeed-focused |
| 3 | Core Skills / Tech Stack | `src/sections/skills.jsx` + `src/css/skills.css` | ✅ Scaffolded — light theme, 5 categories |
| 4 | Work History / Experience | `src/sections/experience.jsx` + `src/css/experience.css` | ✅ Scaffolded — light `#f9fafb`, Lightspeed-first timeline |
| 5 | Projects / Case Studies | `src/sections/projects.jsx` + `src/css/projects.css` | ✅ Scaffolded — 3 cards, light theme |
| 6 | Testing Philosophy / Approach | `src/sections/philosophy.jsx` + `src/css/philosophy.css` | ✅ Scaffolded — 4 principles grid |
| 7 | Education & Certifications | `src/sections/education.jsx` + `src/css/education.css` | ✅ Scaffolded — York/Humber/Seneca cards |
| 8 | Contact & Links | `src/sections/contact.jsx` + `src/css/contact.css` | ✅ Scaffolded — dark footer `#0f1117` |

> Layout pattern: All sections are `min-height: 100vh` / `100dvh` stacked in `src/App.js:7` `<main>`, each in its own file (not one monolithic file, not separate routes) for scroll-driven in/out transitions.

## 1. Hero / Above the Fold — `src/sections/hero.jsx`
- Name: Andrew Neilson
- Title: Senior Quality Test Developer
- Location: Etobicoke, ON
- CTA: [LinkedIn](https://linkedin.com/in/andrew-neilson-13307933) [GitHub](https://github.com/acneilson)
- Style: dark gradient `linear-gradient(135deg, #0f1117 0%, #1e1e3a 50%, #121212 100%)`, centered vertically + horizontally

## 2. About Me — `src/sections/about.jsx`
- 3 paragraphs (human, not CV copy) highlighting 7+ years at Lightspeed Commerce Inc, web + API domain (REST/GraphQL), and passion for AI-augmented diagnostics / shift-left / developer experience
- Light theme `#f9fafb` / `#1f2937` to contrast hero
- Status: Implemented

## 3. Core Skills / Tech Stack — `src/sections/skills.jsx`
Populate from `Andrew Neilson - Resume Update.md:7`:
- **Languages & Frameworks:** Python, pytest, Playwright
- **API Testing:** REST APIs, GraphQL, JSON Schema / Pydantic, contract/schema validation
- **CI/CD & DevOps:** Docker, GitHub Actions, CI/CD, containerized execution
- **Data & Infra:** SQL, DNS/SSL
- **AI-Augmented Quality:** AI-assisted Diagnostics & Reporting, failure-trend analysis
- Group by category with icons, not just logos

## 4. Work History / Experience — `src/sections/experience.jsx`
For each role: `Company | Title | Dates` + 3-4 outcome bullets:
- **Senior Quality Test Developer — Lightspeed Commerce Inc | Apr 2019 – Jul 2026** — Architected Python (pytest + Playwright) framework for REST/GraphQL on every commit; contract validation; quality gates via GitHub Actions + Docker; AI in-pipeline diagnostics distinguishing infra vs product failures; scheduled AI failure-trend reporting to leadership
- **Web Support Specialist — Jonas Software | Mar 2017 – Apr 2019** — Client liaison for email marketing/delivery, SQL, client-server/web-server integration, DNS/SSL renewals
- **NTSD Knowledge Management Specialist — Rogers Communications | Jun 2011 – Jul 2015** — 1 of 4 to create NOVA/Rogers.com unified platform, SpeedCheck portal (40.8% of Internet Support traffic)
- **Technical Support Consultant — Rogers Communications | 2011 – 2015** — Ranked 10th of 258, 101.25% CX/Financial targets
- **Station Attendant — Air Canada | 2009 – Present** + **Centre Support Officer — RBC | 2002 – 2008** — optional condensed
- Emphasize Lightspeed most

## 5. Projects / Case Studies — `src/sections/projects.jsx`
2-3 case studies, each with:
- Problem / Context (e.g., flaky high-volume commerce API regressions)
- Architecture diagram of Lightspeed-style framework (pytest + Playwright + schema validation + Docker + GitHub Actions)
- Stack + GitHub link (create open-source demo if work code private: e.g., Playwright + GraphQL demo on public API + Allure report)
- Challenges solved: flakiness, test data, parallelization, cross-browser
- Results: execution time, coverage, broken-change catch rate
- Links: Live Demo | GitHub | Allure Report

## 6. Testing Philosophy / Approach — `src/sections/philosophy.jsx`
- Test pyramid — what to automate vs not
- Maintainable locators, waits, test data strategy, POM
- Contract testing + schema validation philosophy
- Shift-left & quality as shared responsibility, collaboration with backend/DevOps/product
- AI diagnostics: making failures actionable

## 7. Education & Certifications — `src/sections/education.jsx`
From `Andrew Neilson - Resume Update.md:38`:
- B.A. Honours, Communication Studies and Humanities — York University, 2010
- Web Design & Production — Humber College, 2016
- Javascript and AngularJS — Seneca College, 2017
- PHP: Databases, CMS and Framework — Seneca College, 2017
- Add ISTQB / other certs if earned, otherwise omit

## 8. Contact & Links — `src/sections/contact.jsx`
- Etobicoke, ON | 416.624.5621 | andrewc.neilson@gmail.com
- linkedin.com/in/andrew-neilson-13307933 | github.com/acneilson
- Contact form + CV PDF download
- Availability tag

## Optional but High-Value
- **Metrics Dashboard:** Badge wall: Build: Passing | Coverage: 85% | Tests: 450 Passing
- **Blog / Knowledge Sharing:** 2-3 articles: "How I fixed flaky Cypress tests"
- **Testimonials:** 1-2 quotes from Dev/QA Lead
- **Tools I Built:** Custom CLI, test data generators, Slack reporters

## What to Avoid
- Long paragraphs without links/evidence
- Listing every tool you've touched
- Screenshots without context
- Proprietary client code without permission
