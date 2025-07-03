'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prices.belongsTo(models.Currency, { foreignKey: "currency_id", as: "currency" });
    }
  }
  Prices.init({
    entity_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    type: DataTypes.STRING,
    discount: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Prices',
  });
  return Prices;
};