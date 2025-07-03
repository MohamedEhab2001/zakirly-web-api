
const Service = require("..");
const CourseReviewRepo = require("../../repositories/CourseReview");

class CourseReviewService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await CourseReviewRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await CourseReviewRepo.getAll();
  }

  async getById() {
    return await CourseReviewRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CourseReviewRepo.update(this.id, this.data);
  }
}

module.exports = CourseReviewService;
