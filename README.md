# Nib — Website

The marketing landing page for [**Nib**](https://nibapp.net), a calm, premium curiosity engine for iOS that delivers one fascinating thing every day.

> One fascinating thing. Every day. — Come for one fact. Stay for five.

This repo is the single-page site served at **[nibapp.net](https://nibapp.net)**. It introduces the app, shows a sample fact card, and links to the App Store. The iOS app itself lives in a separate repository.

## Tech stack

- **React 19** + **Vite** — single-page app
- **Tailwind CSS 4** (via `@tailwindcss/vite`) — styling
- **Framer Motion** — entrance and ambient animations
- **lucide-react** — icons
- **Oxlint** — linting

## Getting started

```bash
npm install
npm run dev      # start the Vite dev server
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run Oxlint
```

## Project structure

```
public/
  CNAME          # custom domain (nibapp.net)
  favicon.svg
  icons.svg
src/
  App.jsx        # the entire landing page (masthead, fact card, CTA, footer)
  main.jsx       # React entry point
  index.css      # Tailwind + global styles
  assets/        # hero image and misc assets
index.html
vite.config.js
```

The whole page is a single component in `src/App.jsx` — a centered masthead, an animated ambient background, a sample `FactCard`, and a "Download on the App Store" call to action.

## Deployment

Deploys automatically to **GitHub Pages** on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow runs
`npm ci && npm run build` and publishes the `dist/` output. The custom domain
`nibapp.net` is configured through `public/CNAME`.
