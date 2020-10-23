const { Nutricion } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let nutricion = await Nutricion.findAll();
        res.json({data:nutricion});
    }catch{
        res.json('false: ');
    }
}

ctrl.id = async (req, res) => {
    try{
        const nutricion = await Nutricion.findAll({where:{Id_Paciente:req.params.id}});
        res.json(nutricion);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Nutricion.destroy({
            where: {
                Id_Estado_N: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const nutricion = await Nutricion.create(req.body);
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {        
        const update = await Nutricion.update(
            req.body,
            {
                where: {
                    Id_Estado_N: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;