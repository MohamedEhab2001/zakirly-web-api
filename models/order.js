'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.OrderProduct , {foreignKey : "order_id" , as : "products"})
      Order.belongsTo(models.User , {foreignKey : "user_id" , as : "user"})
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    total: DataTypes.FLOAT, 
    delevried: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    shopping_info: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};