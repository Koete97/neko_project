'use strict';

import { toggleOverlay, overlay } from './overlay';
import {
  animateOpeningMenu,
  animateClosingMenu,
  animateClosingBtn,
} from './animations';

// DOM elements
const hamburgerMenu = document.querySelector('#hamburger');
const menuWrapper = document.querySelector('#menu-wrapper');
const closeMenu = document.querySelector('#closeMenu');

// play with hidden class
export const toggleMenu = () => {
  if (menuWrapper.classList.contains('hidden')) {
    menuWrapper.classList.remove('hidden');
  } else {
    menuWrapper.classList.add('hidden');
  }
};

// open mobile menu
const openMobileMenu = () => {
  hamburgerMenu.addEventListener('click', () => {
    // show or hide menu
    toggleMenu();

    // animate mobile menu into VP
    animateOpeningMenu();

    // animate closing button
    animateClosingBtn(10, 45, 1, 0.7);

    // toggle overlay
    toggleOverlay();
  });
};

// close mobile menu
const closeMobileMenu = () => {
  closeMenu.addEventListener('click', () => {
    // animation
    animateClosingMenu();

    // animate closing button
    animateClosingBtn(45, 10, 0.4, 0);

    // toggle overlay
    toggleOverlay();
  });
};

export const hamburgerEvents = () => {
  // open menu
  openMobileMenu();

  // close menu
  closeMobileMenu();

  //overlay clicks
  overlay.addEventListener('click', () => {
    if (!menuWrapper.classList.contains('hidden')) {
      animateClosingMenu();

      toggleOverlay();
    }
  });

  // mobile menu links clicks
};
