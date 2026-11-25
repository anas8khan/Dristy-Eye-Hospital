/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Dristy logo (royal blue + leaf green)
        primary: {
          DEFAULT: "#1d3fd1",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c3cffd",
          300: "#9aadf9",
          400: "#6b82f2",
          500: "#4560e6",
          600: "#1d3fd1",
          700: "#1832ab",
          800: "#172b88",
          900: "#14256b",
          950: "#0b1640",
        },
        leaf: {
          DEFAULT: "#22b83a",
          50: "#effcf0",
          100: "#d9f8dc",
          200: "#b3efba",
          300: "#7ee28b",
          400: "#45cc57",
          500: "#22b83a",
          600: "#16962c",
          700: "#157626",
        },
        navy: "#0b1640",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans Devanagari", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Plus Jakarta Sans", "Noto Sans Devanagari", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,22,64,.04), 0 8px 24px -6px rgba(11,22,64,.10)",
        lift: "0 2px 4px rgba(11,22,64,.05), 0 20px 40px -12px rgba(11,22,64,.22)",
      },
    },
  },
  plugins: [],
};
