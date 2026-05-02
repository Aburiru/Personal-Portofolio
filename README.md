# ABURIRU — Cognitive Identity System v2.4

A dark-themed, editorial portfolio site for **Aburiru** — Adaptive Frontend Engineer & AI Developer.

## Project Structure

```
aburiru-portfolio/
├── index.html          ← Main HTML document
├── css/
│   └── styles.css      ← All site styles (custom cursor, sections, animations)
├── js/
│   └── main.js         ← Interactivity (cursor, scroll progress, reveal animations)
├── assets/
│   └── identity-mark.png  ← Profile / logo image
└── README.md
```

## Sections

| Layer | ID | Description |
|-------|----|-------------|
| 01 | `#entry` | Hero / Entry Gateway |
| 02 | `#cognitive` | Cognitive Pattern — how I think |
| 03 | `#adaptive` | Adaptive Capability System (skills) |
| 04 | `#showcase` | Project Case Studies |
| 05 | `#evolution` | Evolution Trajectory (timeline) |
| 06 | `#connect` | Connection Gateway (contact) |
| 07 | `#closure` | System Closure / Footer |

## Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JavaScript** — zero dependencies, zero frameworks.
- Google Fonts: `Cormorant Garamond`, `Courier Prime`, `Space Mono`.
- Custom animated cursor, scroll-progress line, intersection-observer reveal animations.

## Deployment

This repo is ready to deploy on any static host:

### GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source → main branch / root**.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Netlify / Vercel
Drop the folder into Netlify's dashboard, or link the GitHub repo — no build step needed.

### Local Preview
```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

## Customisation

- **Contact links** — update email, GitHub, and LinkedIn hrefs in `#connect` section of `index.html`.
- **Profile image** — replace `assets/identity-mark.png` (keep the same filename, or update the `src` attribute in `index.html`).
- **Coordinates & meta** — edit the `.logo-coords` spans and `.closure-meta` div in `index.html`.

---

> STATUS: ACTIVE & EVOLVING — BUILD 2025
