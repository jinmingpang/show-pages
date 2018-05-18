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
})({6:[function(require,module,exports) {
module.exports = [{background: {color: "red"}, doms: {"bei-word": {image: true, postion: ["center", "middle"], cssanimate: {key: "bounceInUp", duration: "4s", showtime: 500, delay: 1000}}, "w-100": {image: true, postion: [100, 100], cssanimate: {key: "slideInLeft", duration: "4s", showtime: 2500, delay: 1000}}}}, {background: {color: "yellow"}, items: {"lun-qi-jian-dian": {image: true, postion: [100, 100], cssanimate: {animate: "flash", dration: "4s", count: 5, show: 500, delay: 1000}}}}];
},{}],8:[function(require,module,exports) {
module.exports = {
  "title": "hello wrold 3456",
  "keywords": "show pages",
  "description": "hello show pages",
  "designWidth": 1080,
  "bgm": "url",
  "shortcutIcon": "http://g.alicdn.com/mui/global/1.2.35/file/favicon.ico",
  "appleTouchIcon": "http://gw.alicdn.com/tfs/TB1m9hGhXOWBuNjy0FiXXXFxVXa-152-152.jpg",
  "startIndex": 1
}
;
},{}],14:[function(require,module,exports) {
/*!
 * zepto.fullpage.js v0.5.0 (https://github.com/yanhaijing/zepto.fullpage)
 * API https://github.com/yanhaijing/zepto.fullpage/blob/master/doc/api.md
 * Copyright 2014 yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/zepto.fullpage/blob/master/LICENSE)
 */

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
})(window);
},{}],15:[function(require,module,exports) {
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
},{}],26:[function(require,module,exports) {
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
},{}],21:[function(require,module,exports) {
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
},{"./bundle-url":26}],10:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../../example/images/bei-word.png":[["bei-word.c9271d5c.png",22],22],"./../../example/images/w-100.png":[["w-100.c47da502.png",23],23],"_css_loader":21}],25:[function(require,module,exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! art-template@4.12.2 for browser | https://github.com/aui/art-template */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.template = t() : e.template = t();
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 6);
  }([function (e, t, n) {
    (function (t) {
      e.exports = !1;try {
        e.exports = "[object process]" === Object.prototype.toString.call(t.process);
      } catch (n) {}
    }).call(t, n(4));
  }, function (e, t, n) {
    "use strict";
    var r = n(8),
        i = n(3),
        o = n(23),
        s = function s(e, t) {
      t.onerror(e, t);var n = function n() {
        return "{Template Error}";
      };return n.mappings = [], n.sourcesContent = [], n;
    },
        a = function c(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};"string" != typeof e ? t = e : t.source = e, t = i.$extend(t), e = t.source, !0 === t.debug && (t.cache = !1, t.minimize = !1, t.compileDebug = !0), t.compileDebug && (t.minimize = !1), t.filename && (t.filename = t.resolveFilename(t.filename, t));var n = t.filename,
          a = t.cache,
          u = t.caches;if (a && n) {
        var p = u.get(n);if (p) return p;
      }if (!e) try {
        e = t.loader(n, t), t.source = e;
      } catch (d) {
        var l = new o({ name: "CompileError", path: n, message: "template not found: " + d.message, stack: d.stack });if (t.bail) throw l;return s(l, t);
      }var f = void 0,
          h = new r(t);try {
        f = h.build();
      } catch (l) {
        if (l = new o(l), t.bail) throw l;return s(l, t);
      }var m = function m(e, n) {
        try {
          return f(e, n);
        } catch (l) {
          if (!t.compileDebug) return t.cache = !1, t.compileDebug = !0, c(t)(e, n);if (l = new o(l), t.bail) throw l;return s(l, t)();
        }
      };return m.mappings = f.mappings, m.sourcesContent = f.sourcesContent, m.toString = function () {
        return f.toString();
      }, a && n && u.set(n, m), m;
    };a.Compiler = r, e.exports = a;
  }, function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
      var t = { type: "invalid", value: e[0] };return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t;
    };
  }, function (e, t, n) {
    "use strict";
    function r() {
      this.$extend = function (e) {
        return e = e || {}, s(e, e instanceof r ? e : this);
      };
    }var i = n(0),
        o = n(12),
        s = n(13),
        a = n(14),
        c = n(15),
        u = n(16),
        p = n(17),
        l = n(18),
        f = n(19),
        h = n(20),
        m = n(22),
        d = { source: null, filename: null, rules: [f, l], escape: !0, debug: !!i && "production" !== "development", bail: !0, cache: !0, minimize: !0, compileDebug: !1, resolveFilename: m, include: a, htmlMinifier: h, htmlMinifierOptions: { collapseWhitespace: !0, minifyCSS: !0, minifyJS: !0, ignoreCustomFragments: [] }, onerror: c, loader: p, caches: u, root: "/", extname: ".art", ignore: [], imports: o };r.prototype = d, e.exports = new r();
  }, function (e, t) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (r) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }e.exports = n;
  }, function (e, t) {}, function (e, t, n) {
    "use strict";
    var r = n(7),
        i = n(1),
        o = n(24),
        s = function s(e, t) {
      return t instanceof Object ? r({ filename: e }, t) : i({ filename: e, source: t });
    };s.render = r, s.compile = i, s.defaults = o, e.exports = s;
  }, function (e, t, n) {
    "use strict";
    var r = n(1),
        i = function i(e, t, n) {
      return r(e, n)(t);
    };e.exports = i;
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var i = n(9),
        o = n(11),
        s = "$data",
        a = "$imports",
        c = "print",
        u = "include",
        p = "extend",
        l = "block",
        f = "$$out",
        h = "$$line",
        m = "$$blocks",
        d = "$$slice",
        v = "$$from",
        g = "$$options",
        y = function y(e, t) {
      return Object.hasOwnProperty.call(e, t);
    },
        b = JSON.stringify,
        x = function () {
      function e(t) {
        var n,
            i,
            y = this;r(this, e);var b = t.source,
            x = t.minimize,
            w = t.htmlMinifier;if (this.options = t, this.stacks = [], this.context = [], this.scripts = [], this.CONTEXT_MAP = {}, this.ignore = [s, a, g].concat(t.ignore), this.internal = (n = {}, n[f] = "''", n[h] = "[0,0]", n[m] = "arguments[1]||{}", n[v] = "null", n[c] = "function(){var s=''.concat.apply('',arguments);" + f + "+=s;return s}", n[u] = "function(src,data){var s=" + g + ".include(src,data||" + s + ",arguments[2]||" + m + "," + g + ");" + f + "+=s;return s}", n[p] = "function(from){" + v + "=from}", n[d] = "function(c,p,s){p=" + f + ";" + f + "='';c();s=" + f + ";" + f + "=p+s;return s}", n[l] = "function(){var a=arguments,s;if(typeof a[0]==='function'){return " + d + "(a[0])}else if(" + v + "){if(!" + m + "[a[0]]){" + m + "[a[0]]=" + d + "(a[1])}else{" + f + "+=" + m + "[a[0]]}}else{s=" + m + "[a[0]];if(typeof s==='string'){" + f + "+=s}else{s=" + d + "(a[1])}return s}}", n), this.dependencies = (i = {}, i[c] = [f], i[u] = [f, g, s, m], i[p] = [v, u], i[l] = [d, v, f, m], i), this.importContext(f), t.compileDebug && this.importContext(h), x) try {
          b = w(b, t);
        } catch (E) {}this.source = b, this.getTplTokens(b, t.rules, this).forEach(function (e) {
          e.type === o.TYPE_STRING ? y.parseString(e) : y.parseExpression(e);
        });
      }return e.prototype.getTplTokens = function () {
        return o.apply(undefined, arguments);
      }, e.prototype.getEsTokens = function (e) {
        return i(e);
      }, e.prototype.getVariables = function (e) {
        var t = !1;return e.filter(function (e) {
          return "whitespace" !== e.type && "comment" !== e.type;
        }).filter(function (e) {
          return "name" === e.type && !t || (t = "punctuator" === e.type && "." === e.value, !1);
        }).map(function (e) {
          return e.value;
        });
      }, e.prototype.importContext = function (e) {
        var t = this,
            n = "",
            r = this.internal,
            i = this.dependencies,
            o = this.ignore,
            c = this.context,
            u = this.options,
            p = u.imports,
            l = this.CONTEXT_MAP;y(l, e) || -1 !== o.indexOf(e) || (y(r, e) ? (n = r[e], y(i, e) && i[e].forEach(function (e) {
          return t.importContext(e);
        })) : n = "$escape" === e || "$each" === e || y(p, e) ? a + "." + e : s + "." + e, l[e] = n, c.push({ name: e, value: n }));
      }, e.prototype.parseString = function (e) {
        var t = e.value;if (t) {
          var n = f + "+=" + b(t);this.scripts.push({ source: t, tplToken: e, code: n });
        }
      }, e.prototype.parseExpression = function (e) {
        var t = this,
            n = e.value,
            r = e.script,
            i = r.output,
            s = this.options.escape,
            a = r.code;i && (a = !1 === s || i === o.TYPE_RAW ? f + "+=" + r.code : f + "+=$escape(" + r.code + ")");var c = this.getEsTokens(a);this.getVariables(c).forEach(function (e) {
          return t.importContext(e);
        }), this.scripts.push({ source: n, tplToken: e, code: a });
      }, e.prototype.checkExpression = function (e) {
        for (var t = [[/^\s*}[\w\W]*?{?[\s;]*$/, ""], [/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/, "$1})"], [/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/, "$1}"]], n = 0; n < t.length;) {
          if (t[n][0].test(e)) {
            var r;e = (r = e).replace.apply(r, t[n]);break;
          }n++;
        }try {
          return new Function(e), !0;
        } catch (i) {
          return !1;
        }
      }, e.prototype.build = function () {
        var e = this.options,
            t = this.context,
            n = this.scripts,
            r = this.stacks,
            i = this.source,
            c = e.filename,
            l = e.imports,
            d = [],
            x = y(this.CONTEXT_MAP, p),
            w = 0,
            E = function E(e, t) {
          var n = t.line,
              i = t.start,
              o = { generated: { line: r.length + w + 1, column: 1 }, original: { line: n + 1, column: i + 1 } };return w += e.split(/\n/).length - 1, o;
        },
            k = function k(e) {
          return e.replace(/^[\t ]+|[\t ]$/g, "");
        };r.push("function(" + s + "){"), r.push("'use strict'"), r.push(s + "=" + s + "||{}"), r.push("var " + t.map(function (e) {
          return e.name + "=" + e.value;
        }).join(",")), e.compileDebug ? (r.push("try{"), n.forEach(function (e) {
          e.tplToken.type === o.TYPE_EXPRESSION && r.push(h + "=[" + [e.tplToken.line, e.tplToken.start].join(",") + "]"), d.push(E(e.code, e.tplToken)), r.push(k(e.code));
        }), r.push("}catch(error){"), r.push("throw {" + ["name:'RuntimeError'", "path:" + b(c), "message:error.message", "line:" + h + "[0]+1", "column:" + h + "[1]+1", "source:" + b(i), "stack:error.stack"].join(",") + "}"), r.push("}")) : n.forEach(function (e) {
          d.push(E(e.code, e.tplToken)), r.push(k(e.code));
        }), x && (r.push(f + "=''"), r.push(u + "(" + v + "," + s + "," + m + ")")), r.push("return " + f), r.push("}");var T = r.join("\n");try {
          var O = new Function(a, g, "return " + T)(l, e);return O.mappings = d, O.sourcesContent = [i], O;
        } catch (F) {
          for (var $ = 0, j = 0, S = 0, _ = void 0; $ < n.length;) {
            var C = n[$];if (!this.checkExpression(C.code)) {
              j = C.tplToken.line, S = C.tplToken.start, _ = C.code;break;
            }$++;
          }throw { name: "CompileError", path: c, message: F.message, line: j + 1, column: S + 1, source: i, generated: _, stack: F.stack };
        }
      }, e;
    }();x.CONSTS = { DATA: s, IMPORTS: a, PRINT: c, INCLUDE: u, EXTEND: p, BLOCK: l, OPTIONS: g, OUT: f, LINE: h, BLOCKS: m, SLICE: d, FROM: v, ESCAPE: "$escape", EACH: "$each" }, e.exports = x;
  }, function (e, t, n) {
    "use strict";
    var r = n(10),
        i = n(2)["default"],
        o = n(2).matchToToken,
        s = function s(e) {
      return e.match(i).map(function (e) {
        return i.lastIndex = 0, o(i.exec(e));
      }).map(function (e) {
        return "name" === e.type && r(e.value) && (e.type = "keyword"), e;
      });
    };e.exports = s;
  }, function (e, t, n) {
    "use strict";
    var r = { "abstract": !0, await: !0, "boolean": !0, "break": !0, "byte": !0, "case": !0, "catch": !0, "char": !0, "class": !0, "const": !0, "continue": !0, "debugger": !0, "default": !0, "delete": !0, "do": !0, "double": !0, "else": !0, "enum": !0, "export": !0, "extends": !0, "false": !0, "final": !0, "finally": !0, "float": !0, "for": !0, "function": !0, "goto": !0, "if": !0, "implements": !0, "import": !0, "in": !0, "instanceof": !0, "int": !0, "interface": !0, "let": !0, "long": !0, "native": !0, "new": !0, "null": !0, "package": !0, "private": !0, "protected": !0, "public": !0, "return": !0, "short": !0, "static": !0, "super": !0, "switch": !0, "synchronized": !0, "this": !0, "throw": !0, "transient": !0, "true": !0, "try": !0, "typeof": !0, "var": !0, "void": !0, "volatile": !0, "while": !0, "with": !0, "yield": !0 };e.exports = function (e) {
      return r.hasOwnProperty(e);
    };
  }, function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      var i = new String(e);return i.line = t, i.start = n, i.end = r, i;
    }var i = function i(e, t) {
      for (var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, i = [{ type: "string", value: e, line: 0, start: 0, end: e.length }], o = 0; o < t.length; o++) {
        !function (e) {
          for (var t = e.test.ignoreCase ? "ig" : "g", o = e.test.source + "|^$|[\\w\\W]", s = new RegExp(o, t), a = 0; a < i.length; a++) {
            if ("string" === i[a].type) {
              for (var c = i[a].line, u = i[a].start, p = i[a].end, l = i[a].value.match(s), f = [], h = 0; h < l.length; h++) {
                var m = l[h];e.test.lastIndex = 0;var d = e.test.exec(m),
                    v = d ? "expression" : "string",
                    g = f[f.length - 1],
                    y = g || i[a],
                    b = y.value;u = y.line === c ? g ? g.end : u : b.length - b.lastIndexOf("\n") - 1, p = u + m.length;var x = { type: v, value: m, line: c, start: u, end: p };if ("string" === v) g && "string" === g.type ? (g.value += m, g.end += m.length) : f.push(x);else {
                  d[0] = new r(d[0], c, u, p);var w = e.use.apply(n, d);x.script = w, f.push(x);
                }c += m.split(/\n/).length - 1;
              }i.splice.apply(i, [a, 1].concat(f)), a += f.length - 1;
            }
          }
        }(t[o]);
      }return i;
    };i.TYPE_STRING = "string", i.TYPE_EXPRESSION = "expression", i.TYPE_RAW = "raw", i.TYPE_ESCAPE = "escape", e.exports = i;
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      function r(e) {
        return "string" != typeof e && (e = e === undefined || null === e ? "" : "function" == typeof e ? r(e.call(e)) : JSON.stringify(e)), e;
      }function i(e) {
        var t = "" + e,
            n = a.exec(t);if (!n) return e;var r = "",
            i = void 0,
            o = void 0,
            s = void 0;for (i = n.index, o = 0; i < t.length; i++) {
          switch (t.charCodeAt(i)) {case 34:
              s = "&#34;";break;case 38:
              s = "&#38;";break;case 39:
              s = "&#39;";break;case 60:
              s = "&#60;";break;case 62:
              s = "&#62;";break;default:
              continue;}o !== i && (r += t.substring(o, i)), o = i + 1, r += s;
        }return o !== i ? r + t.substring(o, i) : r;
      } /*! art-template@runtime | https://github.com/aui/art-template */
      var o = n(0),
          s = Object.create(o ? t : window),
          a = /["&'<>]/;s.$escape = function (e) {
        return i(r(e));
      }, s.$each = function (e, t) {
        if (Array.isArray(e)) for (var n = 0, r = e.length; n < r; n++) {
          t(e[n], n);
        } else for (var i in e) {
          t(e[i], i);
        }
      }, e.exports = s;
    }).call(t, n(4));
  }, function (e, t, n) {
    "use strict";
    var r = Object.prototype.toString,
        i = function i(e) {
      return null === e ? "Null" : r.call(e).slice(8, -1);
    },
        o = function s(e, t) {
      var n = void 0,
          r = i(e);if ("Object" === r ? n = Object.create(t || {}) : "Array" === r && (n = [].concat(t || [])), n) {
        for (var o in e) {
          Object.hasOwnProperty.call(e, o) && (n[o] = s(e[o], n[o]));
        }return n;
      }return e;
    };e.exports = o;
  }, function (e, t, n) {
    "use strict";
    var r = function r(e, t, _r, i) {
      var o = n(1);return i = i.$extend({ filename: i.resolveFilename(e, i), bail: !0, source: null }), o(i)(t, _r);
    };e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = function r(e) {
      console.error(e.name, e.message);
    };e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = { __data: Object.create(null), set: function set(e, t) {
        this.__data[e] = t;
      }, get: function get(e) {
        return this.__data[e];
      }, reset: function reset() {
        this.__data = {};
      } };e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = function i(e) {
      if (r) {
        return n(5).readFileSync(e, "utf8");
      }var t = document.getElementById(e);return t.value || t.innerHTML;
    };e.exports = i;
  }, function (e, t, n) {
    "use strict";
    var r = { test: /{{([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*}}/, use: function use(e, t, n, i) {
        var o = this,
            s = o.options,
            a = o.getEsTokens(i),
            c = a.map(function (e) {
          return e.value;
        }),
            u = {},
            p = void 0,
            l = !!t && "raw",
            f = n + c.shift(),
            h = function h(t, n) {
          console.warn((s.filename || "anonymous") + ":" + (e.line + 1) + ":" + (e.start + 1) + "\nTemplate upgrade: {{" + t + "}} -> {{" + n + "}}");
        };switch ("#" === t && h("#value", "@value"), f) {case "set":
            i = "var " + c.join("").trim();break;case "if":
            i = "if(" + c.join("").trim() + "){";break;case "else":
            var m = c.indexOf("if");~m ? (c.splice(0, m + 1), i = "}else if(" + c.join("").trim() + "){") : i = "}else{";break;case "/if":
            i = "}";break;case "each":
            p = r._split(a), p.shift(), "as" === p[1] && (h("each object as value index", "each object value index"), p.splice(1, 1));i = "$each(" + (p[0] || "$data") + ",function(" + (p[1] || "$value") + "," + (p[2] || "$index") + "){";break;case "/each":
            i = "})";break;case "block":
            p = r._split(a), p.shift(), i = "block(" + p.join(",").trim() + ",function(){";break;case "/block":
            i = "})";break;case "echo":
            f = "print", h("echo value", "value");case "print":case "include":case "extend":
            if (0 !== c.join("").trim().indexOf("(")) {
              p = r._split(a), p.shift(), i = f + "(" + p.join(",") + ")";break;
            }default:
            if (~c.indexOf("|")) {
              var d = a.reduce(function (e, t) {
                var n = t.value,
                    r = t.type;return "|" === n ? e.push([]) : "whitespace" !== r && "comment" !== r && (e.length || e.push([]), ":" === n && 1 === e[e.length - 1].length ? h("value | filter: argv", "value | filter argv") : e[e.length - 1].push(t)), e;
              }, []).map(function (e) {
                return r._split(e);
              });i = d.reduce(function (e, t) {
                var n = t.shift();return t.unshift(e), "$imports." + n + "(" + t.join(",") + ")";
              }, d.shift().join(" ").trim());
            }l = l || "escape";}return u.code = i, u.output = l, u;
      }, _split: function _split(e) {
        e = e.filter(function (e) {
          var t = e.type;return "whitespace" !== t && "comment" !== t;
        });for (var t = 0, n = e.shift(), r = /\]|\)/, i = [[n]]; t < e.length;) {
          var o = e[t];"punctuator" === o.type || "punctuator" === n.type && !r.test(n.value) ? i[i.length - 1].push(o) : i.push([o]), n = o, t++;
        }return i.map(function (e) {
          return e.map(function (e) {
            return e.value;
          }).join("");
        });
      } };e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = { test: /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/, use: function use(e, t, n, r) {
        return n = { "-": "raw", "=": "escape", "": !1, "==": "raw", "=#": "raw" }[n], t && (r = "/*" + r + "*/", n = !1), { code: r, output: n };
      } };e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = function i(e, t) {
      if (r) {
        var i,
            o = n(21).minify,
            s = t.htmlMinifierOptions,
            a = t.rules.map(function (e) {
          return e.test;
        });(i = s.ignoreCustomFragments).push.apply(i, a), e = o(e, s);
      }return e;
    };e.exports = i;
  }, function (e, t) {
    !function (e) {
      e.noop = function () {};
    }("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports : window);
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = /^\.+\//,
        o = function o(e, t) {
      if (r) {
        var o = n(5),
            s = t.root,
            a = t.extname;if (i.test(e)) {
          var c = t.filename,
              u = !c || e === c,
              p = u ? s : o.dirname(c);e = o.resolve(p, e);
        } else e = o.resolve(s, e);o.extname(e) || (e += a);
      }return e;
    };e.exports = o;
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function s(e) {
      var t = e.name,
          n = e.source,
          r = e.path,
          i = e.line,
          o = e.column,
          s = e.generated,
          a = e.message;if (!n) return a;var c = n.split(/\n/),
          u = Math.max(i - 3, 0),
          p = Math.min(c.length, i + 3),
          l = c.slice(u, p).map(function (e, t) {
        var n = t + u + 1;return (n === i ? " >> " : "    ") + n + "| " + e;
      }).join("\n");return (r || "anonymous") + ":" + i + ":" + o + "\n" + l + "\n\n" + t + ": " + a + (s ? "\n   generated: " + s : "");
    }var a = function (e) {
      function t(n) {
        r(this, t);var o = i(this, e.call(this, n.message));return o.name = "TemplateError", o.message = s(n), Error.captureStackTrace && Error.captureStackTrace(o, o.constructor), o;
      }return o(t, e), t;
    }(Error);e.exports = a;
  }, function (e, t, n) {
    "use strict";
    e.exports = n(3);
  }]);
});
},{}],24:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageContent = undefined;

var _artTempalte = require('../lib/art-tempalte');

var _artTempalte2 = _interopRequireDefault(_artTempalte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPageContent = exports.getPageContent = function getPageContent($page) {
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bg = source.background,
      doms = source.doms;


  var background = ';';
  for (var key in bg) {
    background += 'background-' + key + ': ' + bg[key] + ';';
  }

  $page.style.cssText += background; // eslint-disable-line

  var html = '\n    {{ each doms dom key }}\n      <div class="{{ key }} {{ dom.image && \'img\' || \'\' }}\n        {{ dom.cssanimate && (dom.cssanimate.key + \' css-animate animated ui-hide\') || \'\' }}"\n        data-key={{ key }} ></div>\n    {{ /each }}\n  ';

  return _artTempalte2.default.render(html, { doms: doms });
};
},{"../lib/art-tempalte":25}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orientationchange = exports.afterChangePage = exports.onChagePange = exports.beforeChangePage = exports.initArrowIcon = exports.getPageByHash = exports.setPageHash = exports.initHtml = undefined;

var _artTempalte = require('../lib/art-tempalte');

var _artTempalte2 = _interopRequireDefault(_artTempalte);

var _template = require('./template');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HASH_PAGE_KEY = '_page';

var initHtml = exports.initHtml = function initHtml() {
  var html = '\n    <article class="fullpage-wrapper">\n    {{ each pages page i}}\n      <section class="page page-{{i+1}}" data-index={{i+1}} ></section>\n    {{ /each }}\n    </article>\n  ';

  document.getElementById('root').innerHTML = _artTempalte2.default.render(html, { pages: GLOBAL.pages });
};

var setPageHash = exports.setPageHash = function setPageHash(index) {
  if (/#/.test(location.href)) {
    location.href = location.href.replace(new RegExp('(?<=' + HASH_PAGE_KEY + '=).*'), index);
  } else {
    location.href += '#' + HASH_PAGE_KEY + '=' + index;
  }
};

var getPageByHash = exports.getPageByHash = function getPageByHash() {
  var arr = location.hash.replace('#', '').split('=');
  var index = parseInt(arr[arr.indexOf(HASH_PAGE_KEY) + 1], 10);

  if (isNaN(index) || index > GLOBAL.pages.length) {
    return GLOBAL.config.startIndex || 1;
  }
  return index;
};

var initArrowIcon = exports.initArrowIcon = function initArrowIcon() {
  document.querySelector('.fullpage-arrow i').classList.add('iconfont', 'icon-ico-two-up-arrow');
};

var beforeChangePage = exports.beforeChangePage = function beforeChangePage(data) {
  var index = data.cur + 1;
  var $page = document.querySelector('.page-' + index);

  if (!$page) {
    return;
  }

  var _ref = GLOBAL.pages[index - 1] || {},
      doms = _ref.doms;

  [].forEach.call($page.querySelectorAll('.css-animate'), function (dom) {
    dom.classList.remove(doms[dom.dataset.key].cssanimate.key);
    dom.classList.add('ui-hide');
  });
};

var onChagePange = exports.onChagePange = function onChagePange(data) {
  var index = data.cur + 1;
  var $page = document.querySelector('.page-' + index);

  setPageHash(index);

  if (!$page || $page.dataset.load === '1') {
    return;
  }

  $page.innerHTML = (0, _template.getPageContent)($page, GLOBAL.pages[index - 1]);
  $page.dataset.load = '1';
};

var afterChangePage = exports.afterChangePage = function afterChangePage(data) {
  var index = data.cur + 1;
  var $page = document.querySelector('.page-' + index);

  if (!$page) {
    return;
  }

  var doms = GLOBAL.pages[index - 1].doms;


  [].forEach.call($page.querySelectorAll('.css-animate'), function (dom) {
    var temp = doms[dom.dataset.key].cssanimate || {};
    var cssanimate = Object.assign({}, temp, {
      'timing-function': temp.timing,
      'iteration-count': temp.count
    });

    var aniamteKey = cssanimate.key,
        time = cssanimate.showtime;


    var t = setTimeout(function () {
      var style = ';';

      ['delay', 'duration', 'timing-function', 'direction', 'iteration-count'].forEach(function (key) {
        if (!cssanimate[key]) {
          return;
        }

        style += 'animation-' + key + ': ' + cssanimate[key] + ';';
      });

      dom.style.cssText += style; // eslint-disable-line

      dom.classList.add(aniamteKey);
      dom.classList.remove('ui-hide');

      clearTimeout(t);
      t = null;
    }, time);
  });
};

var orientationchange = exports.orientationchange = function orientationchange() {};
},{"../lib/art-tempalte":25,"./template":24}],4:[function(require,module,exports) {
'use strict';

var _page = require('../../example/page.yaml');

var _page2 = _interopRequireDefault(_page);

var _app = require('../../app.json');

var _app2 = _interopRequireDefault(_app);

require('../lib/fullpage');

require('../lib/fiexible');

require('../css/index.styl');

var _page3 = require('./page');

var page = _interopRequireWildcard(_page3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_app2.default.startIndex > _page2.default.length) {
  throw new Error('起始页数，不能大于总页数');
}

// set global namespace and data
window.GLOBAL = {
  pages: _page2.default,
  config: _app2.default,
  $wrapper: null
};

var initFullPage = function initFullPage(index) {
  GLOBAL.$wrapper = document.querySelector('.fullpage-wrapper').fullpage({
    page: '.page', // the page selector
    start: index, // in load start page index
    duration: 500, // the duration time between pages
    loop: false, // is loopable after the end of pages
    drag: false, // can drag to switch page
    dir: 'v', // diraction
    der: 0.1,
    change: page.onChagePange,
    beforeChange: page.beforeChangePage,
    afterChange: page.afterChangePage
  });
};

var init = function init() {
  var index = page.getPageByHash();
  page.initHtml();
  page.initArrowIcon();
  page.setPageHash(index);
  initFullPage(index - 1);

  // move to the target page when hashchange
  window.onhashchange = function () {
    GLOBAL.$wrapper.moveTo(page.getPageByHash() - 1);
  };
};

init();
},{"../../example/page.yaml":6,"../../app.json":8,"../lib/fullpage":14,"../lib/fiexible":15,"../css/index.styl":10,"./page":12}],27:[function(require,module,exports) {

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '63801' + '/');
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
},{}]},{},[27,4])
//# sourceMappingURL=/js.1ed74691.map