
const Service = require("..");
const PricesRepo = require("../../repositories/Prices");

class PricesService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await PricesRepo.create(this.data);
    return record;
  }

    async bulkCreate() {
      this._checkIfDataProvided();
      const record = await PricesRepo.bulkCreate(this.data , this.transaction);
      return record; 
    }

  async getAll() {
    return await PricesRepo.getAll();
  }

  async getById() {
    return await PricesRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await PricesRepo.update(this.id, this.data);
  }
}

module.exports = PricesService;
