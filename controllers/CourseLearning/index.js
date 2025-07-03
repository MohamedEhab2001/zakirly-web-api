
const CourseLearningService = require("../../services/CourseLearning");

const CourseLearningCreation = async (req, res) => {
    const servant = new CourseLearningService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CourseLearningGetAll = async (req, res) => {
    const servant = new CourseLearningService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CourseLearningGetById = async (req, res) => {
    const servant = new CourseLearningService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CourseLearningUpdate = async (req, res) => {
    const servant = new CourseLearningService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CourseLearningCreation,
  CourseLearningGetAll,
  CourseLearningGetById,
  CourseLearningUpdate,
};
