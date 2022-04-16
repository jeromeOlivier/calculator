export const elements = [
  [
    { html: '0', func: 'display', class: 'result' }
  ],
  [
    { html: 'CLEAR', func: 'clear', class: 'clear' },
    { html: 'DEL', func: 'delete', class: 'del', },
    { html: '&divide;', func: 'division', class: 'operator' },
    // { html: 'n&excl;', func: 'factorial', class: 'scientific', }
  ],
  [
    { html: '7', func: '7', class: 'number' },
    { html: '8', func: '8', class: 'number' },
    { html: '9', func: '9', class: 'number' },
    { html: '&times;', func: 'multiplication', class: 'operator' },
    // { html: 'x<sup>y</sup>', func: 'exponential', class: 'scientific' }
  ],
  [
    { html: '4', func: '4', class: 'number' },
    { html: '5', func: '5', class: 'number' },
    { html: '6', func: '6', class: 'number' },
    { html: '-', func: 'subtraction', class: 'operator' },
    // { html: '&radic;', func: 'root', class: 'scientific' }
  ],
  [
    { html: '1', func: '1', class: 'number' },
    { html: '2', func: '2', class: 'number' },
    { html: '3', func: '3', class: 'number' },
    { html: '&plus;', func: 'addition', class: 'operator' },
    // { html: '&pi;', func: 'pi', class: 'scientific'}
  ],
  [
    { html: '<span class="sup">+</span>' +
        '<span class="small">/</span>' +
        '<span class="sub">-</span>', func: 'inversion', class: 'secondary' },
    { html: '0', func: '0', class: 'number' },
    { html: '&period;', func: '.', class: 'secondary' },
    { html: '&equals;', func: 'equality', class: 'equality'}
  ],
];
