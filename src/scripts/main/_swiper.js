'use strict'

//swiper
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Controller, EffectFade, Grid, Mousewheel, Scrollbar, FreeMode } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay, Controller, EffectFade, Grid, Mousewheel, Scrollbar, FreeMode ]);

window.slider = window.swiper = function (sliderSelector, sliderSettings = {}) {
    if (document.querySelector(sliderSelector) !== null) {
        let slider = new Swiper(sliderSelector, sliderSettings);
        return slider;
    }
};

// document.addEventListener("DOMContentLoaded", () => {
// const sliderName = 'test-slider';
// const sliderSetings1 = {
//     init: false,
//     loop: true,
//     autoplay: {
//         delay: 10000
//     },
//     centeredSlides: true,
//     effect: 'slide',
//     freeMode: false,
//     longSwipes: false,
//     loopedSlides: 2,
//     navigation: {
//         nextEl: '.js-' + sliderName + '-next',
//         prevEl: '.js-' + sliderName + '-prev',
//         disabledClass: 'disabled'
//     },
//     pagination: false,
//     pauseOnMouseEnter: true,
//     preloadImages: true,
//     roundLengths: true,
//     speed: 800,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     containerModifierClass: sliderName + '_',
//     wrapperClass: sliderName + '__wrapper',
//     slideClass: sliderName + '__item',
//     slideActiveClass: sliderName + '__item_active',
//     slideDuplicateActiveClass: sliderName + '__item_duplicate_active',
//     slideVisibleClass: sliderName + '__item_visible',
//     slideDuplicateClass: sliderName + '__item_duplicate',
//     breakpoints: {
//         [window.adaptive.SM]: {
//             slidesPerView: 'auto',
//             spaceBetween: 26
//         },
//         [window.adaptive.MD]: {
//             slidesPerView: 'auto',
//             spaceBetween: 30
//         },
//         [window.adaptive.LG]: {
//             slidesPerView: 'auto'
//         },
//         [window.adaptive.XL]: {
//             spaceBetween: 30,
//             effect: 'fade',
//             fadeEffect: {
//                 crossFade: true
//             },
//             slidesPerView: 1
//         },
//     }
// };
// const sliderSetings2 = {
//     init: false,
//     loop: true,
//     autoplay: {
//         delay: 10000
//     },
//     centeredSlides: true,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     freeMode: false,
//     longSwipes: false,
//     loopedSlides: 0,
//     navigation: {
//         nextEl: '.js-' + sliderName + '-next',
//         prevEl: '.js-' + sliderName + '-prev',
//         disabledClass: 'disabled'
//     },
//     pagination: false,
//     pauseOnMouseEnter: true,
//     preloadImages: true,
//     roundLengths: true,
//     speed: 300,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     containerModifierClass: sliderName + '_',
//     wrapperClass: sliderName + '__wrapper',
//     slideClass: sliderName + '__item',
//     slideActiveClass: sliderName + '__item_active',
//     slideDuplicateActiveClass: sliderName + '__item_duplicate_active',
//     slideVisibleClass: sliderName + '__item_visible',
//     slideDuplicateClass: sliderName + '__item_duplicate',
//     breakpoints: {
//         [window.adaptive.SM]: {
//             spaceBetween: 26,
//             slidesPerView: 1
//         },
//         [window.adaptive.MD]: {
//             spaceBetween: 30,
//             slidesPerView: 1
//         },
//         [window.adaptive.LG]: {
//             slidesPerView: 1
//         },
//         [window.adaptive.XL]: {
//             spaceBetween: 30,
//             slidesPerView: 1
//         },
//     }
// };

// let testSlider;

// const breakpoint = window.matchMedia('(min-width:1200px)');

// const breakpointChecker = function () {
//     if (testSlider !== undefined) testSlider.destroy(true, true);
//     if (breakpoint.matches === true) {
//         testSlider = window.slider('.js-' + sliderName, sliderSetings2);
//     } else if (breakpoint.matches === false) {
//         testSlider = window.slider('.js-' + sliderName, sliderSetings1);
//     }
//     testSlider.init();
// };

// breakpoint.addListener(breakpointChecker);

// breakpointChecker();
// });