
const Service = require("..");
const TeacherReviewRepo = require("../../repositories/TeacherReview");

class TeacherReviewService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await TeacherReviewRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await TeacherReviewRepo.getAll();
  }

  async getById() {
    return await TeacherReviewRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TeacherReviewRepo.update(this.id, this.data);
  }
}

module.exports = TeacherReviewService;
