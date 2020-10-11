const { Glicemia } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let glicemia = await Glicemia.findAll();
        console.log(glicemia);
        res.json({glicemia:glicemia});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
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
                id: req.params.id
            }
        })
        if (deleted) { res.json("glicemia eliminado") }
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
                    id: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;