'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Teachers', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
    
    await queryInterface.addColumn('Teachers', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teachers', 'email');
    await queryInterface.removeColumn('Teachers', 'password');
  }
};
