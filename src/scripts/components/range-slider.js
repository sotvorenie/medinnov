import noUiSlider from 'nouislider';

document.addEventListener("DOMContentLoaded", () => {
    const rangeSliders = document.querySelectorAll("[data-range-slider]");
    let eventChange = new Event('change');

    _.each(rangeSliders, (item) => {
        const rangeParent = item.parentElement;

        const startInput = rangeParent.querySelector('[data-start-input]');
        const endInput = rangeParent.querySelector('[data-end-input]');    
        
        const itemSlider = noUiSlider.create(item, {
            start: [_.round(_.toFinite(item.dataset.rangeStart), 2), _.round(_.toFinite(item.dataset.rangeFinish), 2)],
            connect: true,
            step: _.toFinite(item.dataset.rangeStep),
            range: {
                'min': _.round(_.toFinite(item.dataset.rangeMin), 2),
                'max': _.round(_.toFinite(item.dataset.rangeMax), 2)
            },
            // tooltips: true,
        });

        itemSlider.on('update', function (values, handle, unencoded) {
            if (!_.isNull(startInput) && !_.isNull(endInput)) {
                startInput.value = _.round(_.toFinite(unencoded[0]), 2)
                endInput.value = _.round(_.toFinite(unencoded[1]), 2)
            }
        });
        itemSlider.on('set', function (values, handle, unencoded) {
            if (handle === 0 ) {
                startInput.dispatchEvent(eventChange);
            } else {
                endInput.dispatchEvent(eventChange);
            }
        });

        if (!_.isNull(startInput) && !_.isNull(endInput)) {

            startInput.value = _.toFinite(item.dataset.rangeStart)
            startInput.addEventListener('keyup', () => {
                itemSlider.set([_.round(_.toFinite(startInput.value), 2), null], true, true);
            });

            endInput.value = _.toFinite(item.dataset.rangeFinish)
            endInput.addEventListener('keyup', () => {
                itemSlider.set([null, _.round(_.toFinite(endInput.value), 2)], true, true);
            });
        }
    });
});