/*
Scripts File
for skills animation
*/

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    var logo = $("p#logo");
    var container = $("body");
    var navicon = $('span.nav-icon');
    var navwrap = $("div#nav-wrap");
    
    var lineabout = $("div.lineabout");
    var lineportfolio = $("div.lineportfolio");
    var lineblog = $("div.lineblog");
    var linecontact = $("div.linecontact");
    
    var aboutcirclewrap = $( "div#about-circle-wrap" );
    var portfoliocirclewrap = $( "div#portfolio-circle-wrap" );
    var blogcirclewrap = $( "div#blog-circle-wrap" );
    var contactcirclewrap = $( "div#contact-circle-wrap" );
    
    /* BROWSER RECOGNITION */
    if($.browser.msie && parseInt($.browser.version, 10) == 7) {
     	logo.corner('104px');
     	$( "div#portfolio-circle" ).corner('80px');
    	$( "div#about-circle" ).corner('80px');
    	$( "a#contact-circle" ).corner('80px');
    	$( "a#blog-circle" ).corner('80px');
    } else if($.browser.msie && parseInt($.browser.version, 10) == 8) {
    	logo.corner('104px');
    	$( "div#portfolio-circle" ).corner('80px');
    	$( "div#about-circle" ).corner('80px');
    	$( "a#contact-circle" ).corner('80px');
    	$( "a#blog-circle" ).corner('80px');
    }
        
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is smaller than 768px */
    if (responsive_viewport < 768) {
        
        $('ul#menu-primary li a').click(function() {
	        $('ul#menu-primary').slideUp();
        });
        
        logo.click(function() {
	        $('ul#menu-primary').slideToggle();
        });

    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
        logo.mouseover(function() {
	        logo.removeClass('lscale');
  		});
        
        /* Home Circle */
        logo.click(function() {
        	
        	if (logo.hasClass('logo-open')) {
        		
        		$('div.finallinkhide').fadeOut(300, function() {
		        	navwrap.animate({
					  height: 35
					}, 800, "easeInOutExpo", function() {
					
						$('div.gallery-big img:first-child').fadeIn(300);
						$('div.branding-right').fadeIn(300);
						
						$("div.link1-wrap").css({'top' : '25px', 'left' : '93px'});
						$("div.link2-wrap").css({'top' : '60px', 'left' : '98px'});
						$("div.link3-wrap").css({'top' : '63px', 'left' : '100px'});
						$("div.link4-wrap").css({'top' : '64px', 'left' : '115px'});
						
						lineabout.css({'height' : '0px', 'bottom' : '76px', 'left' : '0px'});
						lineportfolio.css({'height' : '0px', 'bottom' : '74px', 'left' : '26px'});
						linecontact.css({'height' : '0px', 'bottom' : '56px', 'left' : '44px'});
						lineblog.css({'height' : '0px', 'bottom' : '30px', 'left' : '63px'});
						
						aboutcirclewrap.removeClass("fullscale");
						portfoliocirclewrap.removeClass("fullscale");
						contactcirclewrap.removeClass("fullscale");
						blogcirclewrap.removeClass("fullscale");
						
						$('div.finallinkhide').show();
						navicon.fadeIn(300);
						logo.addClass('lscale');
						logo.removeClass('logo-open');
						
					});
	        	});
		        
		    } else {
	        	
	        	$('#bg-container img.bg').fadeOut(300);
	        	$('div.branding-right').fadeOut(150);
	        	logo.addClass('logo-open');
	        	navicon.fadeOut(300);
		        navwrap.animate({
				  height: 550
				}, 800, "easeInOutExpo", function() {
					$( "div.link1-wrap" ).animate({
					  top: -60, left: 93
					}, 300, "easeOutBack", function() {
						$( "div.link2-wrap" ).animate({
						  top: -42, left: 157
						}, 300, "easeOutBack", function() {
						  	$( "div.link3-wrap" ).animate({
							  top: 5, left: 200
							}, 300, "easeOutBack", function() {
								$( "div.link4-wrap" ).animate({
								  top: 64, left: 215
								}, 300, "easeOutBack", function() { 
								});
							});
						});
					});
		        });
	        
	        }
	        
	    });
        
        /* About Click */
        $('p.linkabout').click(function() {
        	$('html, body').animate({
	            scrollTop: container.offset().top
	        }, 400,'easeInOutExpo');
        
			lineportfolio.delay(400).animate({
			  bottom: 74, left: 26, height: 0
			}, 400, "linear");
        	
        	linecontact.delay(400).animate({
			  bottom: 56, left: 44, height: 0
			}, 400, "linear");
			
			lineblog.delay(400).animate({
			  bottom: 30, left: 63, height: 0
			}, 400, "linear");
			
			portfoliocirclewrap.removeClass("fullscale");
			contactcirclewrap.removeClass("fullscale");
			blogcirclewrap.removeClass("fullscale");
			
        	lineabout.animate({
			  height: 208
			}, 400, "linear", function() {
	        	aboutcirclewrap.addClass("fullscale");
	        	
        		$( "div.link1-wrap2" ).delay(500).animate({
				  top: 50, left: 159
				}, 300, "easeOutBack", function() {
					$( "div.link2-wrap2" ).animate({
					  top: 98, left: 167
					}, 300, "easeOutBack", function() {
					  	$( "div.link3-wrap2" ).animate({
						  top: 134, left: 128
						}, 300, "easeOutBack", function() {
	
						});
					});
				});
        	});	
        });
        
        /* Portfolio Click */
        $('p.linkportfolio').click(function() {
        	$('html, body').animate({
	            scrollTop: container.offset().top
	        }, 400,'easeInOutExpo');
        
			lineabout.delay(400).animate({
			  bottom: 76, left: 0, height: 0
			}, 400, "linear");
        	
        	linecontact.delay(400).animate({
			  bottom: 56, left: 44, height: 0
			}, 400, "linear");
			
			lineblog.delay(400).animate({
			  bottom: 30, left: 63, height: 0
			}, 400, "linear");
			
			aboutcirclewrap.removeClass("fullscale");
			contactcirclewrap.removeClass("fullscale");
			blogcirclewrap.removeClass("fullscale");
        
        	lineportfolio.animate({
			  bottom: 60, left: 78, height: 208
			}, 400, "linear", function() {
	        	portfoliocirclewrap.addClass("fullscale");
	        	
				$( "div.link1-wrap3" ).delay(500).animate({
				  top: 50, left: 159
				}, 300, "easeOutBack", function() {
					$( "div.link2-wrap3" ).animate({
					  top: 98, left: 167
					}, 300, "easeOutBack", function() {
					  	$( "div.link3-wrap3" ).animate({
						  top: 134, left: 128
						}, 300, "easeOutBack", function() {
							$( "div.link4-wrap3" ).animate({
							  top: 152, left: 80
							}, 300, "easeOutBack", function() {
		
							});
						});
					});
				});
	        	
        	});	
        });
        
        /* Contact Click */
        $('p.linkcontact').click(function() {
        	$('html, body').animate({
	            scrollTop: container.offset().top
	        }, 400,'easeInOutExpo');
	        
        	lineabout.delay(400).animate({
			  bottom: 76, left: 0, height: 0
			}, 400, "linear");
			
			lineportfolio.delay(400).animate({
			  bottom: 74, left: 26, height: 0
			}, 400, "linear");
			
			lineblog.delay(400).animate({
			  bottom: 30, left: 63, height: 0
			}, 400, "linear");
			
			aboutcirclewrap.removeClass("fullscale");
			portfoliocirclewrap.removeClass("fullscale");
			blogcirclewrap.removeClass("fullscale");
        	
        	linecontact.animate({
			  bottom: 3, left: 132, height: 208
			}, 400, "linear", function() {
	        	contactcirclewrap.addClass("fullscale");
        	});	
        });
        
        /* Blog Click */
        $('p.linkblog').click(function() {
        	$('html, body').animate({
	            scrollTop: container.offset().top
	        }, 400,'easeInOutExpo');
	        
			lineabout.delay(400).animate({
			  bottom: 76, left: 0, height: 0
			}, 400, "linear");
			
			lineportfolio.delay(400).animate({
			  bottom: 74, left: 26, height: 0
			}, 400, "linear");
        	
        	linecontact.delay(400).animate({
			  bottom: 56, left: 44, height: 0
			}, 400, "linear");

			aboutcirclewrap.removeClass("fullscale");
			portfoliocirclewrap.removeClass("fullscale");
			contactcirclewrap.removeClass("fullscale");
        
        	lineblog.animate({
			  bottom: -74, left: 164, height: 208
			}, 400, "linear", function() {
	        	blogcirclewrap.addClass("fullscale");
        	});	
        });
        
        /* Final Link Click */
        $('a.finallink').click(function() {
        	
        	$('div.finallinkhide').fadeOut(300, function() {
	        	navwrap.animate({
				  height: 35
				}, 800, "easeInOutExpo", function() {
					
					$("div.link1-wrap").css({'top' : '25px', 'left' : '93px'});
					$("div.link2-wrap").css({'top' : '60px', 'left' : '98px'});
					$("div.link3-wrap").css({'top' : '63px', 'left' : '100px'});
					$("div.link4-wrap").css({'top' : '64px', 'left' : '115px'});
					
					lineabout.css({'height' : '0px', 'bottom' : '76px', 'left' : '0px'});
					lineportfolio.css({'height' : '0px', 'bottom' : '74px', 'left' : '26px'});
					linecontact.css({'height' : '0px', 'bottom' : '56px', 'left' : '44px'});
					lineblog.css({'height' : '0px', 'bottom' : '30px', 'left' : '63px'});
					
					aboutcirclewrap.removeClass("fullscale");
					portfoliocirclewrap.removeClass("fullscale");
					contactcirclewrap.removeClass("fullscale");
					blogcirclewrap.removeClass("fullscale");
					
					$('div.finallinkhide').show();
					navicon.fadeIn(300);
					logo.addClass('lscale');
					logo.removeClass('logo-open');
					
				});
        	});

        });
        
        /* Blog Side Link Click */
        var sideicon = $('span.sideicon');    
        sideicon.click(function() {
        
        	var currentside = $(this);
        	
        	if ( currentside.hasClass('sideopen') ) {
	        	currentside.parent('div.widget').animate({
				  right: 0
				}, 700, "easeOutExpo", function() {
		        	currentside.next('div.hideside').slideUp(200);
		        	currentside.removeClass('sideopen');
	        	});	
        	} else {
        		
        		if ( sideicon.hasClass('sideopen') ) {
		        	sideicon.parent('div.widget').animate({
					  right: 0
					}, 700, "easeOutExpo", function() {
			        	sideicon.next('div.hideside').slideUp(200);
			        	sideicon.removeClass('sideopen');
		        	});	
	        	}
        	
	        	currentside.parent('div.widget').animate({
				  right: 288
				}, 700, "easeOutExpo", function() {
		        	currentside.next('div.hideside').slideDown(500);
		        	currentside.addClass('sideopen');
	        	});	
	        }
	        
        });
        
        $('div.close-icon').click(function() {
			$('div.branding-right').animate({
			  right: -676
			}, 800, "easeOutCubic", function() {
				$('#brandingopen').animate({
					right: 0
				}, 300, "easeOutCubic");
        	});	
		});
		
		$('span.sidebrand').click(function() {
			$('#brandingopen').animate({
        		right: -64
        	}, 300, "easeOutCubic", function() {
				$('div.branding-right').animate({
					right: 0
				 }, 800, "easeOutCubic");
			});	
		});
        
    }
	
}); /* end of as page load scripts */


