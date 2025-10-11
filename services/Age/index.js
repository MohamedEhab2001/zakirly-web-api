
const Service = require("..");
const AgeRepo = require("../../repositories/Age");

class AgeService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await AgeRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await AgeRepo.getAll();
  }

  async getById() {
    return await AgeRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await AgeRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await AgeRepo.delete(this.id);
  }
}

module.exports = AgeService;
