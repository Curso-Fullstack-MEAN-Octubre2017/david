var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var petSchema = new Schema({
  chip:  {type: String, required:true},
  name: String,
  date: Date,
  photo: String,
  breed: String,
  race: String,
  description: String,
  owner: {type: Schema.ObjectId, ref:"Customer", required:true}
});

module.exports = mongoose.model('Pet', petSchema);