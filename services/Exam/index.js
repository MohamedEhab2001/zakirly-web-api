
const Service = require("..");
const ExamRepo = require("../../repositories/Exam");
const ExamInstructionService = require("../ExamInstruction");
const ExamPrerequestService = require("../ExamPrerequest");
const ExamQuestionService = require("../ExamQuestion");
class ExamService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided(null , ["instructions" , "prerequests" , "questions"]);
    const [record , transaction] = await ExamRepo.create(this.data);
    

    const instructions = this.data.instructions.map(ins => ({
      ...ins,
      exam_id:record.id
    }))

    const prerequests = this.data.prerequests.map(pre => ({
      ...pre,
      exam_id:record.id
    }))

    const questions = this.data.questions.map(q => ({
      ...q,
      exam_id:record.id
    }))

    const examIns = new ExamInstructionService(instructions , null , transaction);
    await examIns.bulkCreate();

    const examPre = new ExamPrerequestService(prerequests , null , transaction);
    await examPre.bulkCreate();

    const examQues = new ExamQuestionService(questions , null , transaction);
    await examQues.bulkCreate();
    
    await transaction.commit();
    

    return record;
  }

  async getAll() {
    return await ExamRepo.getAll();
  }

  async getById() {
    return await ExamRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await ExamRepo.update(this.id, this.data);
  }
}

module.exports = ExamService;
