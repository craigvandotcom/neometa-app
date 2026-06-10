# neometa-app — Agent Entry Point

## What this is

| Field | Value |
|---|---|
| **Name** | neometa-app |
| **Status** | **This repo holds tooling only** (`.claude/`, `memory/`; single branch, no app code) — the live site at neometa.app is deployed from elsewhere (location unconfirmed, flagged 2026-06-10); site code lands here if/when consolidated |
| **Will be / is** | Umbrella site for the neoMeta system — Astro 5 + TS + Tailwind + `@neometa/brand`. Light surface; uses all four pillar colors only when introducing the system |
| **Domain** | neometa.app |

## Shared infrastructure (inherited — rules in the memory substrate)

- Brand: `@neometa/brand` preset; source of truth `../neometa-brand/brand-system.md`
- If a backend ever lands: shared Supabase project rules → `rule-shared-supabase-schemas`,
  `rule-cross-app-migrations-bca-host`

## Rules

- Follow `../AGENTS.md` (software-level conventions).
- Durable lessons → `memory/auto/` per the `context-engineering` skill.
