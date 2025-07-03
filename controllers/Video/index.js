
const VideoService = require("../../services/Video");

const VideoCreation = async (req, res) => {
    const servant = new VideoService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const VideoGetAll = async (req, res) => {
    const servant = new VideoService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const VideoGetById = async (req, res) => {
    const servant = new VideoService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const VideoUpdate = async (req, res) => {
    const servant = new VideoService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  VideoCreation,
  VideoGetAll,
  VideoGetById,
  VideoUpdate,
};
