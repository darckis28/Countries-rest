/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "Dark-blue": "hsl(228, 39%, 23%)",
      "Very-Dark-Blue": "hsl(207, 26%, 17%)",
      "Very-Dark-Blue-text": "hsl(200, 15%, 8%)",
      "Dark-gray": "hsl(0, 0%, 52%)",
      "Very-light-gray": "hsl(0, 0%, 98%)",
    },
    extend: {
      fontFamily: {
        NunitoSams: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
