'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    avatar: DataTypes.STRING,
    name: DataTypes.STRING,
    job: DataTypes.STRING,
    desc: DataTypes.TEXT,
    twitter: DataTypes.STRING,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    whatsapp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};