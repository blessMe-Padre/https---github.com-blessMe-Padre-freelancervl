const card = document.querySelector('.drag__card');
const cells = document.querySelectorAll('.drag__item');

if (card) {
    const dragAndDrop = () => {

        const dragStart = function (evt) {
            setTimeout(() => {
                evt.target.classList.add('drag--hide');
            }, 0)
        };

        const dragEnd = function (evt) {
            evt.target.classList.remove('drag--hide');
        }

        const dragOver = function (evt) {
            evt.preventDefault();
        }

        const dragEnter = function (evt) {
            evt.preventDefault();
            evt.target.classList.add('drag--hovered');
        }

        const dragLeave = function (evt) {
            evt.target.classList.remove('drag--hovered');
        }

        const dragDrop = function (evt) {
            evt.target.append(card);
            evt.target.classList.remove('drag--hovered');
        }

        cells.forEach((cell) => {
            cell.addEventListener('dragover', dragOver);
            cell.addEventListener('dragenter', dragEnter);
            cell.addEventListener('dragleave', dragLeave);
            cell.addEventListener('drop', dragDrop);
        })

        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    };

    dragAndDrop();
}