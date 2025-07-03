
const ExamQuestionService = require("../../services/ExamQuestion");

const ExamQuestionCreation = async (req, res) => {
    const servant = new ExamQuestionService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const ExamQuestionGetAll = async (req, res) => {
    const servant = new ExamQuestionService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const ExamQuestionGetById = async (req, res) => {
    const servant = new ExamQuestionService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const ExamQuestionUpdate = async (req, res) => {
    const servant = new ExamQuestionService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  ExamQuestionCreation,
  ExamQuestionGetAll,
  ExamQuestionGetById,
  ExamQuestionUpdate,
};
