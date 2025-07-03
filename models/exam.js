'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {

    static associate(models) {
      Exam.belongsTo(models.Section , {foreignKey : "section_id" , as : "section"})
      Exam.belongsTo(models.Level , {foreignKey : "level_id" , as : "level"})
      Exam.belongsTo(models.Teacher , {foreignKey : "teacher_id" , as : "teacher"})
      Exam.belongsToMany(models.Question , {foreignKey : "exam_id" , as : "questions" , through : "ExamQuestion"})
      Exam.hasMany(models.ExamPrerequest , {foreignKey : "exam_id" , as : "prerequests"})
      Exam.hasMany(models.ExamInstruction , {foreignKey : "exam_id" , as : "instructions"})
      Exam.hasMany(models.Prices, { foreignKey: "entity_id", as: "prices"});
    }
  }
  Exam.init({
    title: DataTypes.STRING,
    section_id: DataTypes.INTEGER,
    level_id: DataTypes.INTEGER,
    difficulty: DataTypes.STRING,
    due_date: DataTypes.DATE,
    period: DataTypes.STRING,
    total_mark: DataTypes.INTEGER,
    success_mark: DataTypes.INTEGER,
    allowed_attempts: DataTypes.INTEGER,
    type: DataTypes.STRING,
    due_time: DataTypes.STRING,
    teacher_id: DataTypes.INTEGER,
    open: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Exam',
  });
  return Exam;
};