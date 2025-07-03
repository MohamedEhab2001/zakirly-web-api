
const CourseBookService = require("../../services/CourseBook");

const CourseBookCreation = async (req, res) => {
    const servant = new CourseBookService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CourseBookGetAll = async (req, res) => {
    const servant = new CourseBookService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CourseBookGetById = async (req, res) => {
    const servant = new CourseBookService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CourseBookUpdate = async (req, res) => {
    const servant = new CourseBookService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  CourseBookCreation,
  CourseBookGetAll,
  CourseBookGetById,
  CourseBookUpdate,
};
