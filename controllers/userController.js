var User = require('../models/user');


exports.save = function(nome, senha, callback){
  new User({
    'nome':nome,
    'senha':senha
  }).save(function(error, user){
    if(error){
      callback({error:'não foi possível salvar'});
    }else{
      callback(user);
    }
  });
}


exports.list = function(callback){
  User.find({}, function(error, user){
    if(error){
      callback({error:'não foi possível encontrar usuário'});
    }else{
      callback(user)
    }
  });
}

exports.delete = function(id, callback){
  User.findById(id, function(error, user){
    if(error){
      callback({error:'não possível excluir'});
    }else {
      user.remove(function(error){
        if(!error){
          callback({resposta:'Usuário excluido com sucesso'})
        }
      });
    }
  });
}
