import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://neometa.app',
  integrations: [
    tailwind({
      // Use our own global.css; Astro's default base reset is fine
      applyBaseStyles: false,
    }),
  ],
})
