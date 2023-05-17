/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "goalsetter-blue": "#17BFDD",
        "goalsetter-purple": "#500F71",
        "goalsetter-purple-100": "#9733CA",
        "goalsetter-gray-100": "#A0A1A4",
        "goalsetter-gray-200": "rgba(0, 0, 0, 0.6)",
        "goalsetter-yellow-100": "#F3A802",
        "goalsetter-red-100": "#E65151"
      }
    },
  },
  plugins: [],
}

