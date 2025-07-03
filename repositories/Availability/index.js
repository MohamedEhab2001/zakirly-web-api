
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class AvailabilityRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Availability);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Availability.create(data);
  }

  static async getAll() {
    return await models.Availability.findAll();
  }

  static async ById(id) {
    return await models.Availability.findByPk(id);
  }

  static async update(id, data) {
    return await models.Availability.update(data, { where: { id } });
  }
}

module.exports = AvailabilityRepository;
