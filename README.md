# Portfolio v2 — Template

A React portfolio template inspired by [Aditi Dwivedi](https://www.wallofportfolios.in/portfolios/aditi-dwivedi/) and [Dhriti Kothari](https://www.wallofportfolios.in/portfolios/dhriti-kothari/) on Wall of Portfolios.

## Design influences

| Fixed dark sidebar with profile, "Open to Work" badge, and message CTA | Editorial cream background with vertical grid lines |
| Hero statement with serif italic accent words | Large typographic "Hello! I am …" hero |

## Quick start

```bash
cd Portfoliov2
npm install
npm run dev
```

## Customize

Edit **`src/data/content.js`** — that's the only file you need to change for most content:

- `profile` — name, title, email, social links, tags
- `hero` — greeting, design statement, company info
- `projects` — your case studies (add images by replacing the color placeholder in `Projects.jsx`)
- `experience` — work history
- `about` — footer bio

## Project structure

```
src/
├── data/content.js      ← all your content lives here
├── components/
│   ├── Hero.jsx         ← typographic hero + top nav
│   ├── Projects.jsx     ← grid project cards
│   ├── Experience.jsx   ← timeline
│   └── Contact.jsx      ← footer / contact
└── pages/Home.jsx       ← main layout
```

## Next steps

- Add project thumbnail images to `public/` and update `Projects.jsx`
- Add a `/work/:slug` route for individual case studies
- Swap fonts in `index.html` to match your brand
