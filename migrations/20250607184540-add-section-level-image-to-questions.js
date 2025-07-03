'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Questions', 'section_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Sections',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    });
    await queryInterface.addColumn('Questions', 'level_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Levels',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    });
    await queryInterface.addColumn('Questions', 'question_image', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Questions', 'section_id');
    await queryInterface.removeColumn('Questions', 'level_id');
    await queryInterface.removeColumn('Questions', 'question_image');
  }
};
