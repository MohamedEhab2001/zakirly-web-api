
const Service = require("..");
const OrderProductRepo = require("../../repositories/OrderProduct");

class OrderProductService extends Service {
  constructor(data = null, id = null , transaction = null) {
    super(data, id);
    this.transaction = transaction;
  }

  async create() {
    this._checkIfDataProvided();
    const record = await OrderProductRepo.create(this.data , this.transaction);
    return record;
  }

  async bulkCreate() {
    this._checkIfDataProvided();
    
    const record = await OrderProductRepo.bulkCreate(this.data , this.transaction);
    return record;
  }

  async getAll() {
    return await OrderProductRepo.getAll();
  }

  async getById() {
    return await OrderProductRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await OrderProductRepo.update(this.id, this.data);
  }
}

module.exports = OrderProductService;
