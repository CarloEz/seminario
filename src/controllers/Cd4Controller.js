const { Cd4 } = require("../database/db");
let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let cd4 = await Cd4.findAll();
        res.json({data:cd4});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const cd4 = await Cd4.findAll({where:{Id_Paciente:req.params.id}})
        res.json(cd4);
    }catch{
        res.json('false');
    }
}

ctrl.registro = async (req, res) => {
    try{
        const cd4 = await Cd4.findByPk(req.params.id);
        res.json(cd4);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await Cd4.destroy({
            where: {
                Id_CD_CV: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const cd4 = await Cd4.create(req.body)
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        console.log(req.body);
        const update = await Cd4.update(
            req.body,
            {
                where: {
                    Id_CD_CV: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch(error) {
        res.json('false');
    }
}

module.exports = ctrl;