module.exports = {
  plugins: {
    autoprefixer: {
      grid: false,
      browsers: ['Android > 4.4', 'iOS >= 8', 'last 2 versions'],
    },
    'postcss-pxtorem': {
      rootValue: 108,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
