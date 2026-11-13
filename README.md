# Doyuni idea log

Next.js site for `doyuni.com`. No database — it's a private notebook for startup ideas explored (often with an AI chat) before any of them becomes a real company. The whole site is gated behind HTTP Basic Auth (see below), so it deploys as a normal Vercel app rather than a static export.

## Run locally

```bash
pnpm install
cp .env.local.example .env.local   # fill in SITE_USERNAME / SITE_PASSWORD
pnpm dev
```

## Build for deployment

```bash
pnpm build
```

Deploys to Vercel (or any Node host) as a standard Next.js app — not a static export, since the auth check in [proxy.ts](proxy.ts) needs a server to run.

## Access control

[proxy.ts](proxy.ts) gates every page behind HTTP Basic Auth. Set `SITE_USERNAME` and `SITE_PASSWORD` as environment variables in your Vercel project (Settings → Environment Variables) — never commit real credentials. This exists because Vercel's own Password Protection setting requires a Pro plan.

## Pages

- `/` — landing page with status counts and the most recent ideas
- `/ideas/` — full list, filterable by status
- `/ideas/[slug]/` — one idea's full write-up

## Adding an idea

Edit [data/ideas.ts](data/ideas.ts) directly — no CMS, no admin UI. Copy the `example-idea` object, give it a unique `slug`, and fill in the fields. `sections` is open-ended: add, rename, or drop headings to match whatever an AI chat actually analyzed for that idea (market, competition, risks, business model, why now, next steps, ...). Set `status` to `exploring`, `validated`, `parked`, or `dropped` as your thinking evolves, then commit and redeploy.
