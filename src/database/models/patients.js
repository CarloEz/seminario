'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {};
  Patients.init({
    nombre: DataTypes.STRING(50),
    apellido: DataTypes.STRING(50),
    municipio: DataTypes.STRING(100),
    departamento: DataTypes.STRING(100),
    pais: DataTypes.STRING(100),
    fecha_nacimiento: DataTypes.DATEONLY,
    genero: DataTypes.STRING(50),
    ocupacion: DataTypes.STRING(100),
    leer: DataTypes.BOOLEAN,
    escolaridad: DataTypes.STRING(100),
    edad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patients',
    timestamps:false
  });
  return Patients;
};