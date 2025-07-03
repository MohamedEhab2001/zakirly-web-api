const Service = require("..");
const CurrencyRepo = require("../../repositories/Currency");

class CurrencyService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await CurrencyRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await CurrencyRepo.getAll();
  }

  async getById() {
    return await CurrencyRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CurrencyRepo.update(this.id, this.data);
  }
}

module.exports = CurrencyService;
