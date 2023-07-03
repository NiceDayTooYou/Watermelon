/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: '#141529',
        secondary: '#F45050',
        fortext: '#F9D949'
      },
      fontFamily: {
        firaCode: "'Fira Code', monospace",
        bitFont: "'Silkscreen', cursive",
        japanFont: "'Noto Sans JP', sans-serif"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}