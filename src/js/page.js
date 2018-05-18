import tpl from '../lib/art-tempalte';
import { getPageContent } from './template';

const HASH_PAGE_KEY = '_page';

export const initHtml = () => {
  const html = `
    <article class="fullpage-wrapper">
    {{ each pages page i}}
      <section class="page page-{{i+1}}" data-index={{i+1}} ></section>
    {{ /each }}
    </article>
  `;

  document.getElementById('root').innerHTML = tpl.render(html, { pages: GLOBAL.pages });
};

export const setPageHash = index => {
  if (/#/.test(location.href)) {
    location.href = location.href.replace(new RegExp(`(?<=${HASH_PAGE_KEY}=).*`), index);
  } else {
    location.href += `#${HASH_PAGE_KEY}=${index}`;
  }
};

export const getPageByHash = () => {
  const arr = location.hash.replace('#', '').split('=');
  const index = parseInt(arr[arr.indexOf(HASH_PAGE_KEY) + 1], 10);

  if (isNaN(index) || index > GLOBAL.pages.length) {
    return GLOBAL.config.startIndex || 1;
  }
  return index;
};

export const initArrowIcon = () => {
  document.querySelector('.fullpage-arrow i').classList.add('iconfont', 'icon-ico-two-up-arrow');
};

export const beforeChangePage = data => {
  const index = data.cur + 1;
  const $page = document.querySelector(`.page-${index}`);

  if (!$page) {
    return;
  }

  const { doms } = GLOBAL.pages[index - 1] || {};
  [].forEach.call($page.querySelectorAll('.css-animate'), dom => {
    dom.classList.remove(doms[dom.dataset.key].cssanimate.key);
    dom.classList.add('ui-hide');
  });
};

export const onChagePange = data => {
  const index = data.cur + 1;
  const $page = document.querySelector(`.page-${index}`);

  setPageHash(index);

  if (!$page || $page.dataset.load === '1') {
    return;
  }

  $page.innerHTML = getPageContent($page, GLOBAL.pages[index - 1]);
  $page.dataset.load = '1';
};

export const afterChangePage = data => {
  const index = data.cur + 1;
  const $page = document.querySelector(`.page-${index}`);

  if (!$page) {
    return;
  }

  const { doms } = GLOBAL.pages[index - 1];

  [].forEach.call($page.querySelectorAll('.css-animate'), dom => {
    const temp = doms[dom.dataset.key].cssanimate || {};
    const cssanimate = Object.assign({}, temp, {
      'timing-function': temp.timing,
      'iteration-count': temp.count,
    });

    const { key: aniamteKey, showtime: time } = cssanimate;

    let t = setTimeout(() => {
      let style = ';';

      ['delay', 'duration', 'timing-function', 'direction', 'iteration-count'].forEach(key => {
        if (!cssanimate[key]) {
          return;
        }

        style += `animation-${key}: ${cssanimate[key]};`;
      });

      dom.style.cssText += style; // eslint-disable-line

      dom.classList.add(aniamteKey);
      dom.classList.remove('ui-hide');

      clearTimeout(t);
      t = null;
    }, time);
  });
};

export const orientationchange = () => {};
