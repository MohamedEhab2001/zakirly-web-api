
const CurriculumService = require("../../services/Curriculum");

const CurriculumCreation = async (req, res) => {
    const servant = new CurriculumService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CurriculumGetAll = async (req, res) => {
    const servant = new CurriculumService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CurriculumGetById = async (req, res) => {
    const servant = new CurriculumService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CurriculumUpdate = async (req, res) => {
    const servant = new CurriculumService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CurriculumCreation,
  CurriculumGetAll,
  CurriculumGetById,
  CurriculumUpdate,
};
