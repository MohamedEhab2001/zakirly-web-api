
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TeacherQualificationRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.TeacherQualification);
    modelValidate.ModelKeysValidate(data, []);
    return await models.TeacherQualification.create(data);
  }


  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.TeacherQualification);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.TeacherQualification.bulkCreate(data , { transaction });
  }

  static async getAll() {
    return await models.TeacherQualification.findAll();
  }

  static async ById(id) {
    return await models.TeacherQualification.findByPk(id);
  }

  static async update(id, data) {
    return await models.TeacherQualification.update(data, { where: { id } });
  }
}

module.exports = TeacherQualificationRepository;
