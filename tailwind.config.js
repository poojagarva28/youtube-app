/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "-5px 5px 0px #ffdb58",
        "2xl": "-5px 5px 0px #daf5f0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
};
