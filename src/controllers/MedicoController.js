const { Medico } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let medico = await Medico.findAll();
        res.json({data:medico});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const medico = await Medico.findByPk(req.params.id);
        res.json(medico);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Medico.destroy({
            where: {
                Id_Medico: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const medico = await Medico.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await Medico.update(
            req.body,
            {
                where: {
                    Id_Medico: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;