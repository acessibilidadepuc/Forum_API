var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicoSchema = new Schema({
    assunto:String,
    idUsuario:String,
    situacao:String,
    datahora:String,
    descricao:String,
    grau:String
});

module.exports = mongoose.model('Topico', TopicoSchema);
