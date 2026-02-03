"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TeacherSession extends Model {
    static associate(models) {
      TeacherSession.belongsTo(models.Teacher, {
        foreignKey: "teacher_id",
        as: "teacher"
      });
    }
  }

  TeacherSession.init(
    {
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      availability_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      start_datetime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_datetime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      meeting_link: DataTypes.STRING,
      meeting_id: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM("booked", "cancelled", "completed"),
        defaultValue: "booked"
      }
    },
    {
      sequelize,
      modelName: "TeacherSession"
    }
  );

  return TeacherSession;
};
