'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WithdrawalRequests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Teachers",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      method: {
        type: Sequelize.STRING,
        allowNull: false
      },

      status: {
        type: Sequelize.ENUM("pending", "approved", "rejected", "processing"),
        defaultValue: "pending",
        allowNull: false
      },

      reference: {
        type: Sequelize.STRING,
        allowNull: true
      },

      admin_notes: {
        type: Sequelize.TEXT,
        allowNull: true
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
    await queryInterface.dropTable("WithdrawalRequests");
  }
};
