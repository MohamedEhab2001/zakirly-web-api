'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Teacher.hasMany(models.TeacherQualification , { foreignKey : "teacher_id" , as :"qualifications"})
        Teacher.hasMany(models.TeacherSection , { foreignKey : "teacher_id" , as :"sections"})
        Teacher.hasMany(models.Exam , { foreignKey : "teacher_id" , as :"exams"})
        Teacher.hasMany(models.Course , { foreignKey : "teacher_id" , as :"courses"})
        Teacher.hasMany(models.TeacherReview , { foreignKey : "teacher_id" , as :"reviews"})
    }
  }
  Teacher.init({
    avatar: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    job: DataTypes.STRING,
    name: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};