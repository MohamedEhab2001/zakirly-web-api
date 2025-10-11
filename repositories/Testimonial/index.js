
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class TestimonialRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.Testimonial);
    modelValidate.ModelKeysValidate(data, []);
    return await models.Testimonial.create(data);
  }

  static async getAll() {
    return await models.Testimonial.findAll();
  }

  static async ById(id) {
    return await models.Testimonial.findByPk(id);
  }

  static async update(id, data) {
    return await models.Testimonial.update(data, { where: { id } });
  }

  static async delete(id) {
    return await models.Testimonial.destroy({ where: { id } });
  }

    
}

module.exports = TestimonialRepository;
