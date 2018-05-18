const fs = require('fs');
const path = require('path');
const paths = require('./paths');

// 删除文件
const removeFile = filePath => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// 删除文件夹
const removeDirRecursiveSync = srouce => {
  if (fs.existsSync(srouce)) {
    fs.readdirSync(srouce).forEach(file => {
      const curPath = `${srouce}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        removeDirRecursiveSync(curPath);
      } else {
        // delete file
        removeFile(curPath);
      }
    });
    fs.rmdirSync(srouce);
  }
};

// 检查需求文件夹,不存在则创建一个新文件夹
const checkDir = srouce => {
  if (fs.existsSync(srouce)) {
    removeDirRecursiveSync(srouce);
  }
  fs.mkdirSync(srouce);
};

// 复制文件
const copyFileSync = (source, target, parser) => {
  let targetFile = target;
  // if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  const newFile = parser ? parser(source, targetFile) : fs.readFileSync(source);

  fs.writeFileSync(targetFile, newFile);
};

// 复制文件夹
const copyDirRecursiveSync = (source, target, options = {}) => {
  let files = [];
  const { filter, parser, withRootDir = true } = options;

  // check if folder needs to be created or integrated
  let targetFolder = path.join(target, path.basename(source));

  if (!withRootDir) {
    // not copy with the root dir
    const targetDirName = path.basename(target);
    targetFolder = targetFolder.replace(`${targetDirName}/src`, targetDirName);
  }

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // copy recursive
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(file => {
      const curSource = path.join(source, file);
      if (filter) {
        // filter the copy
        if (!filter(curSource)) return;
      }

      if (fs.lstatSync(curSource).isDirectory()) {
        copyDirRecursiveSync(curSource, targetFolder, options);
      } else {
        copyFileSync(curSource, targetFolder, parser);
      }
    });
  }
};

// 字符串模版
const template = (tpl, data) => {
  const re = /<%([^%>]+)?%>/g;
  const reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;
  let code = 'var r=[];\n';
  let cursor = 0;
  let match;

  const add = (line, js) => {
    /* eslint-disable no-unused-expressions */
    js
      ? (code += line.match(reExp) ? `${line}\n` : `r.push(${line});\n`)
      : (code += line !== '' ? `r.push("${line.replace(/"/g, '\\"')}");\n` : '');
    return add;
  };

  while ((match = re.exec(tpl))) {
    add(tpl.slice(cursor, match.index))(match[1], true);
    cursor = match.index + match[0].length;
  }
  add(tpl.substr(cursor, tpl.length - cursor));
  code += 'return r.join("");';
  // eslint-disable-next-line
  return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
};

const srcParser = (fileName, target) => {
  const file = fs.readFileSync(fileName, 'utf-8');

  if (/lib|assets/.test(fileName)) return file;

  if (/\.js|styl/.test(fileName)) {
    const resolvePath = path.relative(path.dirname(target), paths.user.root);
    return file.replace(/USER_ROOT_PATH/g, resolvePath);
  }

  return file;
};

const srcFilter = filePath => {
  if (/DS_Store|src\/(app\.yaml|index.tpl)/.test(filePath)) return false;
  return true;
};

module.exports = {
  removeDirRecursiveSync,
  checkDir,
  removeFile,
  copyFileSync,
  copyDirRecursiveSync,
  srcParser,
  template,
  srcFilter,
};
