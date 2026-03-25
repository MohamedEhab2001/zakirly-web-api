"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WithdrawalRequest extends Model {
    static associate(models) {
      WithdrawalRequest.belongsTo(models.Teacher, {
        foreignKey: "teacher_id",
        as: "teacher"
      });
    }
  }

  WithdrawalRequest.init(
    {
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      method: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM("pending", "approved", "rejected", "processing"),
        defaultValue: "pending",
        allowNull: false
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: true
      },
      admin_notes: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "WithdrawalRequest"
    }
  );

  return WithdrawalRequest;
};
