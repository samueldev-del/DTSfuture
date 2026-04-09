import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Le Noir du Littoral (Fondations et Textes)
        littoral: "#1A1715",
        // La Terre Rouge de l'Ouest (Boutons et Actions)
        ouest: "#C0392B",
        // Le Vert Forestier du Sud/Est (Badges et Validation)
        foret: "#234B2C",
        // Le Sable / Coton (Fond principal Light Mode)
        savane: "#F8F6F0",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-code)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;