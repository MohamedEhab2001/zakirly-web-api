
const Service = require("..");
const ContactRepo = require("../../repositories/Contact");

class ContactService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await ContactRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await ContactRepo.getAll();
  }

  async getById() {
    return await ContactRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await ContactRepo.update(this.id, this.data);
  }
}

module.exports = ContactService;
