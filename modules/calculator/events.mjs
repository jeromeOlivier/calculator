import { numberInput } from './logic.mjs';
// import { updateDisplay } from './interface.mjs';

let currentNumber = 0;
let isWholeNumber = true;
let decimalPlace = 10;

// EDITOR
function clearCurrentNumber() {
  const clearButton = document.querySelector('[data-func="clear"]');
  clearButton.addEventListener('click', () => currentNumber = 0);
}

const delButton = document.querySelector('[data-func="delete"]');

// NUMBER PAD
function updateCurrentNumber() {
  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(button => button.addEventListener('click', () => {
    const userInput = Number(button.getAttribute('data-func'));
    if (isWholeNumber) currentNumber = updateIntegerWith(userInput);
    else {
      currentNumber = updateDecimalWith(userInput);
      decimalPlace = decimalPlace * 10;
    }
    console.log(currentNumber);
  }));
}

function activateDecimalButton() {
  const fractionButton = document.querySelector('[data-func="."]');
  fractionButton.addEventListener('click', () => isWholeNumber = false);
}

function invertCurrentNumber() {
  const invertButton = document.querySelector('[data-func="inversion"]');
  invertButton.addEventListener('click', () => {
    return currentNumber *= -1;
  });
}

// MODIFIERS
const operatorButtons = document.querySelector('.operator');
const scientificButtons = document.querySelector('.scientific');
const equalButton = document.querySelector('[data-func="equality"]');

export function runEvents() {
  updateCurrentNumber();
  activateDecimalButton();
  invertCurrentNumber();
}

// HELPERS ---------------------------------------------------------------------

function incrementByTen(val) {
  return val * 10;
}

function updateIntegerWith(input) {
  if (currentNumber === 0) return input;
  else if (currentNumber < 0) return (currentNumber * 10) - input;
  else return (currentNumber * 10) + input;
}

function updateDecimalWith(input) {
  if (currentNumber === 0) return input / decimalPlace;
  else if (currentNumber < 0) {
    const val = currentNumber - (input / decimalPlace);
    return Math.round((val) * decimalPlace) / decimalPlace;
  } else {
    const val = currentNumber + (input / decimalPlace);
    return Math.round((val) * decimalPlace) / decimalPlace;
  }

}
