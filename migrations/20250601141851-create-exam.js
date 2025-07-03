'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      section_id: {
        type: Sequelize.INTEGER
      },
      level_id: {
        type: Sequelize.INTEGER
      },
      difficulty: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.DATE
      },
      period: {
        type: Sequelize.STRING
      },
      total_mark: {
        type: Sequelize.INTEGER
      },
      success_mark: {
        type: Sequelize.INTEGER
      },
      allowed_attempts: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      due_time: {
        type: Sequelize.STRING
      },
      teacher_id: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exams');
  }
};