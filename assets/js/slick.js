


$(function () {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        // fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            },
        ]
    });

});


$(function () {
    $('.fairy__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="assets/images/fairy/vector_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="assets/images/fairy/vector_right.svg" alt=""></button>',
        autoplay: true,
        responsive: [{ breakpoint: 601, settings: { arrows: false } },]
    });
});
