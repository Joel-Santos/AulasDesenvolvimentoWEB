const express = require('express')
const override = require('method-override')
const alunoController = require('../controllers/alunoController')

const router = express.Router()
router.use(override('_method'))
router.post('/novoAluno',alunoController.novoAluno)
router.get('/listarAlunos', alunoController.listarAlunos)
router.get('/buscarAluno/:matricula', alunoController.buscarAluno)
router.get('/buscarAluno/:', alunoController.buscarAlunoTurma)
router.delete('/deletarAluno/:matricula', alunoController.deletarAluno)
router.put('/editarAluno/:matricula', alunoController.editarAluno)
router.get('/editarAluno/:matricula',alunoController.formEditarAluno)
router.get('/cadastroAluno', alunoController.formCadastro)

module.exports = router
