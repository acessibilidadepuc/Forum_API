
var Topico = require('../models/topico');

exports.save = function(assunto, idUsuario, situacao, datahora, descricao, grau, callback){
  var novoTopico = new Topico();

  novoTopico.assunto = assunto;
  novoTopico.idUsuario = idUsuario;
  novoTopico.situacao = situacao;
  novoTopico.datahora = datahora;
  novoTopico.descricao = descricao;
  novoTopico.grau = grau;

  novoTopico.save(function(erro, topico){
    if(erro){
      callback('deu erro');
    }else{
      callback(topico);
    }
  })
}


exports.list = function(callback){
  Topico.find({}, function(error, topico){
    if(error){
      callback({error});
    }else{
      callback(topico)
    }
  });
}

exports.listOne = function(_id, callback){
  console.log("o id eh : " + _id);
  Topico.findById(_id, function(error, topico){
    if(error){
      callback({error});
    }else {
      callback(topico)
    }
  });
}
