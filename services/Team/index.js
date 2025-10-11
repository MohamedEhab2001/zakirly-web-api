
const Service = require("..");
const TeamRepo = require("../../repositories/Team");

class TeamService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await TeamRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await TeamRepo.getAll();
  }

  async getById() {
    return await TeamRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TeamRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await TeamRepo.delete(this.id);
  }
}

module.exports = TeamService;
