
const ExamInstructionService = require("../../services/ExamInstruction");

const ExamInstructionCreation = async (req, res) => {
    const servant = new ExamInstructionService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const ExamInstructionGetAll = async (req, res) => {
    const servant = new ExamInstructionService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const ExamInstructionGetById = async (req, res) => {
    const servant = new ExamInstructionService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const ExamInstructionUpdate = async (req, res) => {
    const servant = new ExamInstructionService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  ExamInstructionCreation,
  ExamInstructionGetAll,
  ExamInstructionGetById,
  ExamInstructionUpdate,
};
