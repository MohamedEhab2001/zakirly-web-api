'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Section , {foreignKey : "section_id" , as : "section"})
      Book.belongsTo(models.Age , {foreignKey : "age_id" , as : "age"})
      Book.belongsTo(models.Teacher , {foreignKey : "teacher_id" , as : "teacher"})
      Book.hasMany(models.Prices , {foreignKey : "entity_id" , as : "prices"})
    }
  }
  Book.init({
    title: DataTypes.STRING,
    cover_url: DataTypes.STRING,
    section_id: DataTypes.INTEGER,
    age_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    pages_number: DataTypes.INTEGER,
    language: DataTypes.STRING,
    unique_number: DataTypes.STRING,
    desc: DataTypes.TEXT,
    advantages: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};