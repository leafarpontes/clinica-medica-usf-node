// fazendo a conexão com o mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "clinica_medica"
});

// rota GET para a página de cadastro de usuário
exports.cadastrarUsuarioGet = (req, res) => {
    res.render('views/pages/cadastrarUsuario');
}

// rota GET para a página de cadastro de funcionários
exports.cadastrarFuncionarioGet = (req, res) => {
    res.render('views/pages/cadastrarFuncionario');
}

// rota POST para a página de cadastro de usuários
exports.cadastrarUsuarioPost = (req, res) => {
    let email = req.body.emailUser;
    let senha = req.body.senhaUser;
    let nome = req.body.nomeUser;
    let cpf = req.body.cpfUser;
    let celular = req.body.celularUser;
    let dataNascimento = req.body.dataNascUser;
    let sexo = req.body.sexoUser;
    let cep = req.body.cepUser;
    let logradouro = req.body.logradouroUser;
    let numero = req.body.numeroUser;
    let complemento = req.body.complementoUser;

    var sql = `INSERT INTO pacientes (nome, cpf, email, senha, telefone, data_nascimento, sexo, cep, logradouro, numero, complemento) VALUES ('${nome}', '${cpf}', '${email}', '${senha}', '${celular}', DATE_FORMAT("${dataNascimento}", "%Y-%m-%d"), '${sexo}', '${cep}', '${logradouro}', '${numero}', '${complemento}')`;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.redirect('/listarPacientes');
    });
    
}

// rota POST para a página de cadastro de usuários
exports.cadastrarFuncionarioPost = (req, res) => {
    let email = req.body.emailFunc;
    let senha = req.body.senhaFunc;
    let nome = req.body.nomeFunc;
    let cpf = req.body.cpfFunc;
    let telefone = req.body.celularFunc;
    let dataNascimento = req.body.dataNascFunc;
    let sexo = req.body.sexoFunc;
    let cargo = req.body.cargoFunc;
    let registro = req.body.registroFunc;
    let cep = req.body.cepFunc;
    let logradouro = req.body.logradouroFunc;
    let numero = req.body.numeroFunc;
    let complemento = req.body.complementoFunc;

    var sql = `INSERT INTO funcionarios (nome, cpf, email, senha, telefone, data_nascimento, sexo, cargo, registro, cep, logradouro, numero, complemento) VALUES ('${nome}', '${cpf}', '${email}', '${senha}', '${telefone}', DATE_FORMAT("${dataNascimento}", "%Y-%m-%d"), '${sexo}', '${cargo}', '${registro}', '${cep}', '${logradouro}', '${numero}', '${complemento}')`;

    con.query(sql, function(err, result) {
        if (err) throw err;
        res.redirect('/listarFuncionarios');
    });
    
}

exports.listarFuncionariosGet = (req, res) => {
    con.query('SELECT * FROM funcionarios', (err, funcionarios) => {
        if (err) throw err;
        res.render('views/pages/listarFuncionarios', {listaFuncionarios: funcionarios})
    })
}

exports.listarPacientesGet = (req, res) => {
    con.query('SELECT * FROM pacientes', (err, pacientes) => {
        if (err) throw err;
        res.render('views/pages/listarPacientes', {listaPacientes: pacientes})
    })
}