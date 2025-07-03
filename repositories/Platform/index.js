
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class PlatformRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Platform);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Platform.create(data);
  }

  static async getAll() {
    return await models.Platform.findAll();
  }

  static async ById(id) {
    return await models.Platform.findByPk(id);
  }

  static async update(id, data) {
    return await models.Platform.update(data, { where: { id } });
  }
}

module.exports = PlatformRepository;
