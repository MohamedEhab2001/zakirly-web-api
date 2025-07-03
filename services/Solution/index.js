
const Service = require("..");
const SolutionRepo = require("../../repositories/Solution");
const ExamService = require("../Exam");
const ExamQuestionService = require("../ExamQuestion");
const ChoiceService = require("../Choice");
const QuestionsAnswerService = require("../QuestionsAnswer");
class SolutionService extends Service {
  constructor(data = null, id = null) {
    super(data, id);
  }

  async create() {
    this._checkIfDataProvided(null , ["user_id" , "exam_id" , "answers"]);
    const { user_id, exam_id, answers } = this.data;
    const examServant = new ExamService(null , exam_id);
    const exam = await examServant.getById();
    
    if (!exam) throw new Error("Exam not found");




    const {total , corrected} = await this.#checkIfExamIsMCQ(exam_id , answers);

    const solution = await SolutionRepo.create({
      user_id,
      total,
      attempts_number: 1,
      corrected,
      exam_id
    });
    const qaService = new QuestionsAnswerService(answers , null , solution.id);
    await qaService.bulkCreate();
    return solution;
  }

  async getAll() {
    return await SolutionRepo.getAll();
  }

  async getById() {
    return await SolutionRepo.ById(this.id);
  }

  async update() {
    this._checkIfDataProvided();
    this._checkIfIdProvided();
    return await SolutionRepo.update(this.id, this.data);
  }

  /**------------------------- */
  async #checkIfExamIsMCQ(exam_id , answers) {
    if (exam.type !== "mcq") return {total : 0 , corrected : false};
    let total = 0;
    let corrected = true;
    const questionIds = answers.map(a => a.exam_question_id);
    const examQuestionsService = new ExamQuestionService(null , exam_id);
    const examQuestions = await examQuestionsService.getAll();
    const eqMap = {};
    examQuestions.forEach(eq => { eqMap[eq.id] = eq.question_id; });
    const choicesService = new ChoiceService(null , questionIds);
    const choices = await choicesService.getAll();
    const correctChoices = {};
    choices.forEach(c => { if (c.correct) correctChoices[c.question_id] = c.id; });
    for (const ans of answers) {
      const qid = eqMap[ans.exam_question_id];
      if (qid && ans.choice_id && correctChoices[qid] === ans.choice_id) {
        total += 1;
      }
    }
    return {total , corrected};
  }
}

module.exports = SolutionService;
