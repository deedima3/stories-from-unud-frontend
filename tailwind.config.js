module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /plugin\.css$/,
        loaders: ['style-loader', 'css'],
      },
    ],
  },
}
