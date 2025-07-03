'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherQualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeacherQualification.init({
    teacher_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    where: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeacherQualification',
  });
  return TeacherQualification;
};