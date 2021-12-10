
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity__button_plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}




//BuildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

if (document.querySelector('.mainslider')) {
    let mainslider = new Swiper('.mainslider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        //loop: true,
        //preloadImages: false,
        //lazy: true,
        // Dotts
        pagination: {
            el: '.mainslider__dotts',
            clickable: true,
        },
        // Arrows
        /*
        navigation: {
            nextEl: '.about__more .more__item_next',
            prevEl: '.about__more .more__item_prev',
        },
        */
        /*
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1268: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        */
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
        // And if we need scrollbar
        //scrollbar: {
        //	el: '.swiper-scrollbar',
        //},
    });
    let mainsliderImages = document.querySelectorAll('.mainslider__image');
    let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');

    for (let index = 0; index < mainsliderImages.length; index++) {
        const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
        mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
    }
}

if (document.querySelector('.products-slider')) {
    let productsSlider = new Swiper('.products-slider__item', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        //loop: true,
        //preloadImages: false,
        //lazy: true,
        // Dotts

        pagination: {
            el: '.products-slider__info',
            type: 'fraction'
        },
        // Arrows
        navigation: {
            nextEl: '.products-slider__arrow_next',
            prevEl: '.products-slider__arrow_prev',
        },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    });
}

if (document.querySelector('.brands-slider')) {
    let brandsSlider = new Swiper('.brands-slider__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 0,
        //autoHeight: true,
        speed: 800,
        loop: true,
        //preloadImages: false,
        //lazy: true,
        // Arrows
        navigation: {
            nextEl: '.brands-slider__arrow_next',
            prevEl: '.brands-slider__arrow_prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                autoHeight: true,
            },
            480: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
        }
    });
}


if (document.querySelector('.images-product')) {
    let imagesSubSlider = new Swiper('.images-product__subslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 0,
        //autoHeight: true,
        speed: 800,
        //loop: true,
        //preloadImages: false,
        //lazy: true,
    });
    let imagesMainSlider = new Swiper('.images-product__mainslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
            swiper: imagesSubSlider
        },
        //autoHeight: true,
        speed: 800,
        //loop: true,
        //preloadImages: false,
        //lazy: true,
    });

}





