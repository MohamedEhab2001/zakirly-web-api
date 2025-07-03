
const SectionService = require("../../services/Section");

const SectionCreation = async (req, res) => {
    const servant = new SectionService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const SectionGetAll = async (req, res) => {
    const servant = new SectionService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const SectionGetById = async (req, res) => {
    const servant = new SectionService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const SectionUpdate = async (req, res) => {
    const servant = new SectionService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  SectionCreation,
  SectionGetAll,
  SectionGetById,
  SectionUpdate,
};
