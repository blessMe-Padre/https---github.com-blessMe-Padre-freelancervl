//кнопка прокрутки вврерх

//Jquery
// function backToTop() {
//     let button = $('.back-to-top');

//     $(window).on('scroll', () => {
//         if ($(this).scrollTop() >= 50) {
//             button.fadeIn();
//         } else {
//             button.fadeOut();
//         }
//     });

//     button.on('click', (e) => {
//         e.preventDefault();
//         $('html').animate({ scrollTop: 0 }, 1000);
//     })
// }

// backToTop();
//JS
const scrollBtn = document.querySelector('.back-to-top');
window.onscroll = () => {
    if (window.scrollY > 600) {
        scrollBtn.classList.remove('back-to-top--hide');
    } else if (window.scrollY < 700) {
        scrollBtn.classList.add('back-to-top--hide');
    }
};
scrollBtn.onclick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
};
