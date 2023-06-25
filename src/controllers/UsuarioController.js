const Usuario = require('../models/Usuario');
const Permissao = require('../models/Permissao');
const bcrypt = require("bcrypt");

module.exports={
	async store(req,res){
		const {nome,email,senha} = req.body;
		const hashedSenha = await bcrypt.hash(senha+"|"+email, 10);
		const permissao = await Permissao.findByPk(1);
		if(!permissao){
			return res.status(400).json({error: "Permissão não encontrada"});
		}
		const usuario = await Usuario.create({nome,email,senha:hashedSenha,permissoes:permissao.nome});
		return res.json(usuario);
	},
	async findAll(req,res){
		const usuarios = await Usuario.findAll();
		return res.json(usuarios);
	}
}