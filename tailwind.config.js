/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        playerX: "var(--color-x)",
        playerO: "var(--color-o)",
        winGlow: "var(--color-win-glow)",
        toggleBgColor: "var(--color-toggle-bg)",
        bgColor: "var(--color-bg)",
        textColor: "var(--color-text)",
      },
      animation: {
        pop: "pop 0.3s ease-out",
        fade: "fade 0.5s ease-in-out",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
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
