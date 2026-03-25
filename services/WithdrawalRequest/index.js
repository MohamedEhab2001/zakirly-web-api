const Service = require("..");
const WithdrawalRequestRepo = require("../../repositories/WithdrawalRequest");

class WithdrawalRequestService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided(null, ["amount", "method"]);
    return await WithdrawalRequestRepo.create(this.data);
  }

  async getAll(where = {}) {
    return await WithdrawalRequestRepo.getAll(where);
  }

  async getByTeacher(teacher_id) {
    return await WithdrawalRequestRepo.getByTeacher(teacher_id);
  }

  async getById() {
    this._checkIfIdProvided();
    return await WithdrawalRequestRepo.getById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await WithdrawalRequestRepo.update(this.id, this.data);
  }
}

module.exports = WithdrawalRequestService;
