const path = require('path');

const userEntry = path.resolve('.');
const libEntry = __dirname;

module.exports = {
  user: {
    entry: userEntry,
    dist: `${userEntry}/dist`,
    config: `${userEntry}/app.yaml`,
    pageConfig: `${userEntry}/page.yaml`
  },
  lib: {
    entry: libEntry,
    parcel: `${libEntry}/node_modules/.bin/parcel`,
    config: `${libEntry}/src/app.yaml`,
    entryTpl: `${libEntry}/src/index.art`,
    entryFile: `${libEntry}/src/index.html`
  }
};
