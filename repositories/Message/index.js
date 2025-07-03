
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class MessageRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Message);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Message.create(data);
  }

  static async getAll() {
    return await models.Message.findAll();
  }

  static async ById(id) {
    return await models.Message.findByPk(id);
  }

  static async update(id, data) {
    return await models.Message.update(data, { where: { id } });
  }
}

module.exports = MessageRepository;
