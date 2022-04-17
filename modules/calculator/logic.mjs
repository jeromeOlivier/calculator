import { displayFinal } from './interface.mjs';

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
  if (number.last !== 'equality') runOperation();
  number.register = getDisplayNumber();
  number.operator = val;
  number.last = 'operator';
  number.printAll();
}

export function division() {
  const display = getDisplayNumber();
  if (display !== 0 && number.register !== 0) {
    number.register /= display;
    number.operator = 'division';
    return formatNumber(number.register);
  } else {
    return 'Error'
  }
}

export function multiplication() {
  const display = getDisplayNumber();
  number.register *= display;
  number.operator = 'multiplication';
  return formatNumber(number.register);
}

export function subtraction() {
  const display = getDisplayNumber();
  number.register -= display;
  number.operator = 'subtraction';
  return formatNumber(number.register);
}

export function addition() {
  const display = getDisplayNumber();
  number.register += display;
  number.operator = 'addition';
  return formatNumber(number.register);
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
  number.last = 'equality';
  number.printAll();
}

function getDisplayNumber() {
  return Number(document.querySelector('[data-func="display"]').innerHTML);
}

function formatNumber(number) {
  // for decimals
  const round = number % 1 !== 0 ? Math.round(number * 1000) / 1000 : number;
  // for big numbers
  return round > 9_999_999_999 ? round.toExponential(2) : round;
}
