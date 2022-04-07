// import { updateDisplay } from './interface.mjs';

const displayValue = { number: 0 }


function fromLogicToInterface(value) {
  updateDisplay(value);
}

function root(formula) {

}

// EXPORTS ---------------------------------------------------------------------

export function numberInput(value) {
  fromLogicToInterface(value);
}

// HELPERS ---------------------------------------------------------------------
function increment(value) {
  return value * 10;
}

function decrement(value) {
  return value / 10;
}
