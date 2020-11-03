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
db.Nutricioni= require('./models/nutricioni')(db.connection,DataTypes);
db.Glicemia= require('./models/glycemia')(db.connection,DataTypes);
db.Enfermedad= require('./models/enfermedad')(db.connection,DataTypes);
db.Nutricion= require('./models/nutricion')(db.connection,DataTypes);
db.Cvi= require('./models/cvi')(db.connection,DataTypes);
db.Cd4= require('./models/cd4')(db.connection,DataTypes);
db.Cd4I= require('./models/cd4I')(db.connection,DataTypes);
db.Peso=require('./models/peso')(db.connection,DataTypes);

//Asociar modelos
db.User.associate(db);
db.Medico.associate(db);
db.Patient.associate(db);
db.Nutricioni.associate(db);
db.Control.associate(db);
db.Glicemia.associate(db);
db.Enfermedad.associate(db);
db.Nutricion.associate(db);
db.Cvi.associate(db);
db.Cd4.associate(db);
db.Cd4I.associate(db);
db.Peso.associate(db);

module.exports=db;