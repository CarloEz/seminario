const { Peso } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let peso = await Peso.findAll();
        res.json({data:peso});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const peso = await Peso.findAll({where:{Id_Paciente:req.params.id}});
        res.json(peso);
    }catch{
        res.json('false');
    }
}


ctrl.registro = async (req, res) => {
    try{
        const peso = await Peso.findByPk(req.params.id);
        res.json(peso);
    }catch{
        res.json('false');
    }
}


ctrl.sup = async (req, res) => {
    try{
        const deleted = await Peso.destroy({
            where: {
                Id_MP: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const peso = await Peso.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await Peso.update(
            req.body,
            {
                where: {
                    Id_MP: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;