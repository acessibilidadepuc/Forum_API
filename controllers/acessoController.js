var Acesso = require('../models/acesso');
exports.save = function(nome, senha, callback){
  Acesso.findOne({'nome':nome}, function(erro, acesso){
    if(erro){
      callback('Deu Erro');
    }else if(acesso){
      callback('Nome já existente');
    }else{
      var novoAcesso = new Acesso();
      novoAcesso.nome = nome;
      novoAcesso.senha = novoAcesso.gerarSenha(senha);
      novoAcesso.token = novoAcesso.gerarToken(nome);
      novoAcesso.save(function(erro, acesso){
        if(erro){
          callback('deu erro');
        }else{
          callback(acesso);
        }
      })
    }
  })
}

exports.login = function(nome, senha, callback){
  Acesso.findOne({'nome':nome}, function(erro, acesso){
    if(erro){
      callback('Deu erro');
    }else if(acesso){
      if(acesso.validaSenha(senha)){
        callback(acesso.token);
      }else{
        callback('dados incorretos');
      }
    }else{
      callback('Acesso negado!');
    }
  })
}


exports.list = function(token, callback){
  Acesso.findOne({'token':token}, function(erro, acesso){
    if(erro){
      callback('Deu erro');
    }else if(acesso){
      callback({'nome':acesso.nome});
    }else{
      callback('Acesso não encontrado!');
    }
  })
}

exports.authorize = function(token, callback){
  Acesso.findOne({'token':token}, function(erro, acesso){
    if(erro){
      callback(false);
    }else if(acesso){
      callback(true);
    }else{
      callback(false);
    }
  })
}
