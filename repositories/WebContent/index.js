
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class WebContentRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.WebContent);
    modelValidate.ModelKeysValidate(data, [
    "video_url",
    "video_thumbnail",
    "herosection_title",
    "hersection_slogan",
    "herosection_description",
    "hersection_image_url"
    ]);
    return await models.WebContent.create(data);
  }

  static async getAll() {
    return await models.WebContent.findAll();
  }

  static async ById(id) {
    return await models.WebContent.findByPk(id);
  }

  static async update(id, data) {
    return await models.WebContent.update(data, { where: { id } });
  }
}

module.exports = WebContentRepository;
