
const Service = require("..");
const BookRepo = require("../../repositories/Book");
const PricesService = require("../Prices");

class BookService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const [record, transaction] = await BookRepo.create(this.data);

    const prices = this.data.prices.map(price => ({
      ...price,
      entity_id : record.id,
      type : "book"
    }))

    const pricesService = new PricesService(prices , null , transaction);
    await pricesService.bulkCreate();

    await transaction.commit();

    return record;
  }

  async getAll() {
    return await BookRepo.getAll(this.data);
  }

  async getById() {
    return await BookRepo.ById(this.data,this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await BookRepo.update(this.id, this.data);
  }


  async addPriceToBook() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();


    const pricesService = new PricesService({...this.data , entity_id : this.id , type : "book"} , null);
    await pricesService.create();
  }


}

module.exports = BookService;
