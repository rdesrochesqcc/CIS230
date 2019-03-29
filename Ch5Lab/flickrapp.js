"use strict";

var main = function() {
	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tags=dogs&format=json";
	
	$.getJSON( url,  function( flickrResponse ) {
	
		flickrResponse.items.forEach( function( photo ) {
			console.log( photo.media.m );
			var $img = $("<img>");
			var $desc = $("<p>");
			
			$img.attr( "src", photo.media.m );
			$img.attr( "alt", photo.title );
			
			$desc.html( photo.description );
			
			$(".photos").append($img, $desc);
			
		}); 
		
	}); 
	
}; // end main


$( function() { 
	main();
});