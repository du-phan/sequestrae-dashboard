import type { Config } from "tailwindcss";
import { colorPalette } from "./app/ui/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        // Add our custom palette to Tailwind's colors
        lavender: colorPalette.lavender,
        tealCustom: colorPalette.teal,
        blueCustom: colorPalette.blue,
        greenCustom: colorPalette.green,
        amberCustom: colorPalette.amber,
        roseCustom: colorPalette.rose,
      },
      animation: {
        "slow-pulse": "slow-pulse 15s ease-in-out infinite",
        blob: "blob 20s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      "slow-pulse": {
        "0%, 100%": {
          opacity: "0.4",
          transform: "translateY(0)",
        },
        "50%": {
          opacity: "0.5",
          transform: "translateY(-20px)",
        },
      },
      blob: {
        "0%, 100%": {
          transform: "translate(0, 0) scale(1)",
        },
        "25%": {
          transform: "translate(10px, -10px) scale(1.02)",
        },
        "50%": {
          transform: "translate(0, 10px) scale(1.05)",
        },
        "75%": {
          transform: "translate(-10px, -5px) scale(1.03)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
