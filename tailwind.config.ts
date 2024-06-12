import type { Config } from "tailwindcss";

const colors = {
  brand: {
    black: "#2d2f3b",
    white: "#f7f7f7",
    light: "#1bbb99",
    medium: "#218c79",
    dark: "#275d5a",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
export default config;
