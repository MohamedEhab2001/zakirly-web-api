
const Service = require("..");
const TeacherAvailabilityRepo = require("../../repositories/TeacherAvailability");

class TeacherAvailabilityService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await TeacherAvailabilityRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await TeacherAvailabilityRepo.getAll();
  }

  async getById() {
    return await TeacherAvailabilityRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TeacherAvailabilityRepo.update(this.id, this.data);
  }
}

module.exports = TeacherAvailabilityService;
