// import { updateDisplay } from './interface.mjs';

export const number = {
  output: 0,
  register: 0,
  operator: '',
  isWhole: true,
  decimalPlace: 10,
  string: function() { return this.register.toString(); },
  all: function() {
    console.log(
      `
      output: ${this.output}, 
      register: ${this.register}, 
      operator: ${this.operator},
      isWhole: ${this.isWhole},
      decimalPlace: ${this.decimalPlace}
      `);
  }
}

export function modulo() {
  return number.output %= number.register;
}

export function division() {
  return number.output /= number.register;
}

export function multiplication() {
  return number.output *= number.register;
}

export function subtraction() {
  return number.output -= number.register;
}

export function addition() {
  // const cache = number.output;
  number.output += number.register;
  // number.register = cache;
  updateDisplay(number.output);
}

export function factorial() {
}

export function exponential() {

}

export function root() {

}

export function invert() { return number.register * -1; }

export function runOperation() {
  (number.operator === 'modulo') && modulo();
  (number.operator === 'division') && division();
  (number.operator === 'multiplication') && multiplication();
  (number.operator === 'subtraction') && subtraction();
  (number.operator === 'addition') && addition();
}

// HELPERS ---------------------------------------------------------------------
function updateNumberIsWholeBoolean() {
  if (!number.isWhole) {
    number.decimalPlace = number.decimalPlace / 10;
    if (number.decimalPlace / 10 === 1) number.isWhole = true;
  }
}

export function updateIntegerWith(input) {
  if (number.output === 0) {
    number.output = input;
    const num = number.output;
    updateDisplay(num);
  } else if (number.output < 0) {
    number.output = (number.output * 10) - input;
    updateDisplay(number.output);
  } else {
    number.output = (number.output * 10) + input;
    updateDisplay(number.output);
  }
}

export function updateDecimalWith(input) {
  if (number.output === 0) {
    number.output = input / number.decimalPlace;
    number.decimalPlace *= 10;
    updateDisplay(number.output);
  } else if (number.output < 0) {
    const output = number.output - (input / number.output);
    number.output = Math.round((output) * number.decimalPlace) / number.decimalPlace;
    number.decimalPlace *= 10;
    updateDisplay(number.output);
  } else {
    const output = number.output + (input / number.decimalPlace);
    number.output = Math.round((output) * number.decimalPlace) / number.decimalPlace;
    number.decimalPlace *= 10;
    updateDisplay(number.output);
  }
}

export function removeLastDigit() {
  updateNumberIsWholeBoolean();
  return Number(number.string().substring(0, number.register.length - 1));
}

export function clearCurrentNumber() {
  number.register = 0;
  number.isWhole = true;
}

export function updateDisplay(value) {
  const display = document.querySelector('[data-func="display"]');
  // console.log(value.toString());
  display.textContent = value.toString();
}
