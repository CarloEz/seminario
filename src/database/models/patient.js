'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(model){      
      Patient.hasMany(model.Control,{foreignKey:'Id_Paciente'});
      Patient.hasMany(model.Nutricioni,{foreignKey:'Id_Paciente'});
      Patient.hasMany(model.Glicemia,{foreignKey:'Id_Paciente'});
      Patient.hasMany(model.Enfermedad,{foreignKey:'Id_Paciente'}); 
      Patient.hasMany(model.Nutricion,{foreignKey:'Id_Paciente'});
      Patient.hasMany(model.Cvi,{foreignKey:'Id_Paciente'});
      Patient.hasMany(model.Cd4,{foreignKey:'Id_Paciente'});
      Patient.hasMany(model.Cd4I,{foreignKey:'Id_Paciente'});
    }
  };
  Patient.init({
    Id_Paciente:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Nombres_Paciente: DataTypes.STRING(50),
    Apellidos_Paciente: DataTypes.STRING(50),
    Direccion_Domiciliar:DataTypes.STRING(100),
    Municipio: DataTypes.STRING(50),
    Departamento: DataTypes.STRING(50),
    Pais: DataTypes.STRING(50),
    Edad: DataTypes.INTEGER,
    Fecha_Nacimiento: DataTypes.DATEONLY,
    Genero: DataTypes.STRING(25),
    Ocupacion: DataTypes.STRING(50),
    Id_Nivel_E: DataTypes.STRING(50),
    Sabe_Leer: DataTypes.BOOLEAN,
    Fecha_Prueba:DataTypes.DATEONLY,
    Registro_hospitalario:DataTypes.STRING,
    Toma_ARV:DataTypes.STRING(30),
    Fecha_InicioARV:DataTypes.DATEONLY
  }, {
    sequelize,
    tableName:'Paciente',
    modelName: 'Patient',
    timestamps:false
  });
  return Patient;
};