
const Service = require("..");
const ExamQuestionRepo = require("../../repositories/ExamQuestion");

class ExamQuestionService extends Service {
  constructor(data = null, id = null, transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await ExamQuestionRepo.create(this.data);
    return record;
  }


  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await ExamQuestionRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await ExamQuestionRepo.getAll(this.data);
  }

  async getById() {
    return await ExamQuestionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await ExamQuestionRepo.update(this.id, this.data);
  }
}

module.exports = ExamQuestionService;
