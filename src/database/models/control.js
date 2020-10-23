'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class control extends Model { 
    static associate(model) {
      control.belongsTo(model.User,{foreignKey:'Id'});
      control.belongsTo(model.Medico,{foreignKey:'Id_Medico'});
      control.belongsTo(model.Patient,{foreignKey:'Id_Paciente'});
    }
  };
  control.init({
    Id_Control:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id:DataTypes.INTEGER,
    Id_Medico: DataTypes.INTEGER,
    Id_Paciente: DataTypes.INTEGER,
    Fecha_ingreso:DataTypes.DATEONLY
  }, {
    sequelize,
    timestamps:false,
    tableName:'Control',
    modelName: 'control',
  });
  return control;
};