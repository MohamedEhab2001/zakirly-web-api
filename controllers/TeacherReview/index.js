
const TeacherReviewService = require("../../services/TeacherReview");

const TeacherReviewCreation = async (req, res) => {
    const servant = new TeacherReviewService(req.body);
    const record = await servant.create();
    res.status(201).json({ ...record });
};

const TeacherReviewGetAll = async (req, res) => {
    const servant = new TeacherReviewService();
    const records = await servant.getAll();
    res.status(200).json({ records });
};

const TeacherReviewGetById = async (req, res) => {
    const servant = new TeacherReviewService(null, req.params.id);
    const record = await servant.getById();
    res.status(200).json({ record });
};

const TeacherReviewUpdate = async (req, res) => {
    const servant = new TeacherReviewService(req.body, req.params.id);
    const record = await servant.update();
    res.status(200).json({ record });
};

module.exports = {
  TeacherReviewCreation,
  TeacherReviewGetAll,
  TeacherReviewGetById,
  TeacherReviewUpdate,
};
