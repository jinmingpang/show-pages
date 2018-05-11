module.exports = {
  plugins: {
    'posthtml-px2rem': {
      rootValue: 108,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
};
