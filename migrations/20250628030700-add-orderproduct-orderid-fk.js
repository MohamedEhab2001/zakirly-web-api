// Migration: Add foreign key constraint on orderProducts.order_id referencing orders.id with ON DELETE CASCADE
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('OrderProducts', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'fk_orderProducts_order_id',
      references: {
        table: 'Orders',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('OrderProducts', 'fk_orderProducts_order_id');
  },
};
