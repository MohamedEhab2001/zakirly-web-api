'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoursePrerequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CoursePrerequest.belongsTo(models.Course, { foreignKey: "course_id", as: "course" });
    }
  }
  CoursePrerequest.init({
    course_id: DataTypes.INTEGER,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CoursePrerequest',
  });
  return CoursePrerequest;
};