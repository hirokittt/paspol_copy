$(function(){

$('#menu-opener').click(function(){
  $('.rp-menu').toggleClass('active');

  if($('.rp-menu').hasClass('active')){
    $('.rp-menu').slideUp();
  }
  else{
    $('.rp-menu').slideDown();
  }
})

$('.circle').hover(
  function(){
    $('.circle').addClass('up-circle');
  },
  function(){
    $('.circle').removeClass('up-circle');
  }
)

$('.top-btn').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },1000)


})



});
