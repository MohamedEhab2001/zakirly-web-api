
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CurriculumRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Curriculum);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Curriculum.create(data);
  }

  static async getAll() {
    return await models.Curriculum.findAll();
  }

  static async ById(id) {
    return await models.Curriculum.findByPk(id);
  }

  static async update(id, data) {
    return await models.Curriculum.update(data, { where: { id } });
  }

  static async delete(id) {
    return await models.Curriculum.destroy({ where: { id } });
  }

}

module.exports = CurriculumRepository;
