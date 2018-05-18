import pages from 'USER_ROOT_PATH/page.yaml';
import config from '../../app.json';

import '../lib/fullpage';
import '../lib/fiexible';
import '../css/index.styl';

import * as page from './page';

if (config.startIndex > pages.length) {
  throw new Error('起始页数，不能大于总页数');
}

// set global namespace and data
window.GLOBAL = {
  pages,
  config,
  $wrapper: null,
};

const initFullPage = index => {
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
    afterChange: page.afterChangePage,
  });
};

const init = () => {
  const index = page.getPageByHash();
  page.initHtml();
  page.initArrowIcon();
  page.setPageHash(index);
  initFullPage(index - 1);

  // move to the target page when hashchange
  window.onhashchange = () => {
    GLOBAL.$wrapper.moveTo(page.getPageByHash() - 1);
  };
};

init();
