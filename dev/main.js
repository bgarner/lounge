/*js*/

$("#thingone").click(function(){
	
	$("#thingtwo").animate({
		width:'10%'
	});		
	
	$("#thingone").animate({
		width:'70%'
	});
	
	$("#thingthree").animate({
		width:'10%'
	});
	$("#thingfour").animate({
		width:'10%'
	});
		

	
  $(".navbar").animate({
		top:'800px'
	});	
	
	$( ".box" ).fadeOut( 800, function() {
	    // Animation complete.
	  });
	
});