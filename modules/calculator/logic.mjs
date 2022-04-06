import { updateDisplay } from './interface.mjs';

const currentValues = {
  firstNumber: null,
  operator: null,
  secondNumber: null
};

export function interfaceToLogic(value) {
  return value;
}

export function logicToInterface(interfaceToLogic) {
  updateDisplay(interfaceToLogic);
}

//

function root(formula) {

}


// HELPERS ---------------------------------------------------------------------
