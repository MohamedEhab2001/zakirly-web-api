
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class PricesRepository {



  static async create(data) {
    const modelValidate = new ModelValidation(models.Prices);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Prices.create(data);
  }

  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.Prices);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.Prices.bulkCreate(data , { transaction });
  }

  static async delete(id) {
    return await models.Prices.destroy({ where: { id } });
  }

  static async getAll() {
    return await models.Prices.findAll();
  }

  static async ById(id) {
    return await models.Prices.findByPk(id);
  }

  static async update(id, data) {
    return await models.Prices.update(data, { where: { id } });
  }
}

module.exports = PricesRepository;
