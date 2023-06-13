const { Model,DataTypes } = require('sequelize');
class Usuario extends Model{
	static init(connection){
		super.init({
			nome: DataTypes.STRING,
			email: DataTypes.STRING,
			senha: DataTypes.STRING,
			token: DataTypes.STRING,
		},{
			sequelize:connection
		})
	}
	static associate(models){
		this.hasMany(models.Estabelecimento, {foreignKey:"usuario_id",as:"estabelecimentos"});
	}
}

module.exports = Usuario;