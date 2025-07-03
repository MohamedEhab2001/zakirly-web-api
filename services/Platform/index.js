
const Service = require("..");
const PlatformRepo = require("../../repositories/Platform");

class PlatformService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await PlatformRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await PlatformRepo.getAll();
  }

  async getById() {
    return await PlatformRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await PlatformRepo.update(this.id, this.data);
  }
}

module.exports = PlatformService;
