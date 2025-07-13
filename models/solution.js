'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Solution.belongsTo(models.User , {foreignKey : "user_id" , as : "user"})
      Solution.belongsTo(models.Exam , {foreignKey : "exam_id" , as : "exam"})
    }
  }
  Solution.init({
    user_id: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    attempts_number: DataTypes.INTEGER,
    corrected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    exam_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Solution',
  });
  return Solution;
};