import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { sitemap } from "vite-plugin-sitemap";

//
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://your-vercel-domain.vercel.app", // Replace with your actual Vercel domain or custom domain
      routes: ["/", "/terms&privacy", "/contact-success", "/test"],
    }),
  ],
  server: {
    // proxy: {
    //   '/api': import.meta.env.VITE_API_URL
    // }
  },
});
