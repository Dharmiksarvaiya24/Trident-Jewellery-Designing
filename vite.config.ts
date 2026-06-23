import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    build: {
    // Inline small assets to reduce HTTP requests (4KB threshold is good)
    assetsInlineLimit: 4096,
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Disable sourcemaps in production for smaller builds
    sourcemap: false,
    // Minify with esbuild (default, faster)
    minify: "esbuild",
    // Target modern browsers for smaller bundles
    target: "es2020",
    rollupOptions: {
      output: {
        // Optimize chunking strategy for better caching and loading
        manualChunks(id) {
          // React core - loaded first, heavily cached
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "vendor";
          }
          // Animations - loaded on demand
          if (id.includes("node_modules/framer-motion")) {
            return "animations";
          }
          // Radix UI primitives - often loaded together
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-ui";
          }
          // Utility libraries
          if (id.includes("node_modules/class-variance-authority") || id.includes("node_modules/clsx") || id.includes("node_modules/tailwind-merge")) {
            return "utils";
          }
          // Lucide icons - loaded as needed
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
          // Sonner and other UI libraries
          if (id.includes("node_modules/sonner")) {
            return "ui-libs";
          }
        },
        // Ensure consistent chunk naming for better caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: (info) => {
          const infoSrc = typeof info === "string" ? info : info.name || "";
          // Keep hash for cache busting but organize by type
          const hash = infoSrc.includes("[hash]") ? "[hash]" : "";
          if (/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/.test(infoSrc)) {
            return `assets/images/[name]-${hash || "[hash]"}[extname]`;
          }
          if (/\.css(\?.*)?$/.test(infoSrc)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  // Asset optimization settings
  esbuild: {
    logLevel: "error",
  },
}));
