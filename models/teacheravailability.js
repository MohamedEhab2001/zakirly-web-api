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
      TeacherAvailability.belongsTo(models.Teacher, {foreignKey: 'teacher_id', as: 'teacher'});
    }
  }
  TeacherAvailability.init({
      teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day_of_week: {
    type: DataTypes.INTEGER,
    // 0 = Sunday, 1 = Monday ... 6 = Saturday
  },
     start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('available', 'booked', 'cancelled'),
      defaultValue: 'available'
    }
  }, {
    sequelize,
    modelName: 'TeacherAvailability',
  });
  return TeacherAvailability;
};