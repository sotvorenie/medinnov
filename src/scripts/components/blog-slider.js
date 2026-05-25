// producers-slider
document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'blog-slider';
    const sliderSetings = {
        init: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        centeredSlides: false,
        effect: 'slide',
        freeMode: true,
        // longSwipes: false,
        loopedSlides: 6,
        navigation: {
            nextEl: '.js-' + sliderName + '-next',
            prevEl: '.js-' + sliderName + '-prev',
            disabledClass: '_disabled',
            lockClass: '_lock'
        },
        pagination: {
            bulletActiveClass: '_active',
            bulletClass: 'pagination__item',
            bulletElement: 'div',
            clickable: true,
            clickableClass: '_clickable',
            currentClass: '_current',
            el: '.js-' + sliderName + '-pagination',
        },
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
                spaceBetween: 8,
            },
            [window.adaptive.SM]: {
                spaceBetween: 12,
            },
            [window.adaptive.MD]: {
                spaceBetween: 16,
            },
            [window.adaptive.LG]: {
                spaceBetween: 24,
            },
            [window.adaptive.XL]: {
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