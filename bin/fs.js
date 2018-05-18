const fs = require('fs');
const promisify = require('parcel-bundler/src/utils/promisify');

exports.promisify = promisify;
exports.readFile = promisify(fs.readFile);
exports.writeFile = promisify(fs.writeFile);
exports.stat = promisify(fs.stat);
exports.readdir = promisify(fs.readdir);
exports.unlink = promisify(fs.unlink);
exports.readdir = promisify(fs.readdir);
exports.lstat = promisify(fs.lstat);
exports.rmdir = promisify(fs.rmdir);
exports.mkdir = promisify(fs.mkdir);

exports.exists = filename => {
  return new Promise(resolve => {
    fs.exists(filename, resolve);
  });
};
