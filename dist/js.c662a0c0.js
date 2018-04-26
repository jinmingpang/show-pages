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
})({602:[function(require,module,exports) {
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
},{}],22:[function(require,module,exports) {
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
},{"./bundle-url":602}],6:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":22}],8:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":22}],10:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":22}],12:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../images/up-arrow.png":[["up-arrow.84453794.png",226],226],"./../images/bg-normal.jpg":[["bg-normal.02feab66.jpg",228],228],"./../images/bg-normal-bottom.jpg":[["bg-normal-bottom.bec6a57e.jpg",230],230],"./../images/page-bg.jpg":[["page-bg.1472cfab.jpg",232],232],"./../images/bg-page-8.jpg":[["bg-page-8.6cb53828.jpg",234],234],"./../images/bg-no-thing.jpg":[["bg-no-thing.b1c79009.jpg",236],236],"./../images/num-blue.png":[["num-blue.cbb1c1c7.png",238],238],"./../images/c1.jpeg":[["c1.249eb268.jpeg",240],240],"./../images/c2.jpeg":[["c2.63329f02.jpeg",242],242],"./../images/c3.jpeg":[["c3.14d2e548.jpeg",244],244],"./../images/c4.jpeg":[["c4.e908691a.jpeg",246],246],"./../images/c5.jpeg":[["c5.5e42450e.jpeg",248],248],"./../images/fz-1.png":[["fz-1.00cb0389.png",250],250],"./../images/fz-2.png":[["fz-2.f5744224.png",252],252],"./../images/fz-3.png":[["fz-3.bb31f5ee.png",254],254],"./../images/fz-4.png":[["fz-4.8622c2f5.png",256],256],"./../images/fz-5.png":[["fz-5.a511bc41.png",258],258],"./../images/yun-xing-da.png":[["yun-xing-da.fda00227.png",260],260],"./../images/xiang-shuang.png":[["xiang-shuang.6442d1ff.png",262],262],"./../images/yun-chui.png":[["yun-chui.9a2652b4.png",264],264],"./../images/wang-yuan-jing.png":[["wang-yuan-jing.c1e1bb12.png",266],266],"./../images/qi-qiu.png":[["qi-qiu.7a1bfa64.png",268],268],"./../images/text-yang-guang.png":[["text-yang-guang.5fd59668.png",270],270],"./../images/dian-nao.png":[["dian-nao.2672877a.png",272],272],"./../images/fei-ji-right.png":[["fei-ji-right.a1d157ae.png",274],274],"./../images/xing-xiao.png":[["xing-xiao.5236d081.png",276],276],"./../images/fang-da-jing.png":[["fang-da-jing.68fc4a39.png",278],278],"./../images/tian-wen-jing.png":[["tian-wen-jing.8592f40c.png",280],280],"./../images/bi-fei-ren.png":[["bi-fei-ren.46661848.png",282],282],"./../images/dna-fenzi.png":[["dna-fenzi.509669b9.png",284],284],"./../images/ren-nan.png":[["ren-nan.9374bcee.png",286],286],"./../images/ren-nv.png":[["ren-nv.aaadeeaa.png",288],288],"./../images/deng-pao.png":[["deng-pao.1d9c7c23.png",290],290],"./../images/left-arrow.png":[["left-arrow.522b3ffd.png",292],292],"./../images/right-arrow.png":[["right-arrow.bfd88689.png",294],294],"./../images/huo-pao.png":[["huo-pao.7d822f04.png",296],296],"./../images/dian-shi.png":[["dian-shi.799ff123.png",298],298],"./../images/yan-hua.png":[["yan-hua.81cedacb.png",300],300],"./../images/da-mu-zhi.png":[["da-mu-zhi.ff6ae947.png",302],302],"./../images/xiao-huo-pao.png":[["xiao-huo-pao.617aa2c7.png",304],304],"./../images/peng-you.png":[["peng-you.0c07b05b.png",306],306],"./../images/jiang-bei.png":[["jiang-bei.af905a89.png",308],308],"./../images/lu-biao.png":[["lu-biao.9c6010d6.png",310],310],"./../images/up-down-arrow.png":[["up-down-arrow.07c32c6e.png",312],312],"./../images/xiao-nan-hai.png":[["xiao-nan-hai.b2fed1a6.png",314],314],"./../images/xiao-nv-hai.png":[["xiao-nv-hai.892239cf.png",316],316],"./../images/xian-kuang.png":[["xian-kuang.dff77e60.png",318],318],"./../images/mao-er-board.png":[["mao-er-board.2c7c0882.png",320],320],"./../images/xiao-xiong.png":[["xiao-xiong.5719c794.png",322],322],"./../images/bi-xin.png":[["bi-xin.b68938c4.png",324],324],"./../images/re-qi-qiu.png":[["re-qi-qiu.c5aa0c81.png",326],326],"./../images/x-zhou.png":[["x-zhou.a9d7d9b6.png",328],328],"./../images/up-right-arrow.png":[["up-right-arrow.5f4d770c.png",330],330],"./../images/left-bar.png":[["left-bar.3229df97.png",332],332],"./../images/right-bar.png":[["right-bar.fef2ed89.png",334],334],"./../images/yun-que.png":[["yun-que.32ecab1f.png",336],336],"./../images/jiang-bei-ren.png":[["jiang-bei-ren.003d93f3.png",338],338],"./../images/x-zhou-1.png":[["x-zhou-1.09793cd4.png",340],340],"./../images/up-right-arrow-1.png":[["up-right-arrow-1.1cc6d47c.png",342],342],"./../images/left-bar-1.png":[["left-bar-1.b467d3bc.png",344],344],"./../images/right-bar-1.png":[["right-bar-1.81e3b975.png",346],346],"./../images/fen-zi.png":[["fen-zi.3ef3e9d8.png",348],348],"./../images/dna-xuan.png":[["dna-xuan.f918f335.png",350],350],"./../images/li-wu.png":[["li-wu.05ca49b1.png",352],352],"./../images/di-ifer.png":[["di-ifer.a14063cf.png",354],354],"./../images/xiao-huo-che.png":[["xiao-huo-che.5da326c5.png",356],356],"./../images/xiao-fei-ji.png":[["xiao-fei-ji.795f4b95.png",358],358],"./../images/wan-shua.png":[["wan-shua.e843158a.png",360],360],"./../images/shu-ben.png":[["shu-ben.278b8c22.png",362],362],"./../images/nai-fen.png":[["nai-fen.008486ed.png",364],364],"./../images/sha-bao.png":[["sha-bao.817162e3.png",366],366],"./../images/xue-xi.png":[["xue-xi.f108884e.png",368],368],"./../images/xiao-yun.png":[["xiao-yun.1ee587a0.png",370],370],"./../images/yun-yang.png":[["yun-yang.b2215c49.png",372],372],"./../images/hai-zi-wang.png":[["hai-zi-wang.0a897a46.png",374],374],"./../images/lun-qi-jian-dian.png":[["lun-qi-jian-dian.4388b270.png",376],376],"./../images/lun-tian-mao.png":[["lun-tian-mao.a4c73f15.png",378],378],"./../images/lun-xin-lin-shou.png":[["lun-xin-lin-shou.317dde59.png",380],380],"./../images/di-yi-icon-2.png":[["di-yi-icon-2.102eb3db.png",382],382],"./../images/di-er-icon-2.png":[["di-er-icon-2.3e4e6757.png",384],384],"./../images/di-san-icon-2.png":[["di-san-icon-2.f9c4608a.png",386],386],"./../images/di-si-icon-2.png":[["di-si-icon-2.6fd1e57a.png",388],388],"./../images/di-wu-icon-2.png":[["di-wu-icon-2.41209a5c.png",390],390],"./../images/dou-hao.png":[["dou-hao.4e743619.png",392],392],"./../images/shan-fang-lu.png":[["shan-fang-lu.ca082753.png",394],394],"./../images/tan-suo-yu-zhou.png":[["tan-suo-yu-zhou.832d760b.png",396],396],"./../images/chao-ji-jie-bao.png":[["chao-ji-jie-bao.e53ac1d6.png",398],398],"./../images/data-board.png":[["data-board.6dff8366.png",400],400],"./../images/ren-qun-jing-zhui.png":[["ren-qun-jing-zhui.9c5dab8c.png",402],402],"./../images/bi-fei-ren-1.png":[["bi-fei-ren-1.0c646175.png",404],404],"./../images/line-mulit-s.png":[["line-mulit-s.09fe9199.png",406],406],"./../images/ren-nan-s.png":[["ren-nan-s.06ec26de.png",408],408],"./../images/di-yi-zhang.png":[["di-yi-zhang.679b177e.png",410],410],"./../images/awar-text.png":[["awar-text.ac0b1076.png",412],412],"./../images/da-bao-guang.png":[["da-bao-guang.65f70614.png",414],414],"./../images/shu-ju-zhong-xin.png":[["shu-ju-zhong-xin.072fcb2a.png",416],416],"./../images/wu-da-mei-ti.png":[["wu-da-mei-ti.4b629cd2.png",418],418],"./../images/intro-card.png":[["intro-card.7318fc23.png",420],420],"./../images/shou-ji-ke.png":[["shou-ji-ke.3428f613.png",422],422],"./../images/shou-ji-li.png":[["shou-ji-li.9d98cebe.png",424],424],"./../images/di-yi-icon.png":[["di-yi-icon.afc4526f.png",426],426],"./../images/tan-suo-bao-guang.png":[["tan-suo-bao-guang.1e624019.png",428],428],"./../images/popu-borad.png":[["popu-borad.e90a5bfb.png",430],430],"./../images/num-text-7.png":[["num-text-7.73dde7ae.png",432],432],"./../images/xian-shang-bao-guang.png":[["xian-shang-bao-guang.ec6406d0.png",434],434],"./../images/yi-word.png":[["yi-word.9b5143d9.png",436],436],"./../images/wan-word.png":[["wan-word.da2da058.png",438],438],"./../images/fu-hao-add.png":[["fu-hao-add.c120e19e.png",440],440],"./../images/lei-ji-xin-zeng.png":[["lei-ji-xin-zeng.31c94945.png",442],442],"./../images/tian-mao-baord-er.png":[["tian-mao-baord-er.30ed764e.png",444],444],"./../images/tan-suo-hu-dong.png":[["tan-suo-hu-dong.93183217.png",446],446],"./../images/board-ya-zi.png":[["board-ya-zi.451714da.png",448],448],"./../images/li-na-tu.png":[["li-na-tu.9070cd9d.png",450],450],"./../images/san-zhang-tu.png":[["san-zhang-tu.705182ef.png",452],452],"./../images/san-ya-huo-dong-1.png":[["san-ya-huo-dong-1.982f0d74.png",454],454],"./../images/di-er-zhang.png":[["di-er-zhang.01ac017e.png",456],456],"./../images/mu-zi.png":[["mu-zi.eae30451.png",458],458],"./../images/board-wan-shua.png":[["board-wan-shua.a157bfa2.png",460],460],"./../images/num-text-30.png":[["num-text-30.2c30dab6.png",462],462],"./../images/yi-jian-ling-xiu.png":[["yi-jian-ling-xiu.d9a4dfda.png",464],464],"./../images/interest.png":[["interest.d58e7e1f.png",466],466],"./../images/tan-suo-dong.png":[["tan-suo-dong.3df355ba.png",468],468],"./../images/wan-jia-bg.png":[["wan-jia-bg.192b7156.png",470],470],"./../images/wan-jia-word.png":[["wan-jia-word.abeb85b8.png",472],472],"./../images/wu-zhang-tu.png":[["wu-zhang-tu.9c4af3ef.png",474],474],"./../images/zhi-bo-guan-kan.png":[["zhi-bo-guan-kan.d51b92ee.png",476],476],"./../images/dot-word.png":[["dot-word.5a073320.png",478],478],"./../images/di-er-icon.png":[["di-er-icon.5895401d.png",480],480],"./../images/board-8.png":[["board-8.44508a29.png",482],482],"./../images/p-55.png":[["p-55.c63d38f9.png",484],484],"./../images/fen-si-zeng-zhang.png":[["fen-si-zeng-zhang.9efe34b3.png",486],486],"./../images/p-12345.png":[["p-12345.e64b6855.png",488],488],"./../images/num-text-130.png":[["num-text-130.0ed580ed.png",490],490],"./../images/tian-word.png":[["tian-word.3582252a.png",492],492],"./../images/guo-qu-zeng-zhang.png":[["guo-qu-zeng-zhang.f1b68758.png",494],494],"./../images/huo-dong-zeng-zhang.png":[["huo-dong-zeng-zhang.80c210a4.png",496],496],"./../images/xiang-dang-yu-past.png":[["xiang-dang-yu-past.3333befd.png",498],498],"./../images/ji-lei-fen-liang.png":[["ji-lei-fen-liang.d47f2322.png",500],500],"./../images/di-san-zhang.png":[["di-san-zhang.e4d82661.png",502],502],"./../images/pucharse.png":[["pucharse.5e5bc1be.png",504],504],"./../images/tan-suo-gao-xiao.png":[["tan-suo-gao-xiao.74e88076.png",506],506],"./../images/p-2.png":[["p-2.51841a00.png",508],508],"./../images/quan-nian-top2.png":[["quan-nian-top2.94a539d3.png",510],510],"./../images/bei-word.png":[["bei-word.7f348a8f.png",512],512],"./../images/gao-xiao-liang.png":[["gao-xiao-liang.1b2b9607.png",514],514],"./../images/xiang-dang-yu.png":[["xiang-dang-yu.b941aced.png",516],516],"./../images/p-234.png":[["p-234.7da17fa9.png",518],518],"./../images/jin-ci-yu.png":[["jin-ci-yu.267bbace.png",520],520],"./../images/text-ri-chang.png":[["text-ri-chang.601ff548.png",522],522],"./../images/chao-ji-xiao-liang.png":[["chao-ji-xiao-liang.b71bbe46.png",524],524],"./../images/num-text-1.png":[["num-text-1.17ab553c.png",526],526],"./../images/xiao-lan-he.png":[["xiao-lan-he.b9635b4f.png",528],528],"./../images/eight-hour.png":[["eight-hour.73412485.png",530],530],"./../images/nai-fen-li-wu.png":[["nai-fen-li-wu.04f5c3ae.png",532],532],"./../images/di-wu-zhang.png":[["di-wu-zhang.d68abe9e.png",534],534],"./../images/loyalty.png":[["loyalty.a0aa13c0.png",536],536],"./../images/tan-kou-bei.png":[["tan-kou-bei.3da530e7.png",538],538],"./../images/san-ya-culb.png":[["san-ya-culb.694cef71.png",540],540],"./../images/kuang-san-ya.png":[["kuang-san-ya.aa456f5c.png",542],542],"./../images/er-tong.jpg":[["er-tong.7045972c.jpg",544],544],"./../images/w-word.png":[["w-word.140892f4.png",546],546],"./../images/tan-suo-kou-bei.png":[["tan-suo-kou-bei.558013b4.png",548],548],"./../images/bai-ban-p-200.png":[["bai-ban-p-200.e06b258e.png",550],550],"./../images/you-zhi-kou-bei.png":[["you-zhi-kou-bei.82a3e07a.png",552],552],"./../images/yu-du-hu-dong.png":[["yu-du-hu-dong.4ea5ebbe.png",554],554],"./../images/nan-nv-group.png":[["nan-nv-group.3133a1f1.png",556],556],"./../images/hu-dong-liang.png":[["hu-dong-liang.a648eb66.png",558],558],"./../images/bai-fen-hao.png":[["bai-fen-hao.c913a7fa.png",560],560],"./../images/summary.png":[["summary.72281a62.png",562],562],"./../images/tong-bi-zeng-zhang.png":[["tong-bi-zeng-zhang.fa008107.png",564],564],"./../images/p-89.png":[["p-89.a0c872dd.png",566],566],"./../images/text-55-p.png":[["text-55-p.b7110ffc.png",568],568],"./../images/text-200-p.png":[["text-200-p.aa7a5f78.png",570],570],"./../images/text-255-p.png":[["text-255-p.58919db3.png",572],572],"./../images/tian-mao-chao-shi.png":[["tian-mao-chao-shi.400c50f6.png",574],574],"./../images/tm-chao-icon.png":[["tm-chao-icon.cc55f276.png",576],576],"./../images/circle-tu.png":[["circle-tu.4b7826fa.png",578],578],"./../images/shu-ju-fen-xi.png":[["shu-ju-fen-xi.6826fcb6.png",580],580],"./../images/xiao-liang-zeng-su.png":[["xiao-liang-zeng-su.709af1b2.png",582],582],"./../images/text-p-wenzi.png":[["text-p-wenzi.d61ff6b8.png",584],584],"./../images/cheng-11.png":[["cheng-11.f330bc64.png",586],586],"./../images/da-run-fa.png":[["da-run-fa.1a701c51.png",588],588],"./../images/xiao-yu-zhou-ts.png":[["xiao-yu-zhou-ts.b5ea7eaa.png",590],590],"./../images/china-ditu.png":[["china-ditu.faabb419.png",592],592],"./../images/loc-icon.png":[["loc-icon.df533425.png",594],594],"./../images/wei-lai-text.png":[["wei-lai-text.9e285db1.png",596],596],"_css_loader":22}],16:[function(require,module,exports) {
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
},{}],598:[function(require,module,exports) {
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
},{}],18:[function(require,module,exports) {
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
},{"constants":598}],14:[function(require,module,exports) {
module.exports = {page1: {items: {"w-yun-chui": {data: {animate: "slideInLeft", time: 500}}, "w-xing-shuang": {data: {animate: "flash", infinite: true, duration: "4s", time: 1000}}, "w-wang-yuan-jing": {data: {animate: "tada", time: 500}}, "w-yun-xing": {data: {animate: "slideInRight", time: 500}}, "w-qi-qiu": {data: {animate: "slideInDown", time: 1500}}, "w-text-yang-guang": {data: {animate: "flash", duration: "6s", infinite: true, time: 500}}, "shan-fang-lu": {data: {animate: "fadeIn", time: 500}}, "tan-suo-yu-zhou": {data: {animate: "bounceInUp", time: 1000, duration: "1s"}}, "chao-ji-jie-bao": {data: {animate: "bounceInUp", time: 1000, duration: "1s"}}}}, page2: {xiaoRenTime: 2000, items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 300}}, "w-xing-xiao": {data: {animate: "swing", time: 300, infinite: true}}, "w-fang-da-jing": {data: {animate: "fadeIn", time: 500}}, "w-dna-fenzi": {data: {animate: "rotateIn", time: 1000}}, "w-dian-nao": {data: {animate: "fadeIn", time: 1100}}, "data-board": {data: {animate: "fadeIn", time: 2000}}, "bi-fei-ren-1": {data: {animate: "fadeInUp", time: 1000}}, "line-mulit-s": {data: {animate: "slideInUp", time: 1100, duration: "0.5s"}}, "di-yi-zhang": {data: {animate: "slideInUp", time: 500}}, "awar-text": {data: {animate: "slideInUp", time: 500}}, "da-bao-guang": {data: {animate: "slideInUp", time: 500}}, "ren-qun-jing-zhui": {data: {animate: "fadeIn", time: 1000}}}}, page3: {items: {"w-di-yi-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 500}}, "w-yun-xing": {data: {animate: "fadeInRight", time: 500}}, "w-deng-pao": {data: {animate: "flash", time: 500, duration: "4s", infinite: true}}, "w-huo-pao": {data: {animate: "bounceInRight", time: 500}}, "w-dian-shi": {data: {animate: "slideInRight", time: 500}}, "wu-da-mei-ti": {data: {animate: "zoomIn", time: 1000}}, "intro-card": {data: {animate: "fadeIn", time: 1800}}, "shou-ji-ke": {data: {animate: "fadeIn", time: 1600}}, "shou-ji-li": {data: {animate: "fadeIn", time: 1600}}}}, page4: {items: {"w-yun-xing": {data: {animate: "fadeInRight", time: 500}}, "w-yan-hua": {data: {animate: "slideInUp", time: 500}}, "bg-mask": {data: {animate: "fadeIn", time: 100, duration: "0.2s"}}, "tan-suo-bao-guang": {data: {animate: "fadeInUp", time: 500}}, "xian-shang-bao-guang": {data: {animate: "fadeInDown", time: 800}}, "popu-borad": {data: {animate: "bounceInDown", time: 200, duration: "600ms"}}, "di-yi-icon": {data: {animate: "fadeIn", time: 600}}, "num-text-7": {data: {animate: "bounceIn", time: 1100}}, "yi-word": {data: {animate: "lightSpeedIn", time: 1200, duration: "500ms"}}}}, page5: {scrollnums: {num: {type: "blue", time: 1800, val: 1236, duration: 1000}}, items: {"w-di-yi-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-da-mu-zhi": {data: {animate: "pulse", time: 1500, infinite: true}}, "w-xiao-huo-pao": {data: {animate: "fadeInLeft", time: 300}}, "w-peng-you": {data: {animate: "fadeInRight", time: 300}}, "w-jiang-bei": {data: {animate: "fadeInUp", duration: ".5s", time: 1500}}, "w-huo-pao": {data: {animate: "fadeIn", time: 1600}}, "w-xing-shuang": {data: {animate: "flash", infinite: true, time: 2400, duration: "8s"}}, "wan-word": {data: {animate: "fadeIn", time: 1800}}, "dou-hao1": {data: {animate: "fadeIn", time: 1800}}, "fu-hao-add": {data: {animate: "fadeIn", time: 1900}}, "tan-suo-bao-guang": {data: {animate: "fadeInDown", time: 100}}, "lei-ji-xin-zeng": {data: {animate: "bounceInUp", time: 1000}}, "tian-mao-baord-er": {data: {animate: "fadeInUp", time: 1600}}}}, page6: {items: {"w-fang-da-jing": {data: {animate: "pulse", infinite: true, duration: "2s", time: 1200}}, "w-dna-fenzi": {data: {animate: "rotateIn", time: 500}}, "w-fei-ji-right": {data: {animate: "slideInLeft", time: 500}}, "yun-xing-da": {data: {animate: "slideInRight", time: 500}}, "w-jiang-bei-ren": {data: {animate: "zooomIn", time: 6500}}, "w-up-down-arrow": {data: {animate: "fadeIn", time: 2200}}, "tan-suo-hu-dong": {data: {animate: "fadeInUp", time: 1000}}, "di-er-zhang": {data: {animate: "fadeIn", time: 1200}}, interest: {data: {animate: "fadeInUp", time: 1000}}, "num-text-30": {data: {animate: "fadeInUp", time: 2000}}, "yi-jian-ling-xiu": {data: {animate: "fadeInUp", time: 2400}}, "fu-hao-add": {data: {animate: "tada", infinite: true, duration: "4s", time: 2600}}, "board-wan-shua": {data: {animate: "fadeIn", time: 2200}}, "san-zhang-tu": {data: {animate: "fadeIn", time: 2500}}, "san-ya-huo-dong-1": {data: {animate: "slideInLeft", time: 1900}}, "li-na-tu": {data: {animate: "fadeIn", time: 1800}}, "board-ya-zi": {data: {animate: "fadeIn", time: 1500}}}}, page7: {scrollnums: {num: {type: "blue", time: 2000, val: 6131, duration: 1500}}, items: {"w-di-er-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 2000, infinite: true, duration: "10s", delay: 1000, direction: "alternate"}}, "w-yun-xing": {data: {animate: "fadeInRight", time: 500}}, "w-xiao-nan-hai": {data: {animate: "fadeInUp", time: 1000}}, "w-dou-hao": {data: {animate: "fadeIn", time: 2000}}, "wan-jia-word": {data: {animate: "fadeIn", time: 2000}}, "w-xiao-nv-hai": {data: {animate: "pulse", time: 3500, infinite: true, duration: "5s", direction: "alternate"}}, "w-xian-kuang": {data: {animate: "zoomIn", time: 2800}}, "w-huo-pao": {data: {animate: "fadeIn", time: 2200}}, "w-mao-er-board": {data: {animate: "bounceInDown", time: 500}}, "dot-word": {data: {animate: "fadeIn", time: 2600}}, "tan-suo-dong": {data: {animate: "fadeInDown", time: 200}}, "wan-jia-bg": {data: {animate: "fadeIn", time: 2000}}, "wu-zhang-tu": {data: {animate: "zoomIn", time: 2800}}, "zhi-bo-guan-kan": {data: {animate: "fadeIn", time: 1300}}}}, page8: {scrollnums: {num: {type: "blue", time: 2000, val: 106, duration: 1200}}, items: {"bg-mask": {data: {animate: "fadeIn", time: 0}}, "w-xiao-xiong": {data: {animate: "swing", time: 1500}}, "tan-suo-dong": {data: {animate: "fadeInDown", time: 1400}}, "di-er-icon": {data: {animate: "fadeIn", time: 900}}, "w-bi-xin": {data: {animate: "flash", infinite: true, time: 2500, duration: "6s"}}, "board-8": {data: {animate: "bounceInDown", time: 200, duration: 600}}, "p-55": {data: {animate: "slideInUp", time: 2500}}, "dot-word": {data: {animate: "fadeIn", time: 2200}}, "wan-word": {data: {animate: "slideInRight", duration: ".5s", time: 2200}}, "fen-si-zeng-zhang": {data: {animate: "fadeInUp", time: 1400}}, "w-wang-yuan-jing": {data: {animate: "swing", time: 2500}}}}, page9: {items: {"w-di-er-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 300}}, "w-yun-xing": {data: {animate: "slideInRight", time: 300}}, "w-re-qi-qiu": {data: {animate: "fadeOutUp", time: 500, infinite: true, duration: "10s", delay: 1000, direction: "alternate"}}, "w-wang-yuan-jing": {data: {animate: "zoomIn", time: 500}}, "w-huo-pao": {data: {animate: "fadeIn", time: 500}}, "w-xiao-nv-hai": {data: {animate: "flipInY", time: 500}}, "w-x-zhou": {data: {animate: "fadeIn", time: 800}}, "w-up-right-arrow": {data: {time: 2400}}, "w-left-bar": {data: {time: 1400}}, "w-right-bar": {data: {time: 2800}}, "num-text-130": {data: {animate: "tada", time: 3800}}, "tian-word": {data: {animate: "fadeIn", time: 4200}}, "huo-dong-zeng-zhang": {data: {animate: "flipInY", time: 2000}}, "guo-qu-zeng-zhang": {data: {animate: "flipInY", time: 1000}}, "xiang-dang-yu-past": {data: {animate: "fadeInLeft", time: 3000}}, "ji-lei-fen-liang": {data: {animate: "fadeInRight", time: 3000}}}}, page10: {items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 200}}, "w-xing-xiao": {data: {data: null, animate: "rotate", infinite: true, duration: "20s", time: 300}}, "w-fang-da-jing": {data: {animate: "rotateInUpRight", time: 1200}}, "w-da-mu-zhi": {data: {animate: "tada", infinite: true, duration: "4s", time: 2000}}, "w-yun-que": {data: {animate: "fadeIn", time: 2000}}, "w-bi-fei-ren": {data: {animate: "rotateInDownLeft", time: 500}}, "w-tian-wen-jing": {data: {animate: "rotateInDownRight", time: 500}}, "di-san-zhang": {data: {animate: "fadeIn", time: 600}}, pucharse: {data: {animate: "fadeInUp", time: 800}}, "tan-suo-gao-xiao": {data: {animate: "fadeInUp", time: 800}}, "p-2": {data: {animate: "zoomIn", time: 1500}}, "quan-nian-top2": {data: {animate: "zoomIn", time: 1500}}}}, page11: {scrollnums: {num: {type: "blue", time: 1400, val: 30, duration: 1200}}, items: {"w-di-san-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 2000, infinite: true, duration: "10s", delay: 1000, direction: "alternate"}}, "w-yun-xing": {data: {animate: "slideInRight", time: 200}}, "w-jiang-bei-ren": {data: {animate: "fadeIn", time: 2000}}, "w-x-zhou-1": {data: {animate: "fadeIn", time: 1000}}, "w-up-right-arrow-1": {data: {time: 2400}}, "w-left-bar-1": {data: {time: 1800}}, "w-right-bar-1": {data: {time: 2800}}, "bei-word": {data: {animate: "fadeInUp", time: 1800}}, "w-fen-zi": {data: {animate: "tada", infinite: true, duration: "4s", time: 500}}, "gao-xiao-liang": {data: {animate: "fadeInUp", time: 500}}, "shan-fang-lu": {data: {animate: "fadeInUp", time: 300}}, "xiang-dang-yu": {data: {animate: "slideInLeft", time: 800}}, "jin-ci-yu": {data: {animate: "slideInRight", time: 800}}, "text-ri-chang": {data: {animate: "flipInY", time: 1000}}, "chao-ji-xiao-liang": {data: {animate: "flipInY", time: 1800}}}}, page12: {items: {"w-di-san-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-fei-ji-right": {data: {animate: "slideInLeft", time: 500}}, "w-li-wu": {data: {animate: "slideInRight", time: 500}}, "w-dna-xuan": {data: {animate: "rotateIn", time: 500}}, "w-huo-pao": {data: {animate: "zoomIn", time: 2800}}, "w-xiao-nan-hai": {data: {animate: "fadeInUp", time: 3200}}, "gao-xiao-liang": {data: {animate: "fadeInUp", time: 500}}, "xiao-lan-he": {data: {animate: "zoomIn", time: 1000}}, "eight-hour": {data: {animate: "fadeIn", time: 1400}}, "num-text-1": {data: {animate: "zoomIn", time: 1400}}, "nai-fen-li-wu": {data: {animate: "bounceInUp", time: 1800}}}}, page13: {items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 500}}, "w-xing-xiao": {data: {animate: "rotate", infinite: true, duration: "20s", time: 800}}, "w-fang-da-jing": {data: {animate: "tada", infinite: true, duration: "10s", time: 5000}}, "w-left-arrow": {data: {animate: "slideInRight", time: 1800}}, "w-right-arrow": {data: {animate: "slideInLeft", time: 1800}}, "di-wu-zhang": {data: {animate: "fadeIn", time: 500}}, loyalty: {data: {animate: "fadeInUp", time: 800}}, "tan-kou-bei": {data: {animate: "fadeInUp", time: 800}}, "san-ya-culb": {data: {animate: "zoomIn", time: 1000}}, "kuang-san-ya": {data: {animate: "rotateInDownRight", time: 1200}}, "er-tong": {data: {animate: "rotateIn", time: 1800}}, "di-ifer": {data: {animate: "fadeIn", time: 800}}}}, page14: {scrollnums: {num: {type: "blue", time: 2000, val: 322, duration: 1200}}, items: {"w-di-si-icon-2": {data: {animate: "fadeIn", time: 200}}, "w-yun-xing": {data: {animate: "bounceInDown", time: 500}}, "w-jiang-bei": {data: {animate: "swing", time: 2000}}, "w-yan-hua": {data: {animate: "zoomIn", time: 3000}}, "w-yun-chui": {data: {animate: "rotateInDownLeft", time: 2200, duration: "2s"}}, "w-shu-ben": {data: {animate: "rotateInUpLeft", time: 2200, duration: "2s"}}, "w-nai-fen": {data: {animate: "rotateInUpRight", time: 2200, duration: "2s"}}, "w-xiao-huo-che": {data: {animate: "slideInUp", time: 500}}, "w-xiao-fei-ji": {data: {animate: "slideInDown", time: 500}}, "w-wan-shua": {data: {animate: "slideInUp", time: 500}}, "w-xiao-nan-hai": {data: {animate: "slideInUp", time: 500}}, "w-xiao-huo-pao": {data: {animate: "slideInUp", time: 500}}, "bai-ban-p-200": {data: {animate: "rotateIn", time: 500}}, "you-zhi-kou-bei": {data: {animate: "fadeInDown", time: 1500}}, "yu-du-hu-dong": {data: {animate: "fadeInDown", time: 1600}}, "w-word": {data: {animate: "fadeIn", time: 2200}}, "nan-nv-group": {data: {animate: "zoomIn", time: 2600}}, "hu-dong-liang": {data: {animate: "rotateIn", time: 3000}}}}, page15: {scrollnums: {num: {type: "blue", time: 1800, val: 760, duration: 1200}}, items: {"w-fei-ji-right": {data: {animate: "slideInLeft", time: 200}}, "w-xing-xiao": {data: {animate: "slideInDown", time: 500}}, "w-fang-da-jing": {data: {animate: "rotateIn", time: 500}}, "w-huo-pao": {data: {animate: "zoomIn", time: 3000}}, "w-lun-xin-lin-shou": {data: {animate: "rotateIn", duration: "30s", time: 1500}}, "w-lun-tian-mao": {data: {animate: "rotateIn", duration: "30s", time: 2000}}, "bai-fen-hao": {data: {animate: "fadeIn", time: 1800}}, "di-wu-zhang": {data: {animate: "fadeIn", time: 500}}, summary: {data: {animate: "fadeInUp", time: 1000}}, "tong-bi-zeng-zhang": {data: {animate: "fadeInUp", time: 1000}}, "sha-bao": {data: {animate: "slideInUp", time: 500}}}}, page16: {items: {"w-di-wu-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-xue-xi": {data: {animate: "slideInUp", time: 500}}, "w-xiao-yun": null, "tm-chao-icon": {data: {animate: "fadeIn", time: 1200}}, "w-xiao-fei-ji": {data: {animate: "bounceInLeft", time: 6500}}, "w-fen-zi": {data: {animate: "tada", infinite: true, duration: "4s", time: 4200}}, "tian-mao-chao-shi": {data: {animate: "zoomIn", time: 500}}, "circle-tu": {data: {animate: "bounceIn", time: 1200}}, "bai-fen-hao": {data: {animate: "fadeIn", time: 1800}}, "text-55-p": {data: {animate: "flash", time: 1200}}, "text-200-p": {data: {animate: "flash", time: 2000}}, "text-255-p": {data: {animate: "flash", time: 3400}}, "mao-chao-zeng-zhang": {data: {animate: "flash", time: 5200}}, "xin-ke-zeng-zhang": {data: {animate: "flash", time: 1800}}, "text-p-wenzi": {data: {animate: "fadeInDown", time: 4000}}, "shu-ju-fen-xi": {data: {animate: "slideInDown", time: 4500}}}}, page17: {items: {"w-di-wu-icon-2": {data: {animate: "fadeIn", time: 300}}, "w-re-qi-qiu": {data: {animate: "fadeInUp", time: 2800}}, "w-yun-yang": {data: {animate: "fadeIn", time: 1000}}, "w-fei-ji-right": {data: {animate: "fadeInLeft", time: 500}}, "w-huo-pao": {data: {animate: "fadeIn", time: 800}}, "cheng-11": {data: {animate: "fadeInDown", time: 500}}, "da-run-fa": {data: {animate: "zoomIn", time: 2800}}, "xiao-yu-zhou-ts": {data: {animate: "fadeInDown", time: 2400}}, "china-ditu": {data: {animate: "fadeIn", time: 1400}}, "loc-icon": {data: {animate: "fadeInDown", time: 1800}}}}, page18: {fzTime: 1000, items: {"wei-lai-text": {data: {animate: "pulse", inifnite: true, duration: "4s", time: 2400}}}}};
},{}],600:[function(require,module,exports) {
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
},{}],601:[function(require,module,exports) {
var tns = function () {
  function e() {
    for (var e, t, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++) {
      if (null !== (e = arguments[a])) for (t in e) {
        n = e[t], i !== n && void 0 !== n && (i[t] = n);
      }
    }return i;
  }function t(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }function n(e, t, n) {
    return n && localStorage.setItem(e, t), t;
  }function i() {
    var e = window.tnsId;return window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId;
  }function a() {
    var e = document,
        t = e.body;return t || (t = e.createElement("body"), t.fake = !0), t;
  }function r(e) {
    var t = "";return e.fake && (t = P.style.overflow, e.style.background = "", e.style.overflow = P.style.overflow = "hidden", P.appendChild(e)), t;
  }function o(e, t) {
    e.fake && (e.remove(), P.style.overflow = t, P.offsetHeight);
  }function s(e) {
    var t = document.createElement("style");return e && t.setAttribute("media", e), document.querySelector("head").appendChild(t), t.sheet ? t.sheet : t.styleSheet;
  }function l(e, t, n, i) {
    "insertRule" in e ? e.insertRule(t + "{" + n + "}", i) : e.addRule(t, n, i);
  }function c(e) {
    return ("insertRule" in e ? e.cssRules : e.rules).length;
  }function u(e, t) {
    return Math.atan2(e, t) * (180 / Math.PI);
  }function f(e, t) {
    var n = !1,
        i = Math.abs(90 - Math.abs(e));return i >= 90 - t ? n = "horizontal" : i <= t && (n = "vertical"), n;
  }function d(e, t, n) {
    for (var i = 0, a = e.length; i < a; i++) {
      t.call(n, e[i], i);
    }
  }function v(e, t) {
    return e.className.indexOf(t) >= 0;
  }function h(e, t) {
    v(e, t) || (e.className += " " + t);
  }function p(e, t) {
    v(e, t) && (e.className = e.className.replace(t, ""));
  }function m(e, t) {
    return e.hasAttribute(t);
  }function y(e, t) {
    return e.getAttribute(t);
  }function g(e) {
    return void 0 !== e.item;
  }function x(e, t) {
    if (e = g(e) || e instanceof Array ? e : [e], "[object Object]" === Object.prototype.toString.call(t)) for (var n = e.length; n--;) {
      for (var i in t) {
        e[n].setAttribute(i, t[i]);
      }
    }
  }function b(e, t) {
    e = g(e) || e instanceof Array ? e : [e], t = t instanceof Array ? t : [t];for (var n = t.length, i = e.length; i--;) {
      for (var a = n; a--;) {
        e[i].removeAttribute(t[a]);
      }
    }
  }function T(e) {
    e.style.cssText = "";
  }function A(e) {
    m(e, "hidden") || x(e, { hidden: "" });
  }function E(e) {
    m(e, "hidden") && b(e, "hidden");
  }function w(e) {
    return e.offsetWidth > 0 && e.offsetHeight > 0;
  }function C(e) {
    for (var t = document.createElement("fakeelement"), n = (e.length, 0); n < e.length; n++) {
      var i = e[n];if (void 0 !== t.style[i]) return i;
    }return !1;
  }function O(e, t) {
    var n = !1;return (/^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end"), n
    );
  }function N(e, t) {
    for (var n in t) {
      var i = ("touchstart" === n || "touchmove" === n) && W;e.addEventListener(n, t[n], i);
    }
  }function D(e, t) {
    for (var n in t) {
      var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && W;e.removeEventListener(n, t[n], i);
    }
  }function k() {
    return { topics: {}, on: function on(e, t) {
        this.topics[e] = this.topics[e] || [], this.topics[e].push(t);
      }, off: function off(e, t) {
        if (this.topics[e]) for (var n = 0; n < this.topics[e].length; n++) {
          if (this.topics[e][n] === t) {
            this.topics[e].splice(n, 1);break;
          }
        }
      }, emit: function emit(e, t) {
        this.topics[e] && this.topics[e].forEach(function (e) {
          e(t);
        });
      } };
  }function M(e, t, n, i, a, r, o) {
    function s() {
      r -= l, u += f, e.style[t] = n + u + c + i, r > 0 ? setTimeout(s, l) : o();
    }var l = Math.min(r, 10),
        c = a.indexOf("%") >= 0 ? "%" : "px",
        a = a.replace(c, ""),
        u = Number(e.style[t].replace(n, "").replace(i, "").replace(c, "")),
        f = (a - u) / r * l;setTimeout(s, l);
  }Object.keys || (Object.keys = function (e) {
    var t = [];for (var n in e) {
      Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    }return t;
  }), function () {
    "use strict";
    "remove" in Element.prototype || (Element.prototype.remove = function () {
      this.parentNode && this.parentNode.removeChild(this);
    });
  }();var P = document.documentElement,
      I = !1;try {
    var S = Object.defineProperty({}, "passive", { get: function get() {
        I = !0;
      } });window.addEventListener("test", null, S);
  } catch (e) {}var W = !!I && { passive: !0 },
      L = navigator.userAgent,
      H = !0,
      B = {};try {
    B = localStorage, B.tnsApp && B.tnsApp !== L && ["tC", "tSP", "tMQ", "tTf", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (e) {
      B.removeItem(e);
    }), B.tnsApp = L;
  } catch (e) {
    H = !1;
  }H && !localStorage && (B = {});var z = document,
      R = window,
      j = { ENTER: 13, SPACE: 32, PAGEUP: 33, PAGEDOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
      G = t(B.tC) || n("tC", function () {
    var e = document,
        t = a(),
        n = r(t),
        i = e.createElement("div"),
        s = !1;t.appendChild(i);try {
      for (var l, c = ["calc(10px)", "-moz-calc(10px)", "-webkit-calc(10px)"], u = 0; u < 3; u++) {
        if (l = c[u], i.style.width = l, 10 === i.offsetWidth) {
          s = l.replace("(10px)", "");break;
        }
      }
    } catch (e) {}return t.fake ? o(t, n) : i.remove(), s;
  }(), H),
      q = t(B.tSP) || n("tSP", function () {
    var e,
        t,
        n = document,
        i = a(),
        s = r(i),
        l = n.createElement("div"),
        c = n.createElement("div");return l.style.cssText = "width: 10px", c.style.cssText = "float: left; width: 5.5px; height: 10px;", e = c.cloneNode(!0), l.appendChild(c), l.appendChild(e), i.appendChild(l), t = c.offsetTop !== e.offsetTop, i.fake ? o(i, s) : l.remove(), t;
  }(), H),
      F = t(B.tMQ) || n("tMQ", function () {
    var e,
        t = document,
        n = a(),
        i = r(n),
        s = t.createElement("div"),
        l = t.createElement("style"),
        c = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type = "text/css", s.className = "tns-mq-test", n.appendChild(l), n.appendChild(s), l.styleSheet ? l.styleSheet.cssText = c : l.appendChild(t.createTextNode(c)), e = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, n.fake ? o(n, i) : s.remove(), "absolute" === e;
  }(), H),
      U = t(B.tTf) || n("tTf", C(["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"]), H),
      Q = t(B.tTDu) || n("tTDu", C(["transitionDuration", "WebkitTransitionDuration", "MozTransitionDuration", "OTransitionDuration"]), H),
      X = t(B.tTDe) || n("tTDe", C(["transitionDelay", "WebkitTransitionDelay", "MozTransitionDelay", "OTransitionDelay"]), H),
      V = t(B.tADu) || n("tADu", C(["animationDuration", "WebkitAnimationDuration", "MozAnimationDuration", "OAnimationDuration"]), H),
      Y = t(B.tADe) || n("tADe", C(["animationDelay", "WebkitAnimationDelay", "MozAnimationDelay", "OAnimationDelay"]), H),
      K = t(B.tTE) || n("tTE", O(Q, "Transition"), H),
      J = t(B.tAE) || n("tAE", O(V, "Animation"), H);F || (q = !1);var Z = function Z(t) {
    function n() {
      return R.innerWidth || z.documentElement.clientWidth || z.body.clientWidth;
    }function a(e) {
      var t = e.clientWidth;return t ? t : a(e.parentNode);
    }function r(e) {
      var n = t[e];return !n && At && Tt.indexOf(e) >= 0 && At.forEach(function (t) {
        bt[t][e] && (n = !0);
      }), n;
    }function o(e, n) {
      n = n ? n : wt;var i,
          a = { slideBy: "page", edgePadding: !1 };if (!ot && e in a) i = a[e];else if ("items" === e && o("fixedWidth")) i = Math.floor(Ct / (o("fixedWidth") + o("gutter")));else if ("autoHeight" === e && "outer" === St) i = !0;else if (i = t[e], At && Tt.indexOf(e) >= 0) for (var r = 0, s = At.length; r < s; r++) {
        var l = At[r];if (!(n >= l)) break;e in bt[l] && (i = bt[l][e]);
      }return "slideBy" === e && "page" === i && (i = o("items")), i;
    }function g(e) {
      return G ? G + "(" + 100 * e + "% / " + Xt + ")" : 100 * e / Xt + "%";
    }function C(e, t, n) {
      var i = "";if (e) {
        var a = e;t && (a += t), i = n ? "margin: 0px " + (Ct % (n + t) + t) / 2 + "px" : vt ? "margin: 0 " + e + "px 0 " + a + "px;" : "padding: " + a + "px 0 " + e + "px 0;";
      } else if (t && !n) {
        var r = "-" + t + "px",
            o = vt ? r + " 0 0" : "0 " + r + " 0";i = "margin: 0 " + o + ";";
      }return i;
    }function O(e, t, n) {
      return e ? (e + t) * Xt + "px" : G ? G + "(" + 100 * Xt + "% / " + n + ")" : 100 * Xt / n + "%";
    }function P(e, t, n) {
      var i = "";if (vt) {
        if (i = "width:", e) i += e + t + "px";else {
          var a = ot ? Xt : n;i += G ? G + "(100% / " + a + ")" : 100 / a + "%";
        }i += pn + ";";
      }return i;
    }function I(e) {
      var t = "";if (e !== !1) {
        t = (vt ? "padding-" : "margin-") + (vt ? "right" : "bottom") + ": " + e + "px;";
      }return t;
    }function S(e) {
      e = e || R.event, clearTimeout(Dt), Dt = setTimeout(function () {
        dt && (wt = n(), W(), "outer" === St && ln.emit("outerResized", Je(e)));
      }, 100);
    }function W() {
      var e = Et,
          t = _t,
          n = Pt,
          i = hn;if (Ht && (Ct = a(ht)), ft = a(pt), At && L(), e !== Et || Ht) {
        var r = Bt,
            s = Gt,
            u = Ht,
            f = Lt,
            d = Wt,
            v = dn;if (Pt = o("items"), It = o("slideBy"), dn = o("disable"), hn = !!dn || !!vn && xt <= Pt, Pt !== n && (nn = Xt - Pt, vi()), dn !== v && $(dn), hn !== i && (hn && (_t = ot ? Qt : 0), H()), e !== Et && (zt = o("speed"), Lt = o("edgePadding"), Wt = o("gutter"), Ht = o("fixedWidth"), dn || Ht === u || me(), (Gt = o("autoHeight")) !== s && (Gt || (pt.style.height = ""))), Bt = !hn && o("arrowKeys"), Bt !== r && (Bt ? N(z, bn) : D(z, bn)), En) {
          var h = Wn,
              p = Ln;Wn = !hn && o("controls"), Ln = o("controlsText"), Wn !== h && (Wn ? E(Hn) : A(Hn)), Ln !== p && (Mn.innerHTML = Ln[0], Pn.innerHTML = Ln[1]);
        }if (wn) {
          var m = zn;zn = !hn && o("nav"), zn !== m && (zn ? (E(Rn), Ke()) : A(Rn));
        }if (Nn) {
          var y = li;li = !hn && o("touch"), li !== y && ot && (li ? N(mt, Tn) : D(mt, Tn));
        }if (Dn) {
          var g = fi;fi = !hn && o("mouseDrag"), fi !== g && ot && (fi ? N(mt, An) : D(mt, An));
        }if (On) {
          var x = Zn,
              b = ti,
              T = ii,
              w = ei;if (hn ? Zn = ti = ii = !1 : (Zn = o("autoplay"), Zn ? (ti = o("autoplayHoverPause"), ii = o("autoplayResetOnVisibility")) : ti = ii = !1), ei = o("autoplayText"), $n = o("autoplayTimeout"), Zn !== x && (Zn ? (ni && E(ni), Vn || Kn || De()) : (ni && A(ni), Vn && ke())), ti !== b && (ti ? N(mt, gn) : D(mt, gn)), ii !== T && (ii ? N(z, xn) : D(z, xn)), ni && ei !== w) {
            var k = Zn ? 1 : 0,
                M = ni.innerHTML,
                S = M.length - w[k].length;M.substring(S) === w[k] && (ni.innerHTML = M.substring(0, S) + ei[k]);
          }
        }if (!F) {
          if (hn || Lt === f && Wt === d || (pt.style.cssText = C(Lt, Wt, Ht)), ot && vt && (Ht !== u || Wt !== d || Pt !== n) && (mt.style.width = O(Ht, Wt, Pt)), vt && (Pt !== n || Wt !== d || Ht != u)) {
            var W = P(Ht, Wt, Pt) + I(Wt);qt.removeRule(c(qt) - 1), l(qt, "#" + fn + " > .tns-item", W, c(qt));
          }Ht || _t !== t || ge(0);
        }_t !== t && (ln.emit("indexChanged", Je()), ge(0), en = _t), Pt !== n && (ne(), se(), navigator.msMaxTouchPoints && re());
      }vt || dn || (ae(), Ve(), me()), B(!0), Gt ? ee() : ie();
    }function L() {
      Et = 0, At.forEach(function (e, t) {
        wt >= e && (Et = t + 1);
      });
    }function H() {
      var e = "tns-transparent";if (hn) {
        if (!Mt) {
          if (Lt && (pt.style.margin = "0px"), Qt) for (var t = Qt; t--;) {
            ot && h(gt[t], e), h(gt[Xt - t - 1], e);
          }Mt = !0;
        }
      } else if (Mt) {
        if (Lt && !Ht && F && (pt.style.margin = ""), Qt) for (var t = Qt; t--;) {
          ot && p(gt[t], e), p(gt[Xt - t - 1], e);
        }Mt = !1;
      }
    }function B(e) {
      Ht && Lt && (hn || Ct <= Ht + Wt ? "0px" !== pt.style.margin && (pt.style.margin = "0px") : e && (pt.style.cssText = C(Lt, Wt, Ht)));
    }function $(e) {
      var t = gt.length;if (e) {
        if (qt.disabled = !0, mt.className = mt.className.replace(un.substring(1), ""), T(mt), jt) for (var n = Qt; n--;) {
          ot && A(gt[n]), A(gt[t - n - 1]);
        }if (vt && ot || T(pt), !ot) for (var i = _t, a = _t + xt; i < a; i++) {
          var r = gt[i];T(r), p(r, st), p(r, ut);
        }
      } else {
        if (qt.disabled = !1, mt.className += un, vt || ae(), me(), jt) for (var n = Qt; n--;) {
          ot && E(gt[n]), E(gt[t - n - 1]);
        }if (!ot) for (var i = _t, a = _t + xt; i < a; i++) {
          var r = gt[i],
              o = i < _t + Pt ? st : ut;r.style.left = 100 * (i - _t) / Pt + "%", h(r, o);
        }
      }
    }function _() {
      if (Ft && !dn) {
        var e = _t,
            t = _t + Pt;for (Lt && (e -= 1, t += 1); e < t; e++) {
          d(gt[e].querySelectorAll(".tns-lazy-img"), function (e) {
            var t = {};t[K] = function (e) {
              e.stopPropagation();
            }, N(e, t), v(e, "loaded") || (e.src = y(e, "data-src"), h(e, "loaded"));
          });
        }
      }
    }function ee() {
      if (Gt && !dn) {
        for (var e = [], t = [], n = [], i = _t, a = _t + Pt; i < a; i++) {
          d(gt[i].querySelectorAll("img"), function (i) {
            i.addEventListener("load", function e() {
              t.push(i), i.removeEventListener("load", e);
            }), i.addEventListener("error", function e() {
              n.push(i), i.removeEventListener("error", e);
            });var a = i.src;i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", i.src = a, e.push(i);
          });
        }if (!e.length) return void ie();te(e, t, n);
      }
    }function te(e, t, n) {
      if (e.forEach(function (i, a) {
        (t.indexOf(i) >= 0 || n.indexOf(i) >= 0) && e.splice(a, 1);
      }), !e.length) return void ie();setTimeout(function () {
        te(e, t, n);
      }, 16);
    }function ne() {
      _(), oe(), ve(), Ke(), le();
    }function ie() {
      var e,
          t,
          n,
          i = [];Gt ? (t = _t, n = Pt) : ot || (t = Qt, n = xt);for (var a = t, r = t + n; a < r; a++) {
        i.push(gt[a].offsetHeight);
      }e = Math.max.apply(null, i), pt.style.height !== e && (Q && he(zt), pt.style.height = e + "px");
    }function ae() {
      Nt = [0];for (var e, t = gt[0].getBoundingClientRect().top, n = 1; n < Xt; n++) {
        e = gt[n].getBoundingClientRect().top, Nt.push(e - t);
      }
    }function re() {
      ht.style.msScrollSnapPointsX = "snapInterval(0%, " + 100 / Pt + "%)";
    }function oe() {
      for (var e = _t + Math.min(xt, Pt), t = Xt; t--;) {
        var n = gt[t];t >= _t && t < e ? m(n, "tabindex") && (x(n, { "aria-hidden": "false" }), b(n, ["tabindex"]), h(n, kn)) : (m(n, "tabindex") || x(n, { "aria-hidden": "true", tabindex: "-1" }), v(n, kn) && p(n, kn));
      }
    }function se() {
      if (!ot) {
        for (var e = _t + Math.min(xt, Pt), t = Xt; t--;) {
          var n = gt[t];t >= _t && t < e ? (h(n, "tns-moving"), n.style.left = 100 * (t - _t) / Pt + "%", h(n, st), p(n, ut)) : n.style.left && (n.style.left = "", h(n, ut), p(n, st)), p(n, lt);
        }setTimeout(function () {
          d(gt, function (e) {
            p(e, "tns-moving");
          });
        }, 300);
      }
    }function le() {
      if (zn && (Fn = qn !== -1 ? qn : _t % xt, qn = -1, Fn !== Un)) {
        var e = Bn[Un],
            t = Bn[Fn];x(e, { tabindex: "-1", "aria-selected": "false" }), x(t, { tabindex: "0", "aria-selected": "true" }), p(e, Qn), h(t, Qn);
      }
    }function ce(e) {
      return e.nodeName.toLowerCase();
    }function ue(e) {
      return "button" === ce(e);
    }function fe(e) {
      return "true" === e.getAttribute("aria-disabled");
    }function de(e, t, n) {
      e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString());
    }function ve() {
      if (Wn && !Rt && !jt) {
        var e = In ? Mn.disabled : fe(Mn),
            t = Sn ? Pn.disabled : fe(Pn),
            n = _t === tn,
            i = !Rt && _t === nn;n && !e && de(In, Mn, !0), !n && e && de(In, Mn, !1), i && !t && de(Sn, Pn, !0), !i && t && de(Sn, Pn, !1);
      }
    }function he(e, t) {
      e = e ? e / 1e3 + "s" : "", t = t || mt, t.style[Q] = e, ot || (t.style[V] = e), vt || (pt.style[Q] = e);
    }function pe() {
      var e;if (vt) {
        if (Ht) e = -(Ht + Wt) * _t + "px";else {
          var t = U ? Xt : Pt;e = 100 * -_t / t + "%";
        }
      } else e = -Nt[_t] + "px";return e;
    }function me(e) {
      e || (e = pe()), mt.style[Kt] = Jt + e + Zt;
    }function ye(e, t, n, i) {
      for (var a = e, r = e + Pt; a < r; a++) {
        var o = gt[a];i || (o.style.left = 100 * (a - _t) / Pt + "%"), Q && he(zt, o), ct && X && (o.style[X] = o.style[Y] = ct * (a - e) / 1e3 + "s"), p(o, t), h(o, n), i && Ut.push(o);
      }
    }function ge(e, t) {
      isNaN(e) && (e = zt), Vn && !w(mt) && (e = 0), Q && he(e), hi(e, t);
    }function xe(e, t) {
      Yt && vi(), (_t !== en || t) && (ln.emit("indexChanged", Je()), ln.emit("transitionStart", Je()), Vn && e && ["click", "keydown"].indexOf(e.type) >= 0 && ke(), on = !0, ge());
    }function be(e) {
      return e.toLowerCase().replace(/-/g, "");
    }function Te(e) {
      if (ot || on) {
        if (ln.emit("transitionEnd", Je(e)), !ot && Ut.length > 0) for (var t = 0; t < Pt; t++) {
          var n = Ut[t];n.style.left = "", Q && he(0, n), ct && X && (n.style[X] = n.style[Y] = ""), p(n, lt), h(n, ut);
        }if (!e || !ot && e.target.parentNode === mt || e.target === mt && be(e.propertyName) === be(Kt)) {
          if (!Yt) {
            var i = _t;vi(), _t !== i && (ln.emit("indexChanged", Je()), Q && he(0), me());
          }ee(), "inner" === St && ln.emit("innerLoaded", Je()), on = !1, Un = Fn, en = _t;
        }
      }
    }function Ae(e, t) {
      if (!hn) if ("prev" === e) Ee(t, -1);else if ("next" === e) Ee(t, 1);else if (!on) {
        var n = _t % xt,
            i = 0;if (n < 0 && (n += xt), "first" === e) i = -n;else if ("last" === e) i = xt - Pt - n;else if ("number" != typeof e && (e = parseInt(e)), !isNaN(e)) {
          var a = e % xt;a < 0 && (a += xt), i = a - n;
        }_t += i, _t % xt != en % xt && xe(t);
      }
    }function Ee(e, t) {
      if (!on) {
        var n;if (!t) {
          e = e || R.event;for (var i = e.target || e.srcElement; i !== Hn && [Mn, Pn].indexOf(i) < 0;) {
            i = i.parentNode;
          }var a = [Mn, Pn].indexOf(i);a >= 0 && (n = !0, t = 0 === a ? -1 : 1);
        }if (Rt) {
          if (_t === tn && t === -1) return void Ae("last", e);if (_t === nn && 1 === t) return void Ae(0, e);
        }t && (_t += It * t, xe(n || e && "keydown" === e.type ? e : null));
      }
    }function we(e) {
      if (!on) {
        e = e || R.event;for (var t, n = e.target || e.srcElement; n !== Rn && !m(n, "data-nav");) {
          n = n.parentNode;
        }m(n, "data-nav") && (t = qn = [].indexOf.call(Bn, n), Ae(t, e));
      }
    }function Ce() {
      Xn = setInterval(function () {
        Ee(null, _n);
      }, $n), Vn = !0;
    }function Oe() {
      clearInterval(Xn), Vn = !1;
    }function Ne(e, t) {
      x(ni, { "data-action": e }), ni.innerHTML = ai[0] + e + ai[1] + t;
    }function De() {
      Ce(), ni && Ne("stop", ei[1]);
    }function ke() {
      Oe(), ni && Ne("start", ei[0]);
    }function Me() {
      Zn && !Vn && (De(), Kn = !1);
    }function Pe() {
      Vn && (ke(), Kn = !0);
    }function Ie() {
      Vn ? (ke(), Kn = !0) : (De(), Kn = !1);
    }function Se() {
      z.hidden ? Vn && (Oe(), Jn = !0) : Jn && (Ce(), Jn = !1);
    }function We() {
      Vn && (Oe(), Yn = !0);
    }function Le() {
      Yn && (Ce(), Yn = !1);
    }function He(e) {
      switch (e = e || R.event, e.keyCode) {case j.LEFT:
          Ee(e, -1);break;case j.RIGHT:
          Ee(e, 1);}
    }function Be(e) {
      switch (e = e || R.event, e.keyCode) {case j.LEFT:case j.UP:case j.PAGEUP:
          Mn.disabled || Ee(e, -1);break;case j.RIGHT:case j.DOWN:case j.PAGEDOWN:
          Pn.disabled || Ee(e, 1);break;case j.HOME:
          Ae(0, e);break;case j.END:
          Ae(xt - 1, e);}
    }function ze(e) {
      e.focus();
    }function Re(e) {
      function n(e) {
        return t.navContainer ? e : jn[e];
      }var i = z.activeElement;if (m(i, "data-nav")) {
        e = e || R.event;var a = e.keyCode,
            r = [].indexOf.call(Bn, i),
            o = jn.length,
            s = jn.indexOf(r);switch (t.navContainer && (o = xt, s = r), a) {case j.LEFT:case j.PAGEUP:
            s > 0 && ze(Bn[n(s - 1)]);break;case j.UP:case j.HOME:
            s > 0 && ze(Bn[n(0)]);break;case j.RIGHT:case j.PAGEDOWN:
            s < o - 1 && ze(Bn[n(s + 1)]);break;case j.DOWN:case j.END:
            s < o - 1 && ze(Bn[n(o - 1)]);break;case j.ENTER:case j.SPACE:
            qn = r, Ae(r, e);}
      }
    }function je() {
      ge(0, mt.scrollLeft()), en = _t;
    }function Ge(e) {
      return e.target || e.srcElement;
    }function qe(e) {
      return e.type.indexOf("touch") >= 0;
    }function Fe(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }function Ue(e) {
      if (!on) {
        e = e || R.event;var t;qe(e) ? (t = e.changedTouches[0], ln.emit("touchStart", Je(e))) : (t = e, ["img", "a"].indexOf(ce(Ge(t))) >= 0 && Fe(t), ln.emit("dragStart", Je(e))), ci = parseInt(t.clientX), ui = parseInt(t.clientY), ri = parseFloat(mt.style[Kt].replace(Jt, "").replace(Zt, ""));
      }
    }function Qe(e) {
      if (!on && null !== ci) {
        e = e || R.event;var n = qe(e) ? e.changedTouches[0] : e;if (oi = parseInt(n.clientX) - ci, si = parseInt(n.clientY) - ui, "?" === rn && (rn = f(u(si, oi), an) === t.axis), rn && (Math.abs(oi) > 5 || Math.abs(si) > 5)) {
          qe(e) ? ln.emit("touchMove", Je(e)) : (di || (di = !0), ln.emit("dragMove", Je(e))), kt || (kt = !0);var i = ri;if (vt) {
            if (Ht) i += oi, i += "px";else {
              var a = U ? oi * Pt * 100 / (ft * Xt) : 100 * oi / ft;i += a, i += "%";
            }
          } else i += si, i += "px";U && he(0), mt.style[Kt] = Jt + i + Zt;
        }
      }
    }function Xe(e) {
      if (an && (rn = "?"), !on) if (kt) {
        kt = !1, e = e || R.event;var t;qe(e) ? (t = e.changedTouches[0], ln.emit("touchEnd", Je(e))) : (t = e, ln.emit("dragEnd", Je(e))), oi = parseInt(t.clientX) - ci, si = parseInt(t.clientY) - ui, ci = ui = null;var n = Boolean(vt ? oi : si);if (vt) {
          var i = -oi * Pt / ft;i = oi > 0 ? Math.floor(i) : Math.ceil(i), _t += i;
        } else {
          var a = -(ri + si);if (a <= 0) _t = tn;else if (a >= Nt[Nt.length - 1]) _t = nn;else {
            var r = 0;do {
              r++, _t = si < 0 ? r + 1 : r;
            } while (r < Xt && a >= Nt[r + 1]);
          }
        }if (xe(e, n), di) {
          di = !1;var o = Ge(e);N(o, { click: function e(t) {
              Fe(t), D(o, { click: e });
            } });
        }
      } else ci = ui = null;
    }function Ve() {
      pt.style.height = Nt[_t + Pt] - Nt[_t] + "px";
    }function Ye() {
      jn = [];for (var e = _t % xt % Pt; e < xt;) {
        !jt && e + Pt > xt && (e = xt - Pt), jn.push(e), e += Pt;
      }(jt && jn.length * Pt < xt || !jt && jn[0] > 0) && jn.unshift(0);
    }function Ke() {
      zn && !Cn && (Ye(), jn !== Gn && (d(Bn, function (e, t) {
        jn.indexOf(t) < 0 ? A(e) : E(e);
      }), Gn = jn));
    }function Je(e) {
      return { container: mt, slideItems: gt, navContainer: Rn, navItems: Bn, controlsContainer: Hn, hasControls: En, prevButton: Mn, nextButton: Pn, items: Pt, slideBy: It, cloneCount: Qt, slideCount: xt, slideCountNew: Xt, index: _t, indexCached: en, navCurrentIndex: Fn, navCurrentIndexCached: Un, visibleNavIndexes: jn, visibleNavIndexesCached: Gn, sheet: qt, event: e || {} };
    }t = e({ container: ".slider", mode: "carousel", axis: "horizontal", items: 1, gutter: 0, edgePadding: 0, fixedWidth: !1, slideBy: 1, controls: !0, controlsText: ["prev", "next"], controlsContainer: !1, nav: !0, navContainer: !1, navAsThumbnails: !1, arrowKeys: !1, speed: 300, autoplay: !1, autoplayTimeout: 5e3, autoplayDirection: "forward", autoplayText: ["start", "stop"], autoplayHoverPause: !1, autoplayButton: !1, autoplayButtonOutput: !0, autoplayResetOnVisibility: !0, loop: !0, rewind: !1, autoHeight: !1, responsive: !1, lazyload: !1, touch: !0, mouseDrag: !1, swipeAngle: 15, nested: !1, freezable: !0, onInit: !1 }, t || {});for (var Ze = R.console && "function" == typeof R.console.warn, $e = ["container", "controlsContainer", "navContainer", "autoplayButton"], _e = $e.length; _e--;) {
      var et = $e[_e];if ("string" == typeof t[et]) {
        var tt = z.querySelector(t[et]);if (!tt || !tt.nodeName) return void (Ze && console.warn("Can't find", t[et]));t[et] = tt;
      }
    }if (t.container.children && t.container.children.length < 1) return void (Ze && console.warn("No slides found in", t.container));if (t.responsive) {
      var nt = {},
          it = t.responsive;for (var at in it) {
        var rt = it[at];nt[at] = "number" == typeof rt ? { items: rt } : rt;
      }t.responsive = nt, nt = null, 0 in t.responsive && (t = e(t, t.responsive[0]), delete t.responsive[0]);
    }var ot = "carousel" === t.mode;if (!ot) {
      t.axis = "horizontal", t.rewind = !1, t.loop = !0, t.edgePadding = !1;var st = "tns-fadeIn",
          lt = "tns-fadeOut",
          ct = !1,
          ut = t.animateNormal || "tns-normal";K && J && (st = t.animateIn || st, lt = t.animateOut || lt, ct = t.animateDelay || ct);
    }var ft,
        dt,
        vt = "horizontal" === t.axis,
        ht = z.createElement("div"),
        pt = z.createElement("div"),
        mt = t.container,
        yt = mt.parentNode,
        gt = mt.children,
        xt = gt.length,
        bt = t.responsive,
        Tt = [],
        At = !1,
        Et = 0,
        wt = n();if (t.fixedWidth) var Ct = a(yt);if (bt) {
      At = Object.keys(bt).map(function (e) {
        return parseInt(e);
      }).sort(function (e, t) {
        return e - t;
      }), At.forEach(function (e) {
        Tt = Tt.concat(Object.keys(bt[e]));
      });var Ot = [];Tt.forEach(function (e) {
        Ot.indexOf(e) < 0 && Ot.push(e);
      }), Tt = Ot, L();
    }var Nt,
        Dt,
        kt,
        Mt,
        Pt = o("items"),
        It = "page" === o("slideBy") ? Pt : o("slideBy"),
        St = t.nested,
        Wt = o("gutter"),
        Lt = o("edgePadding"),
        Ht = o("fixedWidth"),
        Bt = o("arrowKeys"),
        zt = o("speed"),
        Rt = t.rewind,
        jt = !Rt && t.loop,
        Gt = o("autoHeight"),
        qt = s(),
        Ft = t.lazyload,
        Ut = [],
        Qt = jt ? 2 * xt : 0,
        Xt = ot ? xt + 2 * Qt : xt + Qt,
        Vt = !(!Ht || jt || Lt),
        Yt = !ot || !jt,
        Kt = vt ? "left" : "top",
        Jt = "",
        Zt = "",
        $t = o("startIndex"),
        _t = $t ? function (e) {
      return e %= xt, e < 0 && (e += xt), e = Math.min(e, Xt - Pt);
    }($t) : ot ? Qt : 0,
        en = _t,
        tn = 0,
        nn = Xt - Pt,
        an = t.swipeAngle,
        rn = !an || "?",
        on = !1,
        sn = t.onInit,
        ln = new k(),
        cn = mt.id,
        un = " tns-slider tns-" + t.mode,
        fn = mt.id || i(),
        dn = o("disable"),
        vn = t.freezable,
        hn = !!dn || !!vn && xt <= Pt,
        pn = "inner" === St ? " !important" : "",
        mn = { click: Ee, keydown: Be },
        yn = { click: we, keydown: Re },
        gn = { mouseover: We, mouseout: Le },
        xn = { visibilitychange: Se },
        bn = { keydown: He },
        Tn = { touchstart: Ue, touchmove: Qe, touchend: Xe, touchcancel: Xe },
        An = { mousedown: Ue, mousemove: Qe, mouseup: Xe, mouseleave: Xe },
        En = r("controls"),
        wn = r("nav"),
        Cn = t.navAsThumbnails,
        On = r("autoplay"),
        Nn = r("touch"),
        Dn = r("mouseDrag"),
        kn = "tns-slide-active";if (En) var Mn,
        Pn,
        In,
        Sn,
        Wn = o("controls"),
        Ln = o("controlsText"),
        Hn = t.controlsContainer;if (wn) var Bn,
        zn = o("nav"),
        Rn = t.navContainer,
        jn = [],
        Gn = jn,
        qn = -1,
        Fn = _t % xt,
        Un = Fn,
        Qn = "tns-nav-active";if (On) var Xn,
        Vn,
        Yn,
        Kn,
        Jn,
        Zn = o("autoplay"),
        $n = o("autoplayTimeout"),
        _n = "forward" === t.autoplayDirection ? 1 : -1,
        ei = o("autoplayText"),
        ti = o("autoplayHoverPause"),
        ni = t.autoplayButton,
        ii = o("autoplayResetOnVisibility"),
        ai = ["<span class='tns-visually-hidden'>", " animation</span>"];if (Nn) var ri,
        oi,
        si,
        li = o("touch"),
        ci = null,
        ui = null;if (Dn) var fi = o("mouseDrag"),
        di = !1;hn && (Wn = zn = li = fi = Bt = Zn = ti = ii = !1), U && (Kt = U, Jt = "translate", Jt += vt ? "X(" : "Y(", Zt = ")"), function () {
      ht.appendChild(pt), yt.insertBefore(ht, mt), pt.appendChild(mt), ft = a(pt);var e = "tns-outer",
          n = "tns-inner",
          i = r("gutter");if (ot ? vt && (r("edgePadding") || i && !t.fixedWidth) ? e += " tns-ovh" : n += " tns-ovh" : i && (e += " tns-ovh"), ht.className = e, pt.className = n, pt.id = fn + "-iw", Gt && (pt.className += " tns-ah", pt.style[Q] = zt / 1e3 + "s"), "" === mt.id && (mt.id = fn), un += q ? " tns-subpixel" : " tns-no-subpixel", un += G ? " tns-calc" : " tns-no-calc", ot && (un += " tns-" + t.axis), mt.className += un, ot && K) {
        var s = {};s[K] = Te, N(mt, s);
      }e = n = null;for (var u = 0; u < xt; u++) {
        var f = gt[u];f.id || (f.id = fn + "-item" + u), h(f, "tns-item"), !ot && ut && h(f, ut), x(f, { "aria-hidden": "true", tabindex: "-1" });
      }if (jt || Lt) {
        for (var v = z.createDocumentFragment(), m = z.createDocumentFragment(), y = Qt; y--;) {
          var T = y % xt,
              E = gt[T].cloneNode(!0);if (b(E, "id"), m.insertBefore(E, m.firstChild), ot) {
            var w = gt[xt - 1 - T].cloneNode(!0);b(w, "id"), v.appendChild(w);
          }
        }mt.insertBefore(v, mt.firstChild), mt.appendChild(m), gt = mt.children;
      }for (var D = _t, k = _t + Math.min(xt, Pt); D < k; D++) {
        var f = gt[D];x(f, { "aria-hidden": "false" }), b(f, ["tabindex"]), h(f, kn), ot || (f.style.left = 100 * (D - _t) / Pt + "%", h(f, st), p(f, ut));
      }if (ot && vt && (q ? (l(qt, "#" + fn + " > .tns-item", "font-size:" + R.getComputedStyle(gt[0]).fontSize + ";", c(qt)), l(qt, "#" + fn, "font-size:0;", c(qt))) : d(gt, function (e, t) {
        e.style.marginLeft = g(t);
      })), F) {
        var M = C(t.edgePadding, t.gutter, t.fixedWidth);l(qt, "#" + fn + "-iw", M, c(qt)), ot && vt && (M = "width:" + O(t.fixedWidth, t.gutter, t.items), l(qt, "#" + fn, M, c(qt))), (vt || t.gutter) && (M = P(t.fixedWidth, t.gutter, t.items) + I(t.gutter), l(qt, "#" + fn + " > .tns-item", M, c(qt)));
      } else if (pt.style.cssText = C(Lt, Wt, Ht), ot && vt && (mt.style.width = O(Ht, Wt, Pt)), vt || Wt) {
        var M = P(Ht, Wt, Pt) + I(Wt);l(qt, "#" + fn + " > .tns-item", M, c(qt));
      }if (vt || dn || (ae(), Ve()), bt && F && At.forEach(function (e) {
        var t = bt[e],
            n = "",
            i = "",
            a = "",
            s = "",
            l = o("items", e),
            c = o("fixedWidth", e),
            u = o("edgePadding", e),
            f = o("gutter", e);("edgePadding" in t || "gutter" in t) && (i = "#" + fn + "-iw{" + C(u, f, c) + "}"), ot && vt && ("fixedWidth" in t || "gutter" in t || "items" in t) && (a = "#" + fn + "{width:" + O(c, f, l) + "}"), ("fixedWidth" in t || r("fixedWidth") && "gutter" in t || !ot && "items" in t) && (s += P(c, f, l)), "gutter" in t && (s += I(f)), s.length > 0 && (s = "#" + fn + " > .tns-item{" + s + "}"), n = i + a + s, n.length > 0 && qt.insertRule("@media (min-width: " + e / 16 + "em) {" + n + "}", qt.cssRules.length);
      }), ot && !dn && me(), navigator.msMaxTouchPoints && (h(ht, "ms-touch"), N(ht, { scroll: je }), re()), wn) {
        var L = ot ? Qt : 0;if (Rn) x(Rn, { "aria-label": "Carousel Pagination" }), Bn = Rn.children, d(Bn, function (e, t) {
          x(e, { "data-nav": t, tabindex: "-1", "aria-selected": "false", "aria-controls": gt[L + t].id });
        });else {
          for (var j = "", U = Cn ? "" : " hidden", D = 0; D < xt; D++) {
            j += '<button data-nav="' + D + '" tabindex="-1" aria-selected="false" aria-controls="' + gt[L + D].id + U + '" type="button"></button>';
          }j = '<div class="tns-nav" aria-label="Carousel Pagination">' + j + "</div>", ht.insertAdjacentHTML("afterbegin", j), Rn = ht.querySelector(".tns-nav"), Bn = Rn.children;
        }if (Ke(), Q) {
          var X = Q.substring(0, Q.length - 18).toLowerCase(),
              M = "transition: all " + zt / 1e3 + "s";X && (M = "-" + X + "-" + M), l(qt, "[aria-controls^=" + fn + "-item]", M, c(qt));
        }x(Bn[Fn], { tabindex: "0", "aria-selected": "true" }), h(Bn[Fn], Qn), N(Rn, yn), zn || A(Rn);
      }if (On) {
        var V = Zn ? "stop" : "start";ni ? x(ni, { "data-action": V }) : t.autoplayButtonOutput && (pt.insertAdjacentHTML("beforebegin", '<button data-action="' + V + '" type="button">' + ai[0] + V + ai[1] + ei[0] + "</button>"), ni = ht.querySelector("[data-action]")), ni && N(ni, { click: Ie }), Zn ? (De(), ti && N(mt, gn), ii && N(mt, xn)) : ni && A(ni);
      }En && (Hn ? (Mn = Hn.children[0], Pn = Hn.children[1], x(Hn, { "aria-label": "Carousel Navigation", tabindex: "0" }), x(Mn, { "data-controls": "prev" }), x(Pn, { "data-controls": "next" }), x(Hn.children, { "aria-controls": fn, tabindex: "-1" })) : (ht.insertAdjacentHTML("afterbegin", '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + fn + '" type="button">' + Ln[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + fn + '" type="button">' + Ln[1] + "</button></div>"), Hn = ht.querySelector(".tns-controls"), Mn = Hn.children[0], Pn = Hn.children[1]), In = ue(Mn), Sn = ue(Pn), ve(), N(Hn, mn), Wn || A(Hn)), li && N(mt, Tn), fi && N(mt, An), Bt && N(z, bn), "inner" === St ? ln.on("outerResized", function () {
        W(), ln.emit("innerLoaded", Je());
      }) : (N(R, { resize: S }), "outer" === St && ln.on("innerLoaded", ee)), _(), Gt ? ee() : ie(), H(), B(), ln.on("indexChanged", ne), "function" == typeof sn && sn(Je()), "inner" === St && ln.emit("innerLoaded", Je()), dn && $(!0), dt = !0;
    }();var vi = function () {
      return jt ? function () {
        var e = tn,
            t = nn;if (ot) if (e += It, t -= It, Lt) e += 1, t -= 1;else if (Ht) {
          var n = Wt ? Wt : 0;Ct % (Ht + n) > n && (t -= 1);
        }if (_t > t) for (; _t >= e + xt;) {
          _t -= xt;
        } else if (_t < e) for (; _t <= t - xt;) {
          _t += xt;
        }
      } : function () {
        _t = Math.max(tn, Math.min(nn, _t));
      };
    }(),
        hi = function () {
      return ot ? function (e, t) {
        t || (t = pe()), Vt && _t === nn && (t = -((Ht + Wt) * Xt - ft) + "px"), Q || !e ? (me(t), e && w(mt) || Te()) : M(mt, Kt, Jt, Zt, t, zt, Te), vt || Ve();
      } : function (e) {
        Ut = [];var t = {};t[K] = t[J] = Te, D(gt[en], t), N(gt[_t], t), ye(en, st, lt, !0), ye(_t, ut, st), K && J && e || Te();
      };
    }();return { getInfo: Je, events: ln, goTo: Ae, play: Me, pause: Pe, isOn: dt, updateSliderHeight: ie, rebuild: function rebuild() {
        return Z(t);
      }, destroy: function destroy() {
        if (D(R, { resize: S }), D(z, bn), qt.disabled = !0, jt) for (var e = Qt; e--;) {
          ot && gt[0].remove(), gt[gt.length - 1].remove();
        }var n = ["tns-item", kn];ot || (n = n.concat("tns-normal", st));for (var i = xt; i--;) {
          var a = gt[i];a.id.indexOf(fn + "-item") >= 0 && (a.id = ""), n.forEach(function (e) {
            p(a, e);
          });
        }if (b(gt, ["style", "aria-hidden", "tabindex"]), gt = fn = xt = Xt = Qt = null, Wn && (D(Hn, mn), t.controlsContainer && (b(Hn, ["aria-label", "tabindex"]), b(Hn.children, ["aria-controls", "aria-disabled", "tabindex"])), Hn = Mn = Pn = null), zn && (D(Rn, yn), t.navContainer && (b(Rn, ["aria-label"]), b(Bn, ["aria-selected", "aria-controls", "tabindex"])), Rn = Bn = null), Zn && (clearInterval(Xn), ni && D(ni, { click: Ie }), D(mt, gn), D(mt, xn), t.autoplayButton && b(ni, ["data-action"])), mt.id = cn || "", mt.className = mt.className.replace(un, ""), T(mt), ot && K) {
          var r = {};r[K] = Te, D(mt, r);
        }D(mt, Tn), D(mt, An), yt.insertBefore(mt, ht), ht.remove(), ht = pt = mt = _t = en = Pt = It = Fn = Un = En = jn = Gn = this.getInfo = this.events = this.goTo = this.play = this.pause = this.destroy = null, this.isOn = dt = !1;
      } };
  };return Z;
}();
window.tns = tns;
},{}],599:[function(require,module,exports) {

},{}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePAGE18 = exports.changePAGE13 = exports.changePAGE11 = exports.changePAGE1 = exports.changePAGE2 = exports.getTpl = undefined;

var _config = require('./config.yaml');

var _config2 = _interopRequireDefault(_config);

var _anima = require('../lib/anima.min');

var _anima2 = _interopRequireDefault(_anima);

require('../lib/tiny.slider');

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
    for (var numKey in scrollnums) {
      var _ref3 = scrollnums[numKey] || {},
          type = _ref3.type,
          _ref3$key = _ref3.key,
          key = _ref3$key === undefined ? numKey : _ref3$key,
          val = _ref3.val,
          _data = _ref3.data,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === undefined ? 1000 : _ref3$duration,
          _ref3$time = _ref3.time,
          time = _ref3$time === undefined ? 0 : _ref3$time,
          height = _ref3.height;

      if (!type || !val) return html;
      html += '<div class="num-wrapper num-wrapper-' + key + ' css-animate animated hide"\n        data-animate="fadeIn" data-time="' + time + '" data-val="' + val + '">';
      var num = '<ul class="num-set-' + type + ' nums-' + key + '">';
      for (var i = 0; i < String(val).length; i++) {
        num += '<li></li>';
      }
      num += '</ul>';
      html += num + '\n</div>';
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
  var $page = document.querySelector('.page-2');

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
    $page.appendChild($wrapper);
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

var changePAGE1 = exports.changePAGE1 = function changePAGE1(type) {
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

var page13Slider = null;
var changePAGE13 = exports.changePAGE13 = function changePAGE13(type) {
  var $page = document.querySelector('.page-13');
  var $ertong = $page.querySelector('.er-tong');
  var $left = $page.querySelector('.w-left-arrow');
  var $right = $page.querySelector('.w-right-arrow');
  var $outer = $page.querySelector('.tns-outer');

  if ($outer) {
    $outer.style.cssText = 'opacity:0;';
    $ertong.style.cssText = 'opacity:1;';
    page13Slider && page13Slider.goTo('first');
  } else {
    var $wrapper = document.createElement('div');
    var html = '<div class="tupian-wrapper">';
    var tp = '';
    for (var i = 0; i < 5; i++) {
      tp += '<div class="tp tp-' + (i + 1) + '" ></div>';
    }
    html += tp + '\n</div>';
    $wrapper.innerHTML = html;
    $page.appendChild($wrapper);

    page13Slider = window.tns({
      container: '.tupian-wrapper',
      items: 1,
      startIndex: 0,
      autoHeight: true
    });

    $left.onclick = function () {
      document.querySelector('.tns-controls [data-controls="prev"]').click();
    };
    $right.onclick = function () {
      document.querySelector('.tns-controls [data-controls="next"]').click();
    };
  }
  if (type == 'before') return;

  var timer = setTimeout(function () {
    $outer = $page.querySelector('.tns-outer');
    if (!$outer) return;
    $outer.style.cssText = 'opacity:1;';
    $ertong.style.cssText = 'display:none;';
    clearTimeout(timer);
    timer = null;
  }, _config2.default.page13.items['er-tong'].data.time + 1400);
};

var changePAGE18 = exports.changePAGE18 = function changePAGE18(type) {
  var $page = document.querySelector('.page-18');

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
    $page.appendChild($wrapper);
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
},{"./config.yaml":14,"../lib/anima.min":600,"../lib/tiny.slider":601,"dns":599}],4:[function(require,module,exports) {
'use strict';

require('../lib/normalize.css');

require('../lib/tiny.sider.css');

require('../lib/animate.min.css');

require('../css/index.less');

require('../lib/flexible');

require('../lib/fullpage');

var _config = require('./config.yaml');

var _config2 = _interopRequireDefault(_config);

var _tpl = require('./tpl');

var Tpls = _interopRequireWildcard(_tpl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// xunhuan.d16e8404.html
var animateCss = function animateCss(dom, key, val) {
  if (!val) return;

  if (key === 'timing') {
    key = 'timing-function';
  } else if (key === 'count') {
    key = 'iteration-count	';
  }
  dom.style.cssText += 'animation-' + key + ': ' + val + ';-moz-animation-' + key + ': ' + val + ';-webkit-animation-' + key + ': ' + val + ';';
};

var scrollerNum = function scrollerNum(tplkey, type) {
  var _ref = _config2.default[tplkey] || {},
      scrollnums = _ref.scrollnums;

  if (!scrollnums) return;
  var $nums = document.querySelectorAll('.page.cur .num-wrapper li');
  if ($nums) {
    forEach.call($nums, function ($num) {
      $num.class = '';
      $num.style = '';
    });
  }
  if (type == 'before') return;

  var _loop = function _loop(numKey) {
    var _ref2 = scrollnums[numKey] || {},
        _ref2$key = _ref2.key,
        key = _ref2$key === undefined ? numKey : _ref2$key,
        val = _ref2.val,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === undefined ? 1000 : _ref2$duration,
        _ref2$time = _ref2.time,
        time = _ref2$time === undefined ? 0 : _ref2$time;

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
    _loop(numKey);
  }
};

var fullpageConfig = {
  beforeChange: function beforeChange(e) {
    var cur = e.cur;
    var tplkey = 'page' + (cur + 1);
    var callback = Tpls['change' + tplkey.toUpperCase()];
    scrollerNum(tplkey, 'before');
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
      scrollerNum(tplkey, 'after');
      return 1;
    }

    // 加载页面
    $page.innerHTML = Tpls.getTpl(tplkey);
    callback && callback(tplkey);
    scrollerNum(tplkey, 'after');
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
},{"../lib/normalize.css":6,"../lib/tiny.sider.css":8,"../lib/animate.min.css":10,"../css/index.less":12,"../lib/flexible":16,"../lib/fullpage":18,"./config.yaml":14,"./tpl":20}],603:[function(require,module,exports) {

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49970' + '/');
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
},{}]},{},[603,4])
//# sourceMappingURL=/js.c662a0c0.map