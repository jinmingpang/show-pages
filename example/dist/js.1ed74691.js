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
})({16:[function(require,module,exports) {
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
},{}],13:[function(require,module,exports) {
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
},{"./bundle-url":16}],10:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":13}],15:[function(require,module,exports) {
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
},{"constants":15}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 10000;
},{}],6:[function(require,module,exports) {
module.exports = [{background: {color: "red"}, items: {"x-1": {data: {animate: "flash", dration: "4s", count: 5, show: 500, delay: 1000}}}}];
},{}],18:[function(require,module,exports) {
module.exports = {title: "hello wrold 3456", keywords: "show pages", description: "hello show pages", designWidth: 750, bgm: "url", startIndex: 2};
},{}],4:[function(require,module,exports) {
'use strict';

require('../css/index.styl');

require('../lib/fullpage');

var _index = require('../../example/js/index.js');

var _index2 = _interopRequireDefault(_index);

var _page = require('../../example/page.yaml');

var _page2 = _interopRequireDefault(_page);

var _app = require('../../example/app.yaml');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('pages----->', _index2.default, _page2.default, _app2.default);

var init = function init() {
  // alert(1)
};

init();
},{"../css/index.styl":10,"../lib/fullpage":14,"../../example/js/index.js":8,"../../example/page.yaml":6,"../../example/app.yaml":18}],17:[function(require,module,exports) {

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61140' + '/');
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
},{}]},{},[17,4])
//# sourceMappingURL=/js.1ed74691.map