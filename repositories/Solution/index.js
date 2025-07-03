
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class SolutionRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Solution);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Solution.create(data);
  }

  static async getAll() {
    return await models.Solution.findAll();
  }

  static async ById(id) {
    return await models.Solution.findByPk(id);
  }

  static async update(id, data) {
    return await models.Solution.update(data, { where: { id } });
  }
}

module.exports = SolutionRepository;
