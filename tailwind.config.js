/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1A1A1F',
        'bg-soft-dark': '#24242A',
        'text-primary': '#D8DFFF',
        'text-secondary': '#A9AEC9',
        'accent': '#1DD5B8',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}