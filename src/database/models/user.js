'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(model){
      User.hasMany(model.Control,{foreignKey:'Id'});
    }
  }
  User.init({
    id:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Nombre_User:DataTypes.STRING,
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