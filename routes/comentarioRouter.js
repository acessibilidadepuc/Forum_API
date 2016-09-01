var express = require('express');
var router = express.Router();
var comentarioController = require('../controllers/comentarioController');

router.post('/cadastrar', function(req, res){
  console.log("Entrou em comentario");

  var idTopico = req.body.idTopico;
  var dataHora = req.body.dataHora;
  var idUsuario = req.body.idUsuario;
  var comentario = req.body.comentario;
  console.log("Comentários : " + comentario);

  comentarioController.save(idTopico, dataHora, idUsuario, comentario, function(resp){
    res.json(resp);
  })
})


router.get('/lista/:idTopico', function(req, res){

  var idTopico = req.params.idTopico;
  console.log("Id do topico : " + idTopico);
  
  comentarioController.list(idTopico, function(resp){
    res.json(resp);
  })
})

router.get('/listar/:id', function(req, res){
  var id = req.params.id;
  comentarioController.listOne(id, function(resp){
    res.json(resp);
  })
});

module.exports = router;
