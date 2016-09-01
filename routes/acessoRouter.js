var express = require('express');
var router = express.Router();
var acessoController = require('../controllers/acessoController');

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
  var nome = req.body.nome;
  var senha = req.body.senha;
  acessoController.save(nome, senha, function(resp){
    res.json(resp);
  })
})

router.post('/login', function(req, res){
  
  var nome = req.body.nome;
  var senha = req.body.senha;
  acessoController.login(nome, senha, function(resp){
    res.json(resp);
  })
})

router.get('/listar', pegarToken, function(req, res){
  var token = req.token;
  acessoController.list(token, function(resp){
    res.json(resp);
  })
})



module.exports = router;
