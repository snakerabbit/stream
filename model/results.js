var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ResultSchema = ({
  tweet_ids:[String]
});

module.exports = mongoose.model('Result', ResultSchema);
