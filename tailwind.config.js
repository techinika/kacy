/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./components/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
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
