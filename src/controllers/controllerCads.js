const Cad = require('../models/cads')

module.exports = {
    async Delete(req,res){
        const del = await Cad.destroy({
            where:{
                id:req.params.id
            } 
        })
        return res.json(del)
    },
    
    async find (req,res){
        const find = await Cad.findOne({
            where:{
                id:req.params.id
            }
        })
     
        return res.json(find)
    },

    async index(req,res){
        const cads = await Cad.findAll()

        return res.json(cads)
    },

    async store(req,res){
        const {Name,LastName,Email} = req.body;

        const cads = await Cad.create({ Name,LastName,Email})

        return res.json(cads)
    }
}