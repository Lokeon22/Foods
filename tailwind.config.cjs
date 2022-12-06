/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],
        Roboto: ["'Roboto', sans-serif"],
      },
    },
  },
  plugins: [],
};
