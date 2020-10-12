'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nutricioni extends Model {
    static associate(model){
      nutricioni.belongsTo(model.Patient,{foreignKey:'Id_Paciente'});
    }
  };

  nutricioni.init({
    Id_ENI:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente: DataTypes.INTEGER,
    Estado_Nutricional: DataTypes.STRING(60),
    Mes: DataTypes.STRING(30),
    Anio: DataTypes.STRING(30)
  }, {
    sequelize,
    tableName:'Estado_Nutricional_I',
    modelName: 'nutricioni',
    timestamps:false
  });
  return nutricioni;
};