
const MessageService = require("../../services/Message");

const MessageCreation = async (req, res) => {
    const servant = new MessageService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const MessageGetAll = async (req, res) => {
    const servant = new MessageService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const MessageGetById = async (req, res) => {
    const servant = new MessageService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const MessageUpdate = async (req, res) => {
    const servant = new MessageService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  MessageCreation,
  MessageGetAll,
  MessageGetById,
  MessageUpdate,
};
