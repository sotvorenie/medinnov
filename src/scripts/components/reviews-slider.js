// producers-slider
document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'reviews-slider';
    const sliderSetings = {
        init: true,
        loop: true,
        autoplay: false,
        centeredSlides: true,
        effect: 'slide',
        freeMode: false,
        slidesPerView: 1.2,
        longSwipes: false,
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
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 20
            }
        }
    };

    window.slider('.js-' + sliderName, sliderSetings);
});