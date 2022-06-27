const loadMoreBtn = document.querySelector('.load-more-js');
const portfolioListLength = document.querySelectorAll('.portfolio__item').length;

if (loadMoreBtn) {
    let items = 6;

    loadMoreBtn.addEventListener('click', () => {
        items += 3;
        const array = Array.from(document.querySelector('.portfolio__list').children);
        const visibleItem = array.slice(0, items);

        visibleItem.forEach(item => item.classList.add('is-visible'));

        if (visibleItem.length === portfolioListLength) {
            loadMoreBtn.style.display = "none";
        }
    });
}