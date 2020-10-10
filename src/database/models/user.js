'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    correo: DataTypes.STRING(60),
    contrasenia: DataTypes.STRING(60),
    logueo:DataTypes.BOOLEAN
  },
  { 
    sequelize,
    tableName:'hsm_login',
    modelName: 'hsm_login',
    timestamps:false,
  });
  return User;
};