const { response } = require('express')
const db = require('../databases/connection')

alunoControler = {

    novoAluno:(req, res)=>{
        const {matricula, nome, email, data_nascimento, turma, fone, sexo} = req.body 
        db.insert({matricula, nome, email, data_nascimento, turma, fone, sexo}).table("alunos").then(data=>{
            console.log(data)
            res.json({message: 'Aluno salvo com sucesso!'})
        }).catch(error=>{
            console.log(error)
        })
    },
    listarAlunos: (req, res)=>{
        db.select("*").table("alunos").then(
            alunos=>{
                console.log(alunos)
                res.json(alunos)
            }).catch(error=>{
                console.log(error)
            })
    },
    buscarAluno:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("alunos").where({matricula:id.matricula}).then(aluno=>{
            console.log(aluno)
            res.json(aluno)
        }).catch(error=>{
            console.log(error)
        })
    },
    buscarAlunoTurma:(req, res)=>{
        const id = req.params
        console.log(id.turma)
        db.select("*").table("alunos").where({turma:id.turma}).then(aluno=>{
            console.log(aluno)
            res.json(aluno)
        }).catch(error=>{
            console.log(error)
        })
    },
    deletarAluno: (req, res)=> {
        const id = req.params
        db.where({matricula: id.matricula }).del().table("alunos").then(data => {
            res.json({ message: "Aluno removido" })
        }).catch(error => {
            res.json(error)
        })
    }
   

}
module.exports = alunoControler