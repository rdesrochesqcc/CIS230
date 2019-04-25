var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    twitter,
    counts = {};

    counts.awesome =  0;


twitter =  ntwitter(credentials);

twitter.stream( "statuses/filter", 
                { "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
                function(stream) {
                    stream.on( "data", function(tweet) {
                        if ( tweet.text.indexOf("awesome") > -1 ) {
                            counts.awesome++;
                        }
                    });
                } );     

setInterval ( function() {
    console.log( "Awesome: " + counts.awesome);
}, 3000 );

module.exports = counts;