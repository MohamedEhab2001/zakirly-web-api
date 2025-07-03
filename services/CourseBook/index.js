
const Service = require("..");
const CourseBookRepo = require("../../repositories/CourseBook");

class CourseBookService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await CourseBookRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await CourseBookRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await CourseBookRepo.getAll();
  }

  async getById() {
    return await CourseBookRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CourseBookRepo.update(this.id, this.data);
  }
}

module.exports = CourseBookService;
