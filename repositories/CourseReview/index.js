
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CourseReviewRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.CourseReview);
    modelValidate.ModelKeysValidate(data, []);
    return await models.CourseReview.create(data);
  }

  static async getAll() {
    return await models.CourseReview.findAll();
  }

  static async ById(id) {
    return await models.CourseReview.findByPk(id);
  }

  static async update(id, data) {
    return await models.CourseReview.update(data, { where: { id } });
  }
}

module.exports = CourseReviewRepository;
