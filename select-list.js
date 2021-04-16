import { $, $$ } from '@sciter';

document.on('click', 'select|list span', function (_, el) {
  if (el.tag === 'span' && el.textContent === '') {
    const option = el.parentElement;
    if (!option.classList.contains('parent')) { return };
    option.classList.toggle('expanded');
    const options = this.$$('option');
    const index = options.indexOf(option) + 1;

    for (const opt of options.slice(index)) {
      if (!opt.classList.contains('child')) { break };
      opt.classList.toggle('hidden');
    }
  }
}); 

document.on('change', 'select|list', function () {
  const option = this.$('option:current');
  const textbox = option.$('.textbox');
  if (textbox === null) { return };
  textbox.execCommand('edit:selectall');
});

document.on('focus', 'select|list .textbox', function (_, el) {
  const option = el.parentElement;
  option.click();
  el.execCommand('edit:selectall');
});

document.on('blur', 'select|list .textbox', function (_, el) {
  const option = el.parentElement;
  el.execCommand('edit:selectnone');
});
