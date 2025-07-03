
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class QuestionsAnswerRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.QuestionsAnswer);
    modelValidate.ModelKeysValidate(data, []);
    return await models.QuestionsAnswer.create(data);
  }

  static async getAll() {
    return await models.QuestionsAnswer.findAll();
  }

  static async ById(id) {
    return await models.QuestionsAnswer.findByPk(id);
  }

  static async update(id, data) {
    return await models.QuestionsAnswer.update(data, { where: { id } });
  }
}

module.exports = QuestionsAnswerRepository;
