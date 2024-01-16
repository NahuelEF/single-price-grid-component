/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./docs/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Karla"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-cyan": "hsl(179, 62%, 43%)",
      "bright-yellow": "hsl(71, 73%, 54%)",
      "light-gray": "hsl(204, 43%, 93%)",
      "grayish-blue": "hsl(218, 22%, 67%)",
    },
  },
  plugins: [],
};
