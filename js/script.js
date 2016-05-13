$('.ui.menu')
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
