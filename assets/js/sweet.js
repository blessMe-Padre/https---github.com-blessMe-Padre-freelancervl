

/*функция активации sweet alarm по классу
 добавить класс .alert к обьекту
 */

$('.alert').click(function (e) {
    e.preventDefault();
    swal("Демо режим", "Ограниченный функционал", "error");
})


/*Сделать ссылки не рабочими (чтобы не перезагружалать страница,
 при появлении модального окна
)*/

// jQuery('a').on('click', function (e) {
//     e.preventDefault();
// });