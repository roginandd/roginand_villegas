/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007396",
        accent: "#ED8B00",
        surface: "#FFFFFF",
        ink: "#0D0D0D",
        muted: "#6B6B6B",
        outline: "#C8D0D4",
        panel: "#F4F7F8",
        subtle: "#E9EEF0",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        artifact: "780px",
        modal: "1120px",
      },
      letterSpacing: {
        technical: "-0.05em",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        backdropIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        panelIn: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.15s steps(1, end) infinite",
        "backdrop-in": "backdropIn 180ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "panel-in": "panelIn 220ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
