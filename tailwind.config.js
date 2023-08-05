/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Salaryman"', "sans-serif"],
        primary: ['"Inconsolata"', "monospace"],
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
      },
      animation: {
        "slide-left": "slide 0.5s ease-in-out forwards",
        "slide-down": "slide-y 0.5s ease-in-out forwards",
        "slide-down-xl": "slide-y-xl 0.5s ease-in-out forwards",
        "slide-up-xl": "slide-y-xl 0.5s ease-in-out reverse forwards",
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
        }

      },
    },
  },
  plugins: [],
};
