
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class ExamInstructionRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.ExamInstruction);
    modelValidate.ModelKeysValidate(data, []);
    return await models.ExamInstruction.create(data);
  }

  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.ExamInstruction);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.ExamInstruction.bulkCreate(data , {transaction});
  }

  static async getAll() {
    return await models.ExamInstruction.findAll();
  }

  static async ById(id) {
    return await models.ExamInstruction.findByPk(id);
  }

  static async update(id, data) {
    return await models.ExamInstruction.update(data, { where: { id } });
  }
}

module.exports = ExamInstructionRepository;
