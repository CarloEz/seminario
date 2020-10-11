'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nutricion extends Model {
    static associate(model){
      nutricion.belongsTo(model.Patient,{foreignKey:'Id_Paciente'});
    }
  };

  nutricion.init({
    Id_Estado_N:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente: DataTypes.INTEGER,
    Peso: DataTypes.STRING(50),
    Talla: DataTypes.STRING(50),
    Peso_Min: DataTypes.STRING(30),
    Peso_Max: DataTypes.STRING(30),
    Fecha_E:DataTypes.DATEONLY,
    Primero: DataTypes.STRING(50),
    Segundo: DataTypes.STRING(50),
    Tercero: DataTypes.STRING(50),
    Grado: DataTypes.STRING(50),
    Observaciones: DataTypes.STRING,
  }, {
    sequelize,
    tableName:'Estado_Nutricional',
    modelName: 'nutricion',
    timestamps:false
  });
  return nutricion;
};