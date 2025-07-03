
const Service = require("..");
const QuestionsAnswerRepo = require("../../repositories/QuestionsAnswer");

class QuestionsAnswerService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const record = await QuestionsAnswerRepo.create(this.data);
    return record;
  }

  async getAll() {
    return await QuestionsAnswerRepo.getAll();
  }

  async getById() {
    return await QuestionsAnswerRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await QuestionsAnswerRepo.update(this.id, this.data);
  }
}

module.exports = QuestionsAnswerService;
