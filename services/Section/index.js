
const Service = require("..");
const SectionRepo = require("../../repositories/Section");

class SectionService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await SectionRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await SectionRepo.getAll();
  }

  async getById() {
    return await SectionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await SectionRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await SectionRepo.delete(this.id);
  }
}

module.exports = SectionService;
