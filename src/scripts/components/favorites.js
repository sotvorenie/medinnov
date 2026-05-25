document.addEventListener("DOMContentLoaded", () => {
    const favoritesSelectAllCheckbox = document.querySelector('.js-favorites-select-all-checkbox input')
    const favoritesSingleCheckboxes = document.querySelectorAll('.js-favorites-single-checkbox input')

    if(favoritesSelectAllCheckbox) {
        favoritesSelectAllCheckbox.onchange = () => {
            favoritesSelectAllCheckbox.checked ? selectAll() : unselectAll()
        }
    }

    function selectAll() {
        favoritesSingleCheckboxes.forEach(checkbox => checkbox.checked = true)
    }

    function unselectAll() {
        favoritesSingleCheckboxes.forEach(checkbox => checkbox.checked = false)
    }

    if (favoritesSingleCheckboxes.length) {
        favoritesSingleCheckboxes.forEach(checkbox => {
            checkbox.onchange = () => {
                const checkboxes = Array.from(favoritesSingleCheckboxes)

                if (checkboxes.every(checkbox => checkbox.checked)) {
                    favoritesSelectAllCheckbox.checked = true
                } else {
                    favoritesSelectAllCheckbox.checked = false
                }
            }
        })
    }

    const goods = document.querySelectorAll('[data-favorites-goods]')
    const removeSelectedBtn = document.querySelector('.js-remove')

    if(removeSelectedBtn) {
        removeSelectedBtn.addEventListener('click', removeCheckedGoods)
    }

    function removeCheckedGoods() {
        goods.forEach(item => {
            if(item.querySelector('input[type="checkbox"]').checked) item.remove()
        })
        window.Fancybox.close()
    }
})