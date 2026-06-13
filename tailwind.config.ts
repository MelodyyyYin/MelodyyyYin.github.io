import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15131c", // near-black with a faint violet cast
          soft: "#3a3548",
          muted: "#6b6577",
        },
        canvas: {
          DEFAULT: "#faf9fc", // off-white
          soft: "#f3f1f7",
          panel: "#ffffff",
        },
        lavender: {
          50: "#f6f4fb",
          100: "#ece7f8",
          200: "#dcd2f1",
          300: "#c3b1e6",
          400: "#a98fd6",
          500: "#9070c4",
          600: "#7857a8",
        },
        rose: {
          200: "#f2d9e0",
          300: "#e7b9c6",
          400: "#d894a8",
          500: "#c47189",
        },
        haze: {
          400: "#8ea2e8",
          500: "#6f86d8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(120deg, #9070c4 0%, #8ea2e8 45%, #d894a8 100%)",
        "soft-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(144,112,196,0.10) 0%, rgba(250,249,252,0) 70%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,19,28,0.04), 0 8px 30px rgba(21,19,28,0.06)",
        lift: "0 2px 8px rgba(21,19,28,0.05), 0 18px 50px rgba(120,87,168,0.12)",
        glow: "0 0 0 1px rgba(144,112,196,0.18), 0 18px 50px rgba(120,87,168,0.14)",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -28px) scale(1.06)" },
          "66%": { transform: "translate(-18px, 18px) scale(0.96)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "blob-drift": "blob-drift 18s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
