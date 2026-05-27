document.addEventListener("DOMContentLoaded", () => {
    const sortBlock = document.querySelector('.actions__sort');
    const breadcrumbs = document.querySelector('.breadcrumbs');

    if (!sortBlock || !breadcrumbs) return;

    // Точно находим правильного родителя на десктопе — это шапка первого блока акций
    const desktopParent = document.querySelector('.actions__block .actions__head');

    // Брейкпоинт для мобилок (до 767.98px)
    const mobileMediaQuery = window.matchMedia('(max-width: 767.98px)');

    function handleTabletChange(e) {
        if (e.matches) {
            // --- НА МОБИЛКЕ ---
            // Переносим сортировку в крошки
            breadcrumbs.appendChild(sortBlock);

            // Делаем крошки флексовыми и выравниваем по центру
            breadcrumbs.classList.add('d-flex', 'align-items-center', 'flex-wrap');
        } else {
            // --- НА ДЕСКТОПЕ ---
            if (desktopParent) {
                // Возвращаем строго на свое место в шапку
                desktopParent.appendChild(sortBlock);
            }

            // Убираем флекс-классы с крошек, чтобы вернуть им дефолтный вид
            breadcrumbs.classList.remove('d-flex', 'align-items-center', 'flex-wrap');
        }
    }

    // Следим за экраном
    mobileMediaQuery.addEventListener('change', handleTabletChange);

    // Первичный запуск при загрузке страницы
    handleTabletChange(mobileMediaQuery);
});