import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/fr",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#F8F6F0",
    theme_color: "#F8F6F0",
    lang: "fr",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/pwa/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/pwa/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Nos produits",
        short_name: "Produits",
        url: "/fr/projets",
        icons: [{ src: "/pwa/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
      {
        name: "Our products",
        short_name: "Products",
        url: "/en/products",
        icons: [{ src: "/pwa/icon-192.png", sizes: "192x192", type: "image/png" }],
      },
    ],
  };
}