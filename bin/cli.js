const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');
const chalk = require('chalk');
const logger = require('parcel-bundler/src/Logger');
const emoji = require('parcel-bundler/src/utils/emoji');
const paths = require('./paths');
const utils = require('./utils');

const args = process.argv.splice(2);

const opts = {
  serve: '--no-cache',
  build: `--detailed-report --no-source-maps --no-cache -d ${paths.user.dist} --public-url ./`,
};

const isServe = args[0] === 'serve';
const isBuild = args[0] === 'build';

if (!opts[args[0]]) {
  logger.error(`请输入正确的命令 serve 或者 build`);
  return;
}

if (!fs.existsSync(paths.user.config) || !fs.existsSync(paths.user.pageConfig)) {
  logger.error('请添加 ./app.yaml 和 ./page.yaml配置文件');
  return;
}

// 初始化构建
init();

// 执行命令
const command = spawn(
  paths.lib.parcel,
  [args[0], paths.lib.entryFile].concat(opts[args[0]].split(' '))
);

command.stdout.on('data', data => {
  const str = String(data).replace('\n', '');

  if (str.indexOf('Server running') > -1) {
    return logger.persistent(`${str}\n`);
  }

  if (str.indexOf('Built') > -1) {
    return logger.status(emoji.success, str.replace(/^.*(?=Built)/, ''), 'yellow');
  }

  if (str.indexOf('Building') > -1) {
    return logger.status(emoji.progress, str.replace(/^.*(?=Building)/, ''), 'grey');
  }

  logger.log(str);
});

command.stderr.on('data', data => {
  logger.log(String(data).replace('\n', ''));
});

command.on('exit', code => {
  if (isBuild && code === 0) {
    logger.log(chalk.yellow(`${emoji.success}  Build Success`));
    process.exit(); // when child process exited , exit the main process
  }
});

command.on('error', err => {
  logger.error(err);
});

// 生成index.html
function genarateIndexHtml() {
  try {
    const userConfig = yaml.safeLoad(fs.readFileSync(paths.user.config, 'utf8'));
    const defConfig = yaml.safeLoad(fs.readFileSync(paths.lib.defConfig, 'utf8'));

    const config = Object.assign(defConfig, userConfig);

    utils.removeFile(paths.lib.entryFile);
    utils.removeFile(paths.lib.config);

    fs.writeFileSync(paths.lib.config, JSON.stringify(config));
    fs.writeFileSync(
      paths.lib.entryFile,
      utils.template(fs.readFileSync(paths.lib.entryTpl, 'utf-8'), config)
    );
  } catch (e) {
    logger.error('加载yaml配置文件发生错误');
    logger.error(e);
  }
}

function genarateImageStyl() {
  const pageConfig = yaml.safeLoad(fs.readFileSync(paths.user.pageConfig, 'utf8'));
  let imgstyl = '@import "./mixins"\n';
  pageConfig.forEach((page, index) => {
    let styl = ``;
    for (const key in page.doms) {
      const { image, postion = [0, 0] } = page.doms[key];
      if (!image) return;

      let imgpath = '';
      if (util.isBoolean(image)) {
        imgpath = util.format('"../%s/images/%s.png"', paths.user.path, key);
      }
      if (util.isString(image)) {
        imgpath = image.indexOf('http') > -1 ? image : path.join(__dirname, paths.user.root, image);
      }
      // eslint-disable-next-line
      styl += util.format(
        '\t.%s\n\t\tbackground-image url(%s)\n\t\timg = ' +
          'image-size(%s)\n\t\twidth img[0]\n\t\theight img[1]\n\t\timg-pos(img[0], img[1], %s)\n',
        key,
        imgpath,
        imgpath,
        postion.join(', ')
      );
    }
    if (styl) {
      imgstyl += util.format('.page-%d\n%s', index + 1, styl);
    }
  });
  fs.writeFileSync(paths.lib.imgstyl, imgstyl);
}

// 配置文件修改 自动更新
function watchFile() {
  [paths.user.config, paths.lib.defConfig, paths.lib.entryTpl].forEach(filepath =>
    fs.watchFile(filepath, genarateIndexHtml)
  );
  fs.watchFile(paths.user.pageConfig, genarateImageStyl);
}

// 编译 源文件
function buildLib() {
  utils.checkDir(paths.lib.dist);
  utils.copyDirRecursiveSync(paths.lib.src, paths.lib.dist, {
    withRootDir: false,
    parser: utils.srcParser,
    filter: utils.srcFilter,
  });
}

// 监听源文件 变化
function watchLib() {
  fs.watch(paths.lib.src, { recursive: true }, (eventType, filename) => {
    const source = `${paths.lib.src}/${filename}`;
    if (!utils.srcFilter(source)) return;

    logger.clear();
    logger.status(emoji.progress, 'Building filename...');
    utils.copyFileSync(source, `${paths.lib.dist}/${filename}`, utils.srcParser);
  });
}

function init() {
  buildLib();
  genarateImageStyl();
  genarateIndexHtml();

  if (isBuild) {
    // 创建构建文件夹
    utils.checkDir(paths.user.dist);
  }

  if (isServe) {
    // 监听文件变化
    watchFile();
    watchLib();
  }
}
