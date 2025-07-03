
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class SectionRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Section);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Section.create(data);
  }

  static async getAll() {
    return await models.Section.findAll();
  }

  static async ById(id) {
    return await models.Section.findByPk(id);
  }

  static async update(id, data) {
    return await models.Section.update(data, { where: { id } });
  }
}

module.exports = SectionRepository;
