var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  nome:String,
  senha:String
});

module.exports = mongoose.model('User', UserSchema);
