document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'service-licenses-slider';
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
            disabledClass: '_disabled',
            lockClass: sliderName + '__action_lock'
        },
        pagination: false,
        pauseOnMouseEnter: true,
        preloadImages: true,
        roundLengths: true,
        speed: 800,
        slidesPerView: 'auto',
        spaceBetween: 8,
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
                slidesPerView: 'auto',
                spaceBetween: 8,
            },
            [window.adaptive.SM]: {
                slidesPerView: 'auto',
                spaceBetween: 8,
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
                slidesPerView: 4,
                spaceBetween: 40,
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