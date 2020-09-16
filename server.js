const express = require('express'); //importar o modulo express
const server = express(); // instanciar o express
const dotenv = require('dotenv').config(); // importar e configurar o módulo

//Rotas

//req -> requsição do cliente
//res -> resposta do servidor
server.get('/',function(req,res){ 
    res.send('Bem vindo ao meu servidor NodeJS.');
});

server.get('/cursos', function(req,res){
    res.json({
        'web' : "React NodeJS",
        "mobile" : "React Native",
        "ML" :  "Data Science"
    });
});

server.listen(process.env.PORT); // Criar o servidor e faze-lo escutar em uma porta
console.log(`Servidor for iniciado na porta ${process.env.PORT}.`);