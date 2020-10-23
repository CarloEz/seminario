const { GlicemiaDet } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let glicemiadet = await GlicemiaDet.findAll();
        res.json({data:glicemiadet});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const glicemiadet = await GlicemiaDet.findAll({where:{Id_Glicemia:req.params.id}});
        res.json(glicemiadet);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await GlicemiaDet.destroy({
            where: {
                Id_Glicemia_D: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const glicemiadet = await GlicemiaDet.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await GlicemiaDet.update(
            req.body,
            {
                where: {
                    Id_Glicemia_D: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;