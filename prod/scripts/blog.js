'use strict';

import { animateNavbar } from '../animations/animations.js';
import { slideButton, mobileNightMode } from './nightmode.js';
import { navLinkSwitcher } from './navlinks.js';
import { blogPosts } from '../data/data.js';

//NIGHT MODE
const sliderEl = document.querySelector('#slider');
const mobileModeSwitch = document.querySelector('#mode-switcher');

sliderEl.addEventListener('click', () => {
  slideButton();
});

mobileModeSwitch.addEventListener('click', () => {
  mobileNightMode();
});

// NAV LINKS
// navbar animate
animateNavbar();
navLinkSwitcher(1);

// BLOG POSTS
const topStories = document.querySelector('#recent-cards');
const moreStories = document.querySelector('#top-cards');
const postDisplay = document.querySelector('#view-post');

let topStoriesHTML = '';
let moreStoriesHTML = '';
let displayPostHTML = '';

const handleTopStories = (post, index) => {
  if (!index || index === 1) {
    topStoriesHTML += `
    <a href="#articles" class="flex flex-col space-y-10">
      <div
        class="blog-post space-y-10 w-52 h-60 rounded-md cursor-pointer"
      >
        <img
          src="${post.image}"
          height="320px"
          width="320px"
          alt=""
          class="w-80 h-80 object-cover rounded-sm"
        />

        <div class="space-y-2">
          <h1 class="line-clamp-1 text-xl ml-12 font-semibold">
            ${post.heading}
          </h1>
        </div>
      </div>
    </a>
    `;
  }

  topStories.innerHTML = topStoriesHTML;
};

const handleMoreStories = (post, index) => {
  if (index !== 0 && index !== 1) {
    moreStoriesHTML += `
    <a href="#articles" class="flex flex-col space-y-4">
      <div class="blog-post space-y-10 w-36 h-80 rounded-md cursor-pointer">
        <img
          src="${post.image}"
          height="320px"
          width="144px"
          alt=""
          class="w-60 h-80"
        />
  
        <div class="space-y-2">
          <h1 class="line-clamp-1 text-xs font-semibold">
            ${post.heading}
          </h1>
        </div>
      </div>
    </a>
    `;
  }

  moreStories.innerHTML = moreStoriesHTML;
};

const handleDisplayPost = (x) => {
  displayPostHTML = `
    <div id="articles" class="scroll-m-10">
      <h1 class="text-center text-2xl mb-6 text-accents">${blogPosts[x].heading}</h1>

      <div>
        <div class="xs:w-3/5 h-60 w-96 xs:mr-4 mb-4">
        <p
          class=""
        >
          <img
            src="${blogPosts[x].image}"
            height="200px"
            width="600px"
            alt=""
            class="w-96 h-[200] xs:h-[200px] object-cover rounded-lg shadow"
          />
        </div>

        
          ${blogPosts[x].body}
        </p>
      </div>
    </div>
  `;

  postDisplay.innerHTML = displayPostHTML;
};

blogPosts.forEach((post, index) => {
  handleTopStories(post, index);

  handleMoreStories(post, index);
});

// display the first post if not yet clicked a post

// select all the possible available posts to handle the click events
const posts = document.querySelectorAll('.blog-post');

posts.forEach((post, index) => {
  if (!index) {
    handleDisplayPost(index);
  }

  post.addEventListener('click', () => {
    for (let i = 0; i < posts.length; i++) {
      posts[i].classList.remove('border-accents');

      if (index === i) {
        posts[i].classList.add('border-accents');

        handleDisplayPost(i);
      }
    }
  });
});

// footer auto update the year
const yearEl = document.querySelector('.year');

const year = new Date().getFullYear();
yearEl.innerText = year;
