
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class OrderRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction();
    const modelValidate = new ModelValidation(models.Order);
    modelValidate.ModelKeysValidate(data, ["name"]);
    const record = await models.Order.create(data , {transaction});
    return [record , transaction]
  }

  static async getAll() {
    return await models.Order.findAll();
  }

  static async ById(id) {
    return await models.Order.findByPk(id);
  }

  static async update(id, data) {
    return await models.Order.update(data, { where: { id } });
  }
}

module.exports = OrderRepository;
