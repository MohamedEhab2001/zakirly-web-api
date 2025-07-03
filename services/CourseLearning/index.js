
const Service = require("..");
const CourseLearningRepo = require("../../repositories/CourseLearning");

class CourseLearningService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await CourseLearningRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await CourseLearningRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await CourseLearningRepo.getAll();
  }

  async getById() {
    return await CourseLearningRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CourseLearningRepo.update(this.id, this.data);
  }
}

module.exports = CourseLearningService;
