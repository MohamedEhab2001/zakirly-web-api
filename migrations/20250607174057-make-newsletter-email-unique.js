'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Newsletters', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_newsletter_email'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Newsletters', 'unique_newsletter_email');
  }
};
