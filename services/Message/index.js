
const Service = require("..");
const MessageRepo = require("../../repositories/Message");

class MessageService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await MessageRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await MessageRepo.getAll();
  }

  async getById() {
    return await MessageRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await MessageRepo.update(this.id, this.data);
  }
}

module.exports = MessageService;
