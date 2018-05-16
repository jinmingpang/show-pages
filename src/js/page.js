import tpl from '../lib/art-tempalte';

export const PAGE_KEY = '_page';

export const loadHtml = () => {

  const html = `
    <article class="fullpage-wrapper">
    {{ each pages}}
      <section class="page page-{{index+1}}" data-index={{index+1}}></section>
    {{ /each }}
    </article>
  `;

  document.querySelector('.root').innerHTML = tpl.render(html, {pages: GLOBAL.pages});
};

export const setPageHash = (page) => {

  if(/#/.test(location.href)){
    location.href = location.href.replace(new RegExp(`(?<=${PAGE_KEY}=).*`), page);
  }else{
    location.href += `#${PAGE_KEY}=${page}`;
  }
};

export const getPageByHash = () => {

  const arr = location.hash.replace('#', '').split('=');
  const page = arr[arr.indexOf(PAGE_KEY)+1];
  if(isNaN(parseInt(page, 10))){
    return -1;
  }

  return page;
};

export const beforeChangePage = () => {
  location.href = ''
};

export const onChagePange = () => {

};

export const afterChangePage = () => {};
