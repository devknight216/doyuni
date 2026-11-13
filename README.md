# Doyuni idea log

Static Next.js site for `doyuni.com`. No database or server-side API — it's a public notebook for startup ideas explored (often with an AI chat) before any of them becomes a real company.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build for deployment

```bash
pnpm build
```

The static export is generated in `out/`. Ready for Vercel or another static host.

## Pages

- `/` — landing page with status counts and the most recent ideas
- `/ideas/` — full list, filterable by status
- `/ideas/[slug]/` — one idea's full write-up

## Adding an idea

Edit [data/ideas.ts](data/ideas.ts) directly — no CMS, no admin UI. Copy the `example-idea` object, give it a unique `slug`, and fill in the fields. `sections` is open-ended: add, rename, or drop headings to match whatever an AI chat actually analyzed for that idea (market, competition, risks, business model, why now, next steps, ...). Set `status` to `exploring`, `validated`, `parked`, or `dropped` as your thinking evolves, then commit and redeploy.
