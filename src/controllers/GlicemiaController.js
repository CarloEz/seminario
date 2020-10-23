const { Glicemia } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let glicemia = await Glicemia.findAll();
        res.json({data:glicemia});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const glicemia = await Glicemia.findAll({where:{Id_Paciente:req.params.id}});
        res.json(glicemia);
    }catch{
        res.json('false');
    }
}


ctrl.registro = async (req, res) => {
    try{
        const glicemia = await Glicemia.findByPk(req.params.id);
        res.json(glicemia);
    }catch{
        res.json('false');
    }
}


ctrl.sup = async (req, res) => {
    try{
        const deleted = await Glicemia.destroy({
            where: {
                Id_Glicemia: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const glicemia = await Glicemia.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await Glicemia.update(
            req.body,
            {
                where: {
                    Id_Glicemia: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;