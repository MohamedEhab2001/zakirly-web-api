
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CoursePrerequestRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.CoursePrerequest);
    modelValidate.ModelKeysValidate(data, []);
    return await models.CoursePrerequest.create(data);
  }

  static async bulkCreate(data,transaction){
    const modelValidate = new ModelValidation(models.CoursePrerequest);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.CoursePrerequest.bulkCreate(data,{transaction});
  }

  static async getAll() {
    return await models.CoursePrerequest.findAll();
  }

  static async ById(id) {
    return await models.CoursePrerequest.findByPk(id);
  }

  static async update(id, data) {
    return await models.CoursePrerequest.update(data, { where: { id } });
  }
}

module.exports = CoursePrerequestRepository;
