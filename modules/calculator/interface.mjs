import { elements } from './elements.mjs'
import { interfaceToLogic, logicToInterface } from './logic.mjs';

function constructInterface() {
  const calculator = document.querySelector('#calculator')
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

function wireEventHandlers() {
  const buttons = document.querySelectorAll('[data-type="button"]');
  buttons.forEach(button => button.addEventListener('click', () => {
    const value = button.getAttribute('data-func');
    console.log(value)
    interfaceToLogic(value);
  }));
}

export function updateDisplay(value) {
  const display = document.querySelector('[data-func="display"]')
  display.textContent = value;
}

export function runInterface() {
  constructInterface();
  wireEventHandlers();
  updateDisplay();
}

// HELPERS ---------------------------------------------------------------------
