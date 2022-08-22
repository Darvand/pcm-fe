/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      muli: ["Muli", "sans-serif"],
    },
    colors: {
      "primary-dark": "#222733",
      "secondary-dark": "#292D39",
      "third-dark": "#2b3940",
      "light-gray": "#B0B3BD",
      gray: "#54586C",
      "dark-gray": "#696C76",
      white: "#ffffff",
      blue: "#23648C",
      "light-blue": "#4CA2D8",
      dark: "#6E747B",
      black: "#000",
      call: "#D99E4C",
    },
    extend: {
      gridTemplateColumns: {
        layout: "250px 1fr",
        "table-header": "1fr 25px",
      },
      boxShadow: {
        "clean-cut": "0 0 15px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
