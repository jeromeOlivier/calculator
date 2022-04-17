'use strict';

import { constructInterface } from './modules/interface.mjs';
import { wireButtons } from './modules/events.mjs';

document.addEventListener('DOMContentLoaded', () => {
  constructInterface();
  wireButtons();
});
