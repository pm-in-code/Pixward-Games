# Pixward Games - Landing Page

This project is a Next.js + TailwindCSS landing generated from a Figma design via MCP.

## Run locally

```bash
npm install
npm run dev
```

## Build & start

```bash
npm run build
npm start
```

## Design assets

Remote images are served via the local MCP Figma assets server on `http://localhost:3845/assets/...`.

## Structure

- `pages/index.tsx` – composition of sections
- `components/*` – reusable UI (Navbar, Hero, CarouselSlide, Team, Metrics, Footer)
- `constants/content.ts` – texts/SEO
- `styles/globals.css` – global Tailwind utilities

## License

MIT
