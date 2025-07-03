
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TeamRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Team);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Team.create(data);
  }

  static async getAll() {
    return await models.Team.findAll();
  }

  static async ById(id) {
    return await models.Team.findByPk(id);
  }

  static async update(id, data) {
    return await models.Team.update(data, { where: { id } });
  }
}

module.exports = TeamRepository;
