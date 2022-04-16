import {
  addition,
  division,
  multiplication,
  number,
  runOperation,
  setOperator,
  subtraction,
} from '/modules/calculator/logic.mjs';

import {
  clearDisplay,
  invertDisplayedNumber,
  trimDisplayedNumber,
  updateDisplay,
} from '/modules/calculator/interface.mjs';

// EDITOR
// done
function wireClearButton() {
  const button = document.querySelector('[data-func="clear"]');
  button.addEventListener('click', () => {
    clearDisplay();
    number.last = null;
  });
}

function wireDeleteButton() {
  const button = document.querySelector('[data-func="delete"]');
  button.addEventListener('click', () => {
    trimDisplayedNumber();
    number.last = 'number';
  });
}

// NUMBER PAD
function wireNumberButtons() {
  const btn = document.querySelectorAll('.number');
  btn.forEach(b => b.addEventListener('click', () => {
    updateDisplay(b.innerHTML);
    number.last = 'number';
  }));
}

function wireDecimalButton() {
  const btn = document.querySelector('[data-func="."]');
  btn.addEventListener('click', () => {
    updateDisplay(btn.innerHTML);
    number.last = 'number';
  });
}

function wireInversionButton() {
  const btn = document.querySelector('[data-func="inversion"]');
  btn.addEventListener('click', () => {
    invertDisplayedNumber();
    number.last = 'number';
  });
}

// OPERATORS
function wireDivisionButton() {
  const button = document.querySelector('[data-func="division"]');
  button.addEventListener('click', () => {
    setOperator('division');
    number.last = 'operator';
  });
}

function wireMultiplicationButton() {
  const button = document.querySelector('[data-func="multiplication"]');
  button.addEventListener('click', () => {
    setOperator('multiplication');
    number.last = 'operator';
  });
}

function wireSubtractionButton() {
  const button = document.querySelector('[data-func="subtraction"]');
  button.addEventListener('click', () => {
    setOperator('subtraction');
    number.last = 'operator';
  });
}

function wireAdditionButton() {
  const button = document.querySelector('[data-func="addition"]');
  button.addEventListener('click', () => {
    setOperator('addition');
    number.last = 'operator';
  });
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
  wireDivisionButton();
  wireMultiplicationButton();
  wireSubtractionButton();
  wireAdditionButton();
  wireEqualityButton();
}
