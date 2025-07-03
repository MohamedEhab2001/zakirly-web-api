
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class CourseBookRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.CourseBook);
    modelValidate.ModelKeysValidate(data, []);
    return await models.CourseBook.create(data);
  }

  static async bulkCreate(data,transaction){
    const modelValidate = new ModelValidation(models.CourseBook);
    modelValidate.ModelKeysValidate(data[0], []);
    return await models.CourseBook.bulkCreate(data,{transaction});
  }

  static async getAll() {
    return await models.CourseBook.findAll();
  }

  static async ById(id) {
    return await models.CourseBook.findByPk(id);
  }

  static async update(id, data) {
    return await models.CourseBook.update(data, { where: { id } });
  }
}

module.exports = CourseBookRepository;
