
const ExamService = require("../../services/Exam");

const ExamCreation = async (req, res) => {
    const servant = new ExamService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const ExamGetAll = async (req, res) => {
    const servant = new ExamService({country : req.country});
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const ExamGetById = async (req, res) => {
    const servant = new ExamService({country : req.country}, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const ExamUpdate = async (req, res) => {
    const servant = new ExamService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const ExamAddPrice = async (req, res) => {
    const servant = new ExamService(req.body, req.params.id);
    await servant.addPriceToExam();
    res.status(200).json({ msg : "Price added successfully" });
};

const ExamGetQuestionById = async (req, res) => {
    const servant = new ExamService({country : req.country}, req.params.id);
    const record = await servant.getExamQuestionById();
    res.status(200).json({ record });
};

module.exports = {
  ExamCreation,
  ExamGetAll,
  ExamGetById,
  ExamUpdate,
  ExamAddPrice,
  ExamGetQuestionById,
};
