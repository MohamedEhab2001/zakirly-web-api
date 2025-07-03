'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Courses', 'price');
    await queryInterface.removeColumn('Books', 'price');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Courses', 'price', {
      type: Sequelize.FLOAT,
      allowNull: true, 
    });
    await queryInterface.addColumn('Books', 'price', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  }
};
