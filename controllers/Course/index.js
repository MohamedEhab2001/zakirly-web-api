
const CourseService = require("../../services/Course");

const CourseCreation = async (req, res) => {
    const servant = new CourseService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const CourseGetAll = async (req, res) => {
    const servant = new CourseService({...req.query, country : req.country});
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const CourseGetById = async (req, res) => {
    const servant = new CourseService({country : req.country}, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const CourseUpdate = async (req, res) => {
    const servant = new CourseService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const CourseAddPrice = async (req, res) => {
    const servant = new CourseService(req.body, req.params.id);
    await servant.addPriceToCourse();
    res.status(200).json({ msg : "Created" });
};

module.exports = {
  CourseCreation,
  CourseGetAll,
  CourseGetById,
  CourseUpdate,
  CourseAddPrice
};
