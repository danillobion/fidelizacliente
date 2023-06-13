const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Estabelecimento = require('../models/Estabelecimento');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Estabelecimento.init(connection);

Usuario.associate(connection.models);
Estabelecimento.associate(connection.models);

module.exports = connection;