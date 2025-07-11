'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonial.init({
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    desc: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Testimonial',
  });
  return Testimonial;
};