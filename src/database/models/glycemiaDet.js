'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GlycemiaDet extends Model {
    static associate(model){
        GlycemiaDet.belongsTo(model.Glicemia,{foreignKey:'Id_Glicemia'});
    }
  }
  GlycemiaDet.init({
    Id_Glicemia_D:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
      ID_Glicemia:DataTypes.INTEGER,
      Hora:DataTypes.TIME,
      Pre_Pos:DataTypes.BOOLEAN  
  },
  { 
    sequelize,
    tableName:'Glicemia_Det',
    modelName: 'GlycemiaDet',
    timestamps:false,
  });
  return GlycemiaDet;
};