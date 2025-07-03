
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class NewsletterRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Newsletter);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Newsletter.create(data);
  }

  static async getAll() {
    return await models.Newsletter.findAll();
  }

  static async ById(id) {
    return await models.Newsletter.findByPk(id);
  }

  static async update(id, data) {
    return await models.Newsletter.update(data, { where: { id } });
  }
}

module.exports = NewsletterRepository;
