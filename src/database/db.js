const {Sequelize, DataTypes}= require('sequelize');
require('dotenv').config();
const db={};
db.connection=new Sequelize(process.env.db_name, process.env.db_user, process.env.db_pas,{
        host: process.env.db_host,
        dialect: process.env.db_dialect,
        logging:false
});

db.User=require('./models/user')(db.connection,DataTypes);

db.Patients=require('./models/patients')(db.connection,DataTypes);

module.exports=db;