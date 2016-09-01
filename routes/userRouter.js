var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
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

router.get('/',pegarToken, function(req, res){
  var token = req.token;
  acessoController.authorize(token, function(resp){
    if(resp === true){
        userController.list(function(resp){
          res.json(resp)
        });
    }else {
      res.sendStatus(403);
    }
  })



});

router.post('/cadastro', function(req, res){
  var nome = req.body.nome;
  var senha = req.body.senha;

  userController.save(nome, senha, function(resp){
    res.json(resp);
  })
});

router.delete('/delete/:id', function(req, res){
  var id = req.params.id;

  userController.delete(id, function(resp){
    res.json(resp);
  })
});

module.exports = router;
