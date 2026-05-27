'use strict';

import _ from 'lodash'
import { adaptive } from './main/_adaptive'
import { MaskInput } from "maska"
import './main/_swiper'
import './main/_fancyapps'
import './main/_forms'

// import 'mburger-webcomponent';
// import animateScrollTo from 'animated-scroll-to';
// import {up, down, toggle} from 'slide-element';
// import * as bootstrap from 'bootstrap'

// components
import './components/catalog';
import './components/actions.js';
import './components/range-slider'
import './components/products-slider'
import './components/producers-slider'
import './components/image-slider'
import './components/categories-slider'
import './components/blog-slider'
import './components/reviews-slider'
import './components/product-slider'
import './components/review'
import './components/design-slider'
import './components/service-producers-slider'
import './components/service-licenses-slider'
import './components/upload-images'
import './components/favorites'
import './components/basket'
import './components/profile'
import './components/special-offer-slider.js'

/* adaptive */
window.adaptive = adaptive;

/* LODASH */
window.lodash = window._ = _;

// maska
new MaskInput('[data-maska]');

/* TABS */
window.tabs = function (selector) {
    if (document.querySelector(selector) !== null) {
        const tabsList = document.querySelectorAll(selector);

        let currentTab = _.head(tabsList);

        _.each(tabsList, (item) => {

            if (item.classList.contains('_current')) {
                currentTab = item;
            }

            item.addEventListener('click', (event) => {
                event.preventDefault();

                _.each(tabsList, (sibling) => {
                    selectTabContent(sibling);
                });

                item.classList.add('_current');
                selectTabContent(item, true);
            });
        });

        selectTabContent(currentTab, true);
    }
};
window.selectTabContent = function(item, show = false) {
    const tabContent = document.querySelector(item.getAttribute("href"));
    const tabHead = document.querySelector('[href="' + item.getAttribute("href") + '"]');
    const tabContentAddition = document.querySelectorAll('[data-tab-content-id="' + item.getAttribute("href") + '"]');

    if (!item.classList.contains('_current')) {
        item.classList.add('_current');
    }

    if (tabContent !== null) {
        if (show) {
            tabContent.classList.add('_current');
        } else {
            tabHead.classList.remove('_current');
            tabContent.classList.remove('_current');
        }
    }

    _.each(tabContentAddition, (subitem) => {
        if (show) {
            subitem.classList.add('_current');
        } else {
            subitem.classList.remove('_current');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // tables upd
    document.querySelectorAll('table').forEach(table => {
        // wrap table
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-wrapper');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });

    // footer tab
    document.querySelectorAll('[data-footer-tab]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('[data-footer-tab]').forEach(item => {
                item.classList.remove('_active');
                const tabId = item.dataset.footerTab;
                document.getElementById(tabId).classList.remove('_active');
            });

            item.classList.add('_active');
            const tabId = item.dataset.footerTab;
            document.getElementById(tabId).classList.add('_active');

            return false;
        });
    });

    // tabs
    window.tabs('[data-tab="product"]');
    window.tabs('[data-tab="index-1"]');
    window.tabs('[data-tab="index-2"]');
    window.tabs('[data-tab="blog"]');
    window.tabs('[data-tab="order-recipient"]');
    window.tabs('[data-tab="order-pay-method"]');

    // show|hide mobile menu 
    document.querySelectorAll('[data-menu-btn]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('[data-menu]').classList.add('_open');
            // disable body scroll
            document.body.style.overflow = 'hidden';
        });
    });
    document.querySelectorAll('[data-hide-menu]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('[data-menu]').classList.remove('_open');
            // enable body scroll
            document.body.style.overflow = 'auto';
        });
    });

    // data-city-filter 
    document.querySelectorAll('[data-city-filter]').forEach(item => {
        item.addEventListener('input', (event) => {
            const value = _.lowerCase(event.target.value);
            document.querySelectorAll('[data-city]').forEach(city => {
                const cityValue = _.lowerCase(city.dataset.city);
                if (cityValue.includes(value)) {
                    city.classList.remove('d-none');
                } else {
                    city.classList.add('d-none');
                }
            });
        });
    });
    document.querySelectorAll('[data-city-filter-reset]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('[data-city-filter]').forEach(item => {
                item.value = '';
            });
            document.querySelectorAll('[data-city]').forEach(city => {
                city.classList.remove('d-none');
            });
        });
    });

    // delete item 
    document.querySelectorAll('[data-delete-item]').forEach(item => {
        const triger = item.querySelector('[data-delete-trigger]');

        if (!!triger) {
            triger.addEventListener('click', () => {
                item.remove();
            });
        }
    });

    // spinner counter
    const buyCounts = document.querySelectorAll("[data-buy-count]")
    _.each(buyCounts, (item) => {
        const parentCount = item.parentElement;
        const minusCount = parentCount.querySelector("[data-buy-minus]");
        const plusCount = parentCount.querySelector("[data-buy-plus]");

        minusCount.addEventListener("click" , () => {
            item.stepDown()
        })
        plusCount.addEventListener("click" , () => {
            item.stepUp()
        })
    });

    // data vote
    document.querySelectorAll('[data-vote]').forEach(item => {
        const vote = item.querySelector('[data-vote-value]')
        const voteUp = item.querySelector('[data-vote-up]')
        const voteDown = item.querySelector('[data-vote-down]')

        let value = _.toNumber(vote.dataset.voteValue)

        voteUp.addEventListener('click', () => {
            vote.dataset.voteValue = ++value

            voteUp.classList.add('_active')
            voteDown.classList.remove('_active')

            voteValue(vote)
        })
        voteDown.addEventListener('click', () => {
            vote.dataset.voteValue = --value

            voteUp.classList.remove('_active')
            voteDown.classList.add('_active')

            voteValue(vote)
        })

        voteValue(vote)
    })

    function voteValue(vote) {
        let value = _.toNumber(vote.dataset.voteValue)

        vote.classList.remove('_negative')
        vote.classList.remove('_positive')

        if (value > 0) {
            vote.classList.add('_positive')
        } else if (value < 0) {
            vote.classList.add('_negative')
        }

        vote.innerHTML =  (value > 0 ? '+' : '') + value
    }

    // inline video rutube
    document.querySelectorAll('[data-inline-rutube]').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('_active');

            const iframe = item.querySelector('iframe');

            iframe.contentWindow.postMessage(JSON.stringify({
                type: 'player:play',
                data: {}
            }), '*');
        });
    })
});

// select city
document.addEventListener("DOMContentLoaded", () => {
    const selectCity = document.querySelectorAll('[data-city]')

    _.each(selectCity, item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('[data-city]').forEach(city => {
                city.classList.remove('_active')
            });
            item.classList.add('_active')

            const selectCityValue = document.querySelectorAll('[data-location-name]')

            _.each(selectCityValue, itemValue => {
                itemValue.innerHTML = item.dataset.city
            })

            window.Fancybox.close()
        })
    })
})

// toggle content block show more
document.addEventListener("DOMContentLoaded", () => {
    const showContent = document.querySelectorAll('[data-show-content-block]')

    _.each(showContent, item => {
        // if content height more than 40px
        if (item.offsetHeight > 36) {
            // wrap content
            const wrapContent = document.createElement('div')
            wrapContent.classList.add('wrap-content')
            wrapContent.innerHTML = item.innerHTML
            item.innerHTML = ''
            item.appendChild(wrapContent)

            // show more
            const showMore = document.createElement('button')
            showMore.classList.add('btn', 'btn_bordered', 'btn_sm', 'show-more')

            const showMoreTextShow = document.createElement('span')
            showMoreTextShow.dataset.textShow='Читать полностью'
            showMoreTextShow.innerHTML = 'Читать полностью'
            showMore.appendChild(showMoreTextShow)

            const hideMoreTextShow = document.createElement('span')
            hideMoreTextShow.dataset.textHide='Скрыть описание'
            hideMoreTextShow.innerHTML = 'Скрыть описание'
            showMore.appendChild(hideMoreTextShow)
            
            showMore.addEventListener('click', () => {
                showMore.classList.toggle('_active')
                wrapContent.classList.toggle('_active')
            })

            item.appendChild(showMore)
        }
    })
})