
const FAQService = require("../../services/FAQ");

const FAQCreation = async (req, res) => {
    const servant = new FAQService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const FAQGetAll = async (req, res) => {
    const servant = new FAQService(req.query);
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const FAQGetById = async (req, res) => {
    const servant = new FAQService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const FAQUpdate = async (req, res) => {
    const servant = new FAQService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  FAQCreation,
  FAQGetAll,
  FAQGetById,
  FAQUpdate,
};
