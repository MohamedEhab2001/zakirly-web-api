
const Service = require("..");
const AvailabilityRepo = require("../../repositories/Availability");

class AvailabilityService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await AvailabilityRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await AvailabilityRepo.getAll();
  }

  async getById() {
    return await AvailabilityRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await AvailabilityRepo.update(this.id, this.data);
  }
}

module.exports = AvailabilityService;
