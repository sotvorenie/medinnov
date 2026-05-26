document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'special-offer-slider';
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
        pagination: {
            bulletActiveClass: '_active',
            bulletClass: 'pagination__item',
            bulletElement: 'div',
            clickable: true,
            clickableClass: '_clickable',
            currentClass: '_current',
            el: '.special-offer__pagination',
        },
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
                spaceBetween: 16,
            },
            [window.adaptive.LG]: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            [window.adaptive.XL]: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        }
    };

    window.slider('.js-' + sliderName, sliderSetings);
});