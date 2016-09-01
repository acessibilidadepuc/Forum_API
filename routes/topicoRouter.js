var express = require('express');
var router = express.Router();
var topicoController = require('../controllers/topicoController');

router.post('/cadastrar', function(req, res){
  console.log("Entrou na Topico");
  var assunto = req.body.assunto;
  var idUsuario = req.body.idUsuario;
  var situacao = req.body.situacao;
  var datahora = req.body.datahora;
  var descricao = req.body.descricao;
  var grau = req.body.grau;

  topicoController.save(assunto, idUsuario, situacao,datahora, descricao, grau, function(resp){
    res.json(resp);
  })
})


router.get('/lista', function(req, res){
  topicoController.list(function(resp){
    res.json(resp);
  })
})

router.get('/listar/:id', function(req, res){

  var id = req.params.id;
  topicoController.listOne(id, function(resp){
    res.json(resp);
  })
});

module.exports = router;
