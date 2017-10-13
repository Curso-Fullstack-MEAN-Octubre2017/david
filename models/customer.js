var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var customerSchema = new Schema({
  dni:  {type: String, required:true},
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  note: String
});

module.exports = mongoose.model('Customer', customerSchema);
