// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({569:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],18:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":569}],6:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":18}],8:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":18}],10:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../images/up-arrow.png":[["up-arrow.84453794.png",213],213],"./../images/bg-normal.jpg":[["bg-normal.02feab66.jpg",215],215],"./../images/bg-normal-bottom.jpg":[["bg-normal-bottom.bec6a57e.jpg",217],217],"./../images/page-bg.jpg":[["page-bg.1472cfab.jpg",219],219],"./../images/bg-page-8.jpg":[["bg-page-8.6cb53828.jpg",221],221],"./../images/bg-no-thing.jpg":[["bg-no-thing.b1c79009.jpg",223],223],"./../images/num-blue.png":[["num-blue.cbb1c1c7.png",225],225],"./../images/fz-1.png":[["fz-1.00cb0389.png",227],227],"./../images/fz-2.png":[["fz-2.f5744224.png",229],229],"./../images/fz-3.png":[["fz-3.bb31f5ee.png",231],231],"./../images/fz-4.png":[["fz-4.8622c2f5.png",233],233],"./../images/fz-5.png":[["fz-5.a511bc41.png",235],235],"./../images/yun-xing-da.png":[["yun-xing-da.fda00227.png",237],237],"./../images/xiang-shuang.png":[["xiang-shuang.6442d1ff.png",239],239],"./../images/yun-chui.png":[["yun-chui.9a2652b4.png",241],241],"./../images/wang-yuan-jing.png":[["wang-yuan-jing.c1e1bb12.png",243],243],"./../images/qi-qiu.png":[["qi-qiu.7a1bfa64.png",245],245],"./../images/text-yang-guang.png":[["text-yang-guang.5fd59668.png",247],247],"./../images/dian-nao.png":[["dian-nao.2672877a.png",249],249],"./../images/fei-ji-right.png":[["fei-ji-right.a1d157ae.png",251],251],"./../images/xing-xiao.png":[["xing-xiao.5236d081.png",253],253],"./../images/fang-da-jing.png":[["fang-da-jing.68fc4a39.png",255],255],"./../images/tian-wen-jing.png":[["tian-wen-jing.8592f40c.png",257],257],"./../images/bi-fei-ren.png":[["bi-fei-ren.46661848.png",259],259],"./../images/dna-fenzi.png":[["dna-fenzi.509669b9.png",261],261],"./../images/ren-nan.png":[["ren-nan.9374bcee.png",263],263],"./../images/ren-nv.png":[["ren-nv.aaadeeaa.png",265],265],"./../images/deng-pao.png":[["deng-pao.1d9c7c23.png",267],267],"./../images/left-arrow.png":[["left-arrow.522b3ffd.png",269],269],"./../images/right-arrow.png":[["right-arrow.bfd88689.png",271],271],"./../images/huo-pao.png":[["huo-pao.7d822f04.png",273],273],"./../images/dian-shi.png":[["dian-shi.799ff123.png",275],275],"./../images/yan-hua.png":[["yan-hua.81cedacb.png",277],277],"./../images/da-mu-zhi.png":[["da-mu-zhi.ff6ae947.png",279],279],"./../images/xiao-huo-pao.png":[["xiao-huo-pao.617aa2c7.png",281],281],"./../images/peng-you.png":[["peng-you.0c07b05b.png",283],283],"./../images/jiang-bei.png":[["jiang-bei.af905a89.png",285],285],"./../images/lu-biao.png":[["lu-biao.9c6010d6.png",287],287],"./../images/up-down-arrow.png":[["up-down-arrow.07c32c6e.png",289],289],"./../images/xiao-nan-hai.png":[["xiao-nan-hai.b2fed1a6.png",291],291],"./../images/xiao-nv-hai.png":[["xiao-nv-hai.892239cf.png",293],293],"./../images/xian-kuang.png":[["xian-kuang.dff77e60.png",295],295],"./../images/mao-er-board.png":[["mao-er-board.2c7c0882.png",297],297],"./../images/xiao-xiong.png":[["xiao-xiong.5719c794.png",299],299],"./../images/bi-xin.png":[["bi-xin.b68938c4.png",301],301],"./../images/re-qi-qiu.png":[["re-qi-qiu.c5aa0c81.png",303],303],"./../images/x-zhou.png":[["x-zhou.a9d7d9b6.png",305],305],"./../images/up-right-arrow.png":[["up-right-arrow.5f4d770c.png",307],307],"./../images/left-bar.png":[["left-bar.3229df97.png",309],309],"./../images/right-bar.png":[["right-bar.fef2ed89.png",311],311],"./../images/yun-que.png":[["yun-que.32ecab1f.png",313],313],"./../images/jiang-bei-ren.png":[["jiang-bei-ren.003d93f3.png",315],315],"./../images/x-zhou-1.png":[["x-zhou-1.09793cd4.png",317],317],"./../images/up-right-arrow-1.png":[["up-right-arrow-1.1cc6d47c.png",319],319],"./../images/left-bar-1.png":[["left-bar-1.b467d3bc.png",321],321],"./../images/right-bar-1.png":[["right-bar-1.81e3b975.png",323],323],"./../images/fen-zi.png":[["fen-zi.3ef3e9d8.png",325],325],"./../images/dna-xuan.png":[["dna-xuan.f918f335.png",327],327],"./../images/li-wu.png":[["li-wu.05ca49b1.png",329],329],"./../images/di-ifer.png":[["di-ifer.a14063cf.png",331],331],"./../images/xiao-huo-che.png":[["xiao-huo-che.5da326c5.png",333],333],"./../images/xiao-fei-ji.png":[["xiao-fei-ji.795f4b95.png",335],335],"./../images/wan-shua.png":[["wan-shua.e843158a.png",337],337],"./../images/shu-ben.png":[["shu-ben.278b8c22.png",339],339],"./../images/nai-fen.png":[["nai-fen.008486ed.png",341],341],"./../images/sha-bao.png":[["sha-bao.817162e3.png",343],343],"./../images/xue-xi.png":[["xue-xi.f108884e.png",345],345],"./../images/xiao-yun.png":[["xiao-yun.1ee587a0.png",347],347],"./../images/yun-yang.png":[["yun-yang.b2215c49.png",349],349],"./../images/hai-zi-wang.png":[["hai-zi-wang.0a897a46.png",351],351],"./../images/lun-qi-jian-dian.png":[["lun-qi-jian-dian.4388b270.png",353],353],"./../images/lun-tian-mao.png":[["lun-tian-mao.a4c73f15.png",355],355],"./../images/lun-xin-lin-shou.png":[["lun-xin-lin-shou.317dde59.png",357],357],"./../images/di-yi-icon-2.png":[["di-yi-icon-2.102eb3db.png",359],359],"./../images/di-er-icon-2.png":[["di-er-icon-2.3e4e6757.png",361],361],"./../images/di-san-icon-2.png":[["di-san-icon-2.f9c4608a.png",363],363],"./../images/di-si-icon-2.png":[["di-si-icon-2.6fd1e57a.png",365],365],"./../images/di-wu-icon-2.png":[["di-wu-icon-2.41209a5c.png",367],367],"./../images/dou-hao.png":[["dou-hao.4e743619.png",369],369],"./../images/shan-fang-lu.png":[["shan-fang-lu.ca082753.png",371],371],"./../images/tan-suo-yu-zhou.png":[["tan-suo-yu-zhou.832d760b.png",373],373],"./../images/chao-ji-jie-bao.png":[["chao-ji-jie-bao.e53ac1d6.png",375],375],"./../images/data-board.png":[["data-board.6dff8366.png",377],377],"./../images/bi-fei-ren-1.png":[["bi-fei-ren-1.0c646175.png",379],379],"./../images/line-mulit-shu.png":[["line-mulit-shu.2e08620b.png",381],381],"./../images/line-mulit-s.png":[["line-mulit-s.09fe9199.png",383],383],"./../images/ren-nan-s.png":[["ren-nan-s.06ec26de.png",385],385],"./../images/di-yi-zhang.png":[["di-yi-zhang.679b177e.png",387],387],"./../images/awar-text.png":[["awar-text.ac0b1076.png",389],389],"./../images/da-bao-guang.png":[["da-bao-guang.65f70614.png",391],391],"./../images/shu-ju-zhong-xin.png":[["shu-ju-zhong-xin.072fcb2a.png",393],393],"./../images/wu-da-mei-ti.png":[["wu-da-mei-ti.4b629cd2.png",395],395],"./../images/intro-card.png":[["intro-card.7318fc23.png",397],397],"./../images/shou-ji-ke.png":[["shou-ji-ke.3428f613.png",399],399],"./../images/shou-ji-li.png":[["shou-ji-li.9d98cebe.png",401],401],"./../images/di-yi-icon.png":[["di-yi-icon.afc4526f.png",403],403],"./../images/tan-suo-bao-guang.png":[["tan-suo-bao-guang.1e624019.png",405],405],"./../images/popu-borad.png":[["popu-borad.e90a5bfb.png",407],407],"./../images/xian-shang-bao-guang.png":[["xian-shang-bao-guang.ec6406d0.png",409],409],"./../images/yi-word.png":[["yi-word.9b5143d9.png",411],411],"./../images/wan-word.png":[["wan-word.da2da058.png",413],413],"./../images/lei-ji-xin-zeng.png":[["lei-ji-xin-zeng.31c94945.png",415],415],"./../images/mao-er-chart-board.png":[["mao-er-chart-board.119ae0c9.png",417],417],"./../images/tan-suo-hu-dong.png":[["tan-suo-hu-dong.93183217.png",419],419],"./../images/board-ya-zi.png":[["board-ya-zi.451714da.png",421],421],"./../images/li-na-tu.png":[["li-na-tu.9070cd9d.png",423],423],"./../images/san-zhang-tu.png":[["san-zhang-tu.705182ef.png",425],425],"./../images/san-ya-huo-dong-1.png":[["san-ya-huo-dong-1.982f0d74.png",427],427],"./../images/di-er-zhang.png":[["di-er-zhang.01ac017e.png",429],429],"./../images/mu-zi.png":[["mu-zi.eae30451.png",431],431],"./../images/board-wan-shua.png":[["board-wan-shua.a157bfa2.png",433],433],"./../images/w-20.png":[["w-20.631c3b89.png",435],435],"./../images/yi-jian-ling-xiu.png":[["yi-jian-ling-xiu.d9a4dfda.png",437],437],"./../images/fu-hao-add.png":[["fu-hao-add.c120e19e.png",439],439],"./../images/interest.png":[["interest.d58e7e1f.png",441],441],"./../images/dot-word.png":[["dot-word.5a073320.png",443],443],"./../images/tan-suo-dong.png":[["tan-suo-dong.3df355ba.png",445],445],"./../images/wan-jia-bg.png":[["wan-jia-bg.192b7156.png",447],447],"./../images/wu-zhang-tu.png":[["wu-zhang-tu.9c4af3ef.png",449],449],"./../images/zhi-bo-guan-kan.png":[["zhi-bo-guan-kan.d51b92ee.png",451],451],"./../images/di-er-icon.png":[["di-er-icon.5895401d.png",453],453],"./../images/ming-word.png":[["ming-word.6fb2dd92.png",455],455],"./../images/board-8.png":[["board-8.44508a29.png",457],457],"./../images/p-55.png":[["p-55.c63d38f9.png",459],459],"./../images/fen-si-zeng-zhang.png":[["fen-si-zeng-zhang.9efe34b3.png",461],461],"./../images/p-12345.png":[["p-12345.e64b6855.png",463],463],"./../images/tian-word.png":[["tian-word.3582252a.png",465],465],"./../images/guo-qu-zeng-zhang.png":[["guo-qu-zeng-zhang.f1b68758.png",467],467],"./../images/huo-dong-zeng-zhang.png":[["huo-dong-zeng-zhang.80c210a4.png",469],469],"./../images/xiang-dang-yu-past.png":[["xiang-dang-yu-past.3333befd.png",471],471],"./../images/ji-lei-fen-liang.png":[["ji-lei-fen-liang.d47f2322.png",473],473],"./../images/di-san-zhang.png":[["di-san-zhang.e4d82661.png",475],475],"./../images/pucharse.png":[["pucharse.5e5bc1be.png",477],477],"./../images/tan-suo-gao-xiao.png":[["tan-suo-gao-xiao.74e88076.png",479],479],"./../images/p-2.png":[["p-2.51841a00.png",481],481],"./../images/quan-nian-top2.png":[["quan-nian-top2.94a539d3.png",483],483],"./../images/bei-word.png":[["bei-word.7f348a8f.png",485],485],"./../images/gao-xiao-liang.png":[["gao-xiao-liang.1b2b9607.png",487],487],"./../images/xiang-dang-yu.png":[["xiang-dang-yu.b941aced.png",489],489],"./../images/p-234.png":[["p-234.7da17fa9.png",491],491],"./../images/jin-ci-yu.png":[["jin-ci-yu.267bbace.png",493],493],"./../images/text-ri-chang.png":[["text-ri-chang.601ff548.png",495],495],"./../images/chao-ji-xiao-liang.png":[["chao-ji-xiao-liang.b71bbe46.png",497],497],"./../images/xiao-lan-he.png":[["xiao-lan-he.b9635b4f.png",499],499],"./../images/eight-hour.png":[["eight-hour.73412485.png",501],501],"./../images/nai-fen-li-wu.png":[["nai-fen-li-wu.04f5c3ae.png",503],503],"./../images/di-wu-zhang.png":[["di-wu-zhang.d68abe9e.png",505],505],"./../images/loyalty.png":[["loyalty.a0aa13c0.png",507],507],"./../images/tan-kou-bei.png":[["tan-kou-bei.3da530e7.png",509],509],"./../images/san-ya-culb.png":[["san-ya-culb.694cef71.png",511],511],"./../images/kuang-san-ya.png":[["kuang-san-ya.aa456f5c.png",513],513],"./../images/san-ya.jpg":[["san-ya.e0f12d8d.jpg",515],515],"./../images/er-tong.jpg":[["er-tong.7045972c.jpg",517],517],"./../images/w-word.png":[["w-word.140892f4.png",519],519],"./../images/tan-suo-kou-bei.png":[["tan-suo-kou-bei.558013b4.png",521],521],"./../images/bai-ban-p-200.png":[["bai-ban-p-200.e06b258e.png",523],523],"./../images/you-zhi-kou-bei.png":[["you-zhi-kou-bei.82a3e07a.png",525],525],"./../images/yu-du-hu-dong.png":[["yu-du-hu-dong.4ea5ebbe.png",527],527],"./../images/nan-nv-group.png":[["nan-nv-group.3133a1f1.png",529],529],"./../images/hu-dong-liang.png":[["hu-dong-liang.a648eb66.png",531],531],"./../images/bai-fen-hao.png":[["bai-fen-hao.c913a7fa.png",533],533],"./../images/summary.png":[["summary.72281a62.png",535],535],"./../images/tong-bi-zeng-zhang.png":[["tong-bi-zeng-zhang.fa008107.png",537],537],"./../images/p-89.png":[["p-89.a0c872dd.png",539],539],"./../images/tian-mao-chao-shi.png":[["tian-mao-chao-shi.400c50f6.png",541],541],"./../images/tm-chao-icon.png":[["tm-chao-icon.cc55f276.png",543],543],"./../images/circle-tu.png":[["circle-tu.4b7826fa.png",545],545],"./../images/shu-ju-fen-xi.png":[["shu-ju-fen-xi.6826fcb6.png",547],547],"./../images/xiao-liang-zeng-su.png":[["xiao-liang-zeng-su.709af1b2.png",549],549],"./../images/xiao-liang-zeng-zhang.png":[["xiao-liang-zeng-zhang.50cf913b.png",551],551],"./../images/cheng-11.png":[["cheng-11.f330bc64.png",553],553],"./../images/da-run-fa.png":[["da-run-fa.1a701c51.png",555],555],"./../images/xiao-yu-zhou-ts.png":[["xiao-yu-zhou-ts.b5ea7eaa.png",557],557],"./../images/china-ditu.png":[["china-ditu.faabb419.png",559],559],"./../images/loc-icon.png":[["loc-icon.df533425.png",561],561],"./../images/wei-lai-text.png":[["wei-lai-text.9e285db1.png",563],563],"_css_loader":18}],12:[function(require,module,exports) {
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
},{}],565:[function(require,module,exports) {
module.exports = {
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
}
;
},{}],14:[function(require,module,exports) {
'use strict';

var _constants = require('constants');

(function (window) {
    var d = {
        page: '.page',
        start: 0,
        duration: 500,
        loop: false,
        drag: false,
        dir: 'v',
        der: 0.1,
        change: function change(data) {},
        beforeChange: function beforeChange(data) {},
        afterChange: function afterChange(data) {},
        orientationchange: function orientationchange(orientation) {}
    };

    function touchmove(e) {
        e.preventDefault();
    }

    function fix(cur, pagesLength, loop) {
        if (cur < 0) {
            return !!loop ? pagesLength - 1 : 0;
        }

        if (cur >= pagesLength) {
            return !!loop ? 0 : pagesLength - 1;
        }

        return cur;
    }

    function move(ele, dir, dist) {
        var xPx = '0px',
            yPx = '0px';
        if (dir === 'v') yPx = dist + 'px';else xPx = dist + "px";
        ele.style.cssText += ';-webkit-transform : translate3d(' + xPx + ', ' + yPx + ', 0px);' + 'transform : translate3d(' + xPx + ', ' + yPx + ', 0px);';
    }

    function init(option) {
        var o = option ? option : {};
        for (var key in d) {
            if (!o.hasOwnProperty(key)) {
                o[key] = d[key];
            }
        }

        var that = this;
        that.curIndex = -1;
        that.o = o;

        that.startY = 0;
        that.movingFlag = false;

        that.ele.classList.add('fullPage-wp');
        that.parentEle = that.ele.parentNode;

        var query = o.page;
        if (query.indexOf(".") == 0) {
            query = query.substring(1, query.length);
        }
        that.pageEles = that.ele.getElementsByClassName(query);
        for (var i = 0; i < that.pageEles.length; i++) {
            var pageEle = that.pageEles[i];
            pageEle.classList.add('fullPage-page');
            pageEle.classList.add('fullPage-dir-' + o.dir);
        }

        that.pagesLength = that.pageEles.length;
        that.update();
        that.initEvent();
        that.start();
    }

    function Fullpage(ele, option) {
        this.ele = ele;
        init.call(this, option);
    }
    Fullpage.prototype.update = function () {
        if (this.o.dir === 'h') {
            this.width = this.parentEle.offsetWidth;
            for (var i = 0; i < this.pageEles.length; i++) {
                var pageEle = this.pageEles[i];
                pageEle.style.width = this.width + 'px';
            }
            this.ele.style.width = this.width * this.pagesLength + 'px';
        }

        this.height = this.parentEle.offsetHeight;
        for (var i = 0; i < this.pageEles.length; i++) {
            var pageEle = this.pageEles[i];
            pageEle.style.height = this.height + 'px';
        }

        this.moveTo(this.curIndex < 0 ? this.o.start : this.curIndex);
    };

    Fullpage.prototype.initEvent = function () {
        var that = this;
        var ele = that.ele;

        ele.addEventListener('touchstart', function (e) {
            if (!that.status) {
                return 1;
            }
            //e.preventDefault();
            if (that.movingFlag) {
                return 0;
            }

            that.startX = e.targetTouches[0].pageX;
            that.startY = e.targetTouches[0].pageY;
        });
        ele.addEventListener('touchend', function (e) {
            if (!that.status) {
                return 1;
            }
            //e.preventDefault();
            if (that.movingFlag) {
                return 0;
            }

            var sub = that.o.dir === 'v' ? (e.changedTouches[0].pageY - that.startY) / that.height : (e.changedTouches[0].pageX - that.startX) / that.width;
            var der = sub > that.o.der || sub < -that.o.der ? sub > 0 ? -1 : 1 : 0;

            that.moveTo(that.curIndex + der, true);
        });
        if (that.o.drag) {
            ele.addEventListener('touchmove', function (e) {
                if (!that.status) {
                    return 1;
                }
                //e.preventDefault();
                if (that.movingFlag) {
                    that.startX = e.targetTouches[0].pageX;
                    that.startY = e.targetTouches[0].pageY;
                    return 0;
                }

                var y = e.changedTouches[0].pageY - that.startY;
                if (that.curIndex == 0 && y > 0 || that.curIndex === that.pagesLength - 1 && y < 0) y /= 2;
                var x = e.changedTouches[0].pageX - that.startX;
                if (that.curIndex == 0 && x > 0 || that.curIndex === that.pagesLength - 1 && x < 0) x /= 2;
                var dist = that.o.dir === 'v' ? -that.curIndex * that.height + y : -that.curIndex * that.width + x;
                ele.classList.remove('anim');
                move(ele, that.o.dir, dist);
            });
        }

        // 翻转屏幕提示
        // ==============================
        window.addEventListener('orientationchange', function () {
            if (window.orientation === 180 || window.orientation === 0) {
                that.o.orientationchange('portrait');
            }
            if (window.orientation === 90 || window.orientation === -90) {
                that.o.orientationchange('landscape');
            }
        }, false);

        window.addEventListener('resize', function () {
            that.update();
        }, false);
    };
    Fullpage.prototype.holdTouch = function () {
        document.addEventListener('touchmove', touchmove);
    };
    Fullpage.prototype.unholdTouch = function () {
        document.removeEventListener('touchmove', touchmove);
    };
    Fullpage.prototype.start = function () {
        this.status = 1;
        this.holdTouch();
    };
    Fullpage.prototype.stop = function () {
        this.status = 0;
        this.unholdTouch();
    };
    Fullpage.prototype.getCurIndex = function () {
        return this.curIndex;
    };
    Fullpage.prototype.moveTo = function (next, anim) {
        var that = this;
        var ele = that.ele;
        var cur = that.curIndex;
        next = fix(next, that.pagesLength, that.o.loop);

        if (anim) {
            ele.classList.add('anim');
        } else {
            ele.classList.remove('anim');
        }

        if (next !== cur) {
            var flag = that.o.beforeChange({
                next: next,
                cur: cur
            });

            // beforeChange 显示返回false 可阻止滚屏的发生
            if (flag === false) {
                return 1;
            }
        }

        that.movingFlag = true;
        that.curIndex = next;
        move(ele, that.o.dir, -next * (that.o.dir === 'v' ? that.height : that.width));

        if (next !== cur) {
            that.o.change({
                prev: cur,
                cur: next
            });
        }

        window.setTimeout(function () {
            that.movingFlag = false;
            if (next !== cur) {
                that.o.afterChange({
                    prev: cur,
                    cur: next
                });
                for (var i = 0; i < that.pageEles.length; i++) {
                    var pageEle = that.pageEles[i];
                    if (i === next) {
                        pageEle.classList.add("cur");
                    } else {
                        pageEle.classList.remove("cur");
                    }
                }
            }
        }, that.o.duration);
    };
    Fullpage.prototype.movePrev = function (anim) {
        this.moveTo(this.curIndex - 1, anim);
    };
    Fullpage.prototype.moveNext = function (anim) {
        this.moveTo(this.curIndex + 1, anim);
    };

    Element.prototype.fullpage = function (option) {
        return new Fullpage(this, option);
    };
})(window); /*!
             * zepto.fullpage.js v0.5.0 (https://github.com/yanhaijing/zepto.fullpage)
             * API https://github.com/yanhaijing/zepto.fullpage/blob/master/doc/api.md
             * Copyright 2014 yanhaijing. All Rights Reserved
             * Licensed under MIT (https://github.com/yanhaijing/zepto.fullpage/blob/master/LICENSE)
             */
},{"constants":565}],567:[function(require,module,exports) {
module.exports = {page1: {items: {"w-yun-chui": {data: {animate: "slideInLeft", time: 500}}, "w-xing-shuang": {data: {animate: "flash", infinite: true, duration: "4s", time: 1000}}, "w-wang-yuan-jing": {data: {animate: "tada", time: 500}}, "w-yun-xing": {data: {animate: "slideInRight", time: 500}}, "w-qi-qiu": {data: {animate: "slideInDown", time: 1500}}, "w-text-yang-guang": {data: {animate: "flash", duration: "6s", infinite: true, time: 500}}, "shan-fang-lu": {data: {animate: "fadeIn", time: 500}}, "tan-suo-yu-zhou": {data: {animate: "bounceInUp", time: 1000, duration: "1s"}}, "chao-ji-jie-bao": {data: {animate: "bounceInUp", time: 1000, duration: "1s"}}}}, page2: {xiaoRenTime: 2000, items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 300}}, "w-xing-xiao": {data: {animate: "swing", time: 300, infinite: true}}, "w-fang-da-jing": {data: {animate: "fadeIn", time: 500}}, "w-dna-fenzi": {data: {animate: "rotateIn", time: 1000}}, "w-dian-nao": {data: {animate: "fadeIn", time: 1100}}, "data-board": {data: {animate: "fadeIn", time: 2000}}, "bi-fei-ren-1": {data: {animate: "fadeInUp", time: 1000}}, "line-mulit-s": {data: {animate: "slideInUp", time: 1100, duration: "0.5s"}}, "di-yi-zhang": {data: {animate: "slideInUp", time: 500}}, "awar-text": {data: {animate: "slideInUp", time: 500}}, "da-bao-guang": {data: {animate: "slideInUp", time: 500}}, "shu-ju-zhong-xin": {data: {animate: "fadeIn", time: 1000}}}}, page3: {items: {"w-di-yi-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 500}}, "w-yun-xing": {data: {animate: "fadeInRight", time: 500}}, "w-deng-pao": {data: {animate: "flash", time: 500, duration: "4s", infinite: true}}, "w-huo-pao": {data: {animate: "bounceInRight", time: 500}}, "w-dian-shi": {data: {animate: "slideInRight", time: 500}}, "wu-da-mei-ti": {data: {animate: "zoomIn", time: 1000}}, "intro-card": {data: {animate: "fadeIn", time: 1800}}, "shou-ji-ke": {data: {animate: "fadeIn", time: 1600}}, "shou-ji-li": {data: {animate: "fadeIn", time: 1600}}}}, page4: {scrollnums: {"100": {type: "blue", time: 1000, val: 100, duration: 1000}}, items: {"w-yun-xing": {data: {animate: "fadeInRight", time: 500}}, "w-yan-hua": {data: {animate: "slideInUp", time: 500}}, "bg-mask": {data: {animate: "fadeIn", time: 100, duration: "0.2s"}}, "tan-suo-bao-guang": {data: {animate: "fadeInUp", time: 500}}, "xian-shang-bao-guang": {data: {animate: "fadeInDown", time: 800}}, "popu-borad": {data: {animate: "bounceInDown", time: 200, duration: "600ms"}}, "di-yi-icon": {data: {animate: "fadeIn", time: 600}}, "yi-word": {data: {animate: "lightSpeedIn", time: 1200, duration: "500ms"}}}}, page5: {scrollnums: {num: {type: "blue", time: 1800, val: 1234567, duration: 1000}}, items: {"w-di-yi-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-da-mu-zhi": {data: {animate: "pulse", time: 1500, infinite: true}}, "w-xiao-huo-pao": {data: {animate: "fadeInLeft", time: 300}}, "w-peng-you": {data: {animate: "fadeInRight", time: 300}}, "w-jiang-bei": {data: {animate: "fadeInUp", duration: ".5s", time: 1500}}, "w-huo-pao": {data: {animate: "fadeIn", time: 1600}}, "w-xing-shuang": {data: {animate: "flash", infinite: true, time: 2400, duration: "8s"}}, "wan-word": {data: {animate: "fadeIn", time: 1000}}, "dou-hao1": {data: {animate: "fadeIn", time: 1800}}, "dou-hao2": {data: {animate: "fadeIn", time: 1900}}, "tan-suo-bao-guang": {data: {animate: "fadeInDown", time: 100}}, "lei-ji-xin-zeng": {data: {animate: "bounceInUp", time: 1000}}, "mao-er-chart-board": {data: {animate: "fadeInUp", time: 1600}}}}, page6: {scrollnums: {num: {type: "blue", time: 3200, val: 20, duration: 1500}}, items: {"w-fang-da-jing": {data: {animate: "pulse", infinite: true, duration: "2s", time: 1200}}, "w-dna-fenzi": {data: {animate: "rotateIn", time: 500}}, "w-fei-ji-right": {data: {animate: "slideInLeft", time: 500}}, "yun-xing-da": {data: {animate: "slideInRight", time: 500}}, "w-jiang-bei-ren": {data: {animate: "zooomIn", time: 6500}}, "w-up-down-arrow": {data: {animate: "fadeIn", time: 2200}}, "tan-suo-hu-dong": {data: {animate: "fadeInUp", time: 1000}}, "di-er-zhang": {data: {animate: "fadeIn", time: 1200}}, interest: {data: {animate: "fadeInUp", time: 1000}}, "yi-jian-ling-xiu": {data: {animate: "fadeInUp", time: 2400}}, "fu-hao-add": {data: {animate: "tada", infinite: true, duration: "4s", time: 3600}}, "board-wan-shua": {data: {animate: "fadeIn", time: 2200}}, "san-zhang-tu": {data: {animate: "fadeIn", time: 2500}}, "san-ya-huo-dong-1": {data: {animate: "slideInLeft", time: 1900}}, "li-na-tu": {data: {animate: "fadeIn", time: 1800}}, "board-ya-zi": {data: {animate: "fadeIn", time: 1500}}}}, page7: {scrollnums: {num: {type: "blue", time: 2000, val: 47334, duration: 1500}}, items: {"w-di-er-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 2000, infinite: true, duration: "10s", delay: 1000, direction: "alternate"}}, "w-yun-xing": {data: {animate: "fadeInRight", time: 500}}, "w-xiao-nan-hai": {data: {animate: "fadeInUp", time: 1000}}, "w-xiao-nv-hai": {data: {animate: "pulse", time: 3500, infinite: true, duration: "5s", direction: "alternate"}}, "w-xian-kuang": {data: {animate: "zoomIn", time: 2800}}, "w-huo-pao": {data: {animate: "fadeIn", time: 2200}}, "w-mao-er-board": {data: {animate: "bounceInDown", time: 500}}, "dot-word": {data: {animate: "fadeIn", time: 2600}}, "tan-suo-dong": {data: {animate: "fadeInDown", time: 200}}, "wan-jia-bg": {data: {animate: "fadeIn", time: 2000}}, "wu-zhang-tu": {data: {animate: "zoomIn", time: 2800}}, "zhi-bo-guan-kan": {data: {animate: "fadeIn", time: 1300}}}}, page8: {scrollnums: {num: {type: "blue", time: 2000, val: 12345, duration: 1200}}, items: {"bg-mask": {data: {animate: "fadeIn", time: 0}}, "w-xiao-xiong": {data: {animate: "swing", time: 1500}}, "tan-suo-dong": {data: {animate: "fadeInDown", time: 1400}}, "ming-word": {data: {animate: "slideInDown", time: 1800}}, "di-er-icon": {data: {animate: "fadeIn", time: 900}}, "w-bi-xin": {data: {animate: "flash", infinite: true, time: 2500, duration: "6s"}}, "board-8": {data: {animate: "bounceInDown", time: 200, duration: 600}}, "p-55": {data: {animate: "slideInUp", time: 2500}}, "w-dou-hao": {data: {animate: "fadeIn", time: 2400}}, "fen-si-zeng-zhang": {data: {animate: "fadeInUp", time: 1400}}, "w-wang-yuan-jing": {data: {animate: "swing", time: 2500}}}}, page9: {scrollnums: {num: {type: "blue", time: 3800, val: 200, duration: 1200}}, items: {"w-di-er-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 300}}, "w-yun-xing": {data: {animate: "slideInRight", time: 300}}, "w-re-qi-qiu": {data: {animate: "fadeOutUp", time: 500, infinite: true, duration: "10s", delay: 1000, direction: "alternate"}}, "w-wang-yuan-jing": {data: {animate: "zoomIn", time: 500}}, "w-huo-pao": {data: {animate: "fadeIn", time: 500}}, "w-xiao-nv-hai": {data: {animate: "flipInY", time: 500}}, "w-x-zhou": {data: {animate: "fadeIn", time: 800}}, "w-up-right-arrow": {data: {time: 2400}}, "w-left-bar": {data: {time: 1400}}, "w-right-bar": {data: {time: 2800}}, "tian-word": {data: {animate: "tada", time: 4000}}, "huo-dong-zeng-zhang": {data: {animate: "flipInY", time: 1000}}, "guo-qu-zeng-zhang": {data: {animate: "flipInY", time: 2000}}, "xiang-dang-yu-past": {data: {animate: "fadeInLeft", time: 3000}}, "ji-lei-fen-liang": {data: {animate: "fadeInRight", time: 3000}}}}, page10: {items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 200}}, "w-xing-xiao": {data: {data: null, animate: "rotate", infinite: true, duration: "20s", time: 300}}, "w-fang-da-jing": {data: {animate: "rotateInUpRight", time: 1200}}, "w-da-mu-zhi": {data: {animate: "tada", infinite: true, duration: "4s", time: 2000}}, "w-yun-que": {data: {animate: "fadeIn", time: 2000}}, "w-bi-fei-ren": {data: {animate: "rotateInDownLeft", time: 500}}, "w-tian-wen-jing": {data: {animate: "rotateInDownRight", time: 500}}, "di-san-zhang": {data: {animate: "fadeIn", time: 600}}, pucharse: {data: {animate: "fadeInUp", time: 800}}, "tan-suo-gao-xiao": {data: {animate: "fadeInUp", time: 800}}, "p-2": {data: {animate: "zoomIn", time: 1500}}, "quan-nian-top2": {data: {animate: "zoomIn", time: 1500}}}}, page11: {scrollnums: {num: {type: "blue", time: 1400, val: 234, duration: 1200}}, items: {"w-di-san-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 2000, infinite: true, duration: "10s", delay: 1000, direction: "alternate"}}, "w-yun-xing": {data: {animate: "slideInRight", time: 200}}, "w-jiang-bei-ren": {data: {animate: "fadeIn", time: 2000}}, "w-x-zhou-1": {data: {animate: "fadeIn", time: 1000}}, "w-up-right-arrow-1": {data: {time: 2400}}, "w-left-bar-1": {data: {time: 1800}}, "w-right-bar-1": {data: {time: 2800}}, "bei-word": {data: {animate: "fadeInUp", time: 1800}}, "w-fen-zi": {data: {animate: "tada", infinite: true, duration: "4s", time: 500}}, "gao-xiao-liang": {data: {animate: "fadeInUp", time: 500}}, "shan-fang-lu": {data: {animate: "fadeInUp", time: 300}}, "xiang-dang-yu": {data: {animate: "slideInLeft", time: 800}}, "jin-ci-yu": {data: {animate: "slideInRight", time: 800}}, "text-ri-chang": {data: {animate: "flipInY", time: 1000}}, "chao-ji-xiao-liang": {data: {animate: "flipInY", time: 1800}}}}, page12: {items: {"w-di-san-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-fei-ji-right": {data: {animate: "slideInLeft", time: 500}}, "w-li-wu": {data: {animate: "slideInRight", time: 500}}, "w-dna-xuan": {data: {animate: "rotateIn", time: 500}}, "w-huo-pao": {data: {animate: "zoomIn", time: 2800}}, "w-xiao-nan-hai": {data: {animate: "fadeInUp", time: 3200}}, "gao-xiao-liang": {data: {animate: "fadeInUp", time: 500}}, "xiao-lan-he": {data: {animate: "zoomIn", time: 1000}}, "eight-hour": {data: {animate: "flipInX", time: 1400}}, "nai-fen-li-wu": {data: {animate: "bounceInUp", time: 1800}}}}, page13: {items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 500}}, "w-xing-xiao": {data: {animate: "rotate", infinite: true, duration: "20s", time: 800}}, "w-fang-da-jing": {data: {animate: "tada", infinite: true, duration: "10s", time: 5000}}, "w-left-arrow": {data: {animate: "slideInRight", time: 1800}}, "w-right-arrow": {data: {animate: "slideInLeft", time: 1800}}, "di-wu-zhang": {data: {animate: "fadeIn", time: 500}}, loyalty: {data: {animate: "fadeInUp", time: 800}}, "tan-kou-bei": {data: {animate: "fadeInUp", time: 800}}, "san-ya-culb": {data: {animate: "zoomIn", time: 1000}}, "kuang-san-ya": {data: {animate: "rotateInDownRight", time: 1200}}, "san-ya": {classes: "hide rotateIn"}, "er-tong": {data: {animate: "rotateIn", time: 1800}}, "di-ifer": {data: {animate: "fadeIn", time: 800}}}}, page14: {scrollnums: {num: {type: "blue", time: 2000, val: 200, duration: 1200}}, items: {"w-di-si-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-yun-xing": {data: {animate: "bounceInDown", time: 500}}, "w-jiang-bei": {data: {animate: "swing", time: 2000}}, "w-yan-hua": {data: {animate: "zoomIn", time: 3000}}, "w-yun-chui": {data: {animate: "rotateInDownLeft", time: 2200, duration: "2s"}}, "w-shu-ben": {data: {animate: "rotateInUpLeft", time: 2200, duration: "2s"}}, "w-nai-fen": {data: {animate: "rotateInUpRight", time: 2200, duration: "2s"}}, "w-xiao-huo-che": {data: {animate: "slideInUp", time: 500}}, "w-xiao-fei-ji": {data: {animate: "slideInDown", time: 500}}, "w-wan-shua": {data: {animate: "slideInUp", time: 500}}, "w-xiao-nan-hai": {data: {animate: "slideInUp", time: 500}}, "w-xiao-huo-pao": {data: {animate: "slideInUp", time: 500}}, "bai-ban-p-200": {data: {animate: "rotateIn", time: 500}}, "you-zhi-kou-bei": {data: {animate: "fadeInDown", time: 1500}}, "yu-du-hu-dong": {data: {animate: "fadeInDown", time: 1600}}, "w-word": {data: {animate: "fadeIn", time: 2200}}, "nan-nv-group": {data: {animate: "zoomIn", time: 2600}}, "hu-dong-liang": {data: {animate: "rotateIn", time: 3000}}}}, page15: {scrollnums: {num: {type: "blue", time: 1800, val: 89, duration: 1200}}, items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 200}}, "w-xing-xiao": {data: {animate: "slideInDown", time: 500}}, "w-fang-da-jing": {data: {animate: "rotateIn", time: 500}}, "w-huo-pao": {data: {animate: "zoomIn", time: 3000}}, "w-lun-xin-lin-shou": {data: {animate: "rotateIn", duration: "30s", time: 1500}}, "w-lun-tian-mao": {data: {animate: "rotateIn", duration: "30s", time: 2000}}, "bai-fen-hao": {data: {animate: "fadeIn", time: 1800}}, "di-wu-zhang": {data: {animate: "fadeIn", time: 500}}, summary: {data: {animate: "fadeInUp", time: 1000}}, "tong-bi-zeng-zhang": {data: {animate: "fadeInUp", time: 1000}}, "sha-bao": {data: {animate: "slideInUp", time: 500}}}}, page16: {scrollnums: {xinke: {type: "blue", time: 1800, val: 89, duration: 1200}, zhengti: {type: "blue", time: 1800, val: 89, duration: 1200}, xiaoliang: {type: "blue", time: 1800, val: 89, duration: 1200}}, items: {"w-di-wu-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-xue-xi": {data: {animate: "slideInUp", time: 500}}, "w-xiao-yun": null, "tm-chao-icon": {data: {animate: "fadeIn", time: 1200}}, "w-xiao-fei-ji": {data: {animate: "bounceInLeft", time: 6500}}, "w-fen-zi": {data: {animate: "tada", infinite: true, duration: "4s", time: 4200}}, "tian-mao-chao-shi": {data: {animate: "zoomIn", time: 500}}, "circle-tu": {data: {animate: "bounceIn", time: 1200}}, "bai-fen-hao": {data: {animate: "fadeIn", time: 1800}}, "bai-fen-hao-1": {data: {animate: "fadeIn", time: 1900}}, "bai-fen-hao-2": {data: {animate: "fadeIn", time: 1900}}, "bai-fen-hao-3": {data: {animate: "fadeIn", time: 1900}}, "mao-chao-zeng-zhang": {data: {animate: "flash", time: 3600}}, "xin-ke-zeng-zhang": {data: {animate: "flash", time: 1800}}, "xiao-liang-zeng-zhang": {data: {animate: "fadeInDown", time: 4000}}, "shu-ju-fen-xi": {data: {animate: "slideInDown", time: 4500}}}}, page17: {items: {"w-di-wu-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-re-qi-qiu": {data: {animate: "fadeInUp", time: 2800}}, "w-yun-yang": {data: {animate: "fadeIn", time: 1000}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 500}}, "w-huo-pao": {data: {animate: "fadeIn", time: 800}}, "cheng-11": {data: {animate: "fadeInDown", time: 500}}, "da-run-fa": {data: {animate: "zoomIn", time: 2800}}, "xiao-yu-zhou-ts": {data: {animate: "fadeInDown", time: 2400}}, "china-ditu": {data: {animate: "fadeIn", time: 1400}}, "loc-icon": {data: {animate: "fadeInDown", time: 1800}}}}, page18: {fzTime: 1000, items: {"wei-lai-text": {data: {animate: "pulse", inifnite: true, duration: "4s", time: 2400}}}}};
},{}],568:[function(require,module,exports) {
var global = (1,eval)("this");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp = { scope: {} };$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");e != Array.prototype && e != Object.prototype && (e[r] = p.value);
};$jscomp.getGlobal = function (e) {
  return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
};$jscomp.global = $jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};$jscomp.symbolCounter_ = 0;$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();var e = $jscomp.global.Symbol.iterator;e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));"function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function value() {
      return $jscomp.arrayIterator(this);
    } });$jscomp.initSymbolIterator = function () {};
};$jscomp.arrayIterator = function (e) {
  var r = 0;return $jscomp.iteratorPrototype(function () {
    return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
  });
};
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();e = { next: e };e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };return e;
};$jscomp.array = $jscomp.array || {};$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator();e instanceof String && (e += "");var p = 0,
      m = { next: function next() {
      if (p < e.length) {
        var u = p++;return { value: r(u, e[u]), done: !1 };
      }m.next = function () {
        return { done: !0, value: void 0 };
      };return m.next();
    } };m[Symbol.iterator] = function () {
    return m;
  };return m;
};
$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global;e = e.split(".");for (m = 0; m < e.length - 1; m++) {
      var u = e[m];u in p || (p[u] = {});p = p[u];
    }e = e[e.length - 1];m = p[e];r = r(m);r != m && null != r && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r });
  }
};$jscomp.polyfill("Array.prototype.keys", function (e) {
  return e ? e : function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e;
    });
  };
}, "es6-impl", "es3");var $jscomp$this = this;
(function (e, r) {
  "function" === typeof define && define.amd ? define([], r) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = r() : e.anime = r();
})(this, function () {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a);
    } catch (c) {}
  }function r(a, c) {
    for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n];c.call(b, k, n, a) && f.push(k);
      }
    }return f;
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d);
    }, []);
  }function m(a) {
    if (h.arr(a)) return a;
    h.str(a) && (a = e(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function u(a, c) {
    return a.some(function (a) {
      return a === c;
    });
  }function C(a) {
    var c = {},
        d;for (d in a) {
      c[d] = a[d];
    }return c;
  }function D(a, c) {
    var d = C(a),
        b;for (b in a) {
      d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
    }return d;
  }function z(a, c) {
    var d = C(a),
        b;for (b in c) {
      d[b] = h.und(a[b]) ? c[b] : a[b];
    }return d;
  }function T(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k;
    });var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(c[1], 16);var d = parseInt(c[2], 16),
        c = parseInt(c[3], 16);return "rgba(" + a + "," + d + "," + c + ",1)";
  }function U(a) {
    function c(a, c, b) {
      0 > b && (b += 1);1 < b && --b;return b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a = parseInt(d[1]) / 360;var b = parseInt(d[2]) / 100,
        f = parseInt(d[3]) / 100,
        d = d[4] || 1;if (0 == b) f = b = a = f;else {
      var n = .5 > f ? f * (1 + b) : f + b - f * b,
          k = 2 * f - n,
          f = c(k, n, a + 1 / 3),
          b = c(k, n, a);a = c(k, n, a - 1 / 3);
    }return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")";
  }function y(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
  }function V(a) {
    if (-1 < a.indexOf("translate") || "perspective" === a) return "px";if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a;
  }function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }function J(a, c) {
    if (h.dom(a) && u(W, c)) return "transform";if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return "attribute";if (h.dom(a) && "transform" !== c && E(a, c)) return "css";if (null != a[c]) return "object";
  }function X(a, c) {
    var d = V(c),
        d = -1 < c.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
      f.push(b[1]), n.push(b[2]);
    }a = r(n, function (a, b) {
      return f[b] === c;
    });return a.length ? a[0] : d;
  }function K(a, c) {
    switch (J(a, c)) {case "transform":
        return X(a, c);case "css":
        return E(a, c);case "attribute":
        return a.getAttribute(c);}return a[c] || 0;
  }function L(a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;var b = y(a) || 0;c = parseFloat(c);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
        return c + a + b;case "-":
        return c - a + b;case "*":
        return c * a + b;}
  }function F(a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
  }function M(a) {
    a = a.points;for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b);0 < b && (c += F(d, f));d = f;
    }return c;
  }function N(a) {
    if (a.getTotalLength) return a.getTotalLength();switch (a.tagName.toLowerCase()) {case "circle":
        return 2 * Math.PI * a.getAttribute("r");case "rect":
        return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");case "line":
        return F({ x: a.getAttribute("x1"), y: a.getAttribute("y1") }, { x: a.getAttribute("x2"), y: a.getAttribute("y2") });case "polyline":
        return M(a);case "polygon":
        var c = a.points;return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));}
  }function Y(a, c) {
    function d(b) {
      b = void 0 === b ? 0 : b;return a.el.getPointAtLength(1 <= c + b ? c + b : 0);
    }var b = d(),
        f = d(-1),
        n = d(1);switch (a.property) {case "x":
        return b.x;case "y":
        return b.y;
      case "angle":
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;}
  }function O(a, c) {
    var d = /-?\d*\.?\d+/g,
        b;b = h.pth(a) ? a.totalLength : a;if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b = f ? "rgba(" + f[1] + ",1)" : b;
      } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;b += "";return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] };
  }function P(a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];return r(a, function (a, d, b) {
      return b.indexOf(a) === d;
    });
  }function Z(a) {
    var c = P(a);return c.map(function (a, b) {
      return { target: a, id: b, total: c.length };
    });
  }function aa(a, c) {
    var d = C(c);if (h.arr(a)) {
      var b = a.length;2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a };
    }return m(a).map(function (a, b) {
      b = b ? 0 : c.delay;a = h.obj(a) && !h.pth(a) ? a : { value: a };h.und(a.delay) && (a.delay = b);return a;
    }).map(function (a) {
      return z(a, d);
    });
  }function ba(a, c) {
    var d = {},
        b;for (b in a) {
      var f = I(a[b], c);h.arr(f) && (f = f.map(function (a) {
        return I(a, c);
      }), 1 === f.length && (f = f[0]));d[b] = f;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a];
  }function da(a, c) {
    var d;return a.tweens.map(function (b) {
      b = ba(b, c);var f = b.value,
          e = K(c.target, a.name),
          k = d ? d.to.original : e,
          k = h.arr(f) ? f[0] : k,
          w = L(h.arr(f) ? f[1] : f, k),
          e = y(w) || y(k) || y(e);b.from = O(k, e);b.to = O(w, e);b.start = d ? d.end : a.offset;b.end = b.start + b.delay + b.duration;b.easing = ca(b.easing);b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;b.isPath = h.pth(f);b.isColor = h.col(b.from.original);b.isColor && (b.round = 1);return d = b;
    });
  }function ea(a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })), function (a) {
      return !h.und(a);
    });
  }function R(a, c, d, b) {
    var f = "delay" === a;return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a];
    })) : f ? b.delay : d.offset + b.delay + b.duration;
  }function fa(a) {
    var c = D(ga, a),
        d = D(S, a),
        b = Z(a.targets),
        f = [],
        e = z(c, d),
        k;for (k in a) {
      e.hasOwnProperty(k) || "targets" === k || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) });
    }a = ea(b, f);return z(c, { children: [], animatables: b, animations: a, duration: R("duration", a, c, d), delay: R("delay", a, c, d) });
  }function q(a) {
    function c() {
      return window.Promise && new Promise(function (a) {
        return p = a;
      });
    }function d(a) {
      return g.reversed ? g.duration - a : a;
    }function b(a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b],
            k = e.animatable,
            h = e.tweens,
            n = h.length - 1,
            l = h[n];n && (l = r(h, function (b) {
          return a < b.end;
        })[0] || l);for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0,
              x = l.to.numbers[t],
              q = l.from.numbers[t],
              x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);p && (l.isColor && 2 < t || (x = Math.round(x * p) / p));n.push(x);
        }if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
          p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
        } else m = n[0];ha[e.type](k.target, e.property, m, c, k.id);e.currentValue = m;b++;
      }if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
        H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
      }g.currentTime = a;g.progress = a / g.duration * 100;
    }function f(a) {
      if (g[a]) g[a](g);
    }function e() {
      g.remaining && !0 !== g.remaining && g.remaining--;
    }function k(a) {
      var k = g.duration,
          n = g.offset,
          w = n + g.delay,
          r = g.currentTime,
          x = g.reversed,
          q = d(a);if (g.children.length) {
        var u = g.children,
            v = u.length;
        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
          u[G].seek(q);
        } else for (; v--;) {
          u[v].seek(q);
        }
      }if (q >= w || !k) g.began || (g.began = !0, f("begin")), f("run");if (q > n && q < k) b(q);else if (q <= n && 0 !== r && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();f("update");a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0);
    }a = void 0 === a ? {} : a;var h,
        t,
        l = 0,
        p = null,
        m = c(),
        g = fa(a);g.reset = function () {
      var a = g.direction,
          c = g.loop;g.currentTime = 0;g.progress = 0;g.paused = !0;g.began = !1;g.completed = !1;g.reversed = "reverse" === a;g.remaining = "alternate" === a && 1 === c ? 2 : c;b(0);for (a = g.children.length; a--;) {
        g.children[a].reset();
      }
    };g.tick = function (a) {
      h = a;t || (t = h);k((l + h - t) * q.speed);
    };g.seek = function (a) {
      k(d(a));
    };g.pause = function () {
      var a = v.indexOf(g);-1 < a && v.splice(a, 1);g.paused = !0;
    };g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
    };g.reverse = function () {
      g.reversed = !g.reversed;t = 0;l = d(g.currentTime);
    };g.restart = function () {
      g.pause();
      g.reset();g.play();
    };g.finished = m;g.reset();g.autoplay && g.play();return g;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
      S = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
      W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
      H,
      h = { arr: function arr(a) {
      return Array.isArray(a);
    }, obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    pth: function pth(a) {
      return h.obj(a) && a.hasOwnProperty("totalLength");
    }, svg: function svg(a) {
      return a instanceof SVGElement;
    }, dom: function dom(a) {
      return a.nodeType || h.svg(a);
    }, str: function str(a) {
      return "string" === typeof a;
    }, fnc: function fnc(a) {
      return "function" === typeof a;
    }, und: function und(a) {
      return "undefined" === typeof a;
    }, hex: function hex(a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    }, rgb: function rgb(a) {
      return (/^rgb/.test(a)
      );
    }, hsl: function hsl(a) {
      return (/^hsl/.test(a)
      );
    }, col: function col(a) {
      return h.hex(a) || h.rgb(a) || h.hsl(a);
    } },
      A = function () {
    function a(a, d, b) {
      return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
    }return function (c, d, b, f) {
      if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
        var e = new Float32Array(11);if (c !== d || b !== f) for (var k = 0; 11 > k; ++k) {
          e[k] = a(.1 * k, c, b);
        }return function (k) {
          if (c === d && b === f) return k;if (0 === k) return 0;if (1 === k) return 1;for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) {
            h += .1;
          }--l;var l = h + (k - e[l]) / (e[l + 1] - e[l]) * .1,
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (.001 <= n) {
            for (h = 0; 4 > h; ++h) {
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (0 === n) break;var m = a(l, c, b) - k,
                  l = l - m / n;
            }k = l;
          } else if (0 === n) k = l;else {
            var l = h,
                h = h + .1,
                g = 0;do {
              m = l + (h - l) / 2, n = a(m, c, b) - k, 0 < n ? h = m : l = m;
            } while (1e-7 < Math.abs(n) && 10 > ++g);k = m;
          }return a(k, d, f);
        };
      }
    };
  }(),
      Q = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] },
        b = { linear: A(.25, .25, .75, .75) },
        f = {},
        e;for (e in d) {
      f.type = e, d[f.type].forEach(function (a) {
        return function (d, f) {
          b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
        };
      }(f)), f = { type: f.type };
    }return b;
  }(),
      ha = { css: function css(a, c, d) {
      return a.style[c] = d;
    }, attribute: function attribute(a, c, d) {
      return a.setAttribute(c, d);
    }, object: function object(a, c, d) {
      return a[c] = d;
    }, transform: function transform(a, c, d, b, f) {
      b[f] || (b[f] = []);b[f].push(c + "(" + d + ")");
    } },
      v = [],
      B = 0,
      ia = function () {
    function a() {
      B = requestAnimationFrame(c);
    }function c(c) {
      var b = v.length;if (b) {
        for (var d = 0; d < b;) {
          v[d] && v[d].tick(c), d++;
        }a();
      } else cancelAnimationFrame(B), B = 0;
    }return a;
  }();q.version = "2.2.0";q.speed = 1;q.running = v;q.remove = function (a) {
    a = P(a);for (var c = v.length; c--;) {
      for (var d = v[c], b = d.animations, f = b.length; f--;) {
        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
      }
    }
  };q.getValue = K;q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a,
        b = c || 100;return function (a) {
      return { el: d, property: a, totalLength: N(d) * (b / 100) };
    };
  };q.setDashoffset = function (a) {
    var c = N(a);a.setAttribute("stroke-dasharray", c);return c;
  };q.bezier = A;q.easings = Q;q.timeline = function (a) {
    var c = q(a);c.pause();c.duration = 0;c.add = function (d) {
      c.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}));d.targets = d.targets || a.targets;b = c.duration;var e = d.offset;d.autoplay = !1;d.direction = c.direction;d.offset = h.und(e) ? b : L(e, b);c.began = !0;c.completed = !0;c.seek(d.offset);d = q(d);d.began = !0;d.completed = !0;d.duration > b && (c.duration = d.duration);c.children.push(d);
      });c.seek(0);c.reset();c.autoplay && c.restart();return c;
    };return c;
  };q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
  };return q;
});
},{}],566:[function(require,module,exports) {

},{}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePAGE18 = exports.changePAGE13 = exports.changePAGE11 = exports.changePAGE9 = exports.changePAGE2 = exports.getTpl = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _config = require('./config.yaml');

var _config2 = _interopRequireDefault(_config);

var _anima = require('../lib/anima.min');

var _anima2 = _interopRequireDefault(_anima);

var _dns = require('dns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var forEach = [].forEach;

var tpl = function tpl(tplConfig) {
  var _ref = tplConfig || {},
      items = _ref.items,
      scrollnums = _ref.scrollnums;

  var html = '';
  if (!items) {
    return '配置';
  }
  for (var itemkey in items) {
    var _ref2 = items[itemkey] || {},
        data = _ref2.data,
        _ref2$classes = _ref2.classes,
        classes = _ref2$classes === undefined ? '' : _ref2$classes,
        noDefclass = _ref2.noDefclass;

    var dataset = '';
    if (data) {
      for (var datakey in data) {
        dataset += ' data-' + datakey + '="' + data[datakey] + '"';
      }
    }
    var defcls = noDefclass === true ? '' : 'css-animate animated hide w ' + itemkey;
    html += '<div class="' + defcls + ' ' + (classes ? classes : '') + '" ' + dataset + '></div>\n';
  }
  if (scrollnums) {
    var _loop = function _loop(numKey) {
      var _ref3 = scrollnums[numKey] || {},
          type = _ref3.type,
          _ref3$key = _ref3.key,
          key = _ref3$key === undefined ? numKey : _ref3$key,
          val = _ref3.val,
          data = _ref3.data,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === undefined ? 1000 : _ref3$duration,
          _ref3$time = _ref3.time,
          time = _ref3$time === undefined ? 0 : _ref3$time,
          height = _ref3.height;

      if (!type || !val) return {
          v: html
        };
      html += '<div class="num-wrapper num-wrapper-' + key + ' css-animate animated hide"\n        data-animate="fadeIn" data-time="' + time + '" data-val="' + val + '">';
      var num = '<ul class="num-set-' + type + ' nums-' + key + '">';
      for (var i = 0; i < String(val).length; i++) {
        num += '<li></li>';
      }
      num += '</ul>';
      html += num + '\n</div>';

      var timer = setTimeout(function () {
        var $num = document.querySelector('.cur .num-wrapper-' + key);
        if (!$num) return;
        var $nums = $num.querySelectorAll('li');
        var val = $num.dataset.val;

        var l = String(val).length - 1;

        var _loop2 = function _loop2(n) {
          var t = setTimeout(function () {
            $nums[n].classList.add('num-' + String(val)[n]);
            $nums[n].style.cssText = 'animation:none;';
            clearTimeout(t);
            t = null;
          }, 200 * n);
        };

        for (var n = 0; n <= l; n++) {
          _loop2(n);
        }
        clearTimeout(timer);
        timer = null;
      }, time + duration + 500);
    };

    for (var numKey in scrollnums) {
      var _ret = _loop(numKey);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return html;
};

var getTpl = exports.getTpl = function getTpl(key) {
  if (_config2.default[key]) {
    return tpl(_config2.default[key]);
  } else {
    return '配置';
  }
};

var changePAGE2 = exports.changePAGE2 = function changePAGE2(type) {
  var $page2 = document.querySelector('.page-2');

  if (document.querySelector('.ren-wrapper')) {
    forEach.call(document.querySelectorAll('.ren-wrapper li'), function (dom) {
      dom.style.cssText = 'opacity:0;transform: scale(1)';
    });
  } else {

    var $wrapper = document.createElement('div');
    var html = '<div class="ren-wrapper">';
    var nan = '<ul class="ren-nan-wrapper">';
    // let nv = `<ul class="ren-nv-wrapper">`;
    for (var i = 0; i < 9; i++) {
      nan += '<li class="w w-ren-nan ' + (i == 5 ? 'ren-nan-s' : '') + '" ></li>';
      // nv+= `<li class="w w-ren-nv ${ i==2 || i==7 ? 'ren-nv-s' : ''}" ></li>`;
    }
    nan += '</ul>';
    // nv+='</ul>';
    html += nan + '\n</div>';
    $wrapper.innerHTML = html;
    $page2.appendChild($wrapper);
  }
  if (type == 'before') return;
  var timer = setTimeout(function () {
    if (!document.querySelector('.page-2.cur')) return;
    _anima2.default.timeline({
      targets: '.ren-wrapper li',
      direction: 'alternate',
      loop: false,
      easing: 'easeOutExpo',
      delay: function delay(el, index) {
        return index * 50;
      }
    }).add({
      scale: 0.9,
      opacity: 1
    });
    clearTimeout(timer);
    timer = null;
  }, _config2.default.page2.xiaoRenTime);
};

var changePAGE9 = exports.changePAGE9 = function changePAGE9(type) {
  var list = ['w-left-bar', 'w-right-bar', 'w-up-right-arrow'];
  var $list = document.querySelectorAll('.' + list[0] + ',.' + list[1] + ',.' + list[2]);
  forEach.call($list, function (dom) {
    return dom.classList.remove('change');
  });

  if (type == 'before') return;
  list.forEach(function (key) {
    var timer = setTimeout(function () {
      if (!document.querySelector('.page-9.cur')) return;
      document.querySelector('.' + key).classList.add('change');
      clearTimeout(timer);
      timer = null;
    }, _config2.default.page9.items[key].data.time);
  });
};

var changePAGE11 = exports.changePAGE11 = function changePAGE11(type) {
  var list = ['w-left-bar-1', 'w-right-bar-1', 'w-up-right-arrow-1'];
  var $list = document.querySelectorAll('.' + list[0] + ',.' + list[1] + ',.' + list[2]);
  forEach.call($list, function (dom) {
    return dom.classList.remove('change');
  });

  if (type == 'before') return;
  list.forEach(function (key) {
    var timer = setTimeout(function () {
      if (!document.querySelector('.page-11.cur')) return;
      document.querySelector('.' + key).classList.add('change');
      clearTimeout(timer);
      timer = null;
    }, _config2.default.page11.items[key].data.time);
  });
};

var changePAGE13 = exports.changePAGE13 = function changePAGE13(type) {
  var $left = document.querySelector('.w-left-arrow');
  var $right = document.querySelector('.w-right-arrow');
  var $p1 = document.querySelector('.er-tong');
  var $p2 = document.querySelector('.san-ya');

  if (type == 'before') {
    if ($p1) {
      $left.onclick = null;
      $right.onclick = null;
      $p1.classList.remove('hide');
      $p2.classList.add('hide');
    }
    return;
  };

  $left.onclick = change;
  $right.onclick = change;

  var change = onclick = function onclick() {
    if ($p1.classList.contains('hide')) {
      $p1.classList.remove('hide');
      $p2.classList.add('hide');
    } else {
      $p1.classList.add('hide');
      $p2.classList.remove('hide');
    }
  };
};

var changePAGE18 = exports.changePAGE18 = function changePAGE18(type) {
  var $page18 = document.querySelector('.page-18');

  if (document.querySelector('.fz-wrapper')) {
    forEach.call(document.querySelectorAll('.fz-wrapper li'), function (dom) {
      dom.style.cssText = 'opacity:0;transform: rotate(0deg) translateY(0)';
    });
  } else {

    var $wrapper = document.createElement('div');
    var html = '<div class="fz-wrapper">';
    var fz = '<ul>';
    for (var i = 0; i < 5; i++) {
      fz += '<li class="w fz fz-' + (i + 1) + '" ></li>';
    }
    html += fz + '</ul></div>';
    $wrapper.innerHTML = html;
    $page18.appendChild($wrapper);
  }
  if (type == 'before') return;
  var timer = setTimeout(function () {
    if (!document.querySelector('.page-18.cur')) return;
    _anima2.default.timeline({
      targets: '.fz-wrapper li',
      opacity: 1,
      direction: 'alternate',
      loop: false,
      easing: 'easeOutExpo',
      delay: function delay(el, i) {
        return i * 300;
      },
      duration: 700
    }).add({
      translateY: '-1rem',
      rotate: '360deg',
      opacity: 1
    });
    clearTimeout(timer);
    timer = null;
  }, _config2.default.page18.fzTime);
};
},{"./config.yaml":567,"../lib/anima.min":568,"dns":566}],4:[function(require,module,exports) {
'use strict';

require('../lib/normalize.css');

require('../lib/animate.min.css');

require('../css/index.less');

require('../lib/flexible');

require('../lib/fullpage');

var _tpl = require('./tpl');

var Tpls = _interopRequireWildcard(_tpl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var animateCss = function animateCss(dom, key, val) {
  if (!val) return;

  if (key === 'timing') {
    key = 'timing-function';
  } else if (key === 'count') {
    key = 'iteration-count	';
  }
  dom.style.cssText += 'animation-' + key + ': ' + val + ';-moz-animation-' + key + ': ' + val + ';-webkit-animation-' + key + ': ' + val + ';';
};

var fullpageConfig = {
  beforeChange: function beforeChange(e) {
    var cur = e.cur;
    var tplkey = 'page' + (cur + 1);
    var callback = Tpls['change' + tplkey.toUpperCase()];
    callback && callback('before');
  },
  change: function change(e) {
    var cur = e.cur; // 当前值
    var $page = document.querySelectorAll('.page')[cur]; // 避免重复加载
    // 移除动画属性
    forEach.call($page.querySelectorAll('.css-animate'), function (dom) {
      dom.classList.remove(dom.dataset['animate']);
      dom.classList.add('hide');
    });

    var tplkey = 'page' + (cur + 1);
    var callback = Tpls['change' + tplkey.toUpperCase()];

    // 已加载页面直接返回
    if ($page.dataset.load == '1') {
      callback && callback('after');
      return 1;
    }

    // 加载页面
    $page.innerHTML = Tpls.getTpl(tplkey);
    callback && callback(tplkey);
    $page.dataset.load = 1;
  },
  afterChange: function afterChange(e) {
    // 添加动画属性
    var $curPage = document.querySelectorAll('.page')[e.cur];
    if (!$curPage) return;

    forEach.call($curPage.querySelectorAll('.css-animate'), function (dom) {
      var time = dom.dataset.time;
      setTimeout(function () {
        var _dom$dataset = dom.dataset,
            dataset = _dom$dataset === undefined ? {} : _dom$dataset;
        var animate = dataset.animate,
            infinite = dataset.infinite,
            delay = dataset.delay,
            duration = dataset.duration,
            timing = dataset.timing,
            direction = dataset.direction;

        animate && dom.classList.add(animate);
        if (infinite) {
          dom.classList.add('infinite');
        }
        ['delay', 'duration', 'timing', 'direction', 'count'].forEach(function (key) {
          return animateCss(dom, key, dataset[key]);
        });
        animate && dom.classList.remove('hide');
      }, time);
    });
  }
};

var forEach = [].forEach;
var $wrapper = document.getElementsByClassName('page-inner')[0];
// 首屏幕加载
var first = 1;
var $first = document.querySelector('.page-' + first);
$first.innerHTML = Tpls.getTpl('page' + first);
$first.dataset.load = 1;
fullpageConfig.afterChange({ cur: first });
$wrapper.fullpage(fullpageConfig);
},{"../lib/normalize.css":6,"../lib/animate.min.css":8,"../css/index.less":10,"../lib/flexible":12,"../lib/fullpage":14,"./tpl":16}],572:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58638' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[572,4])
//# sourceMappingURL=/js.c662a0c0.map