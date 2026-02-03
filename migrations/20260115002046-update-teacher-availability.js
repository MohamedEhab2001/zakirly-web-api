'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('TeacherAvailabilities', 'start_time', {
      type: Sequelize.DATE,
      allowNull: false
    });

    await queryInterface.addColumn('TeacherAvailabilities', 'end_time', {
      type: Sequelize.DATE,
      allowNull: false
    });

    await queryInterface.addColumn('TeacherAvailabilities', 'status', {
      type: Sequelize.ENUM('available', 'booked', 'cancelled'),
      defaultValue: 'available'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn('TeacherAvailabilities', 'start_time');
    await queryInterface.removeColumn('TeacherAvailabilities', 'end_time');
    await queryInterface.removeColumn('TeacherAvailabilities', 'status');
  }
};
