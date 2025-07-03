"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("OrderProducts", "quantity", {
      type: Sequelize.INTEGER,
      allowNull: true,
      comment: "Quantity of the product"
    });
    await queryInterface.addColumn("OrderProducts", "price", {
      type: Sequelize.FLOAT,
      allowNull: true,
      comment: "Price of the product"
    });
    await queryInterface.addColumn("OrderProducts", "total", {
      type: Sequelize.FLOAT,
      allowNull: true,
      comment: "Total price for the product"
    });
    await queryInterface.addColumn("OrderProducts", "discount", {
      type: Sequelize.FLOAT,
      allowNull: true,
      comment: "Discount applied to the product"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("OrderProducts", "quantity");
    await queryInterface.removeColumn("OrderProducts", "price");
    await queryInterface.removeColumn("OrderProducts", "total");
    await queryInterface.removeColumn("OrderProducts", "discount");
  }
};
