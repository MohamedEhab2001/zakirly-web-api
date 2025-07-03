
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CategoryRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction();
    const modelValidate = new ModelValidation(models.Category);
    modelValidate.ModelKeysValidate(data, []);
    const record = await models.Category.create(data , {transaction});
    return [record , transaction];
  }

  static async getAll() {
    return await models.Category.findAll();
  }

  static async ById(id) {
    return await models.Category.findByPk(id);
  }

  static async update(id, data) {
    return await models.Category.update(data, { where: { id } });
  }
}

module.exports = CategoryRepository;
