
const Service = require("..");
const NewsletterRepo = require("../../repositories/Newsletter");

class NewsletterService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await NewsletterRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await NewsletterRepo.getAll();
  }

  async getById() {
    return await NewsletterRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await NewsletterRepo.update(this.id, this.data);
  }
}

module.exports = NewsletterService;
