'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionsAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuestionsAnswer.init({
    solution_id: DataTypes.INTEGER,
    exam_question_id: DataTypes.INTEGER,
    answer: DataTypes.TEXT,
    choice_id: DataTypes.INTEGER,
    attempt_identifier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuestionsAnswer',
  });
  return QuestionsAnswer;
};