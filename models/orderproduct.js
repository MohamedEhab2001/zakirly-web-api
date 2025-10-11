'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderProduct.belongsTo(models.Order , {foreignKey : "order_id" , as : "order" })
      OrderProduct.belongsTo(models.Course , {foreignKey : "entity_id" , as : "course" })
      OrderProduct.belongsTo(models.Book , {foreignKey : "entity_id" , as : "book"})
      OrderProduct.belongsTo(models.Exam , {foreignKey : "entity_id" , as : "exam"})
    }
  }
  OrderProduct.init({
    entity_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,  
  }, {
    sequelize,
    modelName: 'OrderProduct',
  });
  return OrderProduct;
};