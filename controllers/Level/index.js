
const LevelService = require("../../services/Level");

const LevelCreation = async (req, res) => {
    const servant = new LevelService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const LevelGetAll = async (req, res) => {
    const servant = new LevelService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const LevelGetById = async (req, res) => {
    const servant = new LevelService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const LevelUpdate = async (req, res) => {
    const servant = new LevelService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const LevelDelete = async (req, res) => {
    const servant = new LevelService(null, req.params.id);
    const record = await servant.delete();
    res.status(200).json({ record });
};

module.exports = {
  LevelCreation,
  LevelGetAll,
  LevelGetById,
  LevelUpdate,
  LevelDelete,
};
