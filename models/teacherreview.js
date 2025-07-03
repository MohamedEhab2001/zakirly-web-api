'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeacherReview.init({
    teacher_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rate: DataTypes.FLOAT,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TeacherReview',
  });
  return TeacherReview;
};