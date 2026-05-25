document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'image-slider';
    const sliderSetings = {
        init: true,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        centeredSlides: false,
        effect: 'fade',
        freeMode: false,
        // longSwipes: false,
        loopedSlides: 1,
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
            el: '.pagination',
        },
        pauseOnMouseEnter: true,
        preloadImages: true,
        roundLengths: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: false,
        containerModifierClass: sliderName + '_',
        wrapperClass: sliderName + '__wrapper',
        slideClass: sliderName + '__item',
        slideActiveClass: sliderName + '__item_active',
        slideDuplicateActiveClass: sliderName + '__item_duplicate_active',
        slideVisibleClass: sliderName + '__item_visible',
        slideDuplicateClass: sliderName + '__item_duplicate',
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