import { $, $$ } from '@sciter';

$('tabs label').state.current = true;
$('tabs section').state.expanded = true;

$('strip').on('click', function (_, el) {
  if (el.tag === 'label') {
    if (this.$(':current')) {
      this.$(':current').state.current = false;
    }
    el.state.current = true;
    const expanded_section = this.parentElement.$('section:expanded');
    if (expanded_section !== null) {
      expanded_section.state.expanded = false;
      expanded_section.state.collapsed = true;
    }
    this.parentElement.$(`(${el.attributes.for})`).state.expanded = true;
  }
});