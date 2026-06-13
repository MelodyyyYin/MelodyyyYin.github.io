# Yue (Melody) Yin — Portfolio

Personal portfolio site for **Yue (Melody) Yin** — Software Engineer focused on
AI Infrastructure, LLM Systems, and Distributed Systems.

🔗 **Live:** https://melodyyyin.github.io

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/) icons
- Deployed to GitHub Pages via GitHub Actions

## Editing content

All copy lives in a single file: [`lib/content.ts`](./lib/content.ts).
Update profile links, experience, projects, open-source items, skills, and
education there — components read from it directly.

The résumé PDF is served from [`public/Melody_Yin_Resume.pdf`](./public).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site exported to ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. In the repo settings, set
**Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
