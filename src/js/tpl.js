
import config from './config.yaml';
const forEach = [].forEach;

const tpl = tplConfig => {
  const { items } = tplConfig || {};
  let html = ``;
  if (!items) {
    return '';
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
    return '';
  }
};

export const afterInsertPAGE2 = () => {
  const $page2 = document.querySelector('.page-2');

  let $wrapper = document.createElement('div');
  let html = `<div class="ren-wrapper">`;
  let nan = `<ul class="ren-nan-wrapper">`;
  let nv = `<ul class="ren-nv-wrapper">`;
  for(let i = 0; i < 9; i++){
    nan+= `<li class="w w-ren-nan css-animate animated hide ${ i==5 ? 'ren-nan-s' : ''}" data-time="400" data-animate="fadeIn"></li>`;
    nv+= `<li class="w w-ren-nv css-animate animated hide ${ i==2 || i==7 ? 'ren-nv-s' : ''}" data-time="400" data-animate="fadeIn"></li>`;
  }
  nan+='</ul>';
  nv+='</ul>';
  html+= `${nan}\n${nv}\n</div>`;
  $wrapper.innerHTML = html;
  $page2.appendChild($wrapper);
}
