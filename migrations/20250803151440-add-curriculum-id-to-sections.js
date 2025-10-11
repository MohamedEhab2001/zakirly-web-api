"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Sections", "curriculum_id", {
      type: Sequelize.INTEGER,
      allowNull: true, // Set to false if curriculum_id is required
      references: {
        model: "Curriculums",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Sections", "curriculum_id");
  }
};
