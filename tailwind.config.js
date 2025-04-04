/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff9776',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
      backgroundColor: {
        'light': '#f1f5f9',
        'dark': '#0d0950',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}