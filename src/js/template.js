import tpl from '../lib/art-tempalte';

export const getPageContent = ($page, source = {}) => {
  const { background: bg, doms } = source;

  let background = ';';
  for (const key in bg) {
    background += `background-${key}: ${bg[key]};`;
  }

  $page.style.cssText += background; // eslint-disable-line

  const html = `
    {{ each doms dom key }}
      <div class="{{ key }} {{ dom.cssanimate ? dom.cssanimate.key : '' }}"
        data-key={{ key }} ></div>
    {{ /each }}
  `;

  return tpl.render(html, {doms});
};
