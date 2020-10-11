'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
  }
  User.init({
    Id_:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    user: DataTypes.STRING(60),
    contrasenia: DataTypes.STRING(60)
  },
  { 
    sequelize,
    tableName:'hsm_login',
    modelName: 'User',
    timestamps:false,
  });
  return User;
};