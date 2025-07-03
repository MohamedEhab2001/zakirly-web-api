
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CourseLearningRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.CourseLearning);
    modelValidate.ModelKeysValidate(data, []);
    return await models.CourseLearning.create(data);
  }

  static async bulkCreate(data,transaction){
    const modelValidate = new ModelValidation(models.CourseLearning);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.CourseLearning.bulkCreate(data,{transaction});
  }

  static async getAll() {
    return await models.CourseLearning.findAll();
  }

  static async ById(id) {
    return await models.CourseLearning.findByPk(id);
  }

  static async update(id, data) {
    return await models.CourseLearning.update(data, { where: { id } });
  }
}

module.exports = CourseLearningRepository;
