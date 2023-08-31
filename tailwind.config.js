/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,

      },
      fontFamily: {
        SfPro: ['SF PRO', 'Sans Serif'],

      },

    },
    colors: {
      ...colors,
      "StateGray": "#6B7280",
      "WarningColor": "#FF6739",
      "BG2": "#F3F3F3",
      "Text2": "#4E5D78",
      "InputGray": "#78828A",
      "CheckedPeople": "#0028551A",
      "BG3": "#FAFBFC",
      "PrimaryNavy": "#002855",
      "BaseGray": "#F5F5F5",
      "Gray700": "#666E7D",
      "StrokeColor": "#E5E7EB",

    }
  },
  plugins: [],
}