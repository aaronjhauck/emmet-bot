var twit = require("twit");
var q    = require("./quotes.json"); 

var Twitter = new twit({
	consumer_key: 'QdmYDym4Jy77rBNOpJLrYjapj',
	consumer_secret: 'DsSg9jFam16zd6oOjFQh7iCqsLyaTzPUH3vHF7pSw3ZPa8YWlk',
	access_token: '1221288355628929025-SFJDomFxJk37bfrCeGj5NB0ftl94t3',
	access_token_secret: 'M46vSQOLCKL3F6XgGN4FhMgRO5B13VGR8gXKl5nKZkV3T',
	timeout_ms: 60 * 10000,
});

var get_quote = function(list) {
	var pos = Math.floor((Math.random()*list.length));
	return list[pos];
}

var quote = get_quote(q.quotes);

var tweetQuote = function() {
	Twitter.post('statuses/update', { status: quote }, function(err, data, response) {
	    	console.log(data)
	  	});
}

tweetQuote();
