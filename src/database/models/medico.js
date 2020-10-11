'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medico extends Model {
    static associate(models) {
      medico.hasMany(models.Control,{foreignKey:'Id_Medico'});
    }
  };
  medico.init({
    Id_Medico:{
      primaryKey:true,
      autoIncrement:true,
      allowNull:false,
      type:DataTypes.INTEGER
    },
    Id_Usuario: DataTypes.INTEGER,
    Nombres_Medico: DataTypes.STRING(50),
    Apellidos_Medico: DataTypes.STRING(50),
    Telefono: DataTypes.STRING(50),
    DPI: DataTypes.STRING(50)
  }, {
    sequelize,
    tableName:'hsm_medicos',
    timestamps:false,
    modelName: 'medico',
  });
  return medico;
};