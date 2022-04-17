import { updateDisplay, displayResult } from './interface.mjs';

export const number = {
  resister: 0,
  operator: '',
  last: '',
  reset: function () {
    this.register = 0;
    this.operator = '';
    this.last = '';
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
  if (number.operator === '') {
    number.operator = val;
    number.last = 'operator';
    number.register = Number(document.querySelector('[data-func="display"]').innerHTML);
  } else if (number.operator === 'equality') {
    number.register = Number(document.querySelector('[data-func="display"]').innerHTML);
    runOperation();
    number.operator = val;
    number.last = 'operator';
  }
  number.printAll();
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
  const display = document.querySelector('[data-func="display"]');
  const calc = Number(display.innerHTML) + number.register;
  const round = calc % 1 !== 0 ? Math.round(calc * 1000) / 1000 : calc;
  const final = round > 9_999_999_999 ? calc.toExponential(2) : round;
  displayResult(final);
}

export function runOperation() {
  (number.operator === 'division') && division();
  (number.operator === 'multiplication') && multiplication();
  (number.operator === 'subtraction') && subtraction();
  (number.operator === 'addition') && addition();
  number.printAll();
}

