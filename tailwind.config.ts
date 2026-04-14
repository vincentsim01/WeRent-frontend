import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "werent-green": {
          1: "var(--werent-green-1)",
          2: "var(--werent-green-2)",
          3: "var(--werent-green-3)",
        },
      },
      fontSize: {
        "werent-1": "var(--werent-font-1)",
        "werent-2": "var(--werent-font-2)",
        "werent-3": "var(--werent-font-3)",
        "werent-4": "var(--werent-font-4)",
      },
      fontFamily: {
        sans: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
