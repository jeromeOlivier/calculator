import { numberInput } from './logic.mjs';
// import { updateDisplay } from './interface.mjs';

let currentNumber = 0;
let isWholeNumber = true;
let decimalPlace = 10;
// editors
const clearButton = document.querySelector('[data-func="clear"]');
const delButton = document.querySelector('[data-func="delete"]');
// modifiers
const operatorButtons = document.querySelector('.operator');
const scientificButtons = document.querySelector('.scientific');
const equalButton = document.querySelector('[data-func="equality"]');

// NUMBER PAD
function updateCurrentNumber() {
  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(button => button.addEventListener('click', () => {
    const userInput = Number(button.getAttribute('data-func'));
    if (isWholeNumber) currentNumber = updateIntegerWith(userInput);
    else {
      currentNumber = updateDecimalWith(userInput);
      decimalPlace = incrementByTen(decimalPlace);
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
  invertButton.addEventListener('click', () => currentNumber * -1);
}

// MODIFIERS

export function runEvents() {
  updateCurrentNumber();
  activateDecimalButton();
}

// HELPERS ---------------------------------------------------------------------

function incrementByTen(val) { return val * 10; }

function updateIntegerWith(input) {
  if (currentNumber === 0) return input;
  else if (currentNumber < 0) return (currentNumber * 10) - input;
  else return (currentNumber * 10) + input;
}

function updateDecimalWith(input) {
  if (currentNumber === 0) return input / decimalPlace;
  else if (currentNumber < 0) return currentNumber - (input / decimalPlace);
  else return currentNumber + (input / decimalPlace);
  // else return (((currentNumber + (input / decimalPlace)) * decimalPlace) << 0);
}
