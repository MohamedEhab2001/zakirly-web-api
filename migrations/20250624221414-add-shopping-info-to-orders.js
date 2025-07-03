"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Orders", "shopping_info", {
      type: Sequelize.JSONB,
      allowNull: true,
      comment: "Additional shopping information as JSONB"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Orders", "shopping_info");
  }
};
