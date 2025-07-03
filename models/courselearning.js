'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseLearning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CourseLearning.belongsTo(models.Course, { foreignKey: "course_id", as: "course" });
    }
  }
  CourseLearning.init({
    course_id: DataTypes.INTEGER,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CourseLearning',
  });
  return CourseLearning;
};