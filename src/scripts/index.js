'use strict';

// CUSTOM MODULES
import { hamburgerEvents } from './modules/mobileMenu';
import { headerHero } from './modules/navbar';
import { displayCharts } from './modules/charts';

// anything to do with hero and nAV
headerHero();

// anything triggered by the press of a hamburger Menu
hamburgerEvents();

// anything controlling charts
// displayCharts();
