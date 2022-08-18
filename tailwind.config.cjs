/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      muli: ["Muli", "sans-serif"],
    },
    colors: {
      "primary-dark": "#232E3D",
      "secondary-dark": "#2B383F",
      "third-dark": "#2B383F",
      "light-gray": "#B0B3BD",
      gray: "#54586C",
      "dark-gray": "#696C76",
      white: "#ffffff",
      blue: "#2F466C",
      "light-blue": "#4CA2D8",
      dark: "#6E747B",
    },
    extend: {},
  },
  plugins: [],
};
