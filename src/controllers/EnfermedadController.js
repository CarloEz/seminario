const { Enfermedad } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let enfermedad = await Enfermedad.findAll();
        res.json({data:enfermedad});
    }catch{
        res.json('false');
    }
}


ctrl.paciente = async (req, res) => {
    try{
        const enfermedad = await Enfermedad.findAll({where:{Id_Paciente:req.params.id}});
        res.json(enfermedad);
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const enfermedad = await Enfermedad.findByPk(req.params.id);
        res.json(enfermedad);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Enfermedad.destroy({
            where: {
                Id_EO: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const enfermedad = await Enfermedad.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await Enfermedad.update(
            req.body,
            {
                where: {
                    Id_EO: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;