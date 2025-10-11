
const Service = require("..");
const LevelRepo = require("../../repositories/Level");

class LevelService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await LevelRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await LevelRepo.getAll();
  }

  async getById() {
    return await LevelRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await LevelRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await LevelRepo.delete(this.id);
  } 
}

module.exports = LevelService;
