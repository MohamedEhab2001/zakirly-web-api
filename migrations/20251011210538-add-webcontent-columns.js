'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('WebContents', 'video_thumbnail', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('WebContents', 'herosection_title', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('WebContents', 'hersection_slogan', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('WebContents', 'herosection_description', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('WebContents', 'herosection_description');
    await queryInterface.removeColumn('WebContents', 'hersection_slogan');
    await queryInterface.removeColumn('WebContents', 'herosection_title');
    await queryInterface.removeColumn('WebContents', 'video_thumbnail');
  }
};
