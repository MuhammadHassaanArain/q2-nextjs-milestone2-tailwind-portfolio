import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundDark: '#1c1c1e',
        accentOrange: '#ff9500',
        textLight: '#e5e5e7',
        textSecondary: '#a1a1a4',
      },
    },
  },
  plugins: [],
};
export default config;
