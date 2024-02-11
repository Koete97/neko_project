'use strict';

import { animateHideOverlay, animateShowOverlay } from './animations';
export const overlay = document.querySelector('#overlay');

// toggle overlay hidden classes and close mobileMenu functionality
export const toggleOverlay = () => {
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');

    animateShowOverlay();
  } else {
    animateHideOverlay();
  }
};
