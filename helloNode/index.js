const express = require('express')
const app = express()
const path = require('path') 
const port = 3000
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Word')
})
app.get('/teste', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/contato', (req, res) =>{
    res.send('Olá intruso!!!')
})

app.post('/cadastro', (req, res)=>{
    res.send("Opaaaa")
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

