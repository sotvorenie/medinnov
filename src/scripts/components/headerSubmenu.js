document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.header-menu__item._dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (e.target.closest('.header-menu__item._dropdown')) {
                dropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('_open')
                })

                dropdown.classList.toggle('_open')
                e.stopPropagation()
            }
        })
    })

    document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('_open'))
    })
})