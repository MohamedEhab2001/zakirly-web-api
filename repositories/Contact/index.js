
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class ContactRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Contact);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Contact.create(data);
  }

  static async getAll() {
    return await models.Contact.findAll();
  }

  static async ById(id) {
    return await models.Contact.findByPk(id);
  }

  static async update(id, data) {
    return await models.Contact.update(data, { where: { id } });
  }
}

module.exports = ContactRepository;
