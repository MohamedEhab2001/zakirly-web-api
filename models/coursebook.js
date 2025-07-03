'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CourseBook.belongsTo(models.Course, { foreignKey: "course_id", as: "course" });
      CourseBook.belongsTo(models.Book, { foreignKey: "book_id", as: "book" });
    }
  }
  CourseBook.init({
    course_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseBook',
  });
  return CourseBook;
};