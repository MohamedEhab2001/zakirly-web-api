
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class AgeRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Age);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Age.create(data);
  }

  static async getAll() {
    return await models.Age.findAll();
  }

  static async ById(id) {
    return await models.Age.findByPk(id);
  }

  static async update(id, data) {
    return await models.Age.update(data, { where: { id } });
  }
}

module.exports = AgeRepository;
