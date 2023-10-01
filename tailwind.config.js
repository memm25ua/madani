/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ['"League Spartan"', "sans-serif"],
        primary: ['"League Spartan"', "monospace"],
        secondary: ['"Young Serif"', "monospace"],
        title: ['"Major Mono Display"', "monospace"],
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        codgray: {
          50: "#f7f6f6",
          100: "#e5e2e3",
          200: "#cac5c6",
          300: "#a7a1a2",
          400: "#847d7e",
          500: "#6a6263",
          600: "#544d4e",
          700: "#454040",
          800: "#393636",
          900: "#322f2f",
          950: "#1a1818",
        },
        pampas: {
          50: "#f8f6f4",
          100: "#ece7e1",
          200: "#ddd5cb",
          300: "#c8b8a9",
          400: "#b19886",
          500: "#a1826e",
          600: "#947262",
          700: "#7b5d53",
          800: "#654d47",
          900: "#53403b",
          950: "#2c211e",
        },
        perano: {
          50: "#f1f7fd",
          100: "#dfedfa",
          200: "#c5dff8",
          300: "#9ccaf2",
          400: "#70afea",
          500: "#4e90e3",
          600: "#3975d7",
          700: "#3060c5",
          800: "#2d4fa0",
          900: "#29447f",
          950: "#1d2b4e",
        },
      },
      animation: {
        "slide-left": "slide-x 0.5s ease-in-out forwards",
        "fade-in": "fade 2.2s ease-in-out forwards",
        "fill-line": "fillw 0.7s ease-in-out forwards",
        "d-in": "diagonal 0.7s ease-in-out forwards",
        "scaleup": "scale 0.4s ease-in-out forwards",
        "slide-down": "slide-y 0.3s ease-in-out forwards",
      },
      keyframes: {
        "slide-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10px)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fillw: {
          "0%": { width: "0%", left: "0%" },
          "50%": { width: "100%", left: "0%" },
          "100%": { width: "0%", left: "100%" },
        },
        diagonal: {
          "0%": { height: "0px", width: "0px" },
          "100%": { height: "170px", width: "150px" },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-y": {
          "0%": { transform: "translateY(-40px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
