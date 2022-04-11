export const number = {
  register01: 0,
  register02: 0,
  output: 0,
  operator: undefined,
  isWhole: true,
  decimalPlace: 10,
  string: function () {
    return this.output.toString();
  },
  all: function () {
    console.log(
      'output: ' + this.output + "\n" +
      'register01: ' + this.register01 + "\n" +
      'register02: ' + this.register02 + "\n" +
      'operator: ' + this.operator + "\n" +
      'isWhole: ' + this.isWhole  + "\n" +
      'decimalPlace: ' + this.decimalPlace + "\n"
      );
  },
};

export function modulo() {
  return number.output %= number.register01;
}

export function division() {
  return number.output /= number.register01;
}

export function multiplication() {
  return number.output *= number.register01;
}

export function subtraction() {
  return number.output -= number.register01;
}

export function addition() {
  number.output += number.register01;
  updateDisplay(number.output);
  number.all();
}

export function factorial() {
}

export function exponential() {

}

export function root() {

}

export function invert() {
  return number.register01 * -1;
}

export function runOperation() {
  (number.operator === 'modulo') && modulo();
  (number.operator === 'division') && division();
  (number.operator === 'multiplication') && multiplication();
  (number.operator === 'subtraction') && subtraction();
  (number.operator === 'addition') && addition();
  number.register02 = 0;
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
  number.all();
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
  number.output = Number(number.string().substring(0, number.string().length - 1));
  updateDisplay(number.output);
  console.log(number.output);
}

export function clearCurrentNumber() {
  number.output = 0;
  number['1stRegister'] = 0;
  number.isWhole = true;
  updateDisplay(number.output);
}

export function updateDisplay(value) {
  const display = document.querySelector('[data-func="display"]');
  display.textContent = value.toString();
}
