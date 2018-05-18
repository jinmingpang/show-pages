const path = require('path');

const userRoot = path.resolve('.');
const libRoot = path.resolve(__dirname, '..');

module.exports = {
  user: {
    root: userRoot,
    path: path.relative(`${libRoot}/src`, userRoot),
    cache: `${userRoot}/.cache`,
    dist: `${userRoot}/dist`,
    config: `${userRoot}/app.yaml`,
    pageConfig: `${userRoot}/page.yaml`,
  },
  lib: {
    root: libRoot,
    src: `${libRoot}/src`,
    dist: `${libRoot}/dist`,
    parcel: `${libRoot}/node_modules/.bin/parcel`,
    defConfig: `${libRoot}/src/app.yaml`,
    config: `${libRoot}/app.json`,
    entryTpl: `${libRoot}/src/index.tpl`,
    entryFile: `${libRoot}/dist/index.html`,
    imgstyl: `${libRoot}/dist/css/imgstyl.styl`,
  },
};
