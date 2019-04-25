"use strict";


$( function() {
	
	var toDos = [ 
		"Get Groceries",
		"Make some new lists",
		"Play with dogs",
		"Buy grass seed",
		"Pay insurance bill"
	];
	
	// Find all the tab spans, and loop through each one. 
	$(".tabs span").toArray().forEach( function( element ) {
		
		// when one is clicked, clear the content section
		$( element ).on( "click", function() {
			var $element = $(element),
				$content;	
			
			$( ".tabs span" ).removeClass("active");
			$( element ).addClass("active");
			$( "main .content" ).empty();
			
			if ( $(element).parent().is(":nth-child(1)") ) {
				$content = $("<ul>");
				for ( var i = toDos.length - 1;  i >= 0; i-- )
				{
					$content.append( $("<li>").text( toDos[i] ) );
				} // end for toDos.
				$("main .content").append( $content );
			}	
			else if ( $(element).parent().is(":nth-child(2)") ) {
				$content = $("<ul>");
				toDos.forEach( function ( todo ) {
					$content.append( $("<li>").text( todo ) );
				}); // end for toDos.
				$("main .content").append( $content );
				
			}
			else if ( $(element).parent().is(":nth-child(3)") ) {
				console.log("Third tab clicked");
			}
			else {
				console.warn("Something bad happened");
			}
			
			return false; 
			
			
			
		}); // end on element click
	}); // end for each .tabs span
	
}); // end doc ready