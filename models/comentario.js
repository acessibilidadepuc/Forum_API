var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComentarioSchema = new Schema({

      idTopico:String,
      dataHora:String,
      idUsuario:String,
      comentario:String
});

module.exports = mongoose.model('Comentario', ComentarioSchema);
