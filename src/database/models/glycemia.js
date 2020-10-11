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
    Fecha:DataTypes.DATEONLY,
    Hora1:DataTypes.TIME,
    Pre:DataTypes.STRING(50),
    Hora2:DataTypes.TIME,
    Pos:DataTypes.STRING(50)    
  },
  { 
    sequelize,
    tableName:'hsm_glicemia',
    modelName: 'Glycemia',
    timestamps:false,
  });
  return Glycemia;
};