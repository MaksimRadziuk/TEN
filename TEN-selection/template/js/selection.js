$(document).ready(function(){

	$('input[name="group1"]').click(function(){
		$('.screenFirst').delay(400).fadeOut();
		$('.screenSecond').delay(800).fadeIn();
	});

	$('input[name="group2"]').click(function(){
		$('.screenSecond').delay(400).fadeOut();
		$('.screenThird').delay(800).fadeIn();
	});

	$('input[name="group3"]').click(function(){
		$('.screenThird').delay(400).fadeOut();
		$('.screenFourth').delay(800).fadeIn();
	});

});