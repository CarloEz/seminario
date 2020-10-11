'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cd4I extends Model {
    static associate(model){
      cd4I.belongsTo(model.Patient,{foreignKey:'Id_Paciente'})
    }
  };
  cd4I.init({
    Id_CD4_I:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente:DataTypes.INTEGER,
    Fecha_CD4I: DataTypes.DATEONLY,
    Cantidad_CD4I:DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'CD4_I',
    modelName: 'cd4I',
    timestamps:false
  });
  return cd4I;
};