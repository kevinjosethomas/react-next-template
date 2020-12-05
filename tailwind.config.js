
const colors = {
  dark: {
    100: "#16181C",
    200: "#1C1D24",
    300: "#282C35",
    400: "#202228"
  },
  emph: {
    100: "#AA85FF",
    200: "#8C61F2"
  }
};

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
