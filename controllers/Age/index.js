
const AgeService = require("../../services/Age");

const AgeCreation = async (req, res) => {
    const servant = new AgeService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const AgeGetAll = async (req, res) => {
    const servant = new AgeService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const AgeGetById = async (req, res) => {
    const servant = new AgeService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const AgeUpdate = async (req, res) => {
    const servant = new AgeService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const AgeDelete = async (req, res) => {
    const servant = new AgeService(null, req.params.id);
    const record = await servant.delete();
    res.status(200).json({ record });
};

module.exports = {
  AgeCreation,
  AgeGetAll,
  AgeGetById,
  AgeUpdate,
  AgeDelete,
};
