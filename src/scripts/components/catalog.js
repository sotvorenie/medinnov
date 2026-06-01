import {toggle} from 'slide-element';

// catalog scripts
document.addEventListener("DOMContentLoaded", () => {
    // catalog toggle more items
    const HEIGHT_TRESHOLD = 124;
    document.querySelectorAll('[data-category-more-list]').forEach(list => {
        list.querySelectorAll('[data-more-item="false"]').forEach(item => {
            item.dataset.moreItem = 'true'
        })

        const items = list.querySelectorAll('[data-more-item="true"]');
        let i = 0;

        while (i < items.length) {
            items[i].dataset.moreItem = 'false';

            if (list.offsetHeight > HEIGHT_TRESHOLD) {
                items[i].dataset.moreItem = 'true';
                break;   
            }

            i++;
        }
    });

    // catalog toggle more subsections
    document.querySelectorAll('[data-show-more]').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('_active');
            const parent = item.parentElement;
            parent.querySelectorAll('[data-more-item=true   ]').forEach(subitem => {
                toggle(subitem);
            });
        });
    });

    // catalog view
    document.querySelectorAll('[data-view]').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            document.querySelectorAll('[data-view]').forEach(item => {
                item.classList.remove('_current');
            });

            item.classList.add('_current');
            const view = item.getAttribute('data-view');
            const productList = document.querySelectorAll('[data-products-list]');
            productList.forEach(item => {
                item.dataset.productsList = view;
            })
            
        });
    });

    // data-accordeon-toggle
    document.querySelectorAll('[data-accordeon-toggle]').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('_active');
            const parent = item.parentElement;
            const content = parent.querySelector('[data-accordeon-content]');
            toggle(content);
            content.classList.toggle('_active');
        });
    });

    // data-toggle-action
    document.querySelectorAll('[data-toggle-action]').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('_active');
        });
    });

    // data toggle favorite
    document.querySelectorAll('[data-toggle-favorite]').forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                if (item.classList.contains('_active')) {
                    window.Fancybox.show([
                        {
                            src: '#js-modal-favorite-add',
                            type: 'inline',
                        },
                    ],
                    {
                        closeButton: true,
                        closeExisting: true,
                        dragToClose: false,
                        placeFocusBack: false,
                        tpl: {
                            closeButton:
                                '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="6.34383" y1="6.34294" x2="17.6575" y2="17.6567" stroke="currentColor" stroke-width="2"/><line x1="6.34367" y1="17.6569" x2="17.6574" y2="6.3432" stroke="currentColor" stroke-width="2"/></svg></button>'
                        },
                    })
                } else {
                    window.Fancybox.show([
                        {
                            src: '#js-modal-favorite-remove',
                            type: 'inline',
                        },
                    ],
                    {
                        closeButton: true,
                        closeExisting: true,
                        dragToClose: false,
                        placeFocusBack: false,
                        tpl: {
                            closeButton:
                                '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="6.34383" y1="6.34294" x2="17.6575" y2="17.6567" stroke="currentColor" stroke-width="2"/><line x1="6.34367" y1="17.6569" x2="17.6574" y2="6.3432" stroke="currentColor" stroke-width="2"/></svg></button>'
                        },
                    })
                }
            }, 500);
        });
    });

    // data-description-toggle
    document.querySelectorAll('[data-description-toggle]').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('_active');
            const parent = item.parentElement;
            const content = parent.querySelector('[data-description-content]');
            content.classList.toggle('_active');
        });
    });

    // show|hide filter 
    document.querySelectorAll('[data-show-filter]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('[data-filter]').classList.add('_open');
            // disable body scroll
            document.body.style.overflow = 'hidden';
        });
    });
    document.querySelectorAll('[data-hide-filter]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('[data-filter]').classList.remove('_open');
            // enable body scroll
            document.body.style.overflow = 'auto';
        });
    });

    // form reset
    document.querySelectorAll('[data-form-reset]').forEach(item => {
        item.addEventListener('click', () => {
            const form = item.closest('form');

            const input = form.querySelectorAll('input[type="text"], input[type="email"], textarea');

            input.forEach(item => {
                item.value = '';
            });

            const select = form.querySelectorAll('select');
            select.forEach(item => {
                item.value = '';
            });

            const checkbox = form.querySelectorAll('input[type="checkbox"]');
            checkbox.forEach(item => {
                item.checked = false;
            });

            const radio = form.querySelectorAll('input[type="radio"]');
            radio.forEach(item => {
                item.checked = false;
            });
        });
    });
})