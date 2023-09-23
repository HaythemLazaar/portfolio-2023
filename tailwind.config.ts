import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brand: "#CF7761",
      background: "#050505",
      badge: "#D7CDCB",
      text: "#BEBEBE",
      card: "#222222",
    },
    extend: {
      screens: {
        "3xl": "1600px",
        // => @media (min-width: 1440px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["var(--font-unbounded)"],
        par: ["var(--font-lexend)"],
      },
    },
  },
  plugins: [],
};
export default config;
