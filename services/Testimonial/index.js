
const Service = require("..");
const TestimonialRepo = require("../../repositories/Testimonial");

class TestimonialService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await TestimonialRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await TestimonialRepo.getAll();
  }

  async getById() {
    return await TestimonialRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await TestimonialRepo.update(this.id, this.data);
  }
}

module.exports = TestimonialService;
