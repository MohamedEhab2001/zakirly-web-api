
const Service = require("..");
const CoursePrerequestRepo = require("../../repositories/CoursePrerequest");

class CoursePrerequestService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await CoursePrerequestRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await CoursePrerequestRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await CoursePrerequestRepo.getAll();
  }

  async getById() {
    return await CoursePrerequestRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CoursePrerequestRepo.update(this.id, this.data);
  }
}

module.exports = CoursePrerequestService;
