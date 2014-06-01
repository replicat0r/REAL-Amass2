jQuery(document).ready(function(){
	
	
	jQuery('#nav-button').click(function() {
			jQuery('#sidebar').toggle();
	});

	
	if ( jQuery(window).width() < 959) {
	jQuery('#nav li a').not('#nav li a.menu').click(function() {
			jQuery('#sidebar').hide();
	});
	}
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() < 959) {
	  jQuery('#sidebar').hide();
	jQuery('#nav li a').not('#nav li a.menu').click(function() {
			jQuery('#sidebar').hide();
	});
	}
	});
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() > 959) {
			jQuery('#sidebar').show();
			jQuery('#nav li a').not('#nav li a.menu').click(function() {
			jQuery('#sidebar').show();
	});
	}
	});
	
});	
	