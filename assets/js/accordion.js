document.querySelectorAll('.mavic__item-title').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('mavic__item--active')) {
            parent.classList.remove('mavic__item--active');
        } else {
            document
                .querySelectorAll('.mavic__item')
                .forEach((child) => child.classList.remove('mavic__item--active'))

            parent.classList.add('mavic__item--active');
        }

    })
)

document.querySelectorAll('.criteria-body__item-title').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('criteria-body__item--active')) {
            parent.classList.remove('criteria-body__item--active');
        } else {
            document
                .querySelectorAll('.criteria-body__item')
                .forEach((child) => child.classList.remove('criteria-body__item--active'))

            parent.classList.add('criteria-body__item--active');
        }

    })
)