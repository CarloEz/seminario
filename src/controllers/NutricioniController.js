const { Nutricioni } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let nutricion = await Nutricioni.findAll();
        res.json({data:nutricion});
    }catch{
        res.json('false: ');
    }
}

ctrl.id = async (req, res) => {
    try{
        const nutricion = await Nutricioni.findByPk(req.params.id);
        res.json(nutricion);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Nutricioni.destroy({
            where: {
                Id_ENI: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const nutricion = await Nutricioni.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await Nutricioni.update(
            req.body,
            {
                where: {
                    Id_ENI: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;