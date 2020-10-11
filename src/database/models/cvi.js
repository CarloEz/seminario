'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cvi extends Model {
    static associate(model){
      cvi.belongsTo(model.Patient,{foreignKey:'Id_Paciente'})
    }
  };
  cvi.init({
    Id_CV_I:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente:DataTypes.INTEGER,
    Cantidad_CVI:DataTypes.INTEGER,
    Fecha_CVI: DataTypes.DATEONLY
  }, {
    sequelize,
    tableName:'CV_I',
    modelName: 'cvi',
    timestamps:false
  });
  return cvi;
};