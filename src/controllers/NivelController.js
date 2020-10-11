const { Nivel } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let nivel = await Nivel.findAll();
        res.json({data:nivel});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const nivel = await Nivel.findByPk(req.params.id);
        res.json(nivel);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Nivel.destroy({
            where: {
                Id_Nivel_E: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const nivel = await Nivel.create(req.body)
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        const update = await Nivel.update(
            req.body,
            {
                where: {
                    Id_Nivel_E: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;