// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
  name: String,
  type: String,
  color: String,
  age: Number,
  ferocity: Number
});

module.exports = mongoose.model('Bear', BearSchema);
