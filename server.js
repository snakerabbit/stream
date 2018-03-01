'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://user:password@ds235708.mlab.com:35708/stream');
var Twitter = require('twitter-node-client').Twitter;
var config = {
    "consumerKey": "cpecZPk3NRIkQ5CWENxfUTBnm",
    "consumerSecret": "TfCL2ETOJRhC3JIN6RX4uUblAaxytKYSj3BuPPNxIm0LsF7sCO",
    "accessToken": "958834013782786048-t0hWgInn9tmdRCJZdkzXo0gus8LgB9c",
    "accessTokenSecret": "60nKg0U1tiPVumRmahhDT9a35aV17iK5LbKuNkeGCEzlK",
    "callBackUrl": "XXX"
};
var twitter = new Twitter(config);
var Result = require('./model/results');
var Tweet = require('./model/tweets');

var success = function (data) {
    	console.log(JSON.parse(data).statuses);
	};
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});


router.get('/', function(req, res) {
  res.json({
    message: 'API Initalized!'
  });
});

router.route('/results').get(function(req, res){
  Result.find(function(err, results){
    if(err){
      console.log(err);
    }
    res.json(results);
  });
})
  .post(function(req, res){
    var result = new Result();
      return twitter.getSearch({'q':'#haiku','count': 10}, function(err, response, body){
        console.log('ERROR [%s]', err);},
        function(data){
          console.log(JSON.parse(data).statuses);
        });
  });
app.use('/api', router);
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
