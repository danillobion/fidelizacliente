const Estabelecimento = require('../models/Estabelecimento');
const Usuario = require('../models/Usuario');
module.exports={
	async store(req,res){
		const {usuario_id,nome,cnpj} = req.body; 
		const usuario = await Usuario.findByPk(usuario_id);
		if(!usuario){
			return res.status(400).json({error: "Usuário não encontrado"});
		}
		const estabelecimento = await Estabelecimento.create({usuario_id,nome,cnpj});
		return res.json(estabelecimento);
	},
	async findAll(req,res){
		const {usuario_id} = req.params; 
		const usuario = await Usuario.findByPk(usuario_id,{
			include:{association:'estabelecimentos'}
		});
		if(!usuario){
			return res.status(400).json({error: "Usuário não encontrado"});
		}
		return res.json(usuario);
	}
}