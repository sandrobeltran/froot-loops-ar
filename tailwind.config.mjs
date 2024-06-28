/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(180deg, #122662 0%, #1C3A94 332.14%)",
        radial: "radial-gradient(50% 50% at 50% 50%, #292FC2 0%, #232678 100%)"
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
