"use strict"

$( function() {
	var commentInput = $(".comment-input input"); 
	
	function processCommentInput() 
	{
		var $new_comment; 
		if ( commentInput.val() !== "" ) 
		{
			$new_comment = 
				$("<p>").text( commentInput.val() );
			$(".comments").append( $new_comment );
			commentInput.val( "" );
		}
	} // end processCommentInput()
	
	$( commentInput ).on("keypress", function(event) 
	{
		if ( event.keyCode === 13 )
		{
			processCommentInput();
		}
	}); // end on Keypress
	
	$( ".comment-input button" ).on( "click", function( event ) 
	{
		processCommentInput();
	}); // end on click 
	
});