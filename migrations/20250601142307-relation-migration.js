// Sequelize migration file to add constraints and relationships to existing tables (with CASCADE, except Orders)

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Levels → Curriculum
    await queryInterface.addConstraint('Levels', {
      fields: ['curriculum_id'],
      type: 'foreign key',
      name: 'fk_levels_curriculum_id',
      references: { table: 'Curriculums', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Users → Curriculum
    await queryInterface.addConstraint('Users', {
      fields: ['curriculum_id'],
      type: 'foreign key',
      name: 'fk_users_curriculum_id',
      references: { table: 'Curriculums', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Courses → Sections
    await queryInterface.addConstraint('Courses', {
      fields: ['section_id'],
      type: 'foreign key',
      name: 'fk_courses_section_id',
      references: { table: 'Sections', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Courses → Ages
    await queryInterface.addConstraint('Courses', {
      fields: ['age_id'],
      type: 'foreign key',
      name: 'fk_courses_age_id',
      references: { table: 'Ages', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Courses → Levels
    await queryInterface.addConstraint('Courses', {
      fields: ['level_id'],
      type: 'foreign key',
      name: 'fk_courses_level_id',
      references: { table: 'Levels', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Courses → Teachers
    await queryInterface.addConstraint('Courses', {
      fields: ['teacher_id'],
      type: 'foreign key',
      name: 'fk_courses_teacher_id',
      references: { table: 'Teachers', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Courses → Curriculum
    await queryInterface.addConstraint('Courses', {
      fields: ['curriculum_id'],
      type: 'foreign key',
      name: 'fk_courses_curriculum_id',
      references: { table: 'Curriculums', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Orders → Users (NO CASCADE)
    await queryInterface.addConstraint('Orders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_orders_user_id',
      references: { table: 'Users', field: 'id' },
      onDelete: 'SET NULL',
    });

    // CourseReviews → Courses
    await queryInterface.addConstraint('CourseReviews', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_course_reviews_course_id',
      references: { table: 'Courses', field: 'id' },
      onDelete: 'CASCADE',
    });

    // CourseReviews → Users
    await queryInterface.addConstraint('CourseReviews', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_course_reviews_user_id',
      references: { table: 'Users', field: 'id' },
      onDelete: 'CASCADE',
    });

    // CourseBooks → Courses
    await queryInterface.addConstraint('CourseBooks', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'fk_course_books_course_id',
      references: { table: 'Courses', field: 'id' },
      onDelete: 'CASCADE',
    });

    // CourseBooks → Books
    await queryInterface.addConstraint('CourseBooks', {
      fields: ['book_id'],
      type: 'foreign key',
      name: 'fk_course_books_book_id',
      references: { table: 'Books', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Exams → Sections
    await queryInterface.addConstraint('Exams', {
      fields: ['section_id'],
      type: 'foreign key',
      name: 'fk_exams_section_id',
      references: { table: 'Sections', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Exams → Levels
    await queryInterface.addConstraint('Exams', {
      fields: ['level_id'],
      type: 'foreign key',
      name: 'fk_exams_level_id',
      references: { table: 'Levels', field: 'id' },
      onDelete: 'CASCADE',
    });

    // Exams → Teachers
    await queryInterface.addConstraint('Exams', {
      fields: ['teacher_id'],
      type: 'foreign key',
      name: 'fk_exams_teacher_id',
      references: { table: 'Teachers', field: 'id' },
      onDelete: 'CASCADE',
    });

      // QuestionsAnswers → Solution
    await queryInterface.addConstraint('QuestionsAnswers', {
      fields: ['solution_id'],
      type: 'foreign key',
      name: 'fk_questions_answers_solution_id',
      references: { table: 'Solutions', field: 'id' },
      onDelete: 'CASCADE',
    });
    
    // QuestionsAnswers → ExamQuestion
    await queryInterface.addConstraint('QuestionsAnswers', {
      fields: ['exam_question_id'],
      type: 'foreign key',
      name: 'fk_questions_answers_exam_question_id',
      references: { table: 'ExamQuestions', field: 'id' },
      onDelete: 'CASCADE',
    });
    
    // QuestionsAnswers → Choices
    await queryInterface.addConstraint('QuestionsAnswers', {
      fields: ['choice_id'],
      type: 'foreign key',
      name: 'fk_questions_answers_choice_id',
      references: { table: 'Choices', field: 'id' },
    });
    
    // ExamQuestions → Exams
    await queryInterface.addConstraint('ExamQuestions', {
      fields: ['exam_id'],
      type: 'foreign key',
      name: 'fk_exam_questions_exam_id',
      references: { table: 'Exams', field: 'id' },
      onDelete: 'CASCADE',
    });
    
    // ExamQuestions → Questions
    await queryInterface.addConstraint('ExamQuestions', {
      fields: ['question_id'],
      type: 'foreign key',
      name: 'fk_exam_questions_question_id',
      references: { table: 'Questions', field: 'id' },
      onDelete: 'CASCADE',
    });
    
    // Choices → Questions
    await queryInterface.addConstraint('Choices', {
      fields: ['question_id'],
      type: 'foreign key',
      name: 'fk_choices_question_id',
      references: { table: 'Questions', field: 'id' },
      onDelete: 'CASCADE',
    });
    
    // Solutions → Users
    await queryInterface.addConstraint('Solutions', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_solutions_user_id',
      references: { table: 'Users', field: 'id' },
    });
    
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('Orders', 'fk_orders_user_id');
    await queryInterface.removeConstraint('Courses', 'fk_courses_curriculum_id');
    await queryInterface.removeConstraint('Courses', 'fk_courses_teacher_id');
    await queryInterface.removeConstraint('Courses', 'fk_courses_level_id');
    await queryInterface.removeConstraint('Courses', 'fk_courses_age_id');
    await queryInterface.removeConstraint('Courses', 'fk_courses_section_id');
    await queryInterface.removeConstraint('Users', 'fk_users_curriculum_id');
    await queryInterface.removeConstraint('Levels', 'fk_levels_curriculum_id');

    await queryInterface.removeConstraint('CourseReviews', 'fk_course_reviews_course_id');
    await queryInterface.removeConstraint('CourseReviews', 'fk_course_reviews_user_id');
    await queryInterface.removeConstraint('CourseBooks', 'fk_course_books_course_id');
    await queryInterface.removeConstraint('CourseBooks', 'fk_course_books_book_id');

    await queryInterface.removeConstraint('Exams', 'fk_exams_section_id');
    await queryInterface.removeConstraint('Exams', 'fk_exams_level_id');
    await queryInterface.removeConstraint('Exams', 'fk_exams_teacher_id');

    await queryInterface.removeConstraint('QuestionsAnswers', 'fk_questions_answers_solution_id');
    await queryInterface.removeConstraint('QuestionsAnswers', 'fk_questions_answers_exam_question_id');
    await queryInterface.removeConstraint('QuestionsAnswers', 'fk_questions_answers_choice_id');
    await queryInterface.removeConstraint('ExamQuestions', 'fk_exam_questions_exam_id');
    await queryInterface.removeConstraint('ExamQuestions', 'fk_exam_questions_question_id');
    await queryInterface.removeConstraint('Choices', 'fk_choices_question_id');
    await queryInterface.removeConstraint('Solutions', 'fk_solutions_user_id');
  },
};
