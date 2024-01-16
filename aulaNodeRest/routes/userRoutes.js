// routes/usuarioRoutes.js
const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router()

// Rotas relacionadas a usuários
router.get('/home', usuarioController.home);
router.get('/listar', usuarioController.listar);
router.get('/criarUser', usuarioController.formCadastro); // renderiza o formulário de cadastro
router.post('/criar', usuarioController.criar);

module.exports = router;