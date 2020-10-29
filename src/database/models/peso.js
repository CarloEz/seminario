'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peso extends Model {
    static associate(model){
      peso.belongsTo(model.Patient,{foreignKey:'Id_Paciente'});
    }
  };

  peso.init({
    Id_MP:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente:DataTypes.INTEGER,
    Talla: DataTypes.STRING(50),
    Peso_Min: DataTypes.STRING(30),
    Peso_Max: DataTypes.STRING(30),
  }, {
    sequelize,
    tableName:'Medida_Peso',
    modelName: 'peso',
    timestamps:false
  });
  return peso;
};