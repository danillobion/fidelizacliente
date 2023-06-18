const Permissao = require('../models/Permissao');
module.exports={
	async findAll(req,res){
                const permissoes = await Permissao.findAll();
                return res.json(permissoes);
	}
}