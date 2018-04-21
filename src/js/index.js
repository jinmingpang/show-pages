import '../lib/normalize.css';
import '../lib/animate.min.css';
import '../css/index.less';

import '../lib/flexible';
import '../lib/anima.min';
import '../lib/fullpage';

import * as Tpls from './tpl';

const fullpageConfig = {
  change: (e) => {
    const cur = e.cur; // 当前值
    const $page = document.querySelectorAll('.page')[cur]; // 避免重复加载
    // 移除动画属性
    forEach.call($page.querySelectorAll('.css-animate'),
      (dom) => {
        dom.classList.remove(dom.dataset['animate']);
        dom.classList.add('hide');
      });

    // 已加载页面直接返回
    if ($page.dataset.load== '1') {
        return 1;
    }
    // 加载页面
    const tplkey = 'page' + (cur + 1);
    const callback = Tpls[`afterInsert${tplkey.toUpperCase()}`];
    $page.innerHTML = Tpls[tplkey] || Tpls.getTpl(tplkey);
    callback && callback();
    $page.dataset.load = 1;
  },
  afterChange: function (e) {
    // 添加动画属性
    forEach.call(document.querySelectorAll('.page')[e.cur].querySelectorAll('.css-animate'),
      (dom) => {
        var time = dom.dataset.time;
        setTimeout(function () {
          dom.classList.add(dom.dataset['animate']);
          dom.classList.remove('hide');
        }, time);
    });
  }
};

const forEach = [].forEach;
const $wrapper = document.getElementsByClassName('page-inner')[0];
// 首屏幕加载
document.querySelector('.page-1').innerHTML = Tpls.page1 || Tpls.getTpl('page1') ;
fullpageConfig.afterChange({ cur: 0 });
$wrapper.fullpage(fullpageConfig);
