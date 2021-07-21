'use strict';

// eslint-disable-next-line
new Splide('.splide', {
  trimSpace: false,
  autoplay: true,

  padding: {
    right: '26.6%',
  },

  classes: {
    arrows: 'splide__arrows reviews__arrows',
    arrow: 'splide__arrow your-class-arrow',
    prev: 'splide__arrow--prev your-class-prev',
    next: 'splide__arrow--next your-class-next',
  },

  pagination: false,
}).mount();
