
const TeacherAvailabilityService = require("../../services/TeacherAvailability");

const TeacherAvailabilityCreation = async (req, res) => {
    const servant = new TeacherAvailabilityService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeacherAvailabilityGetAll = async (req, res) => {
    const servant = new TeacherAvailabilityService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeacherAvailabilityGetById = async (req, res) => {
    const servant = new TeacherAvailabilityService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherAvailabilityUpdate = async (req, res) => {
    const servant = new TeacherAvailabilityService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  TeacherAvailabilityCreation,
  TeacherAvailabilityGetAll,
  TeacherAvailabilityGetById,
  TeacherAvailabilityUpdate,
};
