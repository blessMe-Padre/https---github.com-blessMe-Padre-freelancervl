const beforeAfterSection = document.querySelector('.before-after');

const beforeAfterSlider = document.querySelector('.before-after__slider');
const beforeSlider = beforeAfterSlider.querySelector('.before-after__before');
const beforeSliderImg = beforeSlider.querySelector('img');
const changeSlider = beforeAfterSlider.querySelector('.before-after__change');

const sliderCheckbox = beforeAfterSection.querySelector('.slider__range');

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
    let width = beforeAfterSlider.offsetWidth;
    beforeSliderImg.style.width = `${width}px`;
});

const beforeAfterSliderShift = (x) => {
    let shift = Math.max(0, Math.min(x, beforeAfterSlider.offsetWidth));
    beforeSlider.style.width = `${shift}px`;
    // changeSlider.style.left = `${shift}px`;
};

const pauseEvents = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    return false;
};

beforeAfterSlider.addEventListener('mousedown', () => {
    isActive = true;
});

beforeAfterSlider.addEventListener('mouseup', () => {
    isActive = false;
});

beforeAfterSlider.addEventListener('mouseleave', () => {
    isActive = false;
});

beforeAfterSlider.addEventListener('mousemove', (evt) => {
    if (!isActive) {
        return;
    }

    let x = evt.pageX;
    x -= beforeAfterSlider.getBoundingClientRect().left;

    beforeAfterSliderShift(x);
    pauseEvents(evt);
});