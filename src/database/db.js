const {Sequelize, DataTypes}= require('sequelize');
require('dotenv').config();
const db={};

//Cadena de conexion
db.connection=new Sequelize(process.env.db_name, process.env.db_user, process.env.db_pas,{
        host: process.env.db_host,
        dialect: process.env.db_dialect,
        logging:false,
});

//Models
db.User=require('./models/user')(db.connection,DataTypes);

db.Patient=require('./models/patient')(db.connection,DataTypes);

db.Medico=require('./models/medico')(db.connection,DataTypes);

db.Control=require('./models/control')(db.connection,DataTypes);

db.Cd4= require('./models/cd4')(db.connection,DataTypes);

db.Glicemia= require('./models/glycemia')(db.connection,DataTypes);

db.Nivel= require('./models/nivel')(db.connection,DataTypes);

db.Nutricion= require('./models/nutricion')(db.connection,DataTypes);

//Asociar modelos
db.Medico.associate(db);
db.Patient.associate(db);
db.Nivel.associate(db);
db.Control.associate(db);
db.Glicemia.associate(db);
db.Cd4.associate(db);
db.Nutricion.associate(db);

module.exports=db;