document.addEventListener("DOMContentLoaded", () => {
    const basketSelectAllCheckbox = document.querySelector('.js-basket-select-all-checkbox input')
    const basketSingleCheckboxes = document.querySelectorAll('.js-basket-single-checkbox input')

    if(basketSelectAllCheckbox) {
        basketSelectAllCheckbox.onchange = () => {
            basketSelectAllCheckbox.checked ? selectAll() : unselectAll()
        }
    }

    function selectAll() {
        basketSingleCheckboxes.forEach(checkbox => checkbox.checked = true)
    }

    function unselectAll() {
        basketSingleCheckboxes.forEach(checkbox => checkbox.checked = false)
    }

    if (basketSingleCheckboxes.length) {
        basketSingleCheckboxes.forEach(checkbox => {
            checkbox.onchange = () => {
                const checkboxes = Array.from(basketSingleCheckboxes)

                if (checkboxes.every(checkbox => checkbox.checked)) {
                    basketSelectAllCheckbox.checked = true
                } else {
                    basketSelectAllCheckbox.checked = false
                }
            }
        })
    }

    const goods = document.querySelectorAll('[data-basket-goods]')
    const dialogRemoveBtn = document.querySelector('.js-remove')

    if(dialogRemoveBtn) {
        dialogRemoveBtn.addEventListener('click', removeCheckedGoods)
    }

    function removeCheckedGoods() {
        goods.forEach(item => {
            if(item.querySelector('input[type="checkbox"]').checked) item.remove()
        })
        window.Fancybox.close()
    }

    const basketItemConfirmRemoveBtn = document.querySelector('.js-basket-item-delete')
    const removeItemBtns = document.querySelectorAll('[data-basket-remove-item]')
    let removingElement = null

    removeItemBtns.forEach(item => {
        item.onclick = () => {
            removingElement = item.closest('[data-basket-goods]')
        }
    })

    if(basketItemConfirmRemoveBtn) {
        basketItemConfirmRemoveBtn.addEventListener('click', removeBasketItem)
    }

    function removeBasketItem() {
        if(removingElement) {
            removingElement.remove()
        }
        window.Fancybox.close()
    }
})