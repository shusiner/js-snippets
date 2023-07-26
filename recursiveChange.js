const bgc = 'rgb(35 39 47)';
const color = 'rgb(235 236 240)';
const ignoreClassName = ['mvp-post-cat left', 'mvp-feat1-cat', 'mvp-feat4-main-text left relative', 'mvp-side-tab-wrap left relative', 'mvp-feat1-text'];
/**
 * Changes the background color and text color of an element and its children recursively.
 *
 * @param {HTMLElement} element - The element to apply the style changes to.
 */
const recursiveChange = element => {
  element.style.backgroundColor = bgc;
  element.style.color = color;
  if (element.children.length) {
    for (let i = 0; i < element.children.length; i++) {
      if (element.children[i].nodeName === 'SCRIPT') {
        continue;
      }
      if (!ignoreClassName.includes(element.children[i].className)) recursiveChange(element.children[i]);
    }
  }
};
recursiveChange(document.querySelector('body'));
// Run this function on https://dollarsandsense.sg/
