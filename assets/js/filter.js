function app() {
    let buttons = document.querySelectorAll('.gallery__btn');
    let cards = document.querySelectorAll('.gallery__item');

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            //const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered) {
                item.classList.add('gallery_hide')
            } else {
                item.classList.remove('gallery_hide')
            }


        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })
}
app()
