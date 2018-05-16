const config = require('./app.json') || {};

module.exports = {
  plugins: {
    'posthtml-px2rem': {
      rootValue: config.designWidth || 750,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
};
