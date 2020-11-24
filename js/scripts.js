(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		jQuery(".amader-slider").owlCarousel({
			'autoPlay' : 2000,
			'items' : 4,
			'itemsDesktop' : [1200, 4],
			'itemsDesktopSmall' : [1000, 4],
			'itemsTablet' : [768, 2],
			'stopOnHover' : true,
		});




		jQuery(".full-slider .prev").click(function(){
		jQuery(".amader-slider").trigger('owl.prev');
		
		return false;
		});
		jQuery(".full-slider .next").click(function(){
			jQuery(".amader-slider").trigger('owl.next');
			
			return false;
		});
	


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);