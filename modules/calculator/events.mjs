import {
  addition,
  clearCurrentNumber,
  division,
  exponential,
  factorial,
  invert,
  modulo,
  multiplication,
  number,
  removeLastDigit,
  root,
  runOperation,
  subtraction,
  updateDecimalWith,
  updateIntegerWith,
} from '/modules/calculator/logic.mjs';
import { updateDisplay } from './logic.mjs';

// EDITOR
// done
function wireClearButton() {
  const button = document.querySelector('[data-func="clear"]');
  button.addEventListener('click', () => clearCurrentNumber());
}

function wireDeleteButton() {
  const button = document.querySelector('[data-func="delete"]');
  button.addEventListener('click', () => removeLastDigit());
}

// NUMBER PAD
function wireNumberButtons() {
  const buttons = document.querySelectorAll('.number');
  buttons.forEach(button => button.addEventListener('click', () => {
    const userInput = Number(button.getAttribute('data-func'));
    number.isWhole ? updateIntegerWith(userInput) : updateDecimalWith(userInput);
  }));
}

function wireDecimalButton() {
  const button = document.querySelector('[data-func="."]');
  button.addEventListener('click', () => number.isWhole = false);
}

function wireInversionButton() {
  const button = document.querySelector('[data-func="inversion"]');
  button.addEventListener('click', () => invert());
}

// OPERATORS
function wireModuloButton() {
  const button = document.querySelector('[data-func="modulo"]');
  button.addEventListener('click', () => {
    number['1stRegister'] = number.output;
    number.operator = 'modulo';
  });
}

function wireDivisionButton() {
  const button = document.querySelector('[data-func="division"]');
  button.addEventListener('click', () => {
    number['1stRegister'] = number.output;
    number.operator = 'division';
  });
}

function wireMultiplicationButton() {
  const button = document.querySelector('[data-func="multiplication"]');
  button.addEventListener('click', () => {
    number['1stRegister'] = number.output;
    number.operator = 'multiplication';
  });
}

function wireSubtractionButton() {
  const button = document.querySelector('[data-func="subtraction"]');
  button.addEventListener('click', () => {
    number['1stRegister'] = number.output;
    number.operator = 'subtraction';
  });
}

function wireAdditionButton() {
  const button = document.querySelector('[data-func="addition"]');
  button.addEventListener('click', () => {
    number['1stRegister'] = number.output;
    number.output = 0;
    number.operator = 'addition';
  });
}

// SCIENTIFIC
function wireFactorialButton() {
  const button = document.querySelector('[data-func="root"]');
  button.addEventListener('click', () => factorial());
}

function wireExponentialButton() {
  const button = document.querySelector('[data-func="root"]');
  button.addEventListener('click', () => exponential(number['1stRegister']));
}

function wireRootButton() {
  const button = document.querySelector('[data-func="root"]');
  button.addEventListener('click', () => root(number['1stRegister']));
}

// EQUALITY
function wireEqualityButton() {
  const button = document.querySelector('[data-func="equality"]');
  button.addEventListener('click', () => {
    runOperation();
  });
}

export function wireButtons() {
  wireClearButton();
  wireDeleteButton();
  wireNumberButtons();
  wireDecimalButton();
  wireInversionButton();
  wireModuloButton();
  wireDivisionButton();
  wireMultiplicationButton();
  wireSubtractionButton();
  wireAdditionButton();
  wireFactorialButton();
  wireExponentialButton();
  wireRootButton();
  wireEqualityButton();
}
