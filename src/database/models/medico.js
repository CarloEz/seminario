'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medico extends Model {
    static associate(model){
      medico.hasMany(model.Control,{foreignKey:'Id_Medico'});
    }
  };
  medico.init({
    Id_Medico:{
      primaryKey:true,
      autoIncrement:true,
      allowNull:false,
      type:DataTypes.INTEGER
    },
    Nombres_Medico: DataTypes.STRING,
    Apellidos_Medico:DataTypes.STRING,
    Telefono: DataTypes.STRING(50),
    DPI: DataTypes.STRING(50)
  }, {
    sequelize,
    tableName:'Medico',
    timestamps:false,
    modelName: 'medico',
  });
  return medico;
};