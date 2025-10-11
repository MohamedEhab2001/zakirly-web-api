
const Service = require("..");
const CurriculumRepo = require("../../repositories/Curriculum");

class CurriculumService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await CurriculumRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await CurriculumRepo.getAll();
  }

  async getById() {
    return await CurriculumRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CurriculumRepo.update(this.id, this.data);
  }

  async delete() {
    this._checkIfIdProvided();
    return await CurriculumRepo.delete(this.id);
  }
}

module.exports = CurriculumService;
