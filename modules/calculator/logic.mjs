// import { updateDisplay } from './interface.mjs';

export const number = {
  result: 0,
  saved: 0,
  current: 0,
  operator: '',
  isWhole: true,
  decimalPlace: 10,
  string: function() {
    return this.current.toString();
  }
}

export function modulo() {
  return number.saved %= number.current;
}

export function division() {
  return number.saved /= number.current;
}

export function multiplication() {
  return number.saved *= number.current;
}

export function subtraction() {
  return number.saved -= number.current;
}

export function addition() {
  return number.saved += number.current;
}

export function factorial() {
}

export function exponential() {

}

export function root() {

}

export function invert() { return number.current * -1; }

export function runOperation() {
  (number.operator === 'modulo') && modulo();
  (number.operator === 'division') && division();
  (number.operator === 'multiplication') && multiplication();
  (number.operator === 'subtraction') && subtraction();
  (number.operator === 'addition') && addition();
  // updateDisplay();
}

// HELPERS ---------------------------------------------------------------------
function updateNumberIsWholeBoolean() {
  if (!number.isWhole) {
    number.decimalPlace = number.decimalPlace / 10;
    if (number.decimalPlace / 10 === 1) number.isWhole = true;
  }
}

export function updateIntegerWith(input) {
  if (number.current === 0) {
    return input;
  } else if (number.current < 0) {
    return number.current = (number.current * 10) - input;
  } else {
    return number.current = (number.current * 10) + input;
  }
}

export function updateDecimalWith(input) {
  if (number.current === 0) {
    return input / number.decimalPlace;
  } else if (number.current < 0) {
    const val = number.current - (input / number.decimalPlace);
    const valProperlyRounded = Math.round((val) * number.decimalPlace) / number.decimalPlace;
    number.decimalPlace *= 10;
    return valProperlyRounded
  } else {
    const val = number.current + (input / number.decimalPlace);
    const valProperlyRounded = Math.round((val) * number.decimalPlace) / number.decimalPlace;
    number.decimalPlace *= 10;
    return valProperlyRounded
  }
}

export function removeLastDigit() {
  updateNumberIsWholeBoolean();
  return Number(number.string().substring(0, number.current.length - 1));
}

export function clearCurrentNumber() {
  number.current = 0;
  number.isWhole = true;
}
