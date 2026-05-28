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
        updateBasketCount() // <-- Обновляем счетчик после массового удаления
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
        updateBasketCount()
    }

    function getGoodsWord(count) {
        const mod10 = count % 10;
        const mod100 = count % 100;

        if (mod100 >= 11 && mod100 <= 19) {
            return 'товаров';
        }
        if (mod10 === 1) {
            return 'товар';
        }
        if (mod10 >= 2 && mod10 <= 4) {
            return 'товара';
        }
        return 'товаров';
    }

    function updateBasketCount() {
        const basket = document.querySelector('.basket');
        if (!basket) return;

        const itemsCount = document.querySelectorAll('.basket__item').length;
        const mainTitle = document.querySelector('.main-title');

        if (mainTitle) {
            let basketCount = mainTitle.querySelector('.basket__count');
            if (!basketCount) {
                basketCount = document.createElement('span');
                basketCount.classList.add('basket__count');
                mainTitle.appendChild(basketCount);
            }

            basketCount.textContent = `${itemsCount} ${getGoodsWord(itemsCount)}`;
        }
    }
    updateBasketCount();
})