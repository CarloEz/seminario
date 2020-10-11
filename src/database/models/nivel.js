'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nivel extends Model {
    static associate(model){
      nivel.hasOne(model.Patient,{foreignKey:'Id_Nivel_E'});
    }
   };
  nivel.init({
    Id_Nivel_E:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Tipo_Nivel: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'hsm_nivel_educacion',
    modelName: 'nivel',
  });
  return nivel;
};