
const QuestionService = require("../../services/Question");

const QuestionCreation = async (req, res) => {
    const servant = new QuestionService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const QuestionGetAll = async (req, res) => {
    const servant = new QuestionService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const QuestionGetById = async (req, res) => {
    const servant = new QuestionService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const QuestionUpdate = async (req, res) => {
    const servant = new QuestionService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  QuestionCreation,
  QuestionGetAll,
  QuestionGetById,
  QuestionUpdate,
};
