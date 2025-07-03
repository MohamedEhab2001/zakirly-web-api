'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsToMany(models.Exam, {
        foreignKey: "question_id",
        as: "exams",
        through: "ExamQuestion"
      });
      Question.hasMany(models.Choice , {foreignKey : "question_id" , as : "choices"})
    }
  }
  Question.init({
    type: DataTypes.STRING,
    points: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    level_id: DataTypes.INTEGER,
    section_id: DataTypes.INTEGER,
    question_image: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};