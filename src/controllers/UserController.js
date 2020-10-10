const {User}  = require('../database/db');
let ctrl={};

ctrl.all=async(req,res)=>{
    let users= await User.findAll();
    console.log(users);
    res.json(users);
}

ctrl.save= async(req,res)=>{
    let user= User.create({
        name:'Carlos',
        password:'Augusto'
    })
    await user.save();
    res.json('Ingresado');
}

module.exports=ctrl;