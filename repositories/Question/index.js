
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class QuestionRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction()
    const modelValidate = new ModelValidation(models.Question);
    modelValidate.ModelKeysValidate(data, []);
    const record = await models.Question.create(data , {transaction});
    return [record , transaction]
  }

  static async getAll() {
    return await models.Question.findAll();
  }

  static async ById(id) {
    return await models.Question.findByPk(id);
  }

  static async update(id, data) {
    return await models.Question.update(data, { where: { id } });
  }
}

module.exports = QuestionRepository;
