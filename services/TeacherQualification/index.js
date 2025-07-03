
const Service = require("..");
const TeacherQualificationRepo = require("../../repositories/TeacherQualification");

class TeacherQualificationService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await TeacherQualificationRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await TeacherQualificationRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await TeacherQualificationRepo.getAll();
  }

  async getById() {
    return await TeacherQualificationRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TeacherQualificationRepo.update(this.id, this.data);
  }
}

module.exports = TeacherQualificationService;
