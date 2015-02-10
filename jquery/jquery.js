
var $window = $(window);
var header = $('#header-content');
$window.scroll(function(){
    if ($window.scrollTop() >= 180) {
       header.addClass('fixed-header');
    }
    else {
       header.removeClass('fixed-header');
    }
});
