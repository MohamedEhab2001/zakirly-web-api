
const Service = require("..");
const FAQRepo = require("../../repositories/FAQ");

class FAQService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await FAQRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await FAQRepo.getAll(this.data);
  }

  async getById() {
    return await FAQRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await FAQRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await FAQRepo.delete(this.id);
  }
}

module.exports = FAQService;
