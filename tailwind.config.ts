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
        sans: ["var(--font-plus-jakarta-sans)", "var(--font-dm-sans)", "Poppins", "sans-serif"],
        poppins: "Poppins",
        playFaire: "Playfair Display",
        roboto: "Roboto Slab",
        openSans: "Open Sans",
        basker: "Libre Baskerville",
        jakarta: "var(--font-plus-jakarta-sans)",
        dm: "var(--font-dm-sans)"
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
