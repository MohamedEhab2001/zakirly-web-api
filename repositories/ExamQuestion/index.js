
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class ExamQuestionRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.ExamQuestion);
    modelValidate.ModelKeysValidate(data, []);
    return await models.ExamQuestion.create(data);
  }


  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.ExamQuestion);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.ExamQuestion.bulkCreate(data , {transaction});
  }

  static async getAll(data) {
    return await models.ExamQuestion.findAll({where : data , attributes : ["id" , "question_id" , "exam_id"]});
  }

  static async ById(id) {
    return await models.ExamQuestion.findByPk(id);
  }

  static async update(id, data) {
    return await models.ExamQuestion.update(data, { where: { id } });
  }
}

module.exports = ExamQuestionRepository;
