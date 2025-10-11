
const Service = require("..");
const WebContentRepo = require("../../repositories/WebContent");

class WebContentService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await WebContentRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await WebContentRepo.getAll();
  }

  async getById() {
    return await WebContentRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await WebContentRepo.update(this.id, this.data);
  }
}

module.exports = WebContentService;
