
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TeacherAvailabilityRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.TeacherAvailability);
    modelValidate.ModelKeysValidate(data, []);
    return await models.TeacherAvailability.create(data);
  }

  static async getAll(id) {
    return await models.TeacherAvailability.findAll({ where: { teacher_id: id } });
  }

  static async ById(id) {
    return await models.TeacherAvailability.findByPk(id);
  }

  static async update(id, data) {
    return await models.TeacherAvailability.update(data, { where: { id } });
  }
  static async delete(id) {
    return await models.TeacherAvailability.destroy({ where: { id } });
  }
  static async findActiveById(id) {
    return await models.TeacherAvailability.findOne({
      where: { id, is_active: true },
      include: [
        {
          model: models.Teacher,
          as: "teacher",
          attributes: ["id", "email", "name"]
        }
      ]
    });
  }
  static async disableAvailability(id) {
    return await models.TeacherAvailability.update(
      { is_active: false },
      { where: { id } }
    );
  }
}


module.exports = TeacherAvailabilityRepository;
