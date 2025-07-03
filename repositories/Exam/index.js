
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");
const { All , One, ExamQuestion } = require("./Shapes");
const { extractKeys } = require("../../helpers/HelperMethods");

class ExamRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction()
    const modelValidate = new ModelValidation(models.Exam);
    modelValidate.ModelKeysValidate(data, []);
    const record = await models.Exam.create(data , {transaction});
    return [record , transaction]
  }

  static async getAll(data) {
    const [country] = extractKeys(data,["country"])

    const get = All(models , country)
    return await models.Exam.findAll({...get});
  }

  static async ById(id , data) {
    const [country] = extractKeys(data,["country"])
    const get = One(models , country)
    return await models.Exam.findByPk(id , {...get});
  }

  static async ExamQuestionById(id ) {
    const get = ExamQuestion(models)
    return await models.Exam.findByPk(id , {...get});
  }

  static async update(id, data) {
    return await models.Exam.update(data, { where: { id } });
  }
}

module.exports = ExamRepository;
