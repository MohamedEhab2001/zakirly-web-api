
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class FAQRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.FAQ);
    modelValidate.ModelKeysValidate(data, []);
    return await models.FAQ.create(data);
  }

  static async getAll(data) {
    return await models.FAQ.findAll({where : data});
  }

  static async ById(id) {
    return await models.FAQ.findByPk(id);
  }

  static async update(id, data) {
    return await models.FAQ.update(data, { where: { id } });
  }
}

module.exports = FAQRepository;
