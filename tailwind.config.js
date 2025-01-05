/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#032541',
        'lightblue': '#01B4E4',
      },
      fontFamily: {
        'sans-new': ['"Source Sans 3"', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gr-b-gradient': 'linear-gradient(to right, rgba(30, 213, 169, 1), rgba(1, 180, 228, 1))',
        'wh-gr-gradient': 'linear-gradient(to right, rgba(192,254,207,1), rgba(30,213,169, 1))',
        'or-red-gradient': 'linear-gradient(to right, rgba(253,193,112,1), rgba(217,59,99, 1))',
        'gr-gradient': 'linear-gradient(to right,#c0fecf 0%,#1ed5a9 100%)'
      },
    },
  },
  plugins: [],
}