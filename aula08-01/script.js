document.addEventListener('DOMContentLoaded', function () {
let formUser = document.getElementById("cadUser")
let loginUser = document.getElementById("formLogin")
const banco = JSON.parse(localStorage.getItem('users')) || []

//rotina para receber os dados e validar.

if(formUser){
    formUser.addEventListener('submit', function(event){
    event.preventDefault();
    let user = {} // criando um objeto vazio para guardar os dados
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone =  document.getElementById('telefone').value
    let senha = document.getElementById('senha').value
    let repetirSenha = document.getElementById('repetirSenha').value

    if(senha === repetirSenha){ //validação básica
        user = {nome, email, telefone, senha} // setando os dados
        salvarUsuario(user) // passando para a função
        alert("Cadastro realizado com sucesso!")
        window.location.href = 'index.html'
    }else{
        alert("As senhas estão divergentes")
    }
    })
}

if(loginUser){
    loginUser.addEventListener('submit', function(event){
    event.preventDefault()
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    if(email && senha){
        console.log("chegueeiiii")
        login(email, senha)
    }

    })
}


function salvarUsuario(user){//aqui guardamos no localstorage
    banco.push(user)
    localStorage.setItem('users', JSON.stringify(banco)); 
}
function login(user, senha){
    const username = banco.find(u => u.email === user);
    const senhaUser = banco.find(u => u.senha === senha)
    let bemVindo = document.getElementById("user");
    console.
    if(username && senhaUser){
        console.log("Autenticado")
        alert("Sucesso!")
        window.location.href = 'painel.html'
       
        bemVindo.innerText += "Joell"
        
    }else if(username && !senhaUser){
        console.log("Senha incorreta")
    }else{
        console.log("User não encontrado.")
    }

}

})




