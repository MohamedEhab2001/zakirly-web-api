
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class VideoRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Video);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Video.create(data);
  }

  static async bulkCreate(data , transaction) {
    const modelValidate = new ModelValidation(models.Video);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.Video.bulkCreate(data , {transaction});
  }

  static async getAll() {
    return await models.Video.findAll();
  }

  static async ById(id) {
    return await models.Video.findByPk(id);
  }

  static async update(id, data) {
    return await models.Video.update(data, { where: { id } });
  }
}

module.exports = VideoRepository;
