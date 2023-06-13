'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('estabelecimentos', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model:'usuarios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      cnpj: {
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
    await queryInterface.dropTable('estabelecimentos');
  }
};
