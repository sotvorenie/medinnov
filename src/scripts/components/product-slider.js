document.addEventListener("DOMContentLoaded", () => {
    const sliderName = 'product-main-slider';
    const sliderSetings = {
        init: true,
        loop: false,
        autoplay:  false,
        centeredSlides: false,
        effect: 'fade',
        freeMode: false,
        longSwipes: false,
        loopedSlides: 0,
        navigation: {
            nextEl: '.js-image-slider-next',
            prevEl: '.js-image-slider-prev',
            disabledClass: sliderName + '__action_disabled',
            lockClass: sliderName + '__action_lock'
        },

        pagination: false,
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
        breakpoints: {
            [window.adaptive.SM]: { slidesPerView: 1 },
            [window.adaptive.MD]: { slidesPerView: 1 },
            [window.adaptive.LG]: { slidesPerView: 1 },
            [window.adaptive.XL]: { slidesPerView: 1 },
            [window.adaptive.XXL]: { slidesPerView: 1 },
        }
    };

    const productSlider = window.slider('.js-' + sliderName, sliderSetings);

    const sliderThumbsName = 'product-thumbs-slider';
    const sliderThumbsSetings = {
        init: false,
        loop: false,
        autoplay: false,
        centeredSlides: false,
        direction: "vertical",
        effect: 'slide',
        freeMode: false,
        longSwipes: false,
        loopedSlides: 0,
        mousewheel: true,
        navigation: {
            nextEl: '.js-' + sliderThumbsName + '-next',
            prevEl: '.js-' + sliderThumbsName + '-prev',
            disabledClass: sliderThumbsName + '__action_disabled',
            lockClass: sliderThumbsName + '__action_lock'
        },
        pagination: false,
        pauseOnMouseEnter: true,
        preloadImages: true,
        roundLengths: true,
        speed: 800,
        slidesPerView: 'auto',
        spaceBetween: 10,
        thumbs: false,
        watchSlidesProgress: true,
        containerModifierClass: sliderThumbsName + '_',
        wrapperClass: sliderThumbsName + '__wrapper',
        slideClass: sliderThumbsName + '__item',
        slideActiveClass: sliderThumbsName + '__item_active',
        slideDuplicateActiveClass: sliderThumbsName + '__item_duplicate_active',
        slideVisibleClass: sliderThumbsName + '__item_visible',
        slideDuplicateClass: sliderThumbsName + '__item_duplicate',
    };

    const productThumbs = window.slider('.js-' + sliderThumbsName, sliderThumbsSetings);
    if (document.querySelector('.js-' + sliderThumbsName) !== null) {
        productThumbs.on('afterInit', function (slider) {
            const parentWr = slider.wrapperEl;
            const linksThumbs = parentWr.querySelectorAll("[data-thumb-slider]");

            _.each(linksThumbs, (item, index) => {
                item.addEventListener('click', () => {
                    productSlider.slideTo(index);
                });
            });
        });

        productThumbs.init();
    }
    if (document.querySelector('.js-' + sliderName) !== null && document.querySelector('.js-' + sliderThumbsName) !== null) {
        productSlider.on('slideChange', function(slider) {
            const indexSlide = slider.activeIndex;
            if (productThumbs.activeIndex !== indexSlide) {
                productThumbs.slideTo(indexSlide);
            }
            _.each(productThumbs.slides, (item, index) => {
                item.classList.remove("_current");
                if (index === indexSlide) {
                    item.classList.add("_current");
                }
            });
        });

        productThumbs.on('slideChange', function(slider) {
            const indexSlide = slider.activeIndex;
            if (productSlider.activeIndex !== indexSlide) {
                productSlider.slideTo(indexSlide);
            }
        });
    }
});