
var app = require('./config/app_config');
var db = require('./config/db_config');
var User = require('./models/user')
var userController = require('./controllers/userController');
var userRouter = require('./routes/userRouter');
var acessoRouter = require('./routes/acessoRouter');
var instituicaoRouter = require('./routes/instituicaoRouter');


var topicoRouter = require('./routes/topicoRouter');
var comentarioRouter = require('./routes/comentarioRouter');
var respostaRouter = require('./routes/respostaRouter');

app.get('/', function(req, res){
  res.end('Bem-vindo a API')
});


//rotas do usuário
app.use('/usuario',userRouter);
app.use('/acesso',acessoRouter);
app.use('/instituicao',instituicaoRouter);

app.use('/topico',topicoRouter);
app.use('/comentario',comentarioRouter);
app.use('/resposta',respostaRouter);
