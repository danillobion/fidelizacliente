'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('permissoes', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      descricao: {
        type:Sequelize.STRING,
        allowNull:true,
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull:false,
      } 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('permissoes');
  }
};
