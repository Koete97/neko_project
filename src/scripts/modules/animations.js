'use strict';

//GSAP
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

// CUSTOM MODULES
import { overlay } from './overlay';
import { toggleMenu } from './mobileMenu';

/////////////////////////////////////
export const pinNav = () => {
  ScrollTrigger.create({
    trigger: '#header',
    start: 'top top',
    endTrigger: '#hero',
    end: 'bottom top',
    scrub: 4,
    pin: '#header',
    pinSpacing: false,
    /* markers: {
      startColor: 'green',
      endColor: 'red',
      fontSize: '12px',
      fontWeight: 'regular',
      indent: 20,
    }, */
  });
};

/////////////////////////////////////
// MOBILE MENU
// animate opening mobile menu
export const animateOpeningMenu = () => {
  gsap.fromTo(
    '#mobile-menu',
    { x: '100%' },
    { x: 0, duration: 1, ease: 'Power2.easeIn' }
  );
};

// animate closing mobile menu
export const animateClosingMenu = () => {
  // create timeline
  const t1 = gsap.timeline();

  t1.fromTo(
    '#mobile-menu',
    { x: 0 },
    { x: '100%', duration: 1, ease: 'Power2.easeOut' }
  ).then(toggleMenu);
};

// animate closing button bars
export const animateClosingBtn = (angle1, angle2, time, delay) => {
  const t3 = gsap.timeline({ delay: delay, ease: 'Power4.easeIn' });

  t3.fromTo('.bar-1', { rotate: angle1 }, { rotate: angle2, duration: time });
  t3.fromTo(
    '.bar-2',
    { rotate: -1 * angle1 },
    { rotate: -1 * angle2, duration: time },
    '-=1'
  );
};

/////////////////////////////////////
// OVERLAY
// animate inwards overlay
export const animateShowOverlay = () => {
  const t2 = gsap.timeline({ delay: 0.2 });

  t2.fromTo(
    '#overlay',
    { opacity: 0 },
    { opacity: 0.25, duration: 1, ease: 'Power2.easeIn' }
  );

  t2.fromTo(
    '#overlay',
    { filter: 'blur(0px)' },
    { filter: 'blur(5px)', duration: 0.2 }
  );
};

// animate outwards overlay
export const animateHideOverlay = () => {
  const t2 = gsap.timeline();

  t2.fromTo(
    '#overlay',
    { opacity: 0.25 },
    { opacity: 0, duration: 1.3, ease: 'Power2.easeIn' }
  ).then(addHiddenClass);

  function addHiddenClass() {
    overlay.classList.add('hidden');
  }
};

// ScrollTrigger.matchMedia({
//   '(max-width:640px)': function () {},
// });
