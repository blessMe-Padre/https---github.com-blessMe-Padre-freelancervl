
/*функция запуска слик слайдера*/

$(function(){
	$('.photo__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow-right.svg" alt=""></button>',
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});

});