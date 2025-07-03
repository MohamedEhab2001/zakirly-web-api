
const ExamPrerequestService = require("../../services/ExamPrerequest");

const ExamPrerequestCreation = async (req, res) => {
    const servant = new ExamPrerequestService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const ExamPrerequestGetAll = async (req, res) => {
    const servant = new ExamPrerequestService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const ExamPrerequestGetById = async (req, res) => {
    const servant = new ExamPrerequestService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const ExamPrerequestUpdate = async (req, res) => {
    const servant = new ExamPrerequestService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  ExamPrerequestCreation,
  ExamPrerequestGetAll,
  ExamPrerequestGetById,
  ExamPrerequestUpdate,
};
