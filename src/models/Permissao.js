const { Model,DataTypes } = require('sequelize');
class Permissao extends Model{
	static init(connection){
		super.init({
			nome: DataTypes.STRING,
			descricao: DataTypes.STRING,
		},{
			sequelize:connection,
			tableName:'permissoes',
		})
	}
}

module.exports = Permissao;