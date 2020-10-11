'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enfermedad extends Model {
    static associate(model){
      enfermedad.belongsTo(model.Patient,{foreignKey:'Id_Paciente'})
    }
  };
  enfermedad.init({
    Id_EO:{
      primaryKey:true,
      type:DataTypes.INTEGER,
      autoIncrement:true
    },
    Id_Paciente:DataTypes.INTEGER,
    Enfermedades_Oportunistas:DataTypes.STRING(60),
    Toma_Medicamento:DataTypes.STRING(50),
    Fecha_Inicio_EO: DataTypes.DATEONLY,
    Fecha_Mejora_EO:DataTypes.DATEONLY
  }, {
    sequelize,
    tableName:'Enfermedad_OP',
    modelName: 'enfermedad',
    timestamps:false
  });
  return enfermedad;
};