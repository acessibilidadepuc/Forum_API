var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RespostaSchema = new Schema({

      idComentario:String,
      idUsuario:String,
      dataHora:String,
      resposta:String
});

module.exports = mongoose.model('Resposta', RespostaSchema);
