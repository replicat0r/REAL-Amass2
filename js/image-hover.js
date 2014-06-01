jQuery(document).ready(function(){
								

	
	$('#mail').click( function(event){
	event.preventDefault();
	
		$('#phone-info').fadeOut(200);	
		$('#pointer-info').fadeOut(200);	
		$('#time-info').fadeOut(200);	
		$('#mail-info').fadeIn(200);
	
});
	
	$('#phone').click( function(event){
	event.preventDefault();
		
		$('#pointer-info').fadeOut(200);	
		$('#time-info').fadeOut(200);	
		$('#mail-info').fadeOut(200);		
		$('#phone-info').fadeIn(200);
	
});
	
		$('#pointer').click( function(event){
	event.preventDefault();
	
		$('#phone-info').fadeOut(200);		
		$('#time-info').fadeOut(200);	
		$('#mail-info').fadeOut(200);	
		$('#pointer-info').fadeIn(200);
	
});
	
	$('#time').click( function(event){
	event.preventDefault();
	
		$('#mail-info').fadeOut(200);
		$('#pointer-info').fadeOut(200);	
		$('#phone-info').fadeOut(200);	
		$('#time-info').fadeIn(200);
	
});
	
	
	$(document).mouseup(function (e)
{
    var container = $(".info-box");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});


	 jQuery('.subtitle-wrap').each(function() {
        jQuery(this).data('wrapping', jQuery(this).width());
        jQuery(this).css('width', 0);
     });

      jQuery('.images').bind('mouseover', function() {
        jQuery(this).find('.subtitle-wrap').stop().each(function() {
          jQuery(this).animate({
            width: jQuery(this).data('wrapping')
          }, 300);
        });
      });

      jQuery('.images').bind('mouseout', function() {
        jQuery(this).find('.subtitle-wrap').stop().each(function() {
          jQuery(this).animate({
            width: 0
          }, 300);
        });
      });

});