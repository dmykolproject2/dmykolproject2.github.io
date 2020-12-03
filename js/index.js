$(document).scroll(function(){
if($(document).width() < 600)
return false;

if($(document).scrollTop() > $('.full-page').height() / 3)
$('header').addClass('fixed');
else
$('header').removeClass('fixed');
});

$('.up-btn').on('click', function() {
$('html, body').animate({
scrollTop: 0
}, 'slow');
});

$('.menu').on('click', function(){
  $('.nav').fadeToggle('400ms');
});
