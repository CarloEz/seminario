'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      departamento: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.DATEONLY
      },
      genero: {
        type: Sequelize.STRING
      },
      ocupacion: {
        type: Sequelize.STRING
      },
      leer: {
        type: Sequelize.BOOLEAN
      },
      escolaridad: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patients');
  }
};