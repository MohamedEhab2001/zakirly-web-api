
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class OrderProductRepository {
  static async create(data , transaction) {
    const modelValidate = new ModelValidation(models.OrderProduct);
    modelValidate.ModelKeysValidate(data, []);
    return await models.OrderProduct.create(data , {transaction});
  }


  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.OrderProduct);
    modelValidate.ModelKeysValidate(data[0], ["discount"]);
    return await models.OrderProduct.bulkCreate(data , {transaction});
  }

  static async getAll() {
    return await models.OrderProduct.findAll();
  }

  static async ById(id) {
    return await models.OrderProduct.findByPk(id);
  }

  static async update(id, data) {
    return await models.OrderProduct.update(data, { where: { id } });
  }
}

module.exports = OrderProductRepository;
