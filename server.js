const express = require('express'); //importar o modulo express
const server = express(); // instanciar o express
const dotenv = require('dotenv').config(); // importar e configurar o módulo

//Configurações
server.use(express.json()); //permitir resposta ao cliente em formato JSON

//Rotas
server.use(require('./src/routes'));

server.listen(process.env.PORT); // Criar o servidor e faze-lo escutar em uma porta
console.log(`Servidor for iniciado na porta ${process.env.PORT}.`);