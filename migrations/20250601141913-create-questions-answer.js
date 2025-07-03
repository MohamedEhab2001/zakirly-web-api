'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuestionsAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      solution_id: {
        type: Sequelize.INTEGER
      },
      exam_question_id: {
        type: Sequelize.INTEGER
      },
      answer: {
        type: Sequelize.TEXT
      },
      choice_id: {
        type: Sequelize.INTEGER
      },
      attempt_identifier: {
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
    await queryInterface.dropTable('QuestionsAnswers');
  }
};