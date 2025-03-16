const { colorPalette } = require("./app/ui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
    },
  },
  plugins: [],
};
