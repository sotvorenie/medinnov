document.addEventListener("DOMContentLoaded", () => {
    const reviewMainBlock = document.querySelectorAll('[data-order-review]')

    reviewMainBlock.forEach(item => {
        const starsContainer = item.querySelector('.star-rating__stars:not(.star-rating__stars_fill)')
        const starsItems = starsContainer.querySelectorAll('.icon')
        const reviewText = item.querySelector('[data-order-review-text]')
    
        starsItems.forEach((star, i) => {
            star.addEventListener('click', () => {
                for(let j = 1; j < 6; j++) {
                    starsContainer.classList.remove(`_${i}`)
                }
    
                starsContainer.classList.add(`_${i + 1}`, '_picked')
    
                switch (i + 1) {
                    case 1: reviewText.textContent = 'Отлично'
                        break;
                    case 2: reviewText.textContent = 'Хорошо'
                        break;
                    case 3: reviewText.textContent = 'Неплохо'
                        break;
                    case 4: reviewText.textContent = 'Не понравилось'
                        break;
                    case 5: reviewText.textContent = 'Ужасно'
                        break;
                    default:
                        break;
                }
                reviewText.classList.add('_picked')
                item.classList.add('_form')
            })
        })
    })
})