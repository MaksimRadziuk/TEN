$(document).ready(function(){

  var backgroundSize = $('body').height();
  $('#popup-background').css('height', backgroundSize);

if(innerWidth>550){
	var widthPopup = $('.popup').width();
   var leftPadingPopup = widthPopup/2;
   $('.popup').css('marginLeft', -leftPadingPopup);
}
  
else {}

  $('.cabinet-box').click(function(){
  	$('#popup-background').fadeIn();
  	$('#popup-entrance').show();
  });

  $('.popup-close').click(function(){
  	$(this).closest('.popup').fadeOut();
  	$('#popup-background').fadeOut();
  });

});