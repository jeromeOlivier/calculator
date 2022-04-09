// import { number } from 'logic.mjs'
import { elements } from './elements.mjs';

function constructInterface() {
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

// EXPORTS ---------------------------------------------------------------------
// export function updateDisplay() {
//   const display = document.querySelector('[data-func="display"]');
//   display.textContent = String(number.saved);
// }

export function runInterface() {
  constructInterface();
  // updateDisplay();
}
