
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class ExamPrerequestRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.ExamPrerequest);
    modelValidate.ModelKeysValidate(data, []);
    return await models.ExamPrerequest.create(data);
  }


    static async bulkCreate(data , transaction) {
      const modelValidate = new ModelValidation(models.ExamPrerequest);
      modelValidate.ModelKeysValidate(data[0], []);
      return await models.ExamPrerequest.bulkCreate(data , {transaction});
    }

  static async getAll() {
    return await models.ExamPrerequest.findAll();
  }

  static async ById(id) {
    return await models.ExamPrerequest.findByPk(id);
  }

  static async update(id, data) {
    return await models.ExamPrerequest.update(data, { where: { id } });
  }
}

module.exports = ExamPrerequestRepository;
