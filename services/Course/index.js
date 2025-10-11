
const Service = require("..");
const CourseRepo = require("../../repositories/Course");
const CourseBookService = require("../CourseBook");
const CourseLearningService = require("../CourseLearning");
const CoursePrerequestService = require("../CoursePrerequest");
const PricesService = require("../Prices");


class CourseService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided(null , ["books" , "learnings" , "prerequests" , "prices"]);
    const [record, transaction] = await CourseRepo.create(this.data);


    const books = this.data.books.map(book => ({
      book_id : book,
      course_id : record.id
    }))

    const learnings = this.data.learnings.map(learning => ({
      ...learning,
      course_id : record.id
    }))

    const prerequests = this.data.prerequests.map(prerequest => ({
      ...prerequest,
      course_id : record.id
    }))

    const prices = this.data.prices.map(price => ({
      ...price,
      entity_id : record.id,
      type : "course"
    }))
    

    const courseBookService = new CourseBookService(books , null , transaction);
    await courseBookService.bulkCreate();

    const courseLearningService = new CourseLearningService(learnings , null , transaction);
    await courseLearningService.bulkCreate();

    const coursePrerequestService = new CoursePrerequestService(prerequests , null , transaction);
    await coursePrerequestService.bulkCreate();

    const pricesService = new PricesService(prices , null , transaction);
    await pricesService.bulkCreate();

    await transaction.commit();

    return record;
  }

  async getAll() {
    return await CourseRepo.getAll(this.data);
  }

  async getById() {
    return await CourseRepo.ById(this.data,this.id);
  }

  async addPriceToCourse() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    const pricesService = new PricesService({...this.data , entity_id : this.id , type : "course"});
    await pricesService.create();
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await CourseRepo.update(this.id, this.data);
  }
}

module.exports = CourseService;
