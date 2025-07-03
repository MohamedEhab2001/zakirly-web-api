
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TeacherReviewRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.TeacherReview);
    modelValidate.ModelKeysValidate(data, []);
    return await models.TeacherReview.create(data);
  }

  static async getAll() {
    return await models.TeacherReview.findAll();
  }

  static async ById(id) {
    return await models.TeacherReview.findByPk(id);
  }

  static async update(id, data) {
    return await models.TeacherReview.update(data, { where: { id } });
  }
}

module.exports = TeacherReviewRepository;
