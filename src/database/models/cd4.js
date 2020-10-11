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
    Fecha_CD4CV: DataTypes.DATEONLY,
    CD4:DataTypes.STRING(50),
    Carga_Viral:DataTypes.STRING(50),
    Esquema: DataTypes.STRING(50),
    Observaciones: DataTypes.STRING
  }, {
    sequelize,
    tableName:'CD4_CV',
    modelName: 'cd4',
    timestamps:false
  });
  return cd4;
};