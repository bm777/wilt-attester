const { join } = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{html,js}"), 
    join(__dirname, "./components/**/*.{html,js}")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
