import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  base: "/workers/v1/tanstack",
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({
      //baseURL: '/app',
      noExternals: true,
      plugins: [
        './src/plugins/supabase.ts'
      ],
      rollupConfig: { external: [/^@sentry\//] }
    }),
    tailwindcss(),
    tanstackStart({
      // router: {
      //   basepath: '/app'
      // }
    }),
    viteReact(),
  ],
})

export default config
