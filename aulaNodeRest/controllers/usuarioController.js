// controllers/usuarioController.js
const Usuario = require('../models/usuarioModel');
const banco = [] //vetor que simula um banco de dados.

const usuarioController = {

    home: (req, res) =>{
        res.send("Oi, tudo bem com você ?")
    },
    criar: (req, res)=>{
        const {nome, email, senha} = req.body 
        console.log(nome)
        const user = new Usuario(nome, email, senha)
        if(user){
            res.json(user)
            banco.push(user)
        }else{
            res.send("Erro")
        }
        console.log(user)
    },
    formCadastro: (req, res) =>{
        res.render('CadUser')
    },
    listar: (req, res) =>{
        res.render('listarUsers',{users:banco})
    }

    

}
module.exports = usuarioController;



















// const usuarioController = {

//   listarUsuarios: (req, res) => {
//     res.render('dashboard', {usuarios: banco});
//   },
//   home: (req, res) =>{
//     res.send("Oi, tudo bem com você ?")
//   },
//   criarUsuario: (req, res) => {
//     // Lógica para criar um usuário (simulado)
//     const { nome, email, senha } = req.body; //Corpo da requisição
//     const novoUsuario = new Usuario(nome, email, senha);
//     banco.push(novoUsuario)
//     res.send(`Usuário criado: ${novoUsuario.nome}`);
//   },
//   formUser: (req, res) =>{
//     res.render('cadUser')
//   },





















  

//   atualizarUsuario: (req, res) => {
//     // Lógica para atualizar um usuário (simulado)
//     const { id } = req.params;
//     const { nome, email, senha } = req.body;
//     res.send(`Usuário atualizado: ${nome} (ID: ${id})`);
//   },

//   excluirUsuario: (req, res) => {
//     // Lógica para excluir um usuário (simulado)
//     const { id } = req.params;
//     res.send(`Usuário excluído (ID: ${id})`);
//   },

//   // Outras operações relacionadas a usuários
// };

// module.exports = usuarioController;
