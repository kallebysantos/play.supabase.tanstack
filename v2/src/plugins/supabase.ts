import { definePlugin } from "nitro";

const BASE_PATH = process.env.TANSTACK_BASE_PATH ?? '/workers/v1/tanstack';
const URL_REWRITE = !!process.env.URL_REWRITE

export default definePlugin((nitroApp) => {
  console.log('Supabase PLUGIN:', URL_REWRITE)

  if (URL_REWRITE) {
    const originalFetch = nitroApp.fetch;

    nitroApp.fetch = (req) => {
      const url = new URL(req.url)
      if (url.pathname !== BASE_PATH && !url.pathname.startsWith(BASE_PATH)) {
        url.pathname = BASE_PATH + url.pathname;
      }

      const proxyReq = new Request(url, req)

      return originalFetch(proxyReq)
    }
  }

  nitroApp.hooks.hook("request", (event) => {
    console.log("on request", event.req.url);
  });
});
