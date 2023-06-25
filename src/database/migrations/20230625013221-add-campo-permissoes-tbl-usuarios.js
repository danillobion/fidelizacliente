'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'usuarios','permissoes',{
        type:Sequelize.TEXT,
        after: 'senha',
        allowNull:false,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('usuarios','permissoes');
  }
};
