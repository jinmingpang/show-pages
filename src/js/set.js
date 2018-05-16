import app from '../config/app.yaml';

const appConfig = Object.assign(
  {
    title: app.title || 'hello wrold',
    keywords: app.keywords || 'show pages',
    description: app.description || 'hello show pages',
  },
  app
);

const addHeadElement = (nodeType, name, content) => {
  const head = document.getElementsByTagName('head')[0];
  const dom = document.createElement(nodeType);

  if (nodeType === 'meta') {
    dom.setAttribute('name', name);
    dom.setAttribute('content', content);
  } else {
    dom.innerHTML = name || content;
  }

  head.appendChild(dom);
};

const setMeta = () => {
  addHeadElement('meta', 'Keywords', appConfig.keywords);
  addHeadElement('meta', 'description', appConfig.description);
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

  if (isAndroid) {
    addHeadElement('meta', 'x5-fullscreen', 'true');
    addHeadElement('meta', 'x5-page-mode', 'app');
  }
};

const initSet = () => {
  setMeta();
  addHeadElement('title', appConfig.title);
};

initSet();
