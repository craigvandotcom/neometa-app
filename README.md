# neometa.app

The umbrella site for neoMeta — the calm center of the eat.move.meditate health portfolio.

Built with Astro 5, Tailwind 3, and `@neometa/brand` (consumed via git URL until the brand package is published to npm).

## Stack

- **Framework:** Astro 5
- **Styling:** Tailwind 3 + [`@neometa/brand`](https://github.com/craigvandotcom/neometa-brand) preset
- **Hosting:** Vercel (planned)
- **Domain:** neometa.app

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview built site
```

## Brand

This site is the canonical consumer of `@neometa/brand` and the only surface that
uses all four pillar colors deliberately (when introducing the system itself).
Visual restraint is non-negotiable — the umbrella's job is to be the calmest
surface in the system.

The full brand spec lives in [neometa-brand/brand-system.md](https://github.com/craigvandotcom/neometa-brand/blob/main/brand-system.md).

## License

MIT © Craig van Heerden
