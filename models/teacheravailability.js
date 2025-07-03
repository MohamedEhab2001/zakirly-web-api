'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherAvailability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeacherAvailability.init({
    teacher_id: DataTypes.INTEGER,
    availability_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeacherAvailability',
  });
  return TeacherAvailability;
};