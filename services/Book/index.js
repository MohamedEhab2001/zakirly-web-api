
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
      entity_id: record.id,
      type: "book"
    }))

    const pricesService = new PricesService(prices, null, transaction);
    await pricesService.bulkCreate();

    await transaction.commit();

    return record;
  }

  async getAll() {
    const records = await BookRepo.getAll(this.data);
    if (this.data.admin == "true") {
      return records;
    }
    return records.filter(record => record.prices && record.prices.some(p => p.price > 0));
  }

  async getById() {
    return await BookRepo.ById(this.data, this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();

    // First, update the main book record
    const record = await BookRepo.update(this.id, this.data);

    // If there is prices data submitted, synchronize it
    if (this.data.prices && Array.isArray(this.data.prices)) {
      const models = require("../../models");

      // We remove the old prices representing this book regardless of id
      await models.Prices.destroy({
        where: {
          entity_id: this.id,
          type: "book"
        }
      });

      // Filter to apply only valid prices (>0) or keep all to let UI dictate missing vs mapped
      const validPrices = this.data.prices
        .filter(p => Number(p.price) > 0)
        .map(price => ({
          ...price,
          entity_id: this.id,
          type: "book"
        }));

      if (validPrices.length > 0) {
        const pricesService = new PricesService(validPrices, null);
        await pricesService.bulkCreate();
      }
    }

    return record;
  }


  async addPriceToBook() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();


    const pricesService = new PricesService({ ...this.data, entity_id: this.id, type: "book" }, null);
    await pricesService.create();
  }

  async delete() {
    this._checkIfIdProvided();
    const models = require("../../models");
    await models.Prices.destroy({
      where: {
        entity_id: this.id,
        type: "book"
      }
    });

    return await BookRepo.delete(this.id);
  }

}

module.exports = BookService;
