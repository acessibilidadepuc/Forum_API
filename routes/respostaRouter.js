var express = require('express');
var router = express.Router();
var respostaController = require('../controllers/respostaController');

router.post('/cadastrar', function(req, res){
  console.log("Entrou em Resposta");

  var idComentario = req.body.idComentario;
  var dataHora = req.body.dataHora;
  var idUsuario = req.body.idUsuario;
  var resposta = req.body.resposta;
  respostaController.save(idComentario, dataHora, idUsuario, resposta, function(resp){
    res.json(resp);
  })
})


router.get('/lista/:id', function(req, res){
  var id = req.params.id;
  respostaController.list(id, function(resp){
    res.json(resp);
  })
})

router.get('/listar/:id', function(req, res){
  var id = req.params.id;
  respostaController.listOne(id, function(resp){
    res.json(resp);
  })
});

module.exports = router;
