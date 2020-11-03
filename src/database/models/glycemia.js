'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Glycemia extends Model {
    static associate(model){
      Glycemia.belongsTo(model.Patient,{foreignKey:'Id_Paciente'});
    }
  }
  Glycemia.init({
    Id_Glicemia:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente: DataTypes.INTEGER,
    Fecha_Glicemia:DataTypes.DATEONLY,
    Hora_Pre:DataTypes.TIME,
    Pre:DataTypes.BOOLEAN,
    Hora_Pos:DataTypes.TIME,
    Pos:DataTypes.BOOLEAN
  },
  { 
    sequelize,
    tableName:'Glicemia',
    modelName: 'Glycemia',
    timestamps:false,
  });
  return Glycemia;
};
