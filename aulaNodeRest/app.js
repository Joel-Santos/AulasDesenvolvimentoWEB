const express = require('express')
const bodyParser = require ('body-parser')
const userRoutes = require('./routes/userRoutes')
const app = express()
const path = require('path') 
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user',userRoutes) // criando um rota especifica para os usuarios.
//app.use(express.urlencoded({extended:true}))// linha para que possamos receber dados do form html
app.get('/' , (req, res) =>{
    //res.send("Hoje é segunda-feira, bora acordar!!!")
    const teste = {"nome": "Joel", "idade": 18}
    res.render('cadUser', {dados:teste} )
});

app.listen(port, ()=>{
    console.log(`aplicação rodando em: http://localhost:${port}`)
})
