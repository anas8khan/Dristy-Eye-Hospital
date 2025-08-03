/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('@tailwindcss/aspect-ratio')],
  theme: {
    extend: {
      colors:{
        primary: '#4251dc'
      }
    },
    fontFamily: {
      'Roboto': ['Roboto', 'serif'],
    },
  },
  plugins: [],
}