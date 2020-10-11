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
    Tipo_Nivel: DataTypes.STRING(50)
  }, {
    sequelize,
    timestamps: false,
    tableName: 'Nivel_Educacion',
    modelName: 'nivel',
  });
  return nivel;
};