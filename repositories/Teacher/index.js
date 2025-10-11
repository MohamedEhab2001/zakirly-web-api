
const models = require("../../models");
const sequalize = require("../../models").sequelize;
const ModelValidation = require("../../helpers/Validations/ModelValidation");
const {One , All} = require("./Shapes") 
class TeacherRepository {
  static async create(data) {
    const transaction = await sequalize.transaction();
    const modelValidate = new ModelValidation(models.Teacher);
    modelValidate.ModelKeysValidate(data, []);
    const record = await models.Teacher.create(data, { transaction });
    return [record , transaction]
  }

  static async getAll() {
    const shape = All(models)
    return await models.Teacher.findAll({...shape});
  }

    static async findByEmail(email){
      return await models.Teacher.findOne({ where : {email}})
    }
  static async ById(id) {
    const shape = One(models)
    return await models.Teacher.findByPk(id , {...shape});
  }

  static async update(id, data) {
    return await models.Teacher.update(data, { where: { id } });
  }

  static async delete(id) {
    return await models.Teacher.destroy({ where: { id } });
  }

}

module.exports = TeacherRepository;
