const twit    = require('twit')
	, keys    = require('./keys')
	, Twitter = new twit(keys)
    , q       = require('./quotes.json')
	, utils   = require('node-blutils')
	, sched    = require('node-schedule');

var tweet = function(quote) {
	Twitter.post('statuses/update', { status: quote }, function(err, data, response) {
	    	console.log(data)
	  	});
}

let job = sched.scheduleJob('30 13 * * *', function() {
	let quote = utils.shuffle(q.quotes);

	utils.print("Begining tweet function...");
	utils.print(`Quote: ${quote}`);
	utils.print("Attempting to tweet...");

	try {
		tweet(quote);
		utils.print("Tweeted successfully!");
	}
	catch(err) {
		utils.err("Unable to send tweet!");
		utils.err(err);
	}
});