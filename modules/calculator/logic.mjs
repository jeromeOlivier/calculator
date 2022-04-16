export const number = {
  register01: 0,
  register02: 0,
  output: 0,
  operator: undefined,
  isWhole: true,
  decimalPlace: 10,
  reset: function () {
    this.register01 = 0;
    this.register02 = 0;
    this.output = 0;
    this.operator = undefined;
    this.isWhole = true;
    this.decimalPlace = 10;
  },
  printAll: function () {
    console.log(
      'output: ' + this.output + '\n' +
      'register01: ' + this.register01 + '\n' +
      'register02: ' + this.register02 + '\n' +
      'operator: ' + this.operator + '\n' +
      'isWhole: ' + this.isWhole + '\n' +
      'decimalPlace: ' + this.decimalPlace + '\n',
    );
  },
};

export function setOperator(val) {
  number.operator = val;
  number.register01 = number.output;
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

export function invert() {
  number.output = number.output * -1;
  updateDisplay(number.output);
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

export function updateIntegerWith(input) {
  if (number.operator === undefined) {
    if (number.register01 === 0) {
      number.register01 = input;
      number.output = number.register01;
      updateDisplay(number.output);
    } else if (number.register01 < 0) {
      number.register01 = (number.register01 * 10) - input;
      number.output = number.register01;
      updateDisplay(number.output);
    } else {
      number.register01 = (number.register01 * 10) + input;
      number.output = number.register01;
      updateDisplay(number.output);
    }
  } else {
    if (number.register02 === 0) {
      number.register02 = input;
      number.output = number.register02;
      updateDisplay(number.output);
    } else if (number.register02 < 0) {
      number.register02 = (number.register02 * 10) - input;
      number.output = number.register02;
      updateDisplay(number.output);
    } else {
      number.register02 = (number.register02 * 10) + input;
      number.output = number.register02;
      updateDisplay(number.output);
    }
  }
  number.printAll();
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
  updateIsWholeBoolean();
  const stringified = String(number.output);
  number.output = Number(stringified.substring(0, stringified.length - 1));
  updateDisplay(number.output);

  number.printAll();
}

export function clearCurrentNumber() {
  number.output = 0;
  number.register01 = 0;
  number.register02 = 0;
  number.operator = undefined;
  number.isWhole = true;
  updateDisplay(number.output);
  number.printAll();
}

export function updateDisplay(value) {
  const display = document.querySelector('[data-func="display"]');
  const length = value.toString().replace('.', '').length;
  if (length > 10) {
    display.textContent = String(value.toFixed(10));
  } else {
    display.textContent = value.toString();
  }
}
