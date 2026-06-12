/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./components/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#d72229",
          red: "#d72229",
        },
      },
    },
  },
  plugins: [],
};
