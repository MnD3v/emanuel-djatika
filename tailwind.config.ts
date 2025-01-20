import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: "Poppins",
        playFaire: "Playfair Display",
        roboto: "Roboto Slab",
        openSans: "Open Sans",
        basker: "Libre Baskerville"
      },
      colors: {
        morange: "#F95D51",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
