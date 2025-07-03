
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");
const { All , One } = require("./Shapes");

class ExamRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction()
    const modelValidate = new ModelValidation(models.Exam);
    modelValidate.ModelKeysValidate(data, []);
    const record = await models.Exam.create(data , {transaction});
    return [record , transaction]
  }

  static async getAll() {
    const get = All(models)
    return await models.Exam.findAll({...get});
  }

  static async ById(id) {
    const get = One(models)
    return await models.Exam.findByPk(id , {...get});
  }

  static async update(id, data) {
    return await models.Exam.update(data, { where: { id } });
  }
}

module.exports = ExamRepository;
