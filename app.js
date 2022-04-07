'use strict';

import { runInterface } from './modules/calculator/interface.mjs'
import { runEvents } from './modules/calculator/events.mjs';

document.addEventListener('DOMContentLoaded', () => {
  runInterface();
  runEvents();
});
