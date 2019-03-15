"use strict"

$( function() {
	var commentInput = $(".comment-input input"); 
	
	function processCommentInput() 
	{
		var $new_comment; 
		if ( commentInput.val() !== "" ) 
		{
			$new_comment = 
				$("<p>").html( commentInput.val() + "<button class='delete'>Delete</button>");
			$new_comment.hide();
			$(".comments").append( $new_comment );
			$new_comment.fadeIn();
			commentInput.val( "" );
			
			$( ".delete").on("click", function(event) {
				event.target.parentElement.remove();
			});
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