USE clinica_medica;

DROP TABLE pacientes;
DROP TABLE funcionarios;

CREATE TABLE IF NOT EXISTS pacientes(
    id_paciente INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    data_nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    logradouro VARCHAR(50) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(80),
    PRIMARY KEY(id_paciente)
);

CREATE TABLE IF NOT EXISTS funcionarios(
    id_funcionario INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    telefone VARCHAR(14) NOT NULL,
    data_nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    cargo VARCHAR(80) NOT NULL,
    registro VARCHAR(50) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    logradouro VARCHAR(50) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(80),
    PRIMARY KEY(id_funcionario)
);