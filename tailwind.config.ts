import type { Config } from 'tailwindcss'
import { neoMetaPreset } from '@neometa/brand/tailwind'

/**
 * The umbrella site is the only surface that uses ALL four pillar colors
 * deliberately — when introducing the system itself. So no `brand` alias
 * override here; the preset's pillar tokens are consumed directly.
 */
export default {
  presets: [neoMetaPreset],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
} satisfies Config
