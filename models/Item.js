var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  komentar: String
});

module.exports = mongoose.model('Item', Item);