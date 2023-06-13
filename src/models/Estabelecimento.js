const { Model,DataTypes } = require('sequelize');
class Estabelecimento extends Model{
	static init(connection){
		super.init({
			usuario_id: DataTypes.INTEGER,
			nome: DataTypes.STRING,
			cnpj: DataTypes.STRING,
		},{
			sequelize:connection
		})
	}
	static associate(models){
		this.belongsTo(models.Usuario,{foreignKey:"usuario_id",as:"usuario"});
	}
}

module.exports = Estabelecimento;