
const TeacherService = require("../../services/Teacher");

const TeacherCreation = async (req, res) => {
    const servant = new TeacherService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeacherGetAll = async (req, res) => {
    const servant = new TeacherService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeacherProfile = async (req, res) => {
    const servant = new TeacherService(null, req.auth.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherGetById = async (req, res) => {
    const servant = new TeacherService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherUpdate = async (req, res) => {
    const servant = new TeacherService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const TeacherDelete = async (req, res) => {
    const servant = new TeacherService(null, req.params.id);
    const record = await servant.delete();
    res.status(200).json({ record });
};

const TeacherLogin = async (req, res) => {
    const servant = new TeacherService(req.body);
    const record = await servant.login();
    res.status(200).json({ record });
};

module.exports = {
  TeacherCreation,
  TeacherGetAll,
  TeacherGetById,
  TeacherUpdate,
  TeacherLogin,
  TeacherDelete,
  TeacherProfile
};
