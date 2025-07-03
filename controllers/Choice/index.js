
const ChoiceService = require("../../services/Choice");

const ChoiceCreation = async (req, res) => {
    const servant = new ChoiceService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const ChoiceGetAll = async (req, res) => {
    const servant = new ChoiceService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const ChoiceGetById = async (req, res) => {
    const servant = new ChoiceService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const ChoiceUpdate = async (req, res) => {
    const servant = new ChoiceService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  ChoiceCreation,
  ChoiceGetAll,
  ChoiceGetById,
  ChoiceUpdate,
};
