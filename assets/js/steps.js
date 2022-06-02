const stepSection = document.querySelector('.steps');
const stepNumbers = document.querySelectorAll('.step__number');
const progressSuccess = document.querySelector('.steps__progress-success');
const stepItems = document.querySelectorAll('.steps__item');
const prevButton = document.querySelector('.button--prev');
const nextButton = document.querySelector('.button--next');

function getSteps() {
    let step = 0;

    prevButton.addEventListener('click', () => {
        step--;
        stepNumbers[step + 1].classList.remove('step__number--active');
        updateSteps();
    })

    nextButton.addEventListener('click', () => {
        step++;
        updateSteps();
    })

    function updateSteps() {
        stepItems.forEach(item => {
            item.classList.contains('active') && item.classList.remove('active');
        })

        stepItems[step].classList.add('active');
        stepNumbers[step].classList.add('step__number--active');

        if (step === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "inline-block";
        }

        if (step === stepItems.length - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "inline-block";
        }

        // закрашивает активный прогресбар (задает ширину, через стили добавляем цвет)
        const stepNumberActives = document.querySelectorAll('.step__number--active');
        const percent = ((stepNumberActives.length - 1) / (stepNumbers.length - 1)) * 100 + '%';
        progressSuccess.style.width = percent;
    }
    updateSteps();
}



getSteps();