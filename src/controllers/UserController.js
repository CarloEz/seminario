const { hashSync } = require('bcryptjs');
const { User } = require('../database/db');
let ctrl = {};

ctrl.all = async (req, res) => {
    try{
        let users = await User.findAll();
        console.log(users);
        res.json({data:users});
    }catch{
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        res.json(user);
    }catch{
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try{
        const deleted = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (deleted) { res.json("Usuario eliminado") }
    }catch{
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const user = await User.create({
            usuario: req.body.usuario,
            correo:req.body.correo,
            password: hashSync(req.body.contrasenia,8)
        })
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        if(req.body.password){req.body.password=hashSync(req.body.password)}
        const update = await User.update(
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