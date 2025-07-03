
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TeacherAvailabilityRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.TeacherAvailability);
    modelValidate.ModelKeysValidate(data, []);
    return await models.TeacherAvailability.create(data);
  }

  static async getAll() {
    return await models.TeacherAvailability.findAll();
  }

  static async ById(id) {
    return await models.TeacherAvailability.findByPk(id);
  }

  static async update(id, data) {
    return await models.TeacherAvailability.update(data, { where: { id } });
  }
}

module.exports = TeacherAvailabilityRepository;
