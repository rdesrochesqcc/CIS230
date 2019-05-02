var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    redis = require("redis"),
    redisClient, 
    twitter,
    counts = {};

    counts.awesome =  0;


twitter =  ntwitter(credentials);

redisClient = redis.createClient();

redisClient.get( "awesome", function( err, awesomeCount ) {
    if ( err != null )
    {
        console.warn("Error: " + err );
        return;
    }

    counts.awesome = parseInt( awesomeCount, 10) || 0;
    twitter.stream( "statuses/filter", 
                { "track": ["awesome", "cool", "rad", "gnarly", "groovy"] },
                function(stream) {
                    stream.on( "data", function(tweet) {
                        if ( tweet.text.indexOf("awesome") > -1 ) {
                            redisClient.incr("awesome");
                            counts.awesome = counts.awesome + 1;
                        }
                    });
                } );     
});

setInterval ( function() {
    console.log( "Awesome: " + counts.awesome);
}, 3000 );

module.exports = counts;