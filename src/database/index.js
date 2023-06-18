const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Estabelecimento = require('../models/Estabelecimento');
const Permissao = require('../models/Permissao');

const connection = new Sequelize(dbConfig);

//conexao
Usuario.init(connection);
Estabelecimento.init(connection);
Permissao.init(connection);

//associate
Usuario.associate(connection.models);
Estabelecimento.associate(connection.models);

module.exports = connection;