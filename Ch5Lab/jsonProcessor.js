"use strict"

$( function() {
	console.log("Getting Here!");
	
	var data = 
	{
		"players":  
		[
			{
				"firstName" : "Ryan", 
				"lastName" : "DesRoches",
				"age" : 40,
				"dateJoined": "May 1, 2000",
				"accountHolder": true
			},
			{
				"firstName" : "Kalin", 
				"lastName" : "DesRoches",
				"age" : 6,
				"dateJoined": "May 1, 2005"
			},
			{
				"firstName" : "Becky", 
				"lastName" : "DesRoches",
				"age" : 40,
				"dateJoined": "May 1, 2003"
			}
		]
	};

	
	data.players.forEach( function( foo ) {
		console.log( "Player " + foo.firstName + " " +	foo.lastName + " age: " + foo.age );
		
		if ( foo.accountHolder ) {
			console.log("Account Holder is " + foo.firstName );
		}
		
	});
	
	
	
	
});