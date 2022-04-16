import { updateDisplay } from './interface.mjs';

export const number = {
  resister: 0,
  operator: undefined,
  last: null,
  reset: function () {
    this.register01 = 0;
    this.operator = undefined;
  },
  printAll: function () {
    console.log(
      'register: ' + this.register + '\n' +
      'operator: ' + this.operator + '\n' +
      'last: ' + this.last
    );
  },
};

export function setOperator(val) {
  // if operator !== null, run operation and save to register and display
  const display = Number(document.querySelector('[data-func="display"]'));
  number.operator = val;
  number.register = display;
  number.printAll();
}

export function modulo() {
  const result = number.register01 % number.register02;
  if (result.toString() === 'NaN') {
    updateDisplay(`Error`);
  } else {
    updateDisplay(result);
  }
  number.output = 0;
  number.register01 = 0;
  number.register02 = 0;
}

export function division() {
  const result = (number.register02 === 0) ?
    number.output / number.register01 :
    number.register01 / number.register02;
  if (result.toString() === 'NaN') {
    updateDisplay(`Error`);
    number.reset();
  } else {
    updateDisplay(result);
    number.output = result;
    number.register01 = number.register02 !== 0 ?
      number.register02 : number.register01;
    }
    number.register02 = 0;
}

export function multiplication() {
  number.output *= number.register01;
}

export function subtraction() { // needs to continue while hitting =
  number.output = number.register02 === 0 ?
    number.output - number.register01 :
    number.register01 - number.register02;
  if (number.register02 !== 0) {
    number.register01 = number.register02;
    number.register02 = 0;
  }
  updateDisplay(number.output);
}

export function addition() {
  number.output += number.register01;
  if (number.register02 !== 0) {
    number.register01 = number.register02;
    number.register02 = 0;
  }
  updateDisplay(number.output);
}

export function factorial() {
}

export function exponential() {

}

export function root() {

}

export function runOperation() {
  (number.operator === 'modulo') && modulo();
  (number.operator === 'division') && division();
  (number.operator === 'multiplication') && multiplication();
  (number.operator === 'subtraction') && subtraction();
  (number.operator === 'addition') && addition();
  number.register02 = 0;
  number.printAll();
}

// HELPERS ---------------------------------------------------------------------
function updateIsWholeBoolean() {
  if (!number.isWhole) {
    number.decimalPlace = number.decimalPlace / 10;
    if (number.decimalPlace / 10 === 1) number.isWhole = true;
  }
}
