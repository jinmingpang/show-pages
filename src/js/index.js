// xunhuan.d16e8404.html
import '../lib/normalize.css';
import '../lib/tiny.sider.css';
import '../lib/animate.min.css';
import '../css/index.less';

import '../lib/flexible';
import '../lib/fullpage';
import './music';

import config from './config.yaml';
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

const scrollerNum = (tplkey, type) => {
  const { scrollnums } = config[tplkey] || {};
  if(!scrollnums) return;
  const $nums = document.querySelectorAll('.page.cur .num-wrapper li');
  if($nums){
    forEach.call($nums, $num => {
      $num.class = '';
      $num.style = '';
    });
  }
  if ( type == 'before') return;

  for(const numKey in scrollnums) {
    const{ key = numKey, val, duration = 1000, time = 0 } = scrollnums[numKey] || {};

    let timer = setTimeout(()=>{
      const $num = document.querySelector(`.cur .num-wrapper-${key}`);
      if (!$num) return;
      const $nums = $num.querySelectorAll('li');
      const { val } = $num.dataset;
      const l = String(val).length - 1;
      for (let n = 0; n <= l; n++){
        let t = setTimeout(()=> {
          $nums[n].classList.add(`num-${String(val)[n]}`);
          $nums[n].style.cssText = `animation:none;`;
          clearTimeout(t);
          t = null;
        }, 200 * n);
      }
      clearTimeout(timer);
      timer = null;
    }, time + duration + 500 );
  }
};

const fullpageConfig = {
  beforeChange: (e) => {
    const cur = e.cur;
    const tplkey = 'page' + (cur + 1);
    const callback = Tpls[`change${tplkey.toUpperCase()}`];
    scrollerNum(tplkey, 'before');
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
      scrollerNum(tplkey, 'after');
      return 1;
    }

    // 加载页面
    $page.innerHTML = Tpls.getTpl(tplkey);
    callback && callback(tplkey);
    scrollerNum(tplkey, 'after');
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
