'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Curriculum.hasMany(models.Section, {
        foreignKey: 'curriculum_id',
        as: 'sections'
      });
    }
  }
  Curriculum.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Curriculum',
  });
  return Curriculum;
};