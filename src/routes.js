const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const PermissaoController = require('./controllers/PermissaoController.js');

const routes = express.Router();

//teste
routes.get('/',(req, res)=>{
	return res.json({ola:'mundo'});
});

//usuario
routes.post('/usuario',UsuarioController.store);
routes.get('/usuario',UsuarioController.findAll);
//permissao
routes.get('/permissao',PermissaoController.findAll);
//estabelecimento
routes.post('/estabelecimento',EstabelecimentoController.store);
routes.get('/estabelecimento/:usuario_id',EstabelecimentoController.findAll);

module.exports=routes;