import { elements } from './elements.mjs';

// import { number } from './logic.mjs';

export function constructInterface() {
  const calculator = document.querySelector('#calculator');
  elements.forEach(row =>
    row.forEach(e => {
      const element = document.createElement('div');
      element.innerHTML = e.html;
      element.setAttribute('data-func', e.func);
      if (e.class !== 'result') {
        element.setAttribute('data-type', 'button');
      } else {
        element.setAttribute('data-type', 'display');
      }
      element.className = e.class;
      calculator.appendChild(element);
    }));
}

// export function updateDisplay(value) {
//   const display = document.querySelector('[data-func="display"]');
//   console.log(value.toString());
//   display.textContent = value.toString();
// }
