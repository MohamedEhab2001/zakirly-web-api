
const TeamService = require("../../services/Team");

const TeamCreation = async (req, res) => {
    const servant = new TeamService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeamGetAll = async (req, res) => {
    const servant = new TeamService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeamGetById = async (req, res) => {
    const servant = new TeamService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeamUpdate = async (req, res) => {
    const servant = new TeamService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const TeamDelete = async (req, res) => {
    const servant = new TeamService(null, req.params.id);
    const record = await servant.delete();
    res.status(200).json({ record });
};

module.exports = {
  TeamCreation,
  TeamGetAll,
  TeamGetById,
  TeamUpdate,
  TeamDelete,
};
