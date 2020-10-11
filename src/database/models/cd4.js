'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cd4 extends Model {
    static associate(model){
      cd4.belongsTo(model.Patient,{foreignKey:'Id_Paciente'})
    }
  };
  cd4.init({
    Id_CD_CV:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente:DataTypes.INTEGER,
    Fecha: DataTypes.DATEONLY,
    Cantidad: DataTypes.INTEGER,
    Esquema: DataTypes.STRING(50),
    Observaciones: DataTypes.STRING,
    Diferenciador: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName:'hsm_cd4_cv',
    modelName: 'cd4',
    timestamps:false
  });
  return cd4;
};