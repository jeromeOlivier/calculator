import {
  addition,
  division,
  multiplication,
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
function wireClearButton() {
  const button = document.querySelector('[data-func="clear"]');
  button.addEventListener('click', () => {
    clearDisplay();
  });
}

function wireDeleteButton() {
  const button = document.querySelector('[data-func="delete"]');
  button.addEventListener('click', () => {
    trimDisplayedNumber();
  });
}

// NUMBER PAD
function wireNumberButtons() {
  const btn = document.querySelectorAll('.number');
  btn.forEach(b => b.addEventListener('click', () => {
    updateDisplay(b.innerHTML);
  }));
}

function wireDecimalButton() {
  const btn = document.querySelector('[data-func="."]');
  btn.addEventListener('click', () => {
    updateDisplay(btn.innerHTML);
  });
}

function wireInversionButton() {
  const btn = document.querySelector('[data-func="inversion"]');
  btn.addEventListener('click', () => {
    invertDisplayedNumber();
  });
}

// OPERATORS
function wireDivisionButton() {
  const button = document.querySelector('[data-func="division"]');
  button.addEventListener('click', () => setOperator('division'));
}

function wireMultiplicationButton() {
  const button = document.querySelector('[data-func="multiplication"]');
  button.addEventListener('click', () => setOperator('multiplication'));
}

function wireSubtractionButton() {
  const button = document.querySelector('[data-func="subtraction"]');
  button.addEventListener('click', () => setOperator('subtraction'));
}

function wireAdditionButton() {
  const button = document.querySelector('[data-func="addition"]');
  button.addEventListener('click', () => setOperator('addition'));
}

// EQUALITY
function wireEqualityButton() {
  const button = document.querySelector('[data-func="equality"]');
  button.addEventListener('click', () => runOperation());
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
