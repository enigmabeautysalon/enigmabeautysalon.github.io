$(document).ready(function() {
 
  $("#about_slider").owlCarousel({
  	items: 1,
  	singleItem: true,
  	lazyLoad : true
    
  });

  // Parallax
  var parallaxElements = $('.parallax'),
  parallaxQuantity = parallaxElements.length;

   $(window).on('scroll', function () {

		window.requestAnimationFrame(function () {

			for (var i = 0; i < parallaxQuantity; i++) {
				var currentElement =  parallaxElements.eq(i);
				var scrolled = $(window).scrollTop();

				currentElement.css({
				'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)' });
			}

		});
	});


   // Smooth Scrolling on every anchor node
   $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

   	// Toggle Mobile Menu Button
   	$( '.mobile_menu_button' ).click(function() {
   		$('#mobile_menu').toggleClass('visible');
   		$('#mobile_menu_button').toggleClass('fa-bars fa-times');
   	}); 

}); // End Document Ready