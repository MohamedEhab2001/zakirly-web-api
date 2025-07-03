
const Service = require("..");
const VideoRepo = require("../../repositories/Video");

class VideoService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await VideoRepo.create(this.data);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    const record = await VideoRepo.bulkCreate(this.data);
    return record;
  }

  async getAll() {
    return await VideoRepo.getAll();
  }

  async getById() {
    return await VideoRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await VideoRepo.update(this.id, this.data);
  }
}

module.exports = VideoService;
