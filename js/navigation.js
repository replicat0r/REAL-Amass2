$(document).ready(function(){
	  $("#nav > li > a.menu").on("click", function(e){
	    if($(this).parent().has("ul")) {
	      e.preventDefault();
	    }
		if(!$(this).hasClass("open")) {
	      $("#nav li ul").slideUp(350);
	      $("#nav li a").removeClass("open");
	 
	      $(this).next("ul").slideDown(350);
	      $(this).addClass("open");
	    }
	 
	    else if($(this).hasClass("open")) {
	      $(this).removeClass("open");
	      $(this).next("ul").slideUp(350);
	    }
	  });
	});