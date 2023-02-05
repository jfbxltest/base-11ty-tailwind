/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, njk}"],
  theme: {
    fontFamily: {
      sans:['Open Sans','Helvetica','Arial','Lucida','sans-serif'],
      jost: ['Jost', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      josefin: ['"Josefin Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
