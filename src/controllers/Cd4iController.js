const { Cd4I } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let cd4i = await Cd4I.findAll();
        res.json({data:cd4i});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const cd4i = await Cd4I.findByPk(req.params.id);
        res.json(cd4i);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Cd4I.destroy({
            where: {
                Id_CD4_I: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const cd4i = await Cd4I.create(req.body)
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        const update = await Cd4I.update(
            req.body,
            {
                where: {
                    Id_CD4_I: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;