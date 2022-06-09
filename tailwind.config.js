const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.zinc,
        danger: colors.red,
        success: colors.emerald,
      },
    },
  },
  plugins: [],
}
