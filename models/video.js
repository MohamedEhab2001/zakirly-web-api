'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Video.belongsTo(models.Category, { foreignKey: "category_id", as: "category" });
    }
  }
  Video.init({
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    period: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};