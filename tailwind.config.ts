import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // content.ts holds literal Tailwind class strings (skill/interest colors),
    // so it must be scanned too or those utilities get purged.
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1f1813", // warm near-black
          soft: "#4a3f37",
          muted: "#8a7a6e",
        },
        canvas: {
          DEFAULT: "#fffaf5", // warm off-white
          soft: "#fdf1e7",
          panel: "#ffffff",
        },
        // primary accent — apricot / orange
        apricot: {
          50: "#fff7f0",
          100: "#ffedde",
          200: "#ffdcc2",
          300: "#ffc196",
          400: "#ff9f5a",
          500: "#f5832f",
          600: "#d3650f",
        },
        // secondary — peach / coral
        peach: {
          200: "#ffe2d4",
          300: "#ffc6ad",
          400: "#ffa07a",
          500: "#f5784d",
        },
        // tertiary — golden / sun
        sun: {
          400: "#ffc266",
          500: "#f5a623",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(120deg, #f5832f 0%, #ff9f5a 48%, #ffc266 100%)",
        "soft-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(245,131,47,0.12) 0%, rgba(255,250,245,0) 70%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,24,19,0.04), 0 8px 30px rgba(31,24,19,0.06)",
        lift: "0 2px 8px rgba(31,24,19,0.05), 0 18px 50px rgba(245,131,47,0.14)",
        glow: "0 0 0 1px rgba(245,131,47,0.18), 0 18px 50px rgba(245,131,47,0.16)",
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
