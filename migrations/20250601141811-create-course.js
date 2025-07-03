'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      featured: {
        type: Sequelize.BOOLEAN
      },
      section_id: {
        type: Sequelize.INTEGER
      },
      age_id: {
        type: Sequelize.INTEGER
      },
      level_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.FLOAT
      },
      teacher_id: {
        type: Sequelize.INTEGER
      },
      period: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      type: {
        type: Sequelize.STRING
      },
      curriculum_id: {
        type: Sequelize.INTEGER
      },
      difficulty: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Courses');
  }
};