/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors:{
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      letterSpacing: {
        spasi : '.5em',
      }
    },
  },
  plugins: [],
}