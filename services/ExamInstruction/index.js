
const Service = require("..");
const ExamInstructionRepo = require("../../repositories/ExamInstruction");

class ExamInstructionService extends Service {
  constructor(data = null, id = null, transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await ExamInstructionRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await ExamInstructionRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await ExamInstructionRepo.getAll();
  }

  async getById() {
    return await ExamInstructionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await ExamInstructionRepo.update(this.id, this.data);
  }
}

module.exports = ExamInstructionService;
