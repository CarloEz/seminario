'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class control extends Model { 
    static associate(models) {
      control.belongsTo(models.Medico,{foreignKey:'Id_Medico'});
      control.belongsTo(models.Patient,{foreignKey:'Id_Paciente'});
    }
  };
  control.init({
    Id_Control:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Medico: DataTypes.INTEGER,
    Id_Paciente: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    tableName:'Control',
    modelName: 'control',
  });
  return control;
};