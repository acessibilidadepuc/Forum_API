var Instituicao = require('../models/instituicao');

exports.save = function(tipo,razao_social, cnpj, areaAtuacao,
                        site, rua, numero, complemento, bairro,
                        cep, cidade, estado, servicos,
                        recursos, email, telefone1, telefone2, nomePermissao,
                        tipoPermissao, login, senha1, senha2, callback){
  Instituicao.findOne({'acesso.login':login}, function(erro, instituicao){
    if(erro){
      callback('Deu Erro')
    }else if(instituicao){
      callback('Instituicao ja existe')
    }else{
      //var obj = JSON.parse(recursos);
      var novaInstituicao = new Instituicao();

          novaInstituicao.tipo = tipo;
          novaInstituicao.razao_social = razao_social;
          novaInstituicao.cnpj = cnpj;
          novaInstituicao.areaAtuacao = areaAtuacao;
          novaInstituicao.site = site;

          novaInstituicao.endereco.rua = rua;
          novaInstituicao.endereco.numero = numero;
          novaInstituicao.endereco.complemento = complemento;
          novaInstituicao.endereco.bairro = bairro;
          novaInstituicao.endereco.cep = cep;
          novaInstituicao.endereco.cidade = cidade;
          novaInstituicao.endereco.estado = estado;

          novaInstituicao.servicos = servicos;

          novaInstituicao.recursos = recursos;


          novaInstituicao.contato.email = email;
          novaInstituicao.contato.telefone1 = telefone1;
          novaInstituicao.contato.telefone2 = telefone2;

          novaInstituicao.permissao.nome = nomePermissao;
          novaInstituicao.permissao.tipo = tipoPermissao;

          novaInstituicao.acesso.login = login;
          novaInstituicao.acesso.senha1 = novaInstituicao.gerarSenha(senha1);
          novaInstituicao.acesso.senha2 = novaInstituicao.gerarSenha(senha2);
          novaInstituicao.acesso.token = novaInstituicao.gerarToken(login);

      novaInstituicao.save(function(erro, instituicao){
        if(erro){
          callback('deu erro');
        }else{
          callback(instituicao);
        }
      })
    }
  })
}

exports.login = function(login, senha, callback){
  Instituicao.findOne({'acesso.login':login}, function(erro, instituicao){
    if(erro){
      callback('Deu erro');
    }else if(instituicao){
      if(instituicao.validaSenha(senha)){
        callback(instituicao);
      }else{
        callback('dados incorretos');
      }
    }else{
      callback('Sem instituicao');
    }
  })
}


exports.list = function(token, callback){
  Instituicao.findOne({'acesso.token':token}, function(erro, instituicao){
    if(erro){
      callback('Deu erro');
    }else if(instituicao){
      callback({'instituicao':instituicao});
    }else{
      callback('Acesso não encontrado!');
    }
  })
}

exports.authorize = function(token, callback){
  Instituicao.findOne({'acesso.token':token}, function(erro, instituicao){
    if(erro){
      callback(false);
    }else if(instituicao){
      callback(true);
    }else{
      callback(false);
    }
  })
}
