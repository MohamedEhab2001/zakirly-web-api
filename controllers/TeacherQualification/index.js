
const TeacherQualificationService = require("../../services/TeacherQualification");

const TeacherQualificationCreation = async (req, res) => {
    const servant = new TeacherQualificationService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeacherQualificationGetAll = async (req, res) => {
    const servant = new TeacherQualificationService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeacherQualificationGetById = async (req, res) => {
    const servant = new TeacherQualificationService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherQualificationUpdate = async (req, res) => {
    const servant = new TeacherQualificationService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  TeacherQualificationCreation,
  TeacherQualificationGetAll,
  TeacherQualificationGetById,
  TeacherQualificationUpdate,
};
