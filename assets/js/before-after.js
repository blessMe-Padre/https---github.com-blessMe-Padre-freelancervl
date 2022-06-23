const beforeAfterSection = document.querySelector('.before-after');

if (beforeAfterSection) {
    const beforeAfterSlider = document.querySelector('.before-after__slider');
    const beforeSlider = beforeAfterSlider.querySelector('.before-after__before');
    const beforeSliderImg = beforeSlider.querySelector('img');

    const sliderRange = beforeAfterSection.querySelector('.slider__range');
    const sliderCheckbox = beforeAfterSection.querySelector('.slider__checkbox');
    const buttonBefore = beforeAfterSection.querySelector('.slider__button--before');
    const buttonAfter = beforeAfterSection.querySelector('.slider__button--after');

    let isActive = false;

    document.addEventListener('DOMContentLoaded', () => {
        let width = beforeAfterSlider.offsetWidth;
        beforeSliderImg.style.width = `${width}px`;
    });

    const beforeAfterSliderShift = (x) => {
        let shift = Math.max(0, Math.min(x, beforeAfterSlider.offsetWidth));
        beforeSlider.style.width = `${shift}px`;
    };

    sliderRange.addEventListener('mousedown', () => {
        isActive = true;
    });

    sliderRange.addEventListener('mouseup', () => {
        isActive = false;
    });

    sliderRange.addEventListener('mouseleave', () => {
        isActive = false;
    });

    sliderRange.addEventListener('mousemove', (evt) => {
        if (!isActive) {
            return;
        }

        let x = evt.pageX;
        x -= beforeAfterSlider.getBoundingClientRect().left;

        beforeAfterSliderShift(x);
    });

    buttonBefore.addEventListener('click', () => {
        beforeSlider.style.width = `100%`;
        sliderRange.value = 0;
        sliderCheckbox.checked = false;
        ;
    });

    buttonAfter.addEventListener('click', () => {
        beforeSlider.style.width = `0px`;
        sliderRange.value = 100;
        sliderCheckbox.checked = true;
    });
};