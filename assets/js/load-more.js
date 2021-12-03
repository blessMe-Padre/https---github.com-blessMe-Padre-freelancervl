const portfolioItems = document.querySelectorAll('.portfolio__item');
const portfolioItemsVisible = document.querySelectorAll('.portfolio__item--visible');
const loadMoreBtn = document.querySelector('.load-more__btn');



// Удаляет лишние portfolio__item--visible со страницы которых больше 6
const hideMoreItems = (selector) => {
    if (selector.length > 6) {
        const arr = Array.from(selector);
        //создает массив из 6 элементов (с 6 по portfolioItemsVisible.lenhgt)
        const hiddenItems = arr.slice(6, selector.length);

        //удаляет с  лишних класс portfolio__item--visible
        hiddenItems.forEach(el => {
            el.classList.remove('portfolio__item--visible');
        });
    }
};

hideMoreItems(portfolioItemsVisible);



//если длина portfolio__item--visible  больше 8 удаляет кнопку loadMoreBtn
loadMoreBtn.addEventListener('click', () => {
    portfolioItems.forEach(el => {
        el.classList.remove('portfolio__item--visible');
        el.style.display = 'block';
    });
    if (portfolioItemsVisible.length <= 8) {
        loadMoreBtn.style.display = 'inline-flex';
    } else {
        loadMoreBtn.style.display = 'none';
    }
});



















// console.log(portfolioItems);