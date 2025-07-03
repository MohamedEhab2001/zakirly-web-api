
const CoursePrerequestService = require("../../services/CoursePrerequest");

const CoursePrerequestCreation = async (req, res) => {
    const servant = new CoursePrerequestService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CoursePrerequestGetAll = async (req, res) => {
    const servant = new CoursePrerequestService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CoursePrerequestGetById = async (req, res) => {
    const servant = new CoursePrerequestService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CoursePrerequestUpdate = async (req, res) => {
    const servant = new CoursePrerequestService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CoursePrerequestCreation,
  CoursePrerequestGetAll,
  CoursePrerequestGetById,
  CoursePrerequestUpdate,
};
