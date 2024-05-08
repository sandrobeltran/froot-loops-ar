/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(180deg, #111E44 -11.11%, #1A2957 100%)",
      },
      colors: {
        primary: "#111E44",
        secondary: "#253465",
        tertiary: "#005BDA",
        links: "#93BDF8",
        light: "#F7F7F7",
        dark: "#121212",
      },
    },
  },
  plugins: [],
};
