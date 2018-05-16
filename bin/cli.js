const { spawn } = require('child_process');
const fs = require('fs');
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

if(!opts[args[0]]){
  logger.error(`请输入正确的命令 serve 或者 build`)
  return;
}

if(!fs.existsSync(paths.user.config) || !fs.existsSync(paths.user.pageConfig)){
  logger.error('请添加 ./app.yaml 和 ./page.yaml配置文件');
  return;
}

// 初始化构建
init();

// 执行命令
const command = spawn(paths.lib.parcel, [args[0], paths.lib.entryFile]
  .concat(opts[args[0]].split(' ')
));

command.stdout.on( 'data', data => {
  const str = String(data).replace('\n', '');

  if (str.indexOf('Server running') > -1){
    return logger.persistent(`${str}\n`);
  }

  if(str.indexOf('Built') > -1){
    return logger.status(emoji.success, str.replace(/^.*(?=Built)/, ''), 'yellow');
  }

  if(str.indexOf('Building') > -1){
    return logger.status(emoji.progress, str.replace(/^.*(?=Building)/, ''), 'grey');
  }

  logger.log(str);
});

command.stderr.on('data', data => {
  logger.log(String(data).replace('\n', ''));
});

command.on('exit', code => {
  if(isBuild && code === 0){
    logger.log(chalk.yellow(`${emoji.success}  Build Success`));
    process.exit(); // when child process exited , exit the main process
  }
});

command.on('error', (err) => {
  logger.error(err);
});

// 生成index.html
function genarateIndexHtml() {
  try {
    const userConfig = yaml.safeLoad(fs.readFileSync(paths.user.config, 'utf8'));
    const defConfig = yaml.safeLoad(fs.readFileSync(paths.lib.config, 'utf8'));

    const config = Object.assign(defConfig, userConfig);

    utils.removeFile(paths.lib.entryFile);
    fs.writeFileSync(paths.lib.entryFile,  utils.template(fs.readFileSync(paths.lib.entryTpl, 'utf-8'), config));

  } catch (e) {
    logger.error('加载yaml配置文件发生错误');
    logger.error(e);
  }
}

// 配置文件修改 自动更新
function watchFile() {
  [
    paths.user.config,
    paths.lib.config,
    paths.lib.entryTpl,
  ].forEach(path => fs.watchFile(path, genarateIndexHtml));
}

// 编译 源文件
function buildLib() {
  utils.checkDir(paths.lib.dist);
  utils.copyDirRecursiveSync(paths.lib.src, paths.lib.dist, {
    withRootDir: false,
    parser:  utils.srcParser,
    filter: filePath => {
      if(/DS_Store/.test(filePath)) return false;
      return true;
    },
  });
}

// 监听源文件 变化
function watchLib() {
  fs.watch(paths.lib.src, {recursive: true}, (eventType, filename) => {
    logger.clear();
    logger.status(emoji.progress, 'Building filename...');
    utils.copyFileSync(`${paths.lib.src}/${filename}`, `${paths.lib.dist}/${filename}`, utils.srcParser);
  });
}

function init(){
  buildLib();
  genarateIndexHtml();

  if(isBuild) { // 创建构建文件夹
    utils.checkDir(paths.user.dist);
  }

  if(isServe) { // 监听文件变化
    watchFile();
    watchLib();
  }
}
