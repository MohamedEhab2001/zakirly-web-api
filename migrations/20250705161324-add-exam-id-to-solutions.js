"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Solutions", "exam_id", {
      type: Sequelize.INTEGER,
      allowNull: true, // Set to false if exam_id is required
      references: {
        model: "Exams",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Solutions", "exam_id");
  }
};
