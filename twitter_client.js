var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};

	var Twitter = require('twitter-node-client').Twitter;


	var config = {
    	"consumerKey": "cpecZPk3NRIkQ5CWENxfUTBnm",
    	"consumerSecret": "TfCL2ETOJRhC3JIN6RX4uUblAaxytKYSj3BuPPNxIm0LsF7sCO",
    	"accessToken": "958834013782786048-t0hWgInn9tmdRCJZdkzXo0gus8LgB9c",
    	"accessTokenSecret": "60nKg0U1tiPVumRmahhDT9a35aV17iK5LbKuNkeGCEzlK",
    	"callBackUrl": "XXX"
	};

  var twitter = new Twitter(config);

  twitter.getSearch({'q':'#haiku','count': 10}, error, success);
