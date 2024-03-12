/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
};
