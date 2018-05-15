const { spawn, exec } = require('child_process');
const fs = require('fs');
const template = require('art-template');
const yaml = require('js-yaml');
const paths = require('./paths');

const args = process.argv.splice(2);

const opts = {
  serve: '--no-cache',
  build: `--detailed-report --no-source-maps --no-cache -d ${paths.user.dist} --public-url ./`
};

if(!opts[args[0]]){
  console.log(`请输入正确的命令 serve 或者 build`)
  return;
}

if(!fs.existsSync(paths.user.config) || !fs.existsSync(paths.user.pageConfig)){
  console.log('请添加 app.yaml 和 page.yaml配置文件');
  return;
}

genarateIndexHtml();
watchFile();

if(args[0] === 'build') { // 创建构建文件夹
  if(fs.existsSync(paths.user.dist)){
    deleteFolderRecursive(paths.user.dist);
  }
  fs.mkdirSync(paths.user.dist);
}

const command = spawn(paths.lib.parcel, [
    args[0], paths.lib.entryFile
  ].concat(opts[args[0]].split(' ')
));

command.stdout.on( 'data', data => {
  process.stdout.write(`${data}`);
});

command.stderr.on('data', data => {
  process.stdout.write(`${data}`);
});

command.on('exit', code => {
  if(code === 0) return;
  console.log( `exited with code ${code}` );
});

command.on('error', (err) => {
  console.log('Failed to start child process.');
});

// 删除文件夹
function deleteFolderRecursive(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

// 生成index.html
function genarateIndexHtml() {
  try {
    const userConfig = yaml.safeLoad(fs.readFileSync(paths.user.config, 'utf8'));
    const defConfig = yaml.safeLoad(fs.readFileSync(paths.lib.config, 'utf8'));
    const config = Object.assign(defConfig, userConfig);

    if(fs.existsSync(paths.lib.entryFile)){
      fs.unlinkSync(paths.lib.entryFile);
    }

    const html = template(paths.lib.entryTpl, config);
    fs.writeFileSync(paths.lib.entryFile, html);
  } catch (e) {
    console.log('加载yaml配置文件发生错误', e);
  }
}

// 配置文件修改 自动更新
function watchFile() {
  const fileList = [
    paths.user.config,
    paths.lib.config,
    paths.lib.entryTpl
  ].forEach(path => fs.watchFile(path, genarateIndexHtml));
}

