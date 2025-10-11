'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Section, { foreignKey: "section_id", as: "section" });
      Course.belongsTo(models.Age, { foreignKey: "age_id", as: "age" });
      Course.belongsTo(models.Level, { foreignKey: "level_id", as: "level" });
      Course.belongsTo(models.Teacher, { foreignKey: "teacher_id", as: "teacher" });
      Course.belongsTo(models.Curriculum, { foreignKey: "curriculum_id", as: "curriculum" });
      Course.hasMany(models.CourseBook, { foreignKey: "course_id", as: "books" });
      Course.hasMany(models.CourseLearning, { foreignKey: "course_id", as: "learnings" });
      Course.hasMany(models.CoursePrerequest, { foreignKey: "course_id", as: "prerequests" });
      Course.hasMany(models.Category, { foreignKey: "course_id", as: "categories" });
      Course.hasMany(models.Prices, { foreignKey: "entity_id", as: "prices"});
    }
  }
  Course.init({
    featured: DataTypes.BOOLEAN,
    section_id: DataTypes.INTEGER,
    age_id: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    discount: DataTypes.FLOAT,
    teacher_id: DataTypes.INTEGER,
    period: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    type: DataTypes.STRING,
    curriculum_id: DataTypes.INTEGER,
    difficulty: DataTypes.STRING,
    cover_url: DataTypes.STRING,
    group: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};