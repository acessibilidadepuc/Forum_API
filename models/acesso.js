var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

var AcessoSchema = new Schema({
  nome:String,
  senha:String,
  token:String
});

//geração de token
AcessoSchema.methods.gerarToken = function(nome, senha){
  return jwt.sign({'nome':nome}, 'segredo');
}

//método de cliptografia
AcessoSchema.methods.gerarSenha = function(senha){
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

//comparar senha
AcessoSchema.methods.validaSenha = function(senha){
    return bcrypt.compareSync(senha, this.senha);
}


module.exports = mongoose.model('Acesso', AcessoSchema);
