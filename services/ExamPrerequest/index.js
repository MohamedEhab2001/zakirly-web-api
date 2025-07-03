
const Service = require("..");
const ExamPrerequestRepo = require("../../repositories/ExamPrerequest");

class ExamPrerequestService extends Service {
  constructor(data = null, id = null, transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await ExamPrerequestRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await ExamPrerequestRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await ExamPrerequestRepo.getAll();
  }

  async getById() {
    return await ExamPrerequestRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await ExamPrerequestRepo.update(this.id, this.data);
  }
}

module.exports = ExamPrerequestService;
