document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'blog-detail-slider';

    const sliderSetings = {
        init: true,
        loop: true,
        centeredSlides: false,
        effect: 'slide',
        loopedSlides: 3,
        navigation: {
            nextEl: '.js-' + sliderName + '-next',
            prevEl: '.js-' + sliderName + '-prev',
            disabledClass: '_disabled',
            lockClass: '_lock'
        },
        pagination: false,
        pauseOnMouseEnter: true,
        preloadImages: true,
        roundLengths: true,
        speed: 800,
        slidesPerView: 1,
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
                slidesPerView: 1,
            },
            [window.adaptive.SM]: {
                spaceBetween: 12,
                slidesPerView: 2,
            },
            [window.adaptive.MD]: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            [window.adaptive.LG]: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            [window.adaptive.XL]: {
                slidesPerView: 3,
                spaceBetween: 40
            },
        },
    };

    window.slider('.js-' + sliderName, sliderSetings);

    const btnToUp = document.querySelector('.blog-detail__to-up')
    if (btnToUp) {
        btnToUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
});