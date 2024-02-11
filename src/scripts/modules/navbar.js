'use strict';

import { pinNav } from './animations';

const header = document.querySelector('#header');

/* //add the class to the header based on the size of the VP
const dynamicClass = () => {
  if (innerWidth < 640) {
    header.setAttribute('class', 'animateHeader');
  } else {
    header.removeAttribute('class', 'animateHeader');
  }
};

// add this class based on events also
func */

export const headerHero = () => {
  pinNav();
};
