
const Service = require("..");
const TeacherSectionRepo = require("../../repositories/TeacherSection");

class TeacherSectionService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await TeacherSectionRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await TeacherSectionRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await TeacherSectionRepo.getAll();
  }

  async getById() {
    return await TeacherSectionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TeacherSectionRepo.update(this.id, this.data);
  }
}

module.exports = TeacherSectionService;
