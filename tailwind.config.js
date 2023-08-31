/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Salaryman"', "sans-serif"],
        primary: ['"Tajawal"', "monospace"],
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
        "slide-down": "slide-y 0.5s ease-in-out forwards",
        "slide-down-xl": "slide-y-xl 0.5s ease-in-out forwards",
        "slide-up-xl": "slide-y-xl 0.5s ease-in-out reverse forwards",
        "fade-in": "fade 2.2s ease-in-out forwards",
      },
      keyframes: {
        "slide-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10px)" },
        },
        "slide-y": {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-y-xl": {
          "0%": { transform: "translateY(-170px)" },
          "100%": { transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
