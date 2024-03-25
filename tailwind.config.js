/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        primary: "#8753D4",
        "primary-gray": "#362E41",

        secondary: "#FFDB5C",
        dark: "#120920",
      },
    },
  },
  plugins: [],
};
