$('.ui.menu.navegacao')
.on('click', '.item', function() {
  if(!$(this).hasClass('dropdown')) {
    $(this)
    .addClass('active')
    .siblings('.item')
    .removeClass('active');
  }
});

$('.ui.accordion')
  .accordion()
;

$('.ui.dropdown')
  .dropdown()
;


if ($(window).width() <= 425) {
  $('.ui.ler').removeClass('very');
  $('.ui.ler').removeClass('padded');
  $('.ui.ler').addClass('basic');
} else {
  $('.ui.ler').addClass('very');
  $('.ui.ler').addClass('padded');
  $('.ui.ler').removeClass('basic');
}

$('.button')
  .popup()
;
