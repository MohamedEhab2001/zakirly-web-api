
const PlatformService = require("../../services/Platform");

const PlatformCreation = async (req, res) => {
    const servant = new PlatformService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const PlatformGetAll = async (req, res) => {
    const servant = new PlatformService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const PlatformGetById = async (req, res) => {
    const servant = new PlatformService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const PlatformUpdate = async (req, res) => {
    const servant = new PlatformService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  PlatformCreation,
  PlatformGetAll,
  PlatformGetById,
  PlatformUpdate,
};
