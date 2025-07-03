
const Service = require("..");
const SolutionRepo = require("../../repositories/Solution");

class SolutionService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await SolutionRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await SolutionRepo.getAll();
  }

  async getById() {
    return await SolutionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await SolutionRepo.update(this.id, this.data);
  }
}

module.exports = SolutionService;
