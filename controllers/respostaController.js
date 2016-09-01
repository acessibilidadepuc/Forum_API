var Resposta = require('../models/resposta');
var Comentario = require('../models/comentario');

exports.save = function(idComentario, dataHora, idUsuario, resposta, callback){
  Comentario.findById(idComentario, function(error, comentario){
    if(error){
      callback({error});
    }else {
      var novaResposta = new Resposta();
      novaResposta.idComentario = idComentario;
      novaResposta.dataHora = dataHora;
      novaResposta.idUsuario = idUsuario;
      novaResposta.resposta = resposta;
      novaResposta.save(function(erro, resposta){
        if(erro){
          callback('deu erro');
        }else{
          callback("sucesso");
        }
      })
    }
  })
}


exports.list = function(idComentario, callback){
  Resposta.find({'idComentario' : idComentario}, function(error, resposta){
    if(error){
      callback({error});
    }else{
      callback(resposta)
    }
  });
}

exports.listOne = function(_id, callback){
  console.log("o id eh : " + _id);
  Resposta.findById(_id, function(error, resposta){
    if(error){
      callback({error});
    }else {
      callback(resposta)
    }
  });
}
