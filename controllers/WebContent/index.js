
const WebContentService = require("../../services/WebContent");

const WebContentCreation = async (req, res) => {
    const servant = new WebContentService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const WebContentGetAll = async (req, res) => {
    const servant = new WebContentService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const WebContentGetById = async (req, res) => {
    const servant = new WebContentService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const WebContentUpdate = async (req, res) => {
    const servant = new WebContentService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  WebContentCreation,
  WebContentGetAll,
  WebContentGetById,
  WebContentUpdate,
};
