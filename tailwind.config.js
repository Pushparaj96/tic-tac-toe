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

        // Home Button
        homeButton: "var(--home-button)",
        homeButtonHover: "var(--home-button-hover)",
        homeButtonText: "var(--home-button-text)",

        // Restart Button
        restartButton: "var(--restart-button)",
        restartButtonHover: "var(--restart-button-hover)",
        restartButtonText: "var(--restart-button-text)",

        // Modal
        modalBg: "var(--modal-bg)",
        modalBorder: "var(--modal-border)",
        modalText: "var(--modal-text)",
        modalTextHover: "var(--modal-text-hover)",

        // Modal Buttons
        cancelButton: "var(--cancel-button)",
        cancelButtonHover: "var(--cancel-button-hover)",
        cancelButtonText: "var(--cancel-button-text)",
        confirmButton: "var(--confirm-button)",
        confirmButtonHover: "var(--confirm-button-hover)",
        confirmButtonText: "var(--confirm-button-text)",

        warningButton: "var(--warning-button)",
        warningButtonHover: "var(--warning-button-hover)",
        warningButtonText: "var(--warning-button-text)",

        infoButton: "var(--info-button)",
        infoButtonHover: "var(--info-button-hover)",
        infoButtonText: "var(--info-button-text)",
      },
      animation: {
        pop: "pop 0.3s ease-out",
        fade: "fade 0.5s ease-in-out",
        scaleUp: "scaleUp 2s ease-in-out forwards infinite",
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
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.09)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
