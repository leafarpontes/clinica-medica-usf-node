// importando express
const express = require('express');
const app = express();

// importando as rotas do arquivo cadastroRouters.js
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

// usando as rotas nas páginas
app.use('/', cadastroRouters);

// App escutando na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})