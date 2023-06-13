'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'usuarios','token',{type:Sequelize.STRING,allowNull:true}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'usuarios','token',
    );
  }
};
