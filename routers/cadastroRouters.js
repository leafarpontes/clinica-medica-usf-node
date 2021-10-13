// requerimento do Express
var express = require('express');
const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

// Rota GET da página /cadastrarUsuario (Cadastro de Pacientes)
router.get('/cadastrarUsuario', cadastroController.cadastrarUsuarioGet);

// Rota GET da página /cadastrarFuncionario (Cadastro de Funcionários)
router.get('/cadastrarFuncionario', cadastroController.cadastrarFuncionarioGet);

// Rota POST da página /cadastrarUsuario (Envio do formulário)
router.post('/cadastrarUsuario', cadastroController.cadastrarUsuarioPost);

// Rota POST da página /cadastrarFuncionario (Envio do formulário)
router.post('/cadastrarFuncionario', cadastroController.cadastrarFuncionarioPost);

// Rota GET da página /listarFuncionarios
router.get('/listarFuncionarios', cadastroController.listarFuncionariosGet);

// Rota GET da página /listarPacientes
router.get('/listarPacientes', cadastroController.listarPacientesGet);

// Exportando o modulo router para ser usado em outros arquivos
module.exports = router;