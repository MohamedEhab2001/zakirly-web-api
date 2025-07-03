// Migration: Add 'group' column to 'courses' table
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Courses', 'group', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'لا يوجد',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Courses', 'group');
  },
};
