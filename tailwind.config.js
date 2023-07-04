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
        fortext: '#F9D949',
        shadowBro: '#B2A4FF',
        boxColor: '#330100',
        docker: '#2496ED',
        go: '#00ADD8',
        bash: '#4EAA25',
        k8s: '#326CE5',
        telwin: '#06B6D4',
        linux: '#FCC624'
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