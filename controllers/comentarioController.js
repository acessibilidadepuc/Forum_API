var Comentario = require('../models/comentario');
var Topico = require('../models/topico');

exports.save = function(idTopico, dataHora, idUsuario, comentario, callback){
  Topico.findById(idTopico, function(error, topico){
    if(error){
      callback({error});
    }else {
      var novoComentario = new Comentario();
      novoComentario.idTopico = idTopico;
      novoComentario.dataHora = dataHora;
      novoComentario.idUsuario = idUsuario;
      novoComentario.comentario = comentario;

      novoComentario.save(function(erro, comentario){
        if(erro){
          callback('deu erro');
        }else{
          callback("sucesso");
        }
      })
    }
  })
}


exports.list = function(idTopico, callback){
  Comentario.find({'idTopico' : idTopico}, function(error, comentario){
    if(error){
      callback({error});
    }else{
      callback(comentario)
    }
  });
}

exports.listOne = function(_id, callback){
  console.log("o id eh : " + _id);
  Comentario.findById(_id, function(error, comentario){
    if(error){
      callback({error});
    }else {
      callback(comentario)
    }
  });
}
