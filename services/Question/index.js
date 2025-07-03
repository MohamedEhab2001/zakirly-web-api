
const Service = require("..");
const QuestionRepo = require("../../repositories/Question");
const ChoiceService = require("../Choice");

class QuestionService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided();
    const [record , transaction] = await QuestionRepo.create(this.data);

    if(this.data.choices){
      const choices = this.data.choices.map(ch => ({
        ...ch,
        question_id:record.id
      }))
      const choiceService = new ChoiceService(choices, null, transaction);
      await choiceService.bulkCreate();
    }


    await transaction.commit();

    return record;
  }

  async getAll() {
    return await QuestionRepo.getAll();
  }

  async getById() {
    return await QuestionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await QuestionRepo.update(this.id, this.data);
  }
}

module.exports = QuestionService;
