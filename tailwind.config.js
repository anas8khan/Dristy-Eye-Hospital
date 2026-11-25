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
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(18px, -22px, 0)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        kenburns: {
          from: { transform: "scale(1.12)" },
          to: { transform: "scale(1)" },
        },
        heartbeat: {
          "0%, 60%, 100%": { transform: "scale(1)" },
          "15%": { transform: "scale(1.28)" },
          "30%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.15)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "zoom-in": {
          from: { opacity: "0", transform: "scale(.94)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "ring-pulse": {
          "0%": { transform: "scale(1)", opacity: ".55" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "float-slower": "float 20s ease-in-out infinite reverse",
        "float-y": "float-y 4s ease-in-out infinite",
        kenburns: "kenburns 10s ease-out both",
        heartbeat: "heartbeat 2.6s ease-in-out infinite",
        "fade-in": "fade-in .3s ease-out both",
        "zoom-in": "zoom-in .35s cubic-bezier(.22,1,.36,1) both",
        "ring-pulse": "ring-pulse 2.2s cubic-bezier(0,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};
