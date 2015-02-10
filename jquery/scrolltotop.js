$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}

	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	var $window = $(window);
var header = $('#header-content');
$window.scroll(function(){
    if ($window.scrollTop() >= 47) {
       header.addClass('fixed-header');
    }
    else {
       header.removeClass('fixed-header');
    }
	});

	


    $('.play-button').click(function(){
        video = '<div class="videoWrapper"> <iframe src="'+ $('.videoplay').attr('data-video') +'?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179&amp;autoplay=1" width="100%" height="880px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
        $('.videoplay').replaceWith(video);
        $('.play-button').fadeOut(400);
    });


});

