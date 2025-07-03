
const QuestionsAnswerService = require("../../services/QuestionsAnswer");

const QuestionsAnswerCreation = async (req, res) => {
    const servant = new QuestionsAnswerService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const QuestionsAnswerGetAll = async (req, res) => {
    const servant = new QuestionsAnswerService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const QuestionsAnswerGetById = async (req, res) => {
    const servant = new QuestionsAnswerService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const QuestionsAnswerUpdate = async (req, res) => {
    const servant = new QuestionsAnswerService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  QuestionsAnswerCreation,
  QuestionsAnswerGetAll,
  QuestionsAnswerGetById,
  QuestionsAnswerUpdate,
};
