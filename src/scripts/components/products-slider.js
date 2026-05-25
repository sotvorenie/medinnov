document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'products-slider';
    const sliderSetings = {
        init: true,
        loop: false,
        autoplay: false,
        centeredSlides: false,
        effect: 'slide',
        freeMode: true,
        // longSwipes: false,
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
        slidesPerView: 2,
        spaceBetween: 20,
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
                slidesPerView: 2,
                spaceBetween: 20,
            },
            [window.adaptive.SM]: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            [window.adaptive.MD]: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            [window.adaptive.LG]: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            [window.adaptive.XL]: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        },
        // on: {
        //     afterInit: function(swiper) {
        //         const $slider = swiper.el;
        //         const $sliderActions = $slider.querySelector('.' + sliderName + '__actions');
                
        //         $slider.parentNode.appendChild($sliderActions);
        //     }
        // }
    };

    window.slider('.js-' + sliderName, sliderSetings);
});