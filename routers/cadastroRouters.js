var express = require('express');
const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

router.get('/cadastrarUsuario', cadastroController.cadastrarUsuarioGet);

router.get('/cadastrarFuncionario', cadastroController.cadastrarFuncionarioGet);

router.post('/cadastrarUsuario', cadastroController.cadastrarUsuarioPost);

router.post('/cadastrarFuncionario', cadastroController.cadastrarFuncionarioPost);

router.get('/listarFuncionarios', cadastroController.listarFuncionariosGet);

router.get('/listarPacientes', cadastroController.listarPacientesGet);

module.exports = router;