import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  base: "/workers/v1/tanstack-final",
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({
      baseURL: '/workers/v1/tanstack-final',
      noExternals: true,
      plugins: [
        './src/plugins/supabase.ts'
      ],
      rollupConfig: { external: [/^@sentry\//] }
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
