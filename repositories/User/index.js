
const models = require("../../models");
const ModelValidation = require("../../helpers/Validations/ModelValidation");

class UserRepository {
  static async create(data) {
    const modelValidate = new ModelValidation(models.User);
    modelValidate.ModelKeysValidate(data, []);
    return await models.User.create(data);
  }

  static async getAll() {
    return await models.User.findAll();
  }

  static async ById(id) {
    return await models.User.findByPk(id , {
      include : [
        {
          model : models.Order,
          as : "orders",
          required : false,
          include : [
            {
              model : models.OrderProduct,
              as : "products",
              include : [
                {
                  model : models.Course,
                  as : "course",
                },
                {
                  model : models.Book,
                  as : "book",
                }
              ]
            }
          ]
        }
      ]
    });
  }

  static async update(id, data) {
    return await models.User.update(data, { where: { id } });
  }

  static async findByEmail(email) {
    return await models.User.findOne({ where: { email } });
  }
}

module.exports = UserRepository;
