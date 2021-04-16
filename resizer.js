// https://stackoverflow.com/a/34487057/13378247
export default function (selector) {
  const element = document.querySelector(selector);
  const resizer = document.createElement('div');

  resizer.className = 'resizer';
  resizer.style.width = '10dip';
  resizer.style.height = '10dip';
  resizer.style.background = 'black';
  resizer.style.position = 'absolute';
  resizer.style.right = '-5dip';
  resizer.style.bottom = '-5dip';
  resizer.style.cursor = 'se-resize';
  resizer.style.hitbox = '10dip';

  element.appendChild(resizer);
  resizer.addEventListener('mousedown', initResize, false);

  function initResize(e) {
    document.addEventListener('mousemove', Resize, false);
    document.addEventListener('mouseup', stopResize, false);
    element.attributes.resizing = true;
    resizer.state.capture(true);
  }

  function Resize(e) {
    element.style.width = (e.clientX - element.offsetLeft) + 'dip';
    element.style.height = (e.clientY - element.offsetTop) + 'dip';
    Window.this.parameters.inspector.document.updateComponentDimensions(element);
  }

  function stopResize(e) {
    document.removeEventListener('mousemove', Resize, false);
    document.removeEventListener('mouseup', stopResize, false);
    element.attributes.resizing = false;
    resizer.state.capture(false);
  }
}