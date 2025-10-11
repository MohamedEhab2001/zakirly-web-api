'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WebContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WebContent.init({
    video_url: DataTypes.STRING,
    video_thumbnail: DataTypes.STRING,
    herosection_title: DataTypes.STRING,
    hersection_slogan: DataTypes.STRING,
    herosection_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WebContent',
  });
  return WebContent;
};