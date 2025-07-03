
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TeacherSectionRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.TeacherSection);
    modelValidate.ModelKeysValidate(data, []);
    return await models.TeacherSection.create(data);
  }

  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.TeacherSection);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.TeacherSection.bulkCreate(data , { transaction });
  }

  static async getAll() {
    return await models.TeacherSection.findAll();
  }

  static async ById(id) {
    return await models.TeacherSection.findByPk(id);
  }

  static async update(id, data) {
    return await models.TeacherSection.update(data, { where: { id } });
  }
}

module.exports = TeacherSectionRepository;
