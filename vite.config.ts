// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Static export: no server function, no SSR worker. The whole site is
  // prerendered to plain HTML/CSS/JS that any static host can serve.
  nitro: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      // Off, not on: the crawler treats every <a href> as a page to render,
      // including links to static files (e.g. the CV download), and clobbers
      // them with rendered HTML. All real routes are static file routes, so
      // auto static-path discovery finds them without crawling.
      crawlLinks: false,
    },
  },
});