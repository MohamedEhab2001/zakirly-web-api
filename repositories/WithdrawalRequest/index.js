const models = require("../../models");

class WithdrawalRequestRepository {
  static async create(data) {
    return await models.WithdrawalRequest.create(data);
  }

  static async getAll(where = {}) {
    return await models.WithdrawalRequest.findAll({
      where,
      include: [
        {
          model: models.Teacher,
          as: "teacher",
          attributes: ["id", "name", "email", "avatar"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });
  }

  static async getByTeacher(teacher_id) {
    return await models.WithdrawalRequest.findAll({
      where: { teacher_id },
      order: [["createdAt", "DESC"]]
    });
  }

  static async getById(id) {
    return await models.WithdrawalRequest.findByPk(id, {
      include: [
        {
          model: models.Teacher,
          as: "teacher",
          attributes: ["id", "name", "email", "avatar"]
        }
      ]
    });
  }

  static async update(id, data) {
    return await models.WithdrawalRequest.update(data, { where: { id } });
  }
}

module.exports = WithdrawalRequestRepository;
