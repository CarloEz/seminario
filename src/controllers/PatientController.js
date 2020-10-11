const { Patient } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try {
        let paciente = await Patient.findAll({
            
            include: {
                association: 'nivel',
                attributes: ['Tipo_Nivel']
            }
        });
        res.json({ data: paciente });
    } catch {
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try {
        const paciente = await Patient.findByPk(req.params.id, {
            include: {
                association: 'nivel',
                attributes: ['Tipo_Nivel']
            }
        });
        res.json(paciente);
    } catch {
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try {
        const deleted = await Patient.destroy({
            where: {
                Id_Paciente: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    } catch {
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const paciente = await Patient.create(req.body)
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        const update = await Patient.update(
            req.body,
            {
                where: {
                    Id_Paciente: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch (error) {
        res.json('false');
    }
}

module.exports = ctrl;