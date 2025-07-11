'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Platform.init({
    logo: DataTypes.STRING,
    desc: DataTypes.TEXT,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    integram: DataTypes.STRING,
    youtupe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Platform',
  });
  return Platform;
};