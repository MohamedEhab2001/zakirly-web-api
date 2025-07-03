'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      cover_url: {
        type: Sequelize.STRING
      },
      section_id: {
        type: Sequelize.INTEGER
      },
      age_id: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      rating: {
        type: Sequelize.FLOAT
      },
      pages_number: {
        type: Sequelize.INTEGER
      },
      language: {
        type: Sequelize.STRING
      },
      unique_number: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      advantages: {
        type: Sequelize.TEXT
      },
      quantity: {
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
    await queryInterface.dropTable('Books');
  }
};