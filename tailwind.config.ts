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
          DEFAULT: "#191c29", // cool graphite near-black
          soft: "#3f4759",
          muted: "#7a8396",
        },
        canvas: {
          DEFAULT: "#f6f7fc", // ice off-white
          soft: "#eceffa",
          panel: "#ffffff",
        },
        // primary accent — soft violet / iris
        iris: {
          50: "#f5f3ff",
          100: "#eae4ff",
          200: "#d6caff",
          300: "#b9a4fb",
          400: "#9b80f7",
          500: "#7d5cf0",
          600: "#6a45e0",
          700: "#5733b8",
        },
        // secondary — ice blue
        ice: {
          50: "#eef5fe",
          100: "#dcebfd",
          200: "#c0dcfb",
          300: "#95c4f6",
          400: "#62a4ef",
          500: "#3a83e6",
          600: "#2a66c8",
          700: "#224f9e",
        },
        // tertiary accent — aqua (gradient tail / subtle highlights)
        aqua: {
          200: "#c2f0f1",
          300: "#93e3e6",
          400: "#56cdd4",
          500: "#2fb3bd",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(115deg, #6a45e0 0%, #7d5cf0 28%, #3a83e6 68%, #56cdd4 100%)",
        "soft-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(125,92,240,0.14) 0%, rgba(246,247,252,0) 70%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(25,28,41,0.05), 0 10px 30px rgba(25,28,41,0.07)",
        lift: "0 2px 10px rgba(25,28,41,0.06), 0 22px 55px rgba(106,69,224,0.16)",
        glow: "0 0 0 1px rgba(125,92,240,0.20), 0 18px 50px rgba(125,92,240,0.20)",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -28px) scale(1.06)" },
          "66%": { transform: "translate(-18px, 18px) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-9px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "blob-drift": "blob-drift 18s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
