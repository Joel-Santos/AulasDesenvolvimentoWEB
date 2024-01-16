const knex = require('knex')({
    client: 'mysql2', 
    connection:{
        host:'localhost', //nome do host por padrão comumente localhost
        user: 'root', // nome do user por padrão root
        password:'usbw', //senha do banco, as vezes ""
        database:'escola' //nome da base de dados que será utilizada.
    }
});
module.exports = knex
