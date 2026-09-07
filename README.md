# Doyuni main website

Static Next.js vision website for `doyuni.com`. It does not use a database or server-side API. The site presents Doyuni as an early independent project with a long-term ambition to become a major company — not tied to any one industry, whether that ends up being products, services, or technology not yet invented.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build for deployment

```bash
pnpm build
```

The static export is generated in `out/`. The site is ready for Vercel or another static host. Add `doyuni.com` as the production domain in the host, and keep the existing app on `tailor.doyuni.com`.

## Pages

- `/` — landing page
- `/about/` — studio approach and principles
- `/roadmap/` — roadmap and focus areas
- `/notes/` — static articles and notes
- `/contact/` — contact details

## Visual effect

The landing page includes a small raw Three.js globe, built from real land geometry (Natural Earth, 110m resolution) with glowing arcs animating between points. It's drag-to-rotate, uses low-power rendering, a capped pixel ratio, and pauses when the section is not visible or the tab is hidden. This keeps the effect appropriate for an early site on a Vercel free plan.
