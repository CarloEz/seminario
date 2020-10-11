'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
  }
  User.init({
    id:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    usuario: DataTypes.STRING,
    correo:DataTypes.STRING,
    password: DataTypes.STRING
  },
  { 
    sequelize,
    tableName:'users',
    modelName: 'User',
    timestamps:false,
  });
  return User;
};