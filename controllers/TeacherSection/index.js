
const TeacherSectionService = require("../../services/TeacherSection");

const TeacherSectionCreation = async (req, res) => {
    const servant = new TeacherSectionService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeacherSectionGetAll = async (req, res) => {
    const servant = new TeacherSectionService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeacherSectionGetById = async (req, res) => {
    const servant = new TeacherSectionService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherSectionUpdate = async (req, res) => {
    const servant = new TeacherSectionService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  TeacherSectionCreation,
  TeacherSectionGetAll,
  TeacherSectionGetById,
  TeacherSectionUpdate,
};
