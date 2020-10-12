const { Cvi } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let cvi = await Cvi.findAll();
        res.json({data:cvi});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const cvi = await Cvi.findByPk(req.params.id);
        res.json(cvi);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Cvi.destroy({
            where: {
                Id_CV_I: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const cvi = await Cvi.create(req.body)
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        const update = await Cvi.update(
            req.body,
            {
                where: {
                    Id_CV_I: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;