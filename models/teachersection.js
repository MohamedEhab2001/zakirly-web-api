'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      TeacherSection.belongsTo(models.Section , {foreignKey : "section_id" , as : "section"})


    }
  }
  TeacherSection.init({
    teacher_id: DataTypes.INTEGER,
    section_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeacherSection',
  });
  return TeacherSection;
};