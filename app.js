'use strict';

import { constructInterface } from './modules/calculator/interface.mjs';
import { wireButtons } from './modules/calculator/events.mjs';

document.addEventListener('DOMContentLoaded', () => {
  constructInterface();
  wireButtons();
});
