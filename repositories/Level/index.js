
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class LevelRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Level);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Level.create(data);
  }

  static async getAll() {
    return await models.Level.findAll();
  }

  static async ById(id) {
    return await models.Level.findByPk(id);
  }

  static async update(id, data) {
    return await models.Level.update(data, { where: { id } });
  }
}

module.exports = LevelRepository;
