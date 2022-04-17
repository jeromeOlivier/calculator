import { elements } from './elements.mjs';
import { number } from './logic.mjs';

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

export function updateDisplay(value) {
  const display = document.querySelector('[data-func="display"]');
  const includesDot = display.innerHTML.includes('.');
  resetDisplay(value); // display needs to be reset to avoid weird concatenation
  if (!includesDot && Number(display.innerHTML) < 9_999_999_999) {
    display.innerHTML += value;
  } else if (value !== '.' && Number(display.innerHTML) < 9_999_999_999) {
    display.innerHTML += value;
  }
  number.last = 'number';
  number.printAll();
}

export function displayFinal(value) {
  const display = document.querySelector('[data-func="display"]');
  clearDisplay();
  display.innerHTML = value;
}

export function clearDisplay() {
  const display = document.querySelector('[data-func="display"]');
  display.innerHTML = '0';
  number.reset();
}

function resetDisplay(value) {
  const display = document.querySelector('[data-func="display"]');
  (number.last === 'operator') && (display.innerHTML = '');
  (number.last === 'equality') && (display.innerHTML = '');
  (display.innerHTML === '0' && value !== '.') && (display.innerHTML = '');
  (display.innerHTML === 'Error') && (display.innerHTML = '');
}

export function invertDisplayedNumber() {
  const display = document.querySelector('[data-func="display"]');
  if (display.innerHTML.includes('-')) {
    display.innerHTML = display.innerHTML.slice(1);
  } else {
    display.innerHTML = '-' + display.innerHTML;
  }
}

export function trimDisplayedNumber() { // delete last digit
  const display = document.querySelector('[data-func="display"]');
  display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  (display.innerHTML === '') && (display.innerHTML = '0');
}
