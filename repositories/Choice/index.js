
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class ChoiceRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Choice);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Choice.create(data);
  }

  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.Choice);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.Choice.bulkCreate(data , {transaction});
  }

  static async getAll() {
    return await models.Choice.findAll();
  }

  static async getAllByQuestionIds(questionIds) {
    return await models.Choice.findAll({where : {question_id : {[models.Sequelize.Op.in] : questionIds}}});
  }

  static async ById(id) {
    return await models.Choice.findByPk(id);
  }

  static async update(id, data) {
    return await models.Choice.update(data, { where: { id } });
  }
}

module.exports = ChoiceRepository;
