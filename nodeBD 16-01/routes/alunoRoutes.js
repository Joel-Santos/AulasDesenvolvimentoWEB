const express = require('express')
const alunoController = require('../controllers/alunoController')

const router = express.Router()

router.post('/novoAluno',alunoController.novoAluno)
router.get('/listarAlunos', alunoController.listarAlunos)
router.get('/buscarAluno/:matricula', alunoController.buscarAluno)
router.get('/buscarAluno/:', alunoController.buscarAlunoTurma)
router.delete('/deletarAluno/:matricula', alunoController.deletarAluno)

module.exports = router
