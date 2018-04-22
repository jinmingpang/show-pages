
import config from './config.yaml';
import anime from '../lib/anima.min';

const forEach = [].forEach;

const tpl = tplConfig => {
  const { items } = tplConfig || {};
  let html = ``;
  if (!items) {
    return '配置';
  }
  for(const itemkey in items) {
    const { data, classes, noDefclass } = items[itemkey] || {};
    let dataset = ``;
    if(data){
      for(const datakey in data) {
        dataset += ` data-${datakey}="${data[datakey]}"`
      }
    }
    const defcls = noDefclass === true ? '' : `css-animate animated hide w ${itemkey}`;
    html += `<div class="${defcls} ${classes ? classes : ''}" ${dataset}></div>\n`;
  }
  return html;
};


export const getTpl = key => {
  if (config[key]) {
    return tpl(config[key]);
  }else {
    return '配置';
  }
};

export const afterInsertPAGE2 = (type) => {
  const $page2 = document.querySelector('.page-2');

  if (document.querySelector('.ren-wrapper')) {
    forEach.call(document.querySelectorAll('.ren-wrapper li'), dom => {
      dom.style.cssText = 'opacity:0;transform: scale(1)';
    });
  } else {

    let $wrapper = document.createElement('div');
    let html = `<div class="ren-wrapper">`;
    let nan = `<ul class="ren-nan-wrapper">`;
    let nv = `<ul class="ren-nv-wrapper">`;
    for(let i = 0; i < 9; i++){
      nan+= `<li class="w w-ren-nan ${ i==5 ? 'ren-nan-s' : ''}" ></li>`;
      nv+= `<li class="w w-ren-nv ${ i==2 || i==7 ? 'ren-nv-s' : ''}" ></li>`;
    }
    nan+='</ul>';
    nv+='</ul>';
    html+= `${nan}\n${nv}\n</div>`;
    $wrapper.innerHTML = html;
    $page2.appendChild($wrapper);
  }
  if (type == 'before') return;
  let timer = setTimeout(()=> {
    if(!document.querySelector('.page-2.cur')) return;
    anime.timeline({
      targets: '.ren-wrapper li',
      direction: 'alternate',
      loop: false,
      easing: 'easeOutExpo',
      delay: (el, index) => index * 200,
    })
    .add({
      scale: 0.9,
      opacity: 1,
    });
    clearTimeout(timer);
    timer = null;
  }, config.page2.xiaoRenTime);

}

export const afterInsertPAGE18 = (type) => {
  const $page18 = document.querySelector('.page-18');

  if (document.querySelector('.fz-wrapper')) {
    forEach.call(document.querySelectorAll('.fz-wrapper li'), dom => {
      dom.style.cssText = 'opacity:0;transform: rotate(0deg) translateY(0)';
    });
  } else {

    let $wrapper = document.createElement('div');
    let html = `<div class="fz-wrapper">`;
    let fz = `<ul>`;
    for(let i = 0; i < 5; i++){
      fz+= `<li class="w fz fz-${i+1}" ></li>`;
    }
    html+= `${fz}</ul></div>`;
    $wrapper.innerHTML = html;
    $page18.appendChild($wrapper);
  }
  if (type == 'before') return;
  let timer = setTimeout(()=> {
    if(!document.querySelector('.page-18.cur')) return;
    anime.timeline({
      targets: '.fz-wrapper li',
      opacity: 1,
      direction: 'alternate',
      loop: false,
      easing: 'easeOutExpo',
      delay: (el, i) => i * 300 ,
      duration: 700,
    }).add({
      translateY: '-1rem',
      rotate: '360deg',
      opacity: 1,
    })
    clearTimeout(timer);
    timer = null;
  }, config.page18.fzTime);

}
