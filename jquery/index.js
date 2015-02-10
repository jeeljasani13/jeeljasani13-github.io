$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.work').addClass('.active')
		} else {
			$('.work').removeClass('.active');
		}

	});


});

