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

function updateDisplay(value) {
  const display = document.querySelector('[data-func="display"]');
  if (value === undefined) {
    display.textContent = '0';
  } else if (value === '.' && /\./.test(display.textContent)) {
    display.textContent;
  } else if (value === 'inversion') {

  } else {
    (display.textContent === '0') && (display.textContent = '');
    display.textContent += value;
  }
}


export function runInterface() {
  constructInterface();
  updateDisplay();
}

// HELPERS ---------------------------------------------------------------------
