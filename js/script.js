;
(function($) {
    "use strict"

    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();

        if (windowScroll > 100) {
            $('.navbar-default').css({
                'background-color': 'rgba(62, 59, 59, .5)'
            });
        } else {
            $('.navbar-default').css({
                'background-color': 'rgba(62, 59, 59, 1)'
            });
        }
    });

    $(document).ready(function() {
        $('.slider').slick({
        	autoplay: true,
        	fade: true,
  			cssEase: 'linear'
        });
    });
})(jQuery);