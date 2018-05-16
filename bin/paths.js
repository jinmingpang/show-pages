const path = require('path');

const userRoot = path.resolve('.');
const libRoot = path.resolve(__dirname, '..');

module.exports = {
  user: {
    root: userRoot,
    path: path.relative(`${libRoot}/src`, userRoot),
    dist: `${userRoot}/dist`,
    config: `${userRoot}/app.yaml`,
    pageConfig: `${userRoot}/page.yaml`
  },
  lib: {
    src: `${libRoot}/src`,
    dist: `${libRoot}/dist`,
    parcel: `${libRoot}/node_modules/.bin/parcel`,
    config: `${libRoot}/dist/app.yaml`,
    entryTpl: `${libRoot}/dist/index.tpl`,
    entryFile: `${libRoot}/dist/index.html`
  }
};
