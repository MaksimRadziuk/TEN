$(document).ready(function(){

  var backgroundSize = $('body').height();
  $('#popup-background').css('height', backgroundSize);

  $('.cabinet-box').click(function(){
  	$('#popup-background').fadeIn();
  	$('#popup-entrance').show();
  });

  $('.popup-close').click(function(){
  	$(this).closest('.popup').fadeOut();
  	$('#popup-background').fadeOut();
  });

});
