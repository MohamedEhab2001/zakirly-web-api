
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CurrencyRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Currency);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Currency.create(data);
  }

  static async getAll() {
    return await models.Currency.findAll();
  }

  static async ById(id) {
    return await models.Currency.findByPk(id);
  }

  static async update(id, data) {
    return await models.Currency.update(data, { where: { id } });
  }
}

module.exports = CurrencyRepository;
