
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");
const {extractKeys} = require("../../helpers/HelperMethods");
const { All , One } = require("./Shapes");
class CourseRepository {
  static async create(data) {
    const transaction = await models.sequelize.transaction();
    const modelValidate = new ModelValidation(models.Course);
    modelValidate.ModelKeysValidate(data, ["discount"]);
    const record = await models.Course.create(data , {transaction});
    return [record , transaction];
  }

  static async getAll(data) {
    const [country] = extractKeys(data,["country"])

    return await models.Course.findAll({ where : data , ...All(models , country) });
  }

  static async ById(data,id) {
    const [country] = extractKeys(data,["country"])
    return await models.Course.findByPk(id , { ...One(models , country) });
  }

  static async update(id, data) {
    return await models.Course.update(data, { where: { id } });
  }
}

module.exports = CourseRepository;
