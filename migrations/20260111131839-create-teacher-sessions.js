'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("TeacherSessions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Teachers",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      availability_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "TeacherAvailabilities",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },

      start_datetime: {
        type: Sequelize.DATE,
        allowNull: false
      },

      end_datetime: {
        type: Sequelize.DATE,
        allowNull: false
      },

      meeting_link: {
        type: Sequelize.STRING,
        allowNull: true
      },

      meeting_id: {
        type: Sequelize.STRING,
        allowNull: true
      },

      status: {
        type: Sequelize.ENUM("booked", "cancelled", "completed"),
        defaultValue: "booked"
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("TeacherSessions");
  }
};
