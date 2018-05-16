import pages from 'USER_ROOT_PATH/page.yaml';
import config from '../../app.json';

import '../lib/normalize/index.css';
import '../lib/fullpage/index.css';
import '../lib/fullpage';
import '../lib/fiexible';
import '../css/index.styl';

import { loadHtml } from './page';

// set global namespace and data
window.GLOBAL = {
  pages,
  config,
};

const init = () => {
  if(config.startIndex > pages.length){
    throw new Error('初始化页数，不能大于总页数');
  }
  loadHtml();
};

init();
