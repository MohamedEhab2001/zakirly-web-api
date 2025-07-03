
const SolutionService = require("../../services/Solution");

const SolutionCreation = async (req, res) => {
    const servant = new SolutionService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const SolutionGetAll = async (req, res) => {
    const servant = new SolutionService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const SolutionGetById = async (req, res) => {
    const servant = new SolutionService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const SolutionUpdate = async (req, res) => {
    const servant = new SolutionService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  SolutionCreation,
  SolutionGetAll,
  SolutionGetById,
  SolutionUpdate,
};
