import { updateDisplay, displayFinal } from './interface.mjs';

export const number = {
  register: 0,
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
      'last: ' + this.last,
    );
  },
};

export function setOperator(val) {
  const display = getDisplayNumber();
  if (number.operator === '') {
    number.operator = val;
    number.last = 'operator';
    number.register = display;
  } else if (number.operator === 'equality') {
    number.register = display;
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
  const display = getDisplayNumber();
  const calc = display + number.register;
  (number.register === 0) && (number.register = display); // edge case
  return formatNumber(calc);
}

export function runOperation() {
  const result = (number.operator === 'division') ? division() :
    (number.operator === 'multiplication') ? multiplication() :
      (number.operator === 'subtraction') ? subtraction() :
        (number.operator === 'addition') ? addition() :
          getDisplayNumber();
  if (isNaN(result)) {
    displayFinal('Error');
    number.reset();
  } else {
    displayFinal(result);
  }
}

export function getDisplayNumber() {
  return Number(document.querySelector('[data-func="display"]').innerHTML);
}

function formatNumber(number) {
  // for decimals
  const round = number % 1 !== 0 ? Math.round(number * 1000) / 1000 : number;
  // for big numbers
  return round > 9_999_999_999 ? round.toExponential(2) : round;
}
