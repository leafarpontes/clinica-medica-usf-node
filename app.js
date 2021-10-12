// importando express e mongoose/mysql
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cadastroRouters = require('./routers/cadastroRouters');

// setando a porta de conexão
const port = 3000;

// configuração da view engine e etc
app.set('view engine', 'ejs');
app.set('views', __dirname, '/views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// configurar o projeto para usar a pasta public
app.use(express.static('public'));

// teste página inicial
app.get('/', (req, res) => {
    res.send('página inicial');
})

app.use('/', cadastroRouters);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})