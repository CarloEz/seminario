'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    name: DataTypes.STRING(50),
    password: DataTypes.STRING(50)
  },
  {
    sequelize,
    modelName: 'User',
    timestamps:false
  });
  return User;
};