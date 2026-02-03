
const TeacherAvailabilityService = require("../../services/TeacherAvailability");

const TeacherAvailabilityCreation = async (req, res) => {
    req.body.teacher_id = req.params.id;
    req.body.status = "available";
    const servant = new TeacherAvailabilityService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeacherAvailabilityGetAll = async (req, res) => {
    req.query.teacher_id = req.params.id;

    const servant = new TeacherAvailabilityService(null, req.params.id);
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeacherAvailabilityGetById = async (req, res) => {

    const servant = new TeacherAvailabilityService(null, req.params.availability_id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherAvailabilityUpdate = async (req, res) => {
    req.body.teacher_id = req.params.id;
    const servant = new TeacherAvailabilityService(req.body, req.params.availability_id);
    const record = await servant.update();
    res.status(200).json({ record });
};

const TeacherAvailabilityDelete = async (req, res) => {
    const servant = new TeacherAvailabilityService(null, req.params.availability_id);
    const record = await servant.delete();
    res.status(200).json({ record });
};



module.exports = {
  TeacherAvailabilityCreation,
  TeacherAvailabilityGetAll,
  TeacherAvailabilityGetById,
  TeacherAvailabilityUpdate,
  TeacherAvailabilityDelete,
};
