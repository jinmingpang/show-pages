// xunhuan.d16e8404.html
import '../lib/normalize.css';
import '../lib/tiny.sider.css';
import '../lib/animate.min.css';
import '../css/index.less';

import '../lib/flexible';
import '../lib/fullpage';

import * as Tpls from './tpl';

const animateCss = (dom, key, val) => {
  if(!val) return;

  if (key === 'timing') {
    key = 'timing-function';
  } else if (key === 'count') {
    key = 'iteration-count	';
  }
  dom.style.cssText += `animation-${key}: ${val};-moz-animation-${key}: ${val};-webkit-animation-${key}: ${val};`;
};

const fullpageConfig = {
  beforeChange: (e) => {
    const cur = e.cur;
    const tplkey = 'page' + (cur + 1);
    const callback = Tpls[`change${tplkey.toUpperCase()}`];
    callback && callback('before');
  },
  change: (e) => {
    const cur = e.cur; // 当前值
    const $page = document.querySelectorAll('.page')[cur]; // 避免重复加载
    // 移除动画属性
    forEach.call($page.querySelectorAll('.css-animate'),
      (dom) => {
        dom.classList.remove(dom.dataset['animate']);
        dom.classList.add('hide');
      });

    const tplkey = 'page' + (cur + 1);
    const callback = Tpls[`change${tplkey.toUpperCase()}`];

    // 已加载页面直接返回
    if ($page.dataset.load== '1') {
      callback && callback('after');
      return 1;
    }

    // 加载页面
    $page.innerHTML = Tpls.getTpl(tplkey);
    callback && callback(tplkey);
    $page.dataset.load = 1;
  },
  afterChange: function (e) {
    // 添加动画属性
    const $curPage = document.querySelectorAll('.page')[e.cur];
    if (!$curPage) return;

    forEach.call($curPage.querySelectorAll('.css-animate'),
      (dom) => {
        var time = dom.dataset.time;
        setTimeout(() => {
          const { dataset = {} } = dom;
          const { animate, infinite, delay, duration, timing, direction } = dataset;
          animate && dom.classList.add(animate);
          if (infinite){
            dom.classList.add('infinite');
          }
          ['delay', 'duration', 'timing', 'direction', 'count'].forEach(key =>
            animateCss(dom, key, dataset[key]));
            animate && dom.classList.remove('hide');
        }, time);
    });
  }
};

const forEach = [].forEach;
const $wrapper = document.getElementsByClassName('page-inner')[0];
// 首屏幕加载
const first = 1;
const $first = document.querySelector(`.page-${first}`);
$first.innerHTML = Tpls.getTpl(`page${first}`) ;
$first.dataset.load = 1;
fullpageConfig.afterChange({ cur: first });
$wrapper.fullpage(fullpageConfig);
