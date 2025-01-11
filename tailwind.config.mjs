/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tech-primary": "#C5B358",
        "tech-secondary": "#808080",
        "tech-dark": "#1A1A1A",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
            color: "inherit",
            a: {
              color: "#C5B358",
              "&:hover": {
                color: "#9A8A3B",
              },
            },
            "h1,h2,h3,h4": {
              color: "inherit",
              scrollMarginTop: "5rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
