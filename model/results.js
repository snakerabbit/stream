var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ResultSchema = ({
  tweets:[String]
});

module.exports = mongoose.model('Result', ResultSchema);
