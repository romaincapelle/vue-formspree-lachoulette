module.exports = {
  purge: [],
  theme: {
    colors: {
      yellow: '#ebb716',
      grey: '#242424',
      red: '#ce000c',
      white: '#ffffff',
      black: '#444444'
    },
    fontFamily: {
      serif: ['Playfair Display']
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
