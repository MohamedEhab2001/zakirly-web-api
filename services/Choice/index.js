
const Service = require("..");
const ChoiceRepo = require("../../repositories/Choice");

class ChoiceService extends Service {
  constructor(data = null, id = null, transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await ChoiceRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await ChoiceRepo.bulkCreate(this.data, this.transaction);
    return record;
  }

  async getAll() {
    return await ChoiceRepo.getAll();
  }

  async getById() {
    return await ChoiceRepo.ById(this.id);
  }

  async getAllByQuestionIds() {
    return await ChoiceRepo.getAllByQuestionIds(this.data.questionIds);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await ChoiceRepo.update(this.id, this.data);
  }
}

module.exports = ChoiceService;
