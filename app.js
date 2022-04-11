'use strict';

import { constructInterface } from './modules/calculator/interface.mjs'
import { wireButtons } from './modules/calculator/events.mjs';
import { number, updateDisplay } from './modules/calculator/logic.mjs';

document.addEventListener('DOMContentLoaded', () => {
  constructInterface();
  updateDisplay(number.output)
  wireButtons();
});
