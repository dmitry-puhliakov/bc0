'use strict';
/* eslint-disable */
const { data } = require('./data.js');

const reviewsList = document.querySelector('.reviews__list');

data.forEach(element => {
  reviewsList.innerHTML += `
    <li class="splide__slide">
      <div class="review">
        <div class="review__content">
          <div class="review__header">
            <div class="review__name">
              ${element.name}
            </div>

            <div class="review__quotes"></div>
          </div>

          <div class="review__text">
            ${element.text.reduce((paragraph, curText) => (
              paragraph + `<p class="review__paragraph">
                ${curText}
              </p>`
            ), '')}
            
          </div>
        </div>
      </div>
    </li>
  `;
});

new Splide(".splide", {
  trimSpace: false,
  autoplay: true,

  padding: {
    right: "26.6%",
  },

  breakpoints: {
    768: {
      padding: false,
    }
  },

  classes: {
    arrows: "splide__arrows reviews__arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },

  pagination: false,
}).mount();
