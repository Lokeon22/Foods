/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "index.html"],
  theme: {
    extend: {
      animation: {
        modifyScale: "modifyScale 0.7s ease-in-out",
      },
      keyframes: {
        modifyScale: {
          "0, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
      },
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],
        Roboto: ["'Roboto', sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
