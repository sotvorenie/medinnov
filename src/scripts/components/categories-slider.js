document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'categories-slider';
    const sliderSetings = {
        init: true,
        loop: false,
        autoplay: false,
        centeredSlides: false,
        effect: 'slide',
        freeMode: true,
        loopedSlides: 0,
        navigation: {
            nextEl: '.js-' + sliderName + '-next',
            prevEl: '.js-' + sliderName + '-prev',
            disabledClass: sliderName + '__action_disabled',
            lockClass: sliderName + '__action_lock'
        },
        pagination: false,
        pauseOnMouseEnter: true,
        preloadImages: true,
        roundLengths: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 16,
        thumbs: false,
        containerModifierClass: sliderName + '_',
        wrapperClass: sliderName + '__wrapper',
        slideClass: sliderName + '__item',
        slideActiveClass: sliderName + '__item_active',
        slideDuplicateActiveClass: sliderName + '__item_duplicate_active',
        slideVisibleClass: sliderName + '__item_visible',
        slideDuplicateClass: sliderName + '__item_duplicate',
        breakpoints: {
            [window.adaptive.XS]: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            [window.adaptive.SM]: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            [window.adaptive.MD]: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            [window.adaptive.LG]: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            [window.adaptive.XL]: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }
    };

    window.slider('.js-' + sliderName, sliderSetings);
});