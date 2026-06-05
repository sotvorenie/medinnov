'use strict'

import { Fancybox } from '@fancyapps/ui'

window.Fancybox = window.fancybox = Fancybox

Fancybox.bind('[data-fancybox]', {
    closeButton: true,
    closeExisting: true,
    dragToClose: false,
    placeFocusBack: false,
    tpl: {
        closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="6.34383" y1="6.34294" x2="17.6575" y2="17.6567" stroke="currentColor" stroke-width="2"/><line x1="6.34367" y1="17.6569" x2="17.6574" y2="6.3432" stroke="currentColor" stroke-width="2"/></svg></button>'
    },
})
