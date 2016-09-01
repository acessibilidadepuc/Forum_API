var express = require('express');
var router = express.Router();
var instituicaoController = require('../controllers/instituicaoController');

function pegarToken(req, res, next){
  var header = req.headers['authorization'];

  if(typeof header !== 'undefined'){
    req.token = header;
    next();
  }else{
    res.sendStatus(403);
  }
}

router.post('/cadastrar', function(req, res){
  var tipo = req.body.tipo;
  var razao_social = req.body.razao_social;
  var cnpj = req.body.cnpj;
  var areaAtuacao = req.body.areaAtuacao;
  var site = req.body.site;
  var rua = req.body.rua;
  var numero = req.body.numero;
  var complemento = req.body.complemento;
  var bairro = req.body.bairro;
  var cep = req.body.cep;
  var cidade = req.body.cidade;
  var estado = req.body.estado;
  var servicos = req.body.servicos;
  var recursos = req.body.recursos;
  var email = req.body.email;
  var telefone1 = req.body.telefone1;
  var telefone2 = req.body.telefone2;
  var nomePermissao = req.body.nomePermissao;
  var tipoPermissao = req.body.tipoPermissao;
  var login = req.body.login;
  var senha1 = req.body.senha1;
  var senha2 = req.body.senha2;
  instituicaoController.save(tipo,razao_social, cnpj, areaAtuacao,
                          site, rua, numero, complemento, bairro,
                          cep, cidade, estado, servicos,
                          recursos, email, telefone1, telefone2, nomePermissao,
                          tipoPermissao, login, senha1, senha2, function(resp){
    res.json(resp);
  })
})

router.post('/login', function(req, res){

  var login = req.body.login;
  var senha = req.body.senha;
  instituicaoController.login(login, senha, function(resp){
    res.json(resp);
  })
})


router.get('/listar', pegarToken, function(req, res){
  var token = req.token;
  instituicaoController.list(token, function(resp){
    res.json(resp);
  })
})


module.exports = router;
